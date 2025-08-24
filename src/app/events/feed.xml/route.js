import { getEvents } from '/src/sanity/eventQueries';
import { image } from '/src/sanity/image';

export const dynamic = 'force-dynamic'; // Don't cache this route

export async function GET() {
  // Fetch a large number of events for the feed
  const events = await getEvents(0, 100);
  
  // Create the base URL for the site
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://englishmountainraceway.com';
  
  // Generate the XML feed
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>English Mountain Raceway Events</title>
    <link>${baseUrl}/events</link>
    <description>Racing events and updates from English Mountain Raceway</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/events/feed.xml" rel="self" type="application/rss+xml" />
    ${events
      .map((event) => {
        // Get image URL if available
        const imageUrl = event.mainImage 
          ? image(event.mainImage).width(1200).height(630).url()
          : '';

        // Format the event date
        const pubDate = event.eventDate 
          ? new Date(event.eventDate).toUTCString()
          : new Date().toUTCString();

        // Create the item entry
        return `
    <item>
      <title><![CDATA[${event.title}]]></title>
      <link>${baseUrl}/events/${event.slug?.current}</link>
      <guid>${baseUrl}/events/${event.slug?.current}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${event.excerpt || ''}]]></description>
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg" />` : ''}
      ${event.eventType ? `<category>${event.eventType}</category>` : ''}
      ${event.categories && event.categories.length > 0 
        ? event.categories.map(category => `<category>${category.title}</category>`).join('') 
        : ''}
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  // Return the XML with appropriate headers
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600, s-maxage=3600', // Cache for an hour
    },
  });
}
