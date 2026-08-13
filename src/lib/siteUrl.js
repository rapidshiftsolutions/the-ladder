/**
 * Canonical origin for absolute URLs (Open Graph images, canonical tags,
 * sitemap entries, JSON-LD).
 *
 * Always prefer the production domain. Do not use Netlify's automatic URL
 * env var here — it resolves to theladder.netlify.app and would publish
 * the wrong host in sitemap.xml / robots.txt / metadata.
 *
 * Set NEXT_PUBLIC_SITE_URL to override (e.g. local or preview testing).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://the-ladder.org'
).replace(/\/$/, '')

export default SITE_URL
