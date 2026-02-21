"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const AIChatModal = dynamic(() => import("./AIChatModal"), {
  ssr: false,
});

const BUBBLE_DISMISSED_KEY = "proofy_bubble_dismissed";
const BUBBLE_DELAY_MS = 3500;

const bubbleMessages: Record<string, { greeting: string; sub: string }> = {
  de: {
    greeting: "Hallo! 👋 Kann ich helfen?",
    sub: "Ich bin Proofy, dein Proofio-Assistent.",
  },
  fr: {
    greeting: "Bonjour ! 👋 Besoin d'aide ?",
    sub: "Je suis Proofy, votre assistant Proofio.",
  },
  es: {
    greeting: "¡Hola! 👋 ¿Puedo ayudarte?",
    sub: "Soy Proofy, tu asistente de Proofio.",
  },
  pt: {
    greeting: "Olá! 👋 Posso ajudar?",
    sub: "Sou o Proofy, seu assistente Proofio.",
  },
  it: {
    greeting: "Ciao! 👋 Posso aiutarti?",
    sub: "Sono Proofy, il tuo assistente Proofio.",
  },
  en: {
    greeting: "Hi! 👋 Need any help?",
    sub: "I'm Proofy, your Proofio assistant.",
  },
};

function detectLocale(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const lang = match?.[1];
  return lang && bubbleMessages[lang] ? lang : "en";
}

export default function ProofyFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const pathname = usePathname();
  const locale = detectLocale(pathname ?? "");
  const msg = bubbleMessages[locale];

  useEffect(() => {
    // Don't show if already dismissed
    if (typeof window !== "undefined" && localStorage.getItem(BUBBLE_DISMISSED_KEY)) {
      return;
    }
    const timer = setTimeout(() => setShowBubble(true), BUBBLE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismissBubble(e: React.MouseEvent) {
    e.stopPropagation();
    setShowBubble(false);
    localStorage.setItem(BUBBLE_DISMISSED_KEY, "1");
  }

  function openChat() {
    setShowBubble(false);
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">

        {/* ── Proactive Bubble ── */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-[220px] cursor-pointer"
              onClick={openChat}
            >
              {/* Bubble card */}
              <div className="bg-white rounded-2xl shadow-xl border border-base-200 px-4 py-3 pr-8">
                <p className="text-sm font-bold text-base-content leading-tight">{msg.greeting}</p>
                <p className="text-xs text-base-content/60 mt-0.5">{msg.sub}</p>
              </div>

              {/* Tail pointing down-right toward the button */}
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-base-200 rotate-45" />

              {/* Dismiss X */}
              <button
                onClick={dismissBubble}
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3 text-base-content/60" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Floating Button ── */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="relative group"
            >
              {/* Hover tooltip (only when bubble is gone) */}
              {!showBubble && (
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white shadow-xl border border-base-200 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none hidden md:block">
                  <p className="text-sm font-bold text-primary">Ask Proofy</p>
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-base-200 rotate-45" />
                </div>
              )}

              {/* Main Button */}
              <button
                onClick={openChat}
                className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <img
                      src="/oo.png"
                      alt="Proofy"
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                {/* Small Chat Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-white text-primary rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
                  <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <AIChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

