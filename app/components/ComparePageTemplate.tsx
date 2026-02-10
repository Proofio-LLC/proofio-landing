'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  Clock3,
  Layers3,
  LucideIcon,
  Radar,
  Sparkles,
  XCircle,
} from 'lucide-react';

type ComparisonSide = {
  pros: string[];
  cons: string[];
};

type ComparePageTemplateProps = {
  competitorName: string;
  competitorDescription: string;
  competitorPricing?: string;
  proofioFeatures: string[];
  proofioSummary?: string;
  competitorSummary?: string;
  competitorWebsite?: string;
  badgeLabel?: string;
  badgeIcon?: LucideIcon;
  jsonLd?: Record<string, unknown>;
  comparisonRows?: Array<{
    label: string;
    proofio: string;
    competitor: string;
  }>;
  proofioSide?: ComparisonSide;
  competitorSide?: ComparisonSide;
};

const defaultComparisonRows = (competitorName: string) => [
  { label: 'Multi-source coverage', proofio: '9+ sources', competitor: 'Limited scope' },
  { label: 'AI analysis', proofio: 'Built-in and actionable', competitor: 'Basic or add-on' },
  { label: 'Alerts & monitoring', proofio: 'Realtime custom alerts', competitor: 'Limited rules' },
  { label: 'Setup speed', proofio: 'Fast onboarding', competitor: 'Longer setup' },
  { label: 'Pricing transparency', proofio: 'Straightforward plans', competitor: `${competitorName} tiered pricing` },
];

const featureIcons: LucideIcon[] = [Brain, Radar, Layers3, Sparkles, BadgeCheck, Clock3];

function ProsConsCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'positive' | 'negative';
}) {
  const Icon = tone === 'positive' ? CheckCircle2 : XCircle;
  const iconClass =
    tone === 'positive'
      ? 'text-emerald-600 dark:text-emerald-400'
      : 'text-amber-600 dark:text-amber-400';

  return (
    <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200">
      <h3 className="text-xl font-bold text-base-content mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base-content/70">
            <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ComparePageTemplate({
  competitorName,
  competitorDescription,
  competitorPricing,
  competitorWebsite,
  proofioFeatures,
  proofioSummary,
  competitorSummary,
  badgeLabel = 'Comparison',
  badgeIcon: BadgeIcon = BadgeCheck,
  jsonLd,
  comparisonRows,
  proofioSide,
  competitorSide,
}: ComparePageTemplateProps) {
  const rows = comparisonRows || defaultComparisonRows(competitorName);
  const proofioList = proofioSide || {
    pros: [
      'AI-powered summaries and trends',
      'App Store, Google Play, Trustpilot and more',
      'Fast setup with practical workflows',
    ],
    cons: ['Newer brand compared to legacy platforms'],
  };
  const competitorList = competitorSide || {
    pros: ['Established market position', 'Known category presence'],
    cons: ['Less AI-first workflow', 'Narrower cross-platform visibility'],
  };

  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}

      <section className="pt-32 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
            >
              <BadgeIcon className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">{badgeLabel}</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6 leading-tight">
              Proofio vs <span className="text-primary">{competitorName}</span>
            </h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              {competitorDescription}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://dash.proofio.app/register"
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-xl font-bold shadow-xl transition-all"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Proofio</h2>
              <p className="text-2xl font-bold text-base-content">{proofioSummary || 'Built for cross-platform, AI-first review operations.'}</p>
            </div>
            <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{competitorName}</h2>
              <p className="text-2xl font-bold text-base-content">{competitorSummary || 'Established option with platform-specific strengths.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Feature Breakdown</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content">At a glance comparison</p>
            </div>
            <div className="space-y-3">
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-200">
                  <div className="font-semibold text-base-content">{row.label}</div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-medium">{row.proofio}</div>
                  <div className="text-base-content/70">{row.competitor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Why teams choose Proofio</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content">Practical advantages for daily operations</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {proofioFeatures.map((feature, idx) => {
                const Icon = featureIcons[idx % featureIcons.length];
                return (
                  <div key={feature} className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-base-content font-medium leading-relaxed">{feature}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ProsConsCard title="Proofio pros" items={proofioList.pros} tone="positive" />
              <div className="space-y-6">
                <ProsConsCard title={`${competitorName} pros`} items={competitorList.pros} tone="positive" />
                <ProsConsCard title={`${competitorName} trade-offs`} items={competitorList.cons} tone="negative" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to compare with your own data?</h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Start for free and see review intelligence across channels in one place.
                {competitorPricing ? ` ${competitorName} starts around ${competitorPricing}.` : ''}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://dash.proofio.app/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
                >
                  Start for free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {competitorWebsite && (
                  <Link
                    href={competitorWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold transition-all"
                  >
                    Visit {competitorName}
                  </Link>
                )}
              </div>
            </div>
            <div
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-10 rotate-12"
              style={{
                backgroundImage: 'url(/favicon.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

