import { groq } from 'next-sanity'

export const donationSettingsQuery = groq`
  *[_type == "donationSettings"][0] {
    _id,
    givebutterAccountId,
    campaignCode,
    embedUrl,
    donateWidgetId,
    monthlyWidgetId,
    floatingWidgetId,
    goalWidgetId,
    heroTitle,
    heroSubtitle,
    donationPageIntro,
    formSectionTitle,
    suggestedAmounts,
    defaultAmount,
    monthlyGivingEnabled,
    monthlyHeroTitle,
    monthlyHeroSubtitle,
    monthlyGivingTiers,
    monthlyGivingHeadline,
    monthlyGivingDescription,
    taxInfo,
    thankYouMessage,
    matchingGiftInfo,
    trustBadgeText,
    showOtherWaysToGive,
    paypalLink,
    venmoUsername,
    cashAppTag,
    zelleEmail,
    checkInstructions
  }
`
