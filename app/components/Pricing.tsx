"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 0,
    description: "For exploring Proofio",
    features: [
      "1 project",
      "2 sources per project",
      "100 reviews per month",
      "300 API requests",
      "Standard Sources",
      "Proofio-Verified Trust Widget",
      "Weekly reports",
      "Basic email support",
    ],
    cta: "Get Started",
    popular: false,
    isFree: true,
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 39,
    yearlyPrice: 33,
    yearlySavings: 15,
    description: "For growing teams",
    features: [
      "5 projects",
      "5 sources per project",
      "5,000 reviews per month",
      "10,000 API requests",
      "Advanced Sources",
      "Proofio-Verified Trust Widget",
      "Team collaboration",
      "Advanced insights",
      "Automated review signals",
      "Weekly reports",
      "No ads",
      "Advanced email support",
    ],
    cta: "Get Started",
    popular: true,
    overage: {
      apiCalls: { price: 5, unit: 1000 },
      reviews: { price: 5, unit: 1000 },
    },
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 199,
    yearlyPrice: 165,
    yearlySavings: 16,
    description: "For data-driven businesses",
    features: [
      "15 projects",
      "15 sources",
      "25,000 reviews per month",
      "50,000 API requests",
      "Advanced Sources",
      "Proofio-Verified Trust Widget",
      "Team collaboration",
      "Advanced insights",
      "Automated review signals",
      "Weekly reports",
      "No ads",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
    overage: {
      apiCalls: { price: 10, unit: 5000 },
      reviews: { price: 10, unit: 5000 },
    },
  },
];

interface PricingProps {
  locale?: string;
  messages?: any;
}

export default function Pricing({ locale, messages }: PricingProps) {
  const t = messages?.pricing || {};
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  const getPlanPrice = (plan: typeof plans[0]) => {
    if (plan.isFree) return 0;
    return billingInterval === 'yearly' ? plan.yearlyPrice! : plan.monthlyPrice;
  };

  return (
    <section id="pricing" className="py-20 bg-base-200">
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
            <span className="text-sm font-medium">{t.badge || "PRICING"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.title || "Simple, transparent pricing"}
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
            {t.description || "Choose the plan that fits your needs. All plans include our core features."}
          </p>
        </motion.div>

        {/* Billing Interval Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-base-100 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setBillingInterval('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingInterval === 'monthly'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-base-content/60'
              }`}
            >
              {t.monthly || "Monthly"}
            </button>
            <button
              onClick={() => setBillingInterval('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                billingInterval === 'yearly'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-base-content/60'
              }`}
            >
              {t.yearly || "Yearly"}
              <span className="absolute -top-1 -right-1 bg-white text-primary text-xs px-1.5 py-0.5 rounded-full font-bold">
                {t.save || "Save"}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const planData = t.plans?.[plan.id as keyof typeof t.plans] || plan;
            return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg border-2 border-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{t.popular || "Most Popular"}</span>
                  </div>
                </div>
              )}
              <div
                className={`card rounded-[2rem] shadow-xl h-full ${
                  plan.popular
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-base-100"
                }`}
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-2">{planData.name || plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                    {planData.description || plan.description}
                  </p>
                  <div className="mb-6">
                    {plan.isFree ? (
                      <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">{t.free || "Free"}</span>
                        </div>
                        <div className="text-primary text-xs font-bold flex items-center gap-1 mt-1">
                          <Zap className="w-3 h-3 fill-current" />
                          {t.includesTrial || "Includes 7-day Growth Trial"}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                          {billingInterval === 'yearly' && (
                            <span className={`text-lg font-medium line-through ${plan.popular ? "text-white/60" : "text-base-content/40"}`}>
                              ${plan.monthlyPrice}
                            </span>
                          )}
                          <span className="text-4xl font-bold">
                            ${getPlanPrice(plan)}
                          </span>
                          <span className={`text-lg ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                            {t.perMonth || "/ month"}
                          </span>
                        </div>
                        {billingInterval === 'yearly' && plan.yearlySavings && (
                          <div className="flex flex-col gap-0.5 mt-1">
                            <span className={`text-xs font-semibold ${plan.popular ? "text-white/90" : "text-primary"}`}>
                              {(t.savePercent || "Save {percent}%").replace("{percent}", plan.yearlySavings.toString())}
                            </span>
                            <span className={`text-xs ${plan.popular ? "text-white/70" : "text-base-content/50"}`}>
                              {t.billedAnnually || "Billed annually"}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {(planData.features || plan.features).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://dash.proofio.app"
                    className={`btn btn-block rounded-xl shadow-md hover:shadow-lg transition-all px-6 ${
                      plan.isFree
                        ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                        : plan.popular
                        ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {t.cta || plan.cta}
                  </a>
                  {plan.overage && (
                    <p className={`text-[10px] text-center mt-3 ${plan.popular ? "text-white/60" : "text-base-content/50"}`}>
                      Overage: +${plan.overage.apiCalls.price}/{plan.overage.apiCalls.unit.toLocaleString()} API Calls, +${plan.overage.reviews.price}/{plan.overage.reviews.unit.toLocaleString()} Reviews
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-base-content/70 mt-8"
        >
          {t.allPricesNote || "All prices are billed monthly. Taxes may apply."}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mt-4"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
          >
            <span>{t.viewDetailedPricing || "View detailed pricing comparison"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Enterprise Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative bg-base-100 rounded-[2rem] shadow-lg border border-base-300 p-8 text-center overflow-hidden">
            {/* Background Icon (Favicon) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -bottom-16 -right-16 pointer-events-none z-0"
            >
              <img 
                src="/favicon.png" 
                alt="" 
                className="w-[300px] h-[300px] object-contain"
                style={{ 
                  opacity: 0.1,
                  
                }}
              />
            </motion.div>
            <div className="relative z-10">
            <h3 className="text-xl font-semibold text-base-content mb-2">
              {t.enterprise?.title || "Enterprise"}
            </h3>
            <p className="text-base-content/70 text-sm mb-6">
              {t.enterprise?.description || "Custom plans for high-volume and enterprise teams with dedicated support and SLA guarantees."}
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Unlimited projects & sources</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Custom limits & pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Dedicated support & SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>API access & custom integrations</span>
              </div>
            </div>

            <a
              href="mailto:sales@proofio.app"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium text-sm"
            >
              {t.enterprise?.cta || "Contact Sales"}
            </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}