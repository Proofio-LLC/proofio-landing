"use client";

import { motion } from "framer-motion";
import { Code, Layout, Sparkles, MoreHorizontal, ChevronDown } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";
import IntegrationCompact from "./IntegrationWidget";

export default function Integration() {
  const [isWidgetExpanded, setIsWidgetExpanded] = useState(false);
  const [isApiExpanded, setIsApiExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setIsWidgetExpanded(true);
        setIsApiExpanded(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section id="integration" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Desktop Layout: Text links, Widget rechts */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">INTEGRATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple integration. 
              <br />Works everywhere.
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl">
              Use Proofio via widgets or API. Integrate once and reuse across websites, apps, and internal tools.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IntegrationCompact />
          </motion.div>
        </div>

        {/* Mobile View - Zentriert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:hidden"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">INTEGRATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple integration. Works everywhere.
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Use Proofio via widgets or API. Integrate once and reuse across websites, apps, and internal tools.
          </p>
        </motion.div>

        {/* Mobile View - Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:hidden"
        >
          <div>
            <p className="text-base-content/70 mb-6 text-lg font-semibold">
              Frameworks & platforms
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {[
                { name: "WordPress", icon: "/wordpress.png", description: "CMS Integration" },
                { name: "Shopify", icon: "/shopify.png", description: "E-Commerce Platform" },
                { name: "React", icon: "/react.png", description: "JavaScript Framework" },
                { name: "Vue", icon: "/vuejs.svg", description: "JavaScript Framework" },
                { name: "Static HTML", icon: "/api.png", description: "Static Sites" },
                { name: "Custom setups", icon: "/webhooks.svg", description: "Custom Integration" },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-32 h-20 bg-base-200 rounded-lg flex items-center justify-center border border-base-300 hover:border-primary transition-colors p-4 cursor-pointer"
                  >
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={120}
                      height={60}
                      className="h-full w-auto object-contain"
                    />
                  </motion.div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-base-100 rounded-lg shadow-xl border border-primary/20 px-4 py-2 whitespace-nowrap"
                    >
                      <div className="font-semibold text-sm text-base-content">{platform.name}</div>
                      <div className="text-xs text-primary/80 mt-0.5">{platform.description}</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* Widget and API Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-base-200 shadow-xl h-full">
              <div className="card-body">
                <button
                  onClick={() => setIsWidgetExpanded(!isWidgetExpanded)}
                  className="lg:pointer-events-none flex items-center justify-between w-full mb-4 lg:mb-4"
                >
                  <div className="flex items-center gap-3">
                    <Layout className="w-6 h-6 text-primary" />
                    <h3 className="card-title text-2xl">Widget presets</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-base-content/60 lg:hidden transition-transform duration-300 ${
                      isWidgetExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={
                    isMobile
                      ? {
                          height: isWidgetExpanded ? "auto" : 0,
                          opacity: isWidgetExpanded ? 1 : 0,
                        }
                      : {
                          height: "auto",
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:overflow-visible"
                >
                  <div className="space-y-4">
                    <div className="bg-base-100 rounded-lg p-8 border-2 border-dashed border-base-300 min-h-[200px] flex items-center justify-center">
                      <div 
                        data-proofio-widget 
                        data-api-key="pk_66547cabd36d316a3f7daa708192ead01b0c8992c0089bfd3d0aaece00b2a63c" 
                        data-widget-type="reviews-carousel" 
                        data-limit="6"
                      ></div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm font-semibold text-base-content">Ready-to-use widgets to display aggregated ratings and reviews with minimal setup.</p>
                      <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                        <li>Unified rating</li>
                        <li>Source attribution</li>
                        <li>Filters and limits</li>
                        <li>Lightweight embed</li>
                      </ul>
                      <p className="text-xs text-base-content/50 italic mt-3 pt-3 border-t border-base-300">
                        This is a demo project. This is just one of multiple available widget designs you can choose from.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-base-200 shadow-xl h-full">
              <div className="card-body">
                <button
                  onClick={() => setIsApiExpanded(!isApiExpanded)}
                  className="lg:pointer-events-none flex items-center justify-between w-full mb-4 lg:mb-4"
                >
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-primary" />
                    <h3 className="card-title text-2xl">API integration</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-base-content/60 lg:hidden transition-transform duration-300 ${
                      isApiExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={
                    isMobile
                      ? {
                          height: isApiExpanded ? "auto" : 0,
                          opacity: isApiExpanded ? 1 : 0,
                        }
                      : {
                          height: "auto",
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:overflow-visible"
                >
                  <div className="space-y-4">
                    <div className="bg-base-100 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code className="text-base-content">
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
                    <div className="space-y-2 mt-4">
                      <p className="text-sm font-semibold text-base-content">Use the Proofio API to access reviews and analytics directly in your own applications.</p>
                      <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                        <li>Reviews & aggregates</li>
                        <li>Trend data</li>
                        <li>Source breakdowns</li>
                        <li>Full control via API keys</li>
                      </ul>
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
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              All types of{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-4">
                review sources
              </span>
            </h3>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto mt-4">
              Aggregate reviews from multiple platforms. Connect your favourite review sources to enhance your experience and boost productivity.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center px-4">
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
                className="relative group -ml-4 md:-ml-6 first:ml-0"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-base-100 shadow-xl border-2 border-base-300 hover:border-primary hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center p-4 cursor-pointer overflow-hidden">
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



