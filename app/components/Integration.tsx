"use client";

import { motion, useAnimation } from "framer-motion";
import { Code, MoreHorizontal, ChevronDown, Layout, Globe, Smartphone, Wrench, BarChart3, Database, FileText, Copy, Check, Terminal } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
              <Code className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-widest">{t.badge || "Integration"}</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              {t.introTitle || "Simple integration. Works everywhere."}
            </h2>
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed mb-8">
              {t.introDescription || "Use Proofio via API or dashboard. Integrate once and reuse across products, applications and internal tools."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/developers" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-base-100 hover:bg-base-300 text-base-content rounded-2xl text-sm font-bold transition-all border border-base-300 shadow-sm group"
              >
                <Terminal className="w-4 h-4 text-primary" />
                <span>Developer Hub</span>
              </Link>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 text-base-content/40 text-xs font-medium">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                API v1.1.0 stable
              </div>
            </div>
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
            <div className="order-2 lg:order-1 -mx-4 lg:-mx-8">
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
