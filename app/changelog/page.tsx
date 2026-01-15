"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Settings, 
  Bug, 
  Calendar, 
  Tag,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface ChangelogEntry {
  id: string;
  version: string;
  title?: string;
  description?: string;
  date?: any; // Timestamp (optional)
  underDevelopment?: boolean;
  added?: string[];
  improved?: string[];
  fixed?: string[];
}

export default function ChangelogPage() {
  const [updates, setUpdates] = useState<ChangelogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const querySnapshot = await getDocs(collection(db, "changelog"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ChangelogEntry[];
        
        // Sort: underDevelopment entries first, then by date desc
        data.sort((a, b) => {
          // Under development entries come first
          if (a.underDevelopment && !b.underDevelopment) return -1;
          if (!a.underDevelopment && b.underDevelopment) return 1;
          
          // If both have same underDevelopment status, sort by date
          const dateA = a.date?.toDate?.() || a.date || new Date(0);
          const dateB = b.date?.toDate?.() || b.date || new Date(0);
          return dateB.getTime() - dateA.getTime();
        });
        
        setUpdates(data);
      } catch (error) {
        console.error("Error fetching changelog:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChangelog();
  }, []);

  return (
    <main className="min-h-screen bg-base-100 selection:bg-primary/30">
      <Navigation />

      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Header & Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Tag className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Evolution</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">Change<span className="text-primary">log</span></h1>
              <p className="text-xl text-base-content/60 max-w-md">Chronicle of our journey to build the ultimate review intelligence platform.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex bg-base-200/50 backdrop-blur-md p-1 md:p-1.5 rounded-[1.5rem] md:rounded-[2rem] border border-base-300 shadow-inner w-full md:w-auto"
            >
              <Link href="/status" className="flex-1 md:flex-none px-4 py-2 md:px-8 md:py-3 text-base-content/40 text-sm md:text-base font-bold hover:text-primary transition-all duration-300 text-center">Status</Link>
              <Link href="/changelog" className="flex-1 md:flex-none px-4 py-2 md:px-8 md:py-3 bg-white text-primary text-sm md:text-base font-bold rounded-xl md:rounded-2xl shadow-lg shadow-primary/5 border border-primary/5 text-center">Changelog</Link>
            </motion.div>
          </div>

          <div className="space-y-24">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-32 bg-white border border-dashed border-base-300 rounded-[3rem] shadow-sm">
                <div className="loading loading-spinner loading-lg text-primary mb-6"></div>
                <p className="text-xl font-bold text-base-content/40 tracking-tight">Synchronizing history...</p>
              </div>
            ) : updates.length > 0 ? (
              updates.map((update, idx) => (
                <motion.div 
                  key={update.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="grid lg:grid-cols-4 gap-12">
                    {/* Date Sidebar (Left) */}
                    <div className="lg:col-span-1">
                      <div className="sticky top-32">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black">
                            {update.version.split('.')[0]}
                          </div>
                          <span className="text-2xl font-black tracking-tighter">{update.version}</span>
                        </div>
                        {update.underDevelopment && (
                          <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 rounded-full uppercase tracking-wider">
                              Under Development
                            </span>
                          </div>
                        )}
                        {update.date && (
                          <div className="flex items-center gap-2 text-base-content/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
                            <Calendar className="w-3.5 h-3.5" />
                            {update.date.toDate ? update.date.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content (Right) */}
                    <div className="lg:col-span-3">
                      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-base-200 shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                          <Tag className="w-64 h-64 -rotate-12" />
                        </div>
                        
                        <div className="grid gap-12 relative z-10">
                          {/* Title & Description */}
                          {(update.title || update.description) && (
                            <div className="space-y-4">
                              {update.title && (
                                <h2 className="text-3xl font-black tracking-tight text-base-content">
                                  {update.title}
                                </h2>
                              )}
                              {update.description && (
                                <p className="text-lg text-base-content/60 leading-relaxed font-medium">
                                  {update.description}
                                </p>
                              )}
                            </div>
                          )}

                          {/* Added */}
                          {update.added && update.added.length > 0 && (
                            <div className="space-y-6">
                              <h3 className="text-xl font-black flex items-center gap-3 text-emerald-600">
                                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                                  <Plus className="w-5 h-5" />
                                </div>
                                Added
                              </h3>
                              <ul className="grid gap-4">
                                {update.added.map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 text-base-content/70 leading-relaxed font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Improved */}
                          {update.improved && update.improved.length > 0 && (
                            <div className="space-y-6">
                              <h3 className="text-xl font-black flex items-center gap-3 text-blue-600">
                                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                                  <Settings className="w-5 h-5" />
                                </div>
                                Improved
                              </h3>
                              <ul className="grid gap-4">
                                {update.improved.map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 text-base-content/70 leading-relaxed font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Fixed */}
                          {update.fixed && update.fixed.length > 0 && (
                            <div className="space-y-6">
                              <h3 className="text-xl font-black flex items-center gap-3 text-amber-600">
                                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                                  <Bug className="w-5 h-5" />
                                </div>
                                Fixed
                              </h3>
                              <ul className="grid gap-4">
                                {update.fixed.map((item, i) => (
                                  <li key={i} className="flex items-start gap-4 text-base-content/70 leading-relaxed font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-20 text-center bg-white border border-dashed border-base-300 rounded-[3rem]">
                <p className="text-2xl font-bold text-base-content/30 italic">History is currently empty.</p>
              </div>
            )}
          </div>

          {/* Bottom CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 relative bg-primary rounded-[2.5rem] p-12 md:p-20 overflow-hidden shadow-2xl"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Background Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -bottom-20 -right-20 pointer-events-none z-0"
            >
              <img 
                src="/favicon.png" 
                alt="" 
                className="w-[400px] h-[400px] object-contain brightness-0 invert"
              />
            </motion.div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Ready to join the evolution?</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Ready to join the evolution?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-4 mb-10"
              >
                <p className="text-xl md:text-2xl font-semibold text-white">
                  Transform your customer feedback into clear business intelligence today.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link 
                  href="/#pricing" 
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-black rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-black/10"
                >
                  Start for free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/help" 
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white font-black rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  View Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
