"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import AIChatModal from "./AIChatModal";

export default function ProofyFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-4">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="relative group"
            >
              {/* Tooltip / Label */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white shadow-xl border border-base-200 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none hidden md:block">
                <p className="text-sm font-bold text-primary">
                  Ask Proofy
                </p>
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-base-200 rotate-45" />
              </div>

              {/* Main Button */}
              <button
                onClick={() => setIsOpen(true)}
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

