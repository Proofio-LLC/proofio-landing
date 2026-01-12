import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proofio.app'
  const now = new Date()
  
  // Standard pages with optimized priorities and frequencies
  const pages: Array<{
    path: string
    priority: number
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/help', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/careers', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/changelog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/status', priority: 0.5, changeFrequency: 'daily' },
    // Legal pages (imprint, privacy-policy, terms-of-service, cookies-settings) are excluded from sitemap
    // and set to noindex in their individual metadata
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
