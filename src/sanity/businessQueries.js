import {groq} from 'next-sanity'

// Query to get business information
export const businessInfoQuery = groq`
  *[_type == "businessInfo"][0] {
    _id,
    businessName,
    tagline,
    phone,
    email,
    address,
    hours,
    socialMedia,
    googleMapsUrl,
    aboutDescription,
    values,
    certifications
  }
`

// Query to get just contact information
export const contactInfoQuery = groq`
  *[_type == "businessInfo"][0] {
    businessName,
    phone,
    email,
    address,
    hours,
    socialMedia,
    googleMapsUrl
  }
`

// Query to get just business hours
export const businessHoursQuery = groq`
  *[_type == "businessInfo"][0] {
    hours
  }
`