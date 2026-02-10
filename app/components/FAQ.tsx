"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Activity, Layers, RefreshCcw, Layout, Code, BarChart3, Users, Shield, Download, Lock, DollarSign, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is Proofio?",
    answer: "Proofio is a review intelligence platform that helps teams understand customer feedback across platforms. It transforms reviews into structured insights, trends, and competitive comparisons for better business decisions.",
    icon: Activity
  },
  {
    question: "Which review sources are supported?",
    answer: "Proofio supports Standard sources (Apple App Store, Google Play Store, Trustpilot, CSV Import) for all plans. Advanced sources (Google Reviews, Yelp, G2, Facebook, Amazon) are available for Growth and Scale plans. Amazon requires manual import and is not automated.",
    icon: Layers
  },
  {
    question: "How often is review data updated?",
    answer: "Review data is synchronized daily for all active sources. Higher plans may benefit from more frequent updates depending on source availability.",
    icon: RefreshCcw
  },
  {
    question: "Does Proofio use AI?",
    answer: "Yes. Proofio uses AI to generate summaries, detect trends, analyze sentiment, compare competitors and highlight risks and opportunities from customer feedback.",
    icon: Sparkles
  },
  {
    question: "Can I analyze competitors as well?",
    answer: "Yes. You can add competitors using public identifiers such as App Store IDs or business profiles and compare performance, sentiment and topics directly against your own product.",
    icon: BarChart3
  },
  {
    question: "Is there an API available?",
    answer: "Yes. Proofio provides a full REST API to access reviews, aggregates, trends, insights and competitive data for use in dashboards, reports and internal systems.",
    icon: Code
  },
  {
    question: "Who is Proofio built for?",
    answer: "Proofio is built for product teams, SaaS companies, ecommerce brands, growth teams and decision makers who rely on customer feedback to improve products and strategy.",
    icon: Users
  },
  {
    question: "Do I own my data?",
    answer: "Yes. All collected and processed review data belongs to you. Proofio only acts as a processing and intelligence layer.",
    icon: Lock
  },
  {
    question: "Is Proofio compliant with platform and data regulations?",
    answer: "Proofio only processes publicly available review data and follows strict security and privacy standards to ensure responsible and compliant data handling.",
    icon: Shield
  },
  {
    question: "Can I export my data?",
    answer: "Yes. You can export review data, insights and reports via API or supported export formats depending on your plan.",
    icon: Download
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "Growth plan: Additional charges apply for overages (+$5 per 1,000 API calls or 1,000 reviews). Scale plan: Additional charges apply for overages (+$10 per 5,000 API calls or 5,000 reviews). You'll be notified before charges apply.",
    icon: DollarSign
  },
  {
    question: "What's included in the free Starter plan?",
    answer: "The Starter plan includes 1 project, 2 sources per project, 100 reviews per month, 300 API requests, Standard sources (App Store, Google Play, Trustpilot, CSV), and basic email support. It also includes a 7-day Growth trial.",
    icon: Zap
  },
  {
    question: "Is there an iOS app for Proofio?",
    answer: "Yes. The Proofio iOS app is a companion to the web platform. You can quickly view reviews, trends and key metrics on the go. The app is read-only for reviewing insights-all project creation and subscription management remains on the web platform.",
    icon: Download
  }
];

interface FAQProps {
  locale?: string;
  messages?: any;
}

export default function FAQ({ locale, messages }: FAQProps) {
  const t = messages?.faq || {};
  const faqItems = t.items || faqs;
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
      const padding = 48; // px-4 sm:px-6 lg:px-8
      const gap = 24;
      const inactiveWidth = isMobile ? 220 : 350;
      const activeWidth = isMobile ? 300 : 600;
      
      // Calculate total width needed for all cards
      const totalCardsWidth = (faqItems.length - 1) * (inactiveWidth + gap) + activeWidth;
      
      // Max scroll should allow the last card to be fully visible
      const maxScroll = Math.min(0, -(totalCardsWidth - containerWidth + padding));
      
      setDragConstraints({ 
        left: maxScroll,
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
    const padding = 48;

    // Calculate cumulative positions of cards
    let cardPosition = 0;
    for (let i = 0; i < index; i++) {
      cardPosition += inactiveWidth + gap;
    }

    // For the last card, align it to the right edge instead of centering
    const isLastCard = index === faqItems.length - 1;
    
    let targetX;
    if (isLastCard) {
      // Position last card so it's fully visible on the right
      const totalWidth = cardPosition + activeWidth;
      targetX = containerWidth - totalWidth - padding;
    } else {
      // Center other cards
      targetX = (containerWidth / 2) - (activeWidth / 2) - cardPosition;
    }

    // Keep within constraints
    if (targetX > 0) targetX = 0;
    
    // Calculate max scroll to show the last card fully
    const totalCardsWidth = (faqItems.length - 1) * (inactiveWidth + gap) + activeWidth;
    const maxScroll = Math.min(0, -(totalCardsWidth - containerWidth + padding));
    
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
    setActiveIndex((prev) => (prev + 1) % faqItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + faqItems.length) % faqItems.length);
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
              <span className="text-sm font-medium uppercase tracking-wider">{t.badge || "FAQ"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-base-content leading-tight mb-4">
              {t.title || "Frequently asked questions"}
            </h2>
            <p className="text-xl text-base-content/70">
              {t.description || "Everything you need to know about Proofio."}
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
          {faqItems.map((faq: any, index: number) => {
            const isActive = index === activeIndex;
            // Use original faq for icon if available
            const originalFaq = faqs.find(f => f.question === faq.question) || faqs[index];
            const Icon = originalFaq?.icon || Activity;

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
                        <Icon size={300} strokeWidth={1} />
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
