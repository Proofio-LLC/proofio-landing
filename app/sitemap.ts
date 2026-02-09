import { MetadataRoute } from 'next'
import { locales, defaultLocale } from '@/lib/i18n'
import { sanityClient } from '@/lib/sanity/client'
import { allBlogPostsQuery } from '@/lib/sanity/queries'
import { getCompetitorSlugs } from '@/lib/data/comparisons'
import { getIntegrationSlugs } from '@/lib/data/integrations'
import { getFeatureSlugs } from '@/lib/data/features'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://proofio.app'
  const now = new Date()

  // Standard pages with optimized priorities and frequencies
  const pages: Array<{
    path: string
    priority: number
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    localized: boolean // Whether this page should have localized versions
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly', localized: true },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly', localized: false },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly', localized: false },
    { path: '/help', priority: 0.8, changeFrequency: 'monthly', localized: false },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly', localized: false },
    { path: '/careers', priority: 0.7, changeFrequency: 'monthly', localized: false },
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly', localized: false },
    { path: '/changelog', priority: 0.6, changeFrequency: 'weekly', localized: false },
    { path: '/status', priority: 0.5, changeFrequency: 'daily', localized: false },
    // Legal pages (imprint, privacy-policy, terms-of-service, cookies-settings) are excluded from sitemap
    // and set to noindex in their individual metadata
  ]

  // Comparison pages (localized)
  const comparisonSlugs = getCompetitorSlugs()
  const comparisonPages = comparisonSlugs.map((slug) => ({
    path: `/compare/proofio-vs-${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    localized: true,
  }))

  // Integration pages (localized)
  const integrationSlugs = getIntegrationSlugs()
  const integrationPages = integrationSlugs.map((slug) => ({
    path: `/integrations/${slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    localized: true,
  }))

  // Feature pages (localized)
  const featureSlugs = getFeatureSlugs()
  const featurePages = featureSlugs.map((slug) => ({
    path: `/features/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    localized: true,
  }))

  // Combine all pages
  const allPages = [...pages, ...comparisonPages, ...integrationPages, ...featurePages]

  const sitemapEntries: MetadataRoute.Sitemap = []

  allPages.forEach((page) => {
    if (page.localized) {
      // Add localized versions for the landing page
      locales.forEach((locale) => {
        const url = locale === defaultLocale
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${locale}${page.path}`
        
        sitemapEntries.push({
          url,
          lastModified: now,
          changeFrequency: page.changeFrequency,
          priority: page.priority,
        })
      })
    } else {
      // Add non-localized pages as-is
      sitemapEntries.push({
        url: `${baseUrl}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    }
  })

  // Add blog posts dynamically from Sanity (if configured)
  try {
    if (sanityClient) {
      const posts = await sanityClient.fetch<any[]>(allBlogPostsQuery);
      posts.forEach((post) => {
        if (post?.slug?.current) {
          sitemapEntries.push({
            url: `${baseUrl}/blog/${post.slug.current}`,
            lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      })
    }
  } catch (e) {
    // silently ignore Sanity errors to not break sitemap generation
    console.warn('Failed to fetch blog posts for sitemap', e)
  }

  return sitemapEntries
}
