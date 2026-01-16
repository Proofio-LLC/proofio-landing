"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Sparkles, Check, X, Infinity, Zap, Shield, BarChart3, Database, Globe, Smartphone, Users, Code, Mail, ArrowRight, Rocket, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    popular: false,
    isFree: true,
    trial: "Includes 7 days of Growth for free",
    icon: Rocket,
  },
  {
    name: "Growth",
    monthlyPrice: 39,
    popular: true,
    trial: "7-day free trial (no card required)",
    overage: {
      apiCalls: { price: 5, unit: 1000 },
      reviews: { price: 5, unit: 1000 },
    },
    icon: TrendingUp,
  },
  {
    name: "Scale",
    monthlyPrice: 199,
    popular: false,
    overage: {
      apiCalls: { price: 10, unit: 5000 },
      reviews: { price: 10, unit: 5000 },
    },
    icon: Layers,
  },
];

interface FeatureRow {
  category: string;
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
  description?: string;
  isAi?: boolean;
}

const features: FeatureRow[] = [
  // Limits
  {
    category: "Limits",
    feature: "Projects",
    starter: "1",
    growth: "5",
    scale: "15",
  },
  {
    category: "Limits",
    feature: "Sources per project",
    starter: "2",
    growth: "5",
    scale: "15",
  },
  {
    category: "Limits",
    feature: "Reviews per month",
    starter: "100",
    growth: "5,000",
    scale: "100,000",
  },
  {
    category: "Limits",
    feature: "API requests per month",
    starter: "300",
    growth: "10,000",
    scale: "50,000",
  },

  // Dashboard and analytics
  {
    category: "Dashboard and analytics",
    feature: "Aggregations",
    starter: "Rating & Sentiment",
    growth: "Rating & Sentiment",
    scale: "Rating & Sentiment",
    description: "Rating distribution and sentiment distribution",
  },
  {
    category: "Dashboard and analytics",
    feature: "Trends and statistics",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Insights dashboard with charts",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Time filters",
    starter: "All time",
    growth: "7d, 30d, 90d, All time",
    scale: "7d, 30d, 90d, All time",
  },
  {
    category: "Dashboard and analytics",
    feature: "Source breakdown",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Review volume analysis",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Top topics",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Key takeaways",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard and analytics",
    feature: "Recent changes",
    starter: true,
    growth: true,
    scale: true,
  },

  // AI powered intelligence
  {
    category: "AI powered intelligence",
    feature: "Automatic summaries",
    starter: false,
    growth: true,
    scale: true,
    isAi: true,
  },
  {
    category: "AI powered intelligence",
    feature: "Automatic key insights",
    starter: false,
    growth: true,
    scale: true,
    isAi: true,
  },
  {
    category: "AI powered intelligence",
    feature: "Automatic trends and signals",
    starter: false,
    growth: true,
    scale: true,
    isAi: true,
  },
  {
    category: "AI powered intelligence",
    feature: "Automatic topic detection",
    starter: false,
    growth: true,
    scale: true,
    isAi: true,
  },
  {
    category: "AI powered intelligence",
    feature: "Competitive comparisons",
    starter: false,
    growth: true,
    scale: true,
    isAi: true,
  },

  // Supported sources
  {
    category: "Supported sources",
    feature: "Apple App Store",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Supported sources",
    feature: "Google Play Store",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Supported sources",
    feature: "Trustpilot",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Supported sources",
    feature: "Google Reviews",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Supported sources",
    feature: "Automatic daily synchronization",
    starter: true,
    growth: true,
    scale: true,
  },

  // Notifications and reports
  {
    category: "Notifications and reports",
    feature: "Email notifications for new reviews",
    starter: "Basic",
    growth: "Configurable",
    scale: "Configurable",
  },
  {
    category: "Notifications and reports",
    feature: "Email notifications for negative reviews",
    starter: false,
    growth: "Configurable",
    scale: "Configurable",
  },
  {
    category: "Notifications and reports",
    feature: "Weekly reports",
    starter: "Every Monday",
    growth: "Every Monday",
    scale: "Every Monday",
  },

  // Team features
  {
    category: "Team features",
    feature: "Invite team members",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Team features",
    feature: "Role management",
    starter: false,
    growth: "Admin & Member",
    scale: "Admin & Member",
  },
  {
    category: "Team features",
    feature: "Project specific access control",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Team features",
    feature: "Remove team members",
    starter: false,
    growth: true,
    scale: true,
  },

  // Widgets
  {
    category: "Widgets",
    feature: "Proofio-Verified Trust Widget",
    starter: true,
    growth: true,
    scale: true,
    description: "Embeddable trust widget showing verified reviews, ratings, and platforms",
  },

  // API features
  {
    category: "API features",
    feature: "Public API access",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Fetch reviews endpoint",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Fetch aggregations endpoint",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Fetch review clusters endpoint",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Fetch competitor comparisons endpoint",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Query filters (Date, rating, sentiment, source)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API features",
    feature: "Rate limit headers (X-RateLimit)",
    starter: true,
    growth: true,
    scale: true,
  },

  // Data ownership and access
  {
    category: "Data ownership and access",
    feature: "Full ownership of review data",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Data ownership and access",
    feature: "Export via API and formats",
    starter: true,
    growth: true,
    scale: true,
  },

  // Support
  {
    category: "Support",
    feature: "Documentation and tutorials",
    starter: "Explore docs",
    growth: "Explore docs",
    scale: "Explore docs",
  },
  {
    category: "Support",
    feature: "Email support",
    starter: "3-6 business days",
    growth: "Up to 2 business days",
    scale: "Within 1 business day",
  },
  {
    category: "Support",
    feature: "Priority support",
    starter: false,
    growth: false,
    scale: true,
  },

  // Experience
  {
    category: "Experience",
    feature: "Ad free experience",
    starter: false,
    growth: true,
    scale: true,
  },
];

