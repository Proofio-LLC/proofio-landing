"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import InfiniteGrid from "./InfiniteGrid";

interface HeroProps {
  locale?: string;
  messages?: any;
}

export default function Hero({ locale, messages }: HeroProps) {
  const t = messages?.hero || {};
  const localePrefix = locale && locale !== 'en' ? `/${locale}` : '';

  return (
    <section className="min-h-screen flex items-start justify-center bg-gradient-to-br from-base-100 via-base-100 to-base-200 relative overflow-hidden pt-32">
      <InfiniteGrid />
      <div className="container mx-auto px-4 pb-20 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{t.badge || "Review Intelligence Platform"}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-base-content"
          >
            {t.title || "Customer feedback,"}
            <br />
            <span className="text-primary">{t.titleHighlight || "made useful."}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-base-content/80 mb-4 max-w-3xl mx-auto"
          >
            {t.description || "Proofio is a review-intelligence platform that automatically collects, normalizes, and analyzes reviews from App Store, Google Play, Trustpilot and other sources using AI."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a href="https://dash.proofio.app" className="btn btn-lg rounded-xl px-8 gap-2 shadow-lg hover:shadow-xl transition-all bg-primary text-white hover:bg-primary/90">
              {t.ctaPrimary || "Start analyzing reviews"}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href={`${localePrefix}/ios-app`} className="btn btn-outline btn-lg rounded-xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
              {t.ctaSecondary || "Download iOS App"}
            </a>
          </motion.div>

          {/* Hero Image - Harder cut and earlier fade */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-12"
          >
            <div className="relative max-w-5xl mx-auto bg-base-200 rounded-t-2xl shadow-2xl overflow-hidden">
              {/* macOS Window Bar */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                {/* macOS Window Controls */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                {/* Optional: Browser URL bar simulation */}
                <div className="flex-1 mx-2 sm:mx-4 h-5 sm:h-6 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 flex items-center px-2 sm:px-3">
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">dash.proofio.app</span>
                </div>
              </div>
              
              <div 
                className="relative overflow-hidden max-h-[300px] sm:max-h-[400px] lg:max-h-[450px]"
              >
                <img 
                  src="/hero2.png" 
                  alt="Proofio Review Intelligence Platform" 
                  className="w-full h-auto object-top"
                />
              </div>
              
              {/* Fade overlay for entire window - starts at middle, fades out bottom */}
              <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-base-100 via-base-100/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}