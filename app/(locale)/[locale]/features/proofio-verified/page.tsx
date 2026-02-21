'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Globe,
  Moon,
  MessageSquare,
  CheckCircle2,
  Brain,
  BarChart3,
  Bell,
  Target,
  Layers3,
  Users,
} from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import CTA from '@/app/components/CTA';
import { useLocaleContext } from '@/app/components/LocaleProvider';

// ─── Locale helpers ───────────────────────────────────────────────────────────

type SupportedLocale = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'it';

function normalizeLocale(l?: string): SupportedLocale {
  if (l === 'de' || l === 'fr' || l === 'es' || l === 'pt' || l === 'it') return l;
  return 'en';
}

// ─── Page copy (all 6 locales) ────────────────────────────────────────────────

function getPageText(locale: SupportedLocale) {
  const copy = {
    en: {
      featureBadge: 'Feature',
      heroDescription:
        'A lightweight embed widget that displays your verified review score, platform count, and real customer testimonials - in your language, your theme, your style.',
      sections: [
        {
          label: 'Light Mode',
          title: 'Clean and minimal by default',
          description:
            'The default widget fits any light-themed website out of the box. No configuration needed - just drop in the snippet and it works.',
          bullets: [
            'White background with subtle border and shadow',
            'Shows platform count, average rating, and review total',
            'Optional AI-checked badge in green',
          ],
        },
        {
          label: 'Dark Mode',
          title: 'Dark mode, zero extra work',
          description:
            'Set data-theme to "dark" and the widget automatically switches to a dark color scheme - perfect for dark-themed landing pages or dashboards.',
          bullets: [
            'Dark background matching modern design systems',
            'All text and badge colors adjusted for contrast',
            'Looks great on dark hero sections or footers',
          ],
        },
        {
          label: 'Multilingual',
          title: '18 languages, one attribute',
          description:
            'Change data-language to any supported locale and the widget renders in the correct language - labels, number formats, and all.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH and more',
            'Numbers formatted per locale (1.247 vs 1,247)',
            'Verified badge and AI label also translated',
          ],
        },
        {
          label: 'Testimonial',
          title: 'Show a real customer quote',
          description:
            'Enable data-show-testimonials and the widget pulls a verified review from your Proofio project and displays it as a testimonial card.',
          bullets: [
            'Quote, star rating, and author name from real reviews',
            '"Verified Review" badge shown on the card',
            'Works in both light and dark mode',
          ],
        },
      ],
      benefitsTitle: 'Key Benefits',
      benefits: [
        { title: 'One-line embed', description: 'Drop in a single HTML snippet - no build step, no framework required.' },
        { title: 'Live data', description: 'Review stats are fetched live from your Proofio project via API key.' },
        { title: '18 languages', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH and more - all built-in.' },
        { title: 'AI verified badge', description: 'Signal that your reviews are AI-analyzed and quality-checked by Proofio.' },
        { title: 'Testimonial card', description: 'Show a real verified customer quote directly inside the widget.' },
        { title: 'Mobile responsive', description: 'Font sizes and spacing adapt automatically for small screens.' },
      ],
      embedTitle: 'Embed in seconds',
      embedDescription:
        'Works on plain HTML, React, Next.js, WordPress, Shopify - anywhere you can add a script tag.',
      embedPoints: [
        'Fetches your live review stats via API key',
        'Settings managed in your Proofio dashboard',
        'Re-renders on resize for perfect mobile display',
      ],
      useCasesTitle: 'Applicable scenarios',
      useCases: [
        'SaaS landing pages showing aggregated App Store + Trustpilot ratings.',
        'E-commerce product pages with verified review counts and testimonials.',
        'iOS app download pages with a multilingual badge for global audiences.',
        'Agency websites displaying client trust signals without custom dev work.',
        'Product Hunt launches with a live review widget that updates automatically.',
        'B2B sales decks linking to a verified widget as social proof.',
      ],
    },
    de: {
      featureBadge: 'Funktion',
      heroDescription:
        'Ein leichtes Embed-Widget, das deinen verifizierten Review-Score, die Plattformanzahl und echte Kundenbewertungen zeigt – in deiner Sprache, deinem Theme, deinem Stil.',
      sections: [
        {
          label: 'Light Mode',
          title: 'Sauber und minimal als Standard',
          description:
            'Das Widget passt ohne Konfiguration zu jeder hellen Website. Snippet einbinden – fertig.',
          bullets: [
            'Weißer Hintergrund mit feiner Border und Shadow',
            'Zeigt Plattformanzahl, Durchschnittsbewertung und Review-Anzahl',
            'Optionales KI-geprüft-Badge in Grün',
          ],
        },
        {
          label: 'Dark Mode',
          title: 'Dark Mode, ohne Extra-Aufwand',
          description:
            'Einfach data-theme auf "dark" setzen – das Widget wechselt automatisch in ein dunkles Farbschema, ideal für Dark-Mode-Landingpages oder Dashboards.',
          bullets: [
            'Dunkler Hintergrund passend zu modernen Design-Systemen',
            'Alle Text- und Badge-Farben für Kontrast angepasst',
            'Passt perfekt zu dunklen Hero-Sections oder Footern',
          ],
        },
        {
          label: 'Mehrsprachig',
          title: '18 Sprachen, ein Attribut',
          description:
            'Ändere data-language auf ein beliebiges unterstütztes Locale und das Widget rendert in der richtigen Sprache – Labels, Zahlenformate und alles.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH und mehr',
            'Zahlen im jeweiligen lokalen Format (1.247 vs 1,247)',
            'Verified-Badge und KI-Label werden ebenfalls übersetzt',
          ],
        },
        {
          label: 'Testimonial',
          title: 'Echtes Kundenzitat anzeigen',
          description:
            'Aktiviere data-show-testimonials und das Widget lädt eine verifizierte Bewertung aus deinem Proofio-Projekt und zeigt sie als Testimonial-Karte an.',
          bullets: [
            'Zitat, Sternebewertung und Autorenname aus echten Reviews',
            '„Verifizierte Bewertung"-Badge auf der Karte',
            'Funktioniert in Light und Dark Mode',
          ],
        },
      ],
      benefitsTitle: 'Vorteile',
      benefits: [
        { title: 'Eine Zeile zum Einbinden', description: 'Einfach ein HTML-Snippet einfügen – kein Build-Schritt, kein Framework erforderlich.' },
        { title: 'Live-Daten', description: 'Review-Statistiken werden live aus deinem Proofio-Projekt per API-Key abgerufen.' },
        { title: '18 Sprachen', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH und mehr – alles eingebaut.' },
        { title: 'KI-verifiziertes Badge', description: 'Zeige, dass deine Reviews von der Proofio-KI analysiert und geprüft wurden.' },
        { title: 'Testimonial-Karte', description: 'Zeige ein echtes verifiziertes Kundenzitat direkt im Widget an.' },
        { title: 'Mobile-optimiert', description: 'Schriftgrößen und Abstände passen sich automatisch an kleine Bildschirme an.' },
      ],
      embedTitle: 'In Sekunden einbinden',
      embedDescription:
        'Funktioniert mit plain HTML, React, Next.js, WordPress, Shopify – überall, wo ein Script-Tag möglich ist.',
      embedPoints: [
        'Ruft deine Live-Review-Statistiken per API-Key ab',
        'Einstellungen werden im Proofio-Dashboard verwaltet',
        'Passt sich bei Resize automatisch für Mobile an',
      ],
      useCasesTitle: 'Anwendungsfälle',
      useCases: [
        'SaaS-Landingpages mit aggregierten App Store- und Trustpilot-Bewertungen.',
        'E-Commerce-Produktseiten mit verifizierten Review-Zahlen und Testimonials.',
        'iOS-App-Downloadseiten mit mehrsprachigem Badge für internationale Nutzer.',
        'Agentur-Websites, die Kunden-Trust-Signale ohne individuelle Entwicklung zeigen.',
        'Product-Hunt-Launches mit einem Live-Widget, das sich automatisch aktualisiert.',
        'B2B-Sales-Decks mit einem Link auf ein verifiziertes Widget als Social Proof.',
      ],
    },
    fr: {
      featureBadge: 'Fonctionnalité',
      heroDescription:
        'Un widget intégrable léger qui affiche votre score de reviews vérifié, le nombre de plateformes et de vrais témoignages clients - dans votre langue, votre thème, votre style.',
      sections: [
        {
          label: 'Mode Clair',
          title: 'Épuré et minimal par défaut',
          description:
            'Le widget par défaut s\'adapte à tout site à thème clair sans aucune configuration.',
          bullets: [
            'Fond blanc avec bordure et ombre subtiles',
            'Affiche le nombre de plateformes, la note moyenne et le total des avis',
            'Badge IA facultatif en vert',
          ],
        },
        {
          label: 'Mode Sombre',
          title: 'Mode sombre, sans effort',
          description:
            'Définissez data-theme sur "dark" et le widget passe automatiquement à un schéma sombre.',
          bullets: [
            'Fond sombre adapté aux systèmes de design modernes',
            'Couleurs de texte et badges ajustées pour le contraste',
            'Parfait pour les sections héros sombres ou les pieds de page',
          ],
        },
        {
          label: 'Multilingue',
          title: '18 langues, un attribut',
          description:
            'Changez data-language pour n\'importe quelle locale supportée et le widget s\'affiche dans la bonne langue.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH et plus',
            'Nombres formatés selon la locale',
            'Badge vérifié et libellé IA également traduits',
          ],
        },
        {
          label: 'Témoignage',
          title: 'Affichez une vraie citation client',
          description:
            'Activez data-show-testimonials et le widget récupère un avis vérifié de votre projet Proofio.',
          bullets: [
            'Citation, note en étoiles et nom de l\'auteur issus de vrais avis',
            'Badge "Avis Vérifié" affiché sur la carte',
            'Fonctionne en mode clair et sombre',
          ],
        },
      ],
      benefitsTitle: 'Avantages clés',
      benefits: [
        { title: 'Intégration en une ligne', description: 'Ajoutez un simple snippet HTML - aucune étape de build, aucun framework requis.' },
        { title: 'Données en direct', description: 'Les statistiques de reviews sont récupérées en direct depuis votre projet Proofio via clé API.' },
        { title: '18 langues', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH et plus - tout intégré.' },
        { title: 'Badge IA vérifié', description: 'Montrez que vos avis sont analysés et vérifiés par l\'IA Proofio.' },
        { title: 'Carte témoignage', description: 'Affichez une vraie citation client vérifiée directement dans le widget.' },
        { title: 'Responsive mobile', description: 'Les tailles de police et les espacements s\'adaptent automatiquement aux petits écrans.' },
      ],
      embedTitle: 'Intégrer en quelques secondes',
      embedDescription:
        'Fonctionne sur HTML brut, React, Next.js, WordPress, Shopify - partout où vous pouvez ajouter une balise script.',
      embedPoints: [
        'Récupère vos statistiques de reviews en direct via clé API',
        'Paramètres gérés dans votre tableau de bord Proofio',
        'Se re-rend au redimensionnement pour un affichage mobile parfait',
      ],
      useCasesTitle: 'Scénarios applicables',
      useCases: [
        'Pages d\'atterrissage SaaS affichant des notes App Store + Trustpilot agrégées.',
        'Pages produit e-commerce avec comptages d\'avis vérifiés et témoignages.',
        'Pages de téléchargement d\'app iOS avec un badge multilingue pour les audiences mondiales.',
        'Sites d\'agences affichant des signaux de confiance sans développement sur mesure.',
        'Lancements Product Hunt avec un widget d\'avis en direct qui se met à jour automatiquement.',
        'Decks de vente B2B avec un lien vers un widget vérifié comme preuve sociale.',
      ],
    },
    es: {
      featureBadge: 'Funcionalidad',
      heroDescription:
        'Un widget embebible ligero que muestra tu puntuación de reviews verificada, el recuento de plataformas y testimonios reales de clientes - en tu idioma, tu tema, tu estilo.',
      sections: [
        {
          label: 'Modo Claro',
          title: 'Limpio y minimalista por defecto',
          description:
            'El widget por defecto encaja en cualquier web de tema claro sin ninguna configuración.',
          bullets: [
            'Fondo blanco con borde y sombra sutiles',
            'Muestra el recuento de plataformas, la nota media y el total de reviews',
            'Badge de IA opcional en verde',
          ],
        },
        {
          label: 'Modo Oscuro',
          title: 'Modo oscuro, sin trabajo extra',
          description:
            'Establece data-theme en "dark" y el widget cambia automáticamente a un esquema de colores oscuro.',
          bullets: [
            'Fondo oscuro acorde a los sistemas de diseño modernos',
            'Colores de texto y badges ajustados para el contraste',
            'Perfecto para secciones hero oscuras o footers',
          ],
        },
        {
          label: 'Multilingüe',
          title: '18 idiomas, un atributo',
          description:
            'Cambia data-language a cualquier locale soportado y el widget se renderiza en el idioma correcto.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH y más',
            'Números formateados según la locale',
            'Badge de verificado y etiqueta de IA también traducidos',
          ],
        },
        {
          label: 'Testimonio',
          title: 'Muestra una cita real de cliente',
          description:
            'Activa data-show-testimonials y el widget obtiene una review verificada de tu proyecto Proofio.',
          bullets: [
            'Cita, valoración con estrellas y nombre del autor de reviews reales',
            'Badge "Reseña Verificada" en la tarjeta',
            'Funciona en modo claro y oscuro',
          ],
        },
      ],
      benefitsTitle: 'Ventajas clave',
      benefits: [
        { title: 'Integración en una línea', description: 'Añade un simple snippet HTML - sin paso de build, sin framework requerido.' },
        { title: 'Datos en directo', description: 'Las estadísticas de reviews se obtienen en vivo desde tu proyecto Proofio vía API key.' },
        { title: '18 idiomas', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH y más - todo integrado.' },
        { title: 'Badge de IA verificado', description: 'Muestra que tus reviews son analizadas y verificadas por la IA de Proofio.' },
        { title: 'Tarjeta de testimonio', description: 'Muestra una cita de cliente verificada real directamente en el widget.' },
        { title: 'Responsive mobile', description: 'Los tamaños de fuente y espaciados se adaptan automáticamente a pantallas pequeñas.' },
      ],
      embedTitle: 'Integrar en segundos',
      embedDescription:
        'Funciona con HTML plano, React, Next.js, WordPress, Shopify - en cualquier lugar donde puedas añadir una etiqueta script.',
      embedPoints: [
        'Obtiene tus estadísticas de reviews en vivo vía API key',
        'Ajustes gestionados en tu dashboard de Proofio',
        'Se re-renderiza al redimensionar para una visualización mobile perfecta',
      ],
      useCasesTitle: 'Escenarios aplicables',
      useCases: [
        'Landing pages de SaaS mostrando valoraciones agregadas de App Store + Trustpilot.',
        'Páginas de producto en e-commerce con recuentos de reviews verificados y testimonios.',
        'Páginas de descarga de app iOS con badge multilingüe para audiencias globales.',
        'Webs de agencias mostrando señales de confianza sin desarrollo a medida.',
        'Lanzamientos en Product Hunt con un widget de reviews en vivo que se actualiza automáticamente.',
        'Decks de ventas B2B con un enlace a un widget verificado como prueba social.',
      ],
    },
    pt: {
      featureBadge: 'Funcionalidade',
      heroDescription:
        'Um widget incorporável leve que exibe sua pontuação de reviews verificada, contagem de plataformas e depoimentos reais de clientes - no seu idioma, seu tema, seu estilo.',
      sections: [
        {
          label: 'Modo Claro',
          title: 'Limpo e minimalista por padrão',
          description:
            'O widget padrão se adapta a qualquer site com tema claro sem nenhuma configuração.',
          bullets: [
            'Fundo branco com borda e sombra sutis',
            'Mostra contagem de plataformas, avaliação média e total de reviews',
            'Badge de IA opcional em verde',
          ],
        },
        {
          label: 'Modo Escuro',
          title: 'Modo escuro, sem esforço extra',
          description:
            'Defina data-theme como "dark" e o widget muda automaticamente para um esquema de cores escuro.',
          bullets: [
            'Fundo escuro compatível com sistemas de design modernos',
            'Cores de texto e badges ajustadas para contraste',
            'Ótimo para seções hero escuras ou rodapés',
          ],
        },
        {
          label: 'Multilíngue',
          title: '18 idiomas, um atributo',
          description:
            'Mude data-language para qualquer locale suportado e o widget renderiza no idioma correto.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH e mais',
            'Números formatados por locale',
            'Badge verificado e rótulo de IA também traduzidos',
          ],
        },
        {
          label: 'Depoimento',
          title: 'Exiba uma citação real de cliente',
          description:
            'Ative data-show-testimonials e o widget busca uma review verificada do seu projeto Proofio.',
          bullets: [
            'Citação, avaliação em estrelas e nome do autor de reviews reais',
            'Badge "Review Verificada" exibido no card',
            'Funciona em modo claro e escuro',
          ],
        },
      ],
      benefitsTitle: 'Benefícios principais',
      benefits: [
        { title: 'Incorporação em uma linha', description: 'Adicione um único snippet HTML - sem etapa de build, sem framework necessário.' },
        { title: 'Dados ao vivo', description: 'Estatísticas de reviews são buscadas ao vivo do seu projeto Proofio via API key.' },
        { title: '18 idiomas', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH e mais - tudo integrado.' },
        { title: 'Badge de IA verificado', description: 'Sinalize que suas reviews são analisadas e verificadas pela IA da Proofio.' },
        { title: 'Card de depoimento', description: 'Exiba uma citação real de cliente verificada diretamente no widget.' },
        { title: 'Responsivo para mobile', description: 'Tamanhos de fonte e espaçamentos se adaptam automaticamente para telas pequenas.' },
      ],
      embedTitle: 'Incorporar em segundos',
      embedDescription:
        'Funciona com HTML puro, React, Next.js, WordPress, Shopify - em qualquer lugar onde você possa adicionar uma tag script.',
      embedPoints: [
        'Busca suas estatísticas de reviews ao vivo via API key',
        'Configurações gerenciadas no seu dashboard Proofio',
        'Re-renderiza ao redimensionar para exibição mobile perfeita',
      ],
      useCasesTitle: 'Cenários aplicáveis',
      useCases: [
        'Landing pages de SaaS mostrando avaliações agregadas do App Store + Trustpilot.',
        'Páginas de produto em e-commerce com contagens de reviews verificadas e depoimentos.',
        'Páginas de download de app iOS com badge multilíngue para audiências globais.',
        'Sites de agências exibindo sinais de confiança sem desenvolvimento personalizado.',
        'Lançamentos no Product Hunt com um widget de reviews ao vivo que atualiza automaticamente.',
        'Decks de vendas B2B com link para um widget verificado como prova social.',
      ],
    },
    it: {
      featureBadge: 'Funzionalità',
      heroDescription:
        'Un widget incorporabile leggero che mostra il tuo punteggio di recensioni verificato, il numero di piattaforme e vere testimonianze di clienti - nella tua lingua, il tuo tema, il tuo stile.',
      sections: [
        {
          label: 'Modalità Chiara',
          title: 'Pulito e minimale di default',
          description:
            'Il widget predefinito si adatta a qualsiasi sito con tema chiaro senza alcuna configurazione.',
          bullets: [
            'Sfondo bianco con bordo e ombra sottili',
            'Mostra il numero di piattaforme, la valutazione media e il totale delle recensioni',
            'Badge IA opzionale in verde',
          ],
        },
        {
          label: 'Modalità Scura',
          title: 'Modalità scura, senza sforzo',
          description:
            'Imposta data-theme su "dark" e il widget passa automaticamente a uno schema di colori scuro.',
          bullets: [
            'Sfondo scuro compatibile con i moderni sistemi di design',
            'Colori di testo e badge regolati per il contrasto',
            'Perfetto per sezioni hero scure o footer',
          ],
        },
        {
          label: 'Multilingue',
          title: '18 lingue, un attributo',
          description:
            'Cambia data-language con qualsiasi locale supportato e il widget si renderizza nella lingua corretta.',
          bullets: [
            'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH e altri',
            'Numeri formattati per locale',
            'Badge verificato e etichetta IA anche tradotti',
          ],
        },
        {
          label: 'Testimonianza',
          title: 'Mostra una vera citazione cliente',
          description:
            'Attiva data-show-testimonials e il widget recupera una recensione verificata dal tuo progetto Proofio.',
          bullets: [
            'Citazione, valutazione a stelle e nome dell\'autore da recensioni reali',
            'Badge "Recensione Verificata" mostrato sulla card',
            'Funziona in modalità chiara e scura',
          ],
        },
      ],
      benefitsTitle: 'Vantaggi principali',
      benefits: [
        { title: 'Incorporazione in una riga', description: 'Aggiungi un singolo snippet HTML - nessun passaggio di build, nessun framework richiesto.' },
        { title: 'Dati in tempo reale', description: 'Le statistiche di recensioni vengono recuperate in tempo reale dal tuo progetto Proofio tramite API key.' },
        { title: '18 lingue', description: 'DE, EN, FR, ES, IT, PT, NL, PL, RU, JA, KO, ZH e altri - tutto integrato.' },
        { title: 'Badge IA verificato', description: 'Segnala che le tue recensioni sono analizzate e verificate dall\'IA di Proofio.' },
        { title: 'Card testimonianza', description: 'Mostra una vera citazione cliente verificata direttamente nel widget.' },
        { title: 'Responsive per mobile', description: 'Dimensioni dei font e spaziature si adattano automaticamente agli schermi piccoli.' },
      ],
      embedTitle: 'Incorpora in secondi',
      embedDescription:
        'Funziona con HTML puro, React, Next.js, WordPress, Shopify - ovunque tu possa aggiungere un tag script.',
      embedPoints: [
        'Recupera le tue statistiche di recensioni in tempo reale tramite API key',
        'Impostazioni gestite nel tuo dashboard Proofio',
        'Si ri-renderizza al ridimensionamento per una visualizzazione mobile perfetta',
      ],
      useCasesTitle: 'Scenari applicabili',
      useCases: [
        'Landing page SaaS che mostrano valutazioni aggregate di App Store + Trustpilot.',
        'Pagine prodotto e-commerce con conteggi di recensioni verificate e testimonianze.',
        'Pagine di download dell\'app iOS con badge multilingue per audience globali.',
        'Siti di agenzie che mostrano segnali di fiducia senza sviluppo personalizzato.',
        'Lanci su Product Hunt con un widget di recensioni in tempo reale che si aggiorna automaticamente.',
        'Deck di vendita B2B con link a un widget verificato come prova sociale.',
      ],
    },
  } as const;

  return copy[locale];
}

