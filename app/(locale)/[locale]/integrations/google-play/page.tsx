'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Play } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('google-play');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={Play} />;
}
