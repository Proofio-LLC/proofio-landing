'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { Globe } from 'lucide-react';
import { getCompetitor } from '@/lib/data/comparisons';

export default function Page() {
  const competitor = getCompetitor('google-reviews');
  if (!competitor) return <div>Competitor not found</div>;

  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="Google Reviews Comparison"
      badgeIcon={Globe}
      proofioSummary="From one local channel to full review visibility."
      competitorSummary="Great native channel, limited multi-source depth."
      proofioFeatures={[
        'One view for App Store, Play Store, Trustpilot and more',
        'AI summaries instead of manual reading',
        'Automated response support for teams',
        'Benchmarking against competitors',
        'Alerts when sentiment shifts',
        'Scales from one project to many',
      ]}
      proofioSide={{
        pros: ['Beyond one platform', 'AI-first insights', 'Faster response operations'],
        cons: ['Requires setup of multiple sources'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}