// ─── Widget texts (per locale, matches real widget.js) ────────────────────────

type WidgetLang = 'en' | 'de' | 'fr' | 'es' | 'pt' | 'it';

const widgetTexts: Record<WidgetLang, {
  header: string; reviews: string; ai: string; verified: string;
  quote: string; author: string; madeWith: string; tryFree: string;
}> = {
  en: { header: 'Verified across 3 platforms', reviews: '1,247 verified reviews', ai: 'Proofio AI Checked', verified: 'Verified Review', quote: '"Absolute game changer for our conversion rate."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Try now for free' },
  de: { header: 'Verifiziert aus 3 Plattformen', reviews: '1.247 verifizierte Reviews', ai: 'Proofio-AI-geprüft', verified: 'Verifizierte Bewertung', quote: '"Hat unsere Conversion-Rate enorm verbessert."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Jetzt kostenlos testen' },
  fr: { header: 'Vérifié sur 3 plateformes', reviews: '1 247 avis vérifiés', ai: 'Vérifié par IA Proofio', verified: 'Avis Vérifié', quote: '"Un vrai game changer pour notre taux de conversion."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Essayez gratuitement' },
  es: { header: 'Verificado en 3 plataformas', reviews: '1.247 reseñas verificadas', ai: 'Verificado por IA Proofio', verified: 'Reseña Verificada', quote: '"Un cambio total para nuestra tasa de conversión."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Prueba gratis' },
  pt: { header: 'Verificado em 3 plataformas', reviews: '1.247 reviews verificadas', ai: 'Verificado por IA Proofio', verified: 'Review Verificada', quote: '"Uma mudança total para nossa taxa de conversão."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Experimente grátis' },
  it: { header: 'Verificato su 3 piattaforme', reviews: '1.247 recensioni verificate', ai: 'Verificato da IA Proofio', verified: 'Recensione Verificata', quote: '"Un vero cambiamento per il nostro tasso di conversione."', author: '— Sarah M.', madeWith: 'Made with', tryFree: 'Prova gratis' },
};

