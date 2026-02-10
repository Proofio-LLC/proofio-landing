import { Locale } from '@/lib/i18n';

export type UseCaseSlug = 'agency' | 'coaches' | 'services' | 'saas-startups';

export type UseCaseCard = {
  id: UseCaseSlug;
  title: string;
  description: string;
};

export type UseCasePageContent = {
  id: UseCaseSlug;
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  challengeTitle: string;
  challengePoints: string[];
  playbookTitle: string;
  playbookSteps: string[];
  outcomesTitle: string;
  outcomes: string[];
};

const FALLBACK_LOCALE: Locale = 'en';

const useCaseCardsByLocale: Record<Locale, UseCaseCard[]> = {
  en: [
    {
      id: 'agency',
      title: 'Agencies',
      description: 'Manage review operations for multiple clients with clean reporting, clear ownership, and fast escalation paths.',
    },
    {
      id: 'coaches',
      title: 'Coaches',
      description: 'Collect trust signals, surface real transformations, and convert social proof into more qualified leads.',
    },
    {
      id: 'services',
      title: 'Service businesses',
      description: 'Track customer satisfaction across touchpoints and turn review feedback into repeatable quality improvements.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS and startups',
      description: 'Connect feedback with product priorities, monitor release impact, and react quickly to changing user sentiment.',
    },
  ],
  de: [
    {
      id: 'agency',
      title: 'Agenturen',
      description: 'Steuert Review-Workflows für mehrere Kunden mit klaren Reports, Verantwortlichkeiten und schnellen Eskalationen.',
    },
    {
      id: 'coaches',
      title: 'Coaches',
      description: 'Sammelt Vertrauenssignale, zeigt echte Ergebnisse und wandelt Social Proof in qualifizierte Leads um.',
    },
    {
      id: 'services',
      title: 'Dienstleister',
      description: 'Verfolgt Kundenzufriedenheit über alle Kontaktpunkte und verbessert eure Servicequalität systematisch.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS und Startups',
      description: 'Verknüpft Feedback mit Produktprioritäten, misst Release-Effekte und reagiert schneller auf Stimmungsänderungen.',
    },
  ],
  fr: [
    {
      id: 'agency',
      title: 'Agences',
      description: 'Pilotez les operations d avis pour plusieurs clients avec des rapports clairs et des responsabilites nettes.',
    },
    {
      id: 'coaches',
      title: 'Coachs',
      description: 'Collectez des preuves de confiance, montrez des resultats concrets et transformez le social proof en leads.',
    },
    {
      id: 'services',
      title: 'Entreprises de services',
      description: 'Suivez la satisfaction client a chaque etape et transformez les retours en ameliorations operationnelles.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS et startups',
      description: 'Reliez les retours aux priorites produit, mesurez l impact des releases et reagissez plus vite.',
    },
  ],
  es: [
    {
      id: 'agency',
      title: 'Agencias',
      description: 'Gestiona operaciones de resenas para varios clientes con reportes claros y una ejecucion ordenada.',
    },
    {
      id: 'coaches',
      title: 'Coaches',
      description: 'Recoge senales de confianza, destaca transformaciones reales y convierte social proof en mas leads.',
    },
    {
      id: 'services',
      title: 'Empresas de servicios',
      description: 'Sigue la satisfaccion del cliente en cada punto y convierte feedback en mejoras repetibles.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS y startups',
      description: 'Conecta feedback con prioridades de producto, mide impacto de releases y responde mas rapido.',
    },
  ],
  pt: [
    {
      id: 'agency',
      title: 'Agencias',
      description: 'Gerencie operacoes de reviews para varios clientes com relatorios claros e execucao mais rapida.',
    },
    {
      id: 'coaches',
      title: 'Coaches',
      description: 'Colete sinais de confianca, destaque transformacoes reais e converta social proof em mais leads.',
    },
    {
      id: 'services',
      title: 'Empresas de servicos',
      description: 'Acompanhe a satisfacao do cliente em todos os pontos e transforme feedback em melhorias recorrentes.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS e startups',
      description: 'Conecte feedback com prioridades de produto, meca impacto de releases e responda mais rapido.',
    },
  ],
  it: [
    {
      id: 'agency',
      title: 'Agenzie',
      description: 'Gestisci le operazioni review per piu clienti con report chiari e processi ben organizzati.',
    },
    {
      id: 'coaches',
      title: 'Coach',
      description: 'Raccogli segnali di fiducia, mostra risultati reali e trasforma il social proof in lead qualificati.',
    },
    {
      id: 'services',
      title: 'Aziende di servizi',
      description: 'Monitora la soddisfazione cliente in ogni touchpoint e traduci il feedback in miglioramenti continui.',
    },
    {
      id: 'saas-startups',
      title: 'SaaS e startup',
      description: 'Collega feedback e priorita prodotto, misura l impatto delle release e reagisci piu velocemente.',
    },
  ],
};

