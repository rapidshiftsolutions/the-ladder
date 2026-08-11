import { groq } from 'next-sanity'

// Process steps are currently managed via homepageContent; this stub keeps exports valid.
export const processStepsQuery = groq`
  *[_type == "homepageContent"][0] {
    howItWorksSteps
  }
`
