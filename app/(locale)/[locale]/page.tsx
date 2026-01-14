import { Metadata } from "next";
import { notFound } from 'next/navigation';
import { Locale, isValidLocale } from '@/lib/i18n';
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

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title: "Proofio - Review Intelligence Platform | Automated Review Aggregation",
    description: "Proofio aggregates reviews from App Store, Google Play, Trustpilot, Google Reviews and more. Gain deep insights with AI-powered review intelligence, competitive analysis, and embeddable widgets.",
    openGraph: {
      title: "Proofio - Automated Review Aggregation for Your Business",
      description: "The complete infrastructure for your review data. Collect, analyze and present reviews with one powerful API.",
      images: ["/opengraph.png"],
    },
  },
  de: {
    title: "Proofio - Review Intelligence Plattform | Automatisierte Bewertungsaggregation",
    description: "Proofio sammelt Bewertungen von App Store, Google Play, Trustpilot, Google Reviews und mehr. Gewinnen Sie tiefe Einblicke mit KI-gestützter Review-Intelligence, Wettbewerbsanalyse und einbettbaren Widgets.",
    openGraph: {
      title: "Proofio - Automatisierte Bewertungsaggregation für Ihr Unternehmen",
      description: "Die komplette Infrastruktur für Ihre Bewertungsdaten. Sammeln, analysieren und präsentieren Sie Bewertungen mit einer leistungsstarken API.",
      images: ["/opengraph.png"],
    },
  },
  fr: {
    title: "Proofio - Plateforme d'Intelligence des Avis | Agrégation Automatique d'Avis",
    description: "Proofio agrège les avis de l'App Store, Google Play, Trustpilot, Google Reviews et plus encore. Obtenez des insights approfondis avec l'intelligence des avis alimentée par l'IA, l'analyse concurrentielle et les widgets intégrables.",
    openGraph: {
      title: "Proofio - Agrégation Automatique d'Avis pour Votre Entreprise",
      description: "L'infrastructure complète pour vos données d'avis. Collectez, analysez et présentez les avis avec une API puissante.",
      images: ["/opengraph.png"],
    },
  },
  es: {
    title: "Proofio - Plataforma de Inteligencia de Reseñas | Agregación Automatizada de Reseñas",
    description: "Proofio agrega reseñas de App Store, Google Play, Trustpilot, Google Reviews y más. Obtenga insights profundos con inteligencia de reseñas impulsada por IA, análisis competitivo y widgets integrables.",
    openGraph: {
      title: "Proofio - Agregación Automatizada de Reseñas para Su Negocio",
      description: "La infraestructura completa para sus datos de reseñas. Recopile, analice y presente reseñas con una API potente.",
      images: ["/opengraph.png"],
    },
  },
  pt: {
    title: "Proofio - Plataforma de Inteligência de Avaliações | Agregação Automatizada de Avaliações",
    description: "O Proofio agrega avaliações da App Store, Google Play, Trustpilot, Google Reviews e mais. Obtenha insights profundos com inteligência de avaliações alimentada por IA, análise competitiva e widgets integrados.",
    openGraph: {
      title: "Proofio - Agregação Automatizada de Avaliações para Seu Negócio",
      description: "A infraestrutura completa para seus dados de avaliações. Colete, analise e apresente avaliações com uma API poderosa.",
      images: ["/opengraph.png"],
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    return metadataByLocale.en;
  }

  return metadataByLocale[locale];
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
