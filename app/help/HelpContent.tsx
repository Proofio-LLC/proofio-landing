"use client";

import { useState } from "react";
import BackgroundPaths from "../components/FloatingPaths";
import SupportForm from "../components/SupportForm";
import AIChatModal from "../components/AIChatModal";
import { BookOpen, ArrowRight, ShieldQuestion } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function HelpContent() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      
      {/* AI Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-base-100 via-base-100 to-base-200">
        <BackgroundPaths />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
            >
              <ShieldQuestion className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Help Center</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-base-content"
            >
              How can we <br />
              <span className="text-primary">help you today?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-base-content/70 mb-12 max-w-2xl mx-auto"
            >
              Whether it&apos;s a technical issue, a billing question, or feedback - our team is here for you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-10 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Left Side: Info & Docs */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-base-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Documentation</h3>
                <p className="text-base-content/60 mb-6">
                  Browse our detailed documentation for guides, API references, and best practices.
                </p>
                <Link 
                  href="https://docs.proofio.app" 
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 group"
                >
                  Go to Documentation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-primary text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md p-2.5">
                    <img 
                      src="/oo.png" 
                      alt="Proofy" 
                      className="w-full h-full object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant Support with Proofy</h3>
                  <p className="opacity-80 mb-6">
                    Get immediate help with your questions about integrations, API access, or platform features-available 24/7.
                  </p>
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-white text-primary font-bold rounded-2xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl"
                  >
                    Chat with Proofy
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Support Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <SupportForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-20 bg-base-200/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-base-content/60 mb-8 max-w-xl mx-auto">
            You might find the answer you&apos;re looking for in our frequently asked questions.
          </p>
          <Link href="/#faq" className="inline-flex items-center justify-center gap-2 py-4 px-10 bg-primary/10 text-primary font-bold rounded-2xl hover:bg-primary/20 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200">
            Go to FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
