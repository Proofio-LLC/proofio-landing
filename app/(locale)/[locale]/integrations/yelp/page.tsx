'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { MapPin } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('yelp');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={MapPin} />;
}
