"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-[2rem] p-12 md:p-20 overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Background Icon (Favicon white) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -bottom-20 -right-20 pointer-events-none z-0"
          >
            <img 
              src="/favicon.png" 
              alt="" 
              className="w-[400px] h-[400px] object-contain brightness-0 invert"
            />
          </motion.div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Ready to grow?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Start collecting better <br className="hidden md:block" />reviews with Proofio today.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Join hundreds of companies that trust Proofio to centralize their reputation and turn feedback into their strongest marketing asset.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="https://dash.proofio.app" 
                className="btn btn-lg bg-white text-primary border-none hover:bg-white/90 rounded-xl px-10 gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://docs.proofio.app" 
                className="btn btn-lg btn-ghost text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 rounded-xl px-10 backdrop-blur-sm"
              >
                Explore Docs
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

