"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Which review sources are supported?",
    answer:
      "Proofio currently supports App Store, Google Play, Shopify and Google Reviews, with additional sources planned.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Reviews are automatically synchronized and updated daily.",
  },
  {
    question: "Can I use Proofio without widgets?",
    answer:
      "Yes. All data is available through the REST API.",
  },
  {
    question: "Does Proofio modify or filter reviews?",
    answer:
      "No. Reviews are stored and displayed as provided by the original sources.",
  },
  {
    question: "Is Proofio suitable for international products?",
    answer:
      "Yes. Reviews can be filtered and analyzed by language and platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="collapse collapse-plus bg-base-100 shadow-lg">
                <input
                  type="radio"
                  name="faq-accordion"
                  checked={openIndex === index}
                  onChange={() => setOpenIndex(openIndex === index ? null : index)}
                />
                <div className="collapse-title text-xl font-medium flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
