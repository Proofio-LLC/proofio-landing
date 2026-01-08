import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Proofio - Automated Review Aggregation for Your Business",
  description: "Automatically aggregate reviews from multiple platforms. Proofio collects, updates, and presents reviews via API and platform-independent widgets.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Proofio - Automated Review Aggregation for Your Business",
    description: "Automatically aggregate reviews from multiple platforms. Proofio collects, updates, and presents reviews via API and platform-independent widgets.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Proofio - Review Aggregation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proofio - Automated Review Aggregation for Your Business",
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
        <meta name="google-adsense-account" content="ca-pub-4446306494941060" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4446306494941060"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
        <CookieBanner />
        {analyticsEnabled && <Analytics />}
      </body>
    </html>
  );
}
