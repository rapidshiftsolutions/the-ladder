import { groq } from 'next-sanity'

// Query to get donation settings (GiveButter is the only payment method)
export const donationSettingsQuery = groq`
  *[_type == "donationSettings"][0] {
    _id,
    givebutterAccountId,
    givebutterCampaignCode,
    givebutterWidgetId,
    givebutterGoalWidgetId,
    suggestedAmounts,
    impactStatements,
    monthlyGivingEnabled,
    taxInfo
  }
`
