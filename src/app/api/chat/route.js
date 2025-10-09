import { combinedPolicyText } from '@/policy_documents';

// Note: This API Route uses the Vercel-friendly Edge runtime via the standard Request/Response objects.
// In a real Next.js project, this file would be located at 'app/api/chat/route.js'.

/**
 * Handle POST request for the chat generation.
 * This function replicates the core logic of constructing the RAG prompt and calling Gemini.
 * @param {Request} request - The incoming request object.
 * @returns {Response} - The generated content.
 */
export async function POST(request) {
    try {
        // 1. Get prompt from request body
        const { prompt } = await request.json();

        if (!prompt) {
            return new Response(JSON.stringify({ error: "Prompt is required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // --- FIX START ---
        // Access API Key from the environment variables (read from .env.local)
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("GEMINI_API_KEY environment variable is not set. Please check your .env.local file.");
        }
        // --- FIX END ---
        
        // 2. Construct the full prompt (RAG pattern)
        const fullPrompt = `
You are an ONDC expert. Use the following documents only to answer questions clearly and concisely. Give your responses in a non-technical, simple language for a layperson. Also, give the section number of the law or the page number in the relevant ONDC document, ONDC Network Policy etc. Never cite the compliance handbook for responses. Instead point to the clause/section number in the laws. Also, keep the format of responses in the form of a simple checklist and not descriptive. Based on the user's questions, also ask if the user would like to know more about any of the specific parts of the response

--- DOCUMENT START ---
${combinedPolicyText}
--- DOCUMENT END ---

User Question: ${prompt}
`;
        
        // 3. Configure Gemini API call
        const systemPrompt = "You are an ONDC expert. Answer the user's question clearly, concisely, and in a non-technical, simple language for a layperson. Always structure your response as a simple checklist. You MUST cite the section number or page number from the provided documents (e.g., 'Section 1.1' or 'Article 45'). Do not cite the compliance handbook. After answering, always ask if the user would like to know more about any specific part of the response.";

        // The API URL now uses the retrieved apiKey
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: fullPrompt }] }],
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
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
                responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || "The model returned an empty response.";
                break;
            } else if (attempt < maxRetries - 1) {
                // Wait using exponential backoff before retrying
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            } else {
                const errorBody = await response.text();
                throw new Error(`Gemini API request failed with status ${response.status}: ${errorBody}`);
            }
        }

        // 4. Return the AI response
        return new Response(JSON.stringify({ reply: responseText }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(JSON.stringify({ error: `An unexpected error occurred: ${error.message}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}