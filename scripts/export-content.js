#!/usr/bin/env node

/**
 * Sanity Content Export Script
 * 
 * This script exports content data as NDJSON format that can be imported
 * into Sanity using: npx sanity dataset import content-export.ndjson
 * 
 * Usage: node scripts/export-content.js > content-export.ndjson
 */

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// ============================================================
// SUCCESS STORIES DATA (extracted from /testimonies)
// ============================================================
const successStories = [
  {
    name: 'Gatlin',
    barrier: 'transportation',
    story: 'When we met Gatlin, he was caring for his younger siblings and working three jobs at just 19 years old—all without a vehicle of his own! His goal is to become a corrections officer and then a police officer. The obstacle he faced was transportation, forcing him to depend on others for rides. Even so, he was faithful to his employment and was serving others through small groups and church youth ministry. The Ladder provided him with a car, so he has been able to continue to help his family and serve his community, while pursuing his career goals.',
    outcome: 'Received a car, continuing to help family, serving community, pursuing career goals',
    featured: true,
  },
  {
    name: 'Craig',
    barrier: 'financial',
    story: 'Craig was in financial straits because he had borrowed against his vehicle during a divorce. The high interest rate on this loan kept him trapped. The Ladder provided a zero-interest loan so that he could pay off his debt and move forward. The Ladder is using the money Craig repays to help others.',
    outcome: 'Paid off high-interest debt, moving forward financially',
    featured: false,
  },
  {
    name: 'Jennifer',
    barrier: 'financial',
    story: 'Jennifer is a single mother in recovery. She has overcome many obstacles and is moving forward in her life, but she is saddled with debt. The Ladder paid off several of her high-interest credit cards by gifting half and loaning the other half at 0% interest. This has improved her credit score so that she can get into permanent housing. The money she repays The Ladder will be used to help others.',
    outcome: 'Improved credit score, on path to permanent housing',
    featured: false,
  },
  {
    name: 'Jamil & Erika',
    barrier: 'transportation',
    story: 'Jamil and Erika have overcome homelessness, losing everything due to a car fire during a cross-country move, and other obstacles. Throughout months of living in transition and beyond, they served in multiple ways through Birmingham Dream Center and other avenues. They both work hard to provide for their six children, but transportation was an issue with only one small vehicle. The Ladder provided the funds to purchase a minivan.',
    outcome: 'Purchased minivan, able to transport six children',
    featured: true,
  },
  {
    name: 'Kim & Woody',
    barrier: 'housing',
    story: "I just want to thank the Ladder for your help. I'm disabled and my husband works a job with no benefits or time off. When he ended up in the hospital with two surgeries we got behind on our rent. The Ladder stepped in and paid our rent for a month. This gave him time to recover and get back to work. We have always worked and provided for ourselves and haven't ever taken help like this. But we would have been homeless without it and without you. Woody has a better job now, and we are looking forward to the day when he can get an even better one. We are so grateful for your help, and it really did give us all we needed - a chance!",
    outcome: 'Kept their home, Woody recovered and got a better job',
    featured: false,
  },
  {
    name: 'Victoria',
    barrier: 'transportation',
    story: 'I am a single mom with two small children. When I lost my car in an accident that was not my fault, I was stuck in my apartment and feeling anxious and depressed, as I had no transportation to get to work and grocery stores, take my son to school, etc. The Ladder provided a rental car for me until I could get a different vehicle. I now have a new job that I love and have moved into a beautiful new home. Everyone at The Ladder was so kind and loving. It was such a blessing for my family, and I will forever be grateful.',
    outcome: 'New job, moved into new home',
    featured: true,
  },
  {
    name: 'Brandon & Candy',
    barrier: 'housing',
    story: 'Brandon & Candy are a hard-working young couple with a huge heart for children. They are caring for seven children whose families of origin could not care for them. In order to ensure their safety and comfort, they needed their roof fixed. The Ladder paid for the materials, and Brandon and his father made the repair!',
    outcome: 'Roof repaired, providing safe home for seven children',
    featured: false,
  },
  {
    name: 'Asha',
    barrier: 'transportation',
    story: 'Asha is raising her three children alone since her husband was murdered in 2019. She works hard to care for them, but suffered a setback when her vehicle had mechanical issues. She subsequently lost her job and got behind on bills. While a partner nonprofit guides her job search and career development, The Ladder paid her past-due water and utility bills and provided for her vehicle repair.',
    outcome: 'Vehicle repaired, utilities paid, working with partner nonprofit on career',
    featured: false,
  },
  {
    name: 'Anonymous (Recovery)',
    barrier: 'healthcare',
    story: 'One man is climbing the ladder to sobriety after years of difficult challenges. The Ladder helped to pay for time in a rehab facility, rent and utilities while he was away from work, and life coaching to help him keep climbing his ladder to success.',
    outcome: 'In recovery, receiving life coaching support',
    featured: false,
  },
  {
    name: 'D.J. & Rachel',
    barrier: 'transportation',
    story: "D. J. and Rachel's family grew from 4 to 7 when they took in his sister's three teenagers after their mother suffered a tragic accident. The Ladder helped them purchase a van that better serves their needs.",
    outcome: 'Purchased van to transport expanded family',
    featured: false,
  },
  {
    name: 'Tonia',
    barrier: 'housing',
    story: 'Tonia had lost her apartment and was living in a shelter with her young son. The Ladder helped her pay the back rent she owed so that she could move forward and secure a permanent home.',
    outcome: 'Paid back rent, secured permanent home',
    featured: false,
  },
  {
    name: 'Tim',
    barrier: 'employment',
    story: "Tim's career was greatly affected by the shutdowns in response to the COVID-19 pandemic. And then he was also diagnosed with cancer. The Ladder provided a new laptop to support Tim in starting an at-home business that will support his family.",
    outcome: 'Started at-home business with new laptop',
    featured: false,
  },
  {
    name: 'Trey & Jennifer',
    barrier: 'financial',
    story: 'My husband lost his job when he hurt his knee and told his employer that he needed to have surgery. Recovery was longer than expected and so was getting hired at a new company. After using all of our savings, the amount that the bank account showed was not going allow us to pay our mortgage, power or water bill—not to mention the medical bills from the knee surgery. The Ladder met our needs. A financial blessing that would keep us from more debt, late fees, credit issues, or worse while my husband was waiting to be hired by a new company. He has now been re-hired, and we continue to climb, thanks to The Ladder!',
    outcome: 'Husband re-hired, continuing to climb',
    featured: false,
  },
]

