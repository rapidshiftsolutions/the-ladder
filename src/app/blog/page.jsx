import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import Link from 'next/link'

export const metadata = {
  title: 'Blog & News | The Ladder Birmingham Nonprofit',
  description: 'Read the latest news, updates, and stories from The Ladder nonprofit in Birmingham, Alabama. Stay informed about our community impact.',
  keywords: [
    'The Ladder blog',
    'Birmingham nonprofit news',
    'community impact stories',
    'barrier removal updates',
    'Birmingham charity news',
  ],
  openGraph: {
    title: 'Blog & News | The Ladder',
    description: 'Latest news and updates from The Ladder nonprofit serving Birmingham.',
    url: 'https://www.the-ladder.org/blog',
    type: 'website',
  },
}

// Placeholder blog posts - in production, fetch from Sanity
const blogPosts = [
  {
    title: 'How The Ladder Removes Barriers: A Deep Dive',
    excerpt: 'Learn about our unique approach to helping Birmingham residents overcome the specific obstacles preventing their success.',
    category: 'Community',
    date: 'January 2024',
    slug: 'how-we-remove-barriers',
  },
  {
    title: 'Year in Review: 2023 Impact Report',
    excerpt: 'See the incredible impact our donors and volunteers made in 2023 helping over 100 individuals climb over barriers.',
    category: 'Donor Updates',
    date: 'December 2023',
    slug: '2023-impact-report',
  },
  {
    title: 'Volunteer Spotlight: Making a Difference',
    excerpt: 'Meet the dedicated volunteers who give their time to help The Ladder fulfill its mission every day.',
    category: 'Community',
    date: 'November 2023',
    slug: 'volunteer-spotlight',
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-ladder-blue to-ladder-blue-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-heading">
            News & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with The Ladder. Read our latest stories, updates, and insights 
            about our work in the Birmingham community.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-ladder-blue/10 to-ladder-green/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ladder-blue/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-ladder-blue bg-ladder-blue/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-ladder-blue font-medium text-sm hover:underline inline-flex items-center gap-1">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              More content coming soon! Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us on social media to stay updated on our work and impact in Birmingham.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-ladder-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-ladder-blue-light transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="bg-ladder-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-ladder-red-light transition-colors"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