// ─── Widget Preview ───────────────────────────────────────────────────────────

type WidgetTheme = 'light' | 'dark';

interface WidgetPreviewProps {
  language?: WidgetLang;
  theme?: WidgetTheme;
  showAiBadge?: boolean;
  showBranding?: boolean;
  showTestimonial?: boolean;
}

function WidgetPreview({
  language = 'en',
  theme = 'light',
  showAiBadge = true,
  showBranding = true,
  showTestimonial = false,
}: WidgetPreviewProps) {
  const isDark = theme === 'dark';
  const t = widgetTexts[language];
  const filterGreen =
    'brightness(0) saturate(100%) invert(53%) sepia(93%) saturate(1415%) hue-rotate(126deg) brightness(96%) contrast(101%)';

  const colors = isDark
    ? { bg: '#111827', border: '#374151', text: '#f9fafb', textSec: '#9ca3af', divider: '#1f2937', cardBg: '#1f2937', badgeBg: '#064e3b', badgeText: '#ecfdf5', brandingText: '#6b7280', logoBg: '#1f2937', logoBorder: '#374151' }
    : { bg: '#ffffff', border: '#e5e7eb', text: '#111827', textSec: '#6b7280', divider: '#f3f4f6', cardBg: '#f9fafb', badgeBg: '#f0fdf4', badgeText: '#166534', brandingText: '#9ca3af', logoBg: '#ffffff', logoBorder: '#f3f4f6' };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 16, display: 'inline-flex', flexDirection: 'column', gap: 8, boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.5)' : '0 1px 8px rgba(0,0,0,0.08)', width: '100%', maxWidth: 340 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
        <div style={{ background: colors.logoBg, border: `1px solid ${colors.logoBorder}`, borderRadius: 6, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/oo.png" alt="Proofio" style={{ width: 16, height: 16, objectFit: 'contain', filter: filterGreen }} />
        </div>
        <span style={{ fontWeight: 700, fontSize: 13, color: colors.text }}>{t.header}</span>
        <span style={{ color: colors.brandingText, fontSize: 13 }}>·</span>
        <span style={{ fontWeight: 700, fontSize: 13, color: colors.text }}>4.8 ★</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: colors.textSec }}>{t.reviews}</span>
        {showAiBadge && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: colors.badgeBg, color: colors.badgeText, padding: '2px 8px', borderRadius: 9999, fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ✦ {t.ai}
          </div>
        )}
      </div>

      {showTestimonial && (
        <div style={{ borderTop: `1px solid ${colors.divider}`, paddingTop: 8 }}>
          <div style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: 8, padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#facc15', fontSize: 11 }}>★★★★★</span>
              <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#01bb7e', background: colors.badgeBg, padding: '1px 6px', borderRadius: 9999 }}>{t.verified}</span>
            </div>
            <p style={{ fontSize: 11, lineHeight: 1.5, color: colors.text, margin: '0 0 6px 0' }}>{t.quote}</p>
            <span style={{ fontSize: 10, fontWeight: 700, color: colors.textSec }}>{t.author}</span>
          </div>
        </div>
      )}

      {showBranding && (
        <div style={{ marginTop: 2, borderTop: `1px solid ${colors.divider}`, paddingTop: 8, display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, color: colors.brandingText }}>
          <span>{t.madeWith}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={isDark ? '/whitelogo.svg' : '/logo.svg'} alt="Proofio" style={{ height: 9, width: 'auto' }} />
          <span>–</span>
          <span style={{ color: '#01bb7e', fontWeight: 600 }}>{t.tryFree}</span>
        </div>
      )}
    </div>
  );
}

