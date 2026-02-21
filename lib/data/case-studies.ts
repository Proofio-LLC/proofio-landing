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
  statsLabels: Record<CaseStudySlug, string[]>;
  keyFindingsItems: Record<CaseStudySlug, string[]>;
  rootCauses: Record<CaseStudySlug, Array<{ title: string; description: string }>>;
  actionDescriptions: Record<CaseStudySlug, { immediate: string; support: string; roadmap: string }>;
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
    statsLabels: {
      n26: ["Analysierte Reviews", "Gefährdete Nutzer", "WoW-Bewertungsrückgang", "Feature-Anfragen"],
      etsy: ["Analysierte Reviews", "Gefährdete Nutzer", "WoW-Bewertungsrückgang", "Gemeldete Probleme"],
      uber: ["Analysierte Reviews", "Gefährdete Nutzer", "WoW-Bewertungsrückgang", "Gemeldete Probleme"],
    },
    keyFindingsItems: {
      n26: [
        "43 % der aktuellen Reviews zeigen Abwanderungssignale.",
        "Die Durchschnittsbewertung sank um 0,7★ im Wochenvergleich.",
        "40 % aller Reviews sind 1-Stern-Bewertungen – ein Zeichen starker Unzufriedenheit.",
        "Kritische Probleme konzentrieren sich auf Kontosperren, Support-Verzögerungen und Verifizierungsfehler.",
      ],
      etsy: [
        "60 % der aktuellen Reviews zeigen Abwanderungssignale.",
        "Die Durchschnittsbewertung sank um 0,21★ im Wochenvergleich.",
        "34 % aller Reviews sind 1-Stern-Bewertungen.",
        "Kritische Beschwerden häufen sich rund um den Checkout-Flow und Apple-Pay-Fehler.",
      ],
      uber: [
        "48 % der aktuellen Reviews zeigen Abwanderungssignale.",
        "Die Durchschnittsbewertung sank um 2,3★ im Wochenvergleich.",
        "32 % aller Reviews sind 1-Stern-Bewertungen.",
        "Kritische Probleme bündeln sich bei der Stornierung, Support-Friktion und irreführenden Erwartungen.",
      ],
    },
    rootCauses: {
      n26: [
        {
          title: "Kontosperrungen ohne Erklärung oder Einspruchsmöglichkeit",
          description: "Nutzer berichten, ohne transparenten Lösungsweg von zentralen Kontofunktionen ausgesperrt zu sein.",
        },
        {
          title: "Support-Antworten werden 2+ Monate verzögert oder ignoriert",
          description: "Langfristig offene Tickets erzeugen hohes Abwanderungsrisiko und stark negative Stimmung.",
        },
        {
          title: "ID-Verifizierung und Stabilitätsprobleme in neuen Versionen",
          description: "Kamerafehler bei der Verifizierung und Regressionsprobleme tauchen wiederholt in Beschwerden auf.",
        },
      ],
      etsy: [
        {
          title: "Wiederkehrende Checkout-Fehler mit anhaltenden Fehlermeldungen",
          description: "Nutzer berichten über mehrfach fehlgeschlagene Kaufversuche, auch nach erneuten Versuchen.",
        },
        {
          title: "Apple Pay ist nach App-Updates unzuverlässig",
          description: "Zahlungsfehler blockieren direkt die Konversion im zentralen Kaufprozess.",
        },
        {
          title: "Vertrauen bricht, wenn der Lieferstatus falsch ist und Versandkosten zu hoch erscheinen",
          description: "Nutzer beschreiben eine Diskrepanz zwischen erwartetem und tatsächlichem Liefer-/Kostenerlebnis.",
        },
      ],
      uber: [
        {
          title: "UI/UX-Friktion bei Buchungs- und Stornierungsschritten",
          description: "Nutzer berichten wiederholt von hoher Friktion in Abläufen, die schnell und vorhersehbar sein sollten.",
        },
        {
          title: "Support-Qualität wird als wenig hilfreich oder langsam wahrgenommen",
          description: "Langsame oder qualitativ schwache Support-Interaktionen verstärken negative Stimmung und Abwanderungsrisiko.",
        },
        {
          title: "Preis- und ETA-Erwartungen werden häufig gebrochen",
          description: "Diskrepanz zwischen versprochener und tatsächlich erlebter Leistung treibt Unzufriedenheit.",
        },
      ],
    },
    actionDescriptions: {
      n26: {
        immediate: "Auf 14 unbeantwortete Negativrezensionen antworten, um das Abwanderungsrisiko schnell zu senken.",
        support: "Sperr- und Verifizierungsbeschwerden mit klarer Lösungsverantwortung priorisieren.",
        roadmap: "Stabilitätsprobleme beheben, bevor weitere Funktionskomplexität ausgeliefert wird.",
      },
      etsy: {
        immediate: "Auf 7 unbeantwortete Negativrezensionen antworten, um das Abwanderungsrisiko schnell zu senken.",
        support: "Checkout- und Apple-Pay-Fehler mit klarer Verantwortung und SLA eskalieren.",
        roadmap: "Konversionssicherheit priorisieren, bevor nicht kritische UX-Komplexität hinzugefügt wird.",
      },
      uber: {
        immediate: "Auf 45 unbeantwortete Negativrezensionen antworten, um das Abwanderungsrisiko schnell zu senken.",
        support: "Stornierung und Eskalationswege mit strengerer Verantwortung und schnelleren Antwortzeiten verbessern.",
        roadmap: "Vertrauensbrecher in der Customer Journey beheben, bevor Preis- und Marketingkomplexität erweitert wird.",
      },
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
    statsLabels: {
      n26: ["Avis analysés", "Utilisateurs à risque", "Baisse hebdo. de note", "Demandes de fonctions"],
      etsy: ["Avis analysés", "Utilisateurs à risque", "Baisse hebdo. de note", "Problèmes signalés"],
      uber: ["Avis analysés", "Utilisateurs à risque", "Baisse hebdo. de note", "Problèmes signalés"],
    },
    keyFindingsItems: {
      n26: [
        "43 % des avis récents présentent des signaux de churn.",
        "La note moyenne a chuté de 0,7★ d'une semaine à l'autre.",
        "40 % de tous les avis sont à 1 étoile, signe d'une insatisfaction sévère.",
        "Les problèmes critiques se concentrent sur les blocages de compte, les retards de support et les échecs de vérification.",
      ],
      etsy: [
        "60 % des avis récents présentent des signaux de churn.",
        "La note moyenne a chuté de 0,21★ d'une semaine à l'autre.",
        "34 % de tous les avis sont à 1 étoile.",
        "Les plaintes critiques se concentrent autour du flux de paiement et des échecs Apple Pay.",
      ],
      uber: [
        "48 % des avis récents présentent des signaux de churn.",
        "La note moyenne a chuté de 2,3★ d'une semaine à l'autre.",
        "32 % de tous les avis sont à 1 étoile.",
        "Les problèmes critiques se concentrent sur l'annulation, la friction du support et les attentes trompeuses.",
      ],
    },
    rootCauses: {
      n26: [
        {
          title: "Comptes bloqués sans explication ni voie de recours",
          description: "Les utilisateurs signalent être exclus des actions essentielles sans flux de résolution transparent.",
        },
        {
          title: "Réponses du support retardées ou ignorées pendant 2+ mois",
          description: "Des tickets non résolus sur la durée créent un risque de churn élevé et un sentiment négatif fort.",
        },
        {
          title: "Régressions de vérification d'identité et de fiabilité dans les récentes versions",
          description: "Échecs de la caméra/vérification iPad et baisse de fiabilité apparaissent à plusieurs reprises dans les plaintes.",
        },
      ],
      etsy: [
        {
          title: "Échecs répétés du checkout avec des messages d'erreur persistants",
          description: "Les utilisateurs rapportent plusieurs tentatives d'achat échouées, même après de nouveaux essais.",
        },
        {
          title: "Le parcours d'achat Apple Pay est instable après les mises à jour de l'app",
          description: "L'échec du paiement bloque directement la conversion dans un flux d'achat central.",
        },
        {
          title: "La confiance se brise quand le statut de livraison est incorrect et les frais de port semblent excessifs",
          description: "Les utilisateurs décrivent une inadéquation entre l'expérience de livraison/coût attendue et réelle.",
        },
      ],
      uber: [
        {
          title: "Friction UI/UX dans les étapes de réservation et d'annulation",
          description: "Les utilisateurs signalent régulièrement une friction élevée dans des flux qui devraient être rapides et prévisibles.",
        },
        {
          title: "La qualité du support est perçue comme peu utile ou lente",
          description: "Des interactions de support lentes ou de faible qualité intensifient le sentiment négatif et le risque de churn.",
        },
        {
          title: "Les attentes de prix et d'ETA brisent souvent la confiance",
          description: "L'écart entre l'expérience promise et celle réellement vécue génère de l'insatisfaction.",
        },
      ],
    },
    actionDescriptions: {
      n26: {
        immediate: "Répondre à 14 avis négatifs sans réponse pour réduire rapidement le risque de churn.",
        support: "Prioriser les plaintes de blocage et de vérification avec une responsabilité claire sur le délai de résolution.",
        roadmap: "Traiter les régressions de fiabilité avant d'ajouter de nouvelles complexités fonctionnelles.",
      },
      etsy: {
        immediate: "Répondre à 7 avis négatifs sans réponse pour réduire rapidement le risque de churn.",
        support: "Escalader les échecs de checkout et Apple Pay avec une responsabilité claire et un SLA défini.",
        roadmap: "Prioriser la fiabilité de conversion avant d'ajouter des complexités UX non critiques.",
      },
      uber: {
        immediate: "Répondre à 45 avis négatifs sans réponse pour réduire rapidement le risque de churn.",
        support: "Améliorer les parcours d'annulation et d'escalade avec une responsabilité plus stricte et des délais de réponse plus courts.",
        roadmap: "Corriger les points de rupture de confiance dans le parcours avant d'élargir les promotions et la complexité tarifaire.",
      },
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
    statsLabels: {
      n26: ["Reseñas analizadas", "Usuarios en riesgo", "Caída semanal de nota", "Solicitudes de función"],
      etsy: ["Reseñas analizadas", "Usuarios en riesgo", "Caída semanal de nota", "Problemas reportados"],
      uber: ["Reseñas analizadas", "Usuarios en riesgo", "Caída semanal de nota", "Problemas reportados"],
    },
    keyFindingsItems: {
      n26: [
        "El 43 % de las reseñas recientes muestran señales de abandono.",
        "La calificación media cayó 0,7★ semana a semana.",
        "El 40 % de todas las reseñas son de 1 estrella, lo que indica una insatisfacción severa.",
        "Los problemas críticos se concentran en bloqueos de cuenta, retrasos en soporte y fallos de verificación.",
      ],
      etsy: [
        "El 60 % de las reseñas recientes muestran señales de abandono.",
        "La calificación media cayó 0,21★ semana a semana.",
        "El 34 % de todas las reseñas son de 1 estrella.",
        "Las quejas críticas se agrupan en torno al flujo de pago y los fallos de Apple Pay.",
      ],
      uber: [
        "El 48 % de las reseñas recientes muestran señales de abandono.",
        "La calificación media cayó 2,3★ semana a semana.",
        "El 32 % de todas las reseñas son de 1 estrella.",
        "Los problemas críticos se concentran en la cancelación, la fricción con el soporte y expectativas engañosas.",
      ],
    },
    rootCauses: {
      n26: [
        {
          title: "Cuentas bloqueadas sin explicación ni proceso de apelación",
          description: "Los usuarios reportan ser bloqueados de acciones esenciales sin un flujo de resolución transparente.",
        },
        {
          title: "Respuestas de soporte retrasadas o ignoradas por más de 2 meses",
          description: "Los tickets sin resolver durante mucho tiempo crean alto riesgo de abandono y fuerte sentimiento negativo.",
        },
        {
          title: "Regresiones en la verificación de identidad y fiabilidad en versiones recientes",
          description: "Fallos de cámara/verificación en iPad y caída de fiabilidad aparecen repetidamente en las quejas.",
        },
      ],
      etsy: [
        {
          title: "Fallos repetidos en el checkout con mensajes de error persistentes",
          description: "Los usuarios reportan múltiples intentos fallidos de completar compras, incluso después de reintentar.",
        },
        {
          title: "El flujo de compra con Apple Pay es poco fiable tras actualizaciones",
          description: "El fallo de pago bloquea directamente la conversión en un flujo de compra central.",
        },
        {
          title: "La confianza se rompe cuando el estado de entrega es incorrecto y el envío parece excesivo",
          description: "Los usuarios describen una discrepancia entre la experiencia de entrega/costo esperada y la real.",
        },
      ],
      uber: [
        {
          title: "Fricción UI/UX en los pasos de reserva y cancelación",
          description: "Los usuarios reportan repetidamente alta fricción en flujos que deberían ser rápidos y predecibles.",
        },
        {
          title: "La calidad del soporte se percibe como poco útil o lenta",
          description: "Las interacciones de soporte lentas o de baja calidad intensifican el sentimiento negativo y el riesgo de abandono.",
        },
        {
          title: "Las expectativas de precio y ETA frecuentemente rompen la confianza",
          description: "La discrepancia entre la experiencia prometida y la real genera insatisfacción.",
        },
      ],
    },
    actionDescriptions: {
      n26: {
        immediate: "Responder a 14 reseñas negativas sin contestar para reducir el riesgo de abandono rápidamente.",
        support: "Priorizar las quejas de bloqueo y verificación con responsabilidad clara sobre el tiempo de resolución.",
        roadmap: "Abordar las regresiones de fiabilidad antes de añadir más complejidad de funcionalidades.",
      },
      etsy: {
        immediate: "Responder a 7 reseñas negativas sin contestar para reducir el riesgo de abandono rápidamente.",
        support: "Escalar los fallos de checkout y Apple Pay con responsabilidad clara y SLA definido.",
        roadmap: "Priorizar la fiabilidad de conversión antes de añadir complejidad UX no crítica.",
      },
      uber: {
        immediate: "Responder a 45 reseñas negativas sin contestar para reducir el riesgo de abandono rápidamente.",
        support: "Mejorar los flujos de cancelación y escalación con responsabilidad más estricta y ventanas de respuesta más rápidas.",
        roadmap: "Corregir los puntos de ruptura de confianza en el recorrido antes de ampliar la complejidad promocional y de precios.",
      },
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
    statsLabels: {
      n26: ["Avaliações analisadas", "Usuários em risco", "Queda semanal de nota", "Pedidos de funcionalidade"],
      etsy: ["Avaliações analisadas", "Usuários em risco", "Queda semanal de nota", "Problemas relatados"],
      uber: ["Avaliações analisadas", "Usuários em risco", "Queda semanal de nota", "Problemas relatados"],
    },
    keyFindingsItems: {
      n26: [
        "43% das avaliações recentes mostram sinais de churn.",
        "A nota média caiu 0,7★ semana a semana.",
        "40% de todas as avaliações são de 1 estrela, indicando insatisfação severa.",
        "Os problemas críticos se concentram em bloqueios de conta, atrasos no suporte e falhas de verificação.",
      ],
      etsy: [
        "60% das avaliações recentes mostram sinais de churn.",
        "A nota média caiu 0,21★ semana a semana.",
        "34% de todas as avaliações são de 1 estrela.",
        "As reclamações críticas se agrupam em torno do fluxo de checkout e falhas no Apple Pay.",
      ],
      uber: [
        "48% das avaliações recentes mostram sinais de churn.",
        "A nota média caiu 2,3★ semana a semana.",
        "32% de todas as avaliações são de 1 estrela.",
        "Os problemas críticos se concentram em cancelamentos, fricção com o suporte e expectativas enganosas.",
      ],
    },
    rootCauses: {
      n26: [
        {
          title: "Contas bloqueadas sem explicação ou processo de apelação",
          description: "Usuários relatam ser impedidos de ações essenciais sem um fluxo de resolução transparente.",
        },
        {
          title: "Respostas do suporte atrasadas ou ignoradas por 2+ meses",
          description: "Tickets abertos por longo prazo sem resolução criam alto risco de churn e sentimento negativo intenso.",
        },
        {
          title: "Regressões na verificação de identidade e confiabilidade em versões recentes",
          description: "Falhas de câmera/verificação no iPad e queda de confiabilidade aparecem repetidamente nas reclamações.",
        },
      ],
      etsy: [
        {
          title: "Falhas repetidas no checkout com mensagens de erro persistentes",
          description: "Usuários relatam múltiplas tentativas malsucedidas de concluir compras, mesmo após novas tentativas.",
        },
        {
          title: "O fluxo de compra com Apple Pay é instável após atualizações do app",
          description: "Falha no pagamento bloqueia diretamente a conversão em um fluxo de compra central.",
        },
        {
          title: "A confiança se quebra quando o status de entrega está errado e o frete parece excessivo",
          description: "Usuários descrevem uma discrepância entre a experiência de entrega/custo esperada e a real.",
        },
      ],
      uber: [
        {
          title: "Fricção de UI/UX nas etapas de reserva e cancelamento",
          description: "Usuários relatam repetidamente alta fricção em fluxos que deveriam ser rápidos e previsíveis.",
        },
        {
          title: "A qualidade do suporte é percebida como pouco útil ou lenta",
          description: "Interações de suporte lentas ou de baixa qualidade intensificam o sentimento negativo e o risco de churn.",
        },
        {
          title: "Expectativas de preço e ETA frequentemente quebram a confiança",
          description: "A discrepância entre a experiência prometida e a real gera insatisfação.",
        },
      ],
    },
    actionDescriptions: {
      n26: {
        immediate: "Responder a 14 avaliações negativas sem resposta para reduzir o risco de churn rapidamente.",
        support: "Priorizar reclamações de bloqueio e verificação com responsabilidade clara sobre o tempo de resolução.",
        roadmap: "Corrigir regressões de confiabilidade antes de lançar complexidade adicional de funcionalidades.",
      },
      etsy: {
        immediate: "Responder a 7 avaliações negativas sem resposta para reduzir o risco de churn rapidamente.",
        support: "Escalar falhas de checkout e Apple Pay com responsabilidade clara e SLA definido.",
        roadmap: "Priorizar a confiabilidade de conversão antes de adicionar complexidade de UX não crítica.",
      },
      uber: {
        immediate: "Responder a 45 avaliações negativas sem resposta para reduzir o risco de churn rapidamente.",
        support: "Melhorar os fluxos de cancelamento e escalação com responsabilidade mais estrita e janelas de resposta mais rápidas.",
        roadmap: "Corrigir pontos de quebra de confiança na jornada antes de expandir a complexidade promocional e de preços.",
      },
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
    statsLabels: {
      n26: ["Recensioni analizzate", "Utenti a rischio", "Calo valutazione sett.", "Richieste di funzionalità"],
      etsy: ["Recensioni analizzate", "Utenti a rischio", "Calo valutazione sett.", "Problemi segnalati"],
      uber: ["Recensioni analizzate", "Utenti a rischio", "Calo valutazione sett.", "Problemi segnalati"],
    },
    keyFindingsItems: {
      n26: [
        "Il 43% delle recensioni recenti mostra segnali di abbandono.",
        "La valutazione media è scesa di 0,7★ settimana su settimana.",
        "Il 40% di tutte le recensioni è a 1 stella, indicando una grave insoddisfazione.",
        "I problemi critici si concentrano su blocchi account, ritardi del supporto e fallimenti nella verifica.",
      ],
      etsy: [
        "Il 60% delle recensioni recenti mostra segnali di abbandono.",
        "La valutazione media è scesa di 0,21★ settimana su settimana.",
        "Il 34% di tutte le recensioni è a 1 stella.",
        "Le lamentele critiche si concentrano intorno al flusso di checkout e ai fallimenti di Apple Pay.",
      ],
      uber: [
        "Il 48% delle recensioni recenti mostra segnali di abbandono.",
        "La valutazione media è scesa di 2,3★ settimana su settimana.",
        "Il 32% di tutte le recensioni è a 1 stella.",
        "I problemi critici si concentrano su cancellazione, attrito con il supporto e aspettative fuorvianti.",
      ],
    },
    rootCauses: {
      n26: [
        {
          title: "Account bloccati senza spiegazioni né processo di ricorso",
          description: "Gli utenti segnalano di essere esclusi da azioni essenziali senza un flusso di risoluzione trasparente.",
        },
        {
          title: "Risposte del supporto ritardate o ignorate per 2+ mesi",
          description: "Ticket irrisolti a lungo termine creano alto rischio di abbandono e forte sentimento negativo.",
        },
        {
          title: "Regressioni nella verifica dell'identità e affidabilità nelle versioni recenti",
          description: "Errori di fotocamera/verifica su iPad e calo di affidabilità appaiono ripetutamente nelle segnalazioni.",
        },
      ],
      etsy: [
        {
          title: "Fallimenti ripetuti nel checkout con messaggi di errore persistenti",
          description: "Gli utenti segnalano molteplici tentativi falliti di completare acquisti, anche dopo nuovi tentativi.",
        },
        {
          title: "Il percorso di acquisto con Apple Pay è instabile dopo gli aggiornamenti dell'app",
          description: "Il fallimento del pagamento blocca direttamente la conversione in un flusso d'acquisto centrale.",
        },
        {
          title: "La fiducia si rompe quando lo stato di consegna è errato e le spese di spedizione sembrano eccessive",
          description: "Gli utenti descrivono una discrepanza tra l'esperienza di consegna/costo attesa e quella reale.",
        },
      ],
      uber: [
        {
          title: "Attrito UI/UX nelle fasi di prenotazione e cancellazione",
          description: "Gli utenti segnalano ripetutamente alto attrito in flussi che dovrebbero essere rapidi e prevedibili.",
        },
        {
          title: "La qualità del supporto è percepita come poco utile o lenta",
          description: "Interazioni di supporto lente o di scarsa qualità intensificano il sentimento negativo e il rischio di abbandono.",
        },
        {
          title: "Le aspettative su prezzi e ETA spesso rompono la fiducia",
          description: "La discrepanza tra l'esperienza promessa e quella reale genera insoddisfazione.",
        },
      ],
    },
    actionDescriptions: {
      n26: {
        immediate: "Rispondere a 14 recensioni negative senza risposta per ridurre rapidamente il rischio di abbandono.",
        support: "Dare priorità alle segnalazioni di blocco e verifica con una chiara responsabilità sui tempi di risoluzione.",
        roadmap: "Correggere le regressioni di affidabilità prima di aggiungere ulteriore complessità funzionale.",
      },
      etsy: {
        immediate: "Rispondere a 7 recensioni negative senza risposta per ridurre rapidamente il rischio di abbandono.",
        support: "Escalare i fallimenti di checkout e Apple Pay con responsabilità chiara e SLA definito.",
        roadmap: "Dare priorità all'affidabilità della conversione prima di aggiungere complessità UX non critica.",
      },
      uber: {
        immediate: "Rispondere a 45 recensioni negative senza risposta per ridurre rapidamente il rischio di abbandono.",
        support: "Migliorare i percorsi di cancellazione e escalation con responsabilità più rigorosa e finestre di risposta più rapide.",
        roadmap: "Correggere i punti di rottura della fiducia nel percorso prima di espandere la complessità promozionale e tariffaria.",
      },
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
    page.keyFindingsItems = ui.keyFindingsItems[slug];
    page.rootCausesLabel = ui.rootCausesLabel;
    page.rootCausesTitle = ui.rootCausesTitle;
    page.rootCauses = ui.rootCauses[slug];
    page.actionLabel = ui.actionLabel;
    page.actionTitle = ui.actionTitle;
    page.quote = ui.quote;
    page.disclaimer = ui.disclaimer;
    // Stats labels
    page.stats[0].label = ui.statsLabels[slug][0];
    page.stats[1].label = ui.statsLabels[slug][1];
    page.stats[2].label = ui.statsLabels[slug][2];
    page.stats[3].label = ui.statsLabels[slug][3];
    // Action titles + descriptions
    page.actions[0].title = ui.actionImmediate;
    page.actions[0].description = ui.actionDescriptions[slug].immediate;
    page.actions[1].title = ui.actionSupport;
    page.actions[1].description = ui.actionDescriptions[slug].support;
    page.actions[2].title = ui.actionRoadmap;
    page.actions[2].description = ui.actionDescriptions[slug].roadmap;
  }
}

export function getCaseStudyCards(locale: Locale): Record<CaseStudySlug, CaseStudyCardCopy> {
  return copy[locale]?.cards || copy.en.cards;
}

export function getCaseStudyDetail(locale: Locale, slug: CaseStudySlug): CaseStudyDetailCopy {
  return (copy[locale]?.pages || copy.en.pages)[slug] || copy.en.pages[slug];
}
