'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BadgeCheck,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  Compass,
  Layers3,
  LucideIcon,
  Radar,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react';

type FeatureBenefit = {
  title: string;
  description: string;
};

type FeaturePageTemplateProps = {
  name: string;
  description: string;
  icon: LucideIcon;
  overviewTitle: string;
  overviewParagraphs: string[];
  benefits: FeatureBenefit[];
  useCases: string[];
  ctaTitle: string;
  ctaText: string;
};

export default function FeaturePageTemplate({
  name,
  description,
  icon: Icon,
  overviewTitle,
  overviewParagraphs,
  benefits,
  useCases,
  ctaTitle,
  ctaText,
}: FeaturePageTemplateProps) {
  const benefitIcons: LucideIcon[] = [Brain, BarChart3, Bell, Target, Layers3, Users, Compass, Radar, BadgeCheck, Zap];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/10 blur-[110px] rounded-full translate-y-1/2" />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Icon className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Feature</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">{name}</h1>
              <p className="text-xl text-base-content/65 max-w-2xl mx-auto">{description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur opacity-40" />
              <div className="relative bg-white rounded-[2.2rem] p-8 md:p-14 border border-base-200 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <h2 className="relative z-10 text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">{overviewTitle}</h2>
                <div className="relative z-10 space-y-4">
                  {overviewParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg text-base-content/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-black mb-10 flex items-center gap-3">
                <Icon className="w-8 h-8 text-primary" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="group bg-white rounded-3xl p-7 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300"
                  >
                    {(() => {
                      const BenefitIcon = benefitIcons[idx % benefitIcons.length];
                      return (
                    <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center text-base-content/35 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                          <BenefitIcon className="w-6 h-6" />
                    </div>
                      );
                    })()}
                    <h3 className="font-black text-xl tracking-tight mb-2 text-base-content">{benefit.title}</h3>
                    <p className="text-base-content/60 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-black mb-10 text-base-content">Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-base-content/70 leading-relaxed">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2.3rem] p-8 md:p-16 text-white relative overflow-hidden group shadow-2xl shadow-primary/20 border border-white/10"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
              <div
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-10 rotate-12"
                style={{
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(0) invert(1)',
                }}
              />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{ctaTitle}</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{ctaText}</p>
                <Link
                  href="https://dash.proofio.app/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10"
                >
                  <Sparkles className="w-5 h-5" />
                  Start for free
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
