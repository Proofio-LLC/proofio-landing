"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: "Perfect for small businesses",
    features: [
      "Up to 3 platforms",
      "1,000 API calls/month",
      "Basic widgets",
      "Email support",
      "Daily updates",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "For growing businesses",
    features: [
      "Unlimited platforms",
      "50,000 API calls/month",
      "All widget presets",
      "Priority support",
      "Custom branding",
      "Real-time updates",
      "Advanced filtering",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 249,
    description: "For large organizations",
    features: [
      "Unlimited platforms",
      "Unlimited API calls",
      "White-label solution",
      "Dedicated support",
      "SLA guarantee",
      "Custom integration",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

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
            <span className="text-sm font-medium">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the plan that fits your needs
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
            All plans include daily updates and access to aggregated review data.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={billingCycle === "monthly" ? "font-semibold text-base-content" : "text-base-content/50"}>
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={billingCycle === "yearly"}
                onChange={(e) => setBillingCycle(e.target.checked ? "yearly" : "monthly")}
              />
              <div className="w-14 h-7 bg-base-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <span className={billingCycle === "yearly" ? "font-semibold text-base-content" : "text-base-content/50"}>
              Yearly
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="badge badge-primary absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  Most Popular
                </div>
              )}
              <div
                className={`card shadow-xl h-full ${
                  plan.popular
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-base-100"
                }`}
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    {billingCycle === "yearly" ? (
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-2xl font-bold line-through ${plan.popular ? "opacity-60" : "opacity-50"}`}>
                            €{plan.monthlyPrice}
                          </span>
                          <span className="text-4xl font-bold">
                            €{plan.yearlyPrice}
                          </span>
                          <span className={`text-lg ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                            / month
                          </span>
                        </div>
                        {(() => {
                          const discount = Math.round(((plan.monthlyPrice - plan.yearlyPrice) / plan.monthlyPrice) * 100);
                          return (
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${
                              plan.popular
                                ? "bg-base-100 text-primary"
                                : "bg-primary/10 text-primary"
                            }`}>
                              -{discount}%
                            </span>
                          );
                        })()}
                        <div className="text-sm opacity-70 w-full">
                          Billed annually (€{plan.yearlyPrice * 12}/year)
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          €{plan.monthlyPrice}
                        </span>
                        <span className={`text-lg ml-2 ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                          / month
                        </span>
                      </>
                    )}
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.cta === "Get Started" ? (
                    <a
                      href="https://dash.proofio.app"
                      className={`btn btn-block rounded-lg shadow-md hover:shadow-lg transition-all px-6 ${
                        plan.popular
                          ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <button
                      className={`btn btn-block rounded-lg shadow-md hover:shadow-lg transition-all px-6 ${
                        plan.popular
                          ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-base-content/70 mt-8"
        >
          All prices are per user, billed monthly. VAT included where applicable.
        </motion.p>
      </div>
    </section>
  );
}



