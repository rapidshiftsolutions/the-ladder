import { cities } from '/src/data/locations'
import LocationsIndex from '/src/components/locations-index'

export const metadata = {
  title: 'Auto Services Near You | Cities We Serve in East Tennessee | OEM Radio Repair',
  description: 'OEM Radio Repair serves 25+ cities throughout East Tennessee including Knoxville, Gatlinburg, Sevierville, Morristown, Dandridge, Pigeon Forge and more. Professional auto repair, oil changes, motor building, and performance services within 1 hour drive of Birmingham, AL.',
  keywords: [
    'auto service East Tennessee',
    'oil change East Tennessee',
    'auto repair near me Tennessee',
    'Newport TN service area',
    'Knoxville auto service',
    'Gatlinburg auto service',
    'Sevierville auto service',
    'Pigeon Forge auto repair',
    'Morristown auto service',
    'Dandridge auto repair',
    'Jefferson City auto service',
    'Cocke County auto repair',
    'auto services near me TN',
    'car repair East Tennessee',
    'motor building East Tennessee'
  ],
  openGraph: {
    title: 'Auto Services Near You | Cities We Serve in East Tennessee',
    description: 'OEM Radio Repair serves 25+ cities throughout East Tennessee. Professional auto repair, oil changes, motor building, and performance services.',
    url: 'https://oemradiorepair.com/cities',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'Auto Services Near You - Cities We Serve in East Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Services Near You | Cities We Serve in East Tennessee',
    description: 'OEM Radio Repair serves 25+ cities throughout East Tennessee. Professional auto repair and performance services.',
    images: ['/meta.png']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/cities'
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

export default function CitiesPage() {
  return <LocationsIndex locations={cities} type="cities" />
}