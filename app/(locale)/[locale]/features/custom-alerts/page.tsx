'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Bell } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Custom Alerts"
      description="Get instant notifications on the metrics that matter most."
      icon={Bell}
      overviewTitle="Never miss critical feedback again"
      overviewParagraphs={[
        'Custom alerts let you define exactly what requires attention, from low ratings to sentiment spikes and keyword triggers.',
        'Your team reacts faster because alerts are tied to real operational thresholds, not generic dashboards.',
      ]}
      benefits={[
        { title: 'Flexible rules', description: 'Define thresholds by source, score, and sentiment.' },
        { title: 'Realtime updates', description: 'React immediately when critical events happen.' },
        { title: 'Noise reduction', description: 'Only notify what your team truly needs.' },
        { title: 'Channel delivery', description: 'Route alerts to the right team workflows.' },
        { title: 'Issue prevention', description: 'Catch problems before they escalate.' },
        { title: 'Priority focus', description: 'Keep attention on high-impact feedback.' },
      ]}
      useCases={[
        'Support teams get instant alerts for urgent one-star reviews.',
        'Product teams monitor feature-specific complaint spikes.',
        'Operations teams track location-level rating drops.',
        'Leadership receives high-level risk and opportunity alerts.',
        'CS teams route customer issues to the right owners quickly.',
      ]}
      ctaTitle="Set alerts your team can act on"
      ctaText="Replace noisy monitoring with targeted, high-signal notifications."
    />
  );
}
