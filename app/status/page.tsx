"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Activity,
  Zap,
  RefreshCw,
  Cpu,
  Mail,
  LayoutDashboard,
  Lock,
  Search
} from "lucide-react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Maintenance {
  id: string;
  title: string;
  description: string;
  startTime: any;
  endTime: any;
  status: 'scheduled' | 'in_progress' | 'completed';
}

interface Incident {
  id: string;
  title: string;
  description: string;
  date: any;
  status: string;
}

export default function StatusPage() {
  const [maintenance, setMaintenance] = useState<Maintenance[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Maintenance
        const mq = query(
          collection(db, "maintenance"),
          where("status", "in", ["scheduled", "in_progress"]),
          orderBy("startTime", "asc"),
          limit(3)
        );
        const mSnapshot = await getDocs(mq);
        const mData = mSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Maintenance[];
        setMaintenance(mData);

        // Fetch Incidents
        const iq = query(
          collection(db, "incidents"),
          orderBy("date", "desc"),
          limit(10)
        );
        const iSnapshot = await getDocs(iq);
        const iData = iSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Incident[];
        setIncidents(iData);
      } catch (error) {
        console.error("Error fetching status data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const components = [
    { name: "API", status: "operational", icon: Zap },
    { name: "Review Sync Engine", status: "operational", icon: RefreshCw },
    { name: "AI Analysis Engine", status: "operational", icon: Cpu },
    { name: "Email Notifications", status: "operational", icon: Mail },
    { name: "Dashboard", status: "operational", icon: LayoutDashboard },
    { name: "Authentication", status: "operational", icon: Lock },
    { name: "Competitor Monitoring", status: "operational", icon: Search },
  ];

  const getLastFullHour = () => {
    const now = new Date();
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      timeZoneName: 'short', 
      hour12: false 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-success";
      case "degraded": return "text-warning";
      case "outage": return "text-error";
      default: return "text-base-content/50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational": return <CheckCircle2 className="w-5 h-5 text-success" />;
      case "degraded": return <AlertCircle className="w-5 h-5 text-warning" />;
      case "outage": return <XCircle className="w-5 h-5 text-error" />;
      default: return null;
    }
  };

  return (
    <main className="min-h-screen bg-base-100 selection:bg-primary/30">
      <Navigation />

      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Header & Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Transparency</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">System <span className="text-primary">Status</span></h1>
              <p className="text-xl text-base-content/60 max-w-md">Real-time monitoring and health metrics of the Proofio platform.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex bg-base-200/50 backdrop-blur-md p-1.5 rounded-[2rem] border border-base-300 shadow-inner"
            >
              <Link href="/status" className="px-8 py-3 bg-white text-primary font-bold rounded-2xl shadow-lg shadow-primary/5 border border-primary/5">Status</Link>
              <Link href="/changelog" className="px-8 py-3 text-base-content/40 font-bold hover:text-primary transition-all duration-300">Changelog</Link>
            </motion.div>
          </div>

          {/* Overall Status Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative mb-16"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-success/20 to-primary/20 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 border border-success/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-widest">All Services Live</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-success mb-6 tracking-tighter">Operational</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 text-base-content/40 font-bold uppercase tracking-widest text-[10px]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Last check: {getLastFullHour()}</span>
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-base-content/20 mt-1.5" />
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>System checked every hour</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-success/10 rounded-[2rem] flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-success" />
                </div>
                <p className="text-sm font-bold text-success/60 uppercase tracking-widest">Everything is fine</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Service Components (Left) */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-black mb-8 px-2 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Service Health
              </h3>
              <div className="grid gap-4">
                {components.map((comp, idx) => (
                  <motion.div 
                    key={comp.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl p-6 border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center text-base-content/30 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <comp.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-xl tracking-tight">{comp.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-black uppercase tracking-widest ${getStatusColor(comp.status)}`}>
                        {comp.status}
                      </span>
                      <div className={`p-2 rounded-full ${comp.status === 'operational' ? 'bg-success/10' : 'bg-warning/10'}`}>
                        {getStatusIcon(comp.status)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Planned Maintenance */}
              <div className="bg-base-200/50 rounded-[2.5rem] p-8 border border-base-300">
                <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  Maintenance
                </h3>
                {isLoading ? (
                  <div className="flex justify-center p-8">
                    <div className="loading loading-spinner text-primary"></div>
                  </div>
                ) : maintenance.length > 0 ? (
                  <div className="space-y-6">
                    {maintenance.map((m) => (
                      <div key={m.id} className="bg-white rounded-2xl p-6 border border-primary/10 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-primary">{m.title}</h4>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-full tracking-widest">{m.status}</span>
                        </div>
                        <p className="text-sm text-base-content/60 mb-4 line-clamp-2">{m.description}</p>
                        <div className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {m.startTime?.toDate().toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-base-content/40 italic text-center p-8 bg-white/50 rounded-2xl border border-dashed border-base-300">No upcoming maintenance.</p>
                )}
              </div>

              {/* Incident History Widget */}
              <div className="bg-base-200/50 rounded-[2.5rem] p-8 border border-base-300">
                <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-success" />
                  Incident History
                </h3>
                {isLoading ? (
                  <div className="flex justify-center p-8">
                    <div className="loading loading-spinner text-primary"></div>
                  </div>
                ) : incidents.length > 0 ? (
                  <div className="space-y-6">
                    {incidents.map((incident) => (
                      <div key={incident.id} className="bg-white rounded-2xl p-6 border border-success/10 shadow-sm group hover:border-success/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-success">{incident.title}</h4>
                          <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-black uppercase rounded-full tracking-widest">
                            {incident.status || "Resolved"}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60 mb-4 line-clamp-3 leading-relaxed">
                          {incident.description}
                        </p>
                        <div className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {incident.date?.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-white/50 rounded-2xl border border-dashed border-base-300">
                    <p className="text-sm text-base-content/40 font-medium italic">No recent incidents reported.</p>
                  </div>
                )}
              </div>

              {/* Notice Button Card */}
              <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20 border border-white/10">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                
                {/* Background Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 0.1, scale: 1, rotate: -15 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10 -right-10 pointer-events-none z-0"
                >
                  <img 
                    src="/favicon.png" 
                    alt="" 
                    className="w-48 h-48 object-contain brightness-0 invert"
                  />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Notice something wrong?</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed font-medium">
                    Report an issue directly to our engineers if you notice something unusual that isn't listed here.
                  </p>
                  <Link 
                    href="/help?subject=Issue Report" 
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10"
                  >
                    Report issue
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
