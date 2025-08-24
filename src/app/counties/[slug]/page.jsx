import { notFound } from 'next/navigation'
import { counties, services, generateLocationContent } from '/src/data/locations'
import LocationPageContent from '/src/components/location-page-content'

// Generate static params for all counties
export async function generateStaticParams() {
  return counties.map((county) => ({
    slug: county.slug,
  }))
}

// Generate metadata for each county page
export async function generateMetadata({ params }) {
  const county = counties.find((c) => c.slug === params.slug)
  
  if (!county) {
    return {
      title: 'County Not Found | OEM Radio Repair',
      description: 'The requested county page could not be found.'
    }
  }

  const serviceKeywords = services.map(s => s.keywords).flat()
  const locationKeywords = county.keywords
  
  return {
    title: `Auto Services in ${county.name} | OEM Radio Repair - Oil Changes & More`,
    description: `Professional auto services throughout ${county.name}. Oil changes, transmission service, brake fluid, filters & more. Newport TN based, serving all ${county.name} communities. Starting at $37.49.`,
    keywords: [
      ...serviceKeywords.map(keyword => `${keyword} ${county.name}`),
      ...locationKeywords,
      `auto service ${county.name}`,
      `car maintenance ${county.name}`,
      `oil change ${county.name}`,
      `auto shop ${county.name}`,
      `vehicle service ${county.name}`,
      `OEM Radio Repair ${county.name}`,
      `automotive service ${county.name}`,
      ...county.cities?.map(city => `auto service ${city} TN`) || []
    ],
    openGraph: {
      title: `Auto Services in ${county.name} | OEM Radio Repair`,
      description: `Professional automotive services serving ${county.name}. Oil changes, transmission service, and more. Located in Newport TN.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'OEM Radio Repair',
      images: [
        {
          url: '/meta.png',
          width: 1200,
          height: 630,
          alt: `OEM Radio Repair Auto Services - Serving ${county.name}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Auto Services in ${county.name} | OEM Radio Repair`,
      description: `Professional automotive services serving ${county.name}. Oil changes starting at $37.49.`,
      images: ['/meta.png']
    },
    alternates: {
      canonical: `https://oemradiorepair.com/counties/${county.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-TN',
      'geo.placename': `${county.name}, Tennessee`,
      'geo.position': `${county.coordinates.lat};${county.coordinates.lng}`,
      'ICBM': `${county.coordinates.lat}, ${county.coordinates.lng}`,
    }
  }
}

// Add JSON-LD structured data
function generateJsonLd(county) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'OEM Radio Repair',
    description: `Professional auto services serving ${county.name}`,
    url: `https://oemradiorepair.com/counties/${county.slug}`,
    telephone: '(205) 522-1162',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2413 1st Ave S',
      addressLocality: 'Newport',
      addressRegion: 'TN',
      postalCode: '37821',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.9606,
      longitude: -83.1943
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: county.name,
        addressRegion: 'TN',
        addressCountry: 'US'
      },
      ...(county.cities?.map(city => ({
        '@type': 'City',
        name: city,
        addressRegion: 'TN', 
        addressCountry: 'US'
      })) || []),
      {
        '@type': 'State',
        name: 'Tennessee',
        addressCountry: 'US'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: county.coordinates.lat,
        longitude: county.coordinates.lng
      },
      geoRadius: '60 miles'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description
        },
        price: service.startingPrice !== 'Free' ? service.startingPrice : '0',
        priceCurrency: 'USD'
      }))
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 08:00-17:00'
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD'
  }
}

export default function CountyPage({ params }) {
  const county = counties.find((c) => c.slug === params.slug)
  
  if (!county) {
    notFound()
  }

  const content = generateLocationContent(county, 'county')
  const jsonLd = generateJsonLd(county)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationPageContent 
        location={county}
        locationType="county"
        content={content}
        services={services}
      />
    </>
  )
}