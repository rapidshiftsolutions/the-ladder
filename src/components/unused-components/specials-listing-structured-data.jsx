export default function SpecialsListingStructuredData({ specials }) {
  if (!specials || specials.length === 0) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Current Auto Service Specials & Deals",
    "description": "Save money on professional infotainment screen repair at OEM Radio Repair in Birmingham, AL. Limited-time specials on digitizer and LCD replacements for Dodge, Chrysler, Jeep, and Ram vehicles.",
    "url": "https://oemradiorepair.com/specials",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Auto Service Specials",
      "description": "Current special offers and deals on automotive services",
      "numberOfItems": specials.length,
      "itemListElement": specials.map((special, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": special.title,
        "description": special.description || special.title,
        "price": special.discount.includes('$') ? special.discount.replace(/[^0-9.]/g, '') : "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": special.validFrom,
        "validThrough": special.expiresAt,
        "url": `https://oemradiorepair.com/specials/${special.slug?.current}`,
        "seller": {
          "@type": "AutomotiveBusiness",
          "name": "OEM Radio Repair",
          "url": "https://oemradiorepair.com",
          "telephone": "(205) 522-1162",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2413 1st Ave S",
            "addressLocality": "Birmingham",
            "addressRegion": "AL",
            "postalCode": "35233",
            "addressCountry": "US"
          }
        },
        "category": "Automotive Service",
        "businessFunction": "https://schema.org/Sell",
        ...(special.image?.asset?.url && {
          "image": {
            "@type": "ImageObject",
            "url": special.image.asset.url,
            "caption": special.image.alt || special.title
          }
        })
      }))
    },
    "provider": {
      "@type": "AutomotiveBusiness",
      "name": "OEM Radio Repair",
      "alternateName": "OEM Radio Repair Infotainment Service",
      "description": "OEM Radio Repair is Birmingham, AL's premier infotainment repair service specializing in touchscreen digitizer and LCD replacements for Dodge, Chrysler, Jeep, Cadillac, and Ram vehicles.",
      "url": "https://oemradiorepair.com",
      "telephone": "(205) 522-1162",
      "email": "info@oemradiorepair.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2413 1st Ave S",
        "addressLocality": "Birmingham",
        "addressRegion": "AL",
        "postalCode": "35233",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5186",
        "longitude": "-86.8104"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-17:00"
      ],
      "priceRange": "$",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "currenciesAccepted": "USD",
      "areaServed": [
        {
          "@type": "City",
          "name": "Newport",
          "containedInPlace": {
            "@type": "State",
            "name": "Tennessee"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Cocke County"
        }
      ],
      "serviceType": [
        "Oil Change Service",
        "Motor Building",
        "Engine Rebuilds",
        "Suspension Work",
        "Wheels & Tires",
        "Performance Parts Installation",
        "Fluid Services",
        "Auto Maintenance"
      ],
      "sameAs": [
        "https://www.facebook.com/Newportpitstopquicklube"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://oemradiorepair.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Specials",
          "item": "https://oemradiorepair.com/specials"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}