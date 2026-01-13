import SiteHeader from '../components/SiteHeader'
import HeroCompact from '../components/hero-compact'
import ProblemSolutionCompact from '../components/problem-solution-compact'
import HowItWorksCompact from '../components/how-it-works-compact'
import ImpactTrustCompact from '../components/impact-trust-compact'
import FinalActionCompact from '../components/final-action-compact'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'The Ladder | Birmingham Nonprofit Helping Individuals Overcome Barriers',
  description: 'The Ladder is a Birmingham, Alabama 501(c)(3) nonprofit helping individuals overcome barriers to success through crisis intervention, emergency assistance, and community partnerships. Apply for help or donate today.',
  keywords: [
    'Birmingham Alabama nonprofit',
    'crisis intervention Birmingham',
    'emergency assistance Birmingham',
    'Birmingham barrier removal',
    'individual support Birmingham AL',
    'nonprofit partnership Birmingham',
    'Birmingham nonprofit crisis services',
    'emergency help Birmingham',
    'Birmingham community assistance',
    'individual barrier assistance Alabama',
    'crisis help Birmingham Alabama',
    'Birmingham nonprofit partnerships',
    'The Ladder Birmingham',
    'Birmingham charity',
    'donate Birmingham Alabama',
    'Birmingham nonprofits'
  ],
  openGraph: {
    title: 'The Ladder | Birmingham Nonprofit Helping Individuals Overcome Barriers',
    description: 'The Ladder is a Birmingham 501(c)(3) nonprofit helping individuals overcome specific barriers preventing their success. Crisis intervention and emergency assistance. Apply for help or donate today.',
    url: 'https://www.the-ladder.org',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder - Birmingham Nonprofit Helping Individuals Overcome Barriers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ladder | Birmingham Nonprofit Helping Individuals Overcome Barriers',
    description: 'Birmingham 501(c)(3) helping individuals overcome barriers through crisis intervention and community partnerships.',
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
      <SiteHeader />
      <main id="main-content" className="min-h-screen">
        <HeroCompact />
        <ProblemSolutionCompact />
        <HowItWorksCompact />
        <ImpactTrustCompact />
        <FinalActionCompact />
      </main>
      <SiteFooter />
    </>
  )
}
