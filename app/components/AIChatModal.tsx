"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Loader2, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm Proofy. I'm here to help you get the most out of Proofio. What can I do for you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const messageHistory = messages.map(m => ({
        role: m.role,
        content: m.content
      }));
      messageHistory.push({ role: "user", content: input });

      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messageHistory }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response from Proofy");
      }

      const aiMessage = data.message;

      // Handle Tool Calls (for Ticket Creation)
      if (aiMessage.tool_calls && aiMessage.tool_calls.length > 0) {
        const toolCall = aiMessage.tool_calls[0];
        if (toolCall.function.name === "create_support_ticket") {
          const args = JSON.parse(toolCall.function.arguments);
          
          // 1. Show processing status
          const processingMsg: Message = {
            id: "ticket-loading-" + Date.now(),
            role: "assistant",
            content: "Creating your support ticket... One moment please.",
          };
          setMessages(prev => [...prev, processingMsg]);

          // 2. Call the actual support API
          const ticketResponse = await fetch("/api/support", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...args,
              source: "chatbot",
              name: "User via Chatbot"
            }),
          });

          const ticketData = await ticketResponse.json();

          if (ticketResponse.ok) {
            // 3. Success message
            const successMsg: Message = {
              id: "ticket-success-" + Date.now(),
              role: "assistant",
              content: `Great! I've created a support ticket for you. \n\n**Reference Number: #${ticketData.ticketId.substring(0, 8).toUpperCase()}**\n\nOur team will contact you at **${args.email}** as soon as possible. Is there anything else I can help you with?`,
            };
            setMessages(prev => [...prev.filter(m => !m.id.startsWith("ticket-loading")), successMsg]);
          } else {
            throw new Error(ticketData.error || "Failed to create ticket");
          }
        }
      } else {
        // Standard Text Response
        const newMessage: Message = {
          id: Date.now().toString(),
          role: "assistant",
          content: aiMessage.content || "I'm not sure how to respond to that. Please try again.",
        };
        setMessages((prev) => [...prev, newMessage]);
      }
    } catch (error) {
      console.error("AI Chat Error:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later or use the support form.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[80vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-base-200 flex items-center justify-between bg-primary text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md overflow-hidden p-2">
              <img 
                src="/oo.png" 
                alt="Proofy" 
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div>
              <h3 className="font-bold">Proofy</h3>
              <p className="text-xs opacity-70">Powered by AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-6 space-y-4 bg-base-50"
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden ${
                  msg.role === "user" ? "bg-primary text-white" : "bg-base-200 text-base-content/50"
                }`}>
                  {msg.role === "user" ? (
                    <User size={18} />
                  ) : (
                    <Bot size={18} />
                  )}
                </div>
                <div className={`p-4 rounded-2xl ${
                  msg.role === "user" 
                    ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20" 
                    : "bg-white text-base-content rounded-tl-none shadow-sm border border-base-200"
                }`}>
                  <div className="text-sm leading-relaxed">
                    {msg.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline font-bold hover:text-primary/80 transition-colors"
                            />
                          ),
                          p: ({ ...props }) => <p {...props} className="m-0 inline" />,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-lg bg-base-200 text-base-content/50 flex items-center justify-center flex-shrink-0">
                  <Bot size={18} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-base-200 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-sm text-base-content/50">Thinking...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-6 border-t border-base-200 bg-white">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="w-full pl-6 pr-14 py-4 bg-base-100 border border-base-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:grayscale"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[10px] text-center text-base-content/40 mt-3">
            Our AI may occasionally provide inaccurate information. Check the docs for critical info.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
