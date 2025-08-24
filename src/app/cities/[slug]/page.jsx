import { notFound } from 'next/navigation'
import { cities, services, generateLocationContent } from '/src/data/locations'
import LocationPageContent from '/src/components/location-page-content'
import ContactForm from '/src/components/ContactForm'

// Generate static params for all cities
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = cities.find((c) => c.slug === params.slug)
  
  if (!city) {
    return {
      title: 'City Not Found | OEM Radio Repair',
      description: 'The requested city page could not be found.'
    }
  }

  const locationName = `${city.name}, ${city.state}`
  const serviceKeywords = services.map(s => s.keywords).flat()
  const locationKeywords = city.keywords
  
  return {
    title: `Auto Services in ${locationName} | OEM Radio Repair - Oil Changes & More`,
    description: `Professional auto services in ${locationName}. Oil changes, transmission service, brake fluid, filters & more. Located in Newport TN, serving ${city.name} area. Starting at $37.49.`,
    keywords: [
      ...serviceKeywords.map(keyword => `${keyword} ${city.name} TN`),
      ...locationKeywords,
      `auto service ${city.name} TN`,
      `car maintenance ${city.name} TN`, 
      `oil change ${city.name} TN`,
      `auto shop near ${city.name} TN`,
      `vehicle service ${city.name} TN`,
      `OEM Radio Repair ${city.name}`,
      `${city.county} auto service`,
      `automotive service ${city.name}`
    ],
    openGraph: {
      title: `Auto Services in ${locationName} | OEM Radio Repair`,
      description: `Professional automotive services serving ${locationName}. Oil changes, transmission service, and more. ${city.driveTime} from ${city.name}.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'OEM Radio Repair',
      images: [
        {
          url: '/meta.png',
          width: 1200,
          height: 630,
          alt: `OEM Radio Repair Auto Services - Serving ${locationName}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Auto Services in ${locationName} | OEM Radio Repair`,
      description: `Professional automotive services serving ${locationName}. Oil changes starting at $37.49.`,
      images: ['/meta.png']
    },
    alternates: {
      canonical: `https://oemradiorepair.com/cities/${city.slug}`
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
      'geo.placename': `${city.name}, Tennessee`,
      'geo.position': `${city.coordinates.lat};${city.coordinates.lng}`,
      'ICBM': `${city.coordinates.lat}, ${city.coordinates.lng}`,
    }
  }
}

// Add JSON-LD structured data
function generateJsonLd(city) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'OEM Radio Repair',
    description: `Professional auto services serving ${city.name}, ${city.state}`,
    url: `https://oemradiorepair.com/cities/${city.slug}`,
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
        '@type': 'City',
        name: city.name,
        addressRegion: 'TN',
        addressCountry: 'US'
      },
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
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng
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

export default function CityPage({ params }) {
  const city = cities.find((c) => c.slug === params.slug)
  
  if (!city) {
    notFound()
  }

  const content = generateLocationContent(city, 'city')
  const jsonLd = generateJsonLd(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationPageContent 
        location={city}
        locationType="city"
        content={content}
        services={services}
      />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-surface-900 to-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Get Your Free Repair Quote
            </h2>
            <p className="text-lg text-text-secondary">
              Professional infotainment repair service for {city.name}, {city.state} residents
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}