import { publicClient } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://the-ladder.org'

export default async function sitemap() {
  // Static pages with their priorities
  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/leadership-team', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/how-we-help', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/success-stories', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/donate', priority: 1.0, changeFrequency: 'monthly' },
    { route: '/partners', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/events', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/annual-reports', priority: 0.6, changeFrequency: 'yearly' },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ]

  const now = new Date()

  // Generate static page entries
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Dynamic pages from Sanity
  let dynamicEntries = []

  try {
    // Fetch blog posts from Sanity
    const blogPosts = await publicClient.fetch(groq`
      *[_type == "blogPost" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `)

    dynamicEntries = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : (post.publishedAt ? new Date(post.publishedAt) : now),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching dynamic sitemap entries:', error)
  }

  return [...staticEntries, ...dynamicEntries]
}
