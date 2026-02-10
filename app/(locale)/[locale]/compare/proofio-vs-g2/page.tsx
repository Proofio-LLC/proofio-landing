'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ComparisonLayout from '@/app/components/ComparisonLayout';
import Link from 'next/link';

const competitor = {
  slug: 'g2',
  name: 'G2',
};

const comparison = {
  title: 'Proofio vs G2',
  summary: 'Compare Proofio with G2 for review management, AI analysis, and integrations.',
  proofio: {
    pros: [
      'Advanced AI sentiment analysis',
      'Multi-source aggregation (9+ platforms)',
      'Real-time custom alerts',
      'Competitor tracking',
      'Affordable pricing',
    ],
    cons: ['Newer product than incumbents'],
  },
  competitor: {
    pros: [
      'Established brand',
      'Market presence',
    ],
    cons: [
      'Limited AI capabilities',
      'Higher pricing',
      'Limited multi-source integration',
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ComparisonChart',
  name: comparison.title,
  description: comparison.summary,
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="px-6 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <p className="text-sm font-semibold text-[#02BB7E]">Comparison</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {comparison.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {comparison.summary}
          </p>
        </div>

        <ComparisonLayout
          leftTitle="Proofio"
          rightTitle={competitor.name}
          left={comparison.proofio}
          right={comparison.competitor}
        />

        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to see Proofio in action?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Get AI-powered review management with multi-source aggregation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app/signup"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#02BB7E] text-white font-semibold rounded-lg hover:bg-[#00a86b] transition"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#02BB7E] text-[#02BB7E] font-semibold rounded-lg hover:bg-[#f0fdf9] transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
