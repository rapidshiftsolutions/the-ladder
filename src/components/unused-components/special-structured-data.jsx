export default function SpecialStructuredData({ special }) {
  if (!special) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://oemradiorepair.com/specials/${special.slug?.current}`,
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
        "addressLocality": "Newport",
        "addressRegion": "TN",
        "postalCode": "37821",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.9606",
        "longitude": "-83.1879"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-17:00"
      ],
      "priceRange": "$",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "currenciesAccepted": "USD"
    },
    "category": "Automotive Service",
    "businessFunction": "https://schema.org/Sell",
    "itemCondition": "https://schema.org/NewCondition"
  }

  // Add image if available
  if (special.image?.asset?.url) {
    structuredData.image = {
      "@type": "ImageObject",
      "url": special.image.asset.url,
      "width": 800,
      "height": 600,
      "caption": special.image.alt || special.title
    }
  }

  // Add eligible service details if available
  if (special.applicableServices && special.applicableServices.length > 0) {
    structuredData.itemOffered = special.applicableServices.map(service => ({
      "@type": "Service",
      "name": service.title,
      "url": `https://oemradiorepair.com/services/${service.slug?.current}`,
      "serviceType": "Automotive Service",
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "OEM Radio Repair"
      }
    }))
  }

  // Add promotional details
  if (special.details && special.details.length > 0) {
    structuredData.additionalProperty = special.details.map(detail => ({
      "@type": "PropertyValue",
      "name": "Offer Detail",
      "value": detail
    }))
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