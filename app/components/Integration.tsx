"use client";

import { motion, useAnimation } from "framer-motion";
import { Code, Sparkles, MoreHorizontal, ChevronDown, Layout, Globe, Smartphone, Wrench, BarChart3, Database, FileText } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

export default function Integration() {
  const [isApiExpanded, setIsApiExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <section id="integration" className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header and Carousel Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest">Integration</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Simple integration. 
              <br />Works everywhere.
            </h2>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed mb-4">
              Use Proofio via API or dashboard. Integrate once and reuse across products, applications and internal tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-base-100 rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-base-300 overflow-hidden relative group">
              <div className="relative overflow-visible cursor-grab active:cursor-grabbing">
                <motion.div 
                  ref={carouselRef}
                  drag="x"
                  dragConstraints={dragConstraints}
                  dragElastic={0.1}
                  className="flex gap-4 md:gap-6 pb-4"
                >
                  {environments.map((env) => (
                    <div 
                      key={env.name}
                      className="min-w-[260px] md:min-w-[280px] bg-base-200 rounded-3xl p-6 border border-base-300 flex flex-col gap-3 group/card transition-colors hover:border-primary/20 select-none"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-1 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                        <env.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-primary text-lg transition-colors group-hover/card:text-base-content">{env.name}</h4>
                      <p className="text-base-content/70 text-sm leading-relaxed">{env.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <div className="flex justify-between items-center mt-4 px-2">
                <p className="text-xs font-bold text-base-content/30 uppercase tracking-[0.2em]">Swipe to explore</p>
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
                      <h3 className="text-2xl md:text-4xl font-bold">API ACCESS</h3>
                      <p className="text-primary font-semibold text-base md:text-lg">Built for developers and data driven teams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-base-content/50 group-hover:text-primary transition-colors pr-4">
                    <span className="text-sm font-bold uppercase tracking-widest">{isApiExpanded ? 'Show less' : 'View API details'}</span>
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
                        Use the Proofio API to access reviews, aggregates and intelligence directly inside your own applications and systems.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-10">
                        <div>
                          <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            What you can access
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Reviews and aggregates",
                              "Trend data",
                              "Source breakdowns",
                              "Sentiment insights",
                              "Competitive comparisons"
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
                              Full control
                            </h4>
                            <p className="text-base-content/70 font-medium">
                              Authenticate securely with API keys and control access across projects and teams.
                            </p>
                          </div>
                          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="text-base-content font-semibold italic text-sm leading-relaxed">
                              "Use Proofio as a review intelligence layer inside dashboards, reports, products and internal tools."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Code Example */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-base-content/40 uppercase tracking-[0.2em]">Example request</p>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                        </div>
                      </div>
                      <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-8 shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-4 right-6 text-xs font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">JSON</div>
                        <div className="overflow-x-auto no-scrollbar">
                          <pre className="text-sm">
                            <code className="text-blue-300 font-mono leading-relaxed whitespace-pre">
{`GET /api/v1/reviews

{
  "rating": 4.8,
  "total": 1234,
  "sources": [
    {
      "platform": "Google",
      "rating": 4.9,
      "count": 456
    },
    {
      "platform": "Trustpilot",
      "rating": 4.7,
      "count": 778
    }
  ]
}`}
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
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Review sources
            </h3>
            <p className="text-2xl font-bold text-primary mb-8">
              All major review platforms in one place
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-base-content/70 leading-relaxed">
                Proofio aggregates reviews from multiple platforms and unifies them into a single intelligence layer.
                Connect the sources that matter to your business and analyze customer feedback without fragmentation.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center px-4 gap-y-8">
            {[
              { name: "Google", icon: "/google.png" },
              { name: "Trustpilot", icon: "/Trustpilot.png" },
              { name: "App Store", icon: "/appstore.png" },
              { name: "Google Play", icon: "/googleplay.png" },
              { name: "More coming soon", icon: null },
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, y: -8, zIndex: 10 }}
                className="relative group -ml-2 sm:-ml-4 md:-ml-6 first:ml-0"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-base-100 shadow-xl border-2 border-base-300 hover:border-primary hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center p-3 md:p-4 cursor-pointer overflow-hidden">
                  {integration.icon ? (
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <MoreHorizontal className="w-8 h-8 md:w-10 md:h-10 text-base-content/60" />
                  )}
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-base-content text-base-100 text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
                    {integration.name}
                  </div>
                </div>
              </motion.div>
            ))}
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
