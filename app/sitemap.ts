import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.puranban.com.np';
  const now = new Date();
  return [
    {
      url: baseUrl,
      lastModified: now
    },
  ]
}

export const dynamic = 'force-static'
