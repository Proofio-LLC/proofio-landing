/**
 * Central comparison data for all "Proofio vs Competitor" pages
 * Data structure designed for easy maintenance and SEO optimization
 */

export interface Competitor {
  slug: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  pricing?: string;
  targetAudience?: string;
  website?: string;
}

export const comparisons: Competitor[] = [
  {
    slug: 'trustpilot',
    name: 'Trustpilot',
    description:
      'Trustpilot is a review aggregation platform focused on consumer reviews across industries.',
    pros: [
      'Large existing review base',
      'Global coverage',
      'Brand recognition',
      'Multi-language support',
    ],
    cons: [
      'Limited AI-driven insights',
      'Less integrated with business workflows',
      'Higher pricing for enterprise',
      'Limited sentiment analysis capabilities',
    ],
    pricing: '$299-$999/month',
    targetAudience: 'Large enterprises, consumer brands',
    website: 'https://www.trustpilot.com',
  },
  {
    slug: 'google-reviews',
    name: 'Google Reviews',
    description: 'Native Google review platform integrated into Google Business Profile.',
    pros: [
      'Free to use',
      'Deep integration with Google ecosystem',
      'Direct customer reach',
      'SEO benefits',
    ],
    cons: [
      'No native sentiment analysis',
      'Limited multi-source aggregation',
      'Basic analytics',
      'Manual moderation required',
      'No AI insights',
    ],
    pricing: 'Free',
    targetAudience: 'Local businesses, SMBs',
    website: 'https://www.google.com/business',
  },
  {
    slug: 'provenexpert',
    name: 'ProvenExpert',
    description:
      'European review aggregation platform popular in DACH region for professional services.',
    pros: [
      'Strong presence in DACH region',
      'Professional service focus',
      'Certification badges',
      'Multi-language support',
    ],
    cons: [
      'Limited AI capabilities',
      'Smaller global user base',
      'Basic analytics',
      'Limited API access',
      'Regional limitations',
    ],
    pricing: '€99-€499/month',
    targetAudience: 'Professional services, DACH-focused businesses',
    website: 'https://www.provenexpert.com',
  },
  {
    slug: 'capterra',
    name: 'Capterra',
    description:
      'SaaS review platform specializing in software and B2B product reviews.',
    pros: [
      'SaaS industry focus',
      'Large review community',
      'Strong buyer intent audience',
      'Good for lead generation',
    ],
    cons: [
      'Software-only focus',
      'Limited to B2B products',
      'No sentiment analysis',
      'Basic analytics',
      'High competition on platform',
    ],
    pricing: '$500-$2,000/month',
    targetAudience: 'SaaS companies, B2B software',
    website: 'https://www.capterra.com',
  },
  {
    slug: 'g2',
    name: 'G2',
    description:
      'Leading SaaS review platform with strong emphasis on buyer reviews and comparisons.',
    pros: [
      'Largest SaaS review community',
      'Strong brand authority',
      'Lead generation potential',
      'Good review velocity',
      'Industry recognition',
    ],
    cons: [
      'Software-only focus',
      'Limited to B2B',
      'No sentiment analysis',
      'Expensive for smaller teams',
      'Limited multi-source aggregation',
    ],
    pricing: '$500-$2,500/month',
    targetAudience: 'SaaS companies, B2B software, enterprises',
    website: 'https://www.g2.com',
  },
];

/**
 * Helper function to get a specific competitor by slug
 */
export function getCompetitor(slug: string): Competitor | undefined {
  return comparisons.find((c) => c.slug === slug);
}

/**
 * Helper function to get all competitor slugs for static generation
 */
export function getCompetitorSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
