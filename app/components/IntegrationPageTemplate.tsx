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
      'Collect product reviews automatically from Amazon': {
        en: 'Collect product reviews automatically from Amazon',
        de: 'Produktbewertungen automatisch von Amazon sammeln',
        fr: 'Collecter automatiquement les avis produits depuis Amazon',
        es: 'Recopilar automáticamente reseñas de productos desde Amazon',
        pt: 'Coletar automaticamente avaliações de produtos da Amazon',
        it: 'Raccogliere automaticamente le recensioni prodotto da Amazon',
      },
      'Analyze sentiment to measure product satisfaction': {
        en: 'Analyze sentiment to measure product satisfaction',
        de: 'Sentiment analysieren, um die Produktzufriedenheit zu messen',
        fr: 'Analyser le sentiment pour mesurer la satisfaction produit',
        es: 'Analizar el sentimiento para medir la satisfacción del producto',
        pt: 'Analisar sentimento para medir a satisfação com o produto',
        it: 'Analizzare il sentiment per misurare la soddisfazione del prodotto',
      },
      'Extract themes and patterns from customer feedback': {
        en: 'Extract themes and patterns from customer feedback',
        de: 'Themen und Muster aus Kundenfeedback extrahieren',
        fr: 'Extraire des thèmes et modèles des retours clients',
        es: 'Extraer temas y patrones del feedback de clientes',
        pt: 'Extrair temas e padrões do feedback dos clientes',
        it: 'Estrarre temi e schemi dal feedback dei clienti',
      },
      'Compare your performance against competitors': {
        en: 'Compare your performance against competitors',
        de: 'Eigene Performance mit Wettbewerbern vergleichen',
        fr: 'Comparer vos performances à celles des concurrents',
        es: 'Comparar tu rendimiento con el de la competencia',
        pt: 'Comparar seu desempenho com o dos concorrentes',
        it: 'Confrontare le tue prestazioni con i concorrenti',
      },
      'Track rating trends to monitor progress': {
        en: 'Track rating trends to monitor progress',
        de: 'Bewertungstrends verfolgen, um Fortschritt zu messen',
        fr: 'Suivre les tendances de notes pour mesurer les progrès',
        es: 'Seguir tendencias de calificaciones para medir el progreso',
        pt: 'Acompanhar tendências de avaliação para medir progresso',
        it: 'Monitorare le tendenze delle valutazioni per misurare i progressi',
      },
      'Generate insights to improve product listings': {
        en: 'Generate insights to improve product listings',
        de: 'Erkenntnisse generieren, um Produktlistings zu verbessern',
        fr: 'Générer des insights pour améliorer les fiches produit',
        es: 'Generar insights para mejorar listados de productos',
        pt: 'Gerar insights para melhorar listagens de produtos',
        it: 'Generare insight per migliorare le schede prodotto',
      },
      'Automatically collect Android app reviews from Google Play': {
        en: 'Automatically collect Android app reviews from Google Play',
        de: 'Android-App-Bewertungen automatisch aus Google Play sammeln',
        fr: 'Collecter automatiquement les avis Android depuis Google Play',
        es: 'Recopilar automáticamente reseñas de Android desde Google Play',
        pt: 'Coletar automaticamente reviews de apps Android do Google Play',
        it: 'Raccogliere automaticamente le recensioni Android da Google Play',
      },
      'Analyze sentiment to measure user satisfaction': {
        en: 'Analyze sentiment to measure user satisfaction',
        de: 'Sentiment analysieren, um die Nutzerzufriedenheit zu messen',
        fr: 'Analyser le sentiment pour mesurer la satisfaction utilisateur',
        es: 'Analizar el sentimiento para medir la satisfacción de usuarios',
        pt: 'Analisar sentimento para medir a satisfação dos usuários',
        it: 'Analizzare il sentiment per misurare la soddisfazione degli utenti',
      },
      'Detect trends across all your Android applications': {
        en: 'Detect trends across all your Android applications',
        de: 'Trends über alle Android-Anwendungen hinweg erkennen',
        fr: 'Détecter des tendances sur toutes vos applications Android',
        es: 'Detectar tendencias en todas tus aplicaciones Android',
        pt: 'Detectar tendências em todos os seus aplicativos Android',
        it: 'Rilevare trend su tutte le tue applicazioni Android',
      },
      'Manage reviews from multiple apps in one place': {
        en: 'Manage reviews from multiple apps in one place',
        de: 'Bewertungen aus mehreren Apps an einem Ort verwalten',
        fr: 'Gérer les avis de plusieurs apps au même endroit',
        es: 'Gestionar reseñas de múltiples apps en un solo lugar',
        pt: 'Gerenciar reviews de vários apps em um único lugar',
        it: 'Gestire recensioni di più app in un unico posto',
      },
      'Identify critical issues reported by users': {
        en: 'Identify critical issues reported by users',
        de: 'Kritische, von Nutzern gemeldete Probleme identifizieren',
        fr: 'Identifier les problèmes critiques signalés par les utilisateurs',
        es: 'Identificar problemas críticos reportados por usuarios',
        pt: 'Identificar problemas críticos relatados pelos usuários',
        it: 'Identificare problemi critici segnalati dagli utenti',
      },
      'Reply to reviews with AI-suggested responses': {
        en: 'Reply to reviews with AI-suggested responses',
        de: 'Auf Bewertungen mit KI-gestützten Antwortvorschlägen antworten',
        fr: 'Répondre aux avis avec des réponses suggérées par IA',
        es: 'Responder a reseñas con respuestas sugeridas por IA',
        pt: 'Responder a reviews com respostas sugeridas por IA',
        it: 'Rispondere alle recensioni con risposte suggerite dall\'IA',
      },
      // Google Reviews specific benefits
      'Sync reviews from Google Business Profile in real-time': {
        en: 'Sync reviews from Google Business Profile in real-time',
        de: 'Reviews von Google Business Profile in Echtzeit synchronisieren',
        fr: 'Synchroniser les avis de Google Business Profile en temps réel',
        es: 'Sincronizar reseñas de Google Business Profile en tiempo real',
        pt: 'Sincronizar reviews do Google Business Profile em tempo real',
        it: 'Sincronizzare recensioni da Google Business Profile in tempo reale',
      },
      'AI-powered sentiment analysis to understand customer emotions': {
        en: 'AI-powered sentiment analysis to understand customer emotions',
        de: 'KI-gestützte Sentiment-Analyse zur Emotionserkennung',
        fr: 'Analyse de sentiment par IA pour comprendre les émotions des clients',
        es: 'Análisis de sentimiento con IA para comprender emociones de clientes',
        pt: 'Análise de sentimento com IA para entender emoções dos clientes',
        it: 'Analisi del sentiment con IA per comprendere le emozioni dei clienti',
      },
      'Detect trends and patterns across all locations': {
        en: 'Detect trends and patterns across all locations',
        de: 'Trends und Muster über alle Standorte hinweg erkennen',
        fr: 'Détecter tendances et modèles sur tous les emplacements',
        es: 'Detectar tendencias y patrones en todas las ubicaciones',
        pt: 'Detectar tendências e padrões em todas as localizações',
        it: 'Rilevare tendenze e schemi in tutte le location',
      },
      'Manage multiple locations from a unified dashboard': {
        en: 'Manage multiple locations from a unified dashboard',
        de: 'Mehrere Standorte über ein einheitliches Dashboard verwalten',
        fr: 'Gérer plusieurs emplacements depuis un tableau de bord unifié',
        es: 'Gestionar múltiples ubicaciones desde un panel unificado',
        pt: 'Gerenciar múltiplas localizações de um painel unificado',
        it: 'Gestire più location da una dashboard unificata',
      },
      'Get AI-suggested responses to save time': {
        en: 'Get AI-suggested responses to save time',
        de: 'KI-generierte Antwortvorschläge zur Zeitersparnis',
        fr: 'Réponses suggérées par IA pour gagner du temps',
        es: 'Respuestas sugeridas por IA para ahorrar tiempo',
        pt: 'Respostas sugeridas por IA para economizar tempo',
        it: 'Risposte suggerite dall\'IA per risparmiare tempo',
      },
      'Custom alerts for sudden rating changes or keyword mentions': {
        en: 'Custom alerts for sudden rating changes or keyword mentions',
        de: 'Individuelle Benachrichtigungen für plötzliche Bewertungsänderungen oder Keyword-Erwähnungen',
        fr: 'Alertes personnalisées pour changements de notes soudains ou mentions de mots-clés',
        es: 'Alertas personalizadas para cambios repentinos de calificaciones o menciones de palabras clave',
        pt: 'Alertas personalizados para mudanças súbitas de avaliação ou menções de palavras-chave',
        it: 'Avvisi personalizzati per cambiamenti improvvisi di valutazione o menzioni di parole chiave',
      },
      // Trustpilot specific benefits
      'Sync Trustpilot reviews automatically': {
        en: 'Sync Trustpilot reviews automatically',
        de: 'Trustpilot-Reviews automatisch synchronisieren',
        fr: 'Synchroniser automatiquement les avis Trustpilot',
        es: 'Sincronizar automáticamente reseñas de Trustpilot',
        pt: 'Sincronizar automaticamente reviews do Trustpilot',
        it: 'Sincronizzare automaticamente le recensioni Trustpilot',
      },
      'AI sentiment analysis to measure customer trust': {
        en: 'AI sentiment analysis to measure customer trust',
        de: 'KI-Sentiment-Analyse zur Messung des Kundenvertrauens',
        fr: 'Analyse de sentiment par IA pour mesurer la confiance client',
        es: 'Análisis de sentimiento con IA para medir la confianza del cliente',
        pt: 'Análise de sentimento com IA para medir a confiança do cliente',
        it: 'Analisi del sentiment con IA per misurare la fiducia del cliente',
      },
      'Track rating trends over time': {
        en: 'Track rating trends over time',
        de: 'Bewertungstrends über Zeit verfolgen',
        fr: 'Suivre les tendances de notes au fil du temps',
        es: 'Seguir tendencias de calificaciones a lo largo del tiempo',
        pt: 'Acompanhar tendências de avaliação ao longo do tempo',
        it: 'Monitorare le tendenze delle valutazioni nel tempo',
      },
      'Extract key topics from reviews': {
        en: 'Extract key topics from reviews',
        de: 'Wichtige Themen aus Reviews extrahieren',
        fr: 'Extraire les sujets clés des avis',
        es: 'Extraer temas clave de las reseñas',
        pt: 'Extrair tópicos-chave das reviews',
        it: 'Estrarre argomenti chiave dalle recensioni',
      },
      'Set up alerts for changes in review volume or sentiment': {
        en: 'Set up alerts for changes in review volume or sentiment',
        de: 'Benachrichtigungen für Änderungen im Review-Volumen oder Sentiment einrichten',
        fr: 'Configurer alertes pour changements de volume d\'avis ou de sentiment',
        es: 'Configurar alertas para cambios en volumen de reseñas o sentimiento',
        pt: 'Configurar alertas para mudanças no volume de reviews ou sentimento',
        it: 'Configurare avvisi per cambiamenti nel volume di recensioni o sentiment',
      },
      'Generate AI-powered reply suggestions': {
        en: 'Generate AI-powered reply suggestions',
        de: 'KI-gestützte Antwortvorschläge generieren',
        fr: 'Générer des suggestions de réponses par IA',
        es: 'Generar sugerencias de respuestas con IA',
        pt: 'Gerar sugestões de respostas com IA',
        it: 'Generare suggerimenti di risposta con IA',
      },
      // G2 specific benefits
      'Automatically collect B2B software reviews from G2': {
        en: 'Automatically collect B2B software reviews from G2',
        de: 'B2B-Software-Bewertungen automatisch von G2 sammeln',
        fr: 'Collecter automatiquement les avis logiciels B2B depuis G2',
        es: 'Recopilar automáticamente reseñas de software B2B desde G2',
        pt: 'Coletar automaticamente reviews de software B2B do G2',
        it: 'Raccogliere automaticamente recensioni software B2B da G2',
      },
      'Analyze sentiment to measure buyer satisfaction': {
        en: 'Analyze sentiment to measure buyer satisfaction',
        de: 'Sentiment analysieren, um die Käuferzufriedenheit zu messen',
        fr: 'Analyser le sentiment pour mesurer la satisfaction acheteur',
        es: 'Analizar el sentimiento para medir la satisfacción del comprador',
        pt: 'Analisar sentimento para medir a satisfação do comprador',
        it: 'Analizzare il sentiment per misurare la soddisfazione dell\'acquirente',
      },
      'Identify common themes across enterprise feedback': {
        en: 'Identify common themes across enterprise feedback',
        de: 'Gemeinsame Themen im Enterprise-Feedback identifizieren',
        fr: 'Identifier des thèmes communs dans les retours entreprise',
        es: 'Identificar temas comunes en el feedback empresarial',
        pt: 'Identificar temas comuns no feedback empresarial',
        it: 'Identificare temi comuni nel feedback aziendale',
      },
      'Monitor trends to guide product roadmap': {
        en: 'Monitor trends to guide product roadmap',
        de: 'Trends überwachen, um die Produkt-Roadmap zu steuern',
        fr: 'Surveiller les tendances pour guider la roadmap produit',
        es: 'Monitorear tendencias para guiar la hoja de ruta del producto',
        pt: 'Monitorar tendências para orientar o roadmap do produto',
        it: 'Monitorare tendenze per guidare la roadmap del prodotto',
      },
      'Detect critical pain points mentioned by buyers': {
        en: 'Detect critical pain points mentioned by buyers',
        de: 'Kritische Pain Points erkennen, die von Käufern erwähnt werden',
        fr: 'Détecter les points critiques mentionnés par les acheteurs',
        es: 'Detectar puntos críticos mencionados por compradores',
        pt: 'Detectar pontos críticos mencionados pelos compradores',
        it: 'Rilevare punti critici menzionati dagli acquirenti',
      },
      'Get AI-suggested response drafts for reviewer engagement': {
        en: 'Get AI-suggested response drafts for reviewer engagement',
        de: 'KI-generierte Antwortentwürfe für Reviewer-Engagement erhalten',
        fr: 'Obtenir brouillons de réponses suggérés par IA pour l\'engagement',
        es: 'Obtener borradores de respuesta sugeridos por IA para engagement',
        pt: 'Obter rascunhos de resposta sugeridos por IA para engajamento',
        it: 'Ottenere bozze di risposta suggerite dall\'IA per l\'engagement',
      },
      // App Store specific benefits
      'Automatically collect iOS app reviews from the App Store': {
        en: 'Automatically collect iOS app reviews from the App Store',
        de: 'iOS-App-Bewertungen automatisch aus dem App Store sammeln',
        fr: 'Collecter automatiquement les avis iOS depuis l\'App Store',
        es: 'Recopilar automáticamente reseñas de iOS desde la App Store',
        pt: 'Coletar automaticamente reviews de apps iOS da App Store',
        it: 'Raccogliere automaticamente recensioni iOS dall\'App Store',
      },
      'Analyze sentiment to measure user experience': {
        en: 'Analyze sentiment to measure user experience',
        de: 'Sentiment analysieren, um die Nutzererfahrung zu messen',
        fr: 'Analyser le sentiment pour mesurer l\'expérience utilisateur',
        es: 'Analizar el sentimiento para medir la experiencia del usuario',
        pt: 'Analisar sentimento para medir a experiência do usuário',
        it: 'Analizzare il sentiment per misurare l\'esperienza utente',
      },
      'Detect trends across all your iOS applications': {
        en: 'Detect trends across all your iOS applications',
        de: 'Trends über alle iOS-Anwendungen hinweg erkennen',
        fr: 'Détecter des tendances sur toutes vos applications iOS',
        es: 'Detectar tendencias en todas tus aplicaciones iOS',
        pt: 'Detectar tendências em todos os seus aplicativos iOS',
        it: 'Rilevare trend su tutte le tue applicazioni iOS',
      },
      // Yelp specific benefits
      'Sync Yelp reviews in real-time': {
        en: 'Sync Yelp reviews in real-time',
        de: 'Yelp-Reviews in Echtzeit synchronisieren',
        fr: 'Synchroniser les avis Yelp en temps réel',
        es: 'Sincronizar reseñas de Yelp en tiempo real',
        pt: 'Sincronizar reviews do Yelp em tempo real',
        it: 'Sincronizzare recensioni Yelp in tempo reale',
      },
      'AI-driven sentiment analysis for local business feedback': {
        en: 'AI-driven sentiment analysis for local business feedback',
        de: 'KI-gestützte Sentiment-Analyse für lokales Business-Feedback',
        fr: 'Analyse de sentiment par IA pour retours locaux',
        es: 'Análisis de sentimiento con IA para feedback local',
        pt: 'Análise de sentimento com IA para feedback local',
        it: 'Analisi del sentiment con IA per feedback locale',
      },
      'Identify patterns and common complaints': {
        en: 'Identify patterns and common complaints',
        de: 'Muster und häufige Beschwerden identifizieren',
        fr: 'Identifier modèles et plaintes courantes',
        es: 'Identificar patrones y quejas comunes',
        pt: 'Identificar padrões e reclamações comuns',
        it: 'Identificare schemi e reclami comuni',
      },
      'Manage reviews across multiple business locations': {
        en: 'Manage reviews across multiple business locations',
        de: 'Bewertungen über mehrere Geschäftsstandorte hinweg verwalten',
        fr: 'Gérer les avis sur plusieurs emplacements commerciaux',
        es: 'Gestionar reseñas en múltiples ubicaciones comerciales',
        pt: 'Gerenciar reviews em múltiplas localizações comerciais',
        it: 'Gestire recensioni su più location commerciali',
      },
      'Get notified about negative reviews instantly': {
        en: 'Get notified about negative reviews instantly',
        de: 'Sofort über negative Bewertungen benachrichtigt werden',
        fr: 'Être notifié instantanément des avis négatifs',
        es: 'Recibir notificaciones instantáneas de reseñas negativas',
        pt: 'Ser notificado instantaneamente sobre reviews negativas',
        it: 'Ricevere notifiche istantanee su recensioni negative',
      },
      'AI-suggested responses for faster engagement': {
        en: 'AI-suggested responses for faster engagement',
        de: 'KI-gestützte Antworten für schnelleres Engagement',
        fr: 'Réponses suggérées par IA pour engagement rapide',
        es: 'Respuestas sugeridas por IA para engagement más rápido',
        pt: 'Respostas sugeridas por IA para engajamento mais rápido',
        it: 'Risposte suggerite dall\'IA per engagement più veloce',
      },
      // Facebook Reviews specific benefits
      'Sync Facebook reviews automatically': {
        en: 'Sync Facebook reviews automatically',
        de: 'Facebook-Bewertungen automatisch synchronisieren',
        fr: 'Synchroniser automatiquement les avis Facebook',
        es: 'Sincronizar automáticamente reseñas de Facebook',
        pt: 'Sincronizar automaticamente reviews do Facebook',
        it: 'Sincronizzare automaticamente recensioni Facebook',
      },
      'AI-powered sentiment tracking': {
        en: 'AI-powered sentiment tracking',
        de: 'KI-gestütztes Sentiment-Tracking',
        fr: 'Suivi de sentiment par IA',
        es: 'Seguimiento de sentimiento con IA',
        pt: 'Rastreamento de sentimento com IA',
        it: 'Tracciamento del sentiment con IA',
      },
      'Detect emerging topics from customer feedback': {
        en: 'Detect emerging topics from customer feedback',
        de: 'Aufkommende Themen aus Kundenfeedback erkennen',
        fr: 'Détecter les sujets émergents du feedback client',
        es: 'Detectar temas emergentes del feedback de clientes',
        pt: 'Detectar tópicos emergentes do feedback dos clientes',
        it: 'Rilevare argomenti emergenti dal feedback clienti',
      },
      'Track ratings over time across multiple pages': {
        en: 'Track ratings over time across multiple pages',
        de: 'Bewertungen über Zeit über mehrere Seiten hinweg verfolgen',
        fr: 'Suivre les notes au fil du temps sur plusieurs pages',
        es: 'Seguir calificaciones a lo largo del tiempo en múltiples páginas',
        pt: 'Acompanhar avaliações ao longo do tempo em múltiplas páginas',
        it: 'Monitorare valutazioni nel tempo su più pagine',
      },
      'Receive alerts for new reviews or rating drops': {
        en: 'Receive alerts for new reviews or rating drops',
        de: 'Benachrichtigungen für neue Reviews oder Bewertungsabfälle erhalten',
        fr: 'Recevoir alertes pour nouveaux avis ou baisses de notes',
        es: 'Recibir alertas por nuevas reseñas o caídas de calificación',
        pt: 'Receber alertas para novas reviews ou quedas de avaliação',
        it: 'Ricevere avvisi per nuove recensioni o cali di valutazione',
      },
      'Generate contextual reply suggestions with AI': {
        en: 'Generate contextual reply suggestions with AI',
        de: 'Kontextuelle Antwortvorschläge mit KI generieren',
        fr: 'Générer suggestions de réponses contextuelles avec IA',
        es: 'Generar sugerencias de respuestas contextuales con IA',
        pt: 'Gerar sugestões de respostas contextuais com IA',
        it: 'Generare suggerimenti di risposta contestuali con IA',
      },
      // CSV Import specific benefits
      'Import reviews from any custom source via CSV': {
        en: 'Import reviews from any custom source via CSV',
        de: 'Reviews aus beliebigen Quellen per CSV importieren',
        fr: 'Importer avis depuis n\'importe quelle source via CSV',
        es: 'Importar reseñas desde cualquier fuente mediante CSV',
        pt: 'Importar reviews de qualquer fonte via CSV',
        it: 'Importare recensioni da qualsiasi fonte tramite CSV',
      },
      'Analyze historical data alongside real-time reviews': {
        en: 'Analyze historical data alongside real-time reviews',
        de: 'Historische Daten zusammen mit Echtzeit-Reviews analysieren',
        fr: 'Analyser données historiques avec avis en temps réel',
        es: 'Analizar datos históricos junto con reseñas en tiempo real',
        pt: 'Analisar dados históricos junto com reviews em tempo real',
        it: 'Analizzare dati storici insieme a recensioni in tempo reale',
      },
      'Run sentiment and topic analysis on imported data': {
        en: 'Run sentiment and topic analysis on imported data',
        de: 'Sentiment- und Themen-Analyse auf importierte Daten anwenden',
        fr: 'Exécuter analyse de sentiment et sujets sur données importées',
        es: 'Ejecutar análisis de sentimiento y temas en datos importados',
        pt: 'Executar análise de sentimento e tópicos em dados importados',
        it: 'Eseguire analisi di sentiment e argomenti su dati importati',
      },
      'Combine data from multiple platforms in one place': {
        en: 'Combine data from multiple platforms in one place',
        de: 'Daten aus mehreren Plattformen an einem Ort kombinieren',
        fr: 'Combiner données de plusieurs plateformes au même endroit',
        es: 'Combinar datos de múltiples plataformas en un solo lugar',
        pt: 'Combinar dados de múltiplas plataformas em um único lugar',
        it: 'Combinare dati di più piattaforme in un unico posto',
      },
      'Track trends across all review sources': {
        en: 'Track trends across all review sources',
        de: 'Trends über alle Review-Quellen hinweg verfolgen',
        fr: 'Suivre tendances sur toutes les sources d\'avis',
        es: 'Seguir tendencias en todas las fuentes de reseñas',
        pt: 'Acompanhar tendências em todas as fontes de reviews',
        it: 'Monitorare tendenze su tutte le fonti di recensioni',
      },
      'Use structured data for advanced reporting': {
        en: 'Use structured data for advanced reporting',
        de: 'Strukturierte Daten für erweitertes Reporting nutzen',
        fr: 'Utiliser données structurées pour reporting avancé',
        es: 'Usar datos estructurados para reporting avanzado',
        pt: 'Usar dados estruturados para reporting avançado',
        it: 'Utilizzare dati strutturati per reporting avanzato',
      },
      // Slack specific benefits
      'Get review alerts directly in Slack channels': {
        en: 'Get review alerts directly in Slack channels',
        de: 'Review-Benachrichtigungen direkt in Slack-Kanälen erhalten',
        fr: 'Recevoir alertes avis directement dans canaux Slack',
        es: 'Recibir alertas de reseñas directamente en canales de Slack',
        pt: 'Receber alertas de reviews diretamente em canais do Slack',
        it: 'Ricevere avvisi recensioni direttamente nei canali Slack',
      },
      'Notify teams about critical reviews instantly': {
        en: 'Notify teams about critical reviews instantly',
        de: 'Teams sofort über kritische Reviews benachrichtigen',
        fr: 'Notifier équipes instantanément des avis critiques',
        es: 'Notificar a equipos instantáneamente sobre reseñas críticas',
        pt: 'Notificar equipes instantaneamente sobre reviews críticas',
        it: 'Notificare team istantaneamente su recensioni critiche',
      },
      'Route reviews to specific channels by topic or sentiment': {
        en: 'Route reviews to specific channels by topic or sentiment',
        de: 'Reviews nach Thema oder Sentiment an spezifische Kanäle routen',
        fr: 'Router avis vers canaux spécifiques par sujet ou sentiment',
        es: 'Enrutar reseñas a canales específicos por tema o sentimiento',
        pt: 'Rotear reviews para canais específicos por tópico ou sentimento',
        it: 'Instradare recensioni a canali specifici per argomento o sentiment',
      },
      'Keep your team aligned with real-time updates': {
        en: 'Keep your team aligned with real-time updates',
        de: 'Team mit Echtzeit-Updates auf dem Laufenden halten',
        fr: 'Maintenir équipe alignée avec mises à jour en temps réel',
        es: 'Mantener al equipo alineado con actualizaciones en tiempo real',
        pt: 'Manter equipe alinhada com atualizações em tempo real',
        it: 'Mantenere team allineato con aggiornamenti in tempo reale',
      },
      'Trigger custom workflows from review events': {
        en: 'Trigger custom workflows from review events',
        de: 'Custom Workflows durch Review-Events auslösen',
        fr: 'Déclencher workflows personnalisés depuis événements avis',
        es: 'Activar flujos de trabajo personalizados desde eventos de reseñas',
        pt: 'Acionar workflows personalizados a partir de eventos de reviews',
        it: 'Attivare workflow personalizzati da eventi recensioni',
      },
      'Centralize review notifications for cross-functional visibility': {
        en: 'Centralize review notifications for cross-functional visibility',
        de: 'Review-Benachrichtigungen für funktionsübergreifende Sichtbarkeit zentralisieren',
        fr: 'Centraliser notifications avis pour visibilité cross-fonctionnelle',
        es: 'Centralizar notificaciones de reseñas para visibilidad cross-funcional',
        pt: 'Centralizar notificações de reviews para visibilidade cross-funcional',
        it: 'Centralizzare notifiche recensioni per visibilità cross-funzionale',
      },
      // Zapier specific benefits
      'Connect Proofio to 5000+ apps via Zapier': {
        en: 'Connect Proofio to 5000+ apps via Zapier',
        de: 'Proofio über Zapier mit 5000+ Apps verbinden',
        fr: 'Connecter Proofio à 5000+ apps via Zapier',
        es: 'Conectar Proofio a 5000+ apps mediante Zapier',
        pt: 'Conectar Proofio a 5000+ apps via Zapier',
        it: 'Collegare Proofio a 5000+ app tramite Zapier',
      },
      'Automate workflows triggered by review events': {
        en: 'Automate workflows triggered by review events',
        de: 'Workflows automatisieren, die durch Review-Events ausgelöst werden',
        fr: 'Automatiser workflows déclenchés par événements avis',
        es: 'Automatizar flujos de trabajo activados por eventos de reseñas',
        pt: 'Automatizar workflows acionados por eventos de reviews',
        it: 'Automatizzare workflow attivati da eventi recensioni',
      },
      'Send review data to CRMs, spreadsheets, or analytics tools': {
        en: 'Send review data to CRMs, spreadsheets, or analytics tools',
        de: 'Review-Daten an CRMs, Spreadsheets oder Analytics-Tools senden',
        fr: 'Envoyer données avis vers CRMs, tableurs ou outils analytics',
        es: 'Enviar datos de reseñas a CRMs, hojas de cálculo o herramientas analytics',
        pt: 'Enviar dados de reviews para CRMs, planilhas ou ferramentas analytics',
        it: 'Inviare dati recensioni a CRM, fogli di calcolo o strumenti analytics',
      },
      'Build custom integrations without writing code': {
        en: 'Build custom integrations without writing code',
        de: 'Custom Integrationen ohne Code erstellen',
        fr: 'Créer intégrations personnalisées sans coder',
        es: 'Crear integraciones personalizadas sin escribir código',
        pt: 'Criar integrações personalizadas sem escrever código',
        it: 'Creare integrazioni personalizzate senza scrivere codice',
      },
      'Sync review insights to your existing tech stack': {
        en: 'Sync review insights to your existing tech stack',
        de: 'Review-Insights mit bestehendem Tech-Stack synchronisieren',
        fr: 'Synchroniser insights avis avec votre stack technique',
        es: 'Sincronizar insights de reseñas con tu stack tecnológico',
        pt: 'Sincronizar insights de reviews com sua stack tecnológica',
        it: 'Sincronizzare insight recensioni con il tuo stack tecnologico',
      },
      'Scale automation across your review operations': {
        en: 'Scale automation across your review operations',
        de: 'Automatisierung über Review-Operationen hinweg skalieren',
        fr: 'Étendre automatisation sur vos opérations avis',
        es: 'Escalar automatización en tus operaciones de reseñas',
        pt: 'Escalar automação em suas operações de reviews',
        it: 'Scalare automazione nelle operazioni recensioni',
      },
      // Make specific benefits
      'Connect Proofio to thousands of apps via Make (Integromat)': {
        en: 'Connect Proofio to thousands of apps via Make (Integromat)',
        de: 'Proofio über Make (Integromat) mit tausenden Apps verbinden',
        fr: 'Connecter Proofio à des milliers d\'apps via Make (Integromat)',
        es: 'Conectar Proofio a miles de apps mediante Make (Integromat)',
        pt: 'Conectar Proofio a milhares de apps via Make (Integromat)',
        it: 'Collegare Proofio a migliaia di app tramite Make (Integromat)',
      },
      'Build advanced multi-step workflows visually': {
        en: 'Build advanced multi-step workflows visually',
        de: 'Erweiterte Multi-Step-Workflows visuell erstellen',
        fr: 'Créer workflows multi-étapes avancés visuellement',
        es: 'Crear flujos de trabajo multi-paso avanzados visualmente',
        pt: 'Criar workflows multi-etapas avançados visualmente',
        it: 'Creare workflow multi-step avanzati visivamente',
      },
      'Route review data to any destination with conditional logic': {
        en: 'Route review data to any destination with conditional logic',
        de: 'Review-Daten mit bedingter Logik zu beliebigen Zielen routen',
        fr: 'Router données avis vers toute destination avec logique conditionnelle',
        es: 'Enrutar datos de reseñas a cualquier destino con lógica condicional',
        pt: 'Rotear dados de reviews para qualquer destino com lógica condicional',
        it: 'Instradare dati recensioni a qualsiasi destinazione con logica condizionale',
      },
      'Transform and enrich review data before syncing': {
        en: 'Transform and enrich review data before syncing',
        de: 'Review-Daten vor Synchronisierung transformieren und anreichern',
        fr: 'Transformer et enrichir données avis avant synchronisation',
        es: 'Transformar y enriquecer datos de reseñas antes de sincronizar',
        pt: 'Transformar e enriquecer dados de reviews antes de sincronizar',
        it: 'Trasformare e arricchire dati recensioni prima della sincronizzazione',
      },
      'Automate complex review operations with enterprise-grade tools': {
        en: 'Automate complex review operations with enterprise-grade tools',
        de: 'Komplexe Review-Operationen mit Enterprise-Tools automatisieren',
        fr: 'Automatiser opérations avis complexes avec outils entreprise',
        es: 'Automatizar operaciones complejas de reseñas con herramientas empresariales',
        pt: 'Automatizar operações complexas de reviews com ferramentas empresariais',
        it: 'Automatizzare operazioni recensioni complesse con strumenti enterprise',
      },
      'Schedule and orchestrate review workflows across systems': {
        en: 'Schedule and orchestrate review workflows across systems',
        de: 'Review-Workflows über Systeme hinweg planen und orchestrieren',
        fr: 'Planifier et orchestrer workflows avis entre systèmes',
        es: 'Programar y orquestar flujos de trabajo de reseñas entre sistemas',
        pt: 'Agendar e orquestrar workflows de reviews entre sistemas',
        it: 'Pianificare e orchestrare workflow recensioni tra sistemi',
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
