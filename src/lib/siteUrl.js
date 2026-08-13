/**
 * Canonical origin for absolute URLs (Open Graph images, canonical tags,
 * sitemap entries, JSON-LD).
 *
 * Defaults to the production domain. Netlify sets URL to whichever domain is
 * actually serving, so previews and deploy contexts still resolve correctly.
 *
 * Set NEXT_PUBLIC_SITE_URL to override.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://the-ladder.org'
).replace(/\/$/, '')

export default SITE_URL
