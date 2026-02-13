import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Settings | Proofio - Manage Your Privacy Preferences",
  description: "Manage your cookie preferences for Proofio. Learn about the essential, session, and analytics cookies we use to provide a secure and efficient review intelligence service.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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

            <div className="prose prose-lg max-w-none bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">1. What Are Cookies?</h2>
                <p className="text-base-content/80 mb-4">
                  Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and improve user experience.
                </p>
                <p className="text-base-content/80">
                  Cookies may be persistent cookies, which remain on your device for a set period, or session cookies, which are deleted when you close your browser.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">2. How We Use Cookies</h2>
                <p className="text-base-content/80 mb-4">
                  Proofio LLC uses cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-4">
                  <li>Store your cookie consent preferences</li>
                  <li>Remember your language preference</li>
                  <li>Track affiliate referrals for partner attribution</li>
                  <li>Maintain session state and user settings</li>
                  <li>Ensure security and prevent abuse</li>
                  <li>Improve performance and usability of the Service</li>
                </ul>
                <p className="text-base-content/80">
                  Where required by law, cookies are only used after you provide consent via our cookie banner.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.1 Essential Cookies</h3>
                <p className="text-base-content/80 mb-4">
                  These cookies are strictly necessary for the operation of the Service and cannot be disabled.
                </p>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <p className="text-sm font-semibold text-base-content mb-2">Cookie: cookieConsent</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Stores your cookie consent preferences</li>
                    <li><strong>Type:</strong> Persistent</li>
                    <li><strong>Duration:</strong> 1 year</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                    <li><strong>Legal basis:</strong> Legitimate interest / legal obligation</li>
                  </ul>
                </div>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <p className="text-sm font-semibold text-base-content mb-2">Cookie: proofio_locale</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Stores your language preference for the website</li>
                    <li><strong>Type:</strong> Persistent</li>
                    <li><strong>Duration:</strong> 1 year</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                    <li><strong>Legal basis:</strong> Legitimate interest (user experience)</li>
                  </ul>
                </div>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <p className="text-sm font-semibold text-base-content mb-2">Cookie: proofio_affiliate_ref</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Tracks affiliate referrals for partner attribution</li>
                    <li><strong>Type:</strong> Persistent</li>
                    <li><strong>Duration:</strong> 30 days</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                    <li><strong>Legal basis:</strong> Legitimate interest (business operations)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.2 Session Cookies</h3>
                <p className="text-base-content/80 mb-4">
                  These cookies are temporary and deleted when you close your browser. They enable core functionality such as session handling and preference storage.
                </p>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Maintain session state and preferences</li>
                    <li><strong>Type:</strong> Session cookies</li>
                    <li><strong>Duration:</strong> Until browser is closed</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                    <li><strong>Legal basis:</strong> Legitimate interest</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-base-content mb-3 mt-6">3.3 Analytics Cookies (Optional)</h3>
                <p className="text-base-content/80 mb-4">
                  Analytics cookies help us understand how visitors use the Service. We use Vercel Analytics to understand how visitors interact with our Service. Vercel Analytics collects aggregated and anonymized usage data and does not use advertising cookies.
                </p>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Measure website usage and performance</li>
                    <li><strong>Type:</strong> First-party analytics cookies</li>
                    <li><strong>Provider:</strong> Vercel Inc.</li>
                    <li><strong>Legal basis:</strong> Consent</li>
                  </ul>
                </div>
                <p className="text-base-content/70 text-sm">
                  Analytics cookies are only set if you provide consent via our cookie banner.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">4. Third-Party Services</h2>
                <p className="text-base-content/80 mb-4">
                  Our Service may load functionality provided by Proofio-operated services, such as:
                </p>
                <div className="bg-base-200 rounded-xl p-6 mb-4 border border-base-300">
                  <p className="text-sm font-semibold text-base-content mb-2">Widget Script (widgets.proofio.app)</p>
                  <ul className="text-sm text-base-content/70 space-y-1 list-disc list-inside">
                    <li><strong>Purpose:</strong> Loading and displaying review widgets</li>
                    <li><strong>Cookies:</strong> Functional cookies for widget performance</li>
                    <li><strong>Provider:</strong> Proofio LLC</li>
                  </ul>
                </div>
                <p className="text-base-content/70 text-sm">
                  We do not use advertising or marketing cookies at this time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">5. Managing Your Cookie Preferences</h2>
                <p className="text-base-content/80 mb-4">
                  You can manage or withdraw your cookie consent at any time through your browser settings or via the cookie banner where available.
                </p>
                <p className="text-base-content/80 mb-4">
                  Please note that disabling certain cookies may affect the functionality of the Service.
                </p>
                <p className="text-base-content/80 mb-4">
                  Browser settings:
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
                  Some browsers offer a “Do Not Track” (DNT) signal. As there is no consistent industry standard for interpreting DNT signals, we do not currently respond to them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">7. Changes to This Cookie Policy</h2>
                <p className="text-base-content/80 mb-4">
                  We may update this Cookie Policy from time to time to reflect legal, technical, or business changes. Updates will be posted on this page with a revised date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-base-content mb-4">8. Contact</h2>
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

