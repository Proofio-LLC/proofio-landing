'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="AI-Powered Summaries"
      description="Get concise AI-generated summaries of thousands of reviews in seconds."
      icon={Sparkles}
      overviewTitle="Distill feedback into decisions"
      overviewParagraphs={[
        'Reading every review manually does not scale. Proofio summarizes recurring themes, risks, and opportunities for your team.',
        'You keep the important nuance, but remove repetitive noise, so product, support, and growth can align faster.',
      ]}
      benefits={[
        { title: 'Time savings', description: 'Summarize large review volumes in seconds.' },
        { title: 'Clear themes', description: 'Automatically identify core topics and patterns.' },
        { title: 'Actionable insights', description: 'Turn feedback into prioritized next steps.' },
        { title: 'Executive-ready', description: 'Share concise summaries with stakeholders.' },
        { title: 'Multi-language', description: 'Works across different review languages.' },
        { title: 'Trend tracking', description: 'Compare changes over time and releases.' },
      ]}
      useCases={[
        'Product managers prioritize roadmap work from recurring pain points.',
        'Leadership teams review customer sentiment without reading thousands of comments.',
        'Customer success identifies top friction points and onboarding gaps.',
        'Marketing teams adapt messaging to real customer language.',
        'Support teams spot issue clusters early and escalate quickly.',
      ]}
      ctaTitle="Get instant summaries of your reviews"
      ctaText="Let AI handle the heavy feedback analysis work for your team."
    />
  );
}
