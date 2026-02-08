import { Metadata } from "next";
import { notFound } from 'next/navigation';
import { Locale, isValidLocale, locales, defaultLocale } from '@/lib/i18n';
import { getMessages } from '@/lib/get-messages';
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Integration from "../../components/Integration";
import UseCases from "../../components/UseCases";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import Blog from "../../components/Blog";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const baseUrl = 'https://proofio.app';

// OpenGraph locale mapping
const ogLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  pt: 'pt_PT',
  it: 'it_IT',
};

const metadataByLocale: Record<Locale, Omit<Metadata, 'alternates' | 'openGraph'>> = {
  en: {
    title: "Proofio - Review Intelligence Platform",
    description: "Proofio is a review-intelligence platform that automatically collects, normalizes, and analyzes reviews from App Store, Google Play, Trustpilot and other sources using AI.",
  },
  de: {
    title: "Proofio - Review Intelligence Plattform",
    description: "Proofio ist eine Review-Intelligence-Plattform, die automatisch Bewertungen von App Store, Google Play, Trustpilot und anderen Quellen mit KI sammelt, normalisiert und analysiert.",
  },
  fr: {
    title: "Proofio - Plateforme d'Intelligence des Avis",
    description: "Proofio est une plateforme d'intelligence des avis qui collecte, normalise et analyse automatiquement les avis de l'App Store, Google Play, Trustpilot et d'autres sources à l'aide de l'IA.",
  },
  es: {
    title: "Proofio - Plataforma de Inteligencia de Reseñas",
    description: "Proofio es una plataforma de inteligencia de reseñas que recopila, normaliza y analiza automáticamente reseñas de App Store, Google Play, Trustpilot y otras fuentes usando IA.",
  },
  pt: {
    title: "Proofio - Plataforma de Inteligência de Avaliações",
    description: "Proofio é uma plataforma de inteligência de avaliações que coleta, normaliza e analisa automaticamente avaliações do App Store, Google Play, Trustpilot e outras fontes usando IA.",
  },
  it: {
    title: "Proofio - Piattaforma di Intelligence delle Recensioni",
    description: "Proofio è una piattaforma di intelligence delle recensioni che raccoglie, normalizza e analizza automaticamente le recensioni da App Store, Google Play, Trustpilot e altre fonti utilizzando l'IA.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    return metadataByLocale.en;
  }

  const baseMetadata = metadataByLocale[locale];
  
  // Build canonical URL
  const canonicalPath = locale === defaultLocale ? '/' : `/${locale}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    ...baseMetadata,
    alternates: {
      canonical: canonicalUrl,
      languages: locales.reduce((acc, l) => {
        acc[l] = l === defaultLocale ? baseUrl : `${baseUrl}/${l}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: baseMetadata.title as string,
      description: baseMetadata.description || '',
      type: 'website',
      locale: ogLocaleMap[locale],
      url: canonicalUrl,
      siteName: 'Proofio',
      images: [
        {
          url: "/opengraph.png",
          width: 1200,
          height: 630,
          alt: baseMetadata.title as string,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseMetadata.title as string,
      description: baseMetadata.description || '',
      images: ["/opengraph.png"],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Build FAQ JSON-LD using translated messages when available, otherwise fallback
  let faqItems: Array<{ question: string; answer: string }>
    = (messages?.faq?.items) || [];

  if (!faqItems || locale === 'en') {
    faqItems = [
      { question: "What is Proofio?", answer: "Proofio is a review intelligence platform that helps teams understand customer feedback across platforms." },
      { question: "Which review sources are supported?", answer: "Proofio supports App Store, Google Play, Trustpilot and more." },
      { question: "Does Proofio use AI?", answer: "Yes — Proofio uses AI to generate summaries, detect trends and analyze sentiment." },
      { question: "How do I connect Google Play?", answer: "You can connect Google Play by providing developer API credentials in the integrations dashboard." },
      { question: "How often are reviews synced?", answer: "Sync frequency can be configured per integration: real-time webhooks, hourly, or daily polling." },
      { question: "Can Proofio aggregate reviews across countries?", answer: "Yes — Proofio normalizes and groups reviews across locales and countries." },
      { question: "Does Proofio provide sentiment analysis?", answer: "Yes — our AI extracts sentiment and topics from every review." },
      { question: "Can I export review data?", answer: "Yes — export reviews and analysis via CSV or our REST API." },
      { question: "Is there a trial?", answer: "We offer a trial tier for startups and small teams — contact sales to enable." },
      { question: "Can I get alerts for critical reviews?", answer: "Yes — set up alerts via email, Slack, or webhooks for filtered events." },
      { question: "Does Proofio support multi-brand accounts?", answer: "Yes — manage multiple apps or brands from one account." },
      { question: "How is data privacy handled?", answer: "We adhere to industry best practices and can provide a Data Processing Agreement on request." },
      { question: "What integrations are available?", answer: "Slack, Zapier, webhooks, CSV export, and custom API integrations." },
      { question: "Can I embed review widgets on my site?", answer: "Yes — Proofio provides embeddable widgets and SDKs for websites and apps." },
      { question: "How does pricing work for startups?", answer: "We have startup-friendly pricing — see our Pricing page or contact sales for a custom plan." },
      { question: "Is there an API?", answer: "Yes — a comprehensive REST API is available for accessing reviews and insights." },
      { question: "Can Proofio deduplicate reviews across mirrors?", answer: "Yes — we detect duplicates and normalize entries across sources." },
      { question: "Does Proofio support Trustpilot?", answer: "Yes — Trustpilot is one of our supported sources with dedicated analytics." },
      { question: "Can I filter reviews by platform or rating?", answer: "Yes — powerful filters let you create saved views and alerts." },
      { question: "How quickly can I onboard?", answer: "Basic onboarding takes under an hour; full enterprise setup timelines vary." },
    ];
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f: any) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      }
    }))
  };

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} messages={messages} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero locale={locale} messages={messages} />
      <Features locale={locale} messages={messages} />
      <Integration locale={locale} messages={messages} />
      <UseCases locale={locale} messages={messages} />
      <Pricing locale={locale} messages={messages} />
      <FAQ locale={locale} messages={messages} />
      <Blog />
      <CTA locale={locale} messages={messages} />
      <Footer locale={locale} messages={messages} />
    </main>
  );
}
