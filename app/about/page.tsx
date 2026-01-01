import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import { Sparkles, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Proofio",
  description: "Learn about Proofio - Our mission to simplify review aggregation and help businesses make data-driven decisions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/aboutbg.jpg"
                  alt="About Proofio"
                  fill
                  className="object-cover blur-sm scale-105"
                  priority
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-base-100/80 backdrop-blur-[2px]"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 w-full px-8 md:px-12 py-12 text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">ABOUT US</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  About Proofio
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Simplifying review aggregation for businesses worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="prose prose-lg max-w-none space-y-12">
              <section className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-base-content mb-4">Our Mission</h2>
                <p className="text-base-content/80 mb-4">
                  At Proofio, we believe that customer feedback is one of the most valuable assets a business can have. 
                  However, reviews are scattered across multiple platforms, making it difficult to get a complete picture 
                  of customer sentiment.
                </p>
                <p className="text-base-content/80">
                  Our mission is to empower businesses by aggregating reviews from all major platforms into a single, 
                  unified view. We help companies collect, normalize, and analyze reviews efficiently, enabling them to 
                  make data-driven decisions and improve their products and services.
                </p>
              </section>

              <section className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-base-content mb-6">What We Do</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-base-content mb-2">Review Aggregation</h3>
                      <p className="text-base-content/70">
                        Automatically collect and synchronize reviews from App Store, Google Play, Shopify, Google Reviews, and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-base-content mb-2">Data Normalization</h3>
                      <p className="text-base-content/70">
                        Transform fragmented reviews into a consistent, structured format that's easy to work with.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-base-content mb-2">API & Widgets</h3>
                      <p className="text-base-content/70">
                        Provide flexible integration options through REST APIs and embeddable widgets for any platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-base-content mb-2">Analytics & Insights</h3>
                      <p className="text-base-content/70">
                        Gain valuable insights with aggregated ratings, trends, and sentiment analysis across all sources.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-base-content mb-4">Our Values</h2>
                <ul className="space-y-4 text-base-content/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <div>
                      <strong className="text-base-content">Simplicity:</strong> We believe in making complex things simple. 
                      Our platform is designed to be intuitive and easy to use, regardless of technical expertise.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <div>
                      <strong className="text-base-content">Reliability:</strong> We understand that your review data is critical. 
                      That's why we prioritize uptime, data accuracy, and consistent synchronization.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <div>
                      <strong className="text-base-content">Flexibility:</strong> Every business is unique. Our API-first approach 
                      ensures that Proofio can be integrated into any workflow or platform.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <div>
                      <strong className="text-base-content">Transparency:</strong> We believe in clear communication, honest pricing, 
                      and straightforward terms. No hidden fees, no surprises.
                    </div>
                  </li>
                </ul>
              </section>

              <section className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-base-content mb-4">Get in Touch</h2>
                <p className="text-lg text-base-content/70 mb-6">
                  Have questions or want to learn more? We'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@proofio.app"
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all font-medium"
                  >
                    Contact Support
                  </a>
                  <a
                    href="mailto:sales@proofio.app"
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all font-medium"
                  >
                    Sales Inquiry
                  </a>
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

