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
};

const metadataByLocale: Record<Locale, Omit<Metadata, 'alternates' | 'openGraph'>> = {
  en: {
    title: "Proofio - Review Intelligence Platform",
    description: "Proofio aggregates reviews from App Store, Google Play, Trustpilot, Google Reviews and more. Gain deep insights with AI-powered review intelligence, competitive analysis, and embeddable widgets.",
  },
  de: {
    title: "Proofio - Review Intelligence Plattform",
    description: "Proofio sammelt Bewertungen von App Store, Google Play, Trustpilot, Google Reviews und mehr. Gewinnen Sie tiefe Einblicke mit KI-gestützter Review-Intelligence, Wettbewerbsanalyse und einbettbaren Widgets.",
  },
  fr: {
    title: "Proofio - Plateforme d'Intelligence des Avis",
    description: "Proofio agrège les avis de l'App Store, Google Play, Trustpilot, Google Reviews et plus encore. Obtenez des insights approfondis avec l'intelligence des avis alimentée par l'IA, l'analyse concurrentielle et les widgets intégrables.",
  },
  es: {
    title: "Proofio - Plataforma de Inteligencia de Reseñas",
    description: "Proofio agrega reseñas de App Store, Google Play, Trustpilot, Google Reviews y más. Obtenga insights profundos con inteligencia de reseñas impulsada por IA, análisis competitivo y widgets integrables.",
  },
  pt: {
    title: "Proofio - Plataforma de Inteligência de Avaliações",
    description: "O Proofio agrega avaliações da App Store, Google Play, Trustpilot, Google Reviews e mais. Obtenha insights profundos com inteligência de avaliações alimentada por IA, análise competitiva e widgets integrados.",
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

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} messages={messages} />
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
