"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Von welchen Quellen sammelt Proofio Bewertungen?",
    answer:
      "Proofio unterstützt Apple App Store (iOS App Reviews), Google Play Store (Android App Reviews), Trustpilot (Business Reviews) und Google Reviews (Google Maps Bewertungen). Das System ist einfach erweiterbar für neue Quellen.",
  },
  {
    question: "Wie oft werden Bewertungen aktualisiert?",
    answer:
      "Bewertungen werden automatisch stündlich synchronisiert. Du kannst auch manuelle Updates via API auslösen, wenn du sofortige Aktualisierungen benötigst.",
  },
  {
    question: "Kann ich Proofio nur mit der API nutzen, ohne Widgets?",
    answer:
      "Ja, Proofio ist API-First designed. Du kannst die REST API exklusiv nutzen, ohne Widgets zu verwenden. Die API bietet vollständige Kontrolle über alle Features inklusive Filter nach Datum, Rating, Sentiment und Source.",
  },
  {
    question: "Was ist Sentiment-Analyse und Review-Clustering?",
    answer:
      "Sentiment-Analyse klassifiziert Bewertungen automatisch als positiv, neutral oder negativ. Review-Clustering kategorisiert Bewertungen nach Keywords, um Themen und Trends zu identifizieren. Beide Features helfen dir, Feedback besser zu verstehen.",
  },
  {
    question: "Wie funktioniert die Integration?",
    answer:
      "Integration erfolgt über unsere REST API mit Key-basierter Authentifizierung oder über unser Framework-agnostisches Widget. Das Widget funktioniert mit WordPress, Next.js, React, Vue, Shopify, Webflow und jeder anderen Website. Beide Optionen sind einfach zu implementieren.",
  },
  {
    question: "Können Bewertungen manipuliert werden?",
    answer:
      "Nein. Proofio sammelt Bewertungen direkt von den offiziellen Plattformen. Wir filtern oder manipulieren keine Daten. Du hast jedoch die Option, bestimmte Bewertungen mit Filtern auszuschließen.",
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
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Alles was du wissen musst
          </p>
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
