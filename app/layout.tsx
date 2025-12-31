import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proofio - Automated Review Aggregation for Your Business",
  description: "Automatically aggregate reviews from multiple platforms. Proofio collects, updates, and presents reviews via API and platform-independent widgets.",
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
      </body>
    </html>
  );
}
