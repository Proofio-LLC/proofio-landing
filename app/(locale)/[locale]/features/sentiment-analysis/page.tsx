'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { SmilePlus } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Sentiment Analysis"
      description="Understand customer emotions at scale with AI sentiment detection."
      icon={SmilePlus}
      overviewTitle="See the why behind the rating"
      overviewParagraphs={[
        'Star ratings alone are not enough. Sentiment analysis reveals how customers actually feel and what drives those feelings.',
        'Track emotional trends over time and identify topics linked to positive or negative experiences.',
      ]}
      benefits={[
        { title: 'Emotion detection', description: 'Classify positive, neutral, and negative sentiment.' },
        { title: 'Topic-level clarity', description: 'Map sentiment to specific product areas.' },
        { title: 'Trend monitoring', description: 'Observe sentiment movement over time.' },
        { title: 'Risk visibility', description: 'Identify deteriorating signals early.' },
        { title: 'Decision support', description: 'Prioritize fixes with confidence.' },
        { title: 'Cross-source consistency', description: 'Compare sentiment across platforms.' },
      ]}
      useCases={[
        'Product teams prioritize improvements based on sentiment impact.',
        'Support teams monitor frustration spikes around key topics.',
        'Marketing validates messaging against customer emotion signals.',
        'Leadership tracks overall customer confidence over time.',
        'CS teams identify accounts at risk through sentiment drops.',
      ]}
      ctaTitle="Understand customer sentiment instantly"
      ctaText="Turn unstructured review text into a clear emotional signal your team can act on."
    />
  );
}