// ============================================================
// TEAM MEMBERS DATA (extracted from /leadership-team)
// ============================================================
const teamMembers = [
  {
    name: 'Kevin Kiser',
    title: 'Board Chairman',
    organization: 'Blue Cross Blue Shield of Alabama',
    memberType: 'board',
    order: 1,
    bio: 'I have a heart for service. Throughout my life I have always held some sort of service role in addition to my "paying bills" job. I have been on boards of other nonprofits and served in local government and ministry roles, but working with The Ladder has given me a unique opportunity to work alongside incredible people who have overcome personal obstacles. I love the stories of what my fellow Board members have been through and what God is doing within all of us to redeem our lives so that we can help others in return. Everyone on this board knows what it\'s like to struggle and to need a helping hand. That includes me, and I am so honored to be able to help others. I enjoy mentoring men and traveling the world with my wife and children.',
  },
  {
    name: 'Dave Woods',
    title: 'Board Treasurer',
    organization: 'Co-Owner, DDS Solutions',
    memberType: 'board',
    order: 2,
    bio: 'While in addiction recovery, I found a sense of purpose I had not embraced before—to bless others with what God provides for me. Through healing and sponsoring others, I have seen God show up over and over. When I started my company in 2017, the strategic plan included sharing the success of the company with those who needed help. I believe God will grow and multiply our ability to help others. In my free time, I thoroughly enjoy what God has blessed me with, including snowboarding, travel, and spending time with my wife and two children. The Ladder has allowed me a vehicle to pursue my passion of helping others and then seeing how it benefits their family and those around them for generations.',
  },
  {
    name: 'Olivia Morgan',
    title: 'Board Secretary',
    organization: 'Community Volunteer & Mentor',
    memberType: 'board',
    order: 3,
    bio: 'After getting sober in January of 2010, I found a new way of life through a 12-step program and learned the importance of helping others and mentoring other women fighting the same struggles that I once faced. I worked for a local nonprofit called Focus on Recovery and became a Certified Peer Support Specialist (CPSS). In 2021, I felt that God was moving me to serve Him in a new way. While praying through it, I was invited to the first board meeting of a new nonprofit that would become The Ladder. I knew with my whole heart that this was the path that God had for me. The Ladder stands for everything that I believe in—helping others get over a roadblock in their life through helping them with an immediate need under the umbrella of accountability and mentorship. I support my husband Corey\'s business, Morgan Construction, as "wife-tary". My husband, son Cooper, and I live in Helena, Alabama, where most of my extra time is spent with family and friends.',
  },
  {
    name: 'Chris Hendon',
    title: 'Board Member',
    organization: 'Owner, Summit LGS and Hendon Lawn & Landscape',
    memberType: 'board',
    order: 4,
    bio: 'As a local business owner and father of 3 girls, I hold helping others as a vital component in my life. In 2016 I was able to open my first business because someone gave me an opportunity through a loan when I had no other options. With that one roadblock removed, not only was I able to better the life of my family, but it also enabled me to help others on a different level. When I was asked if I wanted to help start what is now The Ladder, I was all in. Being able to help others in the same way that changed my life is one of the greatest gifts I\'ve been given.',
  },
  {
    name: 'William Strait',
    title: 'Board Member',
    organization: 'Co-owner, DDS Solutions',
    memberType: 'board',
    order: 5,
    bio: 'Growing up, my father worked as an NCIS agent for the federal government. As a result, my grade school years consisted of packing my bags for big moves and unique travels all across the country. In 2015, I found myself a college drop-out, and I started a new life in Birmingham, Alabama. I decided to join America\'s workforce, and a few years later, I was blessed with an opportunity in the trucking business. I now co-own DDS Solutions. When I am not booking freight at work, I enjoy deep-sea fishing in the Gulf of Mexico and spending time with my wife. The Ladder is important to me because I have received a lot of help over the years, and I believe God has called me to pay it forward to those in need.',
  },
  {
    name: 'Lara Allen',
    title: 'Executive Director',
    organization: 'Owner, Nonprofit Navigators',
    memberType: 'staff',
    order: 1,
    bio: 'I have served as live-in staff in transitional homes, development coordinator for a multi-faceted agency in urban Denver, and grant writer/consultant for numerous nonprofits. I founded Nonprofit Navigators in 2008 and have grown the organization into a firm that serves nonprofit organizations in multiple states through grant writing and development consulting. I enjoy championing causes I believe in and encouraging people in their gifts and callings. My husband and I are raising two teens and are very involved in small groups and service projects through our church. In 2021, I embraced the opportunity to support the founding of The Ladder, believing that helping individuals overcome short-term obstacles can make a long-term difference.',
  },
  {
    name: 'Courtney Williams',
    title: 'Board Member',
    organization: 'Owner, TMLL Brands: Leather & Lace Boutique & TMLL Beauty Co. & Dub Properties',
    memberType: 'board',
    order: 6,
    bio: 'I have served many years in the addiction-recovery community and enjoy serving others in my community. I am excited for the support and counsel I can provide The Ladder through marketing and branding skills. I also look forward to helping people in the Birmingham community climb The Ladder!',
  },
  {
    name: 'John Thomas',
    title: 'Board Member',
    organization: 'National Account Manager, DDS Solutions',
    memberType: 'board',
    order: 7,
    bio: 'In July of 2016, I found myself at a crossroads. My addiction to drugs and alcohol had led me to a place where I never thought I would end up. I was lost. Through the help of others, I was able to get treatment for my addiction. After going through a 12-step recovery program and surrendering my will and my life to Jesus, I was finally free. At that point, I realized that a life of serving others is how I would truly fulfill the purpose for which I was created. Over the past seven years, I have served as a volunteer in various capacities at my local church and in 12-step recovery groups. I work as a National Account Manager for DDS Solutions. It was at DDS that I was first introduced to The Ladder by our owners, Dave Woods and Will Strait. Since joining the Board of Directors for the Ladder, I have been honored to show people in our community the love of Christ in the same way that others once helped me.',
  },
]

