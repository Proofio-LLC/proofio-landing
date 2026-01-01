import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
