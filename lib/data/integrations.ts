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
  benefits?: string[];
  useCases?: string[];
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
    benefits: [
      'Sync reviews from Google Business Profile in real-time',
      'AI-powered sentiment analysis to understand customer emotions',
      'Detect trends and patterns across all your locations',
      'Manage multiple locations from one unified dashboard',
      'Get AI-suggested responses to save time',
      'Custom alerts for low ratings and urgent feedback',
    ],
    useCases: [
      'Local business owners monitoring their reputation across all locations',
      'Customer service teams responding to reviews quickly and effectively',
      'Marketing teams analyzing customer feedback to improve campaigns',
      'Sales teams identifying pain points mentioned in reviews',
      'Franchise managers tracking brand consistency across locations',
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
    benefits: [
      'Automatic synchronization of all Trustpilot reviews',
      'Sentiment analysis to understand customer satisfaction levels',
      'Extract key topics and themes from customer feedback',
      'Set up custom alerts for important rating changes',
      'Track trends and patterns in customer reviews over time',
      'Respond to reviews directly from Proofio dashboard',
    ],
    useCases: [
      'B2B SaaS companies building trust with prospect reviews',
      'Service providers responding to customer feedback promptly',
      'E-commerce businesses tracking product satisfaction scores',
      'Product teams identifying feature requests in reviews',
      'Support teams discovering common customer issues',
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
    benefits: [
      'Automatically sync reviews from all your Facebook business pages',
      'Analyze sentiment to understand customer experience',
      'Use pre-built response templates to save time',
      'Manage reviews from multiple pages in one platform',
      'Get detailed analytics on review trends and ratings',
      'Engage with customers directly from Proofio',
    ],
    useCases: [
      'Local businesses managing their Facebook reputation',
      'Multi-location enterprises tracking brand mentions',
      'Restaurants responding to customer feedback quickly',
      'Retail stores analyzing customer experience insights',
      'Service businesses building social proof and credibility',
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
      'Monitor your G2 reviews, track rating trends, and respond to reviews with AI-suggested responses-all from your Proofio dashboard.',
    capabilities: [
      'Review monitoring',
      'Rating trend analysis',
      'AI-powered response suggestions',
      'Competitor benchmarking',
      'Custom reporting',
    ],
    benefits: [
      'Monitor all G2 reviews in real-time',
      'Track rating trends and score changes',
      'Get AI-powered response suggestions to improve G2 reputation',
      'Benchmark your product against competitors',
      'Generate custom reports for stakeholders',
      'Respond to reviews without leaving Proofio',
    ],
    useCases: [
      'SaaS companies building credibility on G2',
      'Product marketing teams responding to buyer reviews',
      'Sales teams using G2 reviews in their prospecting',
      'Leadership teams tracking competitive positioning',
      'Customer success teams addressing feature requests',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/g2',
  },
  {
    slug: 'app-store',
    name: 'App Store',
    icon: '/appstore.png',
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
    benefits: [
      'Collect iOS app reviews automatically from App Store',
      'Analyze sentiment to understand user satisfaction',
      'Automatically detect reported issues and bugs',
      'Track which app version received specific feedback',
      'Get instant notifications for negative reviews',
      'Respond directly from Proofio to improve ratings',
    ],
    useCases: [
      'Mobile app developers responding to user feedback quickly',
      'Product teams identifying bugs from user reviews',
      'App marketing teams tracking rating improvements',
      'Customer support discovering top user complaints',
      'Release teams understanding user reaction to updates',
    ],
    setupTime: '5 minutes',
    difficulty: 'easy',
    category: 'review-source',
    documentation: 'https://docs.proofio.app/integrations/app-store',
  },
  {
    slug: 'google-play',
    name: 'Google Play',
    icon: '/googleplay.png',
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
    benefits: [
      'Automatically collect Android app reviews from Google Play',
      'Analyze sentiment to measure user satisfaction',
      'Detect trends across all your Android applications',
      'Manage reviews from multiple apps in one place',
      'Identify critical issues reported by users',
      'Reply to reviews with AI-suggested responses',
    ],
    useCases: [
      'Android app developers managing user reputation',
      'Mobile teams responding to feedback across multiple apps',
      'Product managers identifying feature requests',
      'QA teams discovering bugs from user reports',
      'Growth teams analyzing impact of app updates',
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
    benefits: [
      'Monitor all Yelp reviews in real-time',
      'Analyze sentiment to understand customer satisfaction',
      'Use response templates for faster replies',
      'Manage reviews from all your business locations',
      'Track rating trends and performance metrics',
      'Respond to reviews directly from Proofio',
    ],
    useCases: [
      'Restaurant owners managing their online reputation',
      'Local service businesses responding to customer feedback',
      'Multi-location chains tracking brand consistency',
      'Hospitality teams improving guest experience',
      'Retail businesses understanding customer preferences',
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
    benefits: [
      'Collect product reviews automatically from Amazon',
      'Analyze sentiment to measure product satisfaction',
      'Extract themes and patterns from customer feedback',
      'Compare your performance against competitors',
      'Track rating trends to monitor progress',
      'Generate insights to improve product listings',
    ],
    useCases: [
      'Amazon sellers optimizing product listings',
      'E-commerce teams identifying product improvements',
      'Manufacturers understanding customer needs',
      'Brand managers monitoring competitor reviews',
      'Customer success teams addressing product feedback',
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
    benefits: [
      'Import reviews from any custom source via CSV',
      'Bulk process large volumes of reviews efficiently',
      'Map custom fields to match your data structure',
      'Schedule regular imports for continuous updates',
      'Handle errors gracefully with detailed reporting',
      'Combine reviews from any source in one dashboard',
    ],
    useCases: [
      'Businesses integrating non-supported review platforms',
      'Teams consolidating feedback from multiple systems',
      'Companies migrating reviews from legacy platforms',
      'Organizations importing historical review data',
      'Businesses with custom feedback collection systems',
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
    benefits: [
      'Get instant Slack notifications for new reviews',
      'Set up custom alerts for specific review conditions',
      'Reply to reviews directly from Slack threads',
      'Use action buttons to manage reviews quickly',
      'Receive daily summaries of review activity',
      'Keep your team informed without leaving Slack',
    ],
    useCases: [
      'Customer support teams staying on top of feedback',
      'Product teams getting notified of feature requests',
      'Leadership monitoring important customer feedback',
      'Marketing teams catching brand mentions instantly',
      'Operations teams responding to urgent issues',
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
    benefits: [
      'Connect Proofio to 5000+ apps via Zapier',
      'Automate review workflows without coding',
      'Use conditional logic for smart automations',
      'Transform data between different systems',
      'Handle errors automatically with fallbacks',
      'Save hours of manual work every week',
    ],
    useCases: [
      'CRM teams syncing reviews to HubSpot or Salesforce',
      'Marketing teams creating review-triggered campaigns',
      'Accounting teams logging reviews in spreadsheets',
      'HR teams collecting employee feedback',
      'Support teams automating ticket creation from reviews',
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
    benefits: [
      'Build complex workflows with visual builder',
      'Create advanced automations without coding',
      'Map data between different systems accurately',
      'Chain multiple steps in one workflow',
      'Trigger actions in real-time based on reviews',
      'Connect unlimited apps and data sources',
    ],
    useCases: [
      'Operations teams automating review-to-ticket workflows',
      'Businesses syncing reviews to custom systems',
      'Enterprises with complex integration needs',
      'Teams needing advanced conditional logic',
      'Companies consolidating data from multiple sources',
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
