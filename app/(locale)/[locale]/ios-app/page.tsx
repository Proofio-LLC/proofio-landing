import { Metadata } from 'next';
import { Locale, isValidLocale } from '@/lib/i18n';
import { getMessages } from '@/lib/get-messages';
import IOSAppClient from './content/IOSAppClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: "Proofio iOS App - Mobile Review Intelligence",
    de: "Proofio iOS App - Mobile Review Intelligence",
    fr: "App iOS Proofio - Intelligence mobile des avis",
    es: "App iOS Proofio - Inteligencia móvil de reseñas",
    it: "App iOS Proofio - Intelligence mobile delle recensioni",
    pt: "App iOS Proofio - Inteligência móvel de avaliações"
  };

  const descriptions: Record<string, string> = {
    en: "The Proofio iOS app is your mobile command center for review intelligence. Monitor your App Store, Google Play, and Trustpilot reviews on the go.",
    de: "Die Proofio iOS-App ist Ihr mobiles Kontrollzentrum für Review Intelligence. Überwachen Sie Ihre App Store, Google Play und Trustpilot Bewertungen von unterwegs.",
    fr: "L'application iOS Proofio est votre centre de commande mobile pour l'intelligence des avis. Surveillez vos avis App Store, Google Play et Trustpilot en déplacement.",
    es: "La aplicación iOS Proofio es tu centro de mando móvil para la inteligencia de reseñas. Supervisa tus reseñas de App Store, Google Play y Trustpilot sobre la marcha.",
    it: "L'app iOS Proofio è il tuo centro di comando mobile per l'intelligence delle recensioni. Monitora le tue recensioni su App Store, Google Play e Trustpilot in movimento.",
    pt: "O aplicativo iOS Proofio é o seu centro de comando móvel para inteligência de avaliações. Monitore suas avaliações da App Store, Google Play e Trustpilot em qualquer lugar."
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `/${locale}/ios-app`,
      languages: {
        'en': '/en/ios-app',
        'de': '/de/ios-app',
        'fr': '/fr/ios-app',
        'es': '/es/ios-app',
        'it': '/it/ios-app',
        'pt': '/pt/ios-app',
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://proofio.app/${locale}/ios-app`,
      images: [
        {
          url: "/iosapp/apphome.png",
          width: 800,
          height: 1600,
          alt: "Proofio iOS App",
        },
      ],
    },
  };
}

export default async function IOSAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  return <IOSAppClient />;
}
