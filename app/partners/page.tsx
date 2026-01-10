"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users, Sparkles, Code, ArrowRight, Mail, Zap, CheckCircle2 } from "lucide-react";
import CardSwap, { Card } from '@/app/components/CardSwap';

const partnershipTypes = [
  {
    title: "Technology",
    desc: "Integrate review intelligence directly into your product or platform via API.",
    icon: Code,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Agency",
    desc: "Enhance your client services and reports with powerful review analytics.",
    icon: Users,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Reseller",
    desc: "Expand your portfolio by reselling Proofio as a standalone solution.",
    icon: TrendingUp,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Strategic",
    desc: "Collaborate with us on long-term product, data, or market initiatives.",
    icon: Sparkles,
    color: "bg-amber-500/10 text-amber-600"
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-base-100">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm"
            >
              <Handshake className="w-4 h-4" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Partner Program</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black mb-8 text-base-content leading-tight tracking-tight"
            >
              Let&apos;s work <span className="text-primary">together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-base-content/70 leading-relaxed font-medium max-w-2xl mx-auto mb-10"
            >
              Proofio is built on collaboration. Join our network and help teams transform reviews into structured business intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="mailto:sales@proofio.app" 
                className="btn btn-lg bg-primary text-white border-none hover:bg-primary/90 rounded-2xl px-10 gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                href="#partnership-models" 
                className="btn btn-lg btn-ghost text-base-content border-2 border-base-300 hover:bg-base-200 rounded-2xl px-10"
              >
                Explore Models
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Models & Why Section */}
      <section id="partnership-models" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-base-content leading-tight">
                Why partner <br />with{' '}
                <Image
                  src="/logo.svg"
                  alt="Proofio"
                  width={200}
                  height={50}
                  className="inline-block h-8 md:h-12 w-auto mb-1 md:mb-2 align-middle"
                />
              </h2>
              <div className="space-y-5">
                {[
                  "Build on trusted review intelligence",
                  "Expand your product or service offering",
                  "Create new revenue opportunities",
                  "Offer real business value to your customers",
                  "Work with a focused and modern B2B platform"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
              </div>
                    <span className="text-lg font-medium text-base-content/70">{item}</span>
            </div>
                ))}
              </div>
            </motion.div>

            {/* Right: CardSwap Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end translate-y-12"
            >
              <div style={{ height: '500px', width: '100%', position: 'relative' }} className="flex justify-center lg:justify-end items-center">
                <CardSwap
                  width={380}
                  height={280}
                  cardDistance={40}
                  verticalDistance={50}
                  delay={5000}
                  pauseOnHover={true}
                >
                  {partnershipTypes.map((item) => (
                    <Card key={item.title} className="bg-white rounded-[2rem] p-8 border border-base-200 shadow-2xl flex flex-col justify-center text-center">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="w-7 h-7" />
                </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-base-content leading-tight">{item.title}</h3>
                      <p className="text-sm text-base-content/60 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
              </div>
            </div>
      </section>

      {/* Apply Section */}
      <section className="py-24 bg-base-200/30 border-y border-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-base-content mb-6">
              Ready to collaborate?
                </h2>
            <p className="text-xl text-base-content/60 mb-10 font-medium">
              Join our network and build sustainable review intelligence together.
                </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="mailto:sales@proofio.app"
                className="btn btn-lg bg-primary text-white border-none hover:bg-primary/90 rounded-2xl px-10 gap-3 shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                <Mail className="w-5 h-5" />
                Apply for partnership
                <ArrowRight className="w-5 h-5" />
                  </a>
              <a 
                href="mailto:sales@proofio.app?subject=Partnership Information Request" 
                className="group flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-all"
                  >
                Request information
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
