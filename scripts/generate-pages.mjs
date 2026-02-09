import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the data
const integrationsData = [
  { slug: 'google-reviews', name: 'Google Reviews', setupTime: '< 5 minutes', difficulty: 'easy', capabilities: ['Real-time sync', 'AI sentiment analysis', 'Trend detection', 'Multi-location support', 'Response suggestions'] },
  { slug: 'trustpilot', name: 'Trustpilot', setupTime: '< 5 minutes', difficulty: 'easy', capabilities: ['Review synchronization', 'Sentiment analysis', 'Topic extraction', 'Custom alerts', 'Trend analysis'] },
  { slug: 'facebook-reviews', name: 'Facebook Reviews', setupTime: '10 minutes', difficulty: 'easy', capabilities: ['Auto-sync Facebook reviews', 'Sentiment analysis', 'Response templates', 'Multi-page management', 'Analytics'] },
  { slug: 'g2', name: 'G2', setupTime: '5 minutes', difficulty: 'easy', capabilities: ['Review monitoring', 'Rating trends', 'AI response suggestions', 'Competitor benchmarking', 'Custom reporting'] },
  { slug: 'app-store', name: 'App Store', setupTime: '5 minutes', difficulty: 'easy', capabilities: ['Real-time collection', 'Sentiment analysis', 'Issue detection', 'Version tracking', 'Auto-notification'] },
  { slug: 'google-play', name: 'Google Play', setupTime: '5 minutes', difficulty: 'easy', capabilities: ['Automatic collection', 'Sentiment analysis', 'Trend detection', 'Multi-app management', 'Issue identification'] },
  { slug: 'yelp', name: 'Yelp', setupTime: '10 minutes', difficulty: 'medium', capabilities: ['Review monitoring', 'Sentiment analysis', 'Response templates', 'Multi-location tracking', 'Rating analysis'] },
  { slug: 'amazon', name: 'Amazon', setupTime: '15 minutes', difficulty: 'medium', capabilities: ['Product review collection', 'Sentiment analysis', 'Feedback themes', 'Competitor analysis', 'Rating trends'] },
  { slug: 'csv-import', name: 'CSV Import', setupTime: '5 minutes', difficulty: 'easy', capabilities: ['Flexible CSV import', 'Bulk processing', 'Custom field mapping', 'Scheduled imports', 'Error handling'] },
  { slug: 'slack', name: 'Slack', setupTime: '2 minutes', difficulty: 'easy', capabilities: ['Real-time notifications', 'Custom alerts', 'Thread replies', 'Action buttons', 'Daily summaries'] },
  { slug: 'zapier', name: 'Zapier', setupTime: '10 minutes', difficulty: 'medium', capabilities: ['Multi-app automation', '5000+ integrations', 'Conditional logic', 'Data transformation', 'Error handling'] },
  { slug: 'make', name: 'Make', setupTime: '15 minutes', difficulty: 'medium', capabilities: ['Visual workflow builder', 'Advanced automation', 'Data mapping', 'Multi-step workflows', 'Real-time triggers'] },
];

const featuresData = [
  { slug: 'sentiment-analysis', name: 'Sentiment Analysis' },
  { slug: 'review-monitoring', name: 'Review Monitoring' },
  { slug: 'competitor-tracking', name: 'Competitor Tracking' },
  { slug: 'ai-summaries', name: 'AI-Powered Summaries' },
  { slug: 'multi-source-aggregation', name: 'Multi-Source Aggregation' },
  { slug: 'custom-alerts', name: 'Custom Alerts' },
  { slug: 'custom-reports', name: 'Custom Reports' },
  { slug: 'team-collaboration', name: 'Team Collaboration' },
];

function generateIntegrationPageContent(integration) {
  return `'use client';

import Link from 'next/link';

const integration = {
  name: '${integration.name}',
  slug: '${integration.slug}',
  setupTime: '${integration.setupTime}',
  capabilities: [
    ${integration.capabilities.map((cap) => `'${cap}'`).join(',\n    ')}
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: \`\${integration.name} Integration - Proofio\`,
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
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Setup time:</span>
            <span className="font-semibold text-gray-900">{integration.setupTime}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Key Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {integration.capabilities.map((cap) => (
              <div key={cap} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#02BB7E] bg-opacity-20">
                    <svg className="h-4 w-4 text-[#02BB7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-semibold">{cap}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#02BB7E] to-[#009a5c] rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to integrate {integration.name}?</h2>
          <p className="text-lg mb-8 opacity-90">Connect and start syncing reviews today.</p>
          <Link href="/app/signup" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#02BB7E] font-semibold rounded-lg hover:bg-gray-50 transition">
            Start Free Trial
          </Link>
        </div>
      </div>
    </main>
  );
}
`;
}

function generateFeaturePageContent(feature) {
  return `'use client';

import Link from 'next/link';

const feature = {
  name: '${feature.name}',
  slug: '${feature.slug}',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: \`\${feature.name} - Proofio\`,
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
            <p className="text-sm font-semibold text-[#02BB7E]">Feature</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {feature.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful {feature.name.toLowerCase()} capabilities for comprehensive review management.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Why {feature.name}?</h2>
          <p className="text-gray-600 text-lg mb-6">
            {feature.name} helps you better understand and manage your customer feedback across all platforms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#02BB7E] mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Improved Insights</h3>
                <p className="text-sm text-gray-600">Get actionable insights from customer feedback</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-[#02BB7E] mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Time Savings</h3>
                <p className="text-sm text-gray-600">Automate manual review management tasks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#02BB7E] to-[#009a5c] rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience {feature.name}</h2>
          <p className="text-lg mb-8 opacity-90">See how this feature can transform your review management.</p>
          <Link href="/app/signup" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#02BB7E] font-semibold rounded-lg hover:bg-gray-50 transition">
            Try Free for 14 Days
          </Link>
        </div>
      </div>
    </main>
  );
}

// Generate integration pages
const integrationsDir = path.join(__dirname, '../app/(locale)/[locale]/integrations');
integrationsData.forEach((integration) => {
  const dirPath = path.join(integrationsDir, integration.slug);
  const filePath = path.join(dirPath, 'page.tsx');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, generateIntegrationPageContent(integration));
  console.log('✓ ' + integration.slug + '/page.tsx');
});

// Generate feature pages
const featuresDir = path.join(__dirname, '../app/(locale)/[locale]/features');
featuresData.forEach((feature) => {
  const dirPath = path.join(featuresDir, feature.slug);
  const filePath = path.join(dirPath, 'page.tsx');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, generateFeaturePageContent(feature));
  console.log('✓ ' + feature.slug + '/page.tsx');
});

console.log('\n✓ Generated ' + integrationsData.length + ' integration pages and ' + featuresData.length + ' feature pages!');
