import { createClient } from '@sanity/client'

/**
 * Server-side Sanity client with write-capable token.
 * Accepts SANITY_API_TOKEN or NEXT_PUBLIC_SANITY_TOKEN for local/dev compatibility.
 */
export function getSanityWriteClient() {
  const token =
    process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN

  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token,
  })
}

export function isValidGuestSessionToken(token) {
  return Boolean(token && token.startsWith('ladder_guest_') && token.length > 20)
}
