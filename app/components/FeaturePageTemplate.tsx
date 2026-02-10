'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import CTA from '@/app/components/CTA';
import { useLocaleContext } from '@/app/components/LocaleProvider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  BadgeCheck,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  ChevronDown,
  Compass,
  Layers3,
  LucideIcon,
  Radar,
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

type WorkflowStep = {
  phase: string;
  title: string;
  detail: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SupportedLocale = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'it';

function normalizeLocale(locale?: string): SupportedLocale {
  if (locale === 'de' || locale === 'fr' || locale === 'es' || locale === 'pt' || locale === 'it') return locale;
  return 'en';
}

function getText(locale: SupportedLocale) {
  const copy = {
    en: {
      feature: 'Feature',
      inputs: 'Inputs',
      outputs: 'Outputs',
      keyBenefits: 'Key Benefits',
      workflow: 'Workflow blueprint',
      workflowIntro:
        'Strong adoption happens when teams define one repeatable cycle and keep it stable for multiple planning periods.',
      notes: 'Operational notes',
      scenarios: 'Applicable scenarios',
      faq: 'FAQ',
      phase: 'Phase',
      ctaTitle: 'Start with clear review workflows',
      ctaText: 'Connect your sources and move from raw feedback to measurable team decisions.',
      startForFree: 'Start for free',
    },
    de: {
      feature: 'Funktion',
      inputs: 'Eingaben',
      outputs: 'Ergebnisse',
      keyBenefits: 'Vorteile',
      workflow: 'Workflow',
      workflowIntro:
        'Der größte Nutzen entsteht, wenn Teams einen wiederholbaren Prozess etablieren und konsequent verfolgen.',
      notes: 'Hinweise zur Umsetzung',
      scenarios: 'Anwendungsfälle',
      faq: 'Häufige Fragen',
      phase: 'Phase',
      ctaTitle: 'Jetzt mit strukturierten Review-Workflows starten',
      ctaText: 'Verbinde deine Quellen und verwandle Feedback in datenbasierte Entscheidungen.',
      startForFree: 'Kostenlos starten',
    },
    fr: {
      feature: 'Fonctionnalité',
      inputs: 'Entrées',
      outputs: 'Résultats',
      keyBenefits: 'Avantages',
      workflow: 'Workflow',
      workflowIntro:
        'L\'adoption est optimale quand les équipes établissent un processus répétable et le suivent rigoureusement.',
      notes: 'Conseils de mise en œuvre',
      scenarios: 'Cas d\'usage',
      faq: 'Questions fréquentes',
      phase: 'Phase',
      ctaTitle: 'Démarrez avec des workflows structurés',
      ctaText: 'Connectez vos sources et transformez les retours en décisions basées sur les données.',
      startForFree: 'Commencer gratuitement',
    },
    es: {
      feature: 'Funcionalidad',
      inputs: 'Entradas',
      outputs: 'Resultados',
      keyBenefits: 'Ventajas',
      workflow: 'Workflow',
      workflowIntro:
        'La adopción mejora cuando el equipo establece un proceso repetible y lo sigue de forma consistente.',
      notes: 'Consejos de implementación',
      scenarios: 'Casos de uso',
      faq: 'Preguntas frecuentes',
      phase: 'Fase',
      ctaTitle: 'Empieza con workflows estructurados',
      ctaText: 'Conecta tus fuentes y transforma el feedback en decisiones basadas en datos.',
      startForFree: 'Empezar gratis',
    },
    pt: {
      feature: 'Funcionalidade',
      inputs: 'Entradas',
      outputs: 'Resultados',
      keyBenefits: 'Vantagens',
      workflow: 'Workflow',
      workflowIntro:
        'A adoção melhora quando a equipe estabelece um processo repetível e o segue consistentemente.',
      notes: 'Conselhos de implementação',
      scenarios: 'Casos de uso',
      faq: 'Perguntas frequentes',
      phase: 'Fase',
      ctaTitle: 'Comece com workflows estruturados',
      ctaText: 'Conecte suas fontes e transforme feedback em decisões baseadas em dados.',
      startForFree: 'Começar grátis',
    },
    it: {
      feature: 'Funzionalità',
      inputs: 'Input',
      outputs: 'Risultati',
      keyBenefits: 'Vantaggi',
      workflow: 'Workflow',
      workflowIntro:
        'L\'adozione migliora quando il team stabilisce un processo ripetibile e lo segue con coerenza.',
      notes: 'Consigli per l\'implementazione',
      scenarios: 'Casi d\'uso',
      faq: 'Domande frequenti',
      phase: 'Fase',
      ctaTitle: 'Inizia con workflow strutturati',
      ctaText: 'Collega le tue fonti e trasforma il feedback in decisioni basate sui dati.',
      startForFree: 'Inizia gratis',
    },
  } as const;

  return copy[locale];
}

function getFeatureDeepContent(name: string, description: string, locale: SupportedLocale) {
  const t = getText(locale);

  if (locale !== 'en') {
    return {
      inputs: [
        `${name} Signale aus verbundenen Quellen mit Zeit- und Bewertungsbezug.`,
        'Team-Regeln für Priorität, Benachrichtigung und Eskalation.',
        'Kontextfelder wie Produktbereich, Segment und Verantwortlicher.',
      ],
      outputs: [
        `${name} Insights für Produkt, Support und Wachstum in einem gemeinsamen Format.`,
        'Priorisierte Signal-Cluster mit klarer Verantwortung und nächsten Schritten.',
        'Wiederverwendbare Wochen- und Monatsberichte für Entscheidungen.',
      ],
      workflow: [
        {
          phase: `${t.phase} 1`,
          title: 'Signalaufnahme und Normalisierung',
          detail: 'Feedback wird über Quellen hinweg strukturiert, damit Teams auf einer konsistenten Datengrundlage arbeiten.',
        },
        {
          phase: `${t.phase} 2`,
          title: 'Priorisierung mit Kontext',
          detail: 'Signale werden nach Produktbereich, Zielgruppe und Risiko geordnet, damit Entscheidungen schneller getroffen werden.',
        },
        {
          phase: `${t.phase} 3`,
          title: 'Umsetzung und Rückmessung',
          detail: 'Nach Aktionen werden Trend- und Sentimentveränderungen gemessen, um den Effekt nachvollziehbar zu machen.',
        },
      ] as WorkflowStep[],
      operationalNotes: [
        `${description}`,
        'Definiert zu Beginn klare Owner für Triage, Umsetzung und Reporting.',
        'Startet mit wenigen Kategorien und erweitert erst nach stabilen Review-Zyklen.',
        'Koppelt jede Entscheidung an eine Metrik und ein Review-Intervall.',
      ],
      localizedBenefits: [
        { title: 'Schnelle Signal-Sichtbarkeit', description: 'Wichtige Veränderungen werden früh erkannt.' },
        { title: 'Bessere Team-Abstimmung', description: 'Produkt, Support und Growth nutzen dieselbe Signallage.' },
        { title: 'Weniger manuelle Analyse', description: 'Wiederholbare Workflows ersetzen ad hoc Auswertungen.' },
      ],
      localizedUseCases: [
        `${name} zur frühen Erkennung kritischer Trends nutzen.`,
        'Support- und Produkt-Entscheidungen mit derselben Datensicht abstimmen.',
        'Regelmäßige Reports für operative und strategische Reviews erstellen.',
      ],
      faq: [
        {
          question: `${name}: Wie schnell entsteht erster Nutzen?`,
          answer: 'Meist innerhalb weniger Tage mit einem ersten priorisierten Signal-Backlog.',
        },
        {
          question: 'Welche Inputs sollte ich zuerst anbinden?',
          answer: 'Beginnt mit den wichtigsten Quellen und erweitert schrittweise.',
        },
        {
          question: 'Wie messe ich den Effekt?',
          answer: 'Mit Basiswerten vor der Massnahme und Trendvergleich nach Umsetzung.',
        },
      ] as FaqItem[],
    };
  }

  return {
    inputs: [
      'Raw reviews from connected sources with timestamp and rating context.',
      'Team-defined alert rules that describe what should trigger action.',
      'Optional labels such as product area, market segment, or priority class.',
    ],
    outputs: [
      `Actionable ${name} insights that are understandable across product, support, and leadership teams.`,
      'Prioritized issue clusters tied to sentiment changes, volume shifts, and urgency.',
      'Reusable reporting artifacts for weekly reviews, planning sessions, and executive updates.',
    ],
    workflow: [
      {
        phase: 'Phase 1',
        title: 'Signal collection and normalization',
        detail:
          'The workflow starts by pulling review signals from all connected platforms and normalizing ratings, metadata, and language patterns.',
      },
      {
        phase: 'Phase 2',
        title: 'Prioritization with context',
        detail:
          'Teams segment signals by product area, customer cohort, or release period so action owners can move quickly.',
      },
      {
        phase: 'Phase 3',
        title: 'Execution and reporting loop',
        detail:
          `After actions, ${name} helps measure effect through trend tracking and sentiment deltas for repeatable improvement loops.`,
      },
    ] as WorkflowStep[],
    operationalNotes: [
      `${name} should be treated as an operational feature inside a repeatable weekly workflow, not only as a reporting view.`,
      'Define ownership for intake, prioritization, and execution before expanding to advanced categorization.',
      'Use one baseline period first, then compare trend and sentiment deltas after product or messaging changes.',
      'Keep one decision log that maps each insight cluster to one owner, one deadline, and one measurable outcome.',
    ],
    localizedBenefits: null,
    localizedUseCases: null,
    faq: [
      {
        question: `How long does it take to operationalize ${name} across teams?`,
        answer: 'Most teams get initial value in days, with stronger maturity over the next planning cycles.',
      },
      {
        question: 'What inputs should we prioritize first?',
        answer: 'Start with your highest-signal review sources and a simple priority model.',
      },
      {
        question: 'How do we prove measurable effect?',
        answer: 'Compare pre-change baseline trends against post-change outcomes with fixed review intervals.',
      },
    ] as FaqItem[],
  };
}

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
  const localeContext = useLocaleContext();
  const locale = normalizeLocale(localeContext.locale);
  const t = getText(locale);
  const deep = getFeatureDeepContent(name, description, locale);
  const benefitIcons: LucideIcon[] = [Brain, BarChart3, Bell, Target, Layers3, Users, Compass, Radar, BadgeCheck, Zap];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const messages = { cta: localeContext.messages?.cta };

  const displayOverview = locale === 'en' ? overviewParagraphs : [description, t.ctaText];
  const displayOverviewTitle = locale === 'en' ? overviewTitle : name;
  const displayBenefits = deep.localizedBenefits || benefits;
  const displayUseCases = deep.localizedUseCases || useCases;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/10 blur-[110px] rounded-full translate-y-1/2" />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Icon className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">{t.feature}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">{name}</h1>
              <p className="text-xl text-base-content/65 max-w-2xl mx-auto">{description}</p>
            </motion.div>


            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-base-200">
                  <h2 className="text-sm font-black uppercase tracking-[0.18em] text-primary mb-4">{t.inputs}</h2>
                  <ul className="space-y-3">{deep.inputs.map((item) => <li key={item} className="flex items-start gap-3 text-base-content/75 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" /><span>{item}</span></li>)}</ul>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-base-200">
                  <h2 className="text-sm font-black uppercase tracking-[0.18em] text-primary mb-4">{t.outputs}</h2>
                  <ul className="space-y-3">{deep.outputs.map((item) => <li key={item} className="flex items-start gap-3 text-base-content/75 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" /><span>{item}</span></li>)}</ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-10 flex items-center gap-3"><Icon className="w-8 h-8 text-primary" />{t.keyBenefits}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayBenefits.map((benefit, idx) => {
                  const BenefitIcon = benefitIcons[idx % benefitIcons.length];
                  return (
                    <div key={`${benefit.title}-${idx}`} className="group bg-white rounded-3xl p-7 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300">
                      <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center text-base-content/35 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
                        <BenefitIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-black text-xl tracking-tight mb-2 text-base-content">{benefit.title}</h3>
                      <p className="text-base-content/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-4xl font-black text-base-content mb-3">{t.workflow}</h2>
                <p className="text-base-content/70 leading-relaxed">{t.workflowIntro}</p>
              </div>
              <div className="grid gap-4">
                {deep.workflow.map((step) => (
                  <div key={step.phase} className="bg-white rounded-3xl p-6 border border-base-200">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">{step.phase}</p>
                    <h3 className="text-xl font-bold text-base-content mb-2">{step.title}</h3>
                    <p className="text-base-content/70 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.notes}</h2>
              <div className="bg-white rounded-3xl p-8 border border-base-200">
                <ul className="space-y-4">
                  {deep.operationalNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-base-content/75 leading-relaxed"><CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" /><span>{note}</span></li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-10 text-base-content">{t.scenarios}</h2>
              <div className="space-y-4">
                {displayUseCases.map((useCase, idx) => (
                  <div key={`${useCase}-${idx}`} className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-primary" /></div>
                    <p className="text-base-content/70 leading-relaxed">{useCase}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.faq}</h2>
              <div className="grid gap-4">
                {deep.faq.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={item.question} className="bg-white rounded-3xl border border-base-200">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                      >
                        <h3 className="text-lg font-bold text-base-content">{item.question}</h3>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-base-content/70 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <CTA locale={locale} messages={messages} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
