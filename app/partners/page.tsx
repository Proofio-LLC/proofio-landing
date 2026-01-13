"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, Users, DollarSign, TrendingUp, Mail, ExternalLink, Handshake, Store, Zap, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const otherPartnershipTypes = [
  {
    title: "Reseller Program",
    description: "Become an official Proofio reseller and offer our service as part of your portfolio.",
    icon: Store,
  },
  {
    title: "Strategic Partnership",
    description: "For larger companies and platforms looking to integrate Proofio into their solution.",
    icon: Handshake,
  },
  {
    title: "Integration Partnership",
    description: "Develop integrations with Proofio and expand your ecosystem.",
    icon: Zap,
  },
  {
    title: "Enterprise Partnership",
    description: "Custom partnership models for enterprise customers and large organizations.",
    icon: Building2,
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Handshake className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Partners</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-base-content">
                Become a Proofio Partner
              </h1>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Expand your offering and earn with Proofio. We offer various partnership models for agencies, consultants, and businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Affiliate Program</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content leading-tight">
                Earn 10% recurring commission
              </p>
            </div>

            <div className="space-y-6 mb-16">
              <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">10% recurring commission</h3>
                <p className="text-base-content/60 leading-relaxed">
                  Earn 10% commission on all recurring payments from customers you refer to Proofio. Commissions are automatically calculated and paid out.
                </p>
              </div>

              <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy integration</h3>
                <p className="text-base-content/60 leading-relaxed">
                  Simple tracking links, automatic commissions, and a clear dashboard for your performance. No complicated setup required.
                </p>
              </div>

              <div className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer-friendly</h3>
                <p className="text-base-content/60 leading-relaxed">
                  Your customers receive 10% discount on their first payment. A win-win situation for everyone – you earn, your customers save.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to start earning?
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  Join our affiliate program and start earning commissions today. Access your dashboard, track referrals, and manage your earnings.
                </p>
                <Link
                  href="https://affiliate.proofio.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
                >
                  Go to Affiliate Portal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              {/* Background Decoration */}
              <div 
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-10 rotate-12"
                style={{
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Partnership Types Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Other Partnerships</h2>
              <p className="text-3xl md:text-4xl font-bold text-base-content">
                Looking for a different partnership?
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {otherPartnershipTypes.map((partnership, index) => {
                const Icon = partnership.icon;
                return (
                  <div
                    key={partnership.title}
                    className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{partnership.title}</h3>
                    <p className="text-base-content/60 leading-relaxed">{partnership.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Interested in partnering with us?
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  Reach out to our sales team and let&apos;s discuss the best partnership solution for you.
                </p>
                <a
                  href="mailto:sales@proofio.app"
                  className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Background Decoration */}
              <div 
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-10 rotate-12"
                style={{
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
