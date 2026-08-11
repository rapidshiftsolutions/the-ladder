import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, Shield, CheckCircle, ArrowRight, Lock } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/live'
import { donationSettingsQuery } from '@/sanity/queries/donationSettingsQuery'
import DonateClient from './DonateClient'

export const metadata = {
  title: 'Donate | Support Birmingham Residents in Need',
  description: 'Your donation helps Birmingham residents overcome barriers to success. The Ladder is a 501(c)(3) nonprofit. 100% of donations go to direct assistance. Donate securely today.',
  keywords: [
    'donate Birmingham Alabama',
    'Birmingham nonprofit donation',
    'crisis assistance donations',
    'barrier removal donations',
    'emergency assistance donations Birmingham',
    'Birmingham charity donations',
    'monthly giving Birmingham',
    'tax deductible donation Birmingham',
    '501c3 donation Alabama'
  ],
  openGraph: {
    title: 'Donate | Support Birmingham Residents in Need | The Ladder',
    description: 'Your tax-deductible donation provides direct crisis intervention and barrier removal assistance to Birmingham residents. Every dollar creates real impact.',
    url: 'https://www.the-ladder.org/donate',
    type: 'website'
  }
}

export default async function DonatePage() {
  // Fetch donation settings from Sanity
  let settings = null
  try {
    const result = await sanityFetch({ query: donationSettingsQuery })
    settings = result?.data
  } catch (error) {
    console.error('Error fetching donation settings:', error)
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  501(c)(3) Tax-Exempt Organization
                </span>
              </div>
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Help Someone Overcome a Barrier Today
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your donation directly supports Birmingham residents in crisis. 
                Every contribution removes real obstacles and creates lasting change.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  100% to Direct Services
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Secure Payment
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  EIN: 82-0737087
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Donation Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <DonateClient settings={settings} />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Your Impact in Action
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Every dollar you give creates real, measurable change in someone&apos;s life.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div 
                    className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    $50
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Transportation</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Provides transportation so someone can get to a job interview or medical appointment
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div 
                    className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    $150
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Housing Barrier</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Helps with a deposit, documentation, or other barrier preventing stable housing
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div 
                    className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    $300
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Career Access</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Removes barriers to education, certification, or job training opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Giving CTA */}
        <section className="py-12 lg:py-16 bg-[var(--color-secondary)]/10 border-y border-[var(--color-secondary)]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Recommended</span>
              </div>
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Become a Monthly Donor
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-[var(--color-text-secondary)] mb-8 text-center">
                  Monthly donors provide the stable, predictable support that allows us to respond 
                  immediately when someone needs help. Your recurring gift has 8x the lifetime 
                  impact of a one-time donation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">$25/mo</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Supporter</div>
                </div>
                <div className="p-6 bg-white rounded-xl border-2 border-[var(--color-secondary)]">
                  <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">$50/mo</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Advocate</div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-200">
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">$100/mo</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Champion</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/donate?frequency=monthly"
                  className="btn btn-primary btn-lg"
                >
                  Start Monthly Giving
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/monthly-giving"
                  className="btn btn-secondary btn-lg"
                >
                  Learn About Monthly Giving
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Is my donation tax-deductible?
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Yes. The Ladder is a 501(c)(3) tax-exempt organization (EIN: 82-0737087). 
                    All donations are tax-deductible to the fullest extent allowed by law. 
                    You will receive a receipt for your records.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Where does my donation go?
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    100% of your donation goes directly to barrier removal assistance for 
                    individuals in crisis. We maintain financial transparency and publish 
                    annual reports showing exactly how funds are used.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Can I donate in honor or memory of someone?
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Yes. During the donation process, you can specify if your gift is in honor 
                    or memory of someone special. We can send acknowledgment cards to recipients 
                    if you provide their contact information.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    How can I see the impact of my donation?
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    All donors can view our success stories and annual reports. Monthly donors 
                    receive quarterly impact updates with specific stories of how their gifts 
                    made a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
