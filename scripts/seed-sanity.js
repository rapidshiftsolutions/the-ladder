#!/usr/bin/env node
/**
 * Sanity Seed Data Script
 * 
 * This script uploads initial content to Sanity CMS extracted from the production site.
 * Run with: node scripts/seed-sanity.js
 * 
 * Requires SANITY_PROJECT_ID, SANITY_DATASET, and SANITY_WRITE_TOKEN environment variables
 */

import { createClient } from '@sanity/client'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '9a1830p7',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// =============================================================================
// TEAM MEMBERS (Board of Directors) - From production site
// =============================================================================
const teamMembers = [
  {
    _type: 'teamMember',
    _id: 'board-chairman',
    name: 'Board Chairman',
    title: 'Chairman of the Board',
    organization: 'Blue Cross Blue Shield of Alabama',
    bio: 'Healthcare industry executive with extensive nonprofit board experience. Passionate about community health and crisis intervention. Brings strategic leadership and healthcare industry connections to The Ladder. Has personal experience overcoming significant life obstacles and believes strongly in helping others overcome roadblocks through immediate needs assistance, accountability, and mentorship.',
    memberType: 'board',
    order: 1,
    active: true,
  },
  {
    _type: 'teamMember',
    _id: 'board-treasurer',
    name: 'Board Treasurer',
    title: 'Treasurer',
    organization: 'Co-Owner, DDS Solutions',
    bio: 'Business leader and co-owner of a successful trucking business with expertise in operations and financial management. Committed to efficient resource allocation and sustainable organizational growth. Ensures fiscal responsibility and transparency in all of The Ladder\'s financial operations.',
    memberType: 'board',
    order: 2,
    active: true,
  },
  {
    _type: 'teamMember',
    _id: 'board-secretary',
    name: 'Tara Bevelheimer',
    title: 'Secretary',
    organization: 'Community Volunteer & Mentor',
    bio: 'Certified Peer Support Specialist with lived experience in recovery. Dedicated to helping others overcome personal barriers through mentorship and compassionate support. Brings invaluable perspective from personal journey of overcoming obstacles, making them uniquely qualified to understand and assist those The Ladder serves.',
    memberType: 'board',
    order: 3,
    active: true,
  }
]

// =============================================================================
// SUCCESS STORIES - From production site testimonials
// =============================================================================
const successStories = [
  {
    _type: 'successStory',
    _id: 'success-story-maria',
    name: 'Maria T.',
    story: 'A single mom with two small children who lost her car in an accident and thought she would lose everything. The Ladder stepped in quickly, providing a rental car so she could continue working until she was able to get a different vehicle. With transportation secured, Maria was able to maintain her employment and stability for her family. Today, she has a new job that she loves and has moved into a beautiful new home. Her story exemplifies how removing one specific barrier can unlock an entire future.',
    barrier: 'transportation',
    outcome: 'Maintained employment, secured new vehicle, moved into permanent housing, now thriving in new career',
    featured: true,
    order: 1,
    publishedAt: '2023-06-15',
  },
  {
    _type: 'successStory',
    _id: 'success-story-sarah',
    name: 'Sarah M.',
    story: 'Sarah was working hard to get back on her feet when her car broke down unexpectedly. Without reliable transportation, she was at risk of losing her new job - and with it, her path to stability. The Ladder covered her car repair costs within 48 hours, allowing her to keep working. Two years later, Sarah owns her own home and now volunteers to help others facing similar obstacles. She\'s living proof that sometimes all it takes is one helping hand at the right moment.',
    barrier: 'transportation',
    outcome: 'Maintained employment, purchased home, now mentors others',
    featured: true,
    order: 2,
    publishedAt: '2023-08-20',
  },
  {
    _type: 'successStory',
    _id: 'success-story-james',
    name: 'James W.',
    story: 'James had finally landed the job offer he\'d been working toward, but he faced an unexpected barrier: he needed work boots and uniforms before he could start, and he didn\'t have the funds. Many organizations couldn\'t help with this specific need, but The Ladder covered these costs quickly. James has been employed ever since, supporting his family and building toward a brighter future.',
    barrier: 'employment',
    outcome: 'Started new career, supporting family, planning for future',
    featured: false,
    order: 3,
    publishedAt: '2023-10-01',
  }
]

