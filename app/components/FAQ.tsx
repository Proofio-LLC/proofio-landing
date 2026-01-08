"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Activity, Layers, RefreshCcw, Layout, Code } from "lucide-react";

const faqs = [
  {
    question: "What is Proofio exactly?",
    answer: "Proofio is a comprehensive review aggregation platform. We collect reviews from various sources like Google, Trustpilot, and App Store, normalize the data, and provide you with a single source of truth for your reputation management.",
    icon: Activity
  },
  {
    question: "Which platforms are supported?",
    answer: "Currently, we support Google Business, Trustpilot, G2, Capterra, App Store, Google Play, and Shopify. We are constantly adding new integrations based on user feedback.",
    icon: Layers
  },
  {
    question: "How often does the data sync?",
    answer: "Synchronization frequency depends on your plan. Starter plans sync weekly, Growth plans sync daily, and Scale plans offer near real-time updates for most sources.",
    icon: RefreshCcw
  },
  {
    question: "Can I embed the reviews on my website?",
    answer: "Yes! We offer lightweight, customizable widgets that you can easily embed on any website to showcase your aggregated rating and latest reviews.",
    icon: Layout
  },
  {
    question: "Is there an API for developers?",
    answer: "Absolutely. We provide a full REST API that allows you to fetch your aggregated data, individual reviews, and sentiment analysis for use in your own applications.",
    icon: Code
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateConstraints = () => {
    if (rowRef.current && containerRef.current) {
      const rowWidth = rowRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setDragConstraints({ 
        left: -(rowWidth - containerWidth + 48),
        right: 0 
      });
    }
  };

  const scrollToActive = (index: number) => {
    if (!rowRef.current || !containerRef.current) return;

    const gap = 24; // gap-6
    const inactiveWidth = isMobile ? 220 : 350;
    const activeWidth = isMobile ? 300 : 600;
    const containerWidth = containerRef.current.offsetWidth;

    // Calculate the X position to center the active card
    // Position of active card = (index * (inactiveWidth + gap))
    let targetX = (containerWidth / 2) - (activeWidth / 2) - (index * (inactiveWidth + gap));

    // Keep within constraints
    if (targetX > 0) targetX = 0;
    const maxScroll = -(rowRef.current.scrollWidth - containerWidth + 48);
    if (targetX < maxScroll) targetX = maxScroll;

    controls.start({
      x: targetX,
      transition: { type: "spring", stiffness: 150, damping: 25 }
    });
  };

  useEffect(() => {
    updateConstraints();
    scrollToActive(activeIndex);
    
    const timer = setTimeout(() => {
      updateConstraints();
      scrollToActive(activeIndex);
    }, 100);

    window.addEventListener('resize', updateConstraints);
    return () => {
      window.removeEventListener('resize', updateConstraints);
      clearTimeout(timer);
    };
  }, [activeIndex, isMobile]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % faqs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  return (
    <section id="faq" className="py-20 bg-base-100 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-base-content leading-tight mb-4">
              Commonly asked <br />questions
            </h2>
            <p className="text-xl text-base-content/70">
              Everything you need to know about Proofio and how it can help you manage your online reputation.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="p-4 border-2 border-base-300 rounded-full hover:bg-base-200 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous question"
            >
              <ChevronLeft className="w-6 h-6 text-base-content" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              aria-label="Next question"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible"
      >
        {/* FAQ Slider Row */}
        <div className="relative overflow-visible cursor-grab active:cursor-grabbing">
          <motion.div 
            ref={rowRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.2}
            animate={controls}
            layout
            className="relative flex items-end gap-6 overflow-visible pb-4"
          >
            {faqs.map((faq, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={false}
                  animate={{
                    width: isMobile 
                      ? (isActive ? "300px" : "220px") 
                      : (isActive ? "600px" : "350px"),
                    height: isMobile ? "320px" : "400px",
                    backgroundColor: isActive ? "#02BB7E" : "#FFFFFF",
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 25,
                    mass: 0.5
                  }}
                  className={`relative flex-shrink-0 rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-end overflow-hidden select-none ${
                    !isActive ? "border border-base-200 hover:shadow-2xl" : "shadow-primary/20"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 0.15, scale: 1, rotate: -15 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute -top-10 -right-10 text-white pointer-events-none z-0"
                      >
                        <faq.icon size={300} strokeWidth={1} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 w-full">
                    <motion.h3 
                      layout="position"
                      animate={{
                        color: isActive ? "#FFFFFF" : "#1F2937",
                        opacity: isActive ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 25,
                        mass: 0.5
                      }}
                      className={`font-bold mb-3 md:mb-4 ${isActive ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                    >
                      {faq.question}
                    </motion.h3>
                    
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, color: "#FFFFFF" }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="text-sm md:text-lg leading-relaxed opacity-90 font-medium overflow-hidden text-white"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {!isActive && (
                     <div className="absolute inset-0 bg-gradient-to-t from-base-200/30 to-transparent pointer-events-none rounded-[2rem]" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
