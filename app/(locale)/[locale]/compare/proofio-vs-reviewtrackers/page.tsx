'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { Radar } from 'lucide-react';

const competitor = {
  slug: 'reviewtrackers',
  name: 'ReviewTrackers',
  description: 'Head-to-head comparison of review aggregation, AI analysis, pricing, and integrations.',
  pricing: 'Custom enterprise pricing',
  website: 'https://www.reviewtrackers.com',
  pros: ['Mature reporting', 'Large market presence'],
  cons: ['Less AI-driven classification'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Proofio vs ${competitor.name}`,
  description: competitor.description,
};

export default function Page() {
  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="ReviewTrackers Comparison"
      badgeIcon={Radar}
      jsonLd={jsonLd}
      proofioSummary="Modern AI operations layer for review teams."
      competitorSummary="Established solution with traditional reporting focus."
      proofioFeatures={[
        'AI summaries with direct next actions',
        'App Store and Google Play integrations included',
        'Embeddable widgets for social proof flows',
        'Realtime monitoring across channels',
        'Developer-ready API and automation options',
        'Enterprise-ready controls without heavy setup',
      ]}
      proofioSide={{
        pros: ['AI summaries', 'App Store & Google Play integrations', 'Embeddable widgets', 'Enterprise features'],
        cons: ['Newer product than incumbents'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}
