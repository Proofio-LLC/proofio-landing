import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Proofio",
  description: "Proofio Imprint - Legal information about Proofio LLC.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Imprint - Proofio",
    description: "Legal disclosure and contact information for Proofio LLC.",
  },
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Imprint
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Legal Disclosure according to German Law (§ 5 TMG)
            </p>

            <div className="prose prose-lg max-w-none bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">Company Information</h2>
                <div className="text-base-content/80 space-y-2">
                  <p>
                    <strong>Proofio LLC</strong>
                  </p>
                  <p>
                    Delaware, United States
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">Contact Details</h2>
                <div className="text-base-content/80 space-y-2">
                  <p>
                    <strong>Email:</strong> <a href="mailto:support@proofio.app" className="text-primary hover:underline">support@proofio.app</a>
                  </p>
                  <p>
                    <strong>Website:</strong> <a href="https://proofio.app" className="text-primary hover:underline">https://proofio.app</a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">Responsible for content according to § 55 Abs. 2 RStV</h2>
                <p className="text-base-content/80">
                  Tim Krisch
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">Disclaimer</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio provides software for aggregating, analyzing, and summarizing publicly available reviews and feedback. Proofio does not guarantee the accuracy, completeness, or timeliness of third-party data.
                </p>
                
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">Liability for contents</h3>
                <p className="text-base-content/80 mb-4">
                  As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                </p>
                
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">Liability for links</h3>
                <p className="text-base-content/80 mb-4">
                  Our service may contain links to external websites. We have no influence over the content of those external sites and therefore cannot assume any liability for them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">Copyright</h2>
                <p className="text-base-content/80">
                  The content and works created by Proofio on these pages are subject to copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of copyright law requires prior written consent.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

