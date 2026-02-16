"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLocaleContext } from "./LocaleProvider";

export default function BlogHeader() {
  const localeContext = useLocaleContext();
  const activeMessages = localeContext.messages;
  const blogSection = activeMessages?.blogSection || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">{blogSection.badge || "BLOG"}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {blogSection.title || "Latest articles"}
      </h2>
      <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-6">
        {blogSection.description || "Insights on review aggregation, analytics, and trust signals."}
      </p>
    </motion.div>
  );
}
