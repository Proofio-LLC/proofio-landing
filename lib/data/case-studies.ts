import type { Locale } from "@/lib/i18n";

export type CaseStudySlug = "n26" | "etsy" | "uber";

type CaseStudyCardCopy = {
  title: string;
  industry: string;
  description: string;
};

type CaseStudyDetailCopy = {
  backToHomepage: string;
  badge: string;
  title: string;
  intro: string;
  stats: Array<{ value: string; label: string }>;
  keyFindingsLabel: string;
  keyFindingsTitle: string;
  keyFindingsItems: string[];
  rootCausesLabel: string;
  rootCausesTitle: string;
  rootCauses: Array<{ title: string; description: string }>;
  actionLabel: string;
  actionTitle: string;
  actions: Array<{ title: string; description: string }>;
  quote: string;
  disclaimer: string;
};

type CaseStudyLocaleCopy = {
  cards: Record<CaseStudySlug, CaseStudyCardCopy>;
  pages: Record<CaseStudySlug, CaseStudyDetailCopy>;
};

const copy: Record<Locale, CaseStudyLocaleCopy> = {
  en: {
    cards: {
      n26: {
        title: "N26",
        industry: "Fintech",
        description: "Banking trust at risk: account freezes, verification breakdowns, and delayed support emerged as key churn accelerators.",
      },
      etsy: {
        title: "Etsy",
        industry: "Marketplace",
        description: "Conversion friction in focus: checkout errors and Apple Pay failures expose urgent purchase-flow reliability gaps.",
      },
      uber: {
        title: "Uber",
        industry: "Mobility",
        description: "Service experience under pressure: cancellation friction, support dissatisfaction, and pricing perception drive negative momentum.",
      },
    },
    pages: {
      n26: {
        backToHomepage: "Back to homepage",
        badge: "Case Study",
        title: "What 500 N26 App Store Reviews Reveal",
        intro: "We analyzed 500 recent App Store reviews of the N26 mobile banking app using Proofio's deep intelligence engine.",
        stats: [
          { value: "500", label: "Reviews analyzed" },
          { value: "43%", label: "Users at risk" },
          { value: "0.7★", label: "WoW rating drop" },
          { value: "7", label: "Feature requests" },
        ],
        keyFindingsLabel: "Key Findings",
        keyFindingsTitle: "What stood out immediately",
        keyFindingsItems: [
          "43% of recent reviews show churn signals.",
          "Average rating dropped by 0.7★ week-over-week.",
          "40% of all reviews are 1-star, indicating severe dissatisfaction.",
          "Critical issue clusters center on account freezes, support delays, and verification failures.",
        ],
        rootCausesLabel: "Root Causes Identified",
        rootCausesTitle: "Systemic drivers behind frustration",
        rootCauses: [
          {
            title: "Accounts locked without explanation or appeal process",
            description: "Users report being blocked from core account actions without transparent resolution flow.",
          },
          {
            title: "Support responses delayed or ignored for 2+ months",
            description: "Extended unresolved tickets create high churn risk and strong negative sentiment.",
          },
          {
            title: "ID verification and reliability regressions on recent releases",
            description: "iPad camera/verification failures and reliability decline repeatedly appear in complaints.",
          },
        ],
        actionLabel: "Actionable Insights",
        actionTitle: "Clear next step, not just sentiment",
        actions: [
          {
            title: "Immediate action",
            description: "Respond to 14 unanswered negative reviews to reduce churn risk quickly.",
          },
          {
            title: "Support focus",
            description: "Prioritize freeze and verification complaints with time-to-resolution ownership.",
          },
          {
            title: "Roadmap signal",
            description: "Address reliability regressions before shipping additional feature complexity.",
          },
        ],
        quote: "Proofio doesn't just analyze reviews - it reveals why customers leave and what to fix first.",
        disclaimer:
          "Independent analysis of publicly available review content. Brand names are used for factual reference only and do not imply endorsement or partnership.",
      },
      etsy: {
        backToHomepage: "Back to homepage",
        badge: "Case Study",
        title: "What 500 Etsy App Store Reviews Reveal",
        intro: "We analyzed 500 recent App Store reviews and identified clear churn drivers around checkout reliability, payment failures, and trust-critical delivery experience.",
        stats: [
          { value: "500", label: "Reviews analyzed" },
          { value: "60%", label: "Users at risk" },
          { value: "0.21★", label: "WoW rating drop" },
          { value: "11", label: "Issues reported" },
        ],
        keyFindingsLabel: "Key Findings",
        keyFindingsTitle: "What stood out immediately",
        keyFindingsItems: [
          "60% of recent reviews show churn signals.",
          "Average rating dropped by 0.21★ week-over-week.",
          "34% of all reviews are 1-star.",
          "Critical complaints cluster around checkout flow and Apple Pay failures.",
        ],
        rootCausesLabel: "Root Causes Identified",
        rootCausesTitle: "Systemic drivers behind frustration",
        rootCauses: [
          {
            title: "Repeated checkout failures with persistent error messages",
            description: "Users report multiple failed attempts to complete purchases, even after retries.",
          },
          {
            title: "Apple Pay purchasing path is unreliable after app updates",
            description: "Payment failure directly blocks conversion in a core buying flow.",
          },
          {
            title: "Trust breaks when delivery status is wrong and shipping feels excessive",
            description: "Users describe mismatch between expected and actual delivery/cost experience.",
          },
        ],
        actionLabel: "Actionable Insights",
        actionTitle: "Clear next step, not just sentiment",
        actions: [
          {
            title: "Immediate action",
            description: "Respond to 7 unanswered negative reviews to reduce churn risk quickly.",
          },
          {
            title: "Support focus",
            description: "Escalate checkout and Apple Pay failures with clear ownership and SLA.",
          },
          {
            title: "Roadmap signal",
            description: "Prioritize conversion reliability before adding non-critical UX complexity.",
          },
        ],
        quote: "Proofio doesn't just analyze reviews - it reveals why customers leave and what to fix first.",
        disclaimer:
          "Independent analysis of publicly available review content. Brand names are used for factual reference only and do not imply endorsement or partnership.",
      },
      uber: {
        backToHomepage: "Back to homepage",
        badge: "Case Study",
        title: "What 500 Uber App Store Reviews Reveal",
        intro: "We analyzed 500 recent App Store reviews and uncovered strong churn pressure linked to usability friction, support quality, and pricing perception.",
        stats: [
          { value: "500", label: "Reviews analyzed" },
          { value: "48%", label: "Users at risk" },
          { value: "2.3★", label: "WoW rating drop" },
          { value: "63", label: "Issues reported" },
        ],
        keyFindingsLabel: "Key Findings",
        keyFindingsTitle: "What stood out immediately",
        keyFindingsItems: [
          "48% of recent reviews show churn signals.",
          "Average rating dropped by 2.3★ week-over-week.",
          "32% of all reviews are 1-star.",
          "Critical issues cluster around cancellation flow, support friction, and misleading expectations.",
        ],
        rootCausesLabel: "Root Causes Identified",
        rootCausesTitle: "Systemic drivers behind frustration",
        rootCauses: [
          {
            title: "UI/UX friction in booking and cancellation steps",
            description: "Users repeatedly report high friction in flows that should be fast and predictable.",
          },
          {
            title: "Support quality perceived as unhelpful or delayed",
            description: "Slow or low-quality support interactions intensify negative sentiment and churn risk.",
          },
          {
            title: "Pricing and ETA expectations often break trust",
            description: "Mismatch between promised and delivered experience drives dissatisfaction.",
          },
        ],
        actionLabel: "Actionable Insights",
        actionTitle: "Clear next step, not just sentiment",
        actions: [
          {
            title: "Immediate action",
            description: "Respond to 45 unanswered negative reviews to reduce churn risk quickly.",
          },
          {
            title: "Support focus",
            description: "Address cancellation and escalation paths with stricter ownership and faster response windows.",
          },
          {
            title: "Roadmap signal",
            description: "Fix trust-breaking journey points before expanding promotional and pricing complexity.",
          },
        ],
        quote: "Proofio doesn't just analyze reviews - it reveals why customers leave and what to fix first.",
        disclaimer:
          "Independent analysis of publicly available review content. Brand names are used for factual reference only and do not imply endorsement or partnership.",
      },
    },
  },
  de: {
    cards: {
      n26: { title: "N26", industry: "Fintech", description: "Banking-Vertrauen unter Druck: Kontosperren, Verifizierungsprobleme und verzögerter Support treiben die Abwanderung." },
      etsy: { title: "Etsy", industry: "Marktplatz", description: "Konversions-Reibung im Fokus: Checkout-Fehler und Apple-Pay-Probleme zeigen kritische Lücken in der Kaufstrecke." },
      uber: { title: "Uber", industry: "Mobilität", description: "Service-Erlebnis unter Druck: Storno-Friktion, Support-Unzufriedenheit und Preiswahrnehmung verstärken den Negativtrend." },
    },
    pages: {} as any,
  },
  fr: {
    cards: {
      n26: { title: "N26", industry: "Fintech", description: "Confiance bancaire en baisse : blocages de compte, problèmes de vérification et support lent accélèrent le churn." },
      etsy: { title: "Etsy", industry: "Marketplace", description: "Friction de conversion : erreurs de paiement et Apple Pay instable révèlent des failles critiques du tunnel d'achat." },
      uber: { title: "Uber", industry: "Mobilité", description: "Expérience sous pression : friction d'annulation, support jugé faible et perception prix/valeur dégradent la satisfaction." },
    },
    pages: {} as any,
  },
  es: {
    cards: {
      n26: { title: "N26", industry: "Fintech", description: "La confianza bancaria cae: bloqueos de cuenta, fallos de verificación y soporte lento impulsan el churn." },
      etsy: { title: "Etsy", industry: "Marketplace", description: "Fricción de conversión: errores de checkout y fallos de Apple Pay exponen brechas críticas en la compra." },
      uber: { title: "Uber", industry: "Movilidad", description: "Experiencia en tensión: fricción en cancelaciones, soporte débil y percepción de precio aceleran el deterioro." },
    },
    pages: {} as any,
  },
  pt: {
    cards: {
      n26: { title: "N26", industry: "Fintech", description: "Confiança bancária em risco: bloqueios de conta, falhas de verificação e suporte lento aumentam o churn." },
      etsy: { title: "Etsy", industry: "Marketplace", description: "Fricção de conversão em foco: erros no checkout e falhas no Apple Pay expõem lacunas críticas na compra." },
      uber: { title: "Uber", industry: "Mobilidade", description: "Experiência sob pressão: fricção em cancelamentos, suporte fraco e percepção de preço pioram a satisfação." },
    },
    pages: {} as any,
  },
  it: {
    cards: {
      n26: { title: "N26", industry: "Fintech", description: "Fiducia bancaria sotto pressione: blocchi account, problemi di verifica e supporto lento aumentano il churn." },
      etsy: { title: "Etsy", industry: "Marketplace", description: "Friction di conversione: errori checkout e Apple Pay instabile mostrano gap critici nel percorso d'acquisto." },
      uber: { title: "Uber", industry: "Mobilità", description: "Esperienza sotto pressione: attrito nella cancellazione, supporto debole e percezione prezzi spingono il calo." },
    },
    pages: {} as any,
  },
};

