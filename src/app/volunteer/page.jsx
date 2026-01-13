import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, Users, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Volunteer | Make a Difference in Birmingham',
  description: 'Volunteer with The Ladder and help Birmingham residents overcome barriers. Various opportunities available for individuals with different skills and availability.',
  openGraph: {
    title: 'Volunteer | The Ladder Birmingham',
    description: 'Join our volunteer team and help remove barriers in our community.',
    url: 'https://www.the-ladder.org/volunteer',
    type: 'website'
  }
}

const opportunities = [
  {
    title: 'Client Support',
    description: 'Help individuals navigate resources and provide encouragement during their barrier removal process.',
    commitment: '4-8 hours/month',
    skills: ['Communication', 'Empathy', 'Problem-solving']
  },
  {
    title: 'Administrative Support',
    description: 'Assist with data entry, donor communications, and organizational tasks.',
    commitment: '4-6 hours/month',
    skills: ['Organization', 'Computer skills', 'Attention to detail']
  },
  {
    title: 'Outreach & Awareness',
    description: 'Help spread the word about The Ladder through community events and social media.',
    commitment: 'Flexible',
    skills: ['Communication', 'Social media', 'Public speaking']
  },
  {
    title: 'Mentorship',
    description: 'Provide ongoing guidance and support to individuals who have overcome their barriers.',
    commitment: '2-4 hours/month',
    skills: ['Mentoring', 'Active listening', 'Patience']
  }
]

export default function VolunteerPage() {
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
                Volunteer With Us
              </h1>
              <p className="text-xl text-white/90">
                Your time and skills can help Birmingham residents overcome barriers 
                and transform their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Make a Tangible Difference
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    At The Ladder, volunteers don&apos;t just give time—they directly impact 
                    individual lives. Every interaction contributes to helping someone 
                    overcome a specific barrier and move forward.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    Whether you have a few hours a month or more time to give, there&apos;s 
                    a meaningful role for you in our mission.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        See direct impact on individual lives
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Flexible commitment options
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Training and support provided
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    100% Volunteer-Run
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    The Ladder operates entirely through volunteer efforts, meaning 
                    100% of donations go directly to helping individuals.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Your volunteer time multiplies every dollar donated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Volunteer Opportunities
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                Find the right fit for your skills and availability.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {opportunities.map((opp, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 border border-gray-200"
                >
                  <h3 
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {opp.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {opp.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{opp.commitment}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to Get Started?
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8">
                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  Contact us to learn more about volunteer opportunities and 
                  find the right fit for your skills and schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:volunteer@the-ladder.org"
                    className="flex items-center justify-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    volunteer@the-ladder.org
                  </a>
                  <a 
                    href="tel:+12055221162"
                    className="flex items-center justify-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    (205) 522-1162
                  </a>
                </div>
              </div>
              
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us About Volunteering
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
