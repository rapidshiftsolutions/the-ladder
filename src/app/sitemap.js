import { SITE_URL } from '@/lib/siteUrl'

import { publicClient } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const baseUrl = SITE_URL

export default async function sitemap() {
  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/leadership-team', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/how-we-help', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/success-stories', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/donate', priority: 1.0, changeFrequency: 'monthly' },
    { route: '/monthly-giving', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/get-help', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/partners', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/events', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/volunteer', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/corporate-partnerships', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/birmingham-resources', priority: 0.6, changeFrequency: 'monthly' },
    { route: '/barrier-removal-guide', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/annual-reports', priority: 0.6, changeFrequency: 'yearly' },
    { route: '/financials', priority: 0.5, changeFrequency: 'yearly' },
    { route: '/board-governance', priority: 0.4, changeFrequency: 'yearly' },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
  ]

  const now = new Date()

  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  let dynamicEntries = []

  try {
    const blogPosts = await publicClient.fetch(groq`
      *[_type == "blogPost" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `)

    dynamicEntries = (blogPosts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt
        ? new Date(post._updatedAt)
        : post.publishedAt
          ? new Date(post.publishedAt)
          : now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching dynamic sitemap entries:', error)
  }

  return [...staticEntries, ...dynamicEntries]
}
