import { groq } from 'next-sanity'

// Query to get all homepage content
export const homepageContentQuery = groq`
  *[_type == "homepageContent"][0] {
    // Hero Section
    heroHeadline,
    heroHeadlineAccent,
    heroSubheadline,
    heroImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    heroPrimaryCta,
    heroPrimaryCtaLink,
    heroSecondaryCta,
    heroSecondaryCtaLink,
    heroQuickContact,
    
    // Trust Badge
    trustBadgeText,
    
    // Problem/Solution Section
    problemSectionBadge,
    problemSectionHeadline,
    problemSectionSubheadline,
    challengeItems[] {
      service,
      gap
    },
    solutionItems[] {
      title,
      description
    },
    
    // Featured Testimonial
    featuredTestimonialBadge,
    featuredTestimonialHeadline,
    featuredTestimonialQuote,
    featuredTestimonialStats[] {
      value,
      label
    },
    
    // Impact Section Testimonial
    impactTestimonialQuote,
    impactTestimonialName,
    impactTestimonialContext,
    
    // Final CTA Section
    finalCtaHeadline,
    finalCtaHeadlineAccent,
    finalCtaSubheadline,
    finalCtaClosingHeadline,
    finalCtaClosingText,
    ctaOptions[] {
      title,
      description,
      ctaText,
      ctaLink,
      urgencyText,
      statsText,
      iconName,
      accentColor
    }
  }
`

// Query to get just the hero section (for performance)
export const heroSectionQuery = groq`
  *[_type == "homepageContent"][0] {
    heroHeadline,
    heroHeadlineAccent,
    heroSubheadline,
    heroImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    heroPrimaryCta,
    heroPrimaryCtaLink,
    heroSecondaryCta,
    heroSecondaryCtaLink,
    heroQuickContact,
    trustBadgeText
  }
`

// Query to get the featured testimonial for How It Works section
export const featuredTestimonialQuery = groq`
  *[_type == "homepageContent"][0] {
    featuredTestimonialBadge,
    featuredTestimonialHeadline,
    featuredTestimonialQuote,
    featuredTestimonialStats[] {
      value,
      label
    }
  }
`

// Query to get the impact section testimonial
export const impactTestimonialQuery = groq`
  *[_type == "homepageContent"][0] {
    impactTestimonialQuote,
    impactTestimonialName,
    impactTestimonialContext
  }
`

// Query to get CTA options for the final section
export const ctaOptionsQuery = groq`
  *[_type == "homepageContent"][0] {
    finalCtaHeadline,
    finalCtaHeadlineAccent,
    finalCtaSubheadline,
    finalCtaClosingHeadline,
    finalCtaClosingText,
    ctaOptions[] {
      title,
      description,
      ctaText,
      ctaLink,
      urgencyText,
      statsText,
      iconName,
      accentColor
    }
  }
`
