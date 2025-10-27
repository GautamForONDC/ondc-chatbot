import { useState, useRef, useEffect, useCallback } from 'react';
// REMOVED: import Head from 'next/head';
import { ChevronDown, Loader2, CheckCircle, AlertTriangle, MessageSquare, Clipboard } from 'lucide-react';

// --- Global Constants (for Firestore, provided by the environment) ---
// We will not use Firestore here as the app state is simple and non-persistent across users.
// However, the standard environment variables are included for reference.
/*
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : undefined;
*/

// --- FAQ Data (Feedback #5) ---
const FAQ_QUESTIONS = [
    "What are the legal obligations for a Buyer App in Food & Beverage category",
    "What are the obligations for Buyer Apps under ONDC Network Policy?",
    "What are the obligations for Seller Apps or Logistics Service Providers under ONDC Network Policy?",
    "Can a seller sell online without a GST registration?", // Updated question
];

// --- Type Definition for Structured Response ---
// This matches the JSON schema defined in app/api/chat/route.js
/**
 * @typedef {Object} ChecklistItem
 * @property {string} rule_name
 * @property {string} summary - Concise view (Feedback #3)
 * @property {string} full_compliance_detail - Detailed view (Feedback #3)
 * @property {string} source_reference
 * @property {string} document_name - Full document name (Feedback #4)
 * @property {string} document_link - Clickable URL (Feedback #4)
 */

/**
 * @typedef {Object} ChecklistCategory
 * @property {string} category_title
 * @property {ChecklistItem[]} checklist_items
 */

