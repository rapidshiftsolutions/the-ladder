#!/usr/bin/env node
/**
 * Creates the Studio singleton documents if they are missing.
 * Does not overwrite existing published content.
 */

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9a1830p7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const singletons = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    orgName: 'The Ladder',
    tagline: "Helping people climb over life's barriers, one rung at a time",
    foundedYear: 2021,
    ein: '82-0737087',
    phone: '(205) 306-1690',
    email: 'info@the-ladder.org',
    address: { city: 'Birmingham', state: 'AL' },
    socialLinks: { instagram: 'https://instagram.com/theladder_bham' },
  },
  {
    _id: 'homepageContent',
    _type: 'homepageContent',
    heroHeadline: 'Helping Individuals Overcome',
    heroHeadlineAccent: 'Barriers to Success',
    heroSubheadline:
      "When life's obstacles stand in your way, The Ladder partners with you to find solutions. We provide personalized crisis intervention and connect you with the resources you need.",
    heroPrimaryCta: 'Get Help Today',
    heroPrimaryCtaLink: '/get-help',
    heroSecondaryCta: 'Make a Donation',
    heroSecondaryCtaLink: '/donate',
    heroQuickContact: 'All services are free and confidential',
    trustBadgeText: '501(c)(3) Nonprofit • Serving Birmingham Since 2021',
  },
  {
    _id: 'donationSettings',
    _type: 'donationSettings',
    givebutterAccountId: 'cj1p7s9MwIXbWFeF',
    campaignCode: '9TRRVI',
    embedUrl:
      'https://givebutter.com/embed/c/support-local-people-striving-for-better-lives-9trrvi',
    donateWidgetId: 'g8M3W2',
    monthlyWidgetId: 'g8M3W2',
    floatingWidgetId: 'prW2aY',
    goalWidgetId: 'LZovEY',
    heroTitle: 'Help Someone Overcome a Barrier Today',
    monthlyGivingEnabled: true,
  },
  {
    _id: 'seoSettings',
    _type: 'seoSettings',
    defaultTitle: 'The Ladder - Birmingham Nonprofit Removing Barriers to Success',
    defaultDescription:
      'The Ladder helps Birmingham residents overcome specific barriers preventing their success. 501(c)(3) nonprofit providing crisis intervention, emergency assistance, and individual support through community partnerships.',
    siteUrl: 'https://the-ladder.org',
    keywords: [
      'Birmingham nonprofit',
      'donate to nonprofit Birmingham',
      'Birmingham Alabama charity',
      'crisis intervention Alabama',
      'emergency assistance Birmingham',
      'barrier removal',
      'nonprofit Birmingham AL',
    ],
  },
  {
    _id: 'guestPortalSettings',
    _type: 'guestPortalSettings',
    portalPassword: 'TheLadder1',
    sessionDuration: 7,
    welcomeMessage:
      "Welcome to The Ladder Guest Portal. Use the application form to request sponsorship for a specific barrier you're facing.",
  },
]

async function run() {
  const results = []
  for (const doc of singletons) {
    const existing = await client.getDocument(doc._id)
    if (existing) {
      results.push({ id: doc._id, status: 'exists' })
      continue
    }
    await client.createIfNotExists(doc)
    results.push({ id: doc._id, status: 'created' })
  }
  console.log(JSON.stringify({ ok: true, results }, null, 2))
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
