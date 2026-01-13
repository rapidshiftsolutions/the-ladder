import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, ArrowRight, Quote, Star, Users, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Success Stories | Real Impact in Birmingham',
  description: 'Read stories of Birmingham residents who overcame barriers with The Ladder\'s help. Real people, real obstacles, real transformation.',
  openGraph: {
    title: 'Success Stories | The Ladder Birmingham',
    description: 'Real stories of individuals who overcame barriers and transformed their lives.',
    url: 'https://www.the-ladder.org/success-stories',
    type: 'website'
  }
}

const stories = [
  {
    name: 'Sarah M.',
    location: 'Birmingham',
    barrier: 'Transportation',
    quote: 'The Ladder helped me when no other organization could. They paid for my car repair so I could keep my new job. Two years later, I own my home and volunteer to help others.',
    outcome: 'Maintained employment, purchased home, now mentors others',
    investment: '$800',
    timeline: '48 hours'
  },
  {
    name: 'Maria T.',
    location: 'Birmingham',
    barrier: 'Emergency Transportation',
    quote: 'When I lost my car in an accident, I thought I would lose everything. The Ladder provided a rental car so I could keep working until I found a replacement.',
    outcome: 'Kept job, secured new vehicle, moved into permanent housing',
    investment: '$450',
    timeline: '24 hours'
  },
  {
    name: 'James W.',
    location: 'Birmingham',
    barrier: 'Employment Documentation',
    quote: 'I had the job offer but needed work boots and uniforms before I could start. The Ladder covered these costs and I\'ve been employed ever since.',
    outcome: 'Started new career, supporting family, planning for future',
    investment: '$275',
    timeline: '3 days'
  }
]

export default function SuccessStoriesPage() {
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
                Success Stories
              </h1>
              <p className="text-xl text-white/90">
                Real stories from Birmingham residents who overcame barriers and 
                transformed their lives with support from The Ladder.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  500+
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Individuals Helped</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  95%
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Success Rate</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  $350
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Avg. Investment</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  48hr
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Avg. Resolution</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {stories.map((story, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-xl p-8 lg:p-10 border border-gray-200"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 
                            className="text-xl font-bold text-[var(--color-text-primary)]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {story.name}
                          </h3>
                          <span className="text-sm text-[var(--color-text-secondary)]">
                            • {story.location}
                          </span>
                        </div>
                        <span className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium px-3 py-1 rounded-full">
                          {story.barrier}
                        </span>
                      </div>
                    </div>
                    
                    <blockquote 
                      className="text-lg text-[var(--color-text-primary)] italic mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      &quot;{story.quote}&quot;
                    </blockquote>
                    
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Investment</div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{story.investment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Resolution Time</div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{story.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-[var(--color-text-secondary)] mb-1">Outcome</div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{story.outcome}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Note about privacy */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Privacy Note:</strong>{' '}
                All stories are shared with permission. Names and identifying details 
                may be changed to protect privacy while maintaining the authenticity 
                of each individual&apos;s experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Help Write the Next Success Story
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your support makes these transformations possible. Every donation 
              directly helps someone overcome a barrier and change their life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]">
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Link>
              <Link href="/get-help" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Apply for Help
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
