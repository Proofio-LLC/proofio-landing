import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'App Store Review Monitoring Tool - Proofio',
  description: 'Monitor App Store reviews with Proofio - automated aggregation, AI summaries, and alerting.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'App Store Review Monitoring Tool',
  description: 'Monitor App Store reviews with Proofio - automated aggregation, AI summaries, and alerting.',
};

export default function Page() {
  const integration = getIntegration('app-store');
  if (!integration) return null;

  return (
    <IntegrationPageTemplate
      integration={integration}
      icon={Download}
      overrideName="App Store Review Monitoring Tool"
      overrideDescription="Monitor App Store reviews with AI summaries, aggregation, and alerting."
      overrideLongDescription="Proofio connects to the App Store, imports reviews, normalizes ratings, and applies AI-driven classification and summaries so your team can react faster."
      metadataScript={jsonLd}
    />
  );
}
