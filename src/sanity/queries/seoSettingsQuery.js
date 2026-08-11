import { groq } from 'next-sanity'

export const seoSettingsQuery = groq`
  *[_type == "seoSettings"][0] {
    defaultTitle,
    defaultDescription,
    keywords,
    siteUrl,
    ogImage {
      asset-> {
        url
      }
    }
  }
`
