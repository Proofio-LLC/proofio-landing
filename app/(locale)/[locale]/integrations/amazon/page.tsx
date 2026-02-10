'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { ShoppingBag } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('amazon');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={ShoppingBag} />;
}
