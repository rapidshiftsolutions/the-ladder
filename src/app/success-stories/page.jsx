import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ArrowRight, Quote, Star, Users, CheckCircle, Shield } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { allSuccessStoriesQuery } from '@/sanity/queries/successStoriesQuery'

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

// Revalidate every hour
export const revalidate = 3600

// Barrier type display mapping
const barrierLabels = {
  housing: 'Housing',
  employment: 'Employment',
  transportation: 'Transportation',
  education: 'Education/Training',
  healthcare: 'Healthcare',
  legal: 'Legal',
  financial: 'Financial',
  other: 'Other'
}

// Fallback stories in case Sanity is unavailable
const fallbackStories = [
  {
    _id: 'fallback-maria',
    name: 'Maria T.',
    barrier: 'transportation',
    story: 'A single mom with two small children who lost her car in an accident and thought she would lose everything. The Ladder stepped in quickly, providing a rental car so she could continue working until she was able to get a different vehicle. Today, she has a new job that she loves and has moved into a beautiful new home.',
    outcome: 'Maintained employment, secured new vehicle, moved into permanent housing',
    featured: true
  },
  {
    _id: 'fallback-sarah',
    name: 'Sarah M.',
    barrier: 'transportation',
    story: 'Sarah was working hard to get back on her feet when her car broke down unexpectedly. The Ladder covered her car repair costs within 48 hours, allowing her to keep working. Two years later, Sarah owns her own home and now volunteers to help others.',
    outcome: 'Maintained employment, purchased home, now mentors others',
    featured: true
  },
  {
    _id: 'fallback-james',
    name: 'James W.',
    barrier: 'employment',
    story: 'James had finally landed the job offer he\'d been working toward, but needed work boots and uniforms before he could start. The Ladder covered these costs quickly. James has been employed ever since, supporting his family.',
    outcome: 'Started new career, supporting family, planning for future',
    featured: false
  }
]

async function getSuccessStories() {
  try {
    const stories = await client.fetch(allSuccessStoriesQuery)
    return stories && stories.length > 0 ? stories : fallbackStories
  } catch (error) {
    console.error('Error fetching success stories:', error)
    return fallbackStories
  }
}

export default async function SuccessStoriesPage() {
  const stories = await getSuccessStories()

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
                  30
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Days to Resolution</div>
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
                    key={story._id} 
                    className="bg-gray-50 rounded-xl p-8 lg:p-10 border border-gray-200"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Story Content */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            {story.image?.asset?.url ? (
                              <div className="w-16 h-16 rounded-full overflow-hidden">
                                <Image
                                  src={story.image.asset.url}
                                  alt={story.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-[var(--color-primary)]">
                                  {story.name?.[0] || '?'}
                                </span>
                              </div>
                            )}
                            <div>
                              <h3 
                                className="text-xl font-bold text-[var(--color-text-primary)]"
                                style={{ fontFamily: 'var(--font-heading)' }}
                              >
                                {story.name}
                              </h3>
                              <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium rounded-full mt-1">
                                {barrierLabels[story.barrier] || story.barrier}
                              </span>
                            </div>
                          </div>
                          {story.featured && (
                            <div className="flex items-center gap-1 text-[var(--color-accent)]">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-xs font-medium">Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Quote */}
                        <div className="relative mb-6">
                          <Quote className="absolute -left-2 -top-2 w-8 h-8 text-[var(--color-primary)]/10" />
                          <p className="text-[var(--color-text-secondary)] leading-relaxed pl-6 italic">
                            &ldquo;{story.story}&rdquo;
                          </p>
                        </div>

                        {/* Outcome */}
                        {story.outcome && (
                          <div className="flex items-start gap-3 p-4 bg-[var(--color-secondary)]/10 rounded-lg border border-[var(--color-secondary)]/20">
                            <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium text-[var(--color-text-primary)]">Outcome: </span>
                              <span className="text-sm text-[var(--color-text-secondary)]">{story.outcome}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="font-medium text-[var(--color-text-primary)]">Privacy Protected</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All stories are shared with permission. Names may be changed and certain details 
                modified to protect the privacy of the individuals we serve. The impact is real.
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
              Help Create More Success Stories
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your support directly enables individuals to overcome barriers and 
              transform their lives. Every donation creates real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
              <Link href="/get-help" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Apply for Help
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
