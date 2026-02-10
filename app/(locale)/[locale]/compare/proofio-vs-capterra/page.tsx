'use client';

import ComparePageTemplate from '@/app/components/ComparePageTemplate';
import { Target } from 'lucide-react';
import { getCompetitor } from '@/lib/data/comparisons';

export default function Page() {
  const competitor = getCompetitor('capterra');
  if (!competitor) return <div>Competitor not found</div>;

  return (
    <ComparePageTemplate
      competitorName={competitor.name}
      competitorDescription={competitor.description}
      competitorPricing={competitor.pricing}
      competitorWebsite={competitor.website}
      badgeLabel="Capterra Comparison"
      badgeIcon={Target}
      proofioSummary="More than SaaS listing visibility, built for review operations."
      competitorSummary="Useful for software discovery with narrower scope."
      proofioFeatures={[
        'AI summaries across all connected sources',
        'Cross-platform reputation tracking in one place',
        'Fast alerting for new risks and wins',
        'Competitor monitoring for positioning decisions',
        'Operational workflows, not only listing presence',
        'Predictable pricing for growing teams',
      ]}
      proofioSide={{
        pros: ['Multi-source intelligence', 'Operational workflows', 'Team-oriented reporting'],
        cons: ['Not focused only on marketplace lead gen'],
      }}
      competitorSide={{
        pros: competitor.pros,
        cons: competitor.cons,
      }}
    />
  );
}
