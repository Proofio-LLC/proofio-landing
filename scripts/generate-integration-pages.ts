/**
 * Script to generate all integration pages
 * Run with: npx ts-node scripts/generate-integration-pages.ts
 */

import fs from 'fs';
import path from 'path';
import { integrations } from '../lib/data/integrations';

const integrationsDir = path.join(
  __dirname,
  '../app/(locale)/[locale]/integrations'
);

// Ensure directory exists
if (!fs.existsSync(integrationsDir)) {
  fs.mkdirSync(integrationsDir, { recursive: true });
}

function generatePageContent(integration: typeof integrations[0]): string {
  return `'use client';

import Link from 'next/link';

const integration = {
  name: '${integration.name}',
  slug: '${integration.slug}',
  icon: '${integration.icon}',
  description: '${integration.description}',
  capabilities: [
    ${integration.capabilities.map((cap) => `'${cap}'`).join(',\n    ')}
  ],
  setupTime: '${integration.setupTime}',
  difficulty: '${integration.difficulty}',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: \`\${integration.name} Integration - Proofio\`,
  description: integration.description,
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="px-6 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <p className="text-sm font-semibold text-[#02BB7E]">Integration</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {integration.name} Integration
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {integration.description}
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Setup time:</span>
            <span className="font-semibold text-gray-900">{integration.setupTime}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Key Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {integration.capabilities.map((cap: string) => (
              <div key={cap} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#02BB7E] bg-opacity-20">
                    <svg
                      className="h-4 w-4 text-[#02BB7E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#02BB7E] to-[#009a5c] rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Start integrating {integration.name} with Proofio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app/signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#02BB7E] font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
}

// Generate pages for all integrations
integrations.forEach((integration) => {
  const dirPath = path.join(integrationsDir, integration.slug);
  const filePath = path.join(dirPath, 'page.tsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write page file
  const content = generatePageContent(integration);
  fs.writeFileSync(filePath, content);
  console.log(`✓ Generated: ${integration.slug}/page.tsx`);
});

console.log(`\n✓ Successfully generated ${integrations.length} integration pages!`);
