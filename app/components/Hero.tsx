"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-100 to-base-200 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">API-First Review Aggregation Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-base-content"
          >
            Sammle, normalisiere und analysiere
            <br />
            <span className="text-primary">Bewertungen aus allen Quellen</span>
            <br />
            automatisch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto"
          >
            Proofio sammelt Bewertungen von Apple App Store, Google Play Store, Trustpilot und Google Reviews, normalisiert sie in ein einheitliches Format und stellt sie via REST API oder Framework-agnostischem Widget zur Verfügung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn btn-lg rounded-lg px-8 gap-2 shadow-lg hover:shadow-xl transition-all bg-primary text-white hover:bg-primary/90">
              Kostenlos starten
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn btn-outline btn-lg rounded-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
              Demo anfragen
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



