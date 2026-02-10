'use client';

import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { SmilePlus } from 'lucide-react';
import { motion } from 'framer-motion';

const feature = {
  name: 'Sentiment Analysis',
  slug: 'sentiment-analysis',
  description: 'Understand customer emotions at scale with AI-powered sentiment analysis',
};

export default function Page() {
  const benefits = [
    { title: 'Instant Insights', description: 'Analyze thousands of reviews in seconds' },
    { title: 'Trend Detection', description: 'Identify emerging issues automatically' },
    { title: 'Multi-Language', description: 'Works across different languages' },
    { title: 'Smart Filtering', description: 'Focus on what matters most' },
    { title: 'Spam Detection', description: 'Remove fake reviews automatically' },
    { title: 'Topic Extraction', description: 'Discover what customers care about' },
  ];

  const useCases = [
    'Product teams monitoring user satisfaction and identifying features that resonate',
    'Marketing teams understanding brand perception across markets',
    'Customer support tracking satisfaction trends and prioritizing feedback',
    'Executives measuring product-market fit with sentiment dashboards',
    'International teams analyzing feedback across multiple languages',
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2" />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <SmilePlus className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Feature</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                {feature.name}
              </h1>
              <p className="text-xl text-base-content/60 max-w-2xl mx-auto">{feature.description}</p>
            </motion.div>

            {/* What Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative mb-20"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/20 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 border border-base-200 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">What is Sentiment Analysis?</h2>
                  <p className="text-lg text-base-content/70 mb-4 leading-relaxed">
                    Sentiment analysis uses AI to automatically detect and classify the emotional tone in customer reviews. Our models analyze thousands of reviews to identify positive, negative, and neutral feedback at scale.
                  </p>
                  <p className="text-lg text-base-content/70 leading-relaxed">
                    Instead of manually reading each review, Proofio's sentiment analysis instantly categorizes feedback, detects trends, and highlights critical issues that demand immediate attention.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-black mb-12 flex items-center gap-3">
                <SmilePlus className="w-8 h-8 text-primary" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center text-base-content/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                      <SmilePlus className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl tracking-tight mb-2">{benefit.title}</h3>
                    <p className="text-base-content/60 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-black mb-12">Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-black text-primary">✓</span>
                    </div>
                    <p className="text-base-content/70 leading-relaxed">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden group shadow-2xl shadow-primary/20 border border-white/10"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

              <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-10 rotate-12"
                style={{
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(0) invert(1)',
                }}
              />

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to understand your customers?</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Start analyzing sentiment in your reviews today</p>
                <Link
                  href="/app/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10"
                >
                  Try Free for 14 Days
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
