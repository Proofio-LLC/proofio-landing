"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Code, Sparkles } from "lucide-react";

const useCases = [
  {
    title: "App-Entwickler",
    description: "Sammle Bewertungen von Apple App Store und Google Play Store in einer zentralen API. Nutze Sentiment-Analyse und Clustering, um Feedback zu kategorisieren und Trends zu erkennen.",
    icon: Smartphone,
  },
  {
    title: "E-Commerce & SaaS",
    description: "Konsolidiere Bewertungen von Trustpilot, Google Reviews und anderen Quellen zu einer einheitlichen Bewertung. Zeige aggregierte Reviews auf deiner Landing Page mit unserem Widget.",
    icon: Globe,
  },
  {
    title: "Custom Integration",
    description: "Nutze unsere REST API mit flexiblen Filtern (Datum, Rating, Sentiment, Source) für die Integration in CRMs, Dashboards oder eigene Anwendungen. API-First Architektur für maximale Flexibilität.",
    icon: Code,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-base-200">
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
            <span className="text-sm font-medium">USE CASES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perfekt für jeden Anwendungsfall
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Proofio passt sich deinen spezifischen Anforderungen an
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="card-body">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="card-title text-xl mb-3">{useCase.title}</h3>
                    <p className="text-base-content/70">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



