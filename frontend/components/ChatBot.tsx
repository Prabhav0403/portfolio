import React, { useState, useRef, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send, Sparkles, User, Bot } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface Message {
  role: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text:
        "Hello! I'm Prabhav's AI assistant powered by Grok. Ask me about his skills, projects, HAL internship, education, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // ✅ SEND MESSAGE TO GROK BACKEND
  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: trimmed }),
});

      const data = await res.json();

      const reply =
        data.reply || "Sorry, the Grok server returned no response.";

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error("Frontend Grok error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "I'm having trouble connecting to the Grok server right now. Please start the backend.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: "bot",
        text:
          "Chat cleared. Ask me again about Prabhav’s skills, projects, internship, or education.",
      },
    ]);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-panel text-white border border-border" : "bg-primary text-canvas"
        }`}
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] bg-panel border border-border shadow-2xl z-50 flex flex-col rounded-sm">
          
          {/* Header */}
          <div className="p-4 border-b border-border bg-canvas/50 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                <Sparkles size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm">
                  Prabhav's AI (Grok)
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-secondary font-mono uppercase">
                    Live Backend
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleClear} 
              className="text-xs text-secondary hover:text-white underline decoration-dotted"
            >
              Clear
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                    msg.role === "user"
                      ? "bg-border border-border"
                      : "bg-accent/10 border-accent/20"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User size={14} className="text-secondary" />
                  ) : (
                    <Bot size={14} className="text-accent" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-white/5 text-primary border border-white/10 rounded-tr-none"
                      : "bg-canvas border border-border text-secondary rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing loader */}
            {isThinking && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Bot size={14} className="text-accent" />
                </div>
                <div className="bg-canvas border border-border p-3 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-border bg-canvas/50 backdrop-blur-sm">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, HAL internship..."
                className="w-full bg-panel border border-border text-primary text-sm p-3 pr-12 focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/50"
                disabled={isThinking}
              />
              <button
                type="submit"
                disabled={isThinking || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-accent hover:bg-accent/10 rounded-sm transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </form>

        </div>
      )}
    </>
  );
};

export default ChatBot;
