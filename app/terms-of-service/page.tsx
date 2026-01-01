import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Proofio",
  description: "Proofio Terms of Service - Terms and conditions for using our review aggregation platform.",
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

            <div className="prose prose-lg max-w-none bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. Agreement to Terms</h2>
                <p className="text-base-content/80 mb-4">
                  By accessing or using Proofio LLC's services, including our website, API, widgets, and related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
                </p>
                <p className="text-base-content/80">
                  These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Proofio LLC ("Company," "we," "us," or "our").
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. Description of Service</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC provides a platform that aggregates, normalizes, and displays reviews from multiple sources, including but not limited to App Store, Google Play, Shopify, and Google Reviews. Our Service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>API access to aggregated review data</li>
                  <li>Widgets for displaying reviews on websites</li>
                  <li>Data normalization and synchronization services</li>
                  <li>Analytics and reporting features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. User Accounts</h2>
                <p className="text-base-content/80 mb-4">
                  To access certain features of the Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Acceptable Use</h2>
                <p className="text-base-content/80 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>Violate or infringe upon the rights of others</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Use automated systems to access the Service without authorization</li>
                  <li>Modify, adapt, or hack the Service</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Use the Service to transmit viruses, malware, or harmful code</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Payment Terms</h2>
                <p className="text-base-content/80 mb-4">
                  If you purchase a paid subscription:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>You agree to pay all fees associated with your selected plan</li>
                  <li>Fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We reserve the right to change our pricing with 30 days' notice</li>
                  <li>Failure to pay may result in suspension or termination of your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. Intellectual Property</h2>
                <p className="text-base-content/80 mb-4">
                  The Service and its original content, features, and functionality are owned by Proofio LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-base-content/80 mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes in accordance with these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Data and Content</h2>
                <p className="text-base-content/80 mb-4">
                  The review data aggregated by Proofio LLC is sourced from third-party platforms. We do not claim ownership of this content. By using our Service, you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Review content belongs to the original platforms and reviewers</li>
                  <li>You are responsible for compliance with the terms of service of source platforms</li>
                  <li>You must respect copyright and intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Disclaimers and Limitations of Liability</h2>
                <p className="text-base-content/80 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-base-content/80 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROOFIO LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">9. Indemnification</h2>
                <p className="text-base-content/80 mb-4">
                  You agree to indemnify, defend, and hold harmless Proofio LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the Service or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">10. Termination</h2>
                <p className="text-base-content/80 mb-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">11. Changes to Terms</h2>
                <p className="text-base-content/80 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">12. Governing Law</h2>
                <p className="text-base-content/80 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">13. Contact Information</h2>
                <p className="text-base-content/80 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

