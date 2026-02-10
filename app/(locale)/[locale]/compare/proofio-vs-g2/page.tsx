'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { Award } from 'lucide-react';
import { getCompetitor } from '@/lib/data/comparisons';

export default function Page() {
  const competitor = getCompetitor('g2');
  if (!competitor) return <div>Competitor not found</div>;

  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="G2 Comparison"
      badgeIcon={Award}
      proofioSummary="Review intelligence for product and growth teams."
      competitorSummary="Strong software marketplace with less AI workflow depth."
      proofioFeatures={[
        'AI-based sentiment and trend intelligence',
        'Review aggregation beyond SaaS marketplaces',
        'Realtime alerts for critical issues',
        'Competitor signal tracking in context',
        'Faster routing from insight to action',
        'Clear pricing and onboarding path',
      ]}
      proofioSide={{
        pros: ['Cross-channel perspective', 'AI-first summarization', 'Action-oriented UX'],
        cons: ['Smaller legacy footprint than major marketplaces'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}
