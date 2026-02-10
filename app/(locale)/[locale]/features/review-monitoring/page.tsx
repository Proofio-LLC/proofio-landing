'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Eye } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Review Monitoring"
      description="Stay on top of customer feedback with realtime tracking."
      icon={Eye}
      overviewTitle="Realtime review intelligence"
      overviewParagraphs={[
        'Review monitoring keeps your team aware of what customers are saying across channels as it happens.',
        'From positive momentum to urgent negative feedback, Proofio helps you see, prioritize, and respond quickly.',
      ]}
      benefits={[
        { title: 'Realtime sync', description: 'Receive new reviews immediately.' },
        { title: 'Central dashboard', description: 'Monitor all sources from one place.' },
        { title: 'Cross-platform coverage', description: 'Track all integrated channels at once.' },
        { title: 'Smart filtering', description: 'Focus by source, rating, topic, or date.' },
        { title: 'Auto aggregation', description: 'Combine and normalize review streams.' },
        { title: 'Change alerts', description: 'Track meaningful shifts as they happen.' },
      ]}
      useCases={[
        'Support teams identify urgent customer issues in minutes.',
        'PR teams monitor brand perception in realtime.',
        'Product managers detect regression patterns after releases.',
        'QA teams spot bug reports from public reviews quickly.',
        'Growth teams measure campaign impact on sentiment.',
      ]}
      ctaTitle="Never miss a customer review"
      ctaText="Get realtime visibility across all review channels your team depends on."
    />
  );
}
