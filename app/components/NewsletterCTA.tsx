"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      setStatus("error");
      setErrorMessage("Please accept the newsletter subscription.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
      setAccepted(false);
    } catch (error: any) {
      console.error("Newsletter Error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-primary rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Background Icon (Favicon white) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -bottom-16 -right-16 pointer-events-none z-0"
          >
            <img 
              src="/favicon.png" 
              alt="" 
              className="w-[300px] h-[300px] object-contain brightness-0 invert"
            />
          </motion.div>
          
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
              <div className="max-w-md mx-auto">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
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
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer group justify-center">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        className="peer appearance-none w-5 h-5 border-2 border-white/30 rounded-md checked:bg-white checked:border-white transition-all cursor-pointer"
                      />
                      <svg
                        className="absolute w-3 h-3 text-primary opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                      I want to receive the Proofio newsletter
                    </span>
                  </label>
                </motion.form>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/80 text-sm mt-3 font-medium"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </div>
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

