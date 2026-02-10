'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { BadgeCheck } from 'lucide-react';
import { getCompetitor } from '@/lib/data/comparisons';

export default function Page() {
  const competitor = getCompetitor('provenexpert');
  if (!competitor) return <div>Competitor not found</div>;

  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="ProvenExpert Comparison"
      badgeIcon={BadgeCheck}
      proofioSummary="AI-driven operations for global review programs."
      competitorSummary="Regional strength with more limited AI workflows."
      proofioFeatures={[
        'AI-powered sentiment and topic extraction',
        'Coverage across key international review channels',
        'Realtime monitoring and escalation signals',
        'Competitor context in one dashboard',
        'Developer-friendly API and integrations',
        'Scalable setup for distributed teams',
      ]}
      proofioSide={{
        pros: ['Global source strategy', 'Actionable AI outputs', 'Modern dashboard UX'],
        cons: ['Younger market footprint in DACH'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}
