"use client";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Briefcase, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Engineering", value: "engineering" },
    { label: "Product", value: "product" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">CAREERS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
                Join the Proofio Team
              </h1>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                We're building the future of review aggregation
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8 mb-8">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-base-300 bg-base-100 text-base-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center text-sm text-base-content/60 font-medium">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter:
                </span>
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedFilter === filter.value
                        ? "bg-primary text-white shadow-md"
                        : "bg-base-200 text-base-content/70 hover:bg-base-300"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* No Open Positions Message */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                  No Open Positions at the Moment
                </h2>
                <p className="text-lg text-base-content/70 mb-8">
                  We're currently not actively hiring, but we're always interested in connecting with talented individuals who share our passion for building great products.
                </p>
                <p className="text-base text-base-content/70 mb-8">
                  If you're excited about review aggregation, API-first development, or want to be part of a team that's transforming how businesses handle customer feedback, feel free to reach out. We'll keep your information on file for future opportunities.
                </p>
                <div className="pt-8 border-t border-base-300">
                  <p className="text-base-content/70 mb-6">
                    Send us your resume and a brief note about why you're interested in Proofio:
                  </p>
                  <a
                    href="mailto:support@proofio.app?subject=Career Inquiry"
                    className="inline-flex items-center gap-2 rounded-lg px-8 py-3 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all font-medium"
                  >
                    Get in Touch
                  </a>
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
