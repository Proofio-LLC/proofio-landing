'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Target } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Competitor Tracking"
      description="Monitor competitor ratings and sentiment to stay ahead."
      icon={Target}
      overviewTitle="Understand the market around your product"
      overviewParagraphs={[
        'You need context, not only your own score. Compare trends, sentiment shifts, and customer expectations against competitors.',
        'Proofio helps teams spot positioning opportunities and react earlier to market changes.',
      ]}
      benefits={[
        { title: 'Benchmarking', description: 'Compare ratings and sentiment side by side.' },
        { title: 'Trend visibility', description: 'Track competitor movement over time.' },
        { title: 'Topic signals', description: 'See where competitors are praised or criticized.' },
        { title: 'Faster strategy', description: 'Back decisions with real review intelligence.' },
        { title: 'Central view', description: 'Monitor all competitors in one dashboard.' },
        { title: 'Alerting', description: 'Get notified when competitive signals shift.' },
      ]}
      useCases={[
        'Product teams identify feature gaps from competitor complaints.',
        'Marketing teams refine positioning with evidence from review trends.',
        'Sales teams use competitive proof points in conversations.',
        'Leadership monitors category dynamics in one place.',
        'Customer success tracks where rivals outperform on support quality.',
      ]}
      ctaTitle="Track competitors with confidence"
      ctaText="Use market feedback signals to guide product and go-to-market decisions."
    />
  );
}