// --- Component: Structured Checklist Renderer ---
const ChecklistRenderer = ({ data }) => {
    // State to manage which items are expanded (using a map of item index to boolean)
    const [expandedStates, setExpandedStates] = useState({});

    /**
     * Toggles the expanded state for a specific item using its unique index key.
     * @param {string} key - Unique key combining category and item index.
     */
    const toggleExpand = useCallback((key) => {
        setExpandedStates(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    }, []);

    if (!data || data.length === 0) {
        return <p className="text-gray-500 italic">No structured compliance items found in the policy context.</p>;
    }

    return (
        <div className="space-y-6 p-4">
            {data.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <h2 className="text-xl font-bold bg-indigo-50 p-4 text-indigo-700 border-b border-indigo-100">
                        {category.category_title}
                    </h2>
                    <ul className="divide-y divide-gray-100">
                        {category.checklist_items.map((item, itemIndex) => {
                            const uniqueKey = `${catIndex}-${itemIndex}`;
                            const isExpanded = expandedStates[uniqueKey];
                            const linkText = item.document_name || "Source Document";

                            return (
                                <li key={uniqueKey} className="p-4 transition-all duration-300">
                                    {/* Rule Name */}
                                    <div className="flex items-start mb-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                        <p className="font-semibold text-lg text-gray-800 break-words">
                                            {item.rule_name}
                                        </p>
                                    </div>

                                    {/* Summary Content (Always visible) */}
                                    <div className="pl-8 text-gray-600 mb-2 text-base break-words">
                                        {item.summary}
                                    </div>

                                    {/* Detailed Content (Expandable - Feedback #3) */}
                                    {isExpanded && (
                                        <div className="pl-8 pt-2 text-gray-700 border-t border-dashed border-gray-200 mt-3 break-words">
                                            <p className="font-medium text-sm mb-1 text-indigo-600">Full Compliance Detail:</p>
                                            {item.full_compliance_detail}
                                        </div>
                                    )}

                                    {/* Source and Expand Footer */}
                                    <div className="pl-8 mt-3 flex justify-between items-center text-sm">
                                        {/* Citation (Feedback #4) */}
                                        <div className="text-gray-500 flex items-center space-x-2">
                                            <span>Source: {item.source_reference}</span>
                                            {item.document_link && (
                                                <a 
                                                    href={item.document_link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-indigo-500 hover:text-indigo-700 underline transition-colors"
                                                    title={`Open ${item.document_name}`}
                                                >
                                                    {linkText}
                                                </a>
                                            )}
                                        </div>

                                        {/* Expand Button (Feedback #3) */}
                                        <button
                                            onClick={() => toggleExpand(uniqueKey)}
                                            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                                        >
                                            {isExpanded ? 'Show Less' : 'Show More Detail'}
                                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};


// --- Component: Main Chat Message Container ---
const ChatMessage = ({ message, isUser }) => {
    const messageRef = useRef(null);

    // Determines if the message content is the structured JSON we expect
    const isStructuredData = message.content.startsWith('[');
    let parsedData = null;
    let isJsonError = false;

    if (!isUser && isStructuredData) {
        try {
            // Attempt to parse the JSON string received from the API
            parsedData = JSON.parse(message.content);
        } catch (e) {
            console.error("Failed to parse JSON response:", e);
            isJsonError = true;
        }
    }

    // Helper to copy text content to clipboard
    const copyToClipboard = () => {
        const textToCopy = messageRef.current?.innerText || message.content;
        try {
            // Using execCommand for wider iframe compatibility
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            // NOTE: Cannot use alert() here due to environment restrictions.
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div 
                className={`relative max-w-4xl p-4 rounded-xl shadow-md ${isUser 
                    ? 'bg-indigo-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                } transition-colors duration-200`}
            >
                {/* Copy button */}
                {!isUser && (
                    <button 
                        onClick={copyToClipboard}
                        className="absolute -top-3 right-0 p-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-10"
                        aria-label="Copy message content"
                    >
                        <Clipboard className="w-4 h-4" />
                    </button>
                )}

                {/* Content Area */}
                <div ref={messageRef} className="whitespace-pre-wrap leading-relaxed break-words overflow-x-auto">
                    {isUser ? (
                        message.content
                    ) : (
                        isStructuredData && parsedData && !isJsonError ? (
                            <ChecklistRenderer data={parsedData} />
                        ) : (
                            // Render text/error message if not structured or if parsing failed
                            <div className="space-y-2">
                                {isJsonError && (
                                    <div className="flex items-center p-2 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                                        <span className="text-sm font-medium">Error: Structured response failed. Displaying raw text.</span>
                                    </div>
                                )}
                                <p>{message.content}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    // Scroll to the bottom of the chat window
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Function to handle sending the prompt to the API
    const handleSend = useCallback(async (prompt) => {
        if (!prompt.trim() || isLoading) return;

        // 1. Add user message to chat
        const newUserMessage = { id: Date.now(), content: prompt, isUser: true };
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // 2. Call the internal Next.js API route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userPrompt: prompt }),
            });

            const data = await response.json();

            // 3. Process and add model response
            let modelContent;
            if (response.ok) {
                // The API route returns the JSON string in responseText
                modelContent = data.responseText;
            } else {
                // Handle API error messages
                modelContent = data.error || "An unknown error occurred while contacting the server.";
            }
            
            const newModelMessage = { id: Date.now() + 1, content: modelContent, isUser: false };
            setMessages(prev => [...prev, newModelMessage]);

        } catch (error) {
            console.error("Fetch error:", error);
            const errorMessage = { 
                id: Date.now() + 1, 
                content: "Network Error: Could not connect to the server or API failed after multiple retries.", 
                isUser: false 
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSend(input);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 antialiased font-sans">
            {/* Header */}
            <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <MessageSquare className="w-7 h-7 text-indigo-600" />
                    <h1 className="text-xl font-bold text-gray-800">ONDC Policy Expert Chatbot</h1>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-grow p-4 overflow-y-auto space-y-4">
                {/* Welcome Message and FAQ (Feedback #5) */}
                <div className="flex justify-start">
                    <div className="max-w-4xl p-4 bg-indigo-50 text-gray-800 rounded-xl rounded-tl-none border border-indigo-200 shadow-lg">
                        <h2 className="text-lg font-semibold mb-1">Welcome! I am the ONDC Policy Expert.</h2>
                        <p className="text-sm mb-3">Ask me a question about the network policies to get started. Note: This is a RAG (Retrieval Augmented Generation) model based only on the provided policy documents.</p>

                        {/* FAQ Buttons (Feedback #5) */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {FAQ_QUESTIONS.map((q, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSend(q)}
                                    className="text-sm font-medium px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-150 shadow-sm"
                                    disabled={isLoading}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Render Chat Messages */}
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} isUser={msg.isUser} />
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="max-w-4xl p-3 bg-white text-gray-800 rounded-xl rounded-tl-none border border-gray-200 shadow-md">
                            <Loader2 className="w-5 h-5 animate-spin text-indigo-500 inline-block mr-2" />
                            <span className="text-sm text-gray-500">Thinking...</span>
                        </div>
                    </div>
                )}

                <div ref={chatEndRef} />
            </main>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-base shadow-inner transition-shadow duration-150
                        text-gray-900" // Added text-gray-900 for high contrast (Feedback #7)
                        placeholder={isLoading ? "Please wait for the response..." : "Ask your policy question..."}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white p-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
                        disabled={isLoading}
                        aria-label="Send message"
                    >
                        {isLoading ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
