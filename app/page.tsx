import { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integration from "./components/Integration";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Proofio - Review Intelligence Platform | Automated Review Aggregation",
  description: "Proofio aggregates reviews from App Store, Google Play, Trustpilot, Google Reviews and more. Gain deep insights with AI-powered review intelligence, competitive analysis, and embeddable widgets.",
  openGraph: {
    title: "Proofio - Automated Review Aggregation for Your Business",
    description: "The complete infrastructure for your review data. Collect, analyze and present reviews with one powerful API.",
    images: ["/opengraph.png"],
  },
};


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Integration />
      <UseCases />
      <Pricing />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
