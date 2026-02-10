'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Star } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('trustpilot');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={Star} />;
}
