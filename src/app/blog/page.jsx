import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { FileText, ArrowRight, Heart, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Blog | News & Updates',
  description: 'Read the latest news, updates, and stories from The Ladder. Learn about our impact in Birmingham and ways to get involved.',
  openGraph: {
    title: 'Blog | The Ladder Birmingham',
    description: 'News, updates, and stories from The Ladder.',
    url: 'https://www.the-ladder.org/blog',
    type: 'website'
  }
}

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                News & Updates
              </h1>
              <p className="text-xl text-white/90">
                Stories of impact, organizational updates, and ways to get involved 
                with The Ladder&apos;s mission.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Coming Soon Message */}
              <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h2 
                  className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Blog Coming Soon
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                  We&apos;re working on sharing more stories and updates. In the meantime, 
                  check out our success stories or follow us on social media.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/success-stories" className="btn btn-primary">
                    Read Success Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="https://instagram.com/theladder_bham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Stay Connected
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Get the latest updates on our impact and ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/monthly-giving" className="btn btn-primary">
                  <Heart className="w-4 h-4 mr-2" />
                  Become a Monthly Donor
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