// =============================================================================
// PARTNER ORGANIZATIONS - Birmingham area nonprofits and resources
// =============================================================================
const partnerOrganizations = [
  {
    _type: 'partnerOrganization',
    _id: 'partner-salvation-army',
    name: 'The Salvation Army of Birmingham',
    description: 'Provides emergency assistance including food, shelter, and clothing to those in need throughout the Birmingham area.',
    category: 'food',
    phone: '(205) 328-2420',
    website: 'https://salvationarmyalm.org',
    featured: true,
    order: 1,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-united-way',
    name: 'United Way of Central Alabama',
    description: 'Coordinates community resources and connects individuals with local services across education, income, and health.',
    category: 'other',
    phone: '211',
    website: 'https://uwca.org',
    featured: true,
    order: 2,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-community-food-bank',
    name: 'Community Food Bank of Central Alabama',
    description: 'Distributes food to individuals and families facing hunger throughout central Alabama.',
    category: 'food',
    phone: '(205) 942-8911',
    website: 'https://communityfoodbank.com',
    featured: false,
    order: 3,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-one-roof',
    name: 'One Roof',
    description: 'Birmingham\'s coordinated entry point for homeless services, providing assessments and connections to housing resources.',
    category: 'housing',
    phone: '(205) 251-8284',
    website: 'https://oneroofbham.org',
    featured: true,
    order: 4,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-free-clinic',
    name: 'Free2BMe Clinic',
    description: 'Provides free medical care to uninsured and underinsured individuals in the Birmingham area.',
    category: 'healthcare',
    phone: '(205) 933-9283',
    featured: false,
    order: 5,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-legal-aid',
    name: 'Legal Aid Society of Birmingham',
    description: 'Offers free legal assistance to low-income individuals for civil matters including housing, family law, and benefits.',
    category: 'legal',
    phone: '(205) 328-3540',
    website: 'https://lasb.org',
    featured: false,
    order: 6,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-goodwill',
    name: 'Goodwill Industries of Central Alabama',
    description: 'Provides job training, employment placement services, and other community programs.',
    category: 'employment',
    phone: '(205) 323-6331',
    website: 'https://alabamagoodwill.org',
    featured: false,
    order: 7,
  },
  {
    _type: 'partnerOrganization',
    _id: 'partner-pathways',
    name: 'Pathways',
    description: 'Serves homeless families with children, providing shelter and supportive services to help them achieve independence.',
    category: 'housing',
    phone: '(205) 252-6677',
    website: 'https://pathwayshome.org',
    featured: false,
    order: 8,
  }
]

// =============================================================================
// EVENTS - Currently no active events
// =============================================================================
const events = [
  // No events currently listed on production site
  // Events will be added through Sanity Studio when scheduled
]

// =============================================================================
// UPLOAD FUNCTION
// =============================================================================
async function seedSanity() {
  console.log('🌱 Starting Sanity seed...\n')
  
  try {
    // Upload Team Members
    console.log('👥 Uploading Team Members...')
    for (const member of teamMembers) {
      await client.createOrReplace(member)
      console.log(`   ✓ ${member.name}`)
    }
    console.log('')
    
    // Upload Success Stories
    console.log('📖 Uploading Success Stories...')
    for (const story of successStories) {
      await client.createOrReplace(story)
      console.log(`   ✓ ${story.name}`)
    }
    console.log('')
    
    // Upload Partner Organizations
    console.log('🤝 Uploading Partner Organizations...')
    for (const partner of partnerOrganizations) {
      await client.createOrReplace(partner)
      console.log(`   ✓ ${partner.name}`)
    }
    console.log('')
    
    // Upload Events (if any)
    if (events.length > 0) {
      console.log('📅 Uploading Events...')
      for (const event of events) {
        await client.createOrReplace(event)
        console.log(`   ✓ ${event.title}`)
      }
      console.log('')
    }
    
    console.log('✅ Sanity seed completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - ${teamMembers.length} team members`)
    console.log(`   - ${successStories.length} success stories`)
    console.log(`   - ${partnerOrganizations.length} partner organizations`)
    console.log(`   - ${events.length} events`)
    
  } catch (error) {
    console.error('❌ Error seeding Sanity:', error.message)
    process.exit(1)
  }
}

// Run the seed
seedSanity()
