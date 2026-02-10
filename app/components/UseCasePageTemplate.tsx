'use client';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import CTA from '@/app/components/CTA';
import { UseCasePageContent, UseCaseSlug } from '@/lib/data/use-cases';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Flag,
  Lightbulb,
  Link2,
  MessageSquareQuote,
  Target,
  TrendingUp,
} from 'lucide-react';

type UseCasePageTemplateProps = {
  locale?: string;
  messages?: any;
  content: UseCasePageContent;
};

type KeyOutcomeCard = {
  value: string;
  label: string;
  note: string;
};

type MappingItem = {
  label: string;
  href: string;
  type: 'feature' | 'integration';
};

type ProofSnippet = {
  title: string;
  body: string;
  metric: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type JobToBeDone = {
  job: string;
  struggle: string;
  outcome: string;
};

type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

type RolloutPhase = {
  phase: string;
  goal: string;
  tasks: string[];
};

function getPageSections(locale: string, slug: UseCaseSlug, playbookSteps: string[]) {
  const isGerman = locale === 'de';

  const sectionText = isGerman
    ? {
        whoItsFor: 'Für wen ist das',
        outcomes: 'Key outcomes',
        deepWorkflow: 'Deep workflow',
        mapping: 'Integrationen und Feature-Mapping',
        proof: 'Proof und Case Snippets',
        faq: 'FAQ',
        jobs: 'Jobs-to-be-done',
        caseStudy: 'Complete case study',
        rollout: 'Rollout plan',
      }
    : {
        whoItsFor: "Who it's for",
        outcomes: 'Key outcomes',
        deepWorkflow: 'Deep workflow',
        mapping: 'Integrations and feature mapping',
        proof: 'Proof and case snippets',
        faq: 'FAQ',
        jobs: 'Jobs-to-be-done',
        caseStudy: 'Complete case study',
        rollout: 'Rollout plan',
      };

  const whoItsForBySlug: Record<UseCaseSlug, string[]> = isGerman
    ? {
        agency: ['Performance-Agenturen', 'Brand-Agenturen', 'Kundenservice-Teams'],
        coaches: ['Business-Coaches', 'Marketing-Coaches', 'Online-Programme'],
        services: ['Lokale Anbieter', 'Multi-Standort-Teams', 'Service-Operations'],
        'saas-startups': ['Produktteams', 'Growth-Teams', 'Founders und PMs'],
      }
    : {
        agency: ['Performance agencies', 'Brand agencies', 'Account teams'],
        coaches: ['Business coaches', 'Marketing coaches', 'Program creators'],
        services: ['Local operators', 'Multi-location teams', 'Service operations'],
        'saas-startups': ['Product teams', 'Growth teams', 'Founders and PMs'],
      };

  const keyOutcomesBySlug: Record<UseCaseSlug, KeyOutcomeCard[]> = isGerman
    ? {
        agency: [
          { value: '-40%', label: 'Reporting-Aufwand', note: 'Weniger manuelle Report-Erstellung pro Kunde.' },
          { value: '<24h', label: 'Eskalationszeit', note: 'Schnellere Reaktion auf kritische Bewertungsmuster.' },
          { value: '+15%', label: 'Kundenbindung', note: 'Stärkere Retention durch klare, messbare Insights.' },
        ],
        coaches: [
          { value: '+25%', label: 'Lead-Qualität', note: 'Mehr qualifizierte Anfragen durch verifizierten Social Proof.' },
          { value: '1x', label: 'Proof-System', note: 'Ein zentraler Ort statt verstreuter Testimonials.' },
          { value: '<7d', label: 'Go-live', note: 'Schnelle Umsetzung für neue Angebote und Launches.' },
        ],
        services: [
          { value: '<24h', label: 'Reaktionszeit', note: 'Kritische Signale werden früh erkannt und bearbeitet.' },
          { value: '+20%', label: 'Qualitätsniveau', note: 'Kontinuierliche Verbesserung statt punktueller Fixes.' },
          { value: '+18%', label: 'Vertrauen', note: 'Bessere Bewertungen und mehr wiederkehrende Kunden.' },
        ],
        'saas-startups': [
          { value: '<1 Sprint', label: 'Issue-Erkennung', note: 'Release-Probleme schneller erkennen und zuordnen.' },
          { value: '+30%', label: 'Roadmap-Fit', note: 'Priorisierung mit echten Kundensignalen statt Bauchgefühl.' },
          { value: '+12%', label: 'Retention', note: 'Bessere Kundenbindung durch kürzere Feedback-Loops.' },
        ],
      }
    : {
        agency: [
          { value: '-40%', label: 'Reporting overhead', note: 'Less manual reporting work across client accounts.' },
          { value: '<24h', label: 'Escalation time', note: 'Faster response to critical review trend changes.' },
          { value: '+15%', label: 'Client retention', note: 'Stronger retention through measurable trust outcomes.' },
        ],
        coaches: [
          { value: '+25%', label: 'Lead quality', note: 'More qualified inbound leads from verified proof.' },
          { value: '1x', label: 'Proof system', note: 'One trusted source instead of fragmented testimonials.' },
          { value: '<7d', label: 'Launch speed', note: 'Fast setup for new offers and campaign rollouts.' },
        ],
        services: [
          { value: '<24h', label: 'Response time', note: 'Critical quality issues are surfaced and routed quickly.' },
          { value: '+20%', label: 'Quality consistency', note: 'Continuous service improvements across teams and sites.' },
          { value: '+18%', label: 'Customer trust', note: 'Better reviews and stronger repeat business signals.' },
        ],
        'saas-startups': [
          { value: '<1 sprint', label: 'Issue detection', note: 'Release regressions are spotted and mapped faster.' },
          { value: '+30%', label: 'Roadmap fit', note: 'Prioritization tied to measurable customer feedback signals.' },
          { value: '+12%', label: 'Retention signal', note: 'Tighter loops between support, product, and growth.' },
        ],
      };

  const jobsBySlug: Record<UseCaseSlug, JobToBeDone[]> = isGerman
    ? {
        agency: [
          {
            job: 'Client-Feedback aus mehreren Quellen in einen klaren Monatsbericht überführen.',
            struggle: 'Daten und Verantwortlichkeiten liegen verteilt in verschiedenen Tools.',
            outcome: 'Ein konsistenter Reporting-Prozess mit klaren Aktionspunkten pro Kunde.',
          },
          {
            job: 'Kritische Entwicklungen vor dem Kundenmeeting erkennen.',
            struggle: 'Negative Muster werden zu spät sichtbar und führen zu Eskalationen.',
            outcome: 'Frühwarnsystem mit Prioritäten und sauberer Eskalationslogik.',
          },
        ],
        coaches: [
          {
            job: 'Vertrauensaufbau für neue Angebote mit echten Ergebnissen.',
            struggle: 'Testimonials sind unstrukturiert und schwer wiederverwendbar.',
            outcome: 'Verifizierte Proof-Bibliothek nach Zielgruppe und Ergebnis.',
          },
          {
            job: 'Angebots- und Onboarding-Qualität anhand von Feedback verbessern.',
            struggle: 'Feedback landet in Chats und wird nicht systematisch ausgewertet.',
            outcome: 'Regelmäßiger Verbesserungszyklus für Positionierung und Delivery.',
          },
        ],
        services: [
          {
            job: 'Servicequalität über Teams und Standorte hinweg angleichen.',
            struggle: 'Unterschiedliche Prozesse erzeugen uneinheitliche Kundenerfahrung.',
            outcome: 'Standortübergreifende Qualitätssteuerung mit gemeinsamen Standards.',
          },
          {
            job: 'Negative Signale schneller erkennen und beantworten.',
            struggle: 'Reaktionszeiten sind zu lang und Verantwortlichkeiten unklar.',
            outcome: 'Klare Zuweisung nach Priorität mit messbarer SLA-Erfüllung.',
          },
        ],
        'saas-startups': [
          {
            job: 'Produktpriorisierung mit echten Kundenproblemen steuern.',
            struggle: 'Feedback ist verteilt und schwer in Roadmap-Entscheidungen zu übersetzen.',
            outcome: 'Priorisierung auf Basis wiederkehrender Signalcluster.',
          },
          {
            job: 'Release-Impact in kurzer Zeit bewerten.',
            struggle: 'Effekte zeigen sich verzerrt und werden zu spät erkannt.',
            outcome: 'Schnelleres Release-Lernen über Sentiment- und Trend-Deltas.',
          },
        ],
      }
    : {
        agency: [
          {
            job: 'Turn multi-source client feedback into one clear reporting narrative.',
            struggle: 'Data and ownership are fragmented across tools and account teams.',
            outcome: 'A repeatable reporting workflow with explicit action priorities per client.',
          },
          {
            job: 'Detect risk before stakeholder escalations happen.',
            struggle: 'Negative patterns are often discovered only after trust is already damaged.',
            outcome: 'Earlier risk visibility with clear triage and response playbooks.',
          },
        ],
        coaches: [
          {
            job: 'Build trust for new offers with real customer outcomes.',
            struggle: 'Testimonials are scattered and hard to reuse in conversion flows.',
            outcome: 'A structured proof library mapped to audience and transformation type.',
          },
          {
            job: 'Improve delivery quality based on recurring customer signals.',
            struggle: 'Feedback lives in chats and never reaches a consistent improvement loop.',
            outcome: 'A practical cycle that links sentiment trends to offer and onboarding updates.',
          },
        ],
        services: [
          {
            job: 'Standardize service quality across teams and locations.',
            struggle: 'Customer experience varies by location, shift, and process maturity.',
            outcome: 'Operational visibility with clear owner-level quality accountability.',
          },
          {
            job: 'Respond to critical quality issues before they compound.',
            struggle: 'Slow escalation and unclear ownership increase customer trust damage.',
            outcome: 'Priority routing with measurable response SLAs.',
          },
        ],
        'saas-startups': [
          {
            job: 'Prioritize roadmap decisions using validated customer signal.',
            struggle: 'Feedback is fragmented and hard to convert into execution confidence.',
            outcome: 'Feature prioritization anchored in recurring evidence clusters.',
          },
          {
            job: 'Evaluate release impact quickly and objectively.',
            struggle: 'Teams identify regressions too late and lose iteration speed.',
            outcome: 'Fast post-release signal loops across sentiment and trend movement.',
          },
        ],
      };

  const mappingBySlug: Record<UseCaseSlug, MappingItem[]> = {
    agency: [
      { label: 'Review Monitoring', href: '/features/review-monitoring', type: 'feature' },
      { label: 'Custom Reports', href: '/features/custom-reports', type: 'feature' },
      { label: 'Team Collaboration', href: '/features/team-collaboration', type: 'feature' },
      { label: 'Trustpilot Integration', href: '/integrations/trustpilot', type: 'integration' },
      { label: 'Google Reviews', href: '/integrations/google-reviews', type: 'integration' },
    ],
    coaches: [
      { label: 'AI Summaries', href: '/features/ai-summaries', type: 'feature' },
      { label: 'Sentiment Analysis', href: '/features/sentiment-analysis', type: 'feature' },
      { label: 'Custom Alerts', href: '/features/custom-alerts', type: 'feature' },
      { label: 'Trustpilot Integration', href: '/integrations/trustpilot', type: 'integration' },
      { label: 'CSV Import', href: '/integrations/csv-import', type: 'integration' },
    ],
    services: [
      { label: 'Custom Alerts', href: '/features/custom-alerts', type: 'feature' },
      { label: 'Review Monitoring', href: '/features/review-monitoring', type: 'feature' },
      { label: 'Competitor Tracking', href: '/features/competitor-tracking', type: 'feature' },
      { label: 'Google Reviews', href: '/integrations/google-reviews', type: 'integration' },
      { label: 'Facebook Reviews', href: '/integrations/facebook-reviews', type: 'integration' },
    ],
    'saas-startups': [
      { label: 'AI Summaries', href: '/features/ai-summaries', type: 'feature' },
      { label: 'Sentiment Analysis', href: '/features/sentiment-analysis', type: 'feature' },
      { label: 'Multi Source Aggregation', href: '/features/multi-source-aggregation', type: 'feature' },
      { label: 'App Store Integration', href: '/integrations/app-store', type: 'integration' },
      { label: 'Google Play Integration', href: '/integrations/google-play', type: 'integration' },
    ],
  };

  const proofBySlug: Record<UseCaseSlug, ProofSnippet[]> = isGerman
    ? {
        agency: [
          {
            title: 'Multi-Client Reporting',
            body: 'Ein Team hat monatliche Kundenreports von mehreren Stunden auf einen wiederholbaren Wochenprozess reduziert.',
            metric: 'Schnellerer Delivery-Zyklus',
          },
          {
            title: 'Fruehe Risiko-Erkennung',
            body: 'Negative Trends wurden vor dem naechsten Kundenmeeting erkannt und mit klaren Handlungsempfehlungen adressiert.',
            metric: 'Weniger Eskalationen',
          },
        ],
        coaches: [
          {
            title: 'Strukturierter Social Proof',
            body: 'Testimonials wurden nach Ergebnis und Zielgruppe organisiert und direkt in Sales Pages verwendet.',
            metric: 'Hoehere Lead-Qualitaet',
          },
          {
            title: 'Schnellere Angebotsiteration',
            body: 'Wiederkehrendes Feedback wurde in Offer-Messaging und Onboarding eingebaut.',
            metric: 'Besserer Product-Market-Fit',
          },
        ],
        services: [
          {
            title: 'Servicequalität sichtbar gemacht',
            body: 'Standortübergreifende Muster wurden in einem Dashboard sichtbar und sauber priorisiert.',
            metric: 'Mehr operative Klarheit',
          },
          {
            title: 'Antwortprozesse verbessert',
            body: 'Kritische Tickets wurden mit Prioritaet geroutet und konsistenter beantwortet.',
            metric: 'Schnellere Reaktion',
          },
        ],
        'saas-startups': [
          {
            title: 'Release-Impact messbar',
            body: 'Nach Releases wurden Sentiment-Veraenderungen automatisch den betroffenen Produktbereichen zugeordnet.',
            metric: 'Fruehere Regression-Erkennung',
          },
          {
            title: 'Roadmap mit Kundensignal',
            body: 'Produktpriorisierung wurde auf wiederkehrende Feedback-Cluster ausgerichtet.',
            metric: 'Besserer Priorisierungs-Fit',
          },
        ],
      }
    : {
        agency: [
          {
            title: 'Multi-client reporting at scale',
            body: 'One team reduced monthly reporting work from hours to a repeatable weekly operating flow.',
            metric: 'Faster delivery cycle',
          },
          {
            title: 'Earlier risk visibility',
            body: 'Negative trend changes were flagged before stakeholder calls with a clearer action plan.',
            metric: 'Fewer escalations',
          },
        ],
        coaches: [
          {
            title: 'Structured social proof',
            body: 'Testimonials were tagged by audience and outcome, then reused in high-converting sales pages.',
            metric: 'Higher lead quality',
          },
          {
            title: 'Faster offer iteration',
            body: 'Recurring feedback themes were folded into offer positioning and onboarding.',
            metric: 'Stronger offer-market fit',
          },
        ],
        services: [
          {
            title: 'Service quality visibility',
            body: 'Cross-location review patterns became visible and easier to prioritize operationally.',
            metric: 'Higher operational clarity',
          },
          {
            title: 'Response process improvements',
            body: 'Critical tickets were routed by priority and answered with more consistency.',
            metric: 'Faster response cycles',
          },
        ],
        'saas-startups': [
          {
            title: 'Release impact clarity',
            body: 'Post-release sentiment shifts were mapped directly to feature areas and product surfaces.',
            metric: 'Earlier regression detection',
          },
          {
            title: 'Roadmap with customer signal',
            body: 'Prioritization shifted to recurring review clusters instead of isolated requests.',
            metric: 'Better roadmap fit',
          },
        ],
      };

  const faqBySlug: Record<UseCaseSlug, FaqItem[]> = isGerman
    ? {
        agency: [
          { question: 'Kann ich mehrere Kunden in einem Setup verwalten?', answer: 'Ja, Agenturen können pro Kunde eigene Workspaces und Reports in einem einheitlichen Operating Model verwalten.' },
          { question: 'Kann ich Reports wiederverwenden?', answer: 'Ja, Report-Templates lassen sich standardisieren und pro Kunde mit Benchmarks anpassen.' },
          { question: 'Wie erkenne ich kritische Entwicklungen schneller?', answer: 'Mit Alerts, Trend-Views und priorisierten Tickets für auffällige Muster.' },
          { question: 'Wie messe ich den strategischen Mehrwert?', answer: 'Durch Reporting-Zeit, Eskalationsrate, Kundenbindung und sichtbare Qualitätsverbesserung pro Kunde.' },
        ],
        coaches: [
          { question: 'Kann ich Testimonials verifizieren und strukturieren?', answer: 'Ja, Feedback kann zentral gesammelt und nach Ergebnis sowie Zielgruppe eingeordnet werden.' },
          { question: 'Ist das auch für kleine Teams sinnvoll?', answer: 'Ja, gerade kleine Teams profitieren von einem klaren Proof-System statt manueller Sammlung.' },
          { question: 'Wie schnell kann ich starten?', answer: 'In der Regel in wenigen Tagen, inklusive erster verwertbarer Proof-Snippets.' },
          { question: 'Wie halte ich den Proof aktuell?', answer: 'Mit einem wöchentlichen Sammel- und Review-Rhythmus sowie klaren Tags pro Angebot.' },
        ],
        services: [
          { question: 'Funktioniert das für mehrere Standorte?', answer: 'Ja, Standort- und Teamvergleiche sind Teil des Workflows.' },
          { question: 'Wie priorisieren wir Tickets?', answer: 'Mit Status, Priorität und klarer Zuweisung an Verantwortliche.' },
          { question: 'Hilft das auch bei Training und SOPs?', answer: 'Ja, wiederkehrende Feedback-Muster lassen sich direkt in operative Standards überführen.' },
          { question: 'Wie erkenne ich Prozessprobleme schneller?', answer: 'Durch trendbasierte Alerts, Standortvergleich und wiederkehrende Themencluster.' },
        ],
        'saas-startups': [
          { question: 'Wie messen wir Release-Impact?', answer: 'Durch Sentiment-Deltas und Trendanalysen rund um Release-Zeitpunkte.' },
          { question: 'Ist das nur für Support gedacht?', answer: 'Nein, Produkt, Support und Growth nutzen denselben Feedback-Stream für Entscheidungen.' },
          { question: 'Kann ich Quellen kombinieren?', answer: 'Ja, App Stores, Review-Plattformen und weitere Quellen werden zusammengeführt.' },
          { question: 'Wie verbessere ich Roadmap-Entscheidungen?', answer: 'Durch priorisierte, wiederkehrende Signalcluster statt Einzelwunsch-Orientierung.' },
        ],
      }
    : {
        agency: [
          { question: 'Can we manage multiple clients in one operating model?', answer: 'Yes. Agencies can run isolated client workspaces while keeping one standardized reporting flow.' },
          { question: 'Can reports be reused across accounts?', answer: 'Yes. Shared templates make client reporting faster and more consistent.' },
          { question: 'How do we detect risky trends earlier?', answer: 'Alerting and trend monitoring surfaces critical signals before they become escalations.' },
          { question: 'How do we prove business value?', answer: 'Track reporting time reduction, escalation rate, client retention, and measurable trust improvements.' },
        ],
        coaches: [
          { question: 'Can we verify and organize testimonials?', answer: 'Yes. Feedback can be structured by audience, outcome, and offer for reusable proof.' },
          { question: 'Is this useful for small teams?', answer: 'Yes. Small teams benefit from a repeatable proof workflow instead of ad-hoc collection.' },
          { question: 'How fast can we start?', answer: 'Most teams can launch in days and publish first proof snippets quickly.' },
          { question: 'How do we keep proof assets current?', answer: 'Use a weekly collection cadence and consistent tagging by program and customer segment.' },
        ],
        services: [
          { question: 'Does this work for multi-location operations?', answer: 'Yes. You can track quality and sentiment by location, category, and owner.' },
          { question: 'How is ticket prioritization handled?', answer: 'Tickets are routed with explicit ownership and priority context.' },
          { question: 'Can insights improve SOPs?', answer: 'Yes. Recurring complaint patterns can be converted into training and process updates.' },
          { question: 'How do we catch process drift early?', answer: 'Use trend-based alerts and location-level comparisons to identify quality drift before it scales.' },
        ],
        'saas-startups': [
          { question: 'How do we measure release impact?', answer: 'Track sentiment shifts and review clusters before and after releases.' },
          { question: 'Is this only for support teams?', answer: 'No. Product, support, and growth can work from the same customer signal.' },
          { question: 'Can we combine multiple review sources?', answer: 'Yes. Review data from different sources is normalized in one workflow.' },
          { question: 'How does this improve roadmap quality?', answer: 'It replaces one-off request noise with recurring evidence clusters tied to customer impact.' },
        ],
      };

  const caseStudyBySlug: Record<UseCaseSlug, CaseStudySection[]> = isGerman
    ? {
        agency: [
          {
            title: 'Ausgangslage',
            paragraphs: [
              'Eine Agentur mit mehreren SaaS-Kunden hatte monatliche Reporting-Prozesse, die stark von Einzelpersonen abhängig waren. Review-Daten wurden manuell gesammelt, kategorisiert und präsentiert. Dadurch war die Qualität zwischen Kundenkonten ungleich und strategische Empfehlungen waren schwer vergleichbar.',
              'Kritische Signalsprünge wurden oft erst im Rückblick sichtbar. Das führte zu reaktiver Kommunikation statt proaktivem Stakeholder-Management.',
            ],
          },
          {
            title: 'Intervention',
            paragraphs: [
              'Das Team führte einen standardisierten Workflow ein: tägliche Signalaufnahme, wöchentliche Priorisierung, monatliche Executive-Zusammenfassung. Gleichzeitig wurden feste Kategorien und Eskalationsschwellen definiert.',
              'Pro Kunde gab es einen klaren Owner für Triage und Reporting, wodurch Unklarheiten in der Bearbeitung deutlich reduziert wurden.',
            ],
          },
          {
            title: 'Ergebnis',
            paragraphs: [
              'Die Reporting-Zeit sank deutlich, während die Qualität und Vergleichbarkeit zwischen Kundenkonten stieg. Kritische Trends wurden früher erkannt und proaktiv adressiert.',
              'Zusätzlich verbesserte sich die strategische Tiefe in Kundenmeetings, weil Empfehlungen auf stabilen Signalclustern statt auf Einzelbeispielen basierten.',
            ],
          },
        ],
        coaches: [
          {
            title: 'Ausgangslage',
            paragraphs: [
              'Ein Coaching-Business sammelte Kundenergebnisse über viele Kanäle, aber ohne einheitliche Struktur. Das erschwerte die Wiederverwendung in Launches und Sales-Assets.',
              'Besonders bei neuen Angeboten fehlte ein schneller Zugriff auf belastbare, segmentierte Proof-Beispiele.',
            ],
          },
          {
            title: 'Intervention',
            paragraphs: [
              'Feedback wurde in einem zentralen Workflow mit Tags für Zielgruppe, Ergebnisart und Angebot gesammelt. Verifizierte Snippets wurden direkt in Landingpages, E-Mail-Sequenzen und Sales-Calls integriert.',
              'Parallel wurde ein regelmäßiger Review-Rhythmus eingeführt, damit neue Ergebnisse kontinuierlich einfließen.',
            ],
          },
          {
            title: 'Ergebnis',
            paragraphs: [
              'Die Lead-Qualität stieg und Einwände im Sales-Prozess wurden schneller aufgelöst. Das Team konnte Angebote klarer positionieren und schneller iterieren.',
              'Durch die bessere Struktur wurden weniger Testimonials manuell gesucht und mehr direkt operativ genutzt.',
            ],
          },
        ],
        services: [
          {
            title: 'Ausgangslage',
            paragraphs: [
              'Ein Dienstleistungsunternehmen mit mehreren Standorten hatte stark unterschiedliche Qualitätswahrnehmung zwischen Teams. Negative Signale wurden nicht zentral priorisiert.',
              'Die Folge waren inkonsistente Reaktionszeiten und wiederkehrende Beschwerden in denselben Kategorien.',
            ],
          },
          {
            title: 'Intervention',
            paragraphs: [
              'Das Unternehmen etablierte standortbasierte Monitoring-Ansichten, klare Prioritätsregeln und owner-basierte Ticket-Routen. Wiederkehrende Themen wurden in SOP-Updates überführt.',
              'Ein wöchentlicher Review mit Teamleads machte Trends sichtbar und löste konkrete Verbesserungsaufgaben aus.',
            ],
          },
          {
            title: 'Ergebnis',
            paragraphs: [
              'Reaktionszeiten wurden kürzer, Verantwortlichkeiten klarer und die Servicequalität konsistenter. Wiederkehrende Fehler konnten schneller reduziert werden.',
              'Dadurch verbesserte sich die Kundenwahrnehmung und die Zahl positiver Signale stieg nachhaltig.',
            ],
          },
        ],
        'saas-startups': [
          {
            title: 'Ausgangslage',
            paragraphs: [
              'Ein SaaS-Team hatte viele Feedbackkanäle, aber keine einheitliche Priorisierungslogik. Release-Auswirkungen wurden zu spät bewertet und Regressionen teilweise erst nach Wochen erkannt.',
              'Produkt, Support und Growth hatten unterschiedliche Sicht auf die wichtigsten Probleme.',
            ],
          },
          {
            title: 'Intervention',
            paragraphs: [
              'Feedbackquellen wurden aggregiert, Signale normalisiert und in gemeinsame Prioritätscluster überführt. Nach jedem Release wurden Sentiment-Deltas als Standard-Check etabliert.',
              'Roadmap-Diskussionen wurden auf wiederkehrende, quantifizierte Muster ausgerichtet.',
            ],
          },
          {
            title: 'Ergebnis',
            paragraphs: [
              'Regressionen wurden früher erkannt, Priorisierungsdiskussionen schneller entschieden und Releases datenbasierter bewertet.',
              'Das Team gewann Geschwindigkeit, ohne Qualitätseinbußen in der Customer Experience zu riskieren.',
            ],
          },
        ],
      }
    : {
        agency: [
          {
            title: 'Baseline context',
            paragraphs: [
              'A multi-client agency ran review reporting through manual analyst workflows. Data extraction, categorization, and narrative preparation were different for each account, which created inconsistency in quality and strategic recommendations.',
              'Critical negative shifts were often discovered late, which forced reactive communication and reduced stakeholder trust in the reporting process.',
            ],
          },
          {
            title: 'Intervention design',
            paragraphs: [
              'The team introduced one standardized operating rhythm: daily signal intake, weekly prioritization, and monthly executive narrative. They defined shared categories, escalation thresholds, and owner responsibilities per account.',
              'This shifted reporting from person-dependent craft work toward a repeatable system that scaled across the full client portfolio.',
            ],
          },
          {
            title: 'Results and learning',
            paragraphs: [
              'Reporting effort dropped while consistency improved. Risk patterns were surfaced earlier, giving account teams more control before stakeholder escalation.',
              'Most importantly, strategy conversations improved because recommendations were anchored in recurring evidence clusters instead of isolated comments.',
            ],
          },
        ],
        coaches: [
          {
            title: 'Baseline context',
            paragraphs: [
              'A coaching business had strong customer outcomes but weak proof operations. Results were spread across chats, voice notes, and screenshots, making them difficult to reuse in conversion moments.',
              'During launches, the team spent too much time hunting for examples instead of executing clear messaging.',
            ],
          },
          {
            title: 'Intervention design',
            paragraphs: [
              'The team centralized feedback and tagged every proof asset by audience, transformation type, and offer. Verified snippets were mapped directly to sales pages, sequences, and objection handling.',
              'A fixed weekly review ensured the proof library stayed current as new results arrived.',
            ],
          },
          {
            title: 'Results and learning',
            paragraphs: [
              'Lead quality improved and sales friction decreased because trust evidence was easier to surface at the right step in the buyer journey.',
              'The team also reduced manual work and gained faster iteration speed on offer positioning and onboarding quality.',
            ],
          },
        ],
        services: [
          {
            title: 'Baseline context',
            paragraphs: [
              'A multi-location service business experienced uneven quality signals across teams. Negative feedback patterns were not triaged consistently, so recurring issues persisted too long.',
              'Response ownership varied by team, creating delays and inconsistent customer experience recovery.',
            ],
          },
          {
            title: 'Intervention design',
            paragraphs: [
              'The business implemented location-level monitoring, severity-based routing, and owner-assigned ticket response rules. Recurring complaint themes were translated into SOP updates and team coaching.',
              'A weekly operations review made trend changes visible and linked them to concrete process actions.',
            ],
          },
          {
            title: 'Results and learning',
            paragraphs: [
              'Response cycles became faster, accountability became clearer, and quality consistency improved across locations.',
              'The organization moved from reactive firefighting to proactive quality management with measurable trust gains.',
            ],
          },
        ],
        'saas-startups': [
          {
            title: 'Baseline context',
            paragraphs: [
              'A SaaS team had high feedback volume but low decision clarity. Signals from app stores, support, and community channels were disconnected, and release impact was often measured too late.',
              'Product, support, and growth teams disagreed on prioritization because each function relied on different slices of customer evidence.',
            ],
          },
          {
            title: 'Intervention design',
            paragraphs: [
              'The team aggregated feedback into one normalized stream and grouped recurring issues by product area. Post-release sentiment and trend deltas became mandatory checkpoints in each release cycle.',
              'Roadmap conversations shifted from anecdotal requests to recurring evidence clusters with observable customer impact.',
            ],
          },
          {
            title: 'Results and learning',
            paragraphs: [
              'Regression detection accelerated, prioritization became more objective, and cross-team alignment improved significantly.',
              'The team increased iteration speed while reducing the risk of shipping changes that harmed customer trust.',
            ],
          },
        ],
      };

  const rolloutBySlug: Record<UseCaseSlug, RolloutPhase[]> = isGerman
    ? {
        agency: [
          {
            phase: 'Woche 1 bis 2',
            goal: 'Setup und Baseline',
            tasks: ['Quellen verbinden', 'Kategorien definieren', 'Reporting-Baseline dokumentieren'],
          },
          {
            phase: 'Woche 3 bis 4',
            goal: 'Operationalisieren',
            tasks: ['Prioritaetslogik aktivieren', 'Owner und SLA festlegen', 'Erste Executive-Zusammenfassung ausrollen'],
          },
          {
            phase: 'Monat 2+',
            goal: 'Skalieren',
            tasks: ['Cross-Client Benchmarks', 'Qualitaetskontrolle automatisieren', 'Strategische Empfehlungen standardisieren'],
          },
        ],
        coaches: [
          {
            phase: 'Woche 1',
            goal: 'Proof-Setup',
            tasks: ['Feedback zentralisieren', 'Tag-System definieren', 'Verifizierungsprozess einrichten'],
          },
          {
            phase: 'Woche 2 bis 3',
            goal: 'Sales-Integration',
            tasks: ['Landingpages aktualisieren', 'Snippets in E-Mails nutzen', 'Einwaende systematisch abdecken'],
          },
          {
            phase: 'Monat 2+',
            goal: 'Optimierung',
            tasks: ['Segment-Auswertung', 'Angebotsiteration', 'Kontinuierliches Proof-Update'],
          },
        ],
        services: [
          {
            phase: 'Woche 1 bis 2',
            goal: 'Monitoring-Basis',
            tasks: ['Standort-Views aufsetzen', 'Prioritätsregeln definieren', 'Owner-Zuweisung klären'],
          },
          {
            phase: 'Woche 3 bis 4',
            goal: 'Response-Qualität',
            tasks: ['SLA etablieren', 'Ticket-Routing prüfen', 'Regelmäßige Team-Reviews starten'],
          },
          {
            phase: 'Monat 2+',
            goal: 'Qualitätssteuerung',
            tasks: ['SOP-Updates aus Trends', 'Training nach Bedarf', 'Langzeitvergleich über Standorte'],
          },
        ],
        'saas-startups': [
          {
            phase: 'Woche 1',
            goal: 'Signal-Fundament',
            tasks: ['Kanaele aggregieren', 'Signalcluster definieren', 'Baseline vor Release erfassen'],
          },
          {
            phase: 'Woche 2 bis 3',
            goal: 'Release-Learning',
            tasks: ['Sentiment-Deltas tracken', 'Regressionen mappen', 'Prioritaeten mit Teams synchronisieren'],
          },
          {
            phase: 'Monat 2+',
            goal: 'Roadmap-Reife',
            tasks: ['Recurring-Issues priorisieren', 'Outcome-Metriken koppeln', 'Feedback-Loops fest verankern'],
          },
        ],
      }
    : {
        agency: [
          {
            phase: 'Weeks 1 to 2',
            goal: 'Setup and baseline',
            tasks: ['Connect core sources', 'Define reporting taxonomy', 'Establish baseline KPI view per client'],
          },
          {
            phase: 'Weeks 3 to 4',
            goal: 'Operational adoption',
            tasks: ['Enable priority routing', 'Assign owner and SLA', 'Roll out first executive summary cycle'],
          },
          {
            phase: 'Month 2+',
            goal: 'Scale and standardize',
            tasks: ['Build cross-client benchmarks', 'Automate quality checks', 'Standardize strategic recommendation format'],
          },
        ],
        coaches: [
          {
            phase: 'Week 1',
            goal: 'Proof system setup',
            tasks: ['Centralize feedback intake', 'Define tagging model', 'Set verification criteria'],
          },
          {
            phase: 'Weeks 2 to 3',
            goal: 'Sales and funnel integration',
            tasks: ['Update core pages', 'Embed proof snippets in campaigns', 'Map proof to objection handling'],
          },
          {
            phase: 'Month 2+',
            goal: 'Optimization loop',
            tasks: ['Analyze by segment', 'Iterate offers', 'Refresh proof library continuously'],
          },
        ],
        services: [
          {
            phase: 'Weeks 1 to 2',
            goal: 'Monitoring baseline',
            tasks: ['Set location-level views', 'Define severity rules', 'Assign ownership model'],
          },
          {
            phase: 'Weeks 3 to 4',
            goal: 'Response quality',
            tasks: ['Establish SLAs', 'Audit routing precision', 'Run recurring team quality reviews'],
          },
          {
            phase: 'Month 2+',
            goal: 'Quality governance',
            tasks: ['Translate trends into SOP updates', 'Targeted coaching by issue type', 'Run long-term location comparisons'],
          },
        ],
        'saas-startups': [
          {
            phase: 'Week 1',
            goal: 'Signal foundation',
            tasks: ['Aggregate channels', 'Define issue clusters', 'Capture release baseline'],
          },
          {
            phase: 'Weeks 2 to 3',
            goal: 'Release learning loop',
            tasks: ['Track sentiment deltas', 'Map regressions to product areas', 'Align priorities cross-functionally'],
          },
          {
            phase: 'Month 2+',
            goal: 'Roadmap maturity',
            tasks: ['Prioritize recurring evidence clusters', 'Tie decisions to outcome metrics', 'Institutionalize feedback loops'],
          },
        ],
      };

  const workflowSteps = playbookSteps.map((step: string, index: number) => ({
    step: isGerman ? `Schritt ${index + 1}` : `Step ${index + 1}`,
    detail: step,
  }));

  return {
    sectionText,
    whoItsFor: whoItsForBySlug[slug],
    keyOutcomes: keyOutcomesBySlug[slug],
    jobsToBeDone: jobsBySlug[slug],
    workflowSteps,
    mapping: mappingBySlug[slug],
    proofSnippets: proofBySlug[slug],
    caseStudy: caseStudyBySlug[slug],
    rollout: rolloutBySlug[slug],
    faq: faqBySlug[slug],
  };
}

export default function UseCasePageTemplate({ locale, messages, content }: UseCasePageTemplateProps) {
  const normalizedLocale = locale || 'en';
  const localePrefix = normalizedLocale === 'en' ? '/en' : `/${normalizedLocale}`;
  const sections = getPageSections(normalizedLocale, content.id, content.playbookSteps);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-base-100">
      <Navigation locale={locale} messages={messages} />

      <section className="pt-32 pb-16 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest"
            >
              <Lightbulb className="w-4 h-4" />
              {content.badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-5xl md:text-7xl font-bold text-base-content mt-6 mb-6 leading-tight"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed"
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto p-8 md:p-10 rounded-[2rem] border border-base-200 bg-base-200/40">
            <p className="text-lg leading-relaxed text-base-content/75">{content.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              {sections.sectionText.whoItsFor}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
            {sections.whoItsFor.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-base-200 text-base-content/80 border border-base-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <Target className="w-4 h-4" />
              {sections.sectionText.jobs}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {sections.jobsToBeDone.map((job) => (
              <div key={job.job} className="p-6 rounded-[1.5rem] border border-base-200 bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-base-content mb-3">{job.job}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed mb-2">Struggle: {job.struggle}</p>
                <p className="text-sm text-base-content/75 leading-relaxed">Outcome: {job.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {sections.sectionText.outcomes}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
            {sections.keyOutcomes.map((card) => (
              <div key={card.label} className="p-6 rounded-[1.25rem] border border-base-200 bg-base-200/50">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">{card.label}</span>
                </div>
                <p className="text-3xl font-black text-base-content mb-2">{card.value}</p>
                <p className="text-sm text-base-content/70 leading-relaxed">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              {sections.sectionText.deepWorkflow}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid gap-4">
            {sections.workflowSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-[1.25rem] border border-base-200 bg-white shadow-sm hover:shadow-md transition-all">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">{step.step}</p>
                <p className="text-base-content/75 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <Link2 className="w-4 h-4" />
              {sections.sectionText.mapping}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {sections.mapping.map((item) => (
              <Link
                key={item.label}
                href={`${localePrefix}${item.href}`}
                className="p-5 rounded-[1.25rem] border border-base-200 bg-white hover:bg-base-100 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base-content">{item.label}</p>
                    <p className="text-xs uppercase tracking-widest text-base-content/50 mt-1">{item.type}</p>
                  </div>
                  <Link2 className="w-4 h-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <MessageSquareQuote className="w-4 h-4" />
              {sections.sectionText.proof}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {sections.proofSnippets.map((snippet) => (
              <div key={snippet.title} className="p-6 rounded-[1.5rem] border border-base-200 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <MessageSquareQuote className="w-4 h-4" />
                  <p className="text-xs uppercase tracking-widest font-bold">{snippet.metric}</p>
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">{snippet.title}</h3>
                <p className="text-base-content/75 leading-relaxed">{snippet.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <Flag className="w-4 h-4" />
              {sections.sectionText.caseStudy}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid gap-4">
            {sections.caseStudy.map((part) => (
              <div key={part.title} className="p-7 rounded-[1.5rem] border border-base-200 bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-base-content mb-4">{part.title}</h3>
                <div className="space-y-3">
                  {part.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base-content/75 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              {sections.sectionText.rollout}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
            {sections.rollout.map((phase) => (
              <div key={phase.phase} className="p-6 rounded-[1.25rem] border border-base-200 bg-white shadow-sm hover:shadow-md transition-all">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">{phase.phase}</p>
                <h3 className="text-lg font-bold text-base-content mb-3">{phase.goal}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-base-content/70 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] border border-base-200 bg-base-200/50">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Flag className="w-5 h-5" />
                <h2 className="font-black uppercase tracking-[0.18em] text-sm">{content.challengeTitle}</h2>
              </div>
              <ul className="space-y-4">
                {content.challengePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base-content/75 leading-relaxed">
                    <Target className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] border border-base-200 bg-base-200/50">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <ClipboardList className="w-5 h-5" />
                <h2 className="font-black uppercase tracking-[0.18em] text-sm">{content.playbookTitle}</h2>
              </div>
              <ul className="space-y-4">
                {content.playbookSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-base-content/75 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto p-8 md:p-10 rounded-[2rem] border border-base-200 bg-base-200/40">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="font-black uppercase tracking-[0.18em] text-sm">{content.outcomesTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {content.outcomes.map((outcome) => (
                <div key={outcome} className="p-4 rounded-xl border border-base-300 bg-base-100/80 text-base-content/75">
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.18em] flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              {sections.sectionText.faq}
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid gap-4">
            {sections.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="rounded-[1.25rem] border border-base-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <p className="font-semibold text-base-content">{item.question}</p>
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
        </div>
      </section>

      <CTA locale={locale} messages={messages} />

      <Footer locale={locale} messages={messages} />
    </main>
  );
}
