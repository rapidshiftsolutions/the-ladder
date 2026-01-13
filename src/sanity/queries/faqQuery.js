import { groq } from 'next-sanity'

// Query to get all active FAQs
export const allFaqsQuery = groq`
  *[_type == "faq" && isActive == true] | order(category asc, order asc) {
    _id,
    question,
    answer,
    category,
    order,
    isFeatured
  }
`

// Query to get FAQs by category
export const faqsByCategoryQuery = groq`
  *[_type == "faq" && isActive == true && category == $category] | order(order asc) {
    _id,
    question,
    answer,
    order,
    isFeatured
  }
`

// Query to get donation page FAQs
export const donateFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "donate"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to get get-help page FAQs
export const getHelpFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "get-help"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to get about page FAQs
export const aboutFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "about"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to get partner page FAQs
export const partnerFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "partners"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to get volunteer page FAQs
export const volunteerFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "volunteer"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to get featured FAQs (for homepage or sidebar)
export const featuredFaqsQuery = groq`
  *[_type == "faq" && isActive == true && isFeatured == true] | order(order asc) [0...5] {
    _id,
    question,
    answer,
    category
  }
`

// Query to get general FAQs
export const generalFaqsQuery = groq`
  *[_type == "faq" && isActive == true && category == "general"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`
