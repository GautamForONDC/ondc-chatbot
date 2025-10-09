import { combinedPolicyText } from '@/policy_documents';
import { NextResponse } from 'next/server'; // Import NextResponse for proper response handling

// Note: This API Route uses the Vercel-friendly Edge runtime via the standard Request/Response objects.
// In a real Next.js project, this file would be located at 'app/api/chat/route.js'.

/**
 * Handle POST request for the chat generation.
 * This function handles the RAG prompt construction, secure API key usage, 
 * and requests a structured JSON response from Gemini.
 * @param {Request} request - The incoming request object.
 * @returns {Response} - The generated content (JSON string).
 */
export async function POST(request) {
    try {
        // 1. Get prompt from request body
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        // Access API Key from the environment variables (read from .env.local on development, Vercel environment on deploy)
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            // Log an error and return a safe message to the client
            console.error("GEMINI_API_KEY environment variable is not set.");
            return NextResponse.json({ error: "Server configuration error: Gemini API Key is missing." }, { status: 500 });
        }
        
        // 2. Construct the full RAG prompt
        const fullPrompt = `
You are an ONDC expert. Use the following documents only to answer questions clearly and concisely. 
Extract the specific rules, laws, and compliance requirements related to the user's query. 
Based on the provided policy documents, answer the question: "${prompt}"

--- DOCUMENT START ---
${combinedPolicyText}
--- DOCUMENT END ---
`;
        
        // 3. Configure Gemini API call for Structured JSON Output
        const systemPrompt = "You are a world-class expert on ONDC policies. Based ONLY on the provided context, extract the specific rules, laws, and compliance requirements related to the user's query. Format your output STRICTLY as a JSON array of compliance categories and their detailed checklist items. You MUST cite the section number or page number from the provided documents (e.g., 'Section 1.1' or 'Article 45'). DO NOT add any conversational text, preamble, or markdown outside of the JSON block.";

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: fullPrompt }] }],
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
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
                                        "compliance_detail": { 
                                            "type": "STRING", 
                                            "description": "The detailed action required for compliance, written in clear, actionable language." 
                                        },
                                        "source_reference": {
                                            "type": "STRING",
                                            "description": "The exact source citation from the policy, e.g., 'Section 1.1.1' or 'Article 45'."
                                        }
                                    },
                                    required: ["rule_name", "compliance_detail"]
                                }
                            }
                        },
                        required: ["category_title", "checklist_items"]
                    }
                }
            }
        };

        let responseText = '';
        const maxRetries = 3;
        let delay = 1000;

        for (let attempt = 0; attempt < maxRetries; attempt++) {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                // The expected output is a JSON STRING within the text part
                responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || null;
                if (responseText) {
                    // Send the raw JSON string back to the client
                    return NextResponse.json({ reply: responseText }, { status: 200 });
                }
                break;
            } else if (attempt < maxRetries - 1) {
                // Wait using exponential backoff before retrying
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            } else {
                const errorBody = await response.text();
                // Log and throw the error that caused the failure
                console.error("Gemini API final failure:", errorBody);
                throw new Error(`Gemini API request failed with status ${response.status}.`);
            }
        }
        
        // If the model returned an empty text response after all retries
        return NextResponse.json({ error: "Gemini model returned an empty response after retries." }, { status: 500 });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: `Server-side processing error: ${error.message}` }, { status: 500 });
    }
}