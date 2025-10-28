import { NextResponse } from 'next/server';

// NOTE: Corrected path for RAG data:
// Assuming 'route.js' is in /src/app/api/chat/ and 'policy_documents' is in /src/
import { combinedPolicyText } from '../../../policy_documents'; 

// IMPORTANT: The API key is securely read from the environment variable set on Vercel.
const apiKey = process.env.GEMINI_API_KEY; 
const MODEL_NAME = "gemini-2.5-flash-preview-09-2025"; 
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`;

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
            // console.log(`Retrying in ${delay.toFixed(0)}ms...`); // Debugging line
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

export async function POST(req) {
    try {
        // Correctly extract all necessary fields from the frontend
        const { query, persona, category } = await req.json();

        if (!query || !persona || !category) {
            return NextResponse.json({ 
                error: "Missing one or more required fields (query, persona, category)." 
            }, { status: 400 });
        }

        // ----------------------------------------------------------------------
        // 1. SYSTEM INSTRUCTION: Dynamic Context and Legal Priority
        // ----------------------------------------------------------------------
        const systemPrompt = `You are the ONDC Policy Expert, an RAG system. Your persona is a **${persona}** and the business category being advised is **${category}**. Your only source of truth is the policy text provided below.

Your goal is to extract relevant compliance obligations and structure them into a JSON checklist.

CRITICAL INSTRUCTION: You MUST tailor your response specifically to the ${persona} in the context of the ${category} business, following this hierarchy for legal obligations:
1. Prioritize finding and stating compliance obligations based on 'Laws of the Land' documents first.
2. Cross-reference and provide secondary obligations from 'ONDC Network Policy' or other specific ONDC Circulars.

Ensure every checklist item is extracted directly from the provided text.

The user's query is: ${query}
The complete policy context follows:
---
${combinedPolicyText}
---
`;

        // ----------------------------------------------------------------------
        // 2. GENERATION CONFIG & SCHEMA (Simplified Checklist Array)
        // ----------------------------------------------------------------------
        const payload = {
            contents: [{ parts: [{ text: query }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            "rule_name": {  
                                "type": "STRING",  
                                "description": "A concise title for the specific compliance rule, e.g., 'Labeling Requirement' or 'Grievance Redressal Timeline'."  
                            },
                            "summary": {  
                                "type": "STRING",  
                                "description": "A concise, single-sentence summary of the compliance point for the initial checklist view."  
                            },
                            "full_compliance_detail": {  
                                "type": "STRING",  
                                "description": "The detailed, complete explanation of the compliance obligation, reserved for expansion. Must be derived directly from the policy text."  
                            },
                            "source_reference": {
                                "type": "STRING",
                                "description": "The exact clause or section citation from the policy, e.g., 'Section 1.1.1' or 'Article 45'."
                            },
                            "document_name": {
                                "type": "STRING",
                                "description": "The full name of the source document, e.g., 'ONDC Compliance Handbook V1.0'. MUST be extracted from the '--- FILE:' marker in the policy text."
                            },
                            "document_link": {
                                "type": "STRING",
                                "description": "The full, clickable URL for the original source document. MUST be extracted from the policy text."
                            }
                        },
                        required: ["rule_name", "summary", "full_compliance_detail", "document_name", "document_link"]
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
            // Check for potential API error message in the response
            const errorMessage = result?.error?.message || "API response was invalid or empty.";
            return NextResponse.json({ error: errorMessage }, { status: 500 });
        }
        
        // Return the raw JSON string to the frontend for parsing
        return NextResponse.json({ responseText: jsonText });

    } catch (error) {
        console.error("Error processing request:", error.message);
        return NextResponse.json({ error: "Network Error: Could not connect to the server or API failed after multiple retries." }, { status: 500 });
    }
}
