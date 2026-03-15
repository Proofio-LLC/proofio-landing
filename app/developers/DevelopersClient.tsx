"use client";

import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Cpu,
  Activity,
  ExternalLink,
  Check,
  Copy,
  ArrowRight,
  ShieldCheck,
  Zap,
  Package,
  FileCode2,
  BookOpen,
  Github,
  GitBranch,
  Layers
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DevelopersPage() {
  const [npmCopied, setNpmCopied] = useState(false);

  const copyNpm = async () => {
    await navigator.clipboard.writeText('npm install proofio-sdk');
    setNpmCopied(true);
    setTimeout(() => setNpmCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-base-100 selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Proofio Developer Hub - API & SDK Documentation",
            "description": "Comprehensive guide for integrating Proofio's review intelligence API and TypeScript SDK into your applications.",
            "image": "https://proofio.app/og-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "Proofio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Proofio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://proofio.app/favicon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://proofio.app/developers"
            }
          })
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Terminal className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Developer Hub</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                Build with <br />
                <span className="text-primary text-glow">Review Data</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/60 mb-10 leading-relaxed max-w-2xl">
                Access verified review intelligence directly in your apps. Use our robust API or the official SDK to integrate cross-platform feedback.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://docs.proofio.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg rounded-2xl px-10 shadow-lg shadow-primary/20 bg-base-content text-base-100 border-none hover:bg-base-content/90 w-full sm:w-auto"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Documentation
                </a>
                <Link 
                  href="/status" 
                  className="btn btn-ghost btn-lg rounded-2xl px-10 border border-base-300 hover:bg-base-200 w-full sm:w-auto"
                >
                  <Activity className="w-5 h-5 mr-2" />
                  API Status
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 max-w-2xl"
            >
              <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 shadow-2xl border border-white/5 relative group overflow-hidden">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                  </div>
                  <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">typescript sdk</div>
                </div>

                <div className="space-y-4 md:y-6">
                  <div className="bg-slate-800/50 rounded-xl p-3 md:p-4 flex items-center justify-between group/cmd">
                    <code className="text-emerald-400 font-mono text-xs md:text-sm truncate mr-2">npm install proofio-sdk</code>
                    <button 
                      onClick={copyNpm}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white shrink-0"
                    >
                      {npmCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <pre className="text-xs md:text-base leading-relaxed overflow-x-auto no-scrollbar">
                    <code className="text-blue-300 font-mono">
{`import { Proofio } from 'proofio-sdk';

const proofio = new Proofio({ 
  apiKey: 'your_secret_key' 
});

// Get global review summary
const insights = await proofio.insights.get();

console.log(insights.averageRating);`}
                    </code>
                  </pre>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-24 bg-base-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Integration Options</h2>
            <p className="text-lg text-base-content/60">Choose the way you want to work with our data.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* API Block */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base-100 p-8 md:p-12 rounded-[2.5rem] border border-base-300 shadow-sm flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">REST API</h3>
              <p className="text-base-content/60 mb-8 leading-relaxed flex-grow">
                Our standard REST API allows you to pull review data, trends, and aggregates into any environment. Perfect for custom dashboards, internal tools, or data pipelines.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  JSON Response Format
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  Bearer Token Auth
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  Rate-limited for stability
                </li>
              </ul>
              <a 
                href="https://docs.proofio.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-xl group"
              >
                Explore Endpoints
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* SDK Block */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base-100 p-8 md:p-12 rounded-[2.5rem] border border-base-300 shadow-sm flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Official SDK</h3>
              <p className="text-base-content/60 mb-8 leading-relaxed flex-grow">
                The fastest way to get started. Our TypeScript-first SDK provides full type safety, auto-completion, and simplified methods for all common operations.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  Full TypeScript Support
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  Zero dependencies
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check className="w-4 h-4 text-success" />
                  Optimized for performance
                </li>
              </ul>
              <a href="https://npmjs.com/package/proofio-sdk" target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-xl group">
                View on NPM
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-24 bg-base-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
              <Github className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Open Source</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Examples & Integrations
            </h2>
            <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
              Find ready-to-use code for every major language and framework — maintained openly on GitHub.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Integrations Repo */}
            <motion.a
              href="https://github.com/Proofio-LLC/proofio-integrations"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -4 }}
              className="bg-base-100 p-8 rounded-[2rem] border border-base-300 shadow-sm flex flex-col gap-5 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">proofio-integrations</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  Official examples for JavaScript, TypeScript, React, Next.js, Python, PHP, Ruby, and embeddable widgets for HTML, Shopify, and WordPress.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                View on GitHub <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            {/* SDK on npm */}
            <motion.a
              href="https://npmjs.com/package/proofio-sdk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-base-100 p-8 rounded-[2rem] border border-base-300 shadow-sm flex flex-col gap-5 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">proofio-sdk</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  The official TypeScript SDK on npm. Full type safety, zero dependencies, automatic retries, and support for all public API endpoints.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                View on npm <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            {/* GitHub Org */}
            <motion.a
              href="https://github.com/Proofio-LLC"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-base-100 p-8 rounded-[2rem] border border-base-300 shadow-sm flex flex-col gap-5 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Proofio-LLC on GitHub</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  Browse all public repositories, report issues, follow releases, and contribute to the Proofio open-source ecosystem.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Open GitHub <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Enterprise-Grade Security</h2>
          <p className="text-xl text-base-content/60 leading-relaxed">
            All requests are authenticated via secure API keys. We use TLS 1.3 for all data in transit and follow industry best practices for data isolation and security.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