// ─── Showcase Section (alternating) ──────────────────────────────────────────

interface ShowcaseSectionProps {
  flip?: boolean;
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  icon: React.ElementType;
  widgetBg: string;
  children: React.ReactNode;
}

function ShowcaseSection({ flip = false, label, title, description, bullets, icon: Icon, widgetBg, children }: ShowcaseSectionProps) {
  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: flip ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="flex flex-col justify-center"
    >
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/10 text-primary rounded-full w-fit">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-xs font-black uppercase tracking-widest">{label}</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-base-content mb-3 tracking-tight">{title}</h3>
      <p className="text-base-content/65 leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-base-content/70">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const widgetCol = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`${widgetBg} rounded-3xl p-8 md:p-12 flex items-center justify-center`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {flip ? <>{widgetCol}{textCol}</> : <>{textCol}{widgetCol}</>}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefitIcons = [Brain, BarChart3, Bell, Target, Layers3, Users];

const embedCode = `<div
  data-proofio-widget
  data-api-key="YOUR_API_KEY"
  data-language="en"
  data-theme="light"
  data-show-ai-badge="true"
  data-show-testimonials="true"
></div>
<script src="https://proofio.app/widget.js" async></script>`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const localeContext = useLocaleContext();
  const locale = normalizeLocale(localeContext.locale);
  const messages = { cta: localeContext.messages?.cta };
  const t = getPageText(locale);

  // Widget shows in the page locale where possible
  const widgetLang: WidgetLang =
    locale === 'de' || locale === 'fr' || locale === 'es' || locale === 'pt' || locale === 'it'
      ? locale
      : 'en';

  const sectionIcons = [ShieldCheck, Moon, Globe, MessageSquare];
  const sectionWidgetBgs = [
    'bg-base-200/60 border border-base-300',
    'bg-gray-900 border border-gray-800',
    'bg-base-200/60 border border-base-300',
    'bg-gray-900 border border-gray-800',
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-base-100">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-primary/10 blur-[110px] rounded-full translate-y-1/2" />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">

            {/* ── HERO ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">{t.featureBadge}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">
                Proofio Verified
              </h1>
              <p className="text-xl text-base-content/65 max-w-2xl mx-auto">
                {t.heroDescription}
              </p>
            </motion.div>

            {/* ── SHOWCASE ── */}
            <section className="mb-20 space-y-16 md:space-y-24">
              {t.sections.map((section, i) => (
                <ShowcaseSection
                  key={section.label}
                  flip={i % 2 !== 0}
                  label={section.label}
                  title={section.title}
                  description={section.description}
                  bullets={section.bullets}
                  icon={sectionIcons[i]}
                  widgetBg={sectionWidgetBgs[i]}
                >
                  {i === 0 && <WidgetPreview theme="light" language={widgetLang} />}
                  {i === 1 && <WidgetPreview theme="dark" language={widgetLang} />}
                  {i === 2 && <WidgetPreview theme="light" language={widgetLang} />}
                  {i === 3 && <WidgetPreview theme="dark" language={widgetLang} showTestimonial />}
                </ShowcaseSection>
              ))}
            </section>

            {/* ── KEY BENEFITS ── */}
            <section className="mb-16">
              <h2 className="text-4xl font-black mb-10 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                {t.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.benefits.map((benefit, idx) => {
                  const BenefitIcon = benefitIcons[idx % benefitIcons.length];
                  return (
                    <div key={benefit.title} className="group bg-white rounded-3xl p-7 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300">
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

            {/* ── EMBED CODE ── */}
            <section className="mb-16">
              <h2 className="text-4xl font-black mb-3 text-base-content">{t.embedTitle}</h2>
              <p className="text-base-content/70 leading-relaxed mb-8">{t.embedDescription}</p>

              <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-xl">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-800 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">index.html</span>
                </div>
                <pre className="p-6 text-sm font-mono text-green-400 overflow-x-auto leading-relaxed">
                  <code>{embedCode}</code>
                </pre>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.embedPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-base-content/70">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── USE CASES ── */}
            <section className="mb-16">
              <h2 className="text-4xl font-black mb-10 text-base-content">{t.useCasesTitle}</h2>
              <div className="space-y-4">
                {t.useCases.map((useCase, idx) => (
                  <div key={idx} className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/25 transition-all duration-300 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-base-content/70 leading-relaxed">{useCase}</p>
                  </div>
                ))}
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
