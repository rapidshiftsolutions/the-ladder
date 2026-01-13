import { groq } from 'next-sanity'

// Query to get all active process steps
export const allProcessStepsQuery = groq`
  *[_type == "processStep" && isActive == true] | order(stepNumber asc) {
    _id,
    stepNumber,
    title,
    description,
    iconName
  }
`

// Query to get a specific step by number
export const processStepByNumberQuery = groq`
  *[_type == "processStep" && stepNumber == $stepNumber && isActive == true][0] {
    _id,
    stepNumber,
    title,
    description,
    iconName
  }
`

// Query to get the count of active steps
export const processStepsCountQuery = groq`
  count(*[_type == "processStep" && isActive == true])
`
