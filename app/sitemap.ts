import { MetadataRoute } from 'next'
import { locales, defaultLocale } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
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

  const sitemapEntries: MetadataRoute.Sitemap = []

  pages.forEach((page) => {
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

  return sitemapEntries
}
