import { notFound } from 'next/navigation'
import { publicClient } from '../../../sanity/lib/client'
import { specialBySlugQuery, specialSlugsQuery } from '../../../sanity/specialQueries'
import Navbar from '../../../components/sitewide-navbar'
import Footer from '../../../components/sitewide-footer-newport'
import SpecialDetailContent from '../../../components/special-detail-content'
import SpecialStructuredData from '../../../components/special-structured-data'

// Generate static params for all specials
export async function generateStaticParams() {
  try {
    const specials = await publicClient.fetch(specialSlugsQuery)
    return specials.map((special) => ({
      slug: special.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Generate metadata for each special
export async function generateMetadata({ params }) {
  try {
    const special = await publicClient.fetch(specialBySlugQuery, { slug: params.slug })
    
    if (!special) {
      return {
        title: 'Special Not Found | OEM Radio Repair',
        description: 'The special you are looking for could not be found.',
      }
    }

    return {
      title: `${special.title} - ${special.discount} | OEM Radio Repair Auto Service Special`,
      description: `${special.description || special.title} - ${special.discount} at OEM Radio Repair in Birmingham, AL. Limited time auto service special. Call (205) 522-1162 to claim this exclusive deal today!`,
      keywords: [
        `${special.title.toLowerCase()} Newport TN`,
        `${special.discount.toLowerCase()} auto service Newport`,
        'oil change special Newport Tennessee',
        'car maintenance discount Newport TN',
        'auto repair deal OEM Radio Repair',
        'service special Newport Tennessee',
        'automotive discount Newport TN',
        'car service coupon Newport',
        'maintenance special OEM Radio Repair',
        'auto service promotion Newport'
      ],
      openGraph: {
        title: `${special.title} - ${special.discount} | OEM Radio Repair Auto Special`,
        description: `${special.description || special.title} at OEM Radio Repair in Birmingham, AL. Limited time offer - call (205) 522-1162 to claim this deal!`,
        url: `https://oemradiorepair.com/specials/${params.slug}`,
        type: 'website',
        locale: 'en_US',
        siteName: 'OEM Radio Repair',
        images: special.image?.asset?.url ? [
          {
            url: special.image.asset.url,
            width: 1200,
            height: 630,
            alt: `${special.title} - ${special.discount} at OEM Radio Repair in Birmingham, AL`,
          }
        ] : [
          {
            url: '/meta.png',
            width: 1200,
            height: 630,
            alt: `${special.title} - OEM Radio Repair Auto Service Special`
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${special.title} - ${special.discount} | OEM Radio Repair`,
        description: `${special.description || special.title} at OEM Radio Repair in Birmingham, AL. Limited time auto service special!`,
        images: special.image?.asset?.url ? [special.image.asset.url] : ['/meta.png'],
      },
      alternates: {
        canonical: `https://oemradiorepair.com/specials/${params.slug}`
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
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Special | OEM Radio Repair',
      description: 'Auto service special at OEM Radio Repair in Birmingham, AL.',
    }
  }
}

export default async function SpecialPage({ params }) {
  let special
  
  try {
    special = await publicClient.fetch(specialBySlugQuery, { slug: params.slug })
  } catch (error) {
    console.error('Error fetching special:', error)
    notFound()
  }

  if (!special) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <SpecialStructuredData special={special} />
      <Navbar />
      <SpecialDetailContent special={special} />
      <Footer />
    </main>
  )
}