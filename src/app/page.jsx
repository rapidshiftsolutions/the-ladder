import GlassNavigation from '../components/GlassNavigation'
import HeroCompact from '../components/hero-compact'
import ProblemSolutionCompact from '../components/problem-solution-compact'
import HowItWorksCompact from '../components/how-it-works-compact'
import ImpactTrustCompact from '../components/impact-trust-compact'
import FinalActionCompact from '../components/final-action-compact'
import FooterCompact from '../components/footer-compact'

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
        <HeroCompact />
        <ProblemSolutionCompact />
        <HowItWorksCompact />
        <ImpactTrustCompact />
        <FinalActionCompact />
        <FooterCompact />
      </main>
    </>
  )
}