// ============================================================
// PARTNER ORGANIZATIONS DATA (extracted from /other-resources)
// ============================================================
const partnerOrganizations = [
  {
    name: 'Grace Klein Community',
    category: 'food',
    description: 'Grace Klein Community provides food assistance, clothing, and community support to families in need in the Birmingham area.',
    website: 'http://www.gracekleincommunity.com',
    featured: true,
  },
  {
    name: 'ULECx Market',
    category: 'employment',
    description: 'ULECx provides marketplace solutions and resources for community members.',
    website: 'https://ulecx.com',
    featured: false,
  },
  {
    name: 'Blood Flow Coaching',
    category: 'healthcare',
    description: 'Blood Flow Coaching provides health and wellness coaching services.',
    website: 'http://www.bloodflowcoaching.com',
    featured: false,
  },
  {
    name: 'Leather & Lace Boutique',
    category: 'other',
    description: 'Local boutique supporting The Ladder mission.',
    website: 'http://www.shopwithleatherandlace.com',
    featured: false,
  },
]

// ============================================================
// PROCESS STEPS DATA (extracted from homepage)
// ============================================================
const processSteps = [
  {
    stepNumber: 1,
    title: 'Partner Referral',
    description: 'A nonprofit is serving a person.',
    iconName: 'Users',
  },
  {
    stepNumber: 2,
    title: 'Identify Barrier',
    description: 'This person has encountered a barrier he or she can\'t climb over without other help.',
    iconName: 'Target',
  },
  {
    stepNumber: 3,
    title: 'Confirm Need',
    description: 'The nonprofit and individual agree it\'s the one thing keeping them from success.',
    iconName: 'CheckCircle',
  },
  {
    stepNumber: 4,
    title: 'Outside Scope',
    description: 'However, this specific need falls outside the scope of the nonprofit\'s offerings.',
    iconName: 'HelpCircle',
  },
  {
    stepNumber: 5,
    title: 'Connect with The Ladder',
    description: 'At this point, the nonprofit partners with The Ladder.',
    iconName: 'Handshake',
  },
  {
    stepNumber: 6,
    title: 'Personal Interview',
    description: 'The Ladder interviews the person to hear their story and help identify potential solutions.',
    iconName: 'MessageSquare',
  },
  {
    stepNumber: 7,
    title: 'Barrier Removed',
    description: 'The Ladder will work with the client to help them over the "missing rung."',
    iconName: 'CheckCircle',
  },
]