for (const locale of ["de", "fr", "es", "pt", "it"] as Locale[]) {
  copy[locale].pages = JSON.parse(JSON.stringify(copy.en.pages));
}

const uiByLocale: Record<Exclude<Locale, "en">, {
  backToHomepage: string;
  badge: string;
  keyFindingsLabel: string;
  keyFindingsTitle: string;
  rootCausesLabel: string;
  rootCausesTitle: string;
  actionLabel: string;
  actionTitle: string;
  actionImmediate: string;
  actionSupport: string;
  actionRoadmap: string;
  quote: string;
  disclaimer: string;
  titles: Record<CaseStudySlug, string>;
  intros: Record<CaseStudySlug, string>;
}> = {
  de: {
    backToHomepage: "Zur Startseite",
    badge: "Case Study",
    keyFindingsLabel: "Kernaussagen",
    keyFindingsTitle: "Was sofort auffiel",
    rootCausesLabel: "Identifizierte Ursachen",
    rootCausesTitle: "Systemische Treiber hinter der Frustration",
    actionLabel: "Konkrete Maßnahmen",
    actionTitle: "Klare nächste Schritte statt nur Sentiment",
    actionImmediate: "Sofortmaßnahme",
    actionSupport: "Support-Fokus",
    actionRoadmap: "Roadmap-Signal",
    quote: "Proofio analysiert nicht nur Reviews – es zeigt, warum Kunden abwandern und was zuerst behoben werden muss.",
    disclaimer: "Unabhängige Analyse öffentlich verfügbarer Review-Daten. Markennamen dienen nur der sachlichen Einordnung und implizieren keine Partnerschaft.",
    titles: {
      n26: "Was 500 N26 App-Store-Reviews zeigen",
      etsy: "Was 500 Etsy App-Store-Reviews zeigen",
      uber: "Was 500 Uber App-Store-Reviews zeigen",
    },
    intros: {
      n26: "Wir haben 500 aktuelle App-Store-Reviews der N26 App mit der Proofio Deep Intelligence Engine analysiert.",
      etsy: "Wir haben 500 aktuelle App-Store-Reviews analysiert und klare Churn-Treiber rund um Checkout, Zahlung und Liefervertrauen erkannt.",
      uber: "Wir haben 500 aktuelle App-Store-Reviews analysiert und starken Churn-Druck durch Usability-Friktion, Support-Qualität und Preiswahrnehmung identifiziert.",
    },
  },
  fr: {
    backToHomepage: "Retour à l'accueil",
    badge: "Étude de cas",
    keyFindingsLabel: "Constats clés",
    keyFindingsTitle: "Ce qui ressort immédiatement",
    rootCausesLabel: "Causes racines identifiées",
    rootCausesTitle: "Moteurs systémiques de la frustration",
    actionLabel: "Insights actionnables",
    actionTitle: "Prochaine étape claire, au-delà du sentiment",
    actionImmediate: "Action immédiate",
    actionSupport: "Priorité support",
    actionRoadmap: "Signal roadmap",
    quote: "Proofio n'analyse pas seulement les avis : il révèle pourquoi les clients partent et quoi corriger en priorité.",
    disclaimer: "Analyse indépendante de contenus d'avis publics. Les marques sont citées à titre informatif et n'impliquent aucun partenariat.",
    titles: {
      n26: "Ce que révèlent 500 avis App Store de N26",
      etsy: "Ce que révèlent 500 avis App Store d'Etsy",
      uber: "Ce que révèlent 500 avis App Store d'Uber",
    },
    intros: {
      n26: "Nous avons analysé 500 avis récents de l'application N26 via le moteur Deep Intelligence de Proofio.",
      etsy: "Nous avons analysé 500 avis récents et identifié des moteurs de churn autour du checkout, des paiements et de la confiance livraison.",
      uber: "Nous avons analysé 500 avis récents et observé une forte pression churn liée à l'UX, au support et à la perception prix.",
    },
  },
  es: {
    backToHomepage: "Volver al inicio",
    badge: "Caso de estudio",
    keyFindingsLabel: "Hallazgos clave",
    keyFindingsTitle: "Lo que destacó de inmediato",
    rootCausesLabel: "Causas raíz identificadas",
    rootCausesTitle: "Factores sistémicos de frustración",
    actionLabel: "Insights accionables",
    actionTitle: "Siguiente paso claro, no solo sentimiento",
    actionImmediate: "Acción inmediata",
    actionSupport: "Foco de soporte",
    actionRoadmap: "Señal de roadmap",
    quote: "Proofio no solo analiza reseñas: revela por qué se van los clientes y qué corregir primero.",
    disclaimer: "Análisis independiente de reseñas públicas. Las marcas se mencionan solo con fines informativos y no implican asociación.",
    titles: {
      n26: "Qué revelan 500 reseñas de N26 en App Store",
      etsy: "Qué revelan 500 reseñas de Etsy en App Store",
      uber: "Qué revelan 500 reseñas de Uber en App Store",
    },
    intros: {
      n26: "Analizamos 500 reseñas recientes de la app N26 con el motor Deep Intelligence de Proofio.",
      etsy: "Analizamos 500 reseñas recientes e identificamos drivers de churn en checkout, pagos y confianza en la entrega.",
      uber: "Analizamos 500 reseñas recientes y detectamos presión de churn por fricción de uso, soporte y percepción de precio.",
    },
  },
  pt: {
    backToHomepage: "Voltar para a página inicial",
    badge: "Estudo de caso",
    keyFindingsLabel: "Principais achados",
    keyFindingsTitle: "O que chamou atenção imediatamente",
    rootCausesLabel: "Causas-raiz identificadas",
    rootCausesTitle: "Fatores sistêmicos por trás da frustração",
    actionLabel: "Insights acionáveis",
    actionTitle: "Próximo passo claro, além de sentimento",
    actionImmediate: "Ação imediata",
    actionSupport: "Foco em suporte",
    actionRoadmap: "Sinal de roadmap",
    quote: "A Proofio não apenas analisa avaliações: ela revela por que clientes saem e o que corrigir primeiro.",
    disclaimer: "Análise independente de avaliações públicas. Marcas são citadas apenas para referência factual e não implicam parceria.",
    titles: {
      n26: "O que 500 avaliações da N26 na App Store revelam",
      etsy: "O que 500 avaliações da Etsy na App Store revelam",
      uber: "O que 500 avaliações da Uber na App Store revelam",
    },
    intros: {
      n26: "Analisamos 500 avaliações recentes do app N26 usando o motor Deep Intelligence da Proofio.",
      etsy: "Analisamos 500 avaliações recentes e identificamos drivers de churn em checkout, pagamentos e confiança na entrega.",
      uber: "Analisamos 500 avaliações recentes e encontramos forte pressão de churn ligada a usabilidade, suporte e percepção de preço.",
    },
  },
  it: {
    backToHomepage: "Torna alla homepage",
    badge: "Case study",
    keyFindingsLabel: "Evidenze chiave",
    keyFindingsTitle: "Cosa è emerso subito",
    rootCausesLabel: "Cause radice identificate",
    rootCausesTitle: "Driver sistemici della frustrazione",
    actionLabel: "Insight azionabili",
    actionTitle: "Prossimo passo chiaro, non solo sentiment",
    actionImmediate: "Azione immediata",
    actionSupport: "Focus supporto",
    actionRoadmap: "Segnale roadmap",
    quote: "Proofio non si limita ad analizzare le recensioni: mostra perché i clienti se ne vanno e cosa correggere per primo.",
    disclaimer: "Analisi indipendente di contenuti pubblici. I marchi sono citati solo a scopo informativo e non implicano partnership.",
    titles: {
      n26: "Cosa rivelano 500 recensioni App Store di N26",
      etsy: "Cosa rivelano 500 recensioni App Store di Etsy",
      uber: "Cosa rivelano 500 recensioni App Store di Uber",
    },
    intros: {
      n26: "Abbiamo analizzato 500 recensioni recenti dell'app N26 con il motore Deep Intelligence di Proofio.",
      etsy: "Abbiamo analizzato 500 recensioni recenti e individuato driver di churn su checkout, pagamenti e fiducia nella consegna.",
      uber: "Abbiamo analizzato 500 recensioni recenti e rilevato forte pressione churn legata a UX, qualità del supporto e percezione prezzo.",
    },
  },
};

