"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { jobs } from "@/lib/jobs";
import { notFound, useParams } from "next/navigation";
import { 
  ArrowLeft as ArrowLeftIcon, 
  MapPin as MapPinIcon, 
  Clock as ClockIcon, 
  Briefcase as BriefcaseIcon,
  Check as CheckIcon,
  Send as SendIcon
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ApplyModal from "@/app/components/ApplyModal";

export default function JobDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const job = jobs.find((j) => j.id === id);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              <Link 
                href="/careers"
                className="inline-flex items-center gap-3 text-base-content/50 hover:text-primary font-bold transition-all group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-base-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </div>
                <span>Back to positions</span>
              </Link>
            </motion.div>

            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-8 md:p-14 shadow-xl border border-base-200 mb-10 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 pointer-events-none opacity-[0.03] rotate-45"
                style={{
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-xl text-xs font-bold uppercase tracking-widest">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-base-200 text-base-content/60 rounded-xl text-xs font-bold uppercase tracking-widest">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-base-content mb-10 leading-tight">
                  {job.title}
                </h1>

                <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between pt-10 border-t border-base-100">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                      <BriefcaseIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] text-base-content/40 font-bold uppercase tracking-widest mb-1">Department</p>
                      <p className="text-xl font-bold text-base-content capitalize">{job.category}</p>
                    </div>
                  </div>
                  
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white hover:bg-primary/90 px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Apply for this position</span>
                  <SendIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

            {/* Content Sections */}
            <div className="space-y-10 mb-20">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 md:p-14 shadow-lg border border-base-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-10 bg-primary rounded-full" />
                  <h2 className="text-3xl font-bold text-base-content">About Proofio</h2>
                </div>
                <p className="text-xl text-base-content/70 leading-relaxed font-medium">
                  {job.about}
                </p>
              </motion.div>

              {/* What you'll do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 md:p-14 shadow-lg border border-base-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-10 bg-primary rounded-full" />
                  <h2 className="text-3xl font-bold text-base-content">What you&apos;ll do</h2>
                </div>
                <div className="grid gap-4">
                  {job.whatYouWillDo.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 p-6 rounded-2xl bg-base-100/50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                        <CheckIcon className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-lg text-base-content/80 font-medium leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements & Nice to Have */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border border-base-200"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-base-content">Requirements</h2>
                  </div>
                  <ul className="space-y-5">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-base-content/70 font-medium leading-snug">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border border-base-200"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-8 bg-base-300 rounded-full" />
                    <h2 className="text-2xl font-bold text-base-content">Nice to have</h2>
                  </div>
                  <ul className="space-y-5">
                    {job.niceToHave.map((nice, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-base-content/60 font-medium leading-snug">
                        <div className="w-2 h-2 rounded-full bg-base-300 mt-2.5 flex-shrink-0" />
                        {nice}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Apply Footer Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Interested in this role?</h2>
                  <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    Send us your application including your portfolio, resume, or GitHub profile. We look forward to hearing from you!
                  </p>
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="inline-flex items-center gap-4 bg-white text-primary hover:bg-white/95 px-14 py-5 rounded-2xl font-bold shadow-2xl transition-all text-xl active:scale-95"
                  >
                    Apply Now
                    <SendIcon className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Background Decoration */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute -bottom-20 -right-20 w-[500px] h-[500px] pointer-events-none z-0"
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
        </div>
      </section>

      <Footer />

      <ApplyModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={job.title}
        jobId={job.id}
      />
    </main>
  );
}
