import {groq} from 'next-sanity'

// Query to get all active testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial" && active == true] | order(order asc, _createdAt desc) {
    _id,
    customerName,
    location,
    rating,
    date,
    review,
    serviceUsed->{
      _id,
      title,
      slug
    },
    servicePackageUsed->{
      _id,
      name,
      slug
    },
    featured,
    verified,
    source
  }
`

// Query to get featured testimonials
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true && active == true] | order(order asc, _createdAt desc) {
    _id,
    customerName,
    location,
    rating,
    date,
    review,
    serviceUsed->{
      _id,
      title,
      slug
    },
    verified,
    source
  }
`

// Query to get testimonials for a specific service
export const testimonialsByServiceQuery = groq`
  *[_type == "testimonial" && (serviceUsed._ref == $serviceId || servicePackageUsed._ref == $serviceId) && active == true] | order(rating desc, _createdAt desc) {
    _id,
    customerName,
    location,
    rating,
    date,
    review,
    verified,
    source
  }
`