import { cache } from 'react'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/queries/siteSettingsQuery'

export const getSiteSettings = cache(async () => {
  try {
    return (await client.fetch(siteSettingsQuery)) || null
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
})
