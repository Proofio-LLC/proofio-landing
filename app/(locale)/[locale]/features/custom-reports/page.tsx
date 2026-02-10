'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { BarChart3 } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Custom Reports"
      description="Generate stakeholder-ready reports tailored to your business."
      icon={BarChart3}
      overviewTitle="Turn review data into clear reporting"
      overviewParagraphs={[
        'Different stakeholders need different detail levels. Build reporting views that match product, support, leadership, or client requirements.',
        'Schedule and share consistent reports so decision-making stays aligned across teams.',
      ]}
      benefits={[
        { title: 'Flexible templates', description: 'Create report layouts for each audience.' },
        { title: 'Scheduled delivery', description: 'Automate recurring weekly or monthly reports.' },
        { title: 'Executive summaries', description: 'Highlight what changed and what to do next.' },
        { title: 'Visual clarity', description: 'Use charts and trend blocks that are easy to scan.' },
        { title: 'Brand consistency', description: 'Share polished reports across stakeholders.' },
        { title: 'Export options', description: 'Distribute insights where teams already work.' },
      ]}
      useCases={[
        'Executives review sentiment and risk trends in one snapshot.',
        'Account teams share recurring updates with clients.',
        'Marketing tracks campaign impact through review feedback.',
        'Product teams monitor release impact over time.',
        'Operations compares performance across regions and teams.',
      ]}
      ctaTitle="Build reports people actually use"
      ctaText="Deliver clear, repeatable reporting that drives better decisions."
    />
  );
}
