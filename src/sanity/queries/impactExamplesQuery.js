import { groq } from 'next-sanity'

// Query to get all active impact examples
export const allImpactExamplesQuery = groq`
  *[_type == "impactExample" && isActive == true] | order(order asc, amount asc) {
    _id,
    amount,
    title,
    description,
    iconName,
    order
  }
`

// Query to get impact examples sorted by amount (for donation page)
export const impactExamplesByAmountQuery = groq`
  *[_type == "impactExample" && isActive == true] | order(amount asc) {
    _id,
    amount,
    title,
    description,
    iconName
  }
`

// Query to get a specific number of impact examples
export const limitedImpactExamplesQuery = groq`
  *[_type == "impactExample" && isActive == true] | order(order asc, amount asc) [0...$limit] {
    _id,
    amount,
    title,
    description,
    iconName
  }
`
