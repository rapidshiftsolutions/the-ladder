import { groq } from 'next-sanity'

export const guestPortalSettingsQuery = groq`
  *[_type == "guestPortalSettings"][0] {
    _id,
    welcomeMessage,
    portalResources[] {
      title,
      description,
      "fileUrl": file.asset->url,
      externalLink
    },
    announcements[] {
      title,
      content,
      date,
      important
    },
    sessionDuration
  }
`
