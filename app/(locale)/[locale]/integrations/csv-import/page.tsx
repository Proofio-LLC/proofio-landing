'use client';

import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { FileText } from 'lucide-react';

export default function Page() {
  const integration = getIntegration('csv-import');
  if (!integration) return null;
  return <IntegrationPageTemplate integration={integration} icon={FileText} />;
}
