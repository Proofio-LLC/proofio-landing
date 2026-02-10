'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import CTA from '@/app/components/CTA';
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
      ctaTitle: 'Start collecting signals today',
      ctaText: 'Connect in minutes and turn reviews into clear decisions.',
      startForFree: 'Start for free',
    },
    de: {
      badge: 'Integration', why: 'Warum', challenges: 'Quellenspezifische Herausforderungen', benefits: 'Wichtige Vorteile',
      setup: 'Setup-Anleitung', quality: 'Datenqualität', mistakes: 'Häufige Fehler', practices: 'Best Practices', fit: 'Einsatzszenarien',
      notes: 'Implementierung', start: 'Schnell starten', setupTime: 'Setup-Zeit', difficulty: 'Komplexität', docs: 'Dokumentation', faq: 'FAQ', viewDocs: 'Zur Dokumentation',
      ctaTitle: 'Jetzt starten', ctaText: 'In wenigen Minuten verbinden und Reviews systematisch auswerten.', startForFree: 'Kostenlos starten'
    },
    fr: { badge: 'Intégration', why: 'Pourquoi', challenges: 'Défis spécifiques', benefits: 'Avantages clés', setup: 'Guide de configuration', quality: 'Qualité des données', mistakes: 'Erreurs fréquentes', practices: 'Bonnes pratiques', fit: 'Cas d\'usage', notes: 'Implémentation', start: 'Démarrage rapide', setupTime: 'Temps d\'installation', difficulty: 'Complexité', docs: 'Documentation', faq: 'FAQ', viewDocs: 'Voir la documentation', ctaTitle: 'Démarrer maintenant', ctaText: 'Connectez-vous en quelques minutes et analysez vos avis de manière systématique.', startForFree: 'Commencer gratuitement' },
    es: { badge: 'Integración', why: 'Por qué', challenges: 'Desafíos específicos', benefits: 'Beneficios clave', setup: 'Guía de configuración', quality: 'Calidad de datos', mistakes: 'Errores comunes', practices: 'Mejores prácticas', fit: 'Casos de uso', notes: 'Implementación', start: 'Inicio rápido', setupTime: 'Tiempo de instalación', difficulty: 'Complejidad', docs: 'Documentación', faq: 'FAQ', viewDocs: 'Ver documentación', ctaTitle: 'Empezar ahora', ctaText: 'Conéctate en minutos y analiza tus reseñas de forma sistemática.', startForFree: 'Empezar gratis' },
    pt: { badge: 'Integração', why: 'Por que', challenges: 'Desafios específicos', benefits: 'Benefícios principais', setup: 'Guia de configuração', quality: 'Qualidade de dados', mistakes: 'Erros comuns', practices: 'Melhores práticas', fit: 'Casos de uso', notes: 'Implementação', start: 'Início rápido', setupTime: 'Tempo de instalação', difficulty: 'Complexidade', docs: 'Documentação', faq: 'FAQ', viewDocs: 'Ver documentação', ctaTitle: 'Começar agora', ctaText: 'Conecte em minutos e analise suas reviews de forma sistemática.', startForFree: 'Começar grátis' },
    it: { badge: 'Integrazione', why: 'Perché', challenges: 'Sfide specifiche', benefits: 'Vantaggi principali', setup: 'Guida alla configurazione', quality: 'Qualità dei dati', mistakes: 'Errori comuni', practices: 'Best practice', fit: 'Casi d\'uso', notes: 'Implementazione', start: 'Avvio rapido', setupTime: 'Tempo di installazione', difficulty: 'Complessità', docs: 'Documentazione', faq: 'FAQ', viewDocs: 'Vedi documentazione', ctaTitle: 'Inizia ora', ctaText: 'Connettiti in pochi minuti e analizza le tue recensioni in modo sistematico.', startForFree: 'Inizia gratis' },
  } as const;
  return copy[locale];
}

