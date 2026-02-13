import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Sparkles, Target, Users, Zap, Shield, BarChart3, Database, Globe, Smartphone, Code, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Proofio",
  description: "Learn about Proofio - Our mission to turn customer feedback into business intelligence.",
  openGraph: {
    title: "About Proofio - Our Mission and Values",
    description: "Discover how we're building the infrastructure for review intelligence.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">About Proofio</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-base-content mb-8 tracking-tight leading-[0.9]">
              Turn reviews into <span className="text-primary">intelligence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-base-content/60 max-w-2xl mx-auto font-medium leading-relaxed">
              We are building the infrastructure to transform fragmented customer feedback into structured, actionable business signals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Statement */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
              <div>
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Mission</h2>
                <p className="text-3xl md:text-4xl font-bold text-base-content mb-6 leading-tight">
                  We believe customer feedback should drive better products.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-base-content/70 leading-relaxed">
                Reviews are one of the most valuable sources of insight for any business, yet they remain fragmented and difficult to compare. Proofio transforms reviews into structured intelligence teams can trust.
                  </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">What We Do</h2>
                <p className="text-3xl md:text-5xl font-bold">Review intelligence layer</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Review intelligence",
                    desc: "We collect and unify reviews from major platforms into a single, consistent intelligence layer.",
                    icon: Target
                  },
                  {
                    title: "Data normalization",
                    desc: "All reviews are standardized to enable accurate comparison across sources.",
                    icon: Zap
                  },
                  {
                    title: "AI driven analysis",
                    desc: "We turn large volumes of feedback into summaries, insights, trends, and competitive signals.",
                    icon: Sparkles
                  },
                  {
                    title: "API and platform access",
                    desc: "Proofio provides both a powerful web platform and a full REST API to integrate review intelligence into any workflow.",
                    icon: Code
                  }
                ].map((item) => (
                  <div key={item.title} className="p-8 bg-base-200/50 rounded-[2rem] border border-base-200 hover:border-primary/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-base-content/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="sm:col-span-2 p-8 bg-primary text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">Decision support</h3>
                    <p className="text-white/80 text-lg max-w-2xl">
                      Our focus is not only on data, but on helping teams make better product, marketing, and business decisions based on real customer signals.
                    </p>
                  </div>
                  <BarChart3 className="absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-10 rotate-12" />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Values</h2>
                <p className="text-3xl md:text-5xl font-bold">Built on trust</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { name: "Simplicity", desc: "We turn complex feedback data into clear and understandable insights." },
                  { name: "Reliability", desc: "We prioritize data accuracy, stable synchronization, and platform trust." },
                  { name: "Flexibility", desc: "Proofio adapts to your workflows, tools, and technical environment." },
                  { name: "Transparency", desc: "We believe in honest communication, clear pricing, and straightforward terms." }
                ].map((value) => (
                  <div key={value.name} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                      <p className="text-base-content/60 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center bg-white rounded-[2.5rem] p-12 shadow-2xl border border-base-200">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Get in touch</h2>
              <p className="text-3xl font-bold mb-4">Want to learn more?</p>
              <p className="text-lg text-base-content/60 mb-10">We are always happy to connect.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@proofio.app"
                  className="btn btn-lg bg-primary text-white border-none hover:bg-primary/90 rounded-2xl px-10"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact support
                </a>
                <a
                  href="mailto:sales@proofio.app"
                  className="btn btn-lg btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-2xl px-10"
                >
                  Sales inquiry
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
