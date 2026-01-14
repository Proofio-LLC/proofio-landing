"use client";

import { motion, useAnimation } from "framer-motion";
import { Code, Sparkles, MoreHorizontal, ChevronDown, Layout, Globe, Smartphone, Wrench, BarChart3, Database, FileText, Copy, Check } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import IntegrationWidget from "./IntegrationWidget";

interface IntegrationProps {
  locale?: string;
  messages?: any;
}

export default function Integration({ locale, messages }: IntegrationProps) {
  const t = messages?.integration || {};
  const [isApiExpanded, setIsApiExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [npmCopied, setNpmCopied] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Update drag constraints
    const updateConstraints = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setDragConstraints({
          left: -(scrollWidth - offsetWidth),
          right: 0
        });
      }
    };
    
    updateConstraints();
    const timer = setTimeout(updateConstraints, 500); // Wait for layout

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const environments = [
    { name: "Proofio WebApp", desc: "Native dashboard for deep analysis and visualization.", icon: Layout },
    { name: "Web Applications", desc: "Integrate intelligence directly into your user experience.", icon: Globe },
    { name: "Internal Tools", desc: "Empower your team with structured feedback data.", icon: Wrench },
    { name: "BI Dashboards", desc: "Power your reports with real-time review signals.", icon: BarChart3 },
    { name: "Data Pipelines", desc: "Sync normalized data to your own warehouse.", icon: Database },
    { name: "Custom Reporting", desc: "Build tailored reports for your business needs.", icon: FileText }
  ];
  
  const envItems = t.environments || environments;

  return (
    <section id="integration" className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header and Carousel Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 max-w-6xl mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left min-w-0"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest">{t.badge || "Integration"}</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              {t.introTitle || "Simple integration. Works everywhere."}
            </h2>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed mb-4">
              {t.introDescription || "Use Proofio via API or dashboard. Integrate once and reuse across products, applications and internal tools."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full overflow-hidden min-w-0"
          >
            <div className="bg-base-100 rounded-[2.5rem] p-6 md:p-8 border border-base-300 overflow-hidden relative group">
              <div className="relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y">
                <motion.div 
                  ref={carouselRef}
                  drag="x"
                  dragConstraints={dragConstraints}
                  dragElastic={0.1}
                  className="flex gap-4 md:gap-6 pb-4"
                  style={{ touchAction: 'pan-y' }}
                >
                  {envItems.map((env: any, index: number) => {
                    const originalEnv = environments[index];
                    const Icon = originalEnv?.icon || Layout;
                    return (
                      <div 
                        key={env.name || originalEnv.name}
                        className="min-w-[260px] md:min-w-[280px] bg-base-200 rounded-3xl p-6 border border-base-300 flex flex-col gap-3 group/card transition-colors hover:border-primary/20 select-none"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-1 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-primary text-lg transition-colors group-hover/card:text-base-content">{env.name || originalEnv.name}</h4>
                        <p className="text-base-content/70 text-sm leading-relaxed">{env.description || env.desc || originalEnv.desc}</p>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
              
              <div className="flex justify-between items-center mt-4 px-2">
                <p className="text-xs font-bold text-base-content/30 uppercase tracking-[0.2em]">{t.swipeToExplore || "Swipe to explore"}</p>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* API ACCESS Card */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-base-100 rounded-[2.5rem] shadow-xl overflow-hidden border border-base-300">
              <div className="card-body p-6 md:p-8 lg:p-12">
                <button 
                  onClick={() => setIsApiExpanded(!isApiExpanded)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full text-left group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Code className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold">{t.apiAccess?.title || "API ACCESS"}</h3>
                      <p className="text-primary font-semibold text-base md:text-lg">{t.apiAccess?.subtitle || "Built for developers and data driven teams"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-base-content/50 group-hover:text-primary transition-colors pr-4">
                    <span className="text-sm font-bold uppercase tracking-widest">{isApiExpanded ? (t.apiAccess?.showLess || 'Show less') : (t.apiAccess?.viewDetails || 'View API details')}</span>
                    <div className={`p-2 rounded-full bg-base-200 group-hover:bg-primary group-hover:text-white transition-all duration-300 ${isApiExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isApiExpanded ? "auto" : 0,
                    opacity: isApiExpanded ? 1 : 0,
                    marginTop: isApiExpanded ? 48 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-16 items-start pt-12 border-t border-base-200">
                    {/* Left Side: Content */}
                    <div className="space-y-10">
                      <p className="text-xl text-base-content/80 leading-relaxed">
                        {t.apiAccess?.description || "Use the Proofio SDK or API to access reviews, aggregates and intelligence directly inside your own applications and systems. The official SDK makes integration simple with full TypeScript support."}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-10">
                        <div>
                          <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            {t.whatYouCanAccess || "What you can access"}
                          </h4>
                          <ul className="space-y-3">
                            {[
                              t.sdkTitle || "Official npm SDK (proofio-sdk)",
                              ...(t.apiAccess?.accessItems || [
                                "Reviews and aggregates",
                                "Trend data",
                                "Source breakdowns",
                                "Sentiment insights",
                                "Competitive comparisons"
                              ])
                            ].map((item) => (
                              <li key={item} className="flex items-center gap-3 text-base-content/70 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                              {t.apiAccess?.fullControl?.title || "Full control"}
                            </h4>
                            <p className="text-base-content/70 font-medium">
                              {t.apiAccess?.fullControl?.description || "Authenticate securely with API keys and control access across projects and teams."}
                            </p>
                          </div>
                          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="text-base-content font-semibold italic text-sm leading-relaxed">
                              "{t.apiAccess?.fullControl?.quote || "Use Proofio as a review intelligence layer inside dashboards, reports, products and internal tools."}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Code Example */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-base-content/40 uppercase tracking-[0.2em]">{t.apiAccess?.exampleCode || "Example code"}</p>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                        </div>
                      </div>
                      
                      {/* npm install command */}
                      <div className="bg-[#0f172a] rounded-2xl p-4 shadow-xl relative group overflow-hidden">
                        <button
                          onClick={async () => {
                            await navigator.clipboard.writeText('npm install proofio-sdk');
                            setNpmCopied(true);
                            setTimeout(() => setNpmCopied(false), 2000);
                          }}
                          className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white"
                          title={t.apiAccess?.copyToClipboard || "Copy to clipboard"}
                        >
                          {npmCopied ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <div className="overflow-x-auto no-scrollbar pr-12">
                          <pre className="text-sm">
                            <code className="text-emerald-400 font-mono leading-relaxed whitespace-pre">
{`npm install proofio-sdk`}
                            </code>
                          </pre>
                        </div>
                      </div>

                      {/* TypeScript code */}
                      <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-8 shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-4 right-6 text-xs font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</div>
                        <div className="overflow-x-auto no-scrollbar">
                          <pre className="text-sm">
                            <code className="text-blue-300 font-mono leading-relaxed whitespace-pre">
{`import { Proofio } from 'proofio-sdk';

const proofio = new Proofio({ 
  apiKey: 'your-api-key' 
});

// Get insights summary
const summary = await proofio.insights.summary();

console.log(\`Total Reviews: \${summary.totalReviews}\`);
console.log(\`Average Rating: \${summary.averageRating}\`);

// List reviews
const reviews = await proofio.reviews.list({
  limit: 50,
  minRating: 4
});

// Get trends
const trends = await proofio.insights.trends();`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* All Integrations Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side: Widget */}
            <div className="order-2 lg:order-1 -mx-4 lg:mx-0">
              <IntegrationWidget />
            </div>

            {/* Right Side: Content */}
            <div className="text-center lg:text-right order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                {t.reviewSources?.title || "Review sources"}
              </h3>
              <p className="text-2xl font-bold text-primary mb-8">
                {t.reviewSources?.subtitle || "All major review platforms in one place"}
              </p>
              <div className="max-w-xl ml-auto">
                <p className="text-xl text-base-content/70 leading-relaxed">
                  {t.reviewSources?.description || "Proofio aggregates reviews from multiple platforms and unifies them into a single intelligence layer. Connect the sources that matter to your business and analyze customer feedback without fragmentation."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Script
        src="https://widgets.proofio.app/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
