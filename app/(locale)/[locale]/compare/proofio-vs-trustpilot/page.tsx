'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { Star } from 'lucide-react';
import { getCompetitor } from '@/lib/data/comparisons';

export default function Page() {
  const competitor = getCompetitor('trustpilot');
  if (!competitor) return <div>Competitor not found</div>;

  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="Trustpilot Comparison"
      badgeIcon={Star}
      proofioSummary="Unified review intelligence beyond one channel."
      competitorSummary="Strong review presence with less operational depth."
      proofioFeatures={[
        'AI sentiment analysis and trend detection',
        'Aggregation across 9+ review sources',
        'Realtime issue and opportunity alerts',
        'Competitor tracking in one dashboard',
        'Actionable workflows for teams',
        'Transparent pricing without heavy add-ons',
      ]}
      proofioSide={{
        pros: ['Cross-platform coverage', 'Deep AI insights', 'Fast team workflows'],
        cons: ['Newer than long-established marketplaces'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}

