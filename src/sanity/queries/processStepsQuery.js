import { groq } from 'next-sanity'

export const processStepsQuery = groq`
  *[_type == "processStep" && isActive != false] | order(stepNumber asc) {
    _id,
    stepNumber,
    title,
    description,
    iconName,
    isActive
  }
`
