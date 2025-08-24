import {groq} from 'next-sanity'

// Query to get all active services
export const servicesQuery = groq`
  *[_type == "service" && active == true] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    startingPrice,
    duration,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    icon,
    features,
    featured,
    order
  }
`

// Query to get a single service by slug
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug && active == true][0] {
    _id,
    title,
    slug,
    subtitle,
    description,
    longDescription,
    startingPrice,
    duration,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    icon,
    features,
    serviceTypes,
    process,
    faqs,
    warranty,
    relatedServices[]->{
      _id,
      title,
      slug,
      startingPrice,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    featured
  }
`

// Query to get featured services
export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true && active == true] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    description,
    startingPrice,
    duration,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    icon
  }
`

// Query to get service slugs for static generation
export const serviceSlugsQuery = groq`
  *[_type == "service" && active == true] {
    "slug": slug.current
  }
`