for (const locale of Object.keys(uiByLocale) as Array<Exclude<Locale, "en">>) {
  const ui = uiByLocale[locale];
  for (const slug of ["n26", "etsy", "uber"] as CaseStudySlug[]) {
    const page = copy[locale].pages[slug];
    page.backToHomepage = ui.backToHomepage;
    page.badge = ui.badge;
    page.title = ui.titles[slug];
    page.intro = ui.intros[slug];
    page.keyFindingsLabel = ui.keyFindingsLabel;
    page.keyFindingsTitle = ui.keyFindingsTitle;
    page.rootCausesLabel = ui.rootCausesLabel;
    page.rootCausesTitle = ui.rootCausesTitle;
    page.actionLabel = ui.actionLabel;
    page.actionTitle = ui.actionTitle;
    page.quote = ui.quote;
    page.disclaimer = ui.disclaimer;
    page.actions[0].title = ui.actionImmediate;
    page.actions[1].title = ui.actionSupport;
    page.actions[2].title = ui.actionRoadmap;
  }
}

export function getCaseStudyCards(locale: Locale): Record<CaseStudySlug, CaseStudyCardCopy> {
  return copy[locale]?.cards || copy.en.cards;
}

export function getCaseStudyDetail(locale: Locale, slug: CaseStudySlug): CaseStudyDetailCopy {
  return (copy[locale]?.pages || copy.en.pages)[slug] || copy.en.pages[slug];
}
