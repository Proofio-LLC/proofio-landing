import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Proofio",
  description: "Proofio Privacy Policy - Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Privacy Policy - Proofio",
    description: "Our commitment to protecting your data and privacy.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. Introduction</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, applications, APIs, widgets, and related services (collectively, the "Service").
                </p>
                <p className="text-base-content/80">
                  By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. Information We Collect</h2>
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">2.1 Information You Provide</h3>
                <p className="text-base-content/80 mb-4">
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Account registration information (such as name, email address, company name)</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Support requests and other communications</li>
                </ul>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-base-content/80 mb-4">
                  When you use the Service, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Usage data and API usage statistics (collected anonymously via Vercel Analytics where consent is provided)</li>
                  <li>Device and connection information (IP address, browser type, operating system)</li>
                  <li>Log files, diagnostic data, and error reports</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. Legal Basis for Processing (EU Users)</h2>
                <p className="text-base-content/80 mb-4">
                  If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Performance of a contract (e.g. account creation, service delivery)</li>
                  <li>Consent (e.g. newsletter subscriptions)</li>
                  <li>Legitimate interests (e.g. security, analytics, service improvement)</li>
                  <li>Legal obligations where applicable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. How We Use Your Information</h2>
                <p className="text-base-content/80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Provide, operate, and maintain the Service</li>
                  <li>Process payments and transactions</li>
                  <li>Communicate with you regarding updates, technical notices, and support</li>
                  <li>Send newsletters and product updates (where consent has been given)</li>
                  <li>Monitor usage trends and improve performance</li>
                  <li>Detect, prevent, and address security and technical issues</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Information Sharing and Disclosure</h2>
                <p className="text-base-content/80 mb-4">
                  We do not sell your personal data. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li><strong>Service Providers:</strong> Trusted third-party providers such as hosting, analytics, email delivery, authentication, payment processors, and AI analysis services (e.g. Firebase, Stripe, MailerLite, Resend, Zoho, Vercel Analytics, OpenRouter).</li>
                  <li><strong>Legal Requirements:</strong> When required by law or in response to valid legal processes.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  <li><strong>With Your Consent</strong></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. International Data Transfers</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC is based in the United States. If you access the Service from outside the United States, your information may be transferred to and processed in the United States or other jurisdictions. We take appropriate safeguards to ensure adequate data protection, including standard contractual clauses where required.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Data Retention</h2>
                <p className="text-base-content/80 mb-4">
                  We retain personal data only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Data Security</h2>
                <p className="text-base-content/80 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission or storage is completely secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">9. Your Rights</h2>
                <p className="text-base-content/80 mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct or update inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-base-content/80">
                  You can exercise these rights by contacting us at <a href="mailto:support@proofio.app" className="text-primary hover:underline">support@proofio.app</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">10. Cookies and Tracking Technologies</h2>
                <p className="text-base-content/80 mb-4">
                  We use cookies and similar technologies to operate and improve the Service. You can control cookie usage through your browser settings. Additional information may be available via our <a href="/cookies-settings" className="text-primary hover:underline">Cookie Settings</a> page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">11. Children's Privacy</h2>
                <p className="text-base-content/80 mb-4">
                  The Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-base-content/80 mb-4">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">13. Contact</h2>
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