const groupedFeatures = features.reduce((acc, feature) => {
  if (!acc[feature.category]) {
    acc[feature.category] = [];
  }
  acc[feature.category].push(feature);
  return acc;
}, {} as Record<string, FeatureRow[]>);

function FeatureIcon({ value, isAi }: { value: string | boolean; isAi?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex flex-col items-center justify-center gap-1">
      <Check className="w-5 h-5 text-success" />
        {isAi && <span className="text-[10px] font-bold text-primary uppercase tracking-wider">AI Powered</span>}
      </div>
    ) : (
      <div className="flex justify-center items-center">
        <X className="w-5 h-5 text-error/30" />
      </div>
    );
  }
  
  if (value === "Unlimited") {
    return (
      <div className="flex items-center gap-1 text-primary font-bold">
        <Infinity className="w-5 h-5" />
        <span className="text-sm">Unlimited</span>
      </div>
    );
  }
  
  return <span className="text-sm font-semibold text-base-content/80">{value}</span>;
}

export default function PricingPage() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  const getPlanPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 0;
    if (billingInterval === 'yearly') {
      if (plan.name === 'Growth') return 24; // $24/month billed annually
      if (plan.name === 'Scale') return 79; // $79/month billed annually
    }
    return plan.monthlyPrice;
  };

  const getYearlySavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 0;
    if (plan.name === 'Growth') return 17; // 17% savings
    if (plan.name === 'Scale') return 20; // 20% savings
    return 0;
  };

  const getYearlyTotal = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 0;
    if (plan.name === 'Growth') return 288; // $288/year
    if (plan.name === 'Scale') return 948; // $948/year
    return 0;
  };

  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-base-200/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold tracking-widest uppercase">Pricing</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-base-content"
            >
              Compare all plans
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-base-content/60 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Detailed feature comparison to help you choose the right review intelligence layer for your team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Overview */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Billing Interval Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-base-200 rounded-xl p-1">
              <button
                onClick={() => setBillingInterval('monthly')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billingInterval === 'monthly'
                    ? 'bg-base-100 text-base-content shadow-sm'
                    : 'text-base-content/60'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingInterval('yearly')}
                className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                  billingInterval === 'yearly'
                    ? 'bg-base-100 text-base-content shadow-sm'
                    : 'text-base-content/60'
                }`}
              >
                Yearly
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                  Save
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`card rounded-[2.5rem] shadow-2xl border-2 relative overflow-hidden ${
                  plan.popular
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-base-content border-base-200"
                }`}
              >
                {/* Background Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: -15 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                  className="absolute -bottom-12 -right-12 pointer-events-none z-0"
                >
                  <plan.icon 
                    className={`w-64 h-64 ${
                      plan.popular 
                        ? "text-white/10" 
                        : "text-primary/10"
                    }`}
                  />
                </motion.div>
                <div className="card-body p-8 md:p-10 relative z-10">
                  {plan.popular && (
                    <div className="badge bg-white text-primary border-none font-bold py-3 mb-4">Most Popular</div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex flex-col items-center gap-1 mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.monthlyPrice > 0 && billingInterval === 'yearly' && (
                        <span className={`text-lg font-medium line-through ${plan.popular ? "text-white/60" : "text-base-content/40"}`}>
                          ${plan.monthlyPrice}
                        </span>
                      )}
                      {plan.isFree ? (
                        <span className="text-5xl font-bold">Free</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold">${getPlanPrice(plan)}</span>
                          <span className={`text-lg font-medium ${plan.popular ? "text-white/80" : "text-base-content/60"}`}>/ month</span>
                        </>
                      )}
                    </div>
                    {plan.monthlyPrice > 0 && billingInterval === 'yearly' && (
                      <div className="flex flex-col items-center gap-0.5">
                        <span className={`text-sm font-semibold ${plan.popular ? "text-white/90" : "text-primary"}`}>
                          {getYearlySavings(plan)}% savings
                        </span>
                        <span className={`text-xs ${plan.popular ? "text-white/70" : "text-base-content/50"}`}>
                          Billed annually (${getYearlyTotal(plan)}/year)
                        </span>
                      </div>
                    )}
                  </div>
                  {plan.trial && (
                    <div className={`text-sm font-semibold mb-6 flex items-center gap-2 ${plan.popular ? "text-white/90" : "text-primary"}`}>
                      <Zap className="w-4 h-4 fill-current" />
                      {plan.trial}
                    </div>
                  )}
                  <Link
                    href="https://dash.proofio.app"
                    className={`btn btn-lg rounded-2xl border-none transition-all ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                    }`}
                  >
                    Get Started
                  </Link>
                  {plan.overage && (
                    <p className={`text-[10px] text-center mt-3 ${plan.popular ? "text-white/60" : "text-base-content/50"}`}>
                      Overage: +${plan.overage.apiCalls.price}/{plan.overage.apiCalls.unit.toLocaleString()} API Calls, +${plan.overage.reviews.price}/{plan.overage.reviews.unit.toLocaleString()} Reviews
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="pricing-table" className="py-32 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Detailed feature comparison
              </h2>
              <p className="text-xl text-base-content/50">
                Compare all plans at a glance
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full border-separate border-spacing-0">
                <thead>
                    <tr>
                      <th className="sticky left-0 z-20 py-6 pl-8 pr-4 text-left text-sm font-bold text-base-content uppercase tracking-widest bg-white border-b border-base-200 rounded-tl-[2rem]">
                        Feature
                    </th>
                      <th className="py-6 px-4 text-center text-sm font-bold text-base-content uppercase tracking-widest bg-base-50/50 border-b border-base-200">
                        Starter
                    </th>
                      <th className="py-6 px-4 text-center text-sm font-bold text-primary uppercase tracking-widest bg-primary/5 border-b border-primary/20">
                        Growth
                    </th>
                      <th className="py-6 px-4 text-center text-sm font-bold text-base-content uppercase tracking-widest bg-base-50/50 border-b border-base-200 rounded-tr-[2rem]">
                        Scale
                    </th>
                  </tr>
                </thead>
                  <tbody className="bg-white">
                  {Object.entries(groupedFeatures).map(([category, categoryFeatures], categoryIndex) => (
                    <React.Fragment key={category}>
                        <tr className="bg-base-200/80 backdrop-blur-sm">
                          <td colSpan={4} className="py-5 pl-8 pr-4 text-xs font-black text-primary uppercase tracking-[0.25em] border-y border-base-300">
                          <div className="flex items-center gap-2">
                              <div className="w-1.5 h-4 bg-primary rounded-full" />
                            {category}
                          </div>
                        </td>
                      </tr>
                      {categoryFeatures.map((row, rowIndex) => (
                        <tr
                          key={`${category}-${rowIndex}`}
                            className="group transition-colors hover:bg-base-50/50"
                        >
                            <td className="sticky left-0 z-10 py-6 pl-8 pr-4 text-sm font-medium text-base-content border-b border-base-100 bg-white group-hover:bg-base-50/50">
                              <div className="flex flex-col gap-1">
                                <span className="text-base font-bold">{row.feature}</span>
                            {row.description && (
                                  <span className="text-xs text-base-content/50 font-medium">
                                {row.description}
                                  </span>
                                )}
                              </div>
                          </td>
                            <td className="py-6 px-4 text-center border-b border-base-100">
                              <FeatureIcon value={row.starter} isAi={row.isAi} />
                          </td>
                            <td className="py-6 px-4 text-center border-b border-primary/10 bg-primary/[0.02]">
                              <FeatureIcon value={row.growth} isAi={row.isAi} />
                          </td>
                            <td className="py-6 px-4 text-center border-b border-base-100">
                              <FeatureIcon value={row.scale} isAi={row.isAi} />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            </div>

            <div className="mt-32">
              <div className="relative bg-primary rounded-[2.5rem] p-12 md:p-20 overflow-hidden shadow-2xl">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Background Icon (Favicon white) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute -bottom-20 -right-20 pointer-events-none z-0"
                >
                  <img 
                    src="/favicon.png" 
                    alt="" 
                    className="w-[400px] h-[400px] object-contain brightness-0 invert"
                  />
                </motion.div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Ready to move from reviews to insights?</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    Ready to understand your market?
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="space-y-4 mb-10"
                  >
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      Start turning customer feedback into clear review intelligence with Proofio.
              </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                <Link
                  href="https://dash.proofio.app"
                      className="btn btn-lg bg-white text-primary border-none hover:bg-white/90 rounded-xl px-10 gap-3 shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                      Start analyzing today
                      <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:sales@proofio.app"
                      className="btn btn-lg btn-ghost text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 rounded-xl px-10 backdrop-blur-sm w-full sm:w-auto"
                >
                  Contact Enterprise
                </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
