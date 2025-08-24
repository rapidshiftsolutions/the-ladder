import {groq} from 'next-sanity'

// Query to get all active service packages
export const packagesQuery = groq`
  *[_type == "servicePackage" && active == true] | order(order asc, _createdAt asc) {
    _id,
    name,
    slug,
    price,
    originalPrice,
    savings,
    duration,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    services[]{
      service->{
        _id,
        title,
        slug
      },
      customDescription
    },
    benefits,
    popular,
    order
  }
`

// Query to get a single package by slug
export const packageBySlugQuery = groq`
  *[_type == "servicePackage" && slug.current == $slug && active == true][0] {
    _id,
    name,
    slug,
    price,
    originalPrice,
    savings,
    duration,
    description,
    detailedDescription,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    services[]{
      service->{
        _id,
        title,
        slug,
        description,
        startingPrice
      },
      customDescription
    },
    benefits,
    popular,
    validFrom,
    validUntil
  }
`

// Query to get popular packages
export const popularPackagesQuery = groq`
  *[_type == "servicePackage" && popular == true && active == true] | order(order asc, _createdAt asc) {
    _id,
    name,
    slug,
    price,
    originalPrice,
    savings,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`

// Query to get package slugs for static generation
export const packageSlugsQuery = groq`
  *[_type == "servicePackage" && active == true] {
    "slug": slug.current
  }
`