function getIntegrationDescription(integration: Integration, locale: SupportedLocale): { description: string; longDescription: string } {
  const name = integration.name;

  const descriptions: Record<string, { de: string; longDe: string }> = {
    'google-reviews': {
      de: 'Google Reviews ist die wichtigste Bewertungsquelle für lokale Unternehmen und direkt in Google Suche und Maps sichtbar.',
      longDe: 'Google Business Profile Reviews beeinflussen lokale Suchergebnisse direkt und sind oft der erste Kontaktpunkt für neue Kunden. Die Integration ermöglicht Echtzeit-Monitoring über mehrere Standorte hinweg.',
    },
    'trustpilot': {
      de: 'Trustpilot ist die führende unabhängige Bewertungsplattform für Vertrauen und Transparenz in Europa.',
      longDe: 'Trustpilot Reviews werden weltweit als vertrauenswürdige Quelle für Kundenfeedback anerkannt und in Kaufentscheidungen einbezogen. Die Plattform bietet strukturierte Bewertungen mit Verifizierung.',
    },
    'amazon': {
      de: 'Amazon Product Reviews sind entscheidend für Produktsichtbarkeit, Ranking und Kaufentscheidungen im größten E-Commerce-Marktplatz.',
      longDe: 'Amazon Bewertungen beeinflussen direkt die Buy Box, Produktrankings und Conversion Rates. Die Integration ermöglicht produkt- und variantenspezifisches Monitoring mit Wettbewerbsvergleich.',
    },
    'app-store': {
      de: 'App Store Reviews sind die zentrale Feedbackquelle für iOS-Apps und beeinflussen Download-Entscheidungen und App-Rankings direkt.',
      longDe: 'Apple App Store Bewertungen bestimmen App-Sichtbarkeit in Suchergebnissen und Charts. Die Integration erfasst Reviews über alle Länder und Versionen hinweg mit Release-Tracking.',
    },
    'google-play': {
      de: 'Google Play Reviews sind die Hauptquelle für Android-App-Feedback und entscheidend für Ranking und Nutzerakquise.',
      longDe: 'Google Play Store Bewertungen werden von über 2,5 Milliarden Android-Nutzern gesehen. Die Integration ermöglicht versionsspezifisches Tracking und Pre-Launch-Testing-Feedback.',
    },
    'g2': {
      de: 'G2 ist die führende B2B-Software-Review-Plattform und beeinflusst Enterprise-Kaufentscheidungen maßgeblich.',
      longDe: 'G2 Reviews werden von IT-Entscheidern aktiv zur Softwareauswahl genutzt. Die Plattform bietet detaillierte Feature-Bewertungen und Wettbewerbsvergleiche für B2B-SaaS.',
    },
    'yelp': {
      de: 'Yelp ist die wichtigste Bewertungsplattform für Restaurants, lokale Dienstleister und Einzelhandel in Nordamerika.',
      longDe: 'Yelp Reviews beeinflussen lokale Suchergebnisse und werden vor allem für Restaurant- und Serviceentscheidungen herangezogen. Die Plattform bietet detaillierte Kategorisierung nach Kriterien.',
    },
    'facebook-reviews': {
      de: 'Facebook Reviews erreichen die größte Social-Media-Reichweite und sind direkt mit Unternehmensseiten und lokalem Discovery verknüpft.',
      longDe: 'Facebook Bewertungen werden im größten sozialen Netzwerk angezeigt und in lokale Empfehlungen eingebunden. Die Integration erfasst öffentliches Feedback mit Social-Kontext.',
    },
    'csv-import': {
      de: 'CSV Import ermöglicht die Integration proprietärer Review-Quellen, interner Systeme und historischer Daten.',
      longDe: 'Der CSV Import standardisiert Feedback aus CRM-Systemen, Support-Tools und eigenen Plattformen. Ideal für zentrale Auswertung über alle Kanäle hinweg.',
    },
    'trustpilot-analytics': {
      de: 'Trustpilot Analytics erweitert Standard-Trustpilot-Daten um erweiterte Metriken und Wettbewerbsvergleiche.',
      longDe: 'Diese Integration bietet zusätzliche Analyse-Ebenen für Trustpilot-Reviews, inklusive Branchen-Benchmarks und detaillierter Sentiment-Entwicklung über Zeit.',
    },
    'app-store-reviews': {
      de: 'Erweiterte App Store Review Integration mit granularem Tracking über Versionen, Länder und Geräteklassen hinweg.',
      longDe: 'Diese Integration bietet tiefere App Store Analysen mit Version-für-Version-Vergleichen, regionalen Unterschieden und Feature-spezifischem Feedback-Tracking.',
    },
  };

  const slug = integration.slug;
  const fallback = {
    de: `${name} in Proofio verbinden und Signale strukturiert auswerten.`,
    longDe: `${name} ist eine wichtige Feedbackquelle, die in einen stabilen Workflow für Monitoring, Priorisierung und Reporting eingebunden wird.`,
  };

  const content = descriptions[slug] || fallback;

  return {
    description: locale === 'en' ? integration.description : content.de,
    longDescription: locale === 'en' ? (integration.longDescription || integration.description) : content.longDe,
  };
}

