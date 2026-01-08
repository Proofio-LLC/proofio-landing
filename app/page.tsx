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
