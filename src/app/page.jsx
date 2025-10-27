"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Send, Loader, ChevronDown, ChevronUp, Link as LinkIcon, AlertTriangle } from 'lucide-react';

// Persona and Category Options
const PERSONA_OPTIONS = [
    "Buyer App",
    "Seller App",
    "Logistics Service Provider",
    "Ecosystem Service Provider",
    "Seller",
    "General User",
];

const CATEGORY_OPTIONS = [
    "Food & Beverage",
    "Grocery",
    "Fashion",
    "Electronics",
    "Mobility",
    "Financial Services",
    "Other",
];

// --- Component to render the structured checklist response ---

/**
 * Renders a checklist item, handling the structured JSON output from the API.
 * @param {object} item - The item object containing summary, detail, and citation info.
 */
const ChecklistItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-indigo-200/50 rounded-lg p-4 shadow-sm bg-indigo-50/50 mb-3 transition duration-150 ease-in-out">
            <div className="flex items-start space-x-3">
                {/* Checklist Icon */}
                <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                {/* Summary and Document Link */}
                <div className="flex-grow">
                    <p className="text-gray-800 font-medium text-base leading-snug break-words">
                        {item.summary}
                    </p>

                    {/* Document Citation */}
                    {(item.document_name || item.document_link) && (
                        <div className="mt-2 text-xs text-indigo-600 flex items-center">
                            <LinkIcon className="h-3 w-3 mr-1" />
                            <a 
                                href={item.document_link || '#'} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-semibold hover:underline transition-colors"
                            >
                                {item.document_name || "Source Document"}
                            </a>
                        </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-3 text-sm font-semibold text-indigo-700 hover:text-indigo-900 flex items-center transition-colors focus:outline-none"
                    >
                        {isExpanded ? "Hide Full Detail" : "Show More Detail"}
                        {isExpanded ? (
                            <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                            <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                    </button>
                </div>
            </div>

            {/* Expanded Detail */}
            {isExpanded && (
                <div className="mt-4 pt-3 border-t border-indigo-200/50">
                    <p className="text-sm text-gray-600 whitespace-pre-wrap break-words">
                        {item.full_compliance_detail}
                    </p>
                </div>
            )}
        </div>
    );
};

// --- Main Chatbot App Component ---

const App = () => {
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    const [persona, setPersona] = useState(PERSONA_OPTIONS[0]);
    const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const messageRef = useRef(null);

    // Scroll to bottom of messages whenever the list updates
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [messages]);

    /**
     * Handles sending the user message to the API.
     * @param {string} userQuery - The query string from the input or FAQ button.
     */
    const handleSend = useCallback(async (userQuery) => {
        if (!userQuery.trim() || isLoading) return;

        // 1. Add user message to history
        const newMessage = { role: 'user', content: userQuery };
        setMessages(prev => [...prev, newMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // 2. Prepare payload for API
            const payload = {
                query: userQuery,
                persona: persona,
                category: category,
            };

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                // Handle non-200 responses
                const errorData = await response.json();
                console.error("API Error:", errorData);
                const errorMsg = {
                    role: 'bot',
                    content: {
                        type: 'error',
                        text: `Sorry, I ran into an error while processing your request. Please try again. (Details: ${errorData.error || 'Unknown Error'})`
                    }
                };
                setMessages(prev => [...prev, errorMsg]);
                return;
            }

            // 3. Process API response
            const data = await response.json();

            let botContent;
            try {
                // Attempt to parse the structured JSON response
                botContent = JSON.parse(data.text);
                // Validate if it's the expected structured format (array of objects)
                if (!Array.isArray(botContent) || botContent.length === 0 || !botContent[0].summary) {
                    throw new Error("Response is not the expected structured compliance array.");
                }
                botContent = { type: 'structured', checklist: botContent };

            } catch (e) {
                // If parsing fails, treat it as a standard text response
                console.warn("Could not parse structured JSON. Falling back to plain text.", e);
                botContent = { type: 'text', text: data.text };
            }

            // 4. Add bot response to history
            setMessages(prev => [...prev, { role: 'bot', content: botContent }]);

        } catch (error) {
            console.error('Fetch error:', error);
            const errorMsg = {
                role: 'bot',
                content: {
                    type: 'error',
                    text: "Network error or general failure. Please check your network connection and API key setup."
                }
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, persona, category]);

    // --- Renderer Functions ---

    const renderMessageContent = (message) => {
        const content = message.content;

        if (content.type === 'structured' && Array.isArray(content.checklist)) {
            // Structured Checklist Renderer
            return (
                <div className="space-y-3">
                    <p className="font-semibold text-lg text-gray-900 mb-4">
                        Compliance Checklist for {persona} in the {category} category:
                    </p>
                    {content.checklist.map((item, index) => (
                        <ChecklistItem key={index} item={item} />
                    ))}
                    <p className="text-sm text-gray-500 pt-2 border-t mt-4">
                        *This information is grounded in the provided ONDC policy documents.
                    </p>
                </div>
            );
        }

        // Plain Text or Error Renderer
        const text = content.text || content;
        return (
            <div className={`p-3 rounded-lg whitespace-pre-wrap break-words ${content.type === 'error' ? 'bg-red-100 border border-red-400 text-red-800' : 'text-gray-700 bg-gray-50'}`}>
                {text}
            </div>
        );
    };

    // --- FAQ Section Data and Renderer ---

    const FAQ_QUESTIONS = [
        "What are the legal obligations for a Buyer App in Food & Beverage category",
        "What are the obligations for Buyer Apps under ONDC Network Policy?",
        "What are the obligations for Seller Apps or Logistics Service Providers under ONDC Network Policy?",
        "Can a seller sell online without a GST registration?",
    ];

    const FAQSection = () => (
        <div className="p-6 bg-white border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-2">
                {FAQ_QUESTIONS.map((q, index) => (
                    <button
                        key={index}
                        onClick={() => handleSend(q)}
                        className="w-full text-left p-3 text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                    >
                        {q}
                    </button>
                ))}
            </div>
        </div>
    );

    // --- Setup Screen Component ---

    const SetupScreen = () => {
        const handleSubmit = (e) => {
            e.preventDefault();
            // Optional: You could add a system message here to show the context was set
            setMessages([{
                role: 'system',
                content: {
                    type: 'text',
                    text: `Context set: You are a **${persona}** operating in the **${category}** category. How can I assist with your ONDC compliance?`
                }
            }]);
            setIsSetupComplete(true);
        };

        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
                    <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
                        ONDC Compliance Assistant
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Please define your role and operating category to get contextualized compliance advice.
                    </p>

                    <div className="space-y-6">
                        {/* Persona Selector */}
                        <div>
                            <label htmlFor="persona" className="block text-sm font-medium text-gray-700 mb-2">
                                1. Select Your Persona (Role)
                            </label>
                            <select
                                id="persona"
                                value={persona}
                                onChange={(e) => setPersona(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                            >
                                {PERSONA_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* Category Selector (Flexible Input with Datalist) */}
                        <div>
                            <label htmlFor="category-input" className="block text-sm font-medium text-gray-700 mb-2">
                                2. Enter or Select Your Operating Category
                            </label>
                            <input
                                list="category-list"
                                id="category-input"
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                                placeholder="e.g., Food & Beverage, Mobility, etc."
                            />
                            <datalist id="category-list">
                                {CATEGORY_OPTIONS.map(opt => (
                                    <option key={opt} value={opt} />
                                ))}
                            </datalist>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                        >
                            Start Chat
                        </button>
                    </div>
                </form>
            </div>
        );
    };


    // --- Main App Renderer ---

    if (!isSetupComplete) {
        return <SetupScreen />;
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-sans">
            {/* Header */}
            <header className="flex-shrink-0 bg-white shadow-md border-b border-indigo-200/50 p-4">
                <h1 className="text-xl font-bold text-indigo-700">ONDC Compliance Assistant</h1>
                <div className="text-sm text-gray-500 mt-1">
                    Persona: <span className="font-semibold text-indigo-600">{persona}</span> | Category: <span className="font-semibold text-indigo-600">{category}</span>
                </div>
            </header>

            {/* Chat Messages Area */}
            <main ref={messageRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.role === 'user' ? (
                            // User Message Bubble
                            <div className="max-w-3/4 md:max-w-2xl px-4 py-3 bg-indigo-600 text-white rounded-t-xl rounded-bl-xl shadow-lg break-words">
                                {message.content}
                            </div>
                        ) : (
                            // Bot Message Bubble (with structured or text content)
                            <div className="max-w-full md:max-w-4xl w-full">
                                {renderMessageContent(message)}
                            </div>
                        )}
                    </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="max-w-full md:max-w-4xl w-full">
                            <div className="flex items-center p-4 rounded-lg bg-white shadow-lg border border-gray-200">
                                <Loader className="h-5 w-5 mr-3 text-indigo-500 animate-spin" />
                                <span className="text-gray-600 text-sm">
                                    Analyzing **{persona}** obligations for the **{category}** category...
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* FAQ and Input Area */}
            <footer className="flex-shrink-0 bg-white border-t border-gray-200">
                <FAQSection />

                {/* Input Form */}
                <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="p-4 md:p-6 flex items-center space-x-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask an ONDC compliance question..."
                        className="flex-grow p-3 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 transition-shadow"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="flex-shrink-0 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-150 disabled:bg-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message"
                    >
                        <Send className="h-6 w-6" />
                    </button>
                </form>
            </footer>
        </div>
    );
};

export default App;
