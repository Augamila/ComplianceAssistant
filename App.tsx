
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Message } from './types';
import { KNOWLEDGE_BASE } from './constants';
import { getAiResponse } from './services/geminiService';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import SuggestedPrompts from './components/SuggestedPrompts';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const retrieveContext = (query: string): string => {
    const lowerCaseQuery = query.toLowerCase();
    let relevantContext = "";
    for (const keyword in KNOWLEDGE_BASE) {
      if (lowerCaseQuery.includes(keyword)) {
        relevantContext += KNOWLEDGE_BASE[keyword as keyof typeof KNOWLEDGE_BASE] + "\n\n";
      }
    }
    return relevantContext || "No specific context found. Please ask about BCBS 239, SOX, control testing, or AML.";
  };

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const context = retrieveContext(inputText);
      const aiResponse = await getAiResponse(inputText, context);
      const assistantMessage: Message = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col h-screen bg-slate-100 font-sans">
      <header className="bg-white border-b border-slate-200 p-4 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-indigo-900">Compliance Assistant Chatbot</h1>
          <p className="text-sm text-slate-600 mt-1">
            Your AI-powered guide for compliance frameworks.
          </p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && !isLoading && (
              <SuggestedPrompts onPromptClick={handleSendMessage} />
          )}
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
            {isLoading && messages[messages.length-1]?.role === 'user' && (
               <ChatMessage message={{ role: 'assistant', content: '...'}} isLoading={true} />
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 p-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </footer>
    </div>
  );
};

export default App;
