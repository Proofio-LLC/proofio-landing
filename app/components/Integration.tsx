"use client";

import { motion } from "framer-motion";
import { Code, Layout, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Integration() {
  return (
    <section id="integration" className="py-20 bg-base-100">
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
            <span className="text-sm font-medium">INTEGRATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple integration. Works everywhere.
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Use Proofio via widgets or API. Integrate once and reuse across websites, apps, and internal tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-base-200 shadow-xl h-full">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                  <h3 className="card-title text-2xl">Widget presets</h3>
                </div>
                <div className="bg-base-100 rounded-lg p-8 border-2 border-dashed border-base-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                      <div className="avatar placeholder">
                        <div className="bg-primary text-white rounded-full w-12">
                          <span className="text-xl">⭐</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">4.8 / 5.0</div>
                        <div className="text-sm text-base-content/70">From 1,234 reviews</div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                        <Image src="/google.png" alt="Google" width={20} height={20} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-medium">Google</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                        <Image src="/Trustpilot.png" alt="Trustpilot" width={20} height={20} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-medium">Trustpilot</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                        <Image src="/appstore.png" alt="App Store" width={20} height={20} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-medium">App Store</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="text-sm font-semibold text-base-content">Ready-to-use widgets to display aggregated ratings and reviews with minimal setup.</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li>Unified rating</li>
                    <li>Source attribution</li>
                    <li>Filters and limits</li>
                    <li>Lightweight embed</li>
                  </ul>
                </div>
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
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="card-title text-2xl">API integration</h3>
                </div>
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="mb-12">
            <p className="text-base-content/70 mb-6 text-lg font-semibold">
              Review sources
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              {[
                { name: "App Store", icon: "/appstore.png", description: "iOS App Reviews" },
                { name: "Google Play", icon: "/googleplay.png", description: "Android App Reviews" },
                { name: "Shopify", icon: "/shopify.png", description: "E-commerce Reviews" },
                { name: "Google Reviews", icon: "/google.png", description: "Google Maps Reviews" },
              ].map((source) => (
                <div
                  key={source.name}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-32 h-20 bg-base-200 rounded-lg flex items-center justify-center border border-base-300 hover:border-primary transition-colors p-4 cursor-pointer"
                  >
                    <Image
                      src={source.icon}
                      alt={source.name}
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
                      <div className="font-semibold text-sm text-base-content">{source.name}</div>
                      <div className="text-xs text-primary/80 mt-0.5">{source.description}</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                { name: "Custom setups", icon: "/api.png", description: "Custom Integration" },
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
      </div>
    </section>
  );
}



