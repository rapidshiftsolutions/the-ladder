import SiteHeader from '../components/SiteHeader'
import HeroCompact from '../components/hero-compact'
import ProblemSolutionCompact from '../components/problem-solution-compact'
import HowItWorksRedesigned from '../components/how-it-works-redesigned'
import ImpactTrustRedesigned from '../components/impact-trust-redesigned'
import FinalActionCompact from '../components/final-action-compact'
import SiteFooter from '../components/SiteFooter'
import { client } from '@/sanity/lib/client'
import { homepageContentQuery, heroSectionQuery } from '@/sanity/queries/homepageQuery'
import { siteSettingsQuery, impactStatsQuery } from '@/sanity/queries/siteSettingsQuery'

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

// Revalidate every hour
export const revalidate = 3600

// Fetch all homepage data
async function getHomepageData() {
  try {
    const [homepageContent, siteSettings] = await Promise.all([
      client.fetch(homepageContentQuery),
      client.fetch(siteSettingsQuery),
    ])
    
    return {
      homepageContent: homepageContent || null,
      siteSettings: siteSettings || null,
    }
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return {
      homepageContent: null,
      siteSettings: null,
    }
  }
}

export default async function Home() {
  const { homepageContent, siteSettings } = await getHomepageData()
  
  // Extract impact stats from site settings
  const impactStats = siteSettings?.impactStats || null

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen">
        <HeroCompact 
          content={homepageContent}
          stats={impactStats}
          siteSettings={siteSettings}
        />
        <ProblemSolutionCompact 
          content={homepageContent}
        />
        <HowItWorksRedesigned />
        <ImpactTrustRedesigned />
        <FinalActionCompact 
          content={homepageContent}
          impactStats={impactStats}
          siteSettings={siteSettings}
        />
      </main>
      <SiteFooter siteSettings={siteSettings} />
    </>
  )
}
