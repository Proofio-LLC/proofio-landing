"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Code, Sparkles, Users, Activity, ShoppingBag, Database, ArrowRight, X, TrendingUp, CheckCircle2, Shield } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    id: "saas",
    title: "Apps and SaaS teams",
    description: "Track product perception, release impact and reliability signals across app stores and review platforms. Turn customer feedback into structured product and growth insights.",
    icon: Smartphone,
    caseStudy: {
      title: "Monitoring Sentiment and Reliability",
      metric: "+0.6 points rating increase",
      content: "A European SaaS company used Proofio to monitor review sentiment after each release across app stores and SaaS platforms. Within two months, the team identified a recurring reliability issue that was not visible in internal metrics. After fixing it, their average rating increased by 0.6 points and churn decreased noticeably.",
      results: ["Identified hidden reliability issues", "Increased average rating by 0.6 points", "Noticeable reduction in churn"]
    }
  },
  {
    id: "ecommerce",
    title: "Ecommerce and brands",
    description: "Understand how products and brands perform across marketplaces and review platforms. Identify strengths, weaknesses and trust gaps with clarity.",
    icon: ShoppingBag,
    caseStudy: {
      title: "Optimizing the Delivery Experience",
      metric: "Increased conversion rates",
      content: "A mid size ecommerce brand aggregated product and store reviews from multiple marketplaces with Proofio. The team discovered that delivery experience, not product quality, was the main driver of negative sentiment. After optimizing logistics communication, review sentiment improved and conversion rates increased.",
      results: ["Identified delivery as main driver of negative sentiment", "Optimized logistics communication", "Improved overall review sentiment"]
    }
  },
  {
    id: "product",
    title: "Product and experience teams",
    description: "Use review intelligence to prioritize features, reduce friction and improve customer satisfaction.",
    icon: Users,
    caseStudy: {
      title: "Data-Driven Roadmap Alignment",
      metric: ">20% reduction in support tickets",
      content: "A product team used Proofio to cluster review topics and prioritize features based on customer frustration signals. Instead of relying on assumptions, they aligned their roadmap directly with customer feedback and reduced support tickets by over 20 percent within one quarter.",
      results: ["Prioritized features based on frustration signals", "Roadmap alignment with real feedback", "20% reduction in support volume"]
    }
  },
  {
    id: "analytics",
    title: "Internal tools and analytics",
    description: "Power dashboards, reports and decision systems with structured review intelligence via API. Get review intelligence directly inside your own applications and systems.",
    icon: Database,
    caseStudy: {
      title: "Executive Intelligence Integration",
      metric: "Faster business decisions",
      content: "A data team integrated Proofio via API into their internal BI dashboards. Review trends, sentiment and competitor comparisons became part of weekly executive reports, enabling faster and more confident product and marketing decisions.",
      results: ["Integrated review intelligence via API", "Automated weekly executive reporting", "Increased decision-making confidence"]
    }
  },
];

interface UseCasesProps {
  locale?: string;
  messages?: any;
}

export default function UseCases({ locale, messages }: UseCasesProps) {
  const t = messages?.useCases || {};
  const useCaseItems = t.items || useCases;
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  return (
    <section id="use-cases" className="py-32 bg-base-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">USE CASES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-base-content tracking-tight">
            {t.title || "Built for teams that need more than just reviews"}
          </h2>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.description || "See how Proofio helps different teams turn feedback into action."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCaseItems.map((useCase: any, index: number) => {
            // Use original useCase for icon and caseStudy if available
            const originalCase = useCases.find(uc => uc.id === useCase.id) || useCases[index];
            const Icon = originalCase?.icon || Smartphone;
            
            // Merge translated useCase with original data (icon, caseStudy)
            const mergedCase = {
              ...useCase,
              icon: Icon,
              caseStudy: originalCase?.caseStudy || useCase.caseStudy
            };
            
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  onClick={() => setSelectedCase(mergedCase)}
                  className="relative h-full bg-base-200/50 hover:bg-base-200 transition-all duration-500 rounded-[2.5rem] p-10 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
                >
                  {/* Background Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-base-content group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    
                    <div className="space-y-4 flex-grow">
                      <p className="text-lg text-base-content/70 leading-relaxed font-medium">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-base-300/50 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {t.readCaseStudy || "Read case study"}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-8 md:p-12 overflow-y-auto">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 p-3 hover:bg-base-100 rounded-full transition-colors text-base-content/50 hover:text-primary"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-8">
                  {selectedCase.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {typeof selectedCase.icon === 'function' ? (
                        <selectedCase.icon className="w-6 h-6 text-primary" />
                      ) : (
                        <Smartphone className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  )}
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">
                    {selectedCase.title}
                  </span>
                </div>

                {selectedCase.caseStudy && (
                  <>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 text-base-content leading-tight">
                      {selectedCase.caseStudy.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-10 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{t.caseStudy?.keySuccessMetric || "Key Success Metric"}</p>
                        <p className="text-xl md:text-2xl font-bold text-base-content">{selectedCase.caseStudy.metric}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4">{t.caseStudy?.challengeSolution || "The Challenge & Solution"}</h4>
                        <p className="text-lg text-base-content/70 leading-relaxed font-medium">
                          {selectedCase.caseStudy.content}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-6">{t.caseStudy?.keyResults || "Key Results"}</h4>
                        <ul className="grid gap-4">
                          {selectedCase.caseStudy.results && selectedCase.caseStudy.results.map((result: string, i: number) => (
                            <li key={i} className="flex items-start gap-4 p-4 bg-base-50 rounded-2xl border border-base-200 group/item hover:border-primary/30 transition-colors">
                              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                              <span className="text-base-content/80 font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-12 pt-6 border-t border-base-200">
                  <p className="text-xs text-base-content/40 italic flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5" />
                    {t.caseStudy?.privacyNote || "To protect our customers' competitive advantage and privacy, names and sensitive details have been anonymized."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
