"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function IntegrationRadial() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const integrations = [
    { name: "Shopify", icon: "/shopify.png" },
    { name: "Webflow", icon: "/webgflow.svg" },
    { name: "WordPress", icon: "/wordpress.png" },
    { name: "React", icon: "/react.png" },
    { name: "Vue", icon: "/vuejs.svg" },
    { name: "API", icon: "/api.png" },
    { name: "Webhooks", icon: "/webhooks.svg" },
  ];

  return (
    <section className="py-24 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative flex justify-center items-center min-h-[500px]">
          
          {/* SVG Layer für die radialen Linien */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {integrations.map((item, i) => {
                const angle = (i * 360) / integrations.length;
                const radius = 35; // Abstand vom Zentrum
                // Berechne Endpunkte der Linien basierend auf Kreisbahn
                const x2 = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y2 = 50 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <RadialLine
                    key={i}
                    x1="50" y1="50"
                    x2={x2} y2={y2}
                    isHovered={hoveredItem === item.name}
                  />
                );
              })}
            </svg>
          </div>

          {/* Zentrum: Der Main Hub */}
          <div className="z-20 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative bg-base-100 p-8 rounded-[2.5rem] shadow-2xl border border-base-200 flex flex-col items-center justify-center w-40 h-40"
            >
              <Image src="/logo.svg" alt="Proofio" width={100} height={30} className="w-24 h-auto mb-2" />
              <div className="h-px w-8 bg-primary/20 mb-2" />
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/60">Engine</p>
            </motion.div>
          </div>

          {/* Die kreisförmig angeordneten Icons */}
          {integrations.map((item, i) => {
            const angle = (i * 360) / integrations.length;
            const radius = 180; // Pixel-Radius für das CSS-Layout
            
            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="absolute z-10"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className={`
                  relative group cursor-pointer p-3 rounded-full bg-white shadow-lg border transition-all duration-300
                  ${hoveredItem === item.name ? "border-primary scale-110 shadow-primary/20" : "border-base-200"}
                `}>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      width={24} 
                      height={24} 
                      className={`object-contain transition-all duration-300 ${hoveredItem === item.name ? "grayscale-0" : "grayscale opacity-70"}`}
                    />
                  </div>
                  
                  {/* Tooltip-artiges Label (erscheint bei Hover) */}
                  <div className={`
                    absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded font-bold whitespace-nowrap transition-opacity
                    ${hoveredItem === item.name ? "opacity-100" : "opacity-0"}
                  `}>
                    {item.name}
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

// --- Hilfskomponente für die Linien ---

function RadialLine({ x1, y1, x2, y2, isHovered }: any) {
  return (
    <g>
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="currentColor"
        strokeWidth="0.5"
        className={`${isHovered ? "text-primary opacity-100" : "text-base-content opacity-10"} transition-all duration-500`}
      />
      {isHovered && (
        <>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#02BB7E"
            strokeWidth="1.5"
          />
          <circle r="0.8" fill="#02BB7E">
            <animateMotion 
              dur="1.5s" 
              repeatCount="indefinite" 
              path={`M ${x1} ${y1} L ${x2} ${y2}`} 
            />
          </circle>
        </>
      )}
    </g>
  );
}