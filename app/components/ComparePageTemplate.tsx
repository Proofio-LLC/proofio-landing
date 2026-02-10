'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import CTA from '@/app/components/CTA';
import { useLocaleContext } from '@/app/components/LocaleProvider';
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

type ComparisonSide = { pros: string[]; cons: string[] };

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
  comparisonRows?: Array<{ label: string; proofio: string; competitor: string }>;
  proofioSide?: ComparisonSide;
  competitorSide?: ComparisonSide;
};

type SupportedLocale = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'it';
const featureIcons: LucideIcon[] = [Brain, Radar, Layers3, Sparkles, BadgeCheck, Clock3];

function normalizeLocale(locale?: string): SupportedLocale {
  if (locale === 'de' || locale === 'fr' || locale === 'es' || locale === 'pt' || locale === 'it') return locale;
  return 'en';
}

function copy(locale: SupportedLocale) {
  const t = {
    en: {
      comparison: 'Comparison',
      featureBreakdown: 'Feature Breakdown',
      glance: 'At a glance comparison',
      why: 'Why teams choose Proofio',
      practical: 'Practical advantages for daily operations',
      checklist: 'Decision checklist',
      ready: 'Ready to compare with your own data?',
      pricing: 'See pricing',
      start: 'Start for free',
      ctaText: 'Start for free and see review intelligence across channels in one place.',
      visitCompetitor: 'Visit',
      proofioPros: 'Proofio pros',
      competitorPros: 'pros',
      competitorTradeoffs: 'trade-offs',
    },
    de: {
      comparison: 'Vergleich',
      featureBreakdown: 'Funktionsvergleich',
      glance: 'Überblick',
      why: 'Warum Teams sich für Proofio entscheiden',
      practical: 'Vorteile im Arbeitsalltag',
      checklist: 'Entscheidungshilfe',
      ready: 'Bereit zum Vergleich?',
      pricing: 'Preise ansehen',
      start: 'Kostenlos starten',
      ctaText: 'Jetzt kostenlos starten und alle Reviews zentral an einem Ort analysieren.',
      visitCompetitor: 'Besuchen',
      proofioPros: 'Proofio Vorteile',
      competitorPros: 'Vorteile',
      competitorTradeoffs: 'Nachteile',
    },
    fr: {
      comparison: 'Comparaison',
      featureBreakdown: 'Comparaison des fonctionnalités',
      glance: 'Vue d\'ensemble',
      why: 'Pourquoi choisir Proofio',
      practical: 'Avantages concrets',
      checklist: 'Aide à la décision',
      ready: 'Prêt à essayer?',
      pricing: 'Voir les tarifs',
      start: 'Commencer gratuitement',
      ctaText: 'Démarrez gratuitement et centralisez tous vos avis au même endroit.',
      visitCompetitor: 'Visiter',
      proofioPros: 'Avantages Proofio',
      competitorPros: 'Avantages',
      competitorTradeoffs: 'Inconvénients',
    },
    es: {
      comparison: 'Comparación',
      featureBreakdown: 'Comparación de funciones',
      glance: 'Resumen',
      why: 'Por qué elegir Proofio',
      practical: 'Ventajas prácticas',
      checklist: 'Guía de decisión',
      ready: '¿Listo para probar?',
      pricing: 'Ver precios',
      start: 'Empezar gratis',
      ctaText: 'Empieza gratis y centraliza todas tus reseñas en un solo lugar.',
      visitCompetitor: 'Visitar',
      proofioPros: 'Ventajas Proofio',
      competitorPros: 'Ventajas',
      competitorTradeoffs: 'Desventajas',
    },
    pt: {
      comparison: 'Comparação',
      featureBreakdown: 'Comparação de recursos',
      glance: 'Resumo',
      why: 'Por que escolher Proofio',
      practical: 'Vantagens práticas',
      checklist: 'Guia de decisão',
      ready: 'Pronto para experimentar?',
      pricing: 'Ver preços',
      start: 'Começar grátis',
      ctaText: 'Comece grátis e centralize todas as reviews em um só lugar.',
      visitCompetitor: 'Visitar',
      proofioPros: 'Vantagens Proofio',
      competitorPros: 'Vantagens',
      competitorTradeoffs: 'Desvantagens',
    },
    it: {
      comparison: 'Confronto',
      featureBreakdown: 'Confronto funzionalità',
      glance: 'Riepilogo',
      why: 'Perché scegliere Proofio',
      practical: 'Vantaggi concreti',
      checklist: 'Guida alla scelta',
      ready: 'Pronto per provare?',
      pricing: 'Vedi prezzi',
      start: 'Inizia gratis',
      ctaText: 'Inizia gratis e centralizza tutte le recensioni in un unico posto.',
      visitCompetitor: 'Visita',
      proofioPros: 'Vantaggi Proofio',
      competitorPros: 'Vantaggi',
      competitorTradeoffs: 'Svantaggi',
    },
  } as const;
  return t[locale];
}

