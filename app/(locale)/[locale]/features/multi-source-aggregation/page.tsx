'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Link as LinkIcon } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Multi-Source Aggregation"
      description="Consolidate all review sources into one operational view."
      icon={LinkIcon}
      overviewTitle="One source of truth for customer feedback"
      overviewParagraphs={[
        'Most teams lose time switching between platforms. Aggregate app stores, marketplaces, and review hubs into one structured workflow.',
        'Proofio normalizes and organizes multi-source feedback so teams can act faster with better context.',
      ]}
      benefits={[
        { title: 'Unified visibility', description: 'Monitor all channels from one dashboard.' },
        { title: 'Normalized data', description: 'Compare like-for-like metrics across platforms.' },
        { title: 'Less manual work', description: 'No more copy-pasting across tools.' },
        { title: 'Faster analysis', description: 'Spot cross-platform patterns instantly.' },
        { title: 'Scalable workflow', description: 'Grow sources without growing complexity.' },
        { title: 'Better alignment', description: 'Keep product, CS, and marketing on one view.' },
      ]}
      useCases={[
        'App teams combine iOS and Android feedback for release planning.',
        'Multi-brand teams compare sentiment across products in one place.',
        'Customer success centralizes inbound review risk signals.',
        'Leadership tracks overall reputation health across channels.',
        'Agencies run client monitoring from a single operational hub.',
      ]}
      ctaTitle="Aggregate all your review sources"
      ctaText="Move from fragmented monitoring to one reliable review intelligence layer."
    />
  );
}
