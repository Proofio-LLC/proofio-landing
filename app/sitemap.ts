import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proofio.app'
  
  // Standard pages
  const pages = [
    '',
    '/pricing',
    '/about',
    '/changelog',
    '/partners',
    '/careers',
    '/help',
    '/status',
    '/blog',
    '/imprint',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
