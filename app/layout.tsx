import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import ProofyFloatingButton from "./components/ProofyFloatingButton";
import AffiliateTracking from "./components/AffiliateTracking";
import { Analytics } from "@vercel/analytics/next";
import { cookies } from "next/headers";
import { StructuredData } from "./components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Proofio - Review Intelligence Platform",
    template: "%s | Proofio"
  },
  description: "Automatically aggregate reviews from App Store, Google Play, Trustpilot, Google Reviews and more. AI-powered review intelligence, competitive analysis, and embeddable widgets. Enterprise-ready review management platform.",
  keywords: [
    "review aggregation",
    "review management",
    "review intelligence",
    "app store reviews",
    "google play reviews",
    "trustpilot reviews",
    "review analytics",
    "customer feedback",
    "social proof",
    "review API",
    "review widget",
    "review platform",
    "review monitoring",
    "competitive analysis",
    "sentiment analysis",
    "review insights"
  ],
  authors: [{ name: "Proofio" }],
  creator: "Proofio",
  publisher: "Proofio",
  metadataBase: new URL('https://proofio.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proofio.app',
    siteName: 'Proofio',
    title: "Proofio - Automated Review Aggregation for Your Business",
    description: "Automatically aggregate reviews from multiple platforms. Proofio collects, updates, and presents reviews via API and platform-independent widgets.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Proofio - Review Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proofio - Review Intelligence Platform",
    description: "Automatically aggregate reviews from multiple platforms. Proofio collects, updates, and presents reviews via API and platform-independent widgets.",
    images: ["/opengraph.png"],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use cookies to determine consent on server side for Analytics component
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get("cookieConsent")?.value;
  let analyticsEnabled = false;

  try {
    if (consentCookie) {
      const consent = JSON.parse(consentCookie);
      analyticsEnabled = consent.analytics === true;
    }
  } catch (e) {
    // Fallback for older string format
    analyticsEnabled = consentCookie === "accepted";
  }

  return (
    <html lang="en" data-theme="light">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <AffiliateTracking />
        <CookieBanner />
        <ProofyFloatingButton />
        {analyticsEnabled && <Analytics />}
      </body>
    </html>
  );
}