// Output NDJSON format
const documents = []

// Add success stories
successStories.forEach(story => {
  documents.push({
    _id: `successStory-${slugify(story.name)}`,
    _type: 'successStory',
    name: story.name,
    barrier: story.barrier,
    story: story.story,
    outcome: story.outcome,
    featured: story.featured,
    isActive: true,
    publishedAt: new Date().toISOString().split('T')[0],
  })
})

// Add team members
teamMembers.forEach(member => {
  documents.push({
    _id: `teamMember-${slugify(member.name)}`,
    _type: 'teamMember',
    name: member.name,
    title: member.title,
    organization: member.organization,
    memberType: member.memberType,
    order: member.order,
    bio: member.bio,
    active: true,
  })
})

// Add partner organizations
partnerOrganizations.forEach(partner => {
  documents.push({
    _id: `partnerOrg-${slugify(partner.name)}`,
    _type: 'partnerOrganization',
    name: partner.name,
    category: partner.category,
    description: partner.description,
    website: partner.website,
    featured: partner.featured,
    isActive: true,
  })
})

// Add process steps
processSteps.forEach(step => {
  documents.push({
    _id: `processStep-${step.stepNumber}`,
    _type: 'processStep',
    stepNumber: step.stepNumber,
    title: step.title,
    description: step.description,
    iconName: step.iconName,
    isActive: true,
  })
})

// Output as NDJSON
documents.forEach(doc => {
  console.log(JSON.stringify(doc))
})
