import { getFeedPosts } from '/src/sanity/queries'

export async function GET() {
  try {
    const posts = await getFeedPosts()
    
    // Format the current date for the RSS feed
    const now = new Date()
    const lastBuildDate = now.toUTCString()
    
    // Create the XML content with proper entity encoding
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>English Mountain Raceway News</title>
    <link>https://servisfirst.com/news</link>
    <description>News and updates from English Mountain Raceway</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="https://servisfirst.com/news/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => {
          // Ensure slug is properly cleaned for use in URLs
          const safeSlug = escapeUrl(post.slug || '')
          
          // Format date with error handling
          let pubDate = ''
          try {
            pubDate = new Date(post.publishedAt).toUTCString()
          } catch (e) {
            pubDate = now.toUTCString()
          }
          
          return `
    <item>
      <title>${escapeXml(post.title || '')}</title>
      <link>https://servisfirst.com/news/${safeSlug}</link>
      <guid>https://servisfirst.com/news/${safeSlug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(stripHtml(post.excerpt || ''))}</description>
    </item>`
        }
      )
      .join('')}
  </channel>
</rss>`

    // Return the XML with the correct content type header
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    
    // Return a basic valid XML in case of error
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>English Mountain Raceway News</title>
    <link>https://servisfirst.com/news</link>
    <description>News and updates from English Mountain Raceway</description>
  </channel>
</rss>`,
      {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
        },
        status: 500,
      }
    )
  }
}

// Helper function to properly escape XML entities
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Helper function to clean/escape slugs for URLs
function escapeUrl(slug) {
  if (!slug) return '';
  // First handle any URL-encoded entities
  return slug
    .replace(/&/g, 'and')  // Replace ampersands with "and" in URLs
    .replace(/[^\w-]/g, '-'); // Replace other special chars with hyphens
}

// Helper function to strip HTML tags for feed content
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}
