import { Metadata } from "next";
import DevelopersClient from "./DevelopersClient";

export const metadata: Metadata = {
  title: "Developer Hub | API & SDK for Review Intelligence | Proofio",
  description: "Integrate verified cross-platform review data into your apps with the Proofio API and TypeScript SDK. Build trust with real-time review intelligence.",
  alternates: {
    canonical: "https://proofio.app/developers",
  },
  openGraph: {
    title: "Proofio Developer Hub | Build with Review Intelligence",
    description: "Robust API and TypeScript SDK for seamless review data integration. Access verified cross-platform feedback directly.",
    url: "https://proofio.app/developers",
    siteName: "Proofio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Proofio Developer Hub - API & SDK Documentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proofio Developer Hub",
    description: "Build with verified review intelligence using our API and TypeScript SDK.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <DevelopersClient />;
}
