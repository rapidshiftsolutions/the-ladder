import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, CheckCircle, ArrowRight, Calendar, Shield, Star, Users } from 'lucide-react'

export const metadata = {
  title: 'Monthly Giving | Sustaining Support',
  description: 'Become a monthly donor and provide sustained support for barrier removal in Birmingham. Your recurring gift has 8x the lifetime impact of a one-time donation.',
  openGraph: {
    title: 'Monthly Giving | The Ladder Birmingham',
    description: 'Join our community of monthly donors and create lasting impact.',
    url: 'https://www.the-ladder.org/monthly-giving',
    type: 'website'
  }
}

const givingLevels = [
  {
    amount: 25,
    name: 'Supporter',
    impact: 'Provides transportation assistance for 3 individuals per year',
    popular: false
  },
  {
    amount: 50,
    name: 'Advocate',
    impact: 'Removes one major barrier per month for a Birmingham resident',
    popular: true
  },
  {
    amount: 100,
    name: 'Champion',
    impact: 'Provides comprehensive barrier removal support for 12 individuals annually',
    popular: false
  },
  {
    amount: 250,
    name: 'Catalyst',
    impact: 'Enables The Ladder to respond immediately to crisis situations',
    popular: false
  }
]

export default function MonthlyGivingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Join 50+ Monthly Donors
                </span>
              </div>
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Become a Monthly Donor
              </h1>
              <p className="text-xl text-white/90">
                Your recurring gift provides the stable, predictable support that 
                allows us to respond immediately when someone needs help.
              </p>
            </div>
          </div>
        </section>

        {/* Why Monthly */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Why Monthly Giving Matters
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    Barriers don&apos;t wait for fundraising campaigns. Monthly donors 
                    give The Ladder the financial stability to respond immediately 
                    when someone&apos;s barrier can&apos;t wait.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    Your recurring gift has 8x the lifetime impact of a one-time 
                    donation and helps us plan for the future.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Automatic monthly contribution—set it and forget it
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Cancel or change your gift anytime
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Quarterly impact updates exclusive to monthly donors
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-secondary)]/10 rounded-xl p-8 border border-[var(--color-secondary)]/20 text-center">
                  <div 
                    className="text-6xl font-bold text-[var(--color-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    8x
                  </div>
                  <p className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                    Lifetime Impact
                  </p>
                  <p className="text-[var(--color-text-secondary)]">
                    Monthly donors contribute 8 times more over their giving 
                    lifetime compared to one-time donors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Levels */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Choose Your Impact Level
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-[var(--color-text-secondary)] text-center">
                  Every level makes a meaningful difference. Select the amount that works for you.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {givingLevels.map((level, index) => (
                <Link
                  key={index}
                  href={`/donate?frequency=monthly&amount=${level.amount}`}
                  className={`bg-white rounded-xl p-6 border-2 block transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 ${
                    level.popular ? 'border-[var(--color-secondary)]' : 'border-gray-200'
                  }`}
                >
                  {level.popular && (
                    <div className="bg-[var(--color-secondary)] text-white text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                      Most Popular
                    </div>
                  )}
                  <div 
                    className="text-3xl font-bold text-[var(--color-primary)] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    ${level.amount}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">per month</div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    {level.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {level.impact}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)]">
                    Give ${level.amount}/mo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/donate?frequency=monthly" className="btn btn-primary btn-lg">
                Start Monthly Giving
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                100% tax-deductible • Cancel anytime • Secure payment via GiveButter
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Monthly Donor Benefits
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Quarterly Updates
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Exclusive impact reports with stories of lives you&apos;ve helped change
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Recognition
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Annual acknowledgment in our impact report
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Community
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Join a dedicated community of supporters
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
