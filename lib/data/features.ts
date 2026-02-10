/**
 * Central feature data for feature landing pages
 * Data structure designed for easy maintenance and SEO optimization
 */

export interface Feature {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  useCases: string[];
  icon?: string;
  iconComponent?: string;
  relatedFeatures?: string[];
  demoUrl?: string;
}

export const features: Feature[] = [
  {
    slug: 'sentiment-analysis',
    name: 'Sentiment Analysis',
    iconComponent: 'SmilePlus',
    shortDescription:
      'Automatically classify reviews as positive, negative, or neutral with AI-powered sentiment detection.',
    longDescription:
      'Our advanced AI analyzes every review to accurately determine customer sentiment, helping you understand customer satisfaction at a glance and identify trends over time.',
    benefits: [
      'Instantly understand customer sentiment',
      'Identify emerging issues early',
      'Track sentiment trends over time',
      'Spot positive feedback to amplify',
      'Automate review categorization',
      'Save hours of manual analysis',
    ],
    useCases: [
      'Monitor customer satisfaction trends',
      'Identify product/service issues',
      'Track brand perception changes',
      'Analyze competitor reviews',
      'Support team prioritization',
      'Executive reporting and dashboards',
    ],
    relatedFeatures: [
      'ai-summaries',
      'trend-detection',
      'custom-alerts',
    ],
  },
  {
    slug: 'review-monitoring',
    name: 'Review Monitoring',
    iconComponent: 'Eye',
    shortDescription:
      'Monitor reviews across all your business locations and platforms in real-time.',
    longDescription:
      'Stay on top of every review across Google, Trustpilot, Facebook, and more. Get notified instantly when new reviews arrive and respond quickly to maintain customer relationships.',
    benefits: [
      'Real-time review notifications',
      'Multi-location monitoring',
      'Multi-source aggregation',
      'Centralized dashboard',
      'Alert customization',
      'Never miss a review again',
    ],
    useCases: [
      'Manage multi-location businesses',
      'Track brand reputation',
      'Monitor competitor reviews',
      'Respond quickly to feedback',
      'Team collaboration on reviews',
      'Customer service performance tracking',
    ],
    relatedFeatures: [
      'multi-source-aggregation',
      'custom-alerts',
      'team-collaboration',
    ],
  },
  {
    slug: 'competitor-tracking',
    name: 'Competitor Tracking',
    iconComponent: 'Target',
    shortDescription:
      'Analyze competitor reviews to understand their strengths, weaknesses, and customer pain points.',
    longDescription:
      'Gain competitive intelligence by monitoring what customers are saying about your competitors. Identify gaps in their offerings and opportunities to differentiate your business.',
    benefits: [
      'Understand competitor strengths',
      'Identify customer pain points',
      'Find market opportunities',
      'Benchmark your performance',
      'Stay ahead of competition',
      'Make data-driven decisions',
    ],
    useCases: [
      'Competitive market analysis',
      'Product development insights',
      'Marketing strategy planning',
      'Sales team insights',
      'Feature prioritization',
      'Executive briefings',
    ],
    relatedFeatures: [
      'trend-detection',
      'ai-summaries',
      'custom-reports',
    ],
  },
  {
    slug: 'ai-summaries',
    name: 'AI-Powered Summaries',
    iconComponent: 'Sparkles',
    shortDescription:
      'Get instant AI-generated summaries of all reviews to quickly understand key themes and insights.',
    longDescription:
      'Instead of reading hundreds of reviews, our AI quickly summarizes the most important insights, themes, and patterns in your customer feedback.',
    benefits: [
      'Instant review summaries',
      'Key themes identified',
      'Time savings',
      'Actionable insights',
      'Pattern recognition',
      'Executive summaries',
    ],
    useCases: [
      'Executive reporting',
      'Quick decision making',
      'Team briefings',
      'Investor presentations',
      'Product improvement planning',
      'Customer feedback synthesis',
    ],
    relatedFeatures: [
      'sentiment-analysis',
      'trend-detection',
      'custom-reports',
    ],
  },
  {
    slug: 'multi-source-aggregation',
    name: 'Multi-Source Aggregation',
    iconComponent: 'Link',
    shortDescription:
      'Consolidate reviews from all platforms into one unified dashboard for complete visibility.',
    longDescription:
      'Manage reviews from Google, Trustpilot, Facebook, Yelp, Amazon, and more in one place. Get a 360-degree view of your customer feedback across all channels.',
    benefits: [
      'Single source of truth',
      'Cross-platform analytics',
      'Complete customer view',
      'Unified reporting',
      'Simplified workflows',
      'Better decision making',
    ],
    useCases: [
      'Omnichannel review management',
      'Brand reputation monitoring',
      'Executive dashboards',
      'Team collaboration',
      'Customer service workflows',
      'Marketing analytics',
    ],
    relatedFeatures: [
      'review-monitoring',
      'custom-reports',
      'team-collaboration',
    ],
  },
  {
    slug: 'custom-alerts',
    name: 'Custom Alerts',
    iconComponent: 'Bell',
    shortDescription:
      'Get notified instantly about reviews that matter most with customizable alert rules.',
    longDescription:
      'Set up intelligent alerts based on sentiment, keywords, rating, or source. Your team gets notified via email or Slack when critical reviews arrive so you can respond quickly.',
    benefits: [
      'Real-time notifications',
      'Custom alert rules',
      'Team notifications',
      'Priority management',
      'Rapid response',
      'Better customer relationships',
    ],
    useCases: [
      'Crisis management',
      'Negative review response',
      'VIP customer tracking',
      'Competitor mention alerts',
      'Keyword tracking',
      'Team accountability',
    ],
    relatedFeatures: [
      'review-monitoring',
      'sentiment-analysis',
      'slack-integration',
    ],
  },
  {
    slug: 'custom-reports',
    name: 'Custom Reports',
    iconComponent: 'BarChart3',
    shortDescription:
      'Generate detailed reports on customer feedback with visualizations and exportable data.',
    longDescription:
      'Create custom reports showing sentiment trends, top themes, competitor analysis, and more. Export as PDF or share dashboards with stakeholders.',
    benefits: [
      'Professional reports',
      'Executive dashboards',
      'Trend visualization',
      'Data export',
      'Scheduled reports',
      'Stakeholder communication',
    ],
    useCases: [
      'Executive reporting',
      'Board presentations',
      'Investor updates',
      'Team performance tracking',
      'Product reviews',
      'Marketing insights',
    ],
    relatedFeatures: [
      'ai-summaries',
      'sentiment-analysis',
      'competitor-tracking',
    ],
  },
  {
    slug: 'team-collaboration',
    name: 'Team Collaboration',
    iconComponent: 'Users',
    shortDescription:
      'Enable your team to work together on responding to reviews with shared workflows.',
    longDescription:
      'Assign reviews to team members, add internal notes, and track response status. Keep everyone on the same page with real-time collaboration features.',
    benefits: [
      'Shared responsibility',
      'Response tracking',
      'Internal notes',
      'Task assignment',
      'Workflow automation',
      'Team transparency',
    ],
    useCases: [
      'Team management',
      'Response coordination',
      'Customer service workflows',
      'Quality assurance',
      'Performance tracking',
      'Distributed teams',
    ],
    relatedFeatures: [
      'review-monitoring',
      'custom-alerts',
      'custom-reports',
    ],
  },
];


/**
 * Helper function to get a specific feature by slug
 */
export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}

/**
 * Helper function to get all feature slugs for static generation
 */
export function getFeatureSlugs(): string[] {
  return features.map((f) => f.slug);
}
