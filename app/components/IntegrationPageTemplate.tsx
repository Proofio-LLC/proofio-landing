'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import type { Integration } from '@/lib/data/integrations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Layers3,
  LucideIcon,
  Radar,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react';

type IntegrationPageTemplateProps = {
  integration: Integration;
  icon: LucideIcon;
  overrideName?: string;
  overrideDescription?: string;
  overrideLongDescription?: string;
  metadataScript?: Record<string, unknown>;
};

export default function IntegrationPageTemplate({
  integration,
  icon: Icon,
  overrideName,
  overrideDescription,
  overrideLongDescription,
  metadataScript,
}: IntegrationPageTemplateProps) {
  const benefitIcons: LucideIcon[] = [Layers3, BarChart3, Radar, Target, BadgeCheck, Zap];
  const integrationName = overrideName || integration.name;
  const description = overrideDescription || integration.description;
  const longDescription = overrideLongDescription || integration.longDescription || integration.description;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        {metadataScript && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadataScript) }} />
        )}

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
                <span className="text-xs font-black uppercase tracking-widest">Integration</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">{integrationName}</h1>
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
                <h2 className="relative z-10 text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">
                  Why integrate {integrationName}?
                </h2>
                <div className="relative z-10 space-y-4">
                  <p className="text-lg text-base-content/70 leading-relaxed">{longDescription}</p>
                  <p className="text-lg text-base-content/70 leading-relaxed">
                    Proofio helps your team move from raw reviews to clear action with one streamlined workflow.
                  </p>
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
                {(integration.benefits || integration.capabilities || []).map((benefit, idx) => (
                  <motion.div
                    key={benefit}
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
                    <p className="text-base-content/70 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {integration.useCases && integration.useCases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-4xl font-black mb-10 text-base-content">Use Cases</h2>
                <div className="space-y-4">
                  {integration.useCases.map((useCase, idx) => (
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
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-black mb-10 text-base-content">Get Started in Minutes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Clock3 className="w-4 h-4" />
                    Setup Time
                  </div>
                  <p className="text-3xl font-black text-base-content">{integration.setupTime || 'Fast setup'}</p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Difficulty
                  </div>
                  <p className="text-3xl font-black text-base-content capitalize">{integration.difficulty || 'easy'}</p>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Documentation
                  </div>
                  <a
                    href={integration.documentation || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline"
                  >
                    View docs
                  </a>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                  Start collecting {integrationName} signals today
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Connect in minutes and turn reviews into clear decisions.
                </p>
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
