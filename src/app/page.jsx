import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Send, Loader, ChevronDown, ChevronUp, Link as LinkIcon, AlertTriangle } from 'lucide-react';

// Persona and Category Options
const PERSONA_OPTIONS = [
    'Buyer App',
    'Seller App',
    'Seller',
    'Logistics Service Provider (LSP)',
    'Ecosystem Service Provider',
    'General User',
];

const CATEGORY_OPTIONS = [
    'Food & Beverage',
    'Grocery',
    'Fashion',
    'Mobility',
    'Financial Services',
    'Healthcare',
    'Electronics',
    'Home Decor',
    'Other/General',
];

const FAQ_QUESTIONS = [
    'What are the legal obligations for a Buyer App in Food & Beverage category',
    'What are the obligations for Buyer Apps under ONDC Network Policy?',
    'What are the obligations for Seller Apps or Logistics Service Providers under ONDC Network Policy?',
    'Can a seller sell online without a GST registration?',
];

// --- Sub-Components ---

// Renders the structured checklist response from the API
const ChecklistRenderer = React.memo(({ content }) => {
    if (!content || !Array.isArray(content)) {
        return <p className="text-sm text-red-500 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Error: Invalid response format from API.</p>;
    }

    // State to manage which checklist item is expanded
    const [expandedStates, setExpandedStates] = useState({});

    const toggleExpand = useCallback((itemId) => {
        setExpandedStates(prev => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    }, []);

    return (
        <div className="space-y-6 pt-2">
            {content.map((category, categoryIndex) => (
                <div key={categoryIndex} className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-inner break-words overflow-x-auto">
                    <h3 className="font-extrabold text-lg text-indigo-700 border-b border-indigo-200 pb-2 mb-3">
                        {category.category_title || "General Obligations"}
                    </h3>
                    <ul className="space-y-4">
                        {Array.isArray(category.checklist_items) && category.checklist_items.map((item, itemIndex) => {
                            const itemId = `${categoryIndex}-${itemIndex}`;
                            const isExpanded = expandedStates[itemId];
                            
                            return (
                                <li key={itemId} className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm">
                                    <div className="font-semibold text-gray-800 flex justify-between items-start mb-1">
                                        <span>{item.rule_name || `Rule ${itemIndex + 1}`}</span>
                                        <button 
                                            onClick={() => toggleExpand(itemId)}
                                            className="ml-4 p-1 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center text-sm font-medium"
                                            title={isExpanded ? 'Collapse Detail' : 'Show More Detail'}
                                        >
                                            {isExpanded ? 'Collapse' : 'Expand'}
                                            {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                                        </button>
                                    </div>

                                    {/* Summary (Always Visible) */}
                                    <p className="text-sm text-gray-600 mb-2">
                                        {item.summary || item.compliance_detail || "No summary provided."}
                                    </p>

                                    {/* Full Detail (Expandable - Feedback #3) */}
                                    {isExpanded && (
                                        <p className="text-sm text-gray-700 mt-2 p-2 border-l-4 border-indigo-400 bg-indigo-50/50 rounded">
                                            {item.full_compliance_detail || "Detailed compliance information not available."}
                                        </p>
                                    )}

                                    {/* Source and Link (Feedback #4) */}
                                    {(item.source_reference || item.document_name) && (
                                        <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-500 flex items-center flex-wrap">
                                            <span className="font-medium mr-1">Source:</span>
                                            {item.document_name && (
                                                <span className="mr-2">
                                                    {item.document_link ? (
                                                        <a 
                                                            href={item.document_link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="text-indigo-500 hover:text-indigo-700 underline flex items-center transition-colors"
                                                        >
                                                            <LinkIcon className="w-3 h-3 mr-0.5" />{item.document_name}
                                                        </a>
                                                    ) : (
                                                        item.document_name
                                                    )}
                                                </span>
                                            )}
                                            {item.source_reference && <span>({item.source_reference})</span>}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
});

// Main Chat Component
export default function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    const [persona, setPersona] = useState(PERSONA_OPTIONS[0]);
    const [category, setCategory] = useState(CATEGORY_OPTIONS[0]); // Changed to text input with datalist

    const messageRef = useRef(null);

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [messages]);
    
    // --- API Call Function ---
    const handleSend = async (textToSend = input) => {
        if (!textToSend.trim() || loading || !isSetupComplete) return;

        const newUserMessage = { role: 'user', content: textToSend };
        
        // Add user message to chat history
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');
        setLoading(true);

        const apiPayload = {
            query: textToSend,
            persona: persona,
            category: category,
        };

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiPayload),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            
            let botContent;
            if (data.error) {
                 botContent = { type: 'text', text: `An error occurred: ${data.error}` };
            } else if (data.structured_response) {
                // If structured data is returned, use the ChecklistRenderer
                botContent = { type: 'checklist', content: data.structured_response };
            } else {
                // Fallback for simple text responses
                botContent = { type: 'text', text: data.response || "Sorry, I couldn't generate a response." };
            }
            
            setMessages(prev => [...prev, { role: 'bot', content: botContent }]);

        } catch (error) {
            console.error('API Call Error:', error);
            setMessages(prev => [...prev, { role: 'bot', content: { type: 'text', text: 'Error processing your request. Please try again later.' } }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSetupSubmit = (e) => {
        e.preventDefault();
        if (persona && category.trim()) {
            setIsSetupComplete(true);
            
            // Add initial system message to chat history (Suggestion #3)
            setMessages([
                { 
                    role: 'system', 
                    content: { 
                        type: 'text', 
                        text: `Context set: You are analyzing compliance for a **${persona}** operating in the **${category}** category.` 
                    } 
                }
            ]);
        }
    };

    // --- Conditional Render: Setup Screen ---
    if (!isSetupComplete) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-50 font-sans">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-indigo-200">
                    <h1 className="text-3xl font-extrabold text-center text-indigo-700">Set Up Your Compliance Context</h1>
                    <p className="text-center text-gray-600">Please define your role and category to receive the most accurate policy guidance.</p>
                    
                    <form onSubmit={handleSetupSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="persona" className="block text-sm font-medium text-gray-700 mb-1">1. Select Your Role (Persona)</label>
                            <select
                                id="persona"
                                value={persona}
                                onChange={(e) => setPersona(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm"
                                required
                            >
                                {PERSONA_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">2. Enter Operating Category</label>
                            <input
                                id="category"
                                type="text"
                                list="category-options"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="e.g., Food & Beverage, Digital Lending"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out shadow-sm"
                                required
                            />
                            <datalist id="category-options">
                                {CATEGORY_OPTIONS.map(c => <option key={c} value={c} />)}
                            </datalist>
                            <p className="mt-1 text-xs text-gray-500">You can select a suggestion or type your own precise category.</p>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out transform hover:scale-[1.01]"
                        >
                            Start Chat
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // --- Main Chat UI ---
    return (
        <div className="flex flex-col h-screen w-full bg-gray-100 font-sans">
            
            {/* Header */}
            <header className="flex-shrink-0 p-4 bg-indigo-700 text-white shadow-lg">
                <h1 className="text-xl font-bold">ONDC Compliance Expert</h1>
                <p className="text-sm opacity-90 mt-1">
                    Context: <span className="font-semibold">{persona}</span> in <span className="font-semibold">{category}</span>. 
                    <button 
                        onClick={() => setIsSetupComplete(false)} 
                        className="ml-3 text-indigo-200 hover:text-white underline text-xs transition-colors"
                    >
                        Change Context
                    </button>
                </p>
            </header>

            {/* Chat Area */}
            <div ref={messageRef} className="flex-grow overflow-y-auto p-4 space-y-4">
                
                {/* Welcome Message and FAQs (Feedback #5) */}
                <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md border-t-4 border-indigo-500">
                    <h2 className="text-lg font-semibold text-gray-800">Welcome! I am the ONDC Policy Expert.</h2>
                    <p className="text-sm text-gray-600 mt-1">Ask me a question about the network policies to get started. Note: This is a RAG (Retrieval Augmented Generation) model based only on the provided mock policy documents.</p>
                    
                    <div className="mt-3">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Frequently Asked Questions:</h3>
                        <div className="flex flex-wrap gap-2">
                            {FAQ_QUESTIONS.map((q) => (
                                <button 
                                    key={q}
                                    onClick={() => handleSend(q)}
                                    className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors shadow-sm whitespace-nowrap"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Message History */}
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-3xl w-full p-3 rounded-xl shadow-lg ${
                            msg.role === 'user' 
                                ? 'bg-indigo-500 text-white rounded-br-none' 
                                : msg.role === 'system' 
                                    ? 'bg-gray-200 text-gray-700 text-sm italic rounded-b-lg'
                                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                        }`}>
                            {msg.role === 'user' && msg.content}
                            
                            {msg.role === 'system' && msg.content.type === 'text' && (
                                <p className="text-sm">{msg.content.text}</p>
                            )}

                            {/* Bot Response Rendering */}
                            {msg.role === 'bot' && (
                                <>
                                    {loading && index === messages.length - 1 && (
                                        <p className="text-indigo-600 flex items-center">
                                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                                            Analyzing **{persona}** obligations for the **{category}** category...
                                        </p>
                                    )}
                                    
                                    {/* Render checklist or fallback text */}
                                    {msg.content.type === 'checklist' ? (
                                        <ChecklistRenderer content={msg.content.content} />
                                    ) : (
                                        // Feedback #6: Added break-words and overflow-x-auto
                                        <div className="text-base break-words overflow-x-auto">
                                            {msg.content.text}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Footer */}
            <div className="flex-shrink-0 p-4 border-t border-gray-300 bg-white">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a compliance question..."
                        // Feedback #7: Ensure high-contrast text color
                        className="flex-grow p-3 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500 transition-shadow text-gray-900 shadow-inner"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className={`p-3 rounded-full text-white shadow-md transition-all duration-200 ease-in-out ${
                            loading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'
                        }`}
                        disabled={loading}
                    >
                        {loading ? <Loader className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                    </button>
                </form>
            </div>
        </div>
    );
}