import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Handshake, TrendingUp, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | Proofio",
  description: "Partner with Proofio - Affiliate programs and partnership opportunities for review aggregation platform.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Handshake className="w-4 h-4" />
                <span className="text-sm font-medium">PARTNERSHIPS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
                Partner with Proofio
              </h1>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Join our partner program and help businesses transform their review management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  Affiliate Program
                </h3>
                <p className="text-base-content/70 text-sm">
                  Earn commissions by referring customers to Proofio. Competitive rates and dedicated support.
                </p>
              </div>

              <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  Integration Partners
                </h3>
                <p className="text-base-content/70 text-sm">
                  Build integrations and expand the Proofio ecosystem. Technical support and co-marketing opportunities.
                </p>
              </div>

              <div className="bg-base-100 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  Reseller Program
                </h3>
                <p className="text-base-content/70 text-sm">
                  White-label opportunities for agencies and service providers. Custom pricing and support available.
                </p>
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
                  Interested in Partnering?
                </h2>
                <p className="text-lg text-base-content/70 mb-8">
                  Whether you're interested in our affiliate program, integration partnerships, or reseller opportunities, 
                  we'd love to hear from you. Get in touch with our sales team to learn more about how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:sales@proofio.app"
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all font-medium"
                  >
                    Contact Sales
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all font-medium"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

