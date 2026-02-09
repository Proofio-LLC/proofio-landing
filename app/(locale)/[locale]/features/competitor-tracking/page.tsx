'use client';

import Link from 'next/link';

const feature = {
  name: 'Competitor Tracking',
  slug: 'competitor-tracking',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB]">
      <div className="px-6 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <p className="text-sm font-semibold text-[#02BB7E]">Feature</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {feature.name}
          </h1>
        </div>

        <div className="bg-gradient-to-br from-[#02BB7E] to-[#009a5c] rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience {feature.name}</h2>
          <Link href="/app/signup" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#02BB7E] font-semibold rounded-lg hover:bg-gray-50 transition">
            Try Free for 14 Days
          </Link>
        </div>
      </div>
    </main>
  );
}
