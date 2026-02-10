'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ComparisonLayout from '../../../../components/ComparisonLayout';

const competitor = {
  slug: 'reviewtrackers',
  name: 'ReviewTrackers',
};

const comparison = {
  title: 'Proofio vs ReviewTrackers',
  summary: 'Head-to-head comparison of review aggregation, AI analysis, pricing, and integrations.',
  proofio: {
    pros: ['AI summaries', 'App Store & Google Play integrations', 'Embeddable widgets', 'Enterprise features'],
    cons: ['Newer product than incumbents'],
  },
  competitor: {
    pros: ['Mature reporting', 'Large market presence'],
    cons: ['Less AI-driven classification'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: comparison.title,
  description: comparison.summary,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Proofio', description: comparison.proofio.pros.join('; ') },
      { '@type': 'ListItem', position: 2, name: competitor.name, description: comparison.competitor.pros.join('; ') },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="prose mx-auto p-6 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>{comparison.title}</h1>
      <p>{comparison.summary}</p>

      <ComparisonLayout leftTitle="Proofio" rightTitle={competitor.name} left={comparison.proofio} right={comparison.competitor} />
    </main>
      <Footer />
    </>
  );
}
