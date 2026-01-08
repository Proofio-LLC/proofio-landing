"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Code, Sparkles } from "lucide-react";

const useCases = [
  {
    title: "Apps & SaaS",
    description: "Aggregate ratings from app stores and marketplaces into a single, trustworthy overview for your website.",
    icon: Smartphone,
  },
  {
    title: "E-commerce & brands",
    description: "Combine product and store reviews across platforms to present a consistent rating.",
    icon: Globe,
  },
  {
    title: "Custom & internal tools",
    description: "Use the API to power dashboards, reports, or internal analytics with review data.",
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
            Built for real-world use cases
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Proofio adapts to different products, teams, and technical setups.
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
                <div className="card bg-base-100 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow h-full">
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



