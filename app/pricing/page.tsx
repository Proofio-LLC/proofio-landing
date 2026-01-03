"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Sparkles, Check, X, Infinity, Zap, Info } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    isFree: true,
  },
  {
    name: "Growth",
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: true,
  },
  {
    name: "Scale",
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: false,
  },
];

interface FeatureRow {
  category: string;
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  scale: string | boolean;
  description?: string;
}

const features: FeatureRow[] = [
  // Limits
  {
    category: "Limits",
    feature: "Projects",
    starter: "1",
    growth: "5",
    scale: "Unlimited",
  },
  {
    category: "Limits",
    feature: "Sources per Project",
    starter: "2",
    growth: "20",
    scale: "Unlimited",
  },
  {
    category: "Limits",
    feature: "Reviews per Month",
    starter: "500",
    growth: "10,000",
    scale: "100,000",
  },
  {
    category: "Limits",
    feature: "API Requests per Month",
    starter: "1,000",
    growth: "50,000",
    scale: "100,000",
  },

  // Dashboard & Analytics
  {
    category: "Dashboard & Analytics",
    feature: "Aggregations (Rating Distribution, Sentiment Distribution)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Trends & Statistics",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Insights Page with Charts",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Time Filters (7d, 30d, 90d, all)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Source Breakdown",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Review Volume Analysis",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Top Topics",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Key Takeaways",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Recent Changes",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Dashboard & Analytics",
    feature: "Automatic Summaries",
    starter: false,
    growth: true,
    scale: true,
    description: "🤖 AI-powered",
  },
  {
    category: "Dashboard & Analytics",
    feature: "Automatic Key Insights",
    starter: false,
    growth: true,
    scale: true,
    description: "🤖 AI-powered",
  },
  {
    category: "Dashboard & Analytics",
    feature: "Automatic Trends & Signals",
    starter: false,
    growth: true,
    scale: true,
    description: "🤖 AI-powered",
  },
  {
    category: "Dashboard & Analytics",
    feature: "Automatic Topics",
    starter: false,
    growth: true,
    scale: true,
    description: "🤖 AI-powered",
  },

  // Sources
  {
    category: "Sources",
    feature: "Apple App Store",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Sources",
    feature: "Google Play Store",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Sources",
    feature: "Trustpilot",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Sources",
    feature: "Google Reviews",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Sources",
    feature: "Automatic Daily Synchronization",
    starter: true,
    growth: true,
    scale: true,
  },

  // Notifications
  {
    category: "Notifications",
    feature: "Email for New Reviews",
    starter: true,
    growth: true,
    scale: true,
    description: "Optional configurable",
  },
  {
    category: "Notifications",
    feature: "Email for Negative Reviews",
    starter: true,
    growth: true,
    scale: true,
    description: "Optional configurable",
  },
  {
    category: "Notifications",
    feature: "Weekly Reports via Email",
    starter: true,
    growth: true,
    scale: true,
    description: "Automatically every Monday",
  },

  // Team Features
  {
    category: "Team Features",
    feature: "Invite Team Members",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Team Features",
    feature: "Manage Roles (Admin, Member)",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Team Features",
    feature: "Project-Specific Access",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Team Features",
    feature: "Remove Team Members",
    starter: false,
    growth: true,
    scale: true,
  },

  // Widgets
  {
    category: "Widgets",
    feature: "Create Widget",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Widgets",
    feature: "Widget Types (Stars Badge, Reviews Grid, Carousel, Testimonials, Trust Badge)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Widgets",
    feature: "Widget Export (HTML, WordPress, Shopify, Next.js, React, Webflow, Wix)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Widgets",
    feature: "Widget Configuration (Filter, Style, Layout)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Widgets",
    feature: "Widget Preview",
    starter: true,
    growth: true,
    scale: true,
  },

  // API Features
  {
    category: "API Features",
    feature: "Public API Available",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API Features",
    feature: "API Endpoint: Fetch Reviews",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API Features",
    feature: "API Endpoint: Fetch Aggregations",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API Features",
    feature: "API Endpoint: Fetch Review Clusters",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API Features",
    feature: "Query Filters (Date, Rating, Sentiment, Source)",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "API Features",
    feature: "Rate Limit Headers (X-RateLimit-*)",
    starter: true,
    growth: true,
    scale: true,
  },

  // Support
  {
    category: "Support",
    feature: "Documentation & Tutorials",
    starter: true,
    growth: true,
    scale: true,
    description: "Have a look at our documentation.",
  },
  {
    category: "Support",
    feature: "Basic Email Support",
    starter: true,
    growth: true,
    scale: true,
    description: "✉️ | 3-6 business days",
  },
  {
    category: "Support",
    feature: "Advanced Email Support",
    starter: false,
    growth: true,
    scale: true,
    description: "✉️ | up to 2 business days",
  },
  {
    category: "Support",
    feature: "Priority Support",
    starter: false,
    growth: false,
    scale: true,
    description: "📞 / ✉️ | 1 business days",
  },

  // InApp Ads
  {
    category: "InApp Ads",
    feature: "Ad-Free Experience",
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

function FeatureIcon({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-success" />
    ) : (
      <X className="w-5 h-5 text-error" />
    );
  }
  
  if (value === "Unlimited") {
    return (
      <div className="flex items-center gap-1 text-primary font-semibold">
        <Infinity className="w-5 h-5" />
        <span className="text-sm">Unlimited</span>
      </div>
    );
  }
  
  return <span className="text-sm font-medium">{value}</span>;
}

function CategoryTooltip({ text }: { text: string }) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Info className="w-4 h-4 text-base-content/60 hover:text-primary cursor-help transition-colors" />
      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-base-300 text-base-content text-xs rounded-lg shadow-lg z-50 border border-base-300">
          {text}
          <div className="absolute top-full left-4 -mt-1 w-2 h-2 bg-base-300 border-r border-b border-base-300 rotate-45"></div>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">PRICING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compare All Plans
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
              A detailed overview of all features and limits for each plan. Choose the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dash.proofio.app"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </Link>
              <Link
                href="#pricing-table"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
              >
                View Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Overview */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card shadow-xl ${
                  plan.popular
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-base-100"
                }`}
              >
                <div className="card-body">
                  {plan.popular && (
                    <div className="badge badge-secondary mb-2">Most Popular</div>
                  )}
                  <h3 className="card-title text-2xl mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.isFree ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">Free</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">${plan.monthlyPrice}</span>
                        <span className="text-lg opacity-70">/ month</span>
                      </div>
                    )}
                  </div>
                  <Link
                    href="https://dash.proofio.app"
                    className={`btn btn-block rounded-lg ${
                      plan.isFree
                        ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                        : plan.popular
                        ? "bg-base-100 text-primary border-2 border-primary hover:bg-base-200"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="pricing-table" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Detailed Feature Comparison
              </h2>
              <p className="text-xl text-base-content/70">
                All features in direct comparison
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="table w-full bg-base-100 shadow-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-base-200">
                    <th className="sticky left-0 z-10 bg-base-200 min-w-[250px]">
                      <div className="font-semibold text-base-content">Feature</div>
                    </th>
                    <th className="text-center min-w-[150px]">
                      <div className="font-semibold text-base-content">Starter</div>
                      <div className="text-sm text-base-content/70 font-normal">Free</div>
                    </th>
                    <th className="text-center min-w-[150px] bg-primary/10">
                      <div className="font-semibold text-base-content">Growth</div>
                      <div className="text-sm text-base-content/70 font-normal">$29/month</div>
                    </th>
                    <th className="text-center min-w-[150px]">
                      <div className="font-semibold text-base-content">Scale</div>
                      <div className="text-sm text-base-content/70 font-normal">$99/month</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(groupedFeatures).map(([category, categoryFeatures], categoryIndex) => (
                    <React.Fragment key={category}>
                      <tr className="bg-base-300/50">
                        <td colSpan={4} className="font-bold text-lg py-4 px-6">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            {category}
                            {(category === "Widgets" || category === "API Features") && (
                              <CategoryTooltip text="Widgets and API responses for Free users include Proofio branding" />
                            )}
                          </div>
                        </td>
                      </tr>
                      {categoryFeatures.map((row, rowIndex) => (
                        <tr
                          key={`${category}-${rowIndex}`}
                          className="hover:bg-base-200/50 transition-colors"
                        >
                          <td className="sticky left-0 z-10 bg-base-100 min-w-[250px] py-4 px-6">
                            <div className="font-medium text-base-content">{row.feature}</div>
                            {row.description && (
                              <div className="text-xs text-base-content/60 mt-1">
                                {row.description}
                              </div>
                            )}
                          </td>
                          <td className="text-center py-4 px-6">
                            <div className="flex justify-center">
                              <FeatureIcon value={row.starter} />
                            </div>
                          </td>
                          <td className="text-center py-4 px-6 bg-primary/5">
                            <div className="flex justify-center">
                              <FeatureIcon value={row.growth} />
                            </div>
                          </td>
                          <td className="text-center py-4 px-6">
                            <div className="flex justify-center">
                              <FeatureIcon value={row.scale} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="text-base-content/70 mb-6">
                All prices are billed monthly. Annual billing with discount available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://dash.proofio.app"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all font-medium"
                >
                  Start Free
                </Link>
                <Link
                  href="mailto:sales@proofio.app"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
                >
                  Contact Enterprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

