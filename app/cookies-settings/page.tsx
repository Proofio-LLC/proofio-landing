import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Settings | Proofio",
  description: "Proofio Cookie Policy - Learn about how we use cookies and manage your cookie preferences.",
};

export default function CookiesSettingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Cookie Settings
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. What Are Cookies?</h2>
                <p className="text-base-content/80 mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-base-content/80">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. How We Use Cookies</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC uses cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Remember your cookie preferences and consent choices</li>
                  <li>Maintain session information and user preferences</li>
                  <li>Analyze how our Service is used to improve user experience</li>
                  <li>Ensure security and prevent fraudulent activity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.1 Essential Cookies</h3>
                <p className="text-base-content/80 mb-4">
                  These cookies are strictly necessary for the Service to function and cannot be switched off. They are usually set in response to actions made by you, such as setting cookie preferences.
                </p>
                <div className="bg-base-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-base-content mb-2">Cookie: cookieConsent</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Stores your cookie consent preference (accepted/rejected)</li>
                    <li><strong>Type:</strong> Persistent cookie</li>
                    <li><strong>Duration:</strong> 1 year</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.2 Session Cookies</h3>
                <p className="text-base-content/80 mb-4">
                  These cookies are temporary and are deleted when you close your browser. They help maintain your session and preferences during your visit.
                </p>
                <div className="bg-base-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-base-content mb-2">Session Cookies</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Maintain session state and user preferences</li>
                    <li><strong>Type:</strong> Session cookie (temporary)</li>
                    <li><strong>Duration:</strong> Until browser is closed</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.3 Analytics Cookies (Optional)</h3>
                <p className="text-base-content/80 mb-4">
                  These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously. We only use these cookies if you accept them via our cookie banner.
                </p>
                <p className="text-base-content/70 text-sm mb-4 italic">
                  Note: Currently, we do not use third-party analytics services. If we introduce analytics in the future, we will update this policy and provide you with the option to opt-out.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Third-Party Services</h2>
                <p className="text-base-content/80 mb-4">
                  Our website may integrate with third-party services that may set their own cookies. These services include:
                </p>
                <div className="bg-base-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-base-content mb-2">Widget Script (widgets.proofio.app)</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Loading and displaying review widgets</li>
                    <li><strong>Cookies:</strong> May use cookies for widget functionality and performance</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                  </ul>
                </div>
                <p className="text-base-content/70 text-sm">
                  We do not currently use third-party advertising or marketing cookies. If this changes in the future, we will update this policy and notify users.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Managing Your Cookie Preferences</h2>
                <p className="text-base-content/80 mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.
                </p>
                <p className="text-base-content/80 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your ability to use certain features of our Service.
                </p>
                <p className="text-base-content/80 mb-4">
                  Here are links to cookie settings for popular browsers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">6. Do Not Track Signals</h2>
                <p className="text-base-content/80 mb-4">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted, so we do not respond to DNT signals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Changes to This Cookie Policy</h2>
                <p className="text-base-content/80 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Contact Us</h2>
                <p className="text-base-content/80 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

