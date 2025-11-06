"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertTriangle, MessageSquare, ChevronDown, ChevronUp, Clock, BookOpen, Zap } from 'lucide-react';

const API_ENDPOINT = '/api/chat';

// Define the structure for a compliance item (must match the API response schema)
const initialComplianceItem = {
    rule_name: "Compliance Rule",
    summary: "Brief summary of the rule.",
    full_compliance_detail: "Detailed explanation of the rule.",
    source_reference: "Section 1.1",
    document_name: "ONDC Policy V1.0",
    document_link: "#",
};

const initialChatState = {
    messages: [
        { id: 1, role: 'system', content: 'Hello! I am the ONDC Policy Expert. Ask me about any compliance obligation or rule based on ONDC policies and Laws of the Land.' }
    ],
    response: null,
    loading: false,
    error: null,
    currentQuery: '',
};

// **UPDATED FREQUENTLY ASKED QUESTIONS**
const DEFAULT_FAQS = [
    "What are the legal obligations for a Buyer App in Food & Beverage category?",
    "What are the obligations for Buyer Apps under ONDC Network Policy?",
    "What are the obligations for Seller Apps or Logistics Service Providers under ONDC Network Policy?",
    "Can a seller participate on ONDC if it doesn't have GST registration?",
];


// Component for the main App logic and UI
export default function App() {
    const [state, setState] = useState(initialChatState);
    const chatEndRef = useRef(null);

    // Scrolls to the bottom of the chat area when messages or response change
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [state.messages, state.response]);


    // Toggles the detail view for a specific checklist item
    const toggleDetail = useCallback((itemId) => {
        setState(prevState => {
            if (!prevState.response) return prevState;

            const updatedResponse = prevState.response.map(item =>
                item.id === itemId ? { ...item, expanded: !item.expanded } : item
            );
            return { ...prevState, response: updatedResponse };
        });
    }, []);

    // Handles an FAQ click to populate the input field and submit
    const handleFAQClick = (query) => {
        setState(p => ({ ...p, currentQuery: query }));
        // Automatically submit the query after a slight delay for visual effect
        setTimeout(() => {
            handleSubmit(new Event('submit', { bubbles: true, cancelable: true }));
        }, 100);
    };

    // Handles the main chat form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = state.currentQuery.trim();
        if (!query || state.loading) return;

        // Since we removed setup, we default persona and category for the API call
        const defaultPersona = 'Compliance Manager';
        const defaultCategory = 'General Network Policy';
        
        const userMessage = { id: Date.now(), role: 'user', content: query };
        
        setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, userMessage],
            currentQuery: '',
            loading: true,
            error: null,
            response: null, // Clear previous response
        }));

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    query: query, 
                    // Using default values for the simplified UI
                    persona: defaultPersona, 
                    category: defaultCategory 
                }),
            });

            const data = await response.json();

            if (!response.ok || data.error) {
                const errorMessage = data.error || 'Failed to fetch compliance advice from API.';
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: errorMessage,
                    messages: [
                        ...prevState.messages,
                        { id: Date.now() + 1, role: 'system', content: `Error: ${errorMessage}` }
                    ]
                }));
                return;
            }

            // Parse the JSON string received from the backend
            const rawJsonText = data.responseText;
            let complianceList;
            
            try {
                complianceList = JSON.parse(rawJsonText);
                // Assign a unique ID and expanded state for the UI
                complianceList = complianceList.map((item, index) => ({
                    ...item,
                    id: index + 1,
                    expanded: false
                }));
            } catch (e) {
                console.error("Failed to parse JSON response:", e, rawJsonText);
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: "The AI returned improperly formatted data. Please try refining your query.",
                    messages: [
                        ...prevState.messages,
                        { id: Date.now() + 1, role: 'system', content: `Error: The AI returned improperly formatted data. Please try refining your query.` }
                    ]
                }));
                return;
            }

            setState(prevState => ({
                ...prevState,
                loading: false,
                response: complianceList,
            }));

        } catch (error) {
            console.error("Fetch error:", error);
            setState(prevState => ({
                ...prevState,
                loading: false,
                error: "Network error: Could not connect to the server.",
                messages: [
                    ...prevState.messages,
                    { id: Date.now() + 1, role: 'system', content: `Network Error: Could not connect to the server.` }
                ]
            }));
        }
    };

    // --- UI Components ---

    // Component for the CheckList Item
    const ChecklistItem = ({ item }) => (
        <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl bg-white">
            <button
                className="w-full flex justify-between items-start text-left p-4 focus:outline-none"
                onClick={() => toggleDetail(item.id)}
            >
                <div className="flex items-start flex-1 mr-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                        <h3 className="font-bold text-gray-800 text-sm leading-tight">{item.rule_name}</h3>
                        <p className="text-gray-600 text-xs mt-1 italic">{item.summary}</p>
                    </div>
                </div>
                {item.expanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </button>

            {item.expanded && (
                <div className="p-4 pt-0 border-t border-gray-100 bg-gray-50">
                    <p className="text-gray-700 text-sm mb-3 whitespace-pre-line leading-relaxed">{item.full_compliance_detail}</p>
                    
                    <div className="text-xs text-gray-500 border-t border-gray-200 pt-3">
                        <p className="font-semibold text-gray-700 mt-1 flex items-center">
                            <BookOpen className="w-4 h-4 mr-1"/> Source Reference:
                        </p>
                        <p className="mt-1 ml-5">
                            <span className="font-medium">Document:</span> {item.document_name} ({item.source_reference})
                        </p>
                        {item.document_link && (
                            <p className="mt-1 ml-5 truncate">
                                <span className="font-medium">Link:</span> 
                                <a href={item.document_link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline ml-1">
                                    {item.document_link}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    // Main App Render
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-sans">
            <div className="w-full max-w-4xl h-[95vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="p-5 border-b border-gray-200 bg-indigo-700 text-white flex items-center rounded-t-2xl">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    <h1 className="text-xl font-extrabold">ONDC Policy Clarity Chatbot</h1>
                </div>

                {/* Main Content (Chat History + FAQ) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    
                    {/* Initial System Message */}
                    <div className="flex justify-start">
                        <div className="max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md text-sm bg-indigo-100 text-indigo-900 rounded-tl-none">
                            {state.messages[0].content}
                        </div>
                    </div>

                    {/* FAQ / Quick Start Section */}
                    {state.messages.length === 1 && !state.loading && (
                        <div className="p-4 border border-indigo-200 bg-indigo-50 rounded-xl space-y-3">
                            <h3 className="font-bold text-indigo-800 flex items-center">
                                <Zap className="w-4 h-4 mr-2"/> Quick Start FAQs:
                            </h3>
                            <div className="flex flex-col space-y-2">
                                {DEFAULT_FAQS.map((faq, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => handleFAQClick(faq)}
                                        className="text-left text-sm p-3 bg-white border border-gray-200 rounded-lg hover:bg-indigo-100 transition duration-150 shadow-sm"
                                    >
                                        {faq}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}


                    {/* Display User Messages (excluding initial system message) */}
                    {state.messages.slice(1).map(message => (
                        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md text-sm ${
                                message.role === 'user' 
                                    ? 'bg-indigo-600 text-white rounded-br-none' 
                                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                            }`}>
                                {message.content}
                            </div>
                        </div>
                    ))}

                    {/* Display Checklist Response (Result of the Query) */}
                    {state.response && state.response.length > 0 && (
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center text-indigo-700 font-bold text-lg border-b-2 border-indigo-200 pb-2 mb-3">
                                <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0" />
                                Compliance Checklist ({state.response.length} Items Found)
                            </div>
                            {state.response.map(item => (
                                <ChecklistItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}

                    {/* Loading Indicator */}
                    {state.loading && (
                        <div className="flex justify-start py-4">
                            <div className="p-3 rounded-xl shadow-md bg-gray-100 text-gray-800 rounded-tl-none flex items-center">
                                <Clock className="w-4 h-4 mr-2 animate-pulse text-indigo-600" />
                                <span className="text-sm">Analyzing policies...</span>
                            </div>
                        </div>
                    )}
                    
                    {/* Error Display */}
                    {state.error && (
                        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center shadow-md">
                            <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                            <span className="text-sm">{state.error}</span>
                        </div>
                    )}

                    <div ref={chatEndRef} />
                </div>

                {/* Input Footer */}
                <div className="p-4 border-t border-gray-200 bg-white">
                    <form onSubmit={handleSubmit} className="flex space-x-3">
                        <input
                            type="text"
                            value={state.currentQuery}
                            onChange={(e) => setState(p => ({ ...p, currentQuery: e.target.value }))}
                            placeholder="Ask a compliance question..."
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-inner"
                            disabled={state.loading}
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200 disabled:bg-indigo-300 flex items-center justify-center shadow-md"
                            disabled={!state.currentQuery.trim() || state.loading}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                    <div className="text-center mt-2 text-xs text-gray-500">
                        *Responses are based on combined ONDC Network Policy and 'Laws of the Land' data.
                    </div>
                </div>

            </div>
        </div>
    );
}