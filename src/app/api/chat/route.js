import { NextResponse } from 'next/server';

// NOTE: This text must be populated by your local script (prepare_policies.py).
// It contains the combined text of all your ONDC and "Laws of the Land" policy documents.
// Ensure each document starts with a clear marker like "--- DOCUMENT NAME (LINK) ---"
// for the LLM to successfully extract the document_name and document_link fields.
import { combinedPolicyText } from '../../policy_documents'; 

// IMPORTANT: The API key is securely read from the environment variable set on Vercel.
const apiKey = process.env.GEMINI_API_KEY; 
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

// Helper function to handle exponential backoff for API retries
const fetchWithRetry = async (url, options, maxRetries = 5) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                return response;
            }
            // Throw error for non-successful responses to trigger retry
            throw new Error(`API returned status ${response.status}`);
        } catch (error) {
            if (i === maxRetries - 1) {
                // Throw final error after all retries fail
                throw new Error("API failed after multiple retries.");
            }
            // Exponential backoff
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

export async function POST(req) {
    try {
        const { userPrompt } = await req.json();

        // ----------------------------------------------------------------------
        // 1. SYSTEM INSTRUCTION (Feedback #2: Legal Priority)
        // ----------------------------------------------------------------------
        const systemPrompt = `You are the ONDC Policy Expert, an RAG system. Your only source of truth is the policy text provided below.

Your goal is to extract relevant compliance obligations and structure them into a comprehensive JSON checklist.

CRITICAL INSTRUCTION: You MUST follow a hierarchy for legal obligations:
1. Prioritize finding and stating compliance obligations based on 'Laws of the Land' documents first.
2. Cross-reference and provide secondary obligations from 'ONDC Network Policy' or other specific ONDC Circulars.

Ensure every checklist item is extracted directly from the provided text.

The user's query is: ${userPrompt}
The complete policy context follows:
---
${combinedPolicyText}
---
`;

        // ----------------------------------------------------------------------
        // 2. GENERATION CONFIG & SCHEMA (Feedback #3 & #4: Expandable/Clickable)
        // ----------------------------------------------------------------------
        const payload = {
            contents: [{ parts: [{ text: userPrompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            
            // Tool for grounding (optional, but good for real-time relevance)
            // tools: [{ "google_search": {} }], 

            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            "category_title": { 
                                "type": "STRING", 
                                "description": "The major category or section title, e.g., 'Food Safety Laws', 'Legal Metrology Laws'." 
                            },
                            "checklist_items": {
                                "type": "ARRAY",
                                "items": {
                                    type: "OBJECT",
                                    properties: {
                                        "rule_name": { 
                                            "type": "STRING", 
                                            "description": "A concise title for the specific rule, e.g., 'Packaging & Labeling', 'Product Recall'." 
                                        },
                                        // Feedback #3: New summary field
                                        "summary": { 
                                            "type": "STRING", 
                                            "description": "A concise, single-sentence summary of the compliance point for the initial view." 
                                        },
                                        // Feedback #3: New detailed field
                                        "full_compliance_detail": { 
                                            "type": "STRING", 
                                            "description": "The detailed, complete explanation of the compliance obligation, reserved for expansion." 
                                        },
                                        // Feedback #4: New source citation fields
                                        "source_reference": {
                                            "type": "STRING",
                                            "description": "The exact clause or section citation from the policy, e.g., 'Section 1.1.1' or 'Article 45'."
                                        },
                                        "document_name": {
                                            "type": "STRING",
                                            "description": "The full name of the source document, e.g., 'ONDC Compliance Handbook V1.0'."
                                        },
                                        "document_link": {
                                            "type": "STRING",
                                            "description": "The full, clickable URL for the original source document."
                                        }
                                    },
                                    required: ["rule_name", "summary", "full_compliance_detail"]
                                }
                            }
                        },
                        required: ["category_title", "checklist_items"]
                    }
                }
            }
        };

        const response = await fetchWithRetry(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        // Safely extract the JSON string content
        const jsonText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!jsonText) {
            console.error("Gemini API failed to return JSON content:", result);
            return NextResponse.json({ error: "API response was invalid or empty." }, { status: 500 });
        }
        
        // Return the raw JSON string to the frontend for parsing
        return NextResponse.json({ responseText: jsonText });

    } catch (error) {
        console.error("Error processing request:", error.message);
        return NextResponse.json({ error: "Network Error: Could not connect to the server or API failed after multiple retries." }, { status: 500 });
    }
}
