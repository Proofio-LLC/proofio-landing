"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

function FeatureImage({ staticImage, animatedImage, alt }: { staticImage: string; animatedImage: string; alt: string }) {
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
    title: "Multi-source integration",
    description: "Connect multiple review platforms and collect all reviews in one centralized system.",
    staticImage: "/featureicons/integration-static.png",
    animatedImage: "/featureicons/Integration.gif",
  },
  {
    title: "Smart analytics",
    description: "Understand trends, sentiment, and rating changes across platforms over time.",
    staticImage: "/featureicons/analytics-static.png",
    animatedImage: "/featureicons/analytics.gif",
  },
  {
    title: "Data normalization",
    description: "Ratings and reviews are standardized to ensure consistent comparison and aggregation.",
    staticImage: "/featureicons/normalize-static.png",
    animatedImage: "/featureicons/normalize.gif",
  },
  {
    title: "REST API",
    description: "Access all reviews, aggregates, and insights programmatically through a clean API.",
    staticImage: "/featureicons/api-static.png",
    animatedImage: "/featureicons/api.gif",
  },
  {
    title: "Embeddable widgets",
    description: "Display aggregated ratings and reviews anywhere with lightweight, framework-agnostic widgets.",
    staticImage: "/featureicons/widget-static.png",
    animatedImage: "/featureicons/widget.gif",
  },
  {
    title: "Automatic synchronization",
    description: "Reviews are fetched and updated daily — no manual work required.",
    staticImage: "/featureicons/sync-static.png",
    animatedImage: "/featureicons/sync.gif",
  },
];

export default function Features() {
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
            <span className="text-sm font-medium">CORE VALUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need for review aggregation
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            A unified system to collect, normalize, and analyze reviews across platforms — built for modern products and teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            // All 6 features: span 2 columns each (2/6 = 1/3 width)
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
                  <FeatureImage 
                    staticImage={feature.staticImage} 
                    animatedImage={feature.animatedImage} 
                    alt={feature.title} 
                  />
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
        </div>
      </div>
    </section>
  );
}



