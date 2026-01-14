"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Script from "next/script";

function FeatureImage({ staticImage, animatedImage, alt, small }: { staticImage: string; animatedImage: string; alt: string; small?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedSrc, setAnimatedSrc] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Load animated GIF with timestamp to restart animation
    setAnimatedSrc(animatedImage + '?t=' + Date.now());
  };

  const filterStyle = {
    filter: 'hue-rotate(-50deg) saturate(1.2)',
  };

  if (small) {
    return (
      <div 
        className="flex items-center justify-center relative overflow-hidden w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Static PNG */}
        <img
          src={staticImage}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isHovered && animatedSrc ? 'opacity-0' : 'opacity-100'
          }`}
          style={filterStyle}
        />
        {/* Animated GIF - overlays on hover */}
        {animatedSrc && isHovered && (
          <img
            key={animatedSrc}
            src={animatedSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain opacity-100"
            style={filterStyle}
          />
        )}
      </div>
    );
  }

  return (
    <div 
      className="mb-4 flex items-center justify-center relative overflow-hidden aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static PNG - always visible, smaller */}
      <img
        src={staticImage}
        alt={alt}
        className={`absolute inset-0 w-3/4 h-3/4 m-auto object-contain transition-opacity duration-300 ${
          isHovered && animatedSrc ? 'opacity-0' : 'opacity-100'
        }`}
        style={filterStyle}
      />
      {/* Animated GIF - overlays on hover */}
      {animatedSrc && isHovered && (
        <img
          key={animatedSrc}
          src={animatedSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain opacity-100"
          style={filterStyle}
        />
      )}
    </div>
  );
}

const features = [
  {
    title: "Multi source coverage",
    description: "Connect all major review platforms and analyze your entire customer voice in one place.",
    staticImage: "/featureicons/integration-static.png",
    animatedImage: "/featureicons/Integration.gif",
  },
  {
    title: "Smart analytics",
    description: "Track trends, sentiment shifts and rating movements across platforms over time.",
    staticImage: "/featureicons/analytical-skill-static.png",
    animatedImage: "/featureicons/analytical-skill.gif",
  },
  {
    title: "Data normalization",
    description: "All ratings and reviews are standardized for accurate comparison and reliable insights.",
    staticImage: "/featureicons/normalize-static.png",
    animatedImage: "/featureicons/normalize.gif",
  },
  {
    title: "AI summaries and insights",
    description: "Turn thousands of reviews into structured summaries, risks and opportunities.",
    staticImage: "/featureicons/widget-static.png",
    animatedImage: "/featureicons/widget.gif",
  },
  {
    title: "Competitive comparison",
    description: "See how your product performs against competitors directly from customer feedback.",
    staticImage: "/featureicons/analytics-static.png",
    animatedImage: "/featureicons/analytics.gif",
  },
  {
    title: "Automatic synchronization",
    description: "Reviews are updated daily and kept fully in sync with no manual work required.",
    staticImage: "/featureicons/sync-static.png",
    animatedImage: "/featureicons/sync.gif",
  },
];

interface FeaturesProps {
  locale?: string;
  messages?: any;
}

export default function Features({ locale, messages }: FeaturesProps) {
  const t = messages?.features || {};
  const featureItems = t.items || features;

  return (
    <section id="features" className="py-20 bg-base-100">
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
            <span className="text-sm font-medium">{t.badge || "CORE VALUE"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t.title || "Review intelligence at a glance"}
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            {t.description || "Proofio is a unified review intelligence system that transforms reviews into clear and actionable business insights built for modern products and teams."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {featureItems.map((feature: any, index: number) => {
            // All features span 2 columns in a 6-column grid (making it 3 columns on desktop)
            const colSpan = "lg:col-span-2";
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={colSpan}
              >
                <div 
                  className="bg-white rounded-[2rem] shadow-md p-6 h-full flex flex-col group aspect-square"
                >
                  {/* Image - 16:9 ratio inside the card */}
                  {features[index] && (
                    <FeatureImage 
                      staticImage={features[index].staticImage} 
                      animatedImage={features[index].animatedImage} 
                      alt={feature.title} 
                    />
                  )}
                  {/* Title */}
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-base-content/70 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          
          {/* Proofio Verified Widget Card - Full width, 2 columns (image left, widget right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: features.length * 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-[2rem] shadow-md p-6 lg:p-8 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left Side: Icon + Text */}
                <div className="order-2 lg:order-1 flex gap-4 lg:gap-6">
                  {/* Small Icon */}
                  <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                    <FeatureImage 
                      staticImage="/featureicons/shield-static.png" 
                      animatedImage="/featureicons/shield.gif" 
                      alt="Proofio Verified Widget"
                      small
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-base-content mb-2">
                      {t.verified?.title || "Proofio Verified"}
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {t.verified?.description || "Display verified reviews with our embeddable trust widget. Build customer confidence with real, verified feedback directly on your website."}
                    </p>
                  </div>
                </div>
                
                {/* Right Side: Widget */}
                <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-center bg-gray-50 rounded-xl p-6 min-h-[150px]">
                    <div 
                      data-proofio-widget 
                      data-api-key={"pk_2526c80e1b78a8c0c2b62ced0b877fb2e613b84fadecb79f79f5222a71bf23b8"}
                    />
                  </div>
                  <p className="text-xs text-base-content/50 mt-4 text-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-[10px] font-mono">
                      &lt;div data-proofio-widget data-api-key="pk_18f468c2..."&gt;&lt;/div&gt;
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Load Widget Script */}
        <Script
          src="https://proofio.app/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}



