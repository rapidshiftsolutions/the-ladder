import { cookies } from 'next/headers'
import { getSanityWriteClient, isValidGuestSessionToken } from '@/lib/sanityServer'
import { guestPortalSettingsQuery } from '@/sanity/queries/guestPortalSettingsQuery'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('guest_portal_session')?.value

    if (!isValidGuestSessionToken(sessionToken)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const sanityClient = getSanityWriteClient()
    const settings = await sanityClient.fetch(guestPortalSettingsQuery)

    return Response.json({
      welcomeMessage:
        settings?.welcomeMessage ||
        "Welcome to The Ladder Guest Portal. Use the application form to request sponsorship for a specific barrier you're facing.",
      announcements: settings?.announcements || [],
      portalResources: settings?.portalResources || [],
    })
  } catch (error) {
    console.error('Portal content error:', error)
    return Response.json(
      {
        welcomeMessage:
          "Welcome to The Ladder Guest Portal. Use the application form to request sponsorship for a specific barrier you're facing.",
        announcements: [],
        portalResources: [],
      },
      { status: 200 }
    )
  }
}
