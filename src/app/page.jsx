import GlassNavigation from '/src/components/GlassNavigation'
import LadderHero from '/src/components/page-landing-hero-ladder'
import HowWeHelpSection from '/src/components/how-we-help-content'
import SuccessStories from '/src/components/success-stories-reviews'
import DonationSection from '/src/components/donation-section'
import ContactForm from '/src/components/ContactForm'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'The Ladder | Birmingham Crisis Intervention & Barrier Assistance',
  description: 'The Ladder helps Birmingham residents overcome life barriers through nonprofit partnerships. Emergency assistance & crisis intervention. Donate or apply for help today.',
  keywords: [
    'Birmingham Alabama nonprofit help',
    'crisis intervention Birmingham',
    'emergency financial assistance Birmingham',
    'Birmingham barrier removal assistance',
    'individual crisis intervention Birmingham',
    'nonprofit partnership Birmingham AL',
    'Birmingham nonprofit crisis services',
    'emergency help Birmingham nonprofits',
    'Birmingham community assistance',
    'individual barrier assistance Alabama',
    'crisis help Birmingham Alabama',
    'Birmingham nonprofit partnerships',
    'barrier removal Birmingham',
    'The Ladder Birmingham',
    'Birmingham charity',
    'donate Birmingham Alabama',
    'Birmingham nonprofits',
    'emergency assistance Birmingham Alabama',
    'missing rung help Birmingham',
    'Birmingham crisis support'
  ],
  openGraph: {
    title: 'The Ladder | Birmingham Crisis Intervention & Barrier Assistance',
    description: 'The Ladder helps Birmingham residents overcome specific barriers preventing their success. Partner nonprofit providing emergency assistance and individual support. Donate or apply for help today.',
    url: 'https://www.the-ladder.org',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder - Birmingham Crisis Intervention & Barrier Assistance'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ladder | Birmingham Crisis Intervention & Barrier Assistance',
    description: 'The Ladder helps Birmingham residents overcome specific barriers preventing their success. Emergency assistance & individual support in Birmingham, Alabama.',
    images: ['/meta.png']
  },
  alternates: {
    canonical: 'https://www.the-ladder.org'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function Home() {
  return (
    <>
      <GlassNavigation />
      <main className="flex min-h-screen flex-col">
      
      {/* Hero Section */}
      <LadderHero />
      
      {/* How We Help Section */}
      <HowWeHelpSection />
      
      {/* Success Stories & Impact */}
      <SuccessStories />
      
      {/* Donation Section */}
      <DonationSection />
      
      {/* Get Help Form Section with Glass Morphism */}
      <section className="py-24 bg-gradient-to-br from-[var(--ladder-blue)]/5 via-white to-[var(--ladder-green)]/5 relative overflow-hidden">
        {/* Background glass elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-40 h-40 glass-card-blue rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 glass-card-green rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card-strong p-8 lg:p-12 rounded-3xl shadow-glass-lg mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[var(--text-primary)] mb-6">
              Need Help Overcoming a <span className="text-[var(--ladder-red)]">Barrier?</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Apply for assistance or refer someone who needs help. We partner with nonprofits to provide individual barrier removal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-help" 
                className="glass-button-accent text-lg px-8 py-4 rounded-xl shadow-glass-md hover:shadow-glass-lg transform hover:scale-105 transition-all duration-300"
              >
                Apply for Help
              </a>
              <a 
                href="/donate" 
                className="glass-button-secondary text-lg px-8 py-4 rounded-xl shadow-glass-md hover:shadow-glass-lg transform hover:scale-105 transition-all duration-300"
              >
                Donate Now
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-3xl shadow-glass-md">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* 501(c)(3) Status Display */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              The Ladder is a 501(c)(3) tax-exempt organization
            </p>
            <p className="text-sm text-gray-600">
              <strong>EIN:</strong> 47-2123160 | 
              <strong> Tax-deductible donations</strong> to the extent allowed by law
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      </main>
    </>
  )
}