const useCasePagesEn: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Use case',
    title: 'Proofio for agencies',
    subtitle: 'Run review intelligence as a scalable client service.',
    intro: 'Agencies use Proofio to centralize review data across clients, create repeatable reporting, and turn customer feedback into clear strategic recommendations.',
    challengeTitle: 'What agencies need to solve',
    challengePoints: [
      'Client review data is spread across platforms and accounts.',
      'Manual weekly reporting burns account management capacity.',
      'Escalations and response workflows are hard to standardize.',
    ],
    playbookTitle: 'Agency playbook with Proofio',
    playbookSteps: [
      'Connect each client workspace and source stack in one dashboard.',
      'Use shared report templates with client-specific benchmarks.',
      'Automate issue detection for negative trend changes and low-rating clusters.',
    ],
    outcomesTitle: 'Typical outcomes',
    outcomes: [
      'Faster reporting cycles with higher consistency.',
      'More strategic conversations based on objective feedback data.',
      'Higher client retention through measurable trust improvements.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Use case',
    title: 'Proofio for coaches',
    subtitle: 'Turn customer outcomes into structured trust assets.',
    intro: 'Coaches use Proofio to capture feedback moments, verify testimonials, and build a trustworthy proof stream for offers, funnels, and sales conversations.',
    challengeTitle: 'What coaches need to solve',
    challengePoints: [
      'Success stories are spread across chats, DMs, and emails.',
      'Prospects ask for stronger social proof before buying.',
      'Manual testimonial collection is inconsistent and slow.',
    ],
    playbookTitle: 'Coach playbook with Proofio',
    playbookSteps: [
      'Capture feedback in one place and tag by program, outcome, and audience segment.',
      'Highlight verified results and build reusable story snippets for landing pages.',
      'Track sentiment trends to improve onboarding and coaching delivery.',
    ],
    outcomesTitle: 'Typical outcomes',
    outcomes: [
      'Higher conversion from trust-focused proof blocks.',
      'Stronger brand positioning with consistent customer outcomes.',
      'Less time spent manually collecting testimonial material.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Use case',
    title: 'Proofio for service businesses',
    subtitle: 'Operationalize customer feedback across your service pipeline.',
    intro: 'Service businesses use Proofio to monitor quality signals across locations, teams, and channels while keeping response quality consistent.',
    challengeTitle: 'What service teams need to solve',
    challengePoints: [
      'Service quality varies by location, team, or shift.',
      'Negative reviews are discovered too late.',
      'There is no shared system for prioritizing improvements.',
    ],
    playbookTitle: 'Service playbook with Proofio',
    playbookSteps: [
      'Monitor review and sentiment trends by location and category.',
      'Route critical tickets to owners with priority and SLA context.',
      'Feed recurring complaint patterns into team training and SOP updates.',
    ],
    outcomesTitle: 'Typical outcomes',
    outcomes: [
      'Faster incident response and clearer accountability.',
      'Better review quality through continuous process improvements.',
      'More repeat bookings driven by higher trust.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Use case',
    title: 'Proofio for SaaS and startups',
    subtitle: 'Connect product decisions to real customer voice.',
    intro: 'SaaS and startup teams use Proofio to detect feature friction early, evaluate release impact, and align product, support, and growth on one feedback signal.',
    challengeTitle: 'What product-led teams need to solve',
    challengePoints: [
      'Feedback is fragmented across app stores, support, and communities.',
      'Release impact is hard to measure quickly and objectively.',
      'Product prioritization often lacks customer evidence.',
    ],
    playbookTitle: 'SaaS playbook with Proofio',
    playbookSteps: [
      'Aggregate all feedback channels and normalize rating signals.',
      'Track sentiment deltas after releases and map issues to product areas.',
      'Use shared review intelligence in roadmap and GTM planning.',
    ],
    outcomesTitle: 'Typical outcomes',
    outcomes: [
      'Earlier detection of feature regressions and onboarding friction.',
      'Faster roadmap alignment with measurable customer impact.',
      'Improved retention through tighter feedback loops.',
    ],
  },
};

const useCasePagesDe: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Anwendungsfall',
    title: 'Proofio für Agenturen',
    subtitle: 'Review-Intelligence als skalierbarer Service für eure Kunden.',
    intro: 'Agenturen nutzen Proofio, um Bewertungsdaten zentral zu steuern, Reports zu standardisieren und aus Feedback konkrete Empfehlungen abzuleiten.',
    challengeTitle: 'Typische Herausforderungen',
    challengePoints: [
      'Bewertungsdaten liegen verteilt über viele Plattformen und Konten.',
      'Manuelle Reports kosten viel Account-Management-Zeit.',
      'Eskalationen und Antworten sind schwer zu standardisieren.',
    ],
    playbookTitle: 'So arbeiten Agenturen mit Proofio',
    playbookSteps: [
      'Jeden Kunden-Workspace mit allen relevanten Quellen verbinden.',
      'Einheitliche Report-Templates mit kundenspezifischen Benchmarks nutzen.',
      'Negative Trendveränderungen und Problemcluster automatisch erkennen.',
    ],
    outcomesTitle: 'Typische Ergebnisse',
    outcomes: [
      'Schnellere Reportzyklen bei höherer Qualität.',
      'Strategischere Kundengespräche auf Basis echter Daten.',
      'Bessere Kundenbindung durch messbare Vertrauenssteigerung.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Anwendungsfall',
    title: 'Proofio für Coaches',
    subtitle: 'Kundenergebnisse als strukturierte Vertrauensbeweise nutzen.',
    intro: 'Coaches nutzen Proofio, um Feedback zentral zu sammeln, Testimonials zu verifizieren und daraus belastbaren Social Proof für Angebote aufzubauen.',
    challengeTitle: 'Typische Herausforderungen',
    challengePoints: [
      'Erfolgsstories liegen verteilt in Chats, DMs und E-Mails.',
      'Interessenten brauchen klare Vertrauenssignale vor dem Kauf.',
      'Manuelle Testimonial-Sammlung ist langsam und unzuverlässig.',
    ],
    playbookTitle: 'So arbeiten Coaches mit Proofio',
    playbookSteps: [
      'Feedback nach Programm, Ergebnis und Zielgruppe taggen.',
      'Verifizierte Ergebnisse für Landingpages und Sales-Sequenzen aufbereiten.',
      'Sentiment-Trends nutzen, um Onboarding und Delivery zu verbessern.',
    ],
    outcomesTitle: 'Typische Ergebnisse',
    outcomes: [
      'Höhere Conversion durch starke Proof-Elemente.',
      'Klarere Positionierung über reale Kundenergebnisse.',
      'Weniger manueller Aufwand für Testimonial-Management.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Anwendungsfall',
    title: 'Proofio für Dienstleister',
    subtitle: 'Kundenfeedback entlang eurer Service-Qualität operationalisieren.',
    intro: 'Dienstleister nutzen Proofio, um Qualitätssignale über Teams, Standorte und Kanäle zu verfolgen und schneller auf kritisches Feedback zu reagieren.',
    challengeTitle: 'Typische Herausforderungen',
    challengePoints: [
      'Servicequalität schwankt je Team, Standort oder Prozess.',
      'Negative Bewertungen werden oft zu spät erkannt.',
      'Verbesserungen werden nicht systematisch priorisiert.',
    ],
    playbookTitle: 'So arbeiten Service-Teams mit Proofio',
    playbookSteps: [
      'Bewertungen und Sentiment nach Standort und Kategorie analysieren.',
      'Kritische Tickets mit Priorität und SLA an Verantwortliche routen.',
      'Wiederkehrende Kritik in Team-Trainings und SOPs überführen.',
    ],
    outcomesTitle: 'Typische Ergebnisse',
    outcomes: [
      'Schnellere Reaktionszeiten mit klarer Verantwortung.',
      'Kontinuierliche Qualitätsverbesserung statt Ad-hoc-Fixes.',
      'Mehr Wiederkaufrate durch höheres Vertrauen.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Anwendungsfall',
    title: 'Proofio für SaaS und Startups',
    subtitle: 'Produktentscheidungen mit echter Kundenstimme absichern.',
    intro: 'SaaS- und Startup-Teams nutzen Proofio, um Feature-Probleme früh zu erkennen, Release-Effekte messbar zu machen und Product, Support und Growth zu synchronisieren.',
    challengeTitle: 'Typische Herausforderungen',
    challengePoints: [
      'Feedback ist auf App Stores, Support und Communities verteilt.',
      'Release-Impact ist schwer schnell und objektiv zu bewerten.',
      'Roadmap-Priorisierung basiert zu oft auf Annahmen.',
    ],
    playbookTitle: 'So arbeiten Produktteams mit Proofio',
    playbookSteps: [
      'Alle Feedback-Kanäle aggregieren und Bewertungssignale normalisieren.',
      'Sentiment-Änderungen nach Releases tracken und Problemen zuordnen.',
      'Review-Insights in Roadmap- und GTM-Planung integrieren.',
    ],
    outcomesTitle: 'Typische Ergebnisse',
    outcomes: [
      'Frühere Erkennung von Regressionen und Onboarding-Reibung.',
      'Schnellere Roadmap-Entscheidungen mit messbarem Kundeneffekt.',
      'Bessere Retention durch kürzere Feedback-Loops.',
    ],
  },
};

const useCasePagesFr: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Cas d usage',
    title: 'Proofio pour les agences',
    subtitle: 'Gerez l intelligence des avis comme un service client evolutif.',
    intro: 'Les agences utilisent Proofio pour centraliser les avis de plusieurs clients, standardiser les rapports et transformer les retours en recommandations strategiques.',
    challengeTitle: 'Defis frequents',
    challengePoints: [
      'Les donnees d avis sont dispersees sur plusieurs plateformes et comptes.',
      'Les rapports manuels consomment beaucoup de temps cote account management.',
      'Les escalades et les workflows de reponse sont difficiles a normaliser.',
    ],
    playbookTitle: 'Playbook agence avec Proofio',
    playbookSteps: [
      'Connecter chaque espace client et ses sources dans un seul dashboard.',
      'Utiliser des modeles de rapport partages avec des benchmarks par client.',
      'Detecter automatiquement les baisses de tendance et les clusters de notes faibles.',
    ],
    outcomesTitle: 'Resultats typiques',
    outcomes: [
      'Cycles de reporting plus rapides et plus fiables.',
      'Conversations plus strategiques basees sur des donnees clients concretes.',
      'Meilleure retention client grace a des gains de confiance mesurables.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Cas d usage',
    title: 'Proofio pour les coachs',
    subtitle: 'Transformez les resultats clients en actifs de confiance reutilisables.',
    intro: 'Les coachs utilisent Proofio pour structurer les retours, verifier les temoignages et construire un flux de preuve solide pour les offres et les pages de vente.',
    challengeTitle: 'Defis frequents',
    challengePoints: [
      'Les success stories sont eparpillees entre chats, DM et emails.',
      'Les prospects demandent des preuves de confiance plus solides avant achat.',
      'La collecte manuelle de temoignages est lente et irreguliere.',
    ],
    playbookTitle: 'Playbook coach avec Proofio',
    playbookSteps: [
      'Centraliser les retours et taguer par programme, resultat et audience.',
      'Mettre en avant les preuves verifiees pour les pages et sequences commerciales.',
      'Suivre les tendances de sentiment pour ameliorer onboarding et delivery.',
    ],
    outcomesTitle: 'Resultats typiques',
    outcomes: [
      'Meilleure conversion grace a des blocs de preuve plus credibles.',
      'Positionnement de marque plus fort base sur des resultats reels.',
      'Moins de temps passe a collecter les temoignages manuellement.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Cas d usage',
    title: 'Proofio pour les entreprises de services',
    subtitle: 'Rendez le feedback client operationnel a chaque etape du service.',
    intro: 'Les entreprises de services utilisent Proofio pour suivre la qualite sur plusieurs equipes et canaux et repondre plus vite aux signaux critiques.',
    challengeTitle: 'Defis frequents',
    challengePoints: [
      'La qualite de service varie selon les equipes ou les sites.',
      'Les avis negatifs sont detectes trop tard.',
      'Les actions d amelioration manquent de priorisation commune.',
    ],
    playbookTitle: 'Playbook service avec Proofio',
    playbookSteps: [
      'Suivre avis et sentiment par site, categorie et periode.',
      'Router les tickets critiques vers les responsables avec priorite claire.',
      'Transformer les plaintes recurrentes en plans de formation et SOP.',
    ],
    outcomesTitle: 'Resultats typiques',
    outcomes: [
      'Temps de reponse reduit et responsabilites mieux definies.',
      'Qualite de service amelioree de facon continue.',
      'Plus de clients recurrents grace a une meilleure confiance.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Cas d usage',
    title: 'Proofio pour le SaaS et les startups',
    subtitle: 'Reliez vos decisions produit a la voix client reelle.',
    intro: 'Les equipes SaaS et startup utilisent Proofio pour detecter les frictions produit plus tot, mesurer l impact des releases et aligner produit, support et growth.',
    challengeTitle: 'Defis frequents',
    challengePoints: [
      'Le feedback est fragmente entre app stores, support et communaute.',
      'L impact des releases est difficile a evaluer rapidement.',
      'La priorisation produit manque souvent de preuves clients.',
    ],
    playbookTitle: 'Playbook SaaS avec Proofio',
    playbookSteps: [
      'Agreger tous les canaux de feedback et normaliser les signaux de note.',
      'Suivre les deltas de sentiment apres chaque release.',
      'Utiliser les insights avis dans la roadmap et le go to market.',
    ],
    outcomesTitle: 'Resultats typiques',
    outcomes: [
      'Detection plus rapide des regressions et frictions onboarding.',
      'Roadmap plus alignee avec des signaux client mesurables.',
      'Retention amelioree grace a des boucles de feedback plus courtes.',
    ],
  },
};

const useCasePagesEs: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Caso de uso',
    title: 'Proofio para agencias',
    subtitle: 'Gestiona inteligencia de resenas como un servicio escalable para clientes.',
    intro: 'Las agencias usan Proofio para centralizar resenas de varios clientes, estandarizar reportes y convertir feedback en recomendaciones estrategicas claras.',
    challengeTitle: 'Retos comunes',
    challengePoints: [
      'Los datos de resenas estan repartidos en muchas plataformas y cuentas.',
      'Los reportes manuales consumen demasiado tiempo del equipo.',
      'Las escalaciones y respuestas son dificiles de estandarizar.',
    ],
    playbookTitle: 'Playbook de agencia con Proofio',
    playbookSteps: [
      'Conecta cada workspace de cliente y todas sus fuentes en un dashboard.',
      'Usa plantillas de reporte con benchmarks por cliente.',
      'Detecta automaticamente caidas de tendencia y clusters de baja calificacion.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Ciclos de reporte mas rapidos y consistentes.',
      'Conversaciones mas estrategicas basadas en datos reales de clientes.',
      'Mayor retencion de clientes con mejoras de confianza medibles.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Caso de uso',
    title: 'Proofio para coaches',
    subtitle: 'Convierte resultados de clientes en activos de confianza reutilizables.',
    intro: 'Los coaches usan Proofio para centralizar feedback, verificar testimonios y construir social proof mas solido para sus ofertas.',
    challengeTitle: 'Retos comunes',
    challengePoints: [
      'Las historias de exito estan dispersas entre chats, DM y correo.',
      'Los prospectos piden pruebas mas solidas antes de comprar.',
      'La recopilacion manual de testimonios es lenta e inconsistente.',
    ],
    playbookTitle: 'Playbook de coach con Proofio',
    playbookSteps: [
      'Captura feedback en un solo lugar y etiqueta por programa y resultado.',
      'Destaca pruebas verificadas para landing pages y secuencias de venta.',
      'Sigue tendencias de sentimiento para mejorar onboarding y entrega.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Mayor conversion gracias a bloques de prueba mas confiables.',
      'Posicionamiento mas fuerte basado en resultados reales.',
      'Menos tiempo invertido en gestionar testimonios manualmente.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Caso de uso',
    title: 'Proofio para empresas de servicios',
    subtitle: 'Haz operativo el feedback del cliente en todo tu proceso de servicio.',
    intro: 'Las empresas de servicios usan Proofio para monitorear senales de calidad entre equipos y canales y responder mas rapido a incidencias.',
    challengeTitle: 'Retos comunes',
    challengePoints: [
      'La calidad del servicio varia por equipo, zona o turno.',
      'Las resenas negativas se detectan demasiado tarde.',
      'No existe un sistema compartido para priorizar mejoras.',
    ],
    playbookTitle: 'Playbook de servicios con Proofio',
    playbookSteps: [
      'Monitorea tendencias de resenas y sentimiento por ubicacion y categoria.',
      'Asigna tickets criticos a responsables con prioridad clara.',
      'Convierte quejas recurrentes en acciones de formacion y SOP.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Respuesta mas rapida con mejor claridad de responsabilidades.',
      'Mejora continua de calidad en lugar de parches puntuales.',
      'Mas clientes recurrentes gracias a mayor confianza.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Caso de uso',
    title: 'Proofio para SaaS y startups',
    subtitle: 'Conecta decisiones de producto con la voz real del cliente.',
    intro: 'Los equipos SaaS y startup usan Proofio para detectar friccion antes, medir impacto de releases y alinear producto, soporte y growth.',
    challengeTitle: 'Retos comunes',
    challengePoints: [
      'El feedback esta fragmentado entre app stores, soporte y comunidad.',
      'El impacto de releases es dificil de medir con rapidez.',
      'La priorizacion de producto muchas veces carece de evidencia de cliente.',
    ],
    playbookTitle: 'Playbook SaaS con Proofio',
    playbookSteps: [
      'Agrupa todos los canales de feedback y normaliza senales de rating.',
      'Mide deltas de sentimiento despues de cada release.',
      'Usa inteligencia de resenas en roadmap y go to market.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Deteccion temprana de regresiones y friccion de onboarding.',
      'Roadmap mas alineado con impacto real en clientes.',
      'Mejor retencion gracias a loops de feedback mas cortos.',
    ],
  },
};

const useCasePagesPt: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Caso de uso',
    title: 'Proofio para agencias',
    subtitle: 'Gerencie inteligencia de reviews como um servico escalavel para clientes.',
    intro: 'Agencias usam Proofio para centralizar reviews de varios clientes, padronizar relatorios e transformar feedback em recomendacoes estrategicas claras.',
    challengeTitle: 'Desafios comuns',
    challengePoints: [
      'Dados de reviews ficam espalhados em varias plataformas e contas.',
      'Relatorios manuais consomem muito tempo da equipe.',
      'Escalacoes e respostas sao dificeis de padronizar.',
    ],
    playbookTitle: 'Playbook de agencia com Proofio',
    playbookSteps: [
      'Conecte cada workspace de cliente e suas fontes em um dashboard.',
      'Use templates de relatorio compartilhados com benchmarks por cliente.',
      'Detecte automaticamente quedas de tendencia e clusters de notas baixas.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Ciclos de relatorio mais rapidos e consistentes.',
      'Conversas mais estrategicas com base em dados reais de clientes.',
      'Maior retencao de clientes com ganhos de confianca mensuraveis.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Caso de uso',
    title: 'Proofio para coaches',
    subtitle: 'Transforme resultados de clientes em ativos de confianca reutilizaveis.',
    intro: 'Coaches usam Proofio para organizar feedback, verificar depoimentos e construir social proof mais forte para ofertas e funis.',
    challengeTitle: 'Desafios comuns',
    challengePoints: [
      'Historias de sucesso ficam espalhadas entre chats, DM e email.',
      'Prospects pedem provas mais fortes antes de comprar.',
      'Coleta manual de depoimentos e lenta e inconsistente.',
    ],
    playbookTitle: 'Playbook de coach com Proofio',
    playbookSteps: [
      'Centralize feedback e use tags por programa, resultado e publico.',
      'Destaque provas verificadas em landing pages e sequencias comerciais.',
      'Acompanhe tendencia de sentimento para melhorar onboarding e entrega.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Maior conversao com blocos de prova mais confiaveis.',
      'Posicionamento mais forte com base em resultados reais.',
      'Menos tempo gasto com coleta manual de depoimentos.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Caso de uso',
    title: 'Proofio para empresas de servicos',
    subtitle: 'Torne o feedback do cliente operacional em todo o fluxo de servico.',
    intro: 'Empresas de servicos usam Proofio para monitorar sinais de qualidade entre equipes e canais e responder mais rapido aos problemas criticos.',
    challengeTitle: 'Desafios comuns',
    challengePoints: [
      'A qualidade do servico varia por equipe, local ou turno.',
      'Reviews negativas sao detectadas tarde demais.',
      'Falta um sistema compartilhado para priorizar melhorias.',
    ],
    playbookTitle: 'Playbook de servicos com Proofio',
    playbookSteps: [
      'Monitore tendencias de reviews e sentimento por local e categoria.',
      'Encaminhe tickets criticos para responsaveis com prioridade clara.',
      'Converta reclamacoes recorrentes em treinamento e SOP.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Resposta mais rapida com responsabilidade mais clara.',
      'Melhoria continua de qualidade em vez de correcoes pontuais.',
      'Mais recorrencia de clientes por maior confianca.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Caso de uso',
    title: 'Proofio para SaaS e startups',
    subtitle: 'Conecte decisoes de produto com a voz real do cliente.',
    intro: 'Times de SaaS e startup usam Proofio para detectar friccao cedo, medir impacto de releases e alinhar produto, suporte e growth.',
    challengeTitle: 'Desafios comuns',
    challengePoints: [
      'Feedback fragmentado entre app stores, suporte e comunidade.',
      'Impacto de release dificil de medir com rapidez e objetividade.',
      'Priorizacao de produto muitas vezes sem evidencia de cliente.',
    ],
    playbookTitle: 'Playbook SaaS com Proofio',
    playbookSteps: [
      'Agrupe canais de feedback e normalize sinais de nota.',
      'Monitore variacao de sentimento apos cada release.',
      'Leve inteligencia de reviews para roadmap e go to market.',
    ],
    outcomesTitle: 'Resultados tipicos',
    outcomes: [
      'Deteccao antecipada de regressao e friccao no onboarding.',
      'Roadmap mais alinhado com impacto real no cliente.',
      'Retencao melhor com loops de feedback mais curtos.',
    ],
  },
};

const useCasePagesIt: Record<UseCaseSlug, UseCasePageContent> = {
  agency: {
    id: 'agency',
    badge: 'Caso d uso',
    title: 'Proofio per agenzie',
    subtitle: 'Gestisci la review intelligence come servizio cliente scalabile.',
    intro: 'Le agenzie usano Proofio per centralizzare le recensioni di piu clienti, standardizzare i report e trasformare il feedback in raccomandazioni strategiche.',
    challengeTitle: 'Sfide comuni',
    challengePoints: [
      'I dati recensioni sono distribuiti su molte piattaforme e account.',
      'I report manuali consumano troppo tempo al team.',
      'Escalation e workflow di risposta sono difficili da standardizzare.',
    ],
    playbookTitle: 'Playbook agenzia con Proofio',
    playbookSteps: [
      'Connetti ogni workspace cliente e tutte le fonti in una dashboard.',
      'Usa template di report condivisi con benchmark per cliente.',
      'Rileva automaticamente cali di trend e cluster di rating bassi.',
    ],
    outcomesTitle: 'Risultati tipici',
    outcomes: [
      'Cicli di reporting piu veloci e consistenti.',
      'Conversazioni piu strategiche basate su dati reali dei clienti.',
      'Maggiore retention clienti grazie a miglioramenti misurabili della fiducia.',
    ],
  },
  coaches: {
    id: 'coaches',
    badge: 'Caso d uso',
    title: 'Proofio per coach',
    subtitle: 'Trasforma i risultati dei clienti in asset di fiducia riutilizzabili.',
    intro: 'I coach usano Proofio per organizzare feedback, verificare testimonianze e costruire social proof piu solido per offerte e funnel.',
    challengeTitle: 'Sfide comuni',
    challengePoints: [
      'Le storie di successo sono sparse tra chat, DM ed email.',
      'I prospect chiedono prove di fiducia piu forti prima di acquistare.',
      'La raccolta manuale delle testimonianze e lenta e incoerente.',
    ],
    playbookTitle: 'Playbook coach con Proofio',
    playbookSteps: [
      'Centralizza il feedback con tag per programma, risultato e segmento.',
      'Evidenzia prove verificate su landing page e sequenze di vendita.',
      'Monitora i trend di sentiment per migliorare onboarding e delivery.',
    ],
    outcomesTitle: 'Risultati tipici',
    outcomes: [
      'Conversione piu alta grazie a blocchi di prova piu credibili.',
      'Posizionamento piu forte basato su risultati reali.',
      'Meno tempo speso nella raccolta manuale delle testimonianze.',
    ],
  },
  services: {
    id: 'services',
    badge: 'Caso d uso',
    title: 'Proofio per aziende di servizi',
    subtitle: 'Rendi operativo il feedback cliente lungo tutto il servizio.',
    intro: 'Le aziende di servizi usano Proofio per monitorare la qualita tra team e canali e rispondere piu velocemente ai segnali critici.',
    challengeTitle: 'Sfide comuni',
    challengePoints: [
      'La qualita del servizio varia per team, sede o turno.',
      'Le recensioni negative vengono individuate troppo tardi.',
      'Manca un sistema condiviso per prioritizzare i miglioramenti.',
    ],
    playbookTitle: 'Playbook servizi con Proofio',
    playbookSteps: [
      'Monitora trend di recensioni e sentiment per sede e categoria.',
      'Instrada i ticket critici ai responsabili con priorita chiara.',
      'Trasforma i reclami ricorrenti in training e SOP.',
    ],
    outcomesTitle: 'Risultati tipici',
    outcomes: [
      'Tempi di risposta ridotti con responsabilita piu chiare.',
      'Miglioramento continuo della qualita del servizio.',
      'Piu clienti ricorrenti grazie a maggiore fiducia.',
    ],
  },
  'saas-startups': {
    id: 'saas-startups',
    badge: 'Caso d uso',
    title: 'Proofio per SaaS e startup',
    subtitle: 'Collega le decisioni di prodotto alla voce reale dei clienti.',
    intro: 'I team SaaS e startup usano Proofio per rilevare attriti prima, misurare impatto delle release e allineare prodotto, supporto e growth.',
    challengeTitle: 'Sfide comuni',
    challengePoints: [
      'Feedback frammentato tra app store, supporto e comunita.',
      'Impatto delle release difficile da misurare rapidamente.',
      'Prioritizzazione prodotto spesso senza evidenza cliente.',
    ],
    playbookTitle: 'Playbook SaaS con Proofio',
    playbookSteps: [
      'Aggrega tutti i canali di feedback e normalizza i segnali rating.',
      'Monitora variazioni di sentiment dopo ogni release.',
      'Usa review intelligence in roadmap e go to market.',
    ],
    outcomesTitle: 'Risultati tipici',
    outcomes: [
      'Rilevazione anticipata di regressioni e attrito onboarding.',
      'Roadmap piu allineata con impatto cliente misurabile.',
      'Retention migliore grazie a feedback loop piu rapidi.',
    ],
  },
};

const useCasePagesByLocale: Partial<Record<Locale, Record<UseCaseSlug, UseCasePageContent>>> = {
  en: useCasePagesEn,
  de: useCasePagesDe,
  fr: useCasePagesFr,
  es: useCasePagesEs,
  pt: useCasePagesPt,
  it: useCasePagesIt,
};

export const useCaseSlugs: UseCaseSlug[] = ['agency', 'coaches', 'services', 'saas-startups'];

export function getUseCaseCards(locale: Locale): UseCaseCard[] {
  return useCaseCardsByLocale[locale] || useCaseCardsByLocale[FALLBACK_LOCALE];
}

export function getUseCasePage(locale: Locale, slug: string): UseCasePageContent | null {
  if (!slug || !useCaseSlugs.includes(slug as UseCaseSlug)) {
    return null;
  }

  const normalizedSlug = slug as UseCaseSlug;
  const localePages = useCasePagesByLocale[locale] || useCasePagesByLocale[FALLBACK_LOCALE];
  return localePages ? localePages[normalizedSlug] : null;
}
