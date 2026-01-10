"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BackgroundPaths from "./FloatingPaths";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-100 to-base-200 relative overflow-hidden">
      <BackgroundPaths />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Review Intelligence Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-base-content"
          >
            Understand your reviews.
            <br />
            <span className="text-primary">Understand your market.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-base-content/80 mb-4 max-w-3xl mx-auto"
          >
            Proofio collects, normalizes, and analyzes reviews from every platform and turns them into clear insights, trends, and competitive comparisons.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-base-content/60 mb-8 max-w-2xl mx-auto"
          >
            Stop looking at fragmented ratings.
            <br />
            Proofio transforms customer feedback into one reliable source of truth for product, marketing, and business decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://dash.proofio.app" className="btn btn-lg rounded-xl px-8 gap-2 shadow-lg hover:shadow-xl transition-all bg-primary text-white hover:bg-primary/90">
              Start analyzing reviews
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://docs.proofio.app" className="btn btn-outline btn-lg rounded-xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
              View live demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



