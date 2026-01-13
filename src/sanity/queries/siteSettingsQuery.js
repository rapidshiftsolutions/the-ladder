import { groq } from 'next-sanity'

// Query to get all site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    orgName,
    tagline,
    mission,
    foundedYear,
    ein,
    phone,
    email,
    address {
      street,
      city,
      state,
      zip
    },
    socialLinks {
      facebook,
      instagram,
      linkedin,
      twitter
    },
    impactStats {
      individualsHelped,
      individualsHelpedLabel,
      successRate,
      successRateLabel,
      responseTime,
      responseTimeLabel,
      directImpact,
      directImpactLabel,
      avgInvestment,
      avgInvestmentLabel,
      daysToResolution,
      daysToResolutionLabel,
      longTermSuccess,
      longTermSuccessLabel
    },
    logo {
      asset-> {
        _id,
        url
      },
      alt
    },
    logoLight {
      asset-> {
        _id,
        url
      },
      alt
    },
    favicon {
      asset-> {
        _id,
        url
      }
    }
  }
`

// Query to get just contact information
export const contactInfoQuery = groq`
  *[_type == "siteSettings"][0] {
    phone,
    email,
    address {
      street,
      city,
      state,
      zip
    }
  }
`

// Query to get just social links
export const socialLinksQuery = groq`
  *[_type == "siteSettings"][0] {
    socialLinks {
      facebook,
      instagram,
      linkedin,
      twitter
    }
  }
`

// Query to get impact statistics
export const impactStatsQuery = groq`
  *[_type == "siteSettings"][0] {
    impactStats {
      individualsHelped,
      individualsHelpedLabel,
      successRate,
      successRateLabel,
      responseTime,
      responseTimeLabel,
      directImpact,
      directImpactLabel,
      avgInvestment,
      avgInvestmentLabel,
      daysToResolution,
      daysToResolutionLabel,
      longTermSuccess,
      longTermSuccessLabel
    }
  }
`

// Query to get organization basics (for footer, headers)
export const orgBasicsQuery = groq`
  *[_type == "siteSettings"][0] {
    orgName,
    tagline,
    phone,
    email,
    ein,
    foundedYear,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`
