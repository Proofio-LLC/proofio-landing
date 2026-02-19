'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import CTA from '@/app/components/CTA';
import { useLocaleContext } from '@/app/components/LocaleProvider';
import { 
  Bell, 
  LayoutDashboard, 
  FileText, 
  Smartphone, 
  ShieldCheck,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';

export default function IOSAppPage() {
  const { locale, messages } = useLocaleContext();
  const t = messages?.iosApp || {};
  
  const features = [
    {
      title: t.features?.[1]?.title || "Mobile Insights",
      description: t.features?.[1]?.description || "A quick overview of your projects, sentiment trends, and key metrics.",
      image: "/iosapp/home.png",
      icon: LayoutDashboard,
      color: "bg-green-500/10 text-green-600",
      rounded: "rounded-[2.5rem]"
    },
    {
      title: t.features?.[0]?.title || "Real-time Alerts",
      description: t.features?.[0]?.description || "Receive push notifications for critical reviews so you can react immediately.",
      image: "/iosapp/alerts.png",
      icon: Bell,
      color: "bg-green-500/10 text-green-600",
      rounded: "rounded-[2.5rem]"
    },
    {
      title: t.features?.[2]?.title || "Weekly Reports",
      description: t.features?.[2]?.description || "Detailed weekly summaries delivered directly to your iPhone.",
      image: "/iosapp/weekly-reports.png",
      icon: FileText,
      color: "bg-green-500/10 text-green-600",
      rounded: "rounded-[2.5rem]"
    }
  ];

  return (
    <>
      <Navigation locale={locale} messages={messages} />
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">{t.badge || "iOS APP"}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-base-content">
                  {t.title || "Your Review Intelligence, always in your pocket"}
                </h1>
                <p className="text-xl text-base-content/65 max-w-2xl mx-auto mb-10">
                  {t.description || "The Proofio iOS App is the perfect companion for on-the-go. Keep an eye on your reviews and insights, no matter where you are."}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 items-stretch sm:items-center">
                  <a 
                    href="https://ios.proofio.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl whitespace-nowrap"
                  >
                    <Image src="/apple.svg" alt="Apple" width={24} height={24} className="rounded-md" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-medium leading-none mb-1">{t.appStoreBadgePrefix || "Download on the"}</div>
                      <div className="text-lg leading-none">{t.appStoreBadgeStore || "App Store"}</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* What is the App Section */}
            <section className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 text-green-600 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Introduction</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">
                    {t.introTitle || "What is the Proofio App?"}
                  </h2>
                  <p className="text-xl text-base-content/65 mb-8 leading-relaxed">
                    {t.introDescription || "The Proofio App is your mobile command center for review intelligence. Designed as a powerful companion to the desktop platform, it brings the most critical insights directly to your fingertips without the noise of configuration."}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                   <Image 
                      src="/iosapp/apphome.png" 
                      alt="Proofio App Home" 
                      width={400} 
                      height={800} 
                      className="mx-auto drop-shadow-2xl rounded-[3rem]"
                    />
                </motion.div>
              </div>
            </section>

            {/* App Mockup Showcase (Features) */}
            <div className="relative max-w-5xl mx-auto mb-32">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black mb-4">{t.featuresTitle || "What it can do"}</h2>
                 <p className="text-xl text-base-content/60">{t.featuresDescription || "Powerful features designed for mobile intelligence."}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-full mb-8 group">
                      <Image 
                        src={feature.image} 
                        alt={feature.title} 
                        width={300}
                        height={600}
                        className={`mx-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ${feature.rounded}`}
                      />
                    </div>
                    <div className="text-center">
                      <div className={`inline-flex p-3 rounded-2xl mb-4 ${feature.color}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black mb-3 text-base-content">{feature.title}</h3>
                      <p className="text-base-content/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dashboard Harmony Section */}
            <section className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, order: 2 }}
                  whileInView={{ opacity: 1, order: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:order-2"
                >
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 text-green-600 rounded-full">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Synergy</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">
                    {t.harmonyTitle || "Seamless Dashboard Harmony"}
                  </h2>
                  <p className="text-xl text-base-content/65 mb-8 leading-relaxed">
                    {t.harmonyDescription || "Everything you set up on your desktop dashboard is instantly available on your iPhone. Your projects, sources, and custom filters stay perfectly in sync, allowing you to transition from deep analysis at your desk to quick monitoring on the go."}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:order-1"
                >
                   <Image 
                      src="/iosapp/dashboard.png" 
                      alt="Proofio App" 
                      width={400} 
                      height={800} 
                      className="mx-auto drop-shadow-2xl rounded-[3rem]"
                    />
                </motion.div>
              </div>
            </section>

            {/* Read-Only Focus Section */}
            <section className="mb-32">
              <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-base-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                  <Smartphone className="w-64 h-64 text-green-600" />
                </div>
                
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 text-green-600 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">{t.readOnlyTitle || "Focus on what matters"}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-base-content">
                    {t.readOnlyTitle || "Focus on what matters"}
                  </h2>
                  <p className="text-xl text-base-content/65 mb-8 leading-relaxed">
                    {t.readOnlyDescription || "The app is designed as a read-only tool. No complex configuration, just the data you need for quick decisions."}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base-content mb-1">{t.performanceTitle || "Fast Performance"}</h4>
                        <p className="text-sm text-base-content/60">{t.performanceDesc || "Lightweight and optimized for quick check-ins."}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base-content mb-1">{t.securityTitle || "Secure Access"}</h4>
                        <p className="text-sm text-base-content/60">{t.securityDesc || "Your data is protected with native iOS security."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <CTA locale={locale} messages={messages} />
          </div>
        </section>
        <Footer locale={locale} messages={messages} />
      </main>
    </>
  );
}
