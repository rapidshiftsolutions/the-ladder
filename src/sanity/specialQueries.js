import {groq} from 'next-sanity'

// Query to get all active special offers
export const specialsQuery = groq`
  *[_type == "special" && active == true && expiresAt > now()] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    discount,
    description,
    details,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    couponCode,
    featured,
    validFrom,
    expiresAt,
    order
  }
`

// Query to get featured special offers
export const featuredSpecialsQuery = groq`
  *[_type == "special" && featured == true && active == true && expiresAt > now()] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    discount,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    expiresAt
  }
`

// Query to get a single special by slug
export const specialBySlugQuery = groq`
  *[_type == "special" && slug.current == $slug && active == true][0] {
    _id,
    title,
    slug,
    discount,
    description,
    details,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    applicableServices[]->{
      _id,
      title,
      slug,
      startingPrice
    },
    couponCode,
    validFrom,
    expiresAt,
    termsAndConditions
  }
`

// Query to get special slugs for static generation
export const specialSlugsQuery = groq`
  *[_type == "special" && active == true] {
    "slug": slug.current
  }
`