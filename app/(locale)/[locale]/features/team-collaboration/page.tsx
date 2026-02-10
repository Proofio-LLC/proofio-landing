'use client';

import FeaturePageTemplate from '@/app/components/FeaturePageTemplate';
import { Users } from 'lucide-react';

export default function Page() {
  return (
    <FeaturePageTemplate
      name="Team Collaboration"
      description="Coordinate feedback workflows across product, support, and leadership."
      icon={Users}
      overviewTitle="Collaborate on feedback, not in silos"
      overviewParagraphs={[
        'Customer feedback work is cross-functional by nature. Proofio gives teams shared context, clear ownership, and faster handoffs.',
        'From triage to follow-up, everyone sees the same signals and actions in one workflow.',
      ]}
      benefits={[
        { title: 'Shared workspaces', description: 'Collaborate on feedback analysis in realtime.' },
        { title: 'Role-based access', description: 'Control permissions for each team role.' },
        { title: 'Internal context', description: 'Keep discussions attached to feedback items.' },
        { title: 'Task ownership', description: 'Assign follow-up actions with accountability.' },
        { title: 'Activity visibility', description: 'Track team progress across workflows.' },
        { title: 'Unified inbox', description: 'Coordinate priorities from one queue.' },
      ]}
      useCases={[
        'Support teams triage urgent feedback and assign owners fast.',
        'Product and CS align on top recurring customer pain points.',
        'Management monitors progress and closure quality.',
        'Marketing collaborates with product on positioning updates.',
        'Distributed teams operate from one shared feedback hub.',
      ]}
      ctaTitle="Collaborate faster across teams"
      ctaText="Keep everyone aligned on customer feedback with one operational workspace."
    />
  );
}
