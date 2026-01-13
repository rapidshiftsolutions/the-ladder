import { groq } from 'next-sanity'

// Query to get donation settings
export const donationSettingsQuery = groq`
  *[_type == "donationSettings"][0] {
    _id,
    paypalLink,
    venmoUsername,
    cashAppTag,
    suggestedAmounts,
    impactStatements,
    monthlyGivingEnabled,
    taxInfo
  }
`