function ProsConsCard({ title, items, tone }: { title: string; items: string[]; tone: 'positive' | 'negative' }) {
  const Icon = tone === 'positive' ? CheckCircle2 : XCircle;
  const iconClass = tone === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400';

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
  badgeLabel,
  badgeIcon: BadgeIcon = BadgeCheck,
  jsonLd,
  comparisonRows,
  proofioSide,
  competitorSide,
}: ComparePageTemplateProps) {
  const localeContext = useLocaleContext();
  const locale = normalizeLocale(localeContext.locale);
  const t = copy(locale);
  const messages = { cta: localeContext.messages?.cta };

  const defaultRows = locale === 'en' ? [
    { label: 'Multi-source coverage', proofio: '9+ sources', competitor: 'Limited scope' },
    { label: 'AI analysis', proofio: 'Built-in and actionable', competitor: 'Basic or add-on' },
    { label: 'Alerts and monitoring', proofio: 'Realtime custom alerts', competitor: 'Limited rules' },
    { label: 'Setup speed', proofio: 'Fast onboarding', competitor: 'Longer setup' },
    { label: 'Pricing transparency', proofio: 'Straightforward plans', competitor: `${competitorName} tiered pricing` },
  ] : locale === 'de' ? [
    { label: 'Multi-Quellen-Abdeckung', proofio: '9+ Quellen', competitor: 'Begrenzter Umfang' },
    { label: 'KI-Analyse', proofio: 'Integriert und umsetzbar', competitor: 'Basis oder Add-on' },
    { label: 'Alerts und Monitoring', proofio: 'Echtzeit-Custom-Alerts', competitor: 'Begrenzte Regeln' },
    { label: 'Setup-Geschwindigkeit', proofio: 'Schnelles Onboarding', competitor: 'Längeres Setup' },
    { label: 'Preistransparenz', proofio: 'Klare Pläne', competitor: `${competitorName} gestaffelte Preise` },
  ] : locale === 'fr' ? [
    { label: 'Couverture multi-sources', proofio: '9+ sources', competitor: 'Portée limitée' },
    { label: 'Analyse IA', proofio: 'Intégrée et actionnable', competitor: 'Basique ou extension' },
    { label: 'Alertes et monitoring', proofio: 'Alertes personnalisées en temps réel', competitor: 'Règles limitées' },
    { label: 'Rapidité de configuration', proofio: 'Onboarding rapide', competitor: 'Configuration plus longue' },
    { label: 'Transparence tarifaire', proofio: 'Plans simples', competitor: `${competitorName} tarification échelonnée` },
  ] : locale === 'es' ? [
    { label: 'Cobertura multi-fuente', proofio: '9+ fuentes', competitor: 'Alcance limitado' },
    { label: 'Análisis IA', proofio: 'Integrado y accionable', competitor: 'Básico o complemento' },
    { label: 'Alertas y monitoreo', proofio: 'Alertas personalizadas en tiempo real', competitor: 'Reglas limitadas' },
    { label: 'Velocidad de configuración', proofio: 'Onboarding rápido', competitor: 'Configuración más larga' },
    { label: 'Transparencia de precios', proofio: 'Planes claros', competitor: `${competitorName} precios escalonados` },
  ] : locale === 'pt' ? [
    { label: 'Cobertura multi-fonte', proofio: '9+ fontes', competitor: 'Alcance limitado' },
    { label: 'Análise IA', proofio: 'Integrada e acionável', competitor: 'Básica ou complemento' },
    { label: 'Alertas e monitoramento', proofio: 'Alertas personalizados em tempo real', competitor: 'Regras limitadas' },
    { label: 'Velocidade de configuração', proofio: 'Onboarding rápido', competitor: 'Configuração mais longa' },
    { label: 'Transparência de preços', proofio: 'Planos claros', competitor: `${competitorName} preços escalonados` },
  ] : [
    { label: 'Copertura multi-fonte', proofio: '9+ fonti', competitor: 'Portata limitata' },
    { label: 'Analisi IA', proofio: 'Integrata e attuabile', competitor: 'Base o aggiuntivo' },
    { label: 'Avvisi e monitoraggio', proofio: 'Avvisi personalizzati in tempo reale', competitor: 'Regole limitate' },
    { label: 'Velocità di configurazione', proofio: 'Onboarding rapido', competitor: 'Configurazione più lunga' },
    { label: 'Trasparenza dei prezzi', proofio: 'Piani chiari', competitor: `${competitorName} prezzi scaglionati` },
  ];

  const rows = comparisonRows || defaultRows;

  const translateFeatures = (features: string[], targetLocale: SupportedLocale): string[] => {
    if (targetLocale === 'en') return features;

    // Translate each feature individually using translateText
    return features.map(feature => translateText(feature, targetLocale));
  };

  const localizedFeatures = translateFeatures(proofioFeatures, locale);

  const translateText = (enText: string, targetLocale: SupportedLocale): string => {
    if (targetLocale === 'en') return enText;

    const textMap: Record<string, Record<SupportedLocale, string>> = {
      'Built for cross-platform, AI-first review operations.': {
        en: 'Built for cross-platform, AI-first review operations.',
        de: 'Review Intelligence für operative Entscheidungen in Teams.',
        fr: 'Review Intelligence pour décisions opérationnelles en équipe.',
        es: 'Review Intelligence para decisiones operativas en equipo.',
        pt: 'Review Intelligence para decisões operacionais em equipe.',
        it: 'Review Intelligence per decisioni operative in team.',
      },
      'Established option with platform-specific strengths.': {
        en: 'Established option with platform-specific strengths.',
        de: 'Etablierte Option mit plattformspezifischen Stärken.',
        fr: 'Option établie avec forces spécifiques à la plateforme.',
        es: 'Opción establecida con fortalezas específicas de plataforma.',
        pt: 'Opção estabelecida com forças específicas da plataforma.',
        it: 'Opzione consolidata con punti di forza specifici della piattaforma.',
      },
      'Cross-platform coverage': {
        en: 'Cross-platform coverage',
        de: 'Cross-Platform-Abdeckung',
        fr: 'Couverture multi-plateformes',
        es: 'Cobertura multiplataforma',
        pt: 'Cobertura multiplataforma',
        it: 'Copertura multipiattaforma',
      },
      'Deep AI insights': {
        en: 'Deep AI insights',
        de: 'Tiefe KI-Einblicke',
        fr: 'Analyses IA approfondies',
        es: 'Análisis profundos de IA',
        pt: 'Insights profundos de IA',
        it: 'Insight IA approfonditi',
      },
      'Fast team workflows': {
        en: 'Fast team workflows',
        de: 'Schnelle Team-Workflows',
        fr: 'Workflows d\'équipe rapides',
        es: 'Flujos de trabajo de equipo rápidos',
        pt: 'Fluxos de trabalho de equipe rápidos',
        it: 'Flussi di lavoro di team veloci',
      },
      'Newer than long-established marketplaces': {
        en: 'Newer than long-established marketplaces',
        de: 'Neuer als etablierte Marktplätze',
        fr: 'Plus récent que les places de marché établies',
        es: 'Más nuevo que mercados establecidos',
        pt: 'Mais novo que marketplaces estabelecidos',
        it: 'Più recente di marketplace consolidati',
      },
      'Established market position': {
        en: 'Established market position',
        de: 'Etablierte Marktposition',
        fr: 'Position de marché établie',
        es: 'Posición de mercado establecida',
        pt: 'Posição de mercado estabelecida',
        it: 'Posizione di mercato consolidata',
      },
      'Known category presence': {
        en: 'Known category presence',
        de: 'Bekannte Kategoriepräsenz',
        fr: 'Présence connue dans la catégorie',
        es: 'Presencia conocida en la categoría',
        pt: 'Presença conhecida na categoria',
        it: 'Presenza nota nella categoria',
      },
      'Less AI-first workflow': {
        en: 'Less AI-first workflow',
        de: 'Weniger KI-fokussierter Workflow',
        fr: 'Workflow moins axé sur l\'IA',
        es: 'Flujo de trabajo menos enfocado en IA',
        pt: 'Fluxo de trabalho menos focado em IA',
        it: 'Flusso di lavoro meno incentrato sull\'IA',
      },
      'Narrower cross-platform visibility': {
        en: 'Narrower cross-platform visibility',
        de: 'Engere Cross-Platform-Sichtbarkeit',
        fr: 'Visibilité multi-plateformes limitée',
        es: 'Visibilidad multiplataforma limitada',
        pt: 'Visibilidade multiplataforma limitada',
        it: 'Visibilità multipiattaforma limitata',
      },
      'AI-driven operations for global review programs.': {
        en: 'AI-driven operations for global review programs.',
        de: 'KI-gestützte Operationen für globale Review-Programme.',
        fr: 'Opérations pilotées par IA pour programmes d\'avis globaux.',
        es: 'Operaciones impulsadas por IA para programas de reseñas globales.',
        pt: 'Operações impulsionadas por IA para programas de reviews globais.',
        it: 'Operazioni basate su IA per programmi di recensioni globali.',
      },
      'Regional strength with more limited AI workflows.': {
        en: 'Regional strength with more limited AI workflows.',
        de: 'Regionale Stärke mit begrenzteren KI-Workflows.',
        fr: 'Force régionale avec workflows IA plus limités.',
        es: 'Fortaleza regional con flujos de IA más limitados.',
        pt: 'Força regional com fluxos de IA mais limitados.',
        it: 'Forza regionale con flussi IA più limitati.',
      },
      'Unified review intelligence beyond one channel.': {
        en: 'Unified review intelligence beyond one channel.',
        de: 'Vereinheitlichte Review Intelligence über einen Kanal hinaus.',
        fr: 'Intelligence d\'avis unifiée au-delà d\'un seul canal.',
        es: 'Inteligencia de reseñas unificada más allá de un canal.',
        pt: 'Inteligência de reviews unificada além de um canal.',
        it: 'Intelligence di recensioni unificata oltre un singolo canale.',
      },
      'Strong review presence with less operational depth.': {
        en: 'Strong review presence with less operational depth.',
        de: 'Starke Review-Präsenz mit geringerer operativer Tiefe.',
        fr: 'Présence d\'avis forte avec moins de profondeur opérationnelle.',
        es: 'Presencia fuerte de reseñas con menos profundidad operativa.',
        pt: 'Presença forte de reviews com menos profundidade operacional.',
        it: 'Presenza forte di recensioni con meno profondità operativa.',
      },
      'Global source strategy': {
        en: 'Global source strategy',
        de: 'Globale Quellen-Strategie',
        fr: 'Stratégie de sources globale',
        es: 'Estrategia de fuentes global',
        pt: 'Estratégia de fontes global',
        it: 'Strategia di fonti globale',
      },
      'Actionable AI outputs': {
        en: 'Actionable AI outputs',
        de: 'Umsetzbare KI-Ergebnisse',
        fr: 'Résultats IA actionnables',
        es: 'Resultados de IA accionables',
        pt: 'Resultados de IA acionáveis',
        it: 'Output IA attuabili',
      },
      'Modern dashboard UX': {
        en: 'Modern dashboard UX',
        de: 'Moderne Dashboard-UX',
        fr: 'UX de tableau de bord moderne',
        es: 'UX de panel moderno',
        pt: 'UX de painel moderno',
        it: 'UX dashboard moderna',
      },
      'Younger market footprint in DACH': {
        en: 'Younger market footprint in DACH',
        de: 'Jüngere Marktpräsenz im DACH-Raum',
        fr: 'Présence marché plus récente en DACH',
        es: 'Presencia de mercado más joven en DACH',
        pt: 'Presença de mercado mais jovem em DACH',
        it: 'Presenza mercato più recente in DACH',
      },
      // Trustpilot pros
      'Large existing review base': {
        en: 'Large existing review base',
        de: 'Große bestehende Review-Basis',
        fr: 'Grande base d\'avis existante',
        es: 'Gran base de reseñas existente',
        pt: 'Grande base de reviews existente',
        it: 'Ampia base di recensioni esistente',
      },
      'Global coverage': {
        en: 'Global coverage',
        de: 'Globale Abdeckung',
        fr: 'Couverture mondiale',
        es: 'Cobertura global',
        pt: 'Cobertura global',
        it: 'Copertura globale',
      },
      'Brand recognition': {
        en: 'Brand recognition',
        de: 'Markenbekanntheit',
        fr: 'Reconnaissance de marque',
        es: 'Reconocimiento de marca',
        pt: 'Reconhecimento de marca',
        it: 'Riconoscimento del marchio',
      },
      'Multi-language support': {
        en: 'Multi-language support',
        de: 'Mehrsprachige Unterstützung',
        fr: 'Support multilingue',
        es: 'Soporte multiidioma',
        pt: 'Suporte multilíngue',
        it: 'Supporto multilingue',
      },
      // Trustpilot cons
      'Limited AI-driven insights': {
        en: 'Limited AI-driven insights',
        de: 'Begrenzte KI-gestützte Insights',
        fr: 'Insights IA limités',
        es: 'Insights impulsados por IA limitados',
        pt: 'Insights impulsionados por IA limitados',
        it: 'Insight IA limitati',
      },
      'Less integrated with business workflows': {
        en: 'Less integrated with business workflows',
        de: 'Weniger in Business-Workflows integriert',
        fr: 'Moins intégré aux workflows métier',
        es: 'Menos integrado con flujos de trabajo empresariales',
        pt: 'Menos integrado com fluxos de trabalho empresariais',
        it: 'Meno integrato con i flussi di lavoro aziendali',
      },
      'Higher pricing for enterprise': {
        en: 'Higher pricing for enterprise',
        de: 'Höhere Preise für Enterprise',
        fr: 'Tarification plus élevée pour l\'entreprise',
        es: 'Precios más altos para empresas',
        pt: 'Preços mais altos para empresas',
        it: 'Prezzi più alti per le aziende',
      },
      'Limited sentiment analysis capabilities': {
        en: 'Limited sentiment analysis capabilities',
        de: 'Begrenzte Sentiment-Analyse-Funktionen',
        fr: 'Capacités d\'analyse de sentiment limitées',
        es: 'Capacidades limitadas de análisis de sentimiento',
        pt: 'Capacidades limitadas de análise de sentimento',
        it: 'Capacità limitate di analisi del sentiment',
      },
      // Google Reviews pros
      'Free to use': {
        en: 'Free to use',
        de: 'Kostenlos nutzbar',
        fr: 'Gratuit',
        es: 'Gratis',
        pt: 'Grátis',
        it: 'Gratuito',
      },
      'Deep integration with Google ecosystem': {
        en: 'Deep integration with Google ecosystem',
        de: 'Tiefe Integration in Google-Ökosystem',
        fr: 'Intégration profonde avec l\'écosystème Google',
        es: 'Integración profunda con el ecosistema de Google',
        pt: 'Integração profunda com o ecossistema Google',
        it: 'Integrazione profonda con l\'ecosistema Google',
      },
      'Direct customer reach': {
        en: 'Direct customer reach',
        de: 'Direkter Kundenzugang',
        fr: 'Portée client directe',
        es: 'Alcance directo al cliente',
        pt: 'Alcance direto ao cliente',
        it: 'Raggiungimento diretto del cliente',
      },
      'SEO benefits': {
        en: 'SEO benefits',
        de: 'SEO-Vorteile',
        fr: 'Avantages SEO',
        es: 'Beneficios de SEO',
        pt: 'Benefícios de SEO',
        it: 'Vantaggi SEO',
      },
      // Google Reviews cons
      'No native sentiment analysis': {
        en: 'No native sentiment analysis',
        de: 'Keine native Sentiment-Analyse',
        fr: 'Pas d\'analyse de sentiment native',
        es: 'Sin análisis de sentimiento nativo',
        pt: 'Sem análise de sentimento nativa',
        it: 'Nessuna analisi del sentiment nativa',
      },
      'Limited multi-source aggregation': {
        en: 'Limited multi-source aggregation',
        de: 'Begrenzte Multi-Quellen-Aggregation',
        fr: 'Agrégation multi-sources limitée',
        es: 'Agregación de múltiples fuentes limitada',
        pt: 'Agregação multi-fonte limitada',
        it: 'Aggregazione multi-fonte limitata',
      },
      'Basic analytics': {
        en: 'Basic analytics',
        de: 'Basis-Analysen',
        fr: 'Analyses basiques',
        es: 'Análisis básicos',
        pt: 'Análises básicas',
        it: 'Analisi di base',
      },
      'Manual moderation required': {
        en: 'Manual moderation required',
        de: 'Manuelle Moderation erforderlich',
        fr: 'Modération manuelle requise',
        es: 'Moderación manual requerida',
        pt: 'Moderação manual necessária',
        it: 'Moderazione manuale richiesta',
      },
      'No AI insights': {
        en: 'No AI insights',
        de: 'Keine KI-Insights',
        fr: 'Pas d\'insights IA',
        es: 'Sin insights de IA',
        pt: 'Sem insights de IA',
        it: 'Nessun insight IA',
      },
      // ProvenExpert pros
      'Strong presence in DACH region': {
        en: 'Strong presence in DACH region',
        de: 'Starke Präsenz im DACH-Raum',
        fr: 'Forte présence dans la région DACH',
        es: 'Fuerte presencia en la región DACH',
        pt: 'Forte presença na região DACH',
        it: 'Forte presenza nella regione DACH',
      },
      'Professional service focus': {
        en: 'Professional service focus',
        de: 'Fokus auf professionelle Dienstleistungen',
        fr: 'Focus sur les services professionnels',
        es: 'Enfoque en servicios profesionales',
        pt: 'Foco em serviços profissionais',
        it: 'Focus sui servizi professionali',
      },
      'Certification badges': {
        en: 'Certification badges',
        de: 'Zertifizierungs-Badges',
        fr: 'Badges de certification',
        es: 'Insignias de certificación',
        pt: 'Badges de certificação',
        it: 'Badge di certificazione',
      },
      // ProvenExpert cons
      'Limited AI capabilities': {
        en: 'Limited AI capabilities',
        de: 'Begrenzte KI-Funktionen',
        fr: 'Capacités IA limitées',
        es: 'Capacidades de IA limitadas',
        pt: 'Capacidades de IA limitadas',
        it: 'Capacità IA limitate',
      },
      'Smaller global user base': {
        en: 'Smaller global user base',
        de: 'Kleinere globale Nutzerbasis',
        fr: 'Base d\'utilisateurs mondiale plus petite',
        es: 'Base de usuarios global más pequeña',
        pt: 'Base de usuários global menor',
        it: 'Base utenti globale più piccola',
      },
      'Limited API access': {
        en: 'Limited API access',
        de: 'Begrenzter API-Zugang',
        fr: 'Accès API limité',
        es: 'Acceso a API limitado',
        pt: 'Acesso à API limitado',
        it: 'Accesso API limitato',
      },
      'Regional limitations': {
        en: 'Regional limitations',
        de: 'Regionale Einschränkungen',
        fr: 'Limitations régionales',
        es: 'Limitaciones regionales',
        pt: 'Limitações regionais',
        it: 'Limitazioni regionali',
      },
      // Capterra pros
      'SaaS industry focus': {
        en: 'SaaS industry focus',
        de: 'SaaS-Branchenfokus',
        fr: 'Focus sur l\'industrie SaaS',
        es: 'Enfoque en la industria SaaS',
        pt: 'Foco na indústria SaaS',
        it: 'Focus sull\'industria SaaS',
      },
      'Large review community': {
        en: 'Large review community',
        de: 'Große Review-Community',
        fr: 'Grande communauté d\'avis',
        es: 'Gran comunidad de reseñas',
        pt: 'Grande comunidade de reviews',
        it: 'Grande comunità di recensioni',
      },
      'Strong buyer intent audience': {
        en: 'Strong buyer intent audience',
        de: 'Starke Kaufabsicht-Zielgruppe',
        fr: 'Audience avec forte intention d\'achat',
        es: 'Audiencia con fuerte intención de compra',
        pt: 'Audiência com forte intenção de compra',
        it: 'Pubblico con forte intento d\'acquisto',
      },
      'Good for lead generation': {
        en: 'Good for lead generation',
        de: 'Gut für Lead-Generierung',
        fr: 'Bon pour la génération de leads',
        es: 'Bueno para generación de leads',
        pt: 'Bom para geração de leads',
        it: 'Buono per la generazione di lead',
      },
      // Capterra cons
      'Software-only focus': {
        en: 'Software-only focus',
        de: 'Nur Software-Fokus',
        fr: 'Focus uniquement sur les logiciels',
        es: 'Enfoque solo en software',
        pt: 'Foco apenas em software',
        it: 'Focus solo su software',
      },
      'Limited to B2B products': {
        en: 'Limited to B2B products',
        de: 'Beschränkt auf B2B-Produkte',
        fr: 'Limité aux produits B2B',
        es: 'Limitado a productos B2B',
        pt: 'Limitado a produtos B2B',
        it: 'Limitato a prodotti B2B',
      },
      'No sentiment analysis': {
        en: 'No sentiment analysis',
        de: 'Keine Sentiment-Analyse',
        fr: 'Pas d\'analyse de sentiment',
        es: 'Sin análisis de sentimiento',
        pt: 'Sem análise de sentimento',
        it: 'Nessuna analisi del sentiment',
      },
      'High competition on platform': {
        en: 'High competition on platform',
        de: 'Hoher Wettbewerb auf der Plattform',
        fr: 'Forte concurrence sur la plateforme',
        es: 'Alta competencia en la plataforma',
        pt: 'Alta competição na plataforma',
        it: 'Alta concorrenza sulla piattaforma',
      },
      // G2 pros
      'Largest SaaS review community': {
        en: 'Largest SaaS review community',
        de: 'Größte SaaS-Review-Community',
        fr: 'Plus grande communauté d\'avis SaaS',
        es: 'Mayor comunidad de reseñas SaaS',
        pt: 'Maior comunidade de reviews SaaS',
        it: 'Più grande comunità di recensioni SaaS',
      },
      'Strong brand authority': {
        en: 'Strong brand authority',
        de: 'Starke Markenautorität',
        fr: 'Forte autorité de marque',
        es: 'Fuerte autoridad de marca',
        pt: 'Forte autoridade de marca',
        it: 'Forte autorità del marchio',
      },
      'Lead generation potential': {
        en: 'Lead generation potential',
        de: 'Lead-Generierungspotenzial',
        fr: 'Potentiel de génération de leads',
        es: 'Potencial de generación de leads',
        pt: 'Potencial de geração de leads',
        it: 'Potenziale di generazione di lead',
      },
      'Good review velocity': {
        en: 'Good review velocity',
        de: 'Gute Review-Geschwindigkeit',
        fr: 'Bonne vélocité d\'avis',
        es: 'Buena velocidad de reseñas',
        pt: 'Boa velocidade de reviews',
        it: 'Buona velocità di recensioni',
      },
      'Industry recognition': {
        en: 'Industry recognition',
        de: 'Branchenanerkennung',
        fr: 'Reconnaissance de l\'industrie',
        es: 'Reconocimiento de la industria',
        pt: 'Reconhecimento da indústria',
        it: 'Riconoscimento del settore',
      },
      // G2 cons
      'Limited to B2B': {
        en: 'Limited to B2B',
        de: 'Beschränkt auf B2B',
        fr: 'Limité au B2B',
        es: 'Limitado a B2B',
        pt: 'Limitado a B2B',
        it: 'Limitato al B2B',
      },
      'Expensive for smaller teams': {
        en: 'Expensive for smaller teams',
        de: 'Teuer für kleinere Teams',
        fr: 'Coûteux pour les petites équipes',
        es: 'Costoso para equipos pequeños',
        pt: 'Caro para equipes menores',
        it: 'Costoso per team più piccoli',
      },
      // Google Reviews page summaries
      'From one local channel to full review visibility.': {
        en: 'From one local channel to full review visibility.',
        de: 'Von einem lokalen Kanal zu vollständiger Review-Transparenz.',
        fr: 'D\'un canal local à une visibilité complète des avis.',
        es: 'De un canal local a visibilidad completa de reseñas.',
        pt: 'De um canal local a visibilidade completa de reviews.',
        it: 'Da un canale locale a visibilità completa delle recensioni.',
      },
      'Great native channel, limited multi-source depth.': {
        en: 'Great native channel, limited multi-source depth.',
        de: 'Hervorragender nativer Kanal, begrenzte Multi-Quellen-Tiefe.',
        fr: 'Excellent canal natif, profondeur multi-sources limitée.',
        es: 'Excelente canal nativo, profundidad multi-fuente limitada.',
        pt: 'Excelente canal nativo, profundidade multi-fonte limitada.',
        it: 'Eccellente canale nativo, profondità multi-fonte limitata.',
      },
      'Beyond one platform': {
        en: 'Beyond one platform',
        de: 'Über eine Plattform hinaus',
        fr: 'Au-delà d\'une plateforme',
        es: 'Más allá de una plataforma',
        pt: 'Além de uma plataforma',
        it: 'Oltre una piattaforma',
      },
      'AI-first insights': {
        en: 'AI-first insights',
        de: 'KI-first Insights',
        fr: 'Insights IA en priorité',
        es: 'Insights con IA primero',
        pt: 'Insights com IA primeiro',
        it: 'Insight IA prioritari',
      },
      'Faster response operations': {
        en: 'Faster response operations',
        de: 'Schnellere Antwort-Prozesse',
        fr: 'Opérations de réponse plus rapides',
        es: 'Operaciones de respuesta más rápidas',
        pt: 'Operações de resposta mais rápidas',
        it: 'Operazioni di risposta più veloci',
      },
      'Requires setup of multiple sources': {
        en: 'Requires setup of multiple sources',
        de: 'Erfordert Setup mehrerer Quellen',
        fr: 'Nécessite la configuration de plusieurs sources',
        es: 'Requiere configuración de múltiples fuentes',
        pt: 'Requer configuração de múltiplas fontes',
        it: 'Richiede configurazione di più fonti',
      },
      // Capterra page summaries
      'More than SaaS listing visibility, built for review operations.': {
        en: 'More than SaaS listing visibility, built for review operations.',
        de: 'Mehr als SaaS-Listing-Sichtbarkeit, entwickelt für Review-Operationen.',
        fr: 'Plus qu\'une visibilité de listing SaaS, conçu pour les opérations d\'avis.',
        es: 'Más que visibilidad de listado SaaS, diseñado para operaciones de reseñas.',
        pt: 'Mais que visibilidade de listing SaaS, desenvolvido para operações de reviews.',
        it: 'Più che visibilità di listing SaaS, progettato per operazioni di recensioni.',
      },
      'Useful for software discovery with narrower scope.': {
        en: 'Useful for software discovery with narrower scope.',
        de: 'Nützlich für Software-Discovery mit engerem Fokus.',
        fr: 'Utile pour la découverte de logiciels avec une portée plus étroite.',
        es: 'Útil para descubrimiento de software con alcance más estrecho.',
        pt: 'Útil para descoberta de software com escopo mais estreito.',
        it: 'Utile per la scoperta software con ambito più ristretto.',
      },
      'Multi-source intelligence': {
        en: 'Multi-source intelligence',
        de: 'Multi-Quellen-Intelligence',
        fr: 'Intelligence multi-sources',
        es: 'Inteligencia multi-fuente',
        pt: 'Inteligência multi-fonte',
        it: 'Intelligence multi-fonte',
      },
      'Operational workflows': {
        en: 'Operational workflows',
        de: 'Operative Workflows',
        fr: 'Workflows opérationnels',
        es: 'Flujos de trabajo operativos',
        pt: 'Fluxos de trabalho operacionais',
        it: 'Flussi di lavoro operativi',
      },
      'Team-oriented reporting': {
        en: 'Team-oriented reporting',
        de: 'Team-orientiertes Reporting',
        fr: 'Reporting orienté équipe',
        es: 'Informes orientados al equipo',
        pt: 'Relatórios orientados à equipe',
        it: 'Reporting orientato al team',
      },
      'Not focused only on marketplace lead gen': {
        en: 'Not focused only on marketplace lead gen',
        de: 'Nicht nur auf Marketplace-Lead-Generierung fokussiert',
        fr: 'Non axé uniquement sur la génération de leads marketplace',
        es: 'No enfocado solo en generación de leads de marketplace',
        pt: 'Não focado apenas em geração de leads de marketplace',
        it: 'Non focalizzato solo sulla generazione lead marketplace',
      },
      // G2 page summaries
      'Review intelligence for product and growth teams.': {
        en: 'Review intelligence for product and growth teams.',
        de: 'Review Intelligence für Produkt- und Growth-Teams.',
        fr: 'Intelligence d\'avis pour les équipes produit et croissance.',
        es: 'Inteligencia de reseñas para equipos de producto y crecimiento.',
        pt: 'Inteligência de reviews para equipes de produto e crescimento.',
        it: 'Intelligence di recensioni per team prodotto e crescita.',
      },
      'Strong software marketplace with less AI workflow depth.': {
        en: 'Strong software marketplace with less AI workflow depth.',
        de: 'Starker Software-Marktplatz mit geringerer KI-Workflow-Tiefe.',
        fr: 'Marketplace logiciel fort avec moins de profondeur workflow IA.',
        es: 'Marketplace de software fuerte con menos profundidad de workflow IA.',
        pt: 'Marketplace de software forte com menos profundidade de workflow IA.',
        it: 'Marketplace software forte con meno profondità workflow IA.',
      },
      'Cross-channel perspective': {
        en: 'Cross-channel perspective',
        de: 'Kanalübergreifende Perspektive',
        fr: 'Perspective cross-canal',
        es: 'Perspectiva multicanal',
        pt: 'Perspectiva multicanal',
        it: 'Prospettiva multicanale',
      },
      'AI-first summarization': {
        en: 'AI-first summarization',
        de: 'KI-first Zusammenfassung',
        fr: 'Résumé IA en priorité',
        es: 'Resumen con IA primero',
        pt: 'Resumo com IA primeiro',
        it: 'Riassunto IA prioritario',
      },
      'Action-oriented UX': {
        en: 'Action-oriented UX',
        de: 'Aktionsorientierte UX',
        fr: 'UX orientée action',
        es: 'UX orientada a la acción',
        pt: 'UX orientada à ação',
        it: 'UX orientata all\'azione',
      },
      'Smaller legacy footprint than major marketplaces': {
        en: 'Smaller legacy footprint than major marketplaces',
        de: 'Kleinerer Legacy-Footprint als große Marktplätze',
        fr: 'Empreinte legacy plus petite que les grands marketplaces',
        es: 'Huella legacy más pequeña que los principales marketplaces',
        pt: 'Pegada legacy menor que grandes marketplaces',
        it: 'Impronta legacy più piccola dei marketplace principali',
      },
      // ReviewTrackers page summaries
      'Modern AI operations layer for review teams.': {
        en: 'Modern AI operations layer for review teams.',
        de: 'Moderne KI-Operations-Schicht für Review-Teams.',
        fr: 'Couche opérationnelle IA moderne pour équipes d\'avis.',
        es: 'Capa operativa de IA moderna para equipos de reseñas.',
        pt: 'Camada operacional de IA moderna para equipes de reviews.',
        it: 'Layer operativo IA moderno per team di recensioni.',
      },
      'Established solution with traditional reporting focus.': {
        en: 'Established solution with traditional reporting focus.',
        de: 'Etablierte Lösung mit traditionellem Reporting-Fokus.',
        fr: 'Solution établie avec focus reporting traditionnel.',
        es: 'Solución establecida con enfoque de informes tradicional.',
        pt: 'Solução estabelecida com foco em relatórios tradicionais.',
        it: 'Soluzione consolidata con focus reporting tradizionale.',
      },
      'AI summaries': {
        en: 'AI summaries',
        de: 'KI-Zusammenfassungen',
        fr: 'Résumés IA',
        es: 'Resúmenes de IA',
        pt: 'Resumos de IA',
        it: 'Riassunti IA',
      },
      'App Store & Google Play integrations': {
        en: 'App Store & Google Play integrations',
        de: 'App Store & Google Play Integrationen',
        fr: 'Intégrations App Store et Google Play',
        es: 'Integraciones App Store y Google Play',
        pt: 'Integrações App Store e Google Play',
        it: 'Integrazioni App Store e Google Play',
      },
      'Embeddable widgets': {
        en: 'Embeddable widgets',
        de: 'Einbettbare Widgets',
        fr: 'Widgets intégrables',
        es: 'Widgets incrustables',
        pt: 'Widgets incorporáveis',
        it: 'Widget incorporabili',
      },
      'Enterprise features': {
        en: 'Enterprise features',
        de: 'Enterprise-Funktionen',
        fr: 'Fonctionnalités entreprise',
        es: 'Funciones empresariales',
        pt: 'Recursos empresariais',
        it: 'Funzionalità enterprise',
      },
      'Newer product than incumbents': {
        en: 'Newer product than incumbents',
        de: 'Neueres Produkt als etablierte Lösungen',
        fr: 'Produit plus récent que les solutions établies',
        es: 'Producto más nuevo que las soluciones establecidas',
        pt: 'Produto mais novo que soluções estabelecidas',
        it: 'Prodotto più recente delle soluzioni consolidate',
      },
      // ReviewTrackers competitor pros/cons
      'Mature reporting': {
        en: 'Mature reporting',
        de: 'Ausgereiftes Reporting',
        fr: 'Reporting mature',
        es: 'Informes maduros',
        pt: 'Relatórios maduros',
        it: 'Reporting maturo',
      },
      'Large market presence': {
        en: 'Large market presence',
        de: 'Große Marktpräsenz',
        fr: 'Grande présence sur le marché',
        es: 'Gran presencia en el mercado',
        pt: 'Grande presença no mercado',
        it: 'Grande presenza sul mercato',
      },
      'Less AI-driven classification': {
        en: 'Less AI-driven classification',
        de: 'Weniger KI-gestützte Klassifizierung',
        fr: 'Classification moins pilotée par IA',
        es: 'Clasificación menos impulsada por IA',
        pt: 'Classificação menos impulsionada por IA',
        it: 'Classificazione meno guidata dall\'IA',
      },
      // Trustpilot proofioFeatures
      'AI sentiment analysis and trend detection': {
        en: 'AI sentiment analysis and trend detection',
        de: 'KI-Sentiment-Analyse und Trend-Erkennung',
        fr: 'Analyse de sentiment et détection de tendances par IA',
        es: 'Análisis de sentimiento y detección de tendencias con IA',
        pt: 'Análise de sentimento e detecção de tendências com IA',
        it: 'Analisi del sentiment e rilevamento tendenze con IA',
      },
      'Aggregation across 9+ review sources': {
        en: 'Aggregation across 9+ review sources',
        de: 'Aggregation über 9+ Review-Quellen',
        fr: 'Agrégation de 9+ sources d\'avis',
        es: 'Agregación de 9+ fuentes de reseñas',
        pt: 'Agregação de 9+ fontes de reviews',
        it: 'Aggregazione di 9+ fonti di recensioni',
      },
      'Realtime issue and opportunity alerts': {
        en: 'Realtime issue and opportunity alerts',
        de: 'Echtzeit-Benachrichtigungen für Probleme und Chancen',
        fr: 'Alertes en temps réel pour problèmes et opportunités',
        es: 'Alertas en tiempo real de problemas y oportunidades',
        pt: 'Alertas em tempo real de problemas e oportunidades',
        it: 'Avvisi in tempo reale per problemi e opportunità',
      },
      'Competitor tracking in one dashboard': {
        en: 'Competitor tracking in one dashboard',
        de: 'Wettbewerber-Tracking in einem Dashboard',
        fr: 'Suivi des concurrents dans un seul tableau de bord',
        es: 'Seguimiento de competidores en un panel',
        pt: 'Acompanhamento de concorrentes em um painel',
        it: 'Monitoraggio concorrenti in una dashboard',
      },
      'Actionable workflows for teams': {
        en: 'Actionable workflows for teams',
        de: 'Umsetzbare Workflows für Teams',
        fr: 'Workflows actionnables pour les équipes',
        es: 'Flujos de trabajo accionables para equipos',
        pt: 'Fluxos de trabalho acionáveis para equipes',
        it: 'Flussi di lavoro attuabili per team',
      },
      'Transparent pricing without heavy add-ons': {
        en: 'Transparent pricing without heavy add-ons',
        de: 'Transparente Preise ohne teure Add-ons',
        fr: 'Tarification transparente sans add-ons coûteux',
        es: 'Precios transparentes sin complementos costosos',
        pt: 'Preços transparentes sem complementos caros',
        it: 'Prezzi trasparenti senza add-on costosi',
      },
      // ProvenExpert proofioFeatures
      'AI-powered sentiment and topic extraction': {
        en: 'AI-powered sentiment and topic extraction',
        de: 'KI-gestützte Sentiment- und Themen-Extraktion',
        fr: 'Extraction de sentiment et de sujets par IA',
        es: 'Extracción de sentimiento y temas con IA',
        pt: 'Extração de sentimento e tópicos com IA',
        it: 'Estrazione di sentiment e argomenti con IA',
      },
      'Coverage across key international review channels': {
        en: 'Coverage across key international review channels',
        de: 'Abdeckung wichtiger internationaler Review-Kanäle',
        fr: 'Couverture des principaux canaux d\'avis internationaux',
        es: 'Cobertura de canales de reseñas internacionales clave',
        pt: 'Cobertura de canais de reviews internacionais principais',
        it: 'Copertura dei principali canali di recensioni internazionali',
      },
      'Realtime monitoring and escalation signals': {
        en: 'Realtime monitoring and escalation signals',
        de: 'Echtzeit-Monitoring und Eskalations-Signale',
        fr: 'Monitoring en temps réel et signaux d\'escalade',
        es: 'Monitoreo en tiempo real y señales de escalación',
        pt: 'Monitoramento em tempo real e sinais de escalação',
        it: 'Monitoraggio in tempo reale e segnali di escalation',
      },
      'Competitor context in one dashboard': {
        en: 'Competitor context in one dashboard',
        de: 'Wettbewerber-Kontext in einem Dashboard',
        fr: 'Contexte concurrent dans un seul tableau de bord',
        es: 'Contexto de competidores en un panel',
        pt: 'Contexto de concorrentes em um painel',
        it: 'Contesto concorrenza in una dashboard',
      },
      'Developer-friendly API and integrations': {
        en: 'Developer-friendly API and integrations',
        de: 'Entwicklerfreundliche API und Integrationen',
        fr: 'API et intégrations conviviales pour développeurs',
        es: 'API e integraciones amigables para desarrolladores',
        pt: 'API e integrações amigáveis para desenvolvedores',
        it: 'API e integrazioni developer-friendly',
      },
      'Scalable setup for distributed teams': {
        en: 'Scalable setup for distributed teams',
        de: 'Skalierbares Setup für verteilte Teams',
        fr: 'Configuration scalable pour équipes distribuées',
        es: 'Configuración escalable para equipos distribuidos',
        pt: 'Configuração escalável para equipes distribuídas',
        it: 'Setup scalabile per team distribuiti',
      },
      // Google Reviews proofioFeatures
      'One view for App Store, Play Store, Trustpilot and more': {
        en: 'One view for App Store, Play Store, Trustpilot and more',
        de: 'Eine Ansicht für App Store, Play Store, Trustpilot und mehr',
        fr: 'Vue unique pour App Store, Play Store, Trustpilot et plus',
        es: 'Vista única para App Store, Play Store, Trustpilot y más',
        pt: 'Vista única para App Store, Play Store, Trustpilot e mais',
        it: 'Vista unica per App Store, Play Store, Trustpilot e altro',
      },
      'AI summaries instead of manual reading': {
        en: 'AI summaries instead of manual reading',
        de: 'KI-Zusammenfassungen statt manueller Durchsicht',
        fr: 'Résumés IA au lieu de lecture manuelle',
        es: 'Resúmenes de IA en lugar de lectura manual',
        pt: 'Resumos de IA em vez de leitura manual',
        it: 'Riassunti IA invece di lettura manuale',
      },
      'Automated response support for teams': {
        en: 'Automated response support for teams',
        de: 'Automatisierte Antwortunterstützung für Teams',
        fr: 'Support de réponse automatisé pour les équipes',
        es: 'Soporte de respuesta automatizado para equipos',
        pt: 'Suporte de resposta automatizado para equipes',
        it: 'Supporto risposta automatizzato per team',
      },
      'Benchmarking against competitors': {
        en: 'Benchmarking against competitors',
        de: 'Benchmarking gegen Wettbewerber',
        fr: 'Benchmarking contre concurrents',
        es: 'Benchmarking contra competidores',
        pt: 'Benchmarking contra concorrentes',
        it: 'Benchmarking contro concorrenti',
      },
      'Alerts when sentiment shifts': {
        en: 'Alerts when sentiment shifts',
        de: 'Benachrichtigungen bei Sentiment-Änderungen',
        fr: 'Alertes lors de changements de sentiment',
        es: 'Alertas cuando cambia el sentimiento',
        pt: 'Alertas quando o sentimento muda',
        it: 'Avvisi quando il sentiment cambia',
      },
      'Scales from one project to many': {
        en: 'Scales from one project to many',
        de: 'Skaliert von einem bis zu vielen Projekten',
        fr: 'Évolutif d\'un projet à plusieurs',
        es: 'Escala de un proyecto a muchos',
        pt: 'Escala de um projeto para muitos',
        it: 'Scala da un progetto a molti',
      },
      // Capterra proofioFeatures
      'AI summaries across all connected sources': {
        en: 'AI summaries across all connected sources',
        de: 'KI-Zusammenfassungen über alle verbundenen Quellen',
        fr: 'Résumés IA sur toutes les sources connectées',
        es: 'Resúmenes de IA en todas las fuentes conectadas',
        pt: 'Resumos de IA em todas as fontes conectadas',
        it: 'Riassunti IA su tutte le fonti connesse',
      },
      'Cross-platform reputation tracking in one place': {
        en: 'Cross-platform reputation tracking in one place',
        de: 'Cross-Platform-Reputations-Tracking an einem Ort',
        fr: 'Suivi de réputation multi-plateformes en un seul endroit',
        es: 'Seguimiento de reputación multiplataforma en un lugar',
        pt: 'Acompanhamento de reputação multiplataforma em um lugar',
        it: 'Monitoraggio reputazione multipiattaforma in un posto',
      },
      'Fast alerting for new risks and wins': {
        en: 'Fast alerting for new risks and wins',
        de: 'Schnelle Benachrichtigungen für neue Risiken und Erfolge',
        fr: 'Alertes rapides pour nouveaux risques et succès',
        es: 'Alertas rápidas para nuevos riesgos y logros',
        pt: 'Alertas rápidos para novos riscos e vitórias',
        it: 'Avvisi rapidi per nuovi rischi e successi',
      },
      'Competitor monitoring for positioning decisions': {
        en: 'Competitor monitoring for positioning decisions',
        de: 'Wettbewerber-Monitoring für Positionierungsentscheidungen',
        fr: 'Monitoring concurrent pour décisions de positionnement',
        es: 'Monitoreo de competidores para decisiones de posicionamiento',
        pt: 'Monitoramento de concorrentes para decisões de posicionamento',
        it: 'Monitoraggio concorrenti per decisioni di posizionamento',
      },
      'Operational workflows, not only listing presence': {
        en: 'Operational workflows, not only listing presence',
        de: 'Operative Workflows, nicht nur Listing-Präsenz',
        fr: 'Workflows opérationnels, pas seulement présence listing',
        es: 'Flujos de trabajo operativos, no solo presencia en listados',
        pt: 'Fluxos de trabalho operacionais, não apenas presença em listagens',
        it: 'Flussi di lavoro operativi, non solo presenza listing',
      },
      'Predictable pricing for growing teams': {
        en: 'Predictable pricing for growing teams',
        de: 'Vorhersehbare Preise für wachsende Teams',
        fr: 'Tarification prévisible pour équipes en croissance',
        es: 'Precios predecibles para equipos en crecimiento',
        pt: 'Preços previsíveis para equipes em crescimento',
        it: 'Prezzi prevedibili per team in crescita',
      },
      // G2 proofioFeatures
      'AI-based sentiment and trend intelligence': {
        en: 'AI-based sentiment and trend intelligence',
        de: 'KI-basierte Sentiment- und Trend-Intelligence',
        fr: 'Intelligence de sentiment et de tendances basée sur IA',
        es: 'Inteligencia de sentimiento y tendencias basada en IA',
        pt: 'Inteligência de sentimento e tendências baseada em IA',
        it: 'Intelligence di sentiment e trend basata su IA',
      },
      'Review aggregation beyond SaaS marketplaces': {
        en: 'Review aggregation beyond SaaS marketplaces',
        de: 'Review-Aggregation über SaaS-Marktplätze hinaus',
        fr: 'Agrégation d\'avis au-delà des marketplaces SaaS',
        es: 'Agregación de reseñas más allá de marketplaces SaaS',
        pt: 'Agregação de reviews além de marketplaces SaaS',
        it: 'Aggregazione recensioni oltre i marketplace SaaS',
      },
      'Realtime alerts for critical issues': {
        en: 'Realtime alerts for critical issues',
        de: 'Echtzeit-Benachrichtigungen für kritische Probleme',
        fr: 'Alertes en temps réel pour problèmes critiques',
        es: 'Alertas en tiempo real para problemas críticos',
        pt: 'Alertas em tempo real para problemas críticos',
        it: 'Avvisi in tempo reale per problemi critici',
      },
      'Competitor signal tracking in context': {
        en: 'Competitor signal tracking in context',
        de: 'Wettbewerber-Signal-Tracking im Kontext',
        fr: 'Suivi des signaux concurrents en contexte',
        es: 'Seguimiento de señales de competidores en contexto',
        pt: 'Acompanhamento de sinais de concorrentes em contexto',
        it: 'Monitoraggio segnali concorrenza in contesto',
      },
      'Faster routing from insight to action': {
        en: 'Faster routing from insight to action',
        de: 'Schnellere Weiterleitung von Insight zu Aktion',
        fr: 'Routage plus rapide de l\'insight à l\'action',
        es: 'Enrutamiento más rápido de insight a acción',
        pt: 'Roteamento mais rápido de insight para ação',
        it: 'Routing più veloce da insight ad azione',
      },
      'Clear pricing and onboarding path': {
        en: 'Clear pricing and onboarding path',
        de: 'Klarer Preis- und Onboarding-Pfad',
        fr: 'Tarification et onboarding clairs',
        es: 'Precios y onboarding claros',
        pt: 'Preços e onboarding claros',
        it: 'Prezzi e onboarding chiari',
      },
      // ReviewTrackers proofioFeatures
      'AI summaries with direct next actions': {
        en: 'AI summaries with direct next actions',
        de: 'KI-Zusammenfassungen mit direkten nächsten Schritten',
        fr: 'Résumés IA avec actions suivantes directes',
        es: 'Resúmenes de IA con próximas acciones directas',
        pt: 'Resumos de IA com próximas ações diretas',
        it: 'Riassunti IA con azioni successive dirette',
      },
      'App Store and Google Play integrations included': {
        en: 'App Store and Google Play integrations included',
        de: 'App Store und Google Play Integrationen enthalten',
        fr: 'Intégrations App Store et Google Play incluses',
        es: 'Integraciones de App Store y Google Play incluidas',
        pt: 'Integrações App Store e Google Play incluídas',
        it: 'Integrazioni App Store e Google Play incluse',
      },
      'Embeddable widgets for social proof flows': {
        en: 'Embeddable widgets for social proof flows',
        de: 'Einbettbare Widgets für Social-Proof-Flows',
        fr: 'Widgets intégrables pour flux de preuve sociale',
        es: 'Widgets incrustables para flujos de prueba social',
        pt: 'Widgets incorporáveis para fluxos de prova social',
        it: 'Widget incorporabili per flussi di prova sociale',
      },
      'Realtime monitoring across channels': {
        en: 'Realtime monitoring across channels',
        de: 'Echtzeit-Monitoring über alle Kanäle',
        fr: 'Monitoring en temps réel sur tous les canaux',
        es: 'Monitoreo en tiempo real en todos los canales',
        pt: 'Monitoramento em tempo real em todos os canais',
        it: 'Monitoraggio in tempo reale su tutti i canali',
      },
      'Developer-ready API and automation options': {
        en: 'Developer-ready API and automation options',
        de: 'Entwickler-bereite API und Automatisierungsoptionen',
        fr: 'API prête pour développeurs et options d\'automatisation',
        es: 'API lista para desarrolladores y opciones de automatización',
        pt: 'API pronta para desenvolvedores e opções de automação',
        it: 'API pronta per sviluppatori e opzioni di automazione',
      },
      'Enterprise-ready controls without heavy setup': {
        en: 'Enterprise-ready controls without heavy setup',
        de: 'Enterprise-bereite Kontrollen ohne aufwendiges Setup',
        fr: 'Contrôles entreprise sans configuration lourde',
        es: 'Controles empresariales sin configuración pesada',
        pt: 'Controles empresariais sem configuração pesada',
        it: 'Controlli enterprise senza setup pesante',
      },
    };

    return textMap[enText]?.[targetLocale] || enText;
  };

  const translateArray = (arr: string[], targetLocale: SupportedLocale): string[] => {
    return arr.map(item => translateText(item, targetLocale));
  };

  // Competitor explanations
  const getCompetitorExplanation = (name: string, targetLocale: SupportedLocale): string => {
    const explanations: Record<string, Record<SupportedLocale, string>> = {
      'Trustpilot': {
        en: 'Trustpilot is a global review platform focused on consumer trust and business reviews.',
        de: 'Trustpilot ist eine globale Bewertungsplattform mit Fokus auf Kundenvertrauen und Unternehmens-Reviews.',
        fr: 'Trustpilot est une plateforme d\'avis mondiale axée sur la confiance des consommateurs.',
        es: 'Trustpilot es una plataforma global de reseñas enfocada en la confianza del consumidor.',
        pt: 'Trustpilot é uma plataforma global de avaliações focada na confiança do consumidor.',
        it: 'Trustpilot è una piattaforma globale di recensioni focalizzata sulla fiducia dei consumatori.',
      },
      'ProvenExpert': {
        en: 'ProvenExpert is a European review platform popular in the DACH region, especially for professional services.',
        de: 'ProvenExpert ist eine europäische Bewertungsplattform mit starker Präsenz im DACH-Raum, besonders für professionelle Dienstleistungen.',
        fr: 'ProvenExpert est une plateforme d\'avis européenne populaire dans la région DACH, en particulier pour les services professionnels.',
        es: 'ProvenExpert es una plataforma europea de reseñas popular en la región DACH, especialmente para servicios profesionales.',
        pt: 'ProvenExpert é uma plataforma europeia de avaliações popular na região DACH, especialmente para serviços profissionais.',
        it: 'ProvenExpert è una piattaforma europea di recensioni popolare nella regione DACH, specialmente per servizi professionali.',
      },
      'Google Reviews': {
        en: 'Google Reviews is the native review platform integrated into Google Business Profile, crucial for local search visibility.',
        de: 'Google Reviews ist die native Bewertungsplattform in Google Business Profile, entscheidend für lokale Suchsichtbarkeit.',
        fr: 'Google Reviews est la plateforme d\'avis native intégrée dans Google Business Profile, essentielle pour la visibilité locale.',
        es: 'Google Reviews es la plataforma nativa de reseñas integrada en Google Business Profile, crucial para la visibilidad local.',
        pt: 'Google Reviews é a plataforma nativa de avaliações integrada no Google Business Profile, crucial para visibilidade local.',
        it: 'Google Reviews è la piattaforma nativa di recensioni integrata in Google Business Profile, cruciale per la visibilità locale.',
      },
      'Capterra': {
        en: 'Capterra is a SaaS review platform specializing in software reviews and B2B product comparisons.',
        de: 'Capterra ist eine SaaS-Bewertungsplattform spezialisiert auf Software-Reviews und B2B-Produktvergleiche.',
        fr: 'Capterra est une plateforme d\'avis SaaS spécialisée dans les avis de logiciels et les comparaisons de produits B2B.',
        es: 'Capterra es una plataforma de reseñas SaaS especializada en reseñas de software y comparaciones de productos B2B.',
        pt: 'Capterra é uma plataforma de avaliações SaaS especializada em reviews de software e comparações de produtos B2B.',
        it: 'Capterra è una piattaforma di recensioni SaaS specializzata in recensioni software e confronti prodotti B2B.',
      },
      'G2': {
        en: 'G2 is the leading SaaS review platform with extensive software reviews and buyer intent data.',
        de: 'G2 ist die führende SaaS-Bewertungsplattform mit umfangreichen Software-Reviews und Käuferintentions-Daten.',
        fr: 'G2 est la principale plateforme d\'avis SaaS avec des avis logiciels étendus et des données d\'intention d\'achat.',
        es: 'G2 es la plataforma líder de reseñas SaaS con extensas reseñas de software y datos de intención de compra.',
        pt: 'G2 é a plataforma líder de avaliações SaaS com extensas reviews de software e dados de intenção de compra.',
        it: 'G2 è la piattaforma leader di recensioni SaaS con ampie recensioni software e dati di intenzione d\'acquisto.',
      },
      'ReviewTrackers': {
        en: 'ReviewTrackers is a review management platform focused on multi-location businesses and reputation monitoring.',
        de: 'ReviewTrackers ist eine Review-Management-Plattform fokussiert auf Multi-Standort-Unternehmen und Reputations-Monitoring.',
        fr: 'ReviewTrackers est une plateforme de gestion d\'avis axée sur les entreprises multi-sites et le monitoring de réputation.',
        es: 'ReviewTrackers es una plataforma de gestión de reseñas enfocada en empresas multi-ubicación y monitoreo de reputación.',
        pt: 'ReviewTrackers é uma plataforma de gestão de avaliações focada em empresas multi-localização e monitoramento de reputação.',
        it: 'ReviewTrackers è una piattaforma di gestione recensioni focalizzata su aziende multi-location e monitoraggio reputazione.',
      },
    };

    return explanations[name]?.[targetLocale] || competitorDescription;
  };

  const leftSummary = translateText(proofioSummary || 'Built for cross-platform, AI-first review operations.', locale);
  const rightSummary = translateText(competitorSummary || 'Established option with platform-specific strengths.', locale);

  const competitorExplanation = getCompetitorExplanation(competitorName, locale);

  const defaultProofioSide = {
    pros: ['Cross-platform coverage', 'Deep AI insights', 'Fast team workflows'],
    cons: ['Newer than long-established marketplaces'],
  };

  const defaultCompetitorSide = {
    pros: ['Established market position', 'Known category presence'],
    cons: ['Less AI-first workflow', 'Narrower cross-platform visibility'],
  };

  const proofioList = proofioSide
    ? { pros: translateArray(proofioSide.pros, locale), cons: translateArray(proofioSide.cons, locale) }
    : { pros: translateArray(defaultProofioSide.pros, locale), cons: translateArray(defaultProofioSide.cons, locale) };

  const competitorList = competitorSide
    ? { pros: translateArray(competitorSide.pros, locale), cons: translateArray(competitorSide.cons, locale) }
    : { pros: translateArray(defaultCompetitorSide.pros, locale), cons: translateArray(defaultCompetitorSide.cons, locale) };

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
              <span className="text-sm font-medium uppercase tracking-wider">{badgeLabel || t.comparison}</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6 leading-tight">
              Proofio vs <span className="text-primary">{competitorName}</span>
            </h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed mb-4">
              {competitorExplanation}
            </p>
            <p className="text-lg text-base-content/60 max-w-3xl mx-auto leading-relaxed">
              {locale === 'en'
                ? `See how Proofio compares to ${competitorName} in workflow, effort, and team fit.`
                : locale === 'de'
                ? `Proofio im direkten Vergleich mit ${competitorName} anhand von Workflow, Aufwand und Team-Fit.`
                : locale === 'fr'
                ? `Comparaison de Proofio et ${competitorName} en termes de workflow, d'effort et d'adéquation d'équipe.`
                : locale === 'es'
                ? `Comparación de Proofio y ${competitorName} en términos de workflow, esfuerzo y ajuste de equipo.`
                : locale === 'pt'
                ? `Comparação de Proofio e ${competitorName} em termos de workflow, esforço e adequação de equipe.`
                : `Confronto tra Proofio e ${competitorName} in termini di workflow, sforzo e adattamento del team.`}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://dash.proofio.app/register" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-xl font-bold shadow-xl transition-all">
                {t.start}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-bold transition-all">
                {t.pricing}
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
              <p className="text-2xl font-bold text-base-content">{leftSummary}</p>
            </div>
            <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{competitorName}</h2>
              <p className="text-2xl font-bold text-base-content">{rightSummary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{t.featureBreakdown}</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content">{t.glance}</p>
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
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{t.why}</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content">{t.practical}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {localizedFeatures.map((feature, idx) => {
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
              <ProsConsCard title={t.proofioPros} items={proofioList.pros} tone="positive" />
              <div className="space-y-6">
                <ProsConsCard title={`${competitorName} ${t.competitorPros}`} items={competitorList.pros} tone="positive" />
                <ProsConsCard title={`${competitorName} ${t.competitorTradeoffs}`} items={competitorList.cons} tone="negative" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA locale={locale} messages={messages} />
      <Footer />
    </main>
  );
}
