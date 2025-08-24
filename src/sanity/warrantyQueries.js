import {groq} from 'next-sanity'

// Query to get all active warranties
export const warrantiesQuery = groq`
  *[_type == "warranty" && active == true] | order(order asc, _createdAt asc) {
    _id,
    service,
    slug,
    warrantyPeriod,
    coverage,
    description,
    icon,
    conditions,
    exclusions,
    relatedServices[]->{
      _id,
      title,
      slug
    }
  }
`

// Query to get a single warranty by slug
export const warrantyBySlugQuery = groq`
  *[_type == "warranty" && slug.current == $slug && active == true][0] {
    _id,
    service,
    slug,
    warrantyPeriod,
    coverage,
    description,
    icon,
    conditions,
    exclusions,
    relatedServices[]->{
      _id,
      title,
      slug,
      startingPrice
    }
  }
`

// Query to get warranties for a specific service
export const warrantiesByServiceQuery = groq`
  *[_type == "warranty" && $serviceId in relatedServices[]._ref && active == true] {
    _id,
    service,
    slug,
    warrantyPeriod,
    coverage,
    icon
  }
`