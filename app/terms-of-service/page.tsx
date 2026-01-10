import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Proofio",
  description: "Proofio Terms of Service - Terms and conditions for using our review aggregation platform.",
  openGraph: {
    title: "Terms of Service - Proofio",
    description: "The legal framework for using Proofio services and APIs.",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. Agreement to Terms</h2>
                <p className="text-base-content/80 mb-4">
                  By accessing or using Proofio LLC’s services, including our website, applications, APIs, widgets, and related services (collectively, the “Service”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, you may not access or use the Service.
                </p>
                <p className="text-base-content/80">
                  These Terms constitute a legally binding agreement between you (“User”, “you”, or “your”) and Proofio LLC (“Company”, “we”, “us”, or “our”).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. Description of Service</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio provides a software platform that aggregates, normalizes, analyzes, and displays publicly available reviews and feedback from third-party sources, including but not limited to app stores, e-commerce platforms, and review providers.
                </p>
                <p className="text-base-content/80 mb-4">
                  The Service may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>API access to aggregated review data</li>
                  <li>Widgets for displaying reviews</li>
                  <li>Data synchronization and normalization</li>
                  <li>Analytics, summaries, and reporting features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. User Accounts</h2>
                <p className="text-base-content/80 mb-4">
                  To access certain features of the Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your credentials</li>
                  <li>Be responsible for all activity under your account</li>
                  <li>Notify us promptly of unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Acceptable Use</h2>
                <p className="text-base-content/80 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Use the Service for unlawful purposes</li>
                  <li>Violate third-party rights or platform terms</li>
                  <li>Interfere with the operation or security of the Service</li>
                  <li>Circumvent access controls or rate limits</li>
                  <li>Reverse engineer, copy, or exploit the Service</li>
                  <li>Introduce malware or harmful code</li>
                </ul>
                <p className="text-base-content/80">
                  We reserve the right to suspend or restrict access if usage exceeds reasonable or documented limits.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Subscriptions and Payments</h2>
                <p className="text-base-content/80 mb-4">
                  If you purchase a paid subscription:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Fees are billed in advance on a monthly or annual basis</li>
                  <li>Prices are exclusive of taxes unless stated otherwise</li>
                  <li>Payments are non-refundable except where required by law</li>
                  <li>We may change pricing with reasonable prior notice</li>
                  <li>Non-payment may result in suspension or termination</li>
                </ul>
                <p className="text-base-content/80">
                  You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. Intellectual Property</h2>
                <p className="text-base-content/80 mb-4">
                  The Service and all related software, design, and functionality are owned by Proofio LLC and protected by applicable intellectual property laws.
                </p>
                <p className="text-base-content/80">
                  You are granted a limited, non-exclusive, non-transferable license to use the Service for internal business purposes in accordance with these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Data and Third-Party Content</h2>
                <p className="text-base-content/80 mb-4">
                  The Service aggregates content from third-party platforms. Proofio does not own or control this content.
                </p>
                <p className="text-base-content/80 mb-4">
                  You acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Review content belongs to the original authors or platforms</li>
                  <li>Data availability and accuracy depend on third-party sources</li>
                  <li>Changes to external platforms may affect the Service</li>
                </ul>
                <p className="text-base-content/80">
                  You are responsible for complying with applicable third-party terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Availability and Disclaimer</h2>
                <p className="text-base-content/80 mb-4">
                  The Service is provided “as is” and “as available”. We do not guarantee uninterrupted availability, uptime, or error-free operation.
                </p>
                <p className="text-base-content/80">
                  We may modify, suspend, or discontinue parts of the Service at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">9. Limitation of Liability</h2>
                <p className="text-base-content/80 mb-4">
                  To the maximum extent permitted by law, Proofio LLC shall not be liable for indirect, incidental, consequential, or special damages, including loss of data, profits, or business opportunities.
                </p>
                <p className="text-base-content/80">
                  Our total liability shall not exceed the amount paid by you to Proofio in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">10. Indemnification</h2>
                <p className="text-base-content/80">
                  You agree to indemnify and hold harmless Proofio LLC and its affiliates from any claims arising out of your use of the Service or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">11. Termination</h2>
                <p className="text-base-content/80 mb-4">
                  We may suspend or terminate access to the Service at any time for violation of these Terms or misuse of the Service.
                </p>
                <p className="text-base-content/80">
                  Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">12. Changes to Terms</h2>
                <p className="text-base-content/80 mb-4">
                  We may update these Terms from time to time. Material changes will be communicated via the Service or email. Continued use constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">13. Governing Law</h2>
                <p className="text-base-content/80 mb-4">
                  These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">14. Contact</h2>
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

