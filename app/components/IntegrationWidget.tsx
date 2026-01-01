"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function IntegrationCompact() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const sources = [
    { name: "App Store", icon: "/appstore.png" },
    { name: "Google Play", icon: "/googleplay.png" },
    { name: "Shopify", icon: "/shopify.png" },
    { name: "Google", icon: "/google.png" },
  ];

  const platforms = [
    { name: "WordPress", icon: "/wordpress.png" },
    { name: "Shopify", icon: "/shopify.png" },
    { name: "React", icon: "/react.png" },
    { name: "Vue", icon: "/vuejs.svg" },
    { name: "HTML", icon: "/api.png" },
    { name: "Custom", icon: "/webhooks.svg" },
  ];

  // Separate Y-Berechnung für links (enger zusammen)
  const getLeftYPos = (index: number, total: number) => {
    const start = 25; // Erhöht von 15
    const end = 75;   // Verringert von 85
    return total > 1 ? start + (index * (end - start)) / (total - 1) : 50;
  };

  // Standard Y-Berechnung für rechts
  const getRightYPos = (index: number, total: number) => {
    const start = 15; 
    const end = 85;
    return total > 1 ? start + (index * (end - start)) / (total - 1) : 50;
  };

  return (
    <section className="py-12 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative flex justify-between items-center min-h-[380px] gap-2">
          
          {/* SVG Layer mit korrigierten Andockpunkten */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* LINKS: Engeres Alignment */}
              {sources.map((source, i) => (
                <ConnectionLine
                  key={`src-${i}`}
                  start="13" end="43" 
                  startY={getLeftYPos(i, sources.length)}
                  endY={50}
                  isHovered={hoveredItem === `source-${source.name}`}
                />
              ))}
              
              {/* RECHTS: Standard Alignment */}
              {platforms.map((platform, i) => (
                <ConnectionLine
                  key={`plt-${i}`}
                  start="57" end="87"
                  startY={50}
                  endY={getRightYPos(i, platforms.length)}
                  isHovered={hoveredItem === `platform-${platform.name}`}
                />
              ))}
            </svg>
          </div>

          {/* Left Column: Sources */}
          <div className="flex flex-col gap-2 z-10 w-40">
            {sources.map((source, i) => (
              <CompactCard 
                key={i} 
                data={source} 
                type="source" 
                setHovered={setHoveredItem} 
                hoveredItem={hoveredItem} 
              />
            ))}
          </div>

          {/* Center Column: Logo Hub */}
          <div className="z-20 relative px-2">
            <div className="absolute inset-0 bg-primary/5 blur-[30px] rounded-full" />
            <motion.div 
              className="relative bg-base-100 p-5 rounded-2xl shadow-lg border border-base-200 flex flex-col items-center min-w-[150px]"
            >
              <Image src="/logo.svg" alt="Proofio" width={100} height={30} className="w-24 h-auto mb-1" />
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-primary/40">Engine</p>
            </motion.div>
          </div>

          {/* Right Column: Platforms */}
          <div className="flex flex-col gap-2 z-10 w-40">
            {platforms.map((platform, i) => (
              <CompactCard 
                key={i} 
                data={platform} 
                type="platform" 
                align="right" 
                setHovered={setHoveredItem} 
                hoveredItem={hoveredItem} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Unterkomponenten ---

function CompactCard({ data, type, align = "left", setHovered, hoveredItem }: any) {
  const itemId = `${type}-${data.name}`;
  const isHovered = hoveredItem === itemId;

  return (
    <div
      onMouseEnter={() => setHovered(itemId)}
      onMouseLeave={() => setHovered(null)}
      className={`flex items-center gap-2 bg-base-100 p-2 rounded-lg border transition-all duration-200 shadow-sm ${
        isHovered ? "border-primary/50 bg-primary/[0.02]" : "border-base-200"
      } ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <div className={`w-7 h-7 rounded flex items-center justify-center p-1 transition-colors ${isHovered ? "bg-primary/10" : "bg-base-200"}`}>
        <Image 
          src={data.icon} 
          alt={data.name} 
          width={18} 
          height={18} 
          className={`object-contain transition-all ${isHovered ? "" : "grayscale opacity-50"}`} 
        />
      </div>
      <p className={`text-[10px] font-bold truncate ${isHovered ? "text-primary" : "text-base-content/70"}`}>
        {data.name}
      </p>
    </div>
  );
}

function ConnectionLine({ start, end, startY, endY, isHovered }: any) {
  const sX = parseFloat(start);
  const eX = parseFloat(end);
  const midX = (sX + eX) / 2;
  const path = `M ${sX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${eX} ${endY}`;

  return (
    <g>
      <path 
        d={path} 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        className={`${isHovered ? "text-primary opacity-100" : "text-base-content opacity-10"} transition-all duration-300`} 
      />
      
      <circle r="0.6" fill={isHovered ? "#02BB7E" : "currentColor"} className={isHovered ? "opacity-100" : "opacity-20"}>
        <animateMotion dur={isHovered ? "1.5s" : "4s"} repeatCount="indefinite" path={path} />
      </circle>

      {isHovered && (
        <circle r="1.5" fill="#02BB7E" className="blur-[2px] opacity-40">
          <animateMotion dur="1.5s" repeatCount="indefinite" path={path} />
        </circle>
      )}
    </g>
  );
}