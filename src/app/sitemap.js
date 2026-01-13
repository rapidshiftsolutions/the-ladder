const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.the-ladder.org'

export default async function sitemap() {
  // Static pages with their priorities
  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/leadership-team', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/how-we-help', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/success-stories', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/donate', priority: 1.0, changeFrequency: 'monthly' },
    { route: '/monthly-giving', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/partners', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/events', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/annual-reports', priority: 0.6, changeFrequency: 'yearly' },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/get-help', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/volunteer', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/birmingham-resources', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/barrier-removal-guide', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/corporate-partnerships', priority: 0.6, changeFrequency: 'monthly' },
    { route: '/financials', priority: 0.5, changeFrequency: 'yearly' },
    { route: '/board-governance', priority: 0.5, changeFrequency: 'yearly' },
    { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/accessibility', priority: 0.4, changeFrequency: 'yearly' },
  ]

  const now = new Date()

  // Generate static page entries
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Dynamic pages from Sanity (if available)
  // In production, uncomment and configure these queries
  let dynamicEntries = []

  try {
    // Optionally fetch blog posts from Sanity
    // const sanityClient = createClient({
    //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    //   apiVersion: '2024-01-01',
    //   useCdn: true,
    // })
    //
    // const blogPosts = await sanityClient.fetch(`
    //   *[_type == "blogPost" && defined(slug.current)] {
    //     "slug": slug.current,
    //     _updatedAt
    //   }
    // `)
    //
    // dynamicEntries = blogPosts.map((post) => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post._updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // }))
  } catch (error) {
    console.error('Error fetching dynamic sitemap entries:', error)
  }

  return [...staticEntries, ...dynamicEntries]
}
