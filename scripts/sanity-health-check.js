#!/usr/bin/env node
/**
 * Read-only Sanity health check for The Ladder production dataset.
 */

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9a1830p7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const requiredSingletons = [
  'siteSettings',
  'homepageContent',
  'donationSettings',
  'guestPortalSettings',
  'seoSettings',
]

async function run() {
  const checks = []
  const add = (ok, label, detail) => checks.push({ ok, label, detail })

  const types = await client.fetch('array::unique(*[]._type)')
  const countTypes = [
    'teamMember',
    'successStory',
    'partnerOrganization',
    'processStep',
    'assistanceApplication',
    'blogPost',
    'annualReport',
    'faq',
    'impactExample',
  ]
  const counts = {}
  for (const t of countTypes) {
    counts[t] = await client.fetch('count(*[_type == $t])', { t })
  }

  for (const id of requiredSingletons) {
    const doc = await client.getDocument(id)
    add(Boolean(doc), `Singleton ${id}`, doc ? 'present' : 'MISSING')
  }

  const siteSettings = await client.fetch(
    '*[_id == "siteSettings"][0]{phone,email,orgName}'
  )
  add(siteSettings?.phone === '(205) 306-1690', 'Site phone', siteSettings?.phone || 'missing')
  add(Boolean(siteSettings?.email), 'Site email', siteSettings?.email || 'missing')

  const board = await client.fetch(
    'count(*[_type == "teamMember" && memberType == "board" && active == true])'
  )
  const staff = await client.fetch(
    'count(*[_type == "teamMember" && memberType == "staff" && active == true])'
  )
  add(board > 0, 'Active board members', String(board))
  add(staff > 0, 'Active staff members', String(staff))

  const stories = await client.fetch('count(*[_type == "successStory" && isActive != false])')
  add(stories > 0, 'Active success stories', String(stories))

  const partners = await client.fetch(
    'count(*[_type == "partnerOrganization" && isActive != false])'
  )
  add(partners > 0, 'Active partners', String(partners))

  const steps = await client.fetch('count(*[_type == "processStep" && isActive != false])')
  add(steps > 0, 'Active process steps', String(steps))

  const portal = await client.fetch(
    '*[_id == "guestPortalSettings"][0]{"hasPassword": defined(portalPassword), sessionDuration}'
  )
  add(Boolean(portal?.hasPassword), 'Guest portal password configured', JSON.stringify(portal))

  const leftovers = await client.fetch(
    'count(*[phone match "*522-1162*" || name match "*Simonetti*"])'
  )
  add(leftovers === 0, 'No leftover old phone/name in CMS', String(leftovers))

  const failed = checks.filter((c) => !c.ok)
  const report = {
    projectId: client.config().projectId,
    dataset: client.config().dataset,
    types,
    counts,
    checks,
    ok: failed.length === 0,
    failed: failed.map((c) => c.label),
  }
  console.log(JSON.stringify(report, null, 2))
  if (failed.length) process.exit(1)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
