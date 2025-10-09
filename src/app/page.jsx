"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Loader2 } from 'lucide-react';

// Mock implementation of a simple fetch hook with retry logic. 
// In a full Next.js project, you would handle this more robustly.

const ChatMessage = ({ role, content }) => (
  <div className={`flex items-start space-x-4 p-4 rounded-lg shadow-sm ${role === 'user' ? 'bg-indigo-50/70 justify-end' : 'bg-white/90'}`}>
    {role === 'assistant' && <Bot className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />}
    <div className={`max-w-4/5 text-sm ${role === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`font-semibold text-gray-800 ${role === 'user' ? 'text-indigo-700' : 'text-gray-700'}`}>
        {role === 'user' ? 'You' : 'ONDC Expert'}
      </div>
      <div className="prose text-gray-700 mt-1" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}></div>
    </div>
    {role === 'user' && <User className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />}
  </div>
);

// Main Application Component (Replaces Streamlit UI)
const App = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Handle sending the message to the API Route
  const handleSend = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage = prompt.trim();
    setPrompt('');
    setIsLoading(true);

    // Add user message to state
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      // Call the Next.js API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        const errorMsg = data.error || 'Failed to get response from API.';
        setMessages(prev => [...prev, { role: 'assistant', content: `**Error:** ${errorMsg}` }]);
        console.error("API Error:", data.error);
        return;
      }

      // Add assistant response to state
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `**Network Error:** Could not connect to the server.` }]);
      console.error("Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // The main UI structure replaces st.title, st.chat_input, and st.chat_message
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 font-inter">
      <header className="w-full max-w-3xl text-center py-6">
        <h1 className="text-4xl font-extrabold text-indigo-700 flex items-center justify-center space-x-2">
          <Bot className="w-8 h-8"/>
          <span>ONDC Policy Expert (Gemini)</span>
        </h1>
        <p className="text-gray-500 mt-2">Query the ONDC policy documents for expert insights...</p>
      </header>

      <main className="flex flex-col w-full max-w-3xl flex-grow bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden mb-4">
        
        {/* Chat History Area */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar" style={{ minHeight: '300px' }}>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 p-10">
              <Bot className="w-12 h-12 mb-3 text-indigo-300" />
              <p>Welcome! I am the ONDC Policy Expert. Ask me a question about the network policies to get started.</p>
              <p className="text-xs mt-2">Note: This is a RAG (Retrieval Augmented Generation) model based only on the provided mock policy documents.</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <ChatMessage key={index} role={msg.role} content={msg.content} />
            ))
          )}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/90">
                <Bot className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-600 mt-1 flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin text-indigo-500" />
                    Thinking...
                </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form (Replaces st.chat_input) */}
        <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-inner text-sm"
              placeholder={isLoading ? "Waiting for response..." : "Enter your query about ONDC policy..."}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`p-3 rounded-full text-white transition duration-150 shadow-md ${
                prompt.trim() && !isLoading
                  ? 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'
                  : 'bg-indigo-400 cursor-not-allowed'
              }`}
              disabled={!prompt.trim() || isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </main>
      
      {/* Custom Scrollbar Style for the chat history */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}
      </style>
    </div>
  );
};

export default App;