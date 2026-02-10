'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Award } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('g2');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={Award} />;
}
