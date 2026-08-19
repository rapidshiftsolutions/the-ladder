import { groq } from 'next-sanity'

// Query to get all partner organizations
export const allPartnerOrganizationsQuery = groq`
  *[_type == "partnerOrganization" && isActive != false] | order(featured desc, order asc, name asc) {
    _id,
    name,
    logo {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    description,
    website,
    phone,
    address,
    category,
    featured,
    order
  }
`

// Query to get featured partner organizations
export const featuredPartnerOrganizationsQuery = groq`
  *[_type == "partnerOrganization" && featured == true && isActive != false] | order(order asc, name asc) {
    _id,
    name,
    logo {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    description,
    website,
    category
  }
`

// Query to get partner organizations by category
export const partnerOrganizationsByCategoryQuery = groq`
  *[_type == "partnerOrganization" && category == $category && isActive != false] | order(name asc) {
    _id,
    name,
    logo {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    description,
    website,
    phone,
    category
  }
`
