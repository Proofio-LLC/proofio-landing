'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import { useLocaleContext } from '@/app/components/LocaleProvider';
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

type SupportedLocale = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'it';

function normalizeLocale(locale?: string): SupportedLocale {
  if (locale === 'de' || locale === 'fr' || locale === 'es' || locale === 'pt' || locale === 'it') return locale;
  return 'en';
}

function getText(locale: SupportedLocale) {
  const copy = {
    en: {
      badge: 'Integration',
      why: 'Why integrate',
      challenges: 'Source-specific challenges',
      benefits: 'Key Benefits',
      setup: 'Setup guide',
      quality: 'Data quality standards',
      mistakes: 'Common mistakes',
      practices: 'Best practices',
      fit: 'Fit scenarios',
      notes: 'Implementation notes',
      start: 'Get Started in Minutes',
      setupTime: 'Setup Time',
      difficulty: 'Difficulty',
      docs: 'Documentation',
      faq: 'FAQ',
      viewDocs: 'View docs',
    },
    de: {
      badge: 'Integration', why: 'Warum integrieren', challenges: 'Quellenspezifische Herausforderungen', benefits: 'Wichtige Vorteile',
      setup: 'Setup Leitfaden', quality: 'Datenqualitaetsstandards', mistakes: 'Haeufige Fehler', practices: 'Best Practices', fit: 'Einsatzszenarien',
      notes: 'Implementierungshinweise', start: 'In wenigen Minuten starten', setupTime: 'Setup Zeit', difficulty: 'Schwierigkeit', docs: 'Dokumentation', faq: 'FAQ', viewDocs: 'Docs ansehen'
    },
    fr: { badge: 'Integration', why: 'Pourquoi integrer', challenges: 'Defis de la source', benefits: 'Benefices cles', setup: 'Guide setup', quality: 'Standards qualite data', mistakes: 'Erreurs frequentes', practices: 'Bonnes pratiques', fit: 'Scenarios adaptes', notes: 'Notes implementation', start: 'Demarrage rapide', setupTime: 'Temps setup', difficulty: 'Difficulte', docs: 'Documentation', faq: 'FAQ', viewDocs: 'Voir docs' },
    es: { badge: 'Integracion', why: 'Por que integrar', challenges: 'Problemas especificos de la fuente', benefits: 'Beneficios clave', setup: 'Guia de setup', quality: 'Estandares de calidad de datos', mistakes: 'Errores comunes', practices: 'Buenas practicas', fit: 'Escenarios de encaje', notes: 'Notas de implementacion', start: 'Empezar en minutos', setupTime: 'Tiempo de setup', difficulty: 'Dificultad', docs: 'Documentacion', faq: 'FAQ', viewDocs: 'Ver docs' },
    pt: { badge: 'Integracao', why: 'Por que integrar', challenges: 'Desafios da fonte', benefits: 'Beneficios principais', setup: 'Guia de setup', quality: 'Padroes de qualidade de dados', mistakes: 'Erros comuns', practices: 'Boas praticas', fit: 'Cenarios de encaixe', notes: 'Notas de implementacao', start: 'Comece em minutos', setupTime: 'Tempo de setup', difficulty: 'Dificuldade', docs: 'Documentacao', faq: 'FAQ', viewDocs: 'Ver docs' },
    it: { badge: 'Integrazione', why: 'Perche integrare', challenges: 'Problemi specifici della fonte', benefits: 'Vantaggi principali', setup: 'Guida setup', quality: 'Standard qualita dati', mistakes: 'Errori comuni', practices: 'Best practice', fit: 'Scenari di fit', notes: 'Note implementazione', start: 'Parti in pochi minuti', setupTime: 'Tempo setup', difficulty: 'Difficolta', docs: 'Documentazione', faq: 'FAQ', viewDocs: 'Vedi docs' },
  } as const;
  return copy[locale];
}

export default function IntegrationPageTemplate({ integration, icon: Icon, overrideName, overrideDescription, overrideLongDescription, metadataScript }: IntegrationPageTemplateProps) {
  const localeContext = useLocaleContext();
  const locale = normalizeLocale(localeContext.locale);
  const t = getText(locale);

  const benefitIcons: LucideIcon[] = [Layers3, BarChart3, Radar, Target, BadgeCheck, Zap];
  const integrationName = overrideName || integration.name;
  const description = locale === 'en' ? (overrideDescription || integration.description) : `${integrationName} in Proofio verbinden und Signale strukturiert auswerten.`;
  const longDescription = locale === 'en' ? (overrideLongDescription || integration.longDescription || integration.description) : `${integrationName} wird in einen stabilen Workflow fuer Monitoring, Priorisierung und Reporting eingebunden.`;

  const qualityRules = [
    'Track ingestion completeness by source account and day.',
    'Normalize malformed or partial records before reporting.',
    'Monitor rating and sentiment distribution shifts over time.',
    'Keep alert thresholds tied to trend changes, not one-off events.',
  ];

  const notes = [
    `${longDescription}`,
    `${integrationName} works best with clear owner assignment for setup, quality checks, and response routing.`,
    'Run a staged rollout: connect, validate, calibrate alerts, then scale reporting.',
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        {metadataScript && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadataScript) }} />}

        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full -translate-y-1/2" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"><Icon className="w-4 h-4" /><span className="text-xs font-black uppercase tracking-widest">{t.badge}</span></div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">{integrationName}</h1>
              <p className="text-xl text-base-content/65 max-w-2xl mx-auto">{description}</p>
            </motion.div>

            <div className="relative mb-16">
              <div className="relative bg-white rounded-[2.2rem] p-8 md:p-14 border border-base-200 shadow-2xl overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">{t.why} {integrationName}?</h2>
                <p className="text-lg text-base-content/70 leading-relaxed">{longDescription}</p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.benefits}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(integration.benefits || integration.capabilities || []).map((benefit, idx) => {
                  const BenefitIcon = benefitIcons[idx % benefitIcons.length];
                  return <div key={benefit} className="group bg-white rounded-3xl p-7 border border-base-200 shadow-sm"><div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center mb-4"><BenefitIcon className="w-6 h-6 text-primary" /></div><p className="text-base-content/70 leading-relaxed">{benefit}</p></div>;
                })}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.quality}</h2>
              <div className="bg-white rounded-3xl p-8 border border-base-200"><ul className="space-y-4">{qualityRules.map((rule) => <li key={rule} className="flex items-start gap-3 text-base-content/75 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" /><span>{rule}</span></li>)}</ul></div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.notes}</h2>
              <div className="bg-white rounded-3xl p-8 border border-base-200"><ul className="space-y-4">{notes.map((n) => <li key={n} className="flex items-start gap-3 text-base-content/75 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" /><span>{n}</span></li>)}</ul></div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-10 text-base-content">{t.start}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><Clock3 className="w-4 h-4" />{t.setupTime}</div><p className="text-3xl font-black text-base-content">{integration.setupTime || 'Fast setup'}</p></div>
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><Wrench className="w-4 h-4" />{t.difficulty}</div><p className="text-3xl font-black text-base-content capitalize">{integration.difficulty || 'easy'}</p></div>
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{t.docs}</div><a href={integration.documentation || '#'} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">{t.viewDocs}</a></div>
              </div>
            </section>

            <div className="bg-primary rounded-[2.3rem] p-8 md:p-16 text-white relative overflow-hidden group shadow-2xl shadow-primary/20 border border-white/10">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Start collecting {integrationName} signals today</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Connect in minutes and turn reviews into clear decisions.</p>
                <Link href="https://dash.proofio.app/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all"><Sparkles className="w-5 h-5" />Start for free</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
