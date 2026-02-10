'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Globe } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('google-reviews');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={Globe} />;
}
