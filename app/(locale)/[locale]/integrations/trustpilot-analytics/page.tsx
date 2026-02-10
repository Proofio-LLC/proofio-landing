import IntegrationPageTemplate from '@/app/components/IntegrationPageTemplate';
import { getIntegration } from '@/lib/data/integrations';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Trustpilot Review Analytics - Proofio',
  description: 'Analyze Trustpilot reviews with Proofio - sentiment analysis, trends, and exportable reports.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trustpilot Review Analytics',
  description: 'Analyze Trustpilot reviews with Proofio - sentiment analysis, trends, and exportable reports.',
};

export default function Page() {
  const integration = getIntegration('trustpilot');
  if (!integration) return null;

  return (
    <IntegrationPageTemplate
      integration={integration}
      icon={Star}
      overrideName="Trustpilot Review Analytics"
      overrideDescription="Analyze Trustpilot reviews with sentiment trends and actionable reports."
      overrideLongDescription="Proofio ingests Trustpilot reviews, surfaces sentiment and topic trends, and turns raw feedback into operational insights your team can use immediately."
      metadataScript={jsonLd}
    />
  );
}