export default function IntegrationPageTemplate({ integration, icon: Icon, overrideName, overrideDescription, overrideLongDescription, metadataScript }: IntegrationPageTemplateProps) {
  const localeContext = useLocaleContext();
  const locale = normalizeLocale(localeContext.locale);
  const t = getText(locale);
  const messages = { cta: localeContext.messages?.cta };

  const benefitIcons: LucideIcon[] = [Layers3, BarChart3, Radar, Target, BadgeCheck, Zap];
  const integrationName = overrideName || integration.name;
  const { description, longDescription } = getIntegrationDescription(integration, locale);
  const finalDescription = overrideDescription || description;
  const finalLongDescription = overrideLongDescription || longDescription;

  const qualityRules = locale === 'en' ? [
    'Track ingestion completeness by source account and day.',
    'Normalize malformed or partial records before reporting.',
    'Monitor rating and sentiment distribution shifts over time.',
    'Keep alert thresholds tied to trend changes, not one-off events.',
  ] : [
    'Vollständigkeit der Datenaufnahme pro Quellkonto und Tag überwachen.',
    'Fehlerhafte oder unvollständige Datensätze vor Reporting normalisieren.',
    'Bewertungs- und Sentiment-Verteilung über Zeit hinweg beobachten.',
    'Alert-Schwellenwerte an Trendänderungen koppeln, nicht an Einzelereignisse.',
  ];

  const notes = locale === 'en' ? [
    `${finalLongDescription}`,
    `${integrationName} works best with clear owner assignment for setup, quality checks, and response routing.`,
    'Run a staged rollout: connect, validate, calibrate alerts, then scale reporting.',
  ] : locale === 'de' ? [
    `${finalLongDescription}`,
    `${integrationName} funktioniert am besten mit klarer Verantwortungszuweisung für Setup, Qualitätsprüfung und Response-Routing.`,
    'Gestaffelter Rollout: Verbinden, validieren, Alerts kalibrieren, dann Reporting skalieren.',
  ] : locale === 'fr' ? [
    `${finalLongDescription}`,
    `${integrationName} fonctionne mieux avec une attribution claire des responsabilités pour la configuration, les contrôles qualité et le routage des réponses.`,
    'Déploiement progressif : connecter, valider, calibrer les alertes, puis étendre le reporting.',
  ] : locale === 'es' ? [
    `${finalLongDescription}`,
    `${integrationName} funciona mejor con asignación clara de responsabilidades para configuración, controles de calidad y enrutamiento de respuestas.`,
    'Despliegue escalonado: conectar, validar, calibrar alertas, luego escalar reporting.',
  ] : locale === 'pt' ? [
    `${finalLongDescription}`,
    `${integrationName} funciona melhor com atribuição clara de responsabilidades para configuração, controles de qualidade e roteamento de respostas.`,
    'Implementação em etapas: conectar, validar, calibrar alertas, depois escalar reporting.',
  ] : [
    `${finalLongDescription}`,
    `${integrationName} funziona meglio con chiara assegnazione di responsabilità per configurazione, controlli qualità e routing delle risposte.`,
    'Rollout graduale: connettere, validare, calibrare avvisi, poi scalare reporting.',
  ];

  // Generic benefit translation function
  const translateBenefit = (benefit: string, targetLocale: SupportedLocale): string => {
    if (targetLocale === 'en') return benefit;

    const benefitTranslations: Record<string, Record<SupportedLocale, string>> = {
      // Common patterns across integrations
      'Auto-sync reviews in real-time': {
        en: 'Auto-sync reviews in real-time',
        de: 'Reviews automatisch in Echtzeit synchronisieren',
        fr: 'Synchronisation automatique des avis en temps réel',
        es: 'Sincronización automática de reseñas en tiempo real',
        pt: 'Sincronização automática de reviews em tempo real',
        it: 'Sincronizzazione automatica delle recensioni in tempo reale',
      },
      'AI sentiment analysis': {
        en: 'AI sentiment analysis',
        de: 'KI-gestützte Sentiment-Analyse',
        fr: 'Analyse de sentiment par IA',
        es: 'Análisis de sentimiento con IA',
        pt: 'Análise de sentimento com IA',
        it: 'Analisi del sentiment con IA',
      },
      'Trend detection': {
        en: 'Trend detection',
        de: 'Trend-Erkennung',
        fr: 'Détection de tendances',
        es: 'Detección de tendencias',
        pt: 'Detecção de tendências',
        it: 'Rilevamento tendenze',
      },
      'Multi-location support': {
        en: 'Multi-location support',
        de: 'Multi-Standort-Unterstützung',
        fr: 'Support multi-emplacements',
        es: 'Soporte multi-ubicación',
        pt: 'Suporte multi-localização',
        it: 'Supporto multi-location',
      },
      'Automated response suggestions': {
        en: 'Automated response suggestions',
        de: 'Automatisierte Antwortvorschläge',
        fr: 'Suggestions de réponses automatisées',
        es: 'Sugerencias de respuestas automatizadas',
        pt: 'Sugestões de respostas automatizadas',
        it: 'Suggerimenti di risposta automatizzati',
      },
      'Real-time review synchronization': {
        en: 'Real-time review synchronization',
        de: 'Echtzeit-Review-Synchronisierung',
        fr: 'Synchronisation des avis en temps réel',
        es: 'Sincronización de reseñas en tiempo real',
        pt: 'Sincronização de reviews em tempo real',
        it: 'Sincronizzazione recensioni in tempo reale',
      },
      'Topic extraction': {
        en: 'Topic extraction',
        de: 'Themen-Extraktion',
        fr: 'Extraction de sujets',
        es: 'Extracción de temas',
        pt: 'Extração de tópicos',
        it: 'Estrazione di argomenti',
      },
      'Custom alerts': {
        en: 'Custom alerts',
        de: 'Individuelle Benachrichtigungen',
        fr: 'Alertes personnalisées',
        es: 'Alertas personalizadas',
        pt: 'Alertas personalizados',
        it: 'Avvisi personalizzati',
      },
      'Trend analysis': {
        en: 'Trend analysis',
        de: 'Trend-Analyse',
        fr: 'Analyse des tendances',
        es: 'Análisis de tendencias',
        pt: 'Análise de tendências',
        it: 'Analisi delle tendenze',
      },
    };

    // Check for exact match first
    if (benefitTranslations[benefit]) {
      return benefitTranslations[benefit][targetLocale];
    }

    // Generic translation patterns for common phrases
    const patterns: Array<[RegExp, Record<SupportedLocale, string>]> = [
      [
        /^Sync reviews from (.+) in real-time$/,
        {
          en: 'Sync reviews from $1 in real-time',
          de: 'Reviews von $1 in Echtzeit synchronisieren',
          fr: 'Synchroniser les avis de $1 en temps réel',
          es: 'Sincronizar reseñas de $1 en tiempo real',
          pt: 'Sincronizar reviews de $1 em tempo real',
          it: 'Sincronizzare recensioni da $1 in tempo reale',
        },
      ],
      [
        /^AI-powered sentiment analysis/,
        {
          en: benefit,
          de: 'KI-gestützte Sentiment-Analyse zur Emotionserkennung',
          fr: 'Analyse de sentiment par IA pour comprendre les émotions',
          es: 'Análisis de sentimiento con IA para comprender emociones',
          pt: 'Análise de sentimento com IA para entender emoções',
          it: 'Analisi del sentiment con IA per comprendere le emozioni',
        },
      ],
      [
        /^Detect trends and patterns/,
        {
          en: benefit,
          de: 'Trends und Muster über alle Standorte hinweg erkennen',
          fr: 'Détecter tendances et modèles sur tous les emplacements',
          es: 'Detectar tendencias y patrones en todas las ubicaciones',
          pt: 'Detectar tendências e padrões em todas as localizações',
          it: 'Rilevare tendenze e schemi in tutte le location',
        },
      ],
      [
        /^Manage multiple locations/,
        {
          en: benefit,
          de: 'Mehrere Standorte über ein einheitliches Dashboard verwalten',
          fr: 'Gérer plusieurs emplacements depuis un tableau de bord unifié',
          es: 'Gestionar múltiples ubicaciones desde un panel unificado',
          pt: 'Gerenciar múltiplas localizações de um painel unificado',
          it: 'Gestire più location da una dashboard unificata',
        },
      ],
      [
        /^Get AI-suggested responses/,
        {
          en: benefit,
          de: 'KI-generierte Antwortvorschläge zur Zeitersparnis',
          fr: 'Réponses suggérées par IA pour gagner du temps',
          es: 'Respuestas sugeridas por IA para ahorrar tiempo',
          pt: 'Respostas sugeridas por IA para economizar tempo',
          it: 'Risposte suggerite dall\'IA per risparmiare tempo',
        },
      ],
      [
        /^Custom alerts for (.+)$/,
        {
          en: 'Custom alerts for $1',
          de: 'Individuelle Benachrichtigungen für $1',
          fr: 'Alertes personnalisées pour $1',
          es: 'Alertas personalizadas para $1',
          pt: 'Alertas personalizados para $1',
          it: 'Avvisi personalizzati per $1',
        },
      ],
      [
        /^Automatic synchronization/,
        {
          en: benefit,
          de: 'Automatische Synchronisierung aller Reviews',
          fr: 'Synchronisation automatique de tous les avis',
          es: 'Sincronización automática de todas las reseñas',
          pt: 'Sincronização automática de todas as reviews',
          it: 'Sincronizzazione automatica di tutte le recensioni',
        },
      ],
      [
        /^Extract key topics/,
        {
          en: benefit,
          de: 'Wichtige Themen und Muster aus Kundenfeedback extrahieren',
          fr: 'Extraire sujets clés et thèmes des retours clients',
          es: 'Extraer temas clave del feedback de clientes',
          pt: 'Extrair tópicos-chave do feedback dos clientes',
          it: 'Estrarre argomenti chiave dal feedback clienti',
        },
      ],
      [
        /^Set up custom alerts/,
        {
          en: benefit,
          de: 'Individuelle Benachrichtigungen für wichtige Bewertungsänderungen einrichten',
          fr: 'Configurer alertes personnalisées pour changements importants',
          es: 'Configurar alertas personalizadas para cambios importantes',
          pt: 'Configurar alertas personalizados para mudanças importantes',
          it: 'Configurare avvisi personalizzati per cambiamenti importanti',
        },
      ],
      [
        /^Track trends and patterns/,
        {
          en: benefit,
          de: 'Trends und Muster in Kundenrezensionen über Zeit verfolgen',
          fr: 'Suivre tendances et modèles dans les avis clients',
          es: 'Rastrear tendencias y patrones en reseñas de clientes',
          pt: 'Acompanhar tendências e padrões nas reviews dos clientes',
          it: 'Monitorare tendenze e schemi nelle recensioni clienti',
        },
      ],
      [
        /^Respond to reviews directly/,
        {
          en: benefit,
          de: 'Direkt aus dem Proofio-Dashboard auf Reviews antworten',
          fr: 'Répondre aux avis directement depuis le tableau de bord',
          es: 'Responder a reseñas directamente desde el panel',
          pt: 'Responder a reviews diretamente do painel',
          it: 'Rispondere alle recensioni direttamente dalla dashboard',
        },
      ],
    ];

    for (const [pattern, translations] of patterns) {
      const match = benefit.match(pattern);
      if (match) {
        let translated = translations[targetLocale];
        if (match[1]) {
          translated = translated.replace('$1', match[1]);
        }
        return translated;
      }
    }

    // If no translation found, return original
    return benefit;
  };

  const localizedBenefits = (integration.benefits || integration.capabilities || []).map(benefit =>
    translateBenefit(benefit, locale)
  );

  // Translate setup time
  const translateSetupTime = (time: string | undefined): string => {
    if (!time || locale === 'en') return time || 'Fast setup';

    const timeTranslations: Record<string, Record<SupportedLocale, string>> = {
      '< 5 minutes': {
        en: '< 5 minutes',
        de: '< 5 Minuten',
        fr: '< 5 minutes',
        es: '< 5 minutos',
        pt: '< 5 minutos',
        it: '< 5 minuti',
      },
      '5-10 minutes': {
        en: '5-10 minutes',
        de: '5-10 Minuten',
        fr: '5-10 minutes',
        es: '5-10 minutos',
        pt: '5-10 minutos',
        it: '5-10 minuti',
      },
      '10-15 minutes': {
        en: '10-15 minutes',
        de: '10-15 Minuten',
        fr: '10-15 minutes',
        es: '10-15 minutos',
        pt: '10-15 minutos',
        it: '10-15 minuti',
      },
    };

    return timeTranslations[time]?.[locale] || time;
  };

  const localizedSetupTime = translateSetupTime(integration.setupTime);

  // Translate difficulty
  const translateDifficulty = (difficulty: string | undefined): string => {
    if (!difficulty || locale === 'en') return difficulty || 'easy';

    const difficultyTranslations: Record<string, Record<SupportedLocale, string>> = {
      'easy': {
        en: 'easy',
        de: 'einfach',
        fr: 'facile',
        es: 'fácil',
        pt: 'fácil',
        it: 'facile',
      },
      'medium': {
        en: 'medium',
        de: 'mittel',
        fr: 'moyen',
        es: 'medio',
        pt: 'médio',
        it: 'medio',
      },
      'hard': {
        en: 'hard',
        de: 'schwierig',
        fr: 'difficile',
        es: 'difícil',
        pt: 'difícil',
        it: 'difficile',
      },
    };

    return difficultyTranslations[difficulty.toLowerCase()]?.[locale] || difficulty;
  };

  const localizedDifficulty = translateDifficulty(integration.difficulty);

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
              <p className="text-xl text-base-content/65 max-w-2xl mx-auto">{finalDescription}</p>
            </motion.div>

            <div className="relative mb-16">
              <div className="relative bg-white rounded-[2.2rem] p-8 md:p-14 border border-base-200 shadow-2xl overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">{locale === 'en' ? `${t.why} ${integrationName}?` : `${t.why} ${integrationName} integrieren?`}</h2>
                <p className="text-lg text-base-content/70 leading-relaxed">{finalLongDescription}</p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-black mb-8 text-base-content">{t.benefits}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localizedBenefits.map((benefit, idx) => {
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
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><Clock3 className="w-4 h-4" />{t.setupTime}</div><p className="text-3xl font-black text-base-content">{localizedSetupTime}</p></div>
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><Wrench className="w-4 h-4" />{t.difficulty}</div><p className="text-3xl font-black text-base-content capitalize">{localizedDifficulty}</p></div>
                <div className="bg-white rounded-3xl p-8 border border-base-200"><div className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-2 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{t.docs}</div><a href="https://docs.proofio.app" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">{t.viewDocs}</a></div>
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
