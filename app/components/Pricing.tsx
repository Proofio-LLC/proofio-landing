"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For exploring Proofio",
    features: [
      "1 project",
      "2 sources per project",
      "500 reviews per month",
      "1,000 API requests",
      "Weekly reports",
      "Basic email support",
    ],
    cta: "Get Started",
    popular: false,
    isFree: true,
  },
  {
    name: "Growth",
    price: "$29",
    description: "For growing teams",
    features: [
      "5 projects",
      "20 sources per project",
      "10,000 reviews per month",
      "50,000 API requests",
      "Team collaboration",
      "Advanced insights",
      "Automated review signals",
      "Weekly reports",
      "No ads",
      "Advanced email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "$99",
    description: "For scaling businesses",
    features: [
      "Unlimited projects",
      "Unlimited sources",
      "100,000 reviews per month",
      "Unlimited API requests",
      "Team collaboration",
      "Advanced insights",
      "Automated review signals",
      "Weekly reports",
      "No ads",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
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
            Flexible plans for every stage
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
            All plans include daily synchronization and full access to review intelligence.
          </p>
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg border-2 border-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
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
                  <h3 className="card-title text-2xl mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    {plan.isFree ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">
                          Free
                        </span>
                      </div>
                    ) : (
                        <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">
                          {plan.price}
                        </span>
                        <span className={`text-lg ${plan.popular ? "opacity-90" : "opacity-70"}`}>
                          / month
                        </span>
                      </div>
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
                    {plan.cta}
                  </a>
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
          All prices are billed monthly. Taxes may apply.
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
            <span>View detailed pricing comparison</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Enterprise Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="bg-base-100 rounded-[2rem] shadow-lg border border-base-300 p-6 text-center">
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Enterprise
            </h3>
            <p className="text-base-content/70 text-sm mb-4">
              Custom solutions for large organizations with dedicated support and SLA guarantees.
            </p>
            <a
              href="mailto:sales@proofio.app"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium text-sm"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



