import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Proofio",
  description: "Proofio Refund Policy - No refunds after purchase. Evaluate with the included 7-day Growth Plan trial.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Refund Policy - Proofio",
    description: "No-refund policy with an included 7-day Growth Plan trial.",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="prose prose-lg max-w-none bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. Scope</h2>
                <p className="text-base-content/80 mb-4">
                  This Refund Policy applies to all paid subscriptions for Proofio LLC products and services, including dashboard access, API plans, and related paid features.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. General Rule</h2>
                <p className="text-base-content/80 mb-4">
                  All subscription payments are final. Proofio does not issue refunds for initial purchases, renewals, upgrades, downgrades, partial billing periods, or unused time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. Included 7-Day Trial</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio includes a 7-day Growth Plan trial so you can evaluate the Service before committing to paid usage.
                </p>
                <p className="text-base-content/80">
                  By continuing into a paid subscription after the trial period, you acknowledge and accept this no-refund policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Monthly Plans</h2>
                <p className="text-base-content/80 mb-4">
                  Monthly subscriptions are billed in advance and are non-refundable. If you cancel, your subscription remains active until the end of the current billing cycle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Upgrades, Downgrades, and Cancellations</h2>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Plan upgrades may be prorated immediately.</li>
                  <li>Downgrades and cancellations take effect at the next renewal unless explicitly stated otherwise.</li>
                  <li>No credits or refunds are issued for unused time in the current billing period.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. Chargebacks and Payment Disputes</h2>
                <p className="text-base-content/80 mb-4">
                  If you believe a charge is incorrect, contact us first so we can investigate and resolve the issue quickly. Initiating fraudulent or abusive chargebacks may result in account suspension or termination.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. How to Request a Refund</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio does not provide refunds. If you have billing questions, contact <a href="mailto:support@proofio.app" className="text-primary hover:underline">support@proofio.app</a> and we will help clarify charges or subscription status.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Changes to This Policy</h2>
                <p className="text-base-content/80 mb-4">
                  We may update this Refund Policy from time to time. Changes become effective when posted on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">9. Contact</h2>
                <div className="text-base-content/80 space-y-2">
                  <p>
                    <strong>Proofio LLC</strong>
                  </p>
                  <p>
                    Delaware, United States
                  </p>
                  <p>
                    Email: <a href="mailto:support@proofio.app" className="text-primary hover:underline">support@proofio.app</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
