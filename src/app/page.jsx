import GlassNavigation from '/src/components/GlassNavigation'
import LadderHeroRedesigned from '/src/components/page-landing-hero-redesigned'
import HowWeHelpRedesigned from '/src/components/how-we-help-redesigned'
import SuccessStoriesRedesigned from '/src/components/success-stories-redesigned'
import DonationSectionRedesigned from '/src/components/donation-section-redesigned'
import ContactSectionRedesigned from '/src/components/contact-section-redesigned'
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
      <main className="min-h-screen">
        <LadderHeroRedesigned />
        <HowWeHelpRedesigned />
        <SuccessStoriesRedesigned />
        <DonationSectionRedesigned />
        <ContactSectionRedesigned />
        <Footer />
      </main>
    </>
  )
}