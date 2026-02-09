/**
 * Central integration data for all integration pages
 * Data structure designed for easy maintenance and SEO optimization
 */

export interface Integration {
  slug: string;
  name: string;
  icon: string;
  description: string;
  longDescription?: string;
  capabilities: string[];
  setupTime?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  documentation?: string;
  category?: 'review-source' | 'sync' | 'export' | 'workflow';
}

export const integrations: Integration[] = [
  {
    slug: 'google-reviews',
    name: 'Google Reviews',
    icon: '/google.png',
    description:
      'Automatically sync and analyze all your Google Business Profile reviews in Proofio.',
    longDescription:
      'Connect your Google Business Profile to Proofio and get instant access to all your reviews with AI-powered sentiment analysis, insights, and automated workflows.',
    capabilities: [
      'Auto-sync reviews in real-time',
      'AI sentiment analysis',
      'Trend detection',
      'Multi-location support',
      'Automated response suggestions',
    ],
    setupTime: '< 5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/google-reviews',
  },
  {
    slug: 'trustpilot',
    name: 'Trustpilot',
    icon: '/Trustpilot.png',
    description:
      'Monitor and analyze all your Trustpilot reviews directly from your Proofio dashboard.',
    longDescription:
      'Sync your Trustpilot reviews automatically and access advanced analytics, sentiment analysis, and AI-powered insights all in one place.',
    capabilities: [
      'Real-time review synchronization',
      'Sentiment analysis',
      'Topic extraction',
      'Custom alerts',
      'Trend analysis',
    ],
    setupTime: '< 5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/trustpilot',
  },
  {
    slug: 'facebook-reviews',
    name: 'Facebook Reviews',
    icon: '/facebook.png',
    description:
      'Aggregate and analyze reviews from your Facebook business page in Proofio.',
    longDescription:
      'Connect your Facebook business page and automatically collect, analyze, and respond to reviews with AI assistance.',
    capabilities: [
      'Auto-sync Facebook reviews',
      'Sentiment analysis',
      'Response templates',
      'Multi-page management',
      'Analytics dashboard',
    ],
    setupTime: '10 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/facebook-reviews',
  },
  {
    slug: 'g2',
    name: 'G2',
    icon: '/g2.png',
    description:
      'Sync G2 reviews and get actionable insights from your SaaS product reviews.',
    longDescription:
      'Monitor your G2 reviews, track rating trends, and respond to reviews with AI-suggested responses—all from your Proofio dashboard.',
    capabilities: [
      'Review monitoring',
      'Rating trend analysis',
      'AI-powered response suggestions',
      'Competitor benchmarking',
      'Custom reporting',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/g2',
  },
  {
    slug: 'app-store',
    name: 'App Store',
    icon: '/app-store.png',
    description:
      'Monitor iOS app reviews from Apple App Store with automatic sentiment analysis.',
    longDescription:
      'Automatically collect reviews from your iOS apps, analyze sentiment, detect issues, and get notified of negative reviews in real-time.',
    capabilities: [
      'Real-time review collection',
      'Sentiment analysis',
      'Issue detection',
      'Version tracking',
      'Auto-notification',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/app-store',
  },
  {
    slug: 'google-play',
    name: 'Google Play',
    icon: '/google-play.png',
    description:
      'Sync Android app reviews from Google Play and track sentiment automatically.',
    longDescription:
      'Collect and analyze reviews from your Google Play Store listings with AI-powered sentiment analysis and automated alerts.',
    capabilities: [
      'Automatic review collection',
      'Sentiment analysis',
      'Trend detection',
      'Multi-app management',
      'Issue identification',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/google-play',
  },
  {
    slug: 'yelp',
    name: 'Yelp',
    icon: '/yelp.png',
    description:
      'Monitor your Yelp business reviews and respond with AI assistance from Proofio.',
    longDescription:
      'Keep track of all your Yelp reviews, analyze customer sentiment, and respond promptly with AI-powered suggestions.',
    capabilities: [
      'Review monitoring',
      'Sentiment analysis',
      'Response templates',
      'Multi-location tracking',
      'Rating analysis',
    ],
    setupTime: '10 minutes',
    difficulty: 'medium',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/yelp',
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    icon: '/amazon.png',
    description:
      'Analyze product reviews from Amazon and get actionable insights.',
    longDescription:
      'Monitor your Amazon product reviews, analyze customer feedback, identify improvement areas, and optimize your product listings.',
    capabilities: [
      'Product review collection',
      'Sentiment analysis',
      'Feedback themes',
      'Competitor analysis',
      'Rating trends',
    ],
    setupTime: '15 minutes',
    difficulty: 'medium',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/amazon',
  },
  {
    slug: 'csv-import',
    name: 'CSV Import',
    icon: '/csv.png',
    description:
      'Import reviews from custom sources via CSV and unify all feedback in Proofio.',
    longDescription:
      'Bulk import reviews from any source using CSV format, combine with other sources, and get unified analytics across all your review channels.',
    capabilities: [
      'Flexible CSV import',
      'Bulk processing',
      'Custom field mapping',
      'Scheduled imports',
      'Error handling',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'sync',
    documentation: 'https://docs.proofio.app/integrations/csv-import',
  },
  {
    slug: 'slack',
    name: 'Slack',
    icon: '/slack.png',
    description:
      'Get real-time Proofio notifications in Slack for new reviews and alerts.',
    longDescription:
      'Receive instant Slack notifications for new reviews, negative feedback, or important trends so your team stays informed.',
    capabilities: [
      'Real-time notifications',
      'Custom alerts',
      'Thread replies',
      'Action buttons',
      'Daily summaries',
    ],
    setupTime: '2 minutes',
    difficulty: 'easy',
    category: 'workflow',
    documentation: 'https://docs.proofio.app/integrations/slack',
  },
  {
    slug: 'zapier',
    name: 'Zapier',
    icon: '/zapier.png',
    description:
      'Connect Proofio with 5000+ apps using Zapier for advanced automation.',
    longDescription:
      'Use Zapier to automate workflows between Proofio and your favorite business tools like HubSpot, Salesforce, Airtable, and more.',
    capabilities: [
      'Multi-app automation',
      '5000+ integrations',
      'Conditional logic',
      'Data transformation',
      'Error handling',
    ],
    setupTime: '10 minutes',
    difficulty: 'medium',
    category: 'workflow',
    documentation: 'https://docs.proofio.app/integrations/zapier',
  },
  {
    slug: 'make',
    name: 'Make (Integromat)',
    icon: '/make.png',
    description:
      'Automate workflows between Proofio and your business tools using Make.',
    longDescription:
      'Create powerful automations with Make to connect Proofio with CRMs, marketing tools, and other business applications.',
    capabilities: [
      'Visual workflow builder',
      'Advanced automation',
      'Data mapping',
      'Multi-step workflows',
      'Real-time triggers',
    ],
    setupTime: '15 minutes',
    difficulty: 'medium',
    category: 'workflow',
    documentation: 'https://docs.proofio.app/integrations/make',
  },
];

/**
 * Helper function to get a specific integration by slug
 */
export function getIntegration(slug: string): Integration | undefined {
  return integrations.find((i) => i.slug === slug);
}

/**
 * Helper function to get all integration slugs for static generation
 */
export function getIntegrationSlugs(): string[] {
  return integrations.map((i) => i.slug);
}

/**
 * Get integrations by category
 */
export function getIntegrationsByCategory(
  category: Integration['category'],
): Integration[] {
  return integrations.filter((i) => i.category === category);
}
