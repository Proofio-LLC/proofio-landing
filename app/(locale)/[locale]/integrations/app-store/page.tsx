'use client';

import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { getIntegration } from '@/lib/data/integrations';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('app-store');

  if (!integration) {
    return null;
  }

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
                <Download className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Integration</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                {integration.name}
              </h1>
              <p className="text-xl text-base-content/60 max-w-2xl mx-auto">{integration.description}</p>
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
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Why Integrate {integration.name}?</h2>
                  <p className="text-lg text-base-content/70 mb-4 leading-relaxed">
                    {integration.longDescription}
                  </p>
                  <p className="text-lg text-base-content/70 leading-relaxed">
                    With Proofio's {integration.name} integration, you get instant access to all your reviews with powerful AI-driven insights, automated workflows, and customer intelligence—all from one unified dashboard.
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
                <Download className="w-8 h-8 text-primary" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integration.benefits?.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center text-base-content/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                      <Download className="w-6 h-6" />
                    </div>
                    <p className="text-base-content/70 leading-relaxed">{benefit}</p>
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
                {integration.useCases?.map((useCase, idx) => (
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

            {/* Setup Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-black mb-12">Get Started in Minutes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2">Setup Time</div>
                  <p className="text-3xl font-black text-base-content">{integration.setupTime}</p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2">Difficulty</div>
                  <p className="text-3xl font-black text-base-content capitalize">{integration.difficulty}</p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2">Documentation</div>
                  <a
                    href={integration.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline"
                  >
                    View Docs →
                  </a>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Start Collecting {integration.name} Reviews Today</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Get real-time insights from your customers in minutes</p>
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
