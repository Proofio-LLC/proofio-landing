"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-primary rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Stay updated</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Get the latest insights on <br className="hidden md:block" />reputation management.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-10 max-w-xl mx-auto"
            >
              Join our newsletter and receive curated articles, platform updates, and best practices directly in your inbox.
            </motion.p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 text-white font-medium"
              >
                Thanks for subscribing! Check your inbox soon. ✨
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-xl bg-white text-base-content focus:outline-none focus:ring-2 focus:ring-white/50 transition-all shadow-lg"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn bg-black text-white border-none hover:bg-black/80 rounded-xl px-8 gap-2 shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap h-auto py-4"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
            
            <p className="text-white/60 text-xs mt-6">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

