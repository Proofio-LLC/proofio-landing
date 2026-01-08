"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Search as SearchIcon, Briefcase as BriefcaseIcon, MapPin as MapPinIcon, Clock as ClockIcon, ArrowRight as ArrowRightIcon, Filter as FilterIcon, ChevronDown as ChevronDownIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Engineering", value: "engineering" },
    { label: "Product", value: "product" },
    { label: "Marketing", value: "marketing" },
  ];

  const locations = [
    { label: "All Locations", value: "all" },
    { label: "Remote", value: "Remote" },
    { label: "US", value: "US" },
    { label: "Germany", value: "Germany" },
  ];

  const types = [
    { label: "All Types", value: "all" },
    { label: "Freelance", value: "Freelance" },
    { label: "Contract", value: "Contract" },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
      const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
      const matchesType = selectedType === "all" || job.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedType]);

  const FilterGroup = ({ label, options, activeValue, onChange }: any) => (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/40 ml-1">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: any) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeValue === opt.value
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-base-200 text-base-content/60 hover:bg-base-300"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full"
              >
                <BriefcaseIcon className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Careers</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-base-content mb-6 leading-tight"
              >
                Join the <span className="text-primary">Proofio</span> Team
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed"
              >
                Proofio primarily works with freelancers and independent contributors.
                We value clear communication, fair collaboration, and long-term partnerships.
              </motion.p>
            </div>

            {/* Search and Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-xl p-6 md:p-8 mb-12 border border-base-200 overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                {/* Search Row */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                  <div className="relative flex-grow">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                    <input
                      type="text"
                      placeholder="Search for positions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-5 rounded-2xl border-2 border-base-200 bg-base-100 text-lg text-base-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-all shadow-inner"
                    />
                  </div>
                  <button
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                    className={`flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold transition-all border-2 ${
                      isFiltersOpen 
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                        : "bg-white text-base-content/60 border-base-200 hover:border-primary/30"
                    }`}
                  >
                    <FilterIcon className="w-5 h-5" />
                    <span>Filters</span>
                    <motion.div
                      animate={{ rotate: isFiltersOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5" />
                    </motion.div>
                  </button>
                </div>

                {/* Filters Grid (Expandable) */}
                <AnimatePresence>
                  {isFiltersOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pt-6 border-t border-base-100">
                        <FilterGroup 
                          label="Category" 
                          options={categories} 
                          activeValue={selectedCategory} 
                          onChange={setSelectedCategory} 
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          <FilterGroup 
                            label="Location" 
                            options={locations} 
                            activeValue={selectedLocation} 
                            onChange={setSelectedLocation} 
                          />
                          <FilterGroup 
                            label="Employment Type" 
                            options={types} 
                            activeValue={selectedType} 
                            onChange={setSelectedType} 
                          />
                        </div>
                        
                        {/* Active Filters Summary / Clear Button */}
                        {(selectedCategory !== "all" || selectedLocation !== "all" || selectedType !== "all") && (
                          <div className="pt-4 flex justify-end">
                            <button
                              onClick={() => {
                                setSelectedCategory("all");
                                setSelectedLocation("all");
                                setSelectedType("all");
                              }}
                              className="text-sm font-bold text-primary hover:underline"
                            >
                              Reset Filters
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Job List */}
            <div className="space-y-4 mb-20">
              <div className="flex items-center justify-between mb-6 px-4">
                <h3 className="text-xl font-bold text-base-content">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} found
                </h3>
              </div>
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link 
                        href={`/careers/${job.id}`}
                        className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-base-200 hover:shadow-2xl hover:border-primary/30 transition-all cursor-pointer"
                      >
                        <div className="flex-grow">
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-lg text-[10px] font-bold uppercase tracking-widest">
                              <MapPinIcon className="w-3 h-3" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-base-200 text-base-content/60 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                              <ClockIcon className="w-3 h-3" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-base-200 text-base-content/60 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                              <BriefcaseIcon className="w-3 h-3" />
                              {job.category}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-base-content group-hover:text-primary transition-colors mb-2">
                            {job.title}
                          </h2>
                          <p className="text-base-content/60 text-base line-clamp-1 max-w-2xl">
                            {job.description}
                          </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-end">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-lg">
                            <ArrowRightIcon className="w-6 h-6" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-base-300 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6 text-base-content/30">
                      <BriefcaseIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-base-content mb-2">No matching positions found</h3>
                    <p className="text-base-content/60">Try adjusting your search or filter settings.</p>
                    <button 
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedLocation("all");
                        setSelectedType("all");
                        setSearchQuery("");
                      }}
                      className="mt-6 text-primary font-bold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Don’t see a perfect fit?
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  We’re always interested in connecting with talented people who share our passion for building calm, reliable, and product-focused software.
                </p>
                <a
                  href="mailto:support@proofio.app?subject=Speculative Application"
                  className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
                >
                  Send a Speculative Application
                  <ArrowRightIcon className="w-5 h-5" />
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
