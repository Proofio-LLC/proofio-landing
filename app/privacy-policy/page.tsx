import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Proofio",
  description: "Proofio Privacy Policy - Learn how we collect, use, and protect your personal information.",
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

            <div className="prose prose-lg max-w-none bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. Introduction</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website, API, and widgets (collectively, the "Service").
                </p>
                <p className="text-base-content/80">
                  By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. Information We Collect</h2>
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">2.1 Information You Provide</h3>
                <p className="text-base-content/80 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Account registration information (name, email address, company name)</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Support requests and communications</li>
                </ul>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-base-content/80 mb-4">
                  When you use our Service, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Usage data and API usage statistics</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and error reports</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. How We Use Your Information</h2>
                <p className="text-base-content/80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-base-content/80 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Data Security</h2>
                <p className="text-base-content/80 mb-4">
                  We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. Your Rights</h2>
                <p className="text-base-content/80 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to object to or restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="text-base-content/80">
                  To exercise these rights, please contact us at <a href="mailto:support@proofio.app" className="text-primary hover:underline">support@proofio.app</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-base-content/80 mb-4">
                  We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-base-content/80">
                  For more information, please see our <a href="/cookies-settings" className="text-primary hover:underline">Cookies Settings</a> page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Children's Privacy</h2>
                <p className="text-base-content/80 mb-4">
                  Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-base-content/80 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">10. Contact Us</h2>
                <p className="text-base-content/80 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
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

