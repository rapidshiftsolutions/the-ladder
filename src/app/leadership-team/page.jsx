import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Heart, Users } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { boardMembersQuery } from '@/sanity/queries/leadershipQuery'

export const metadata = {
  title: 'Leadership Team | Board of Directors',
  description: 'Meet The Ladder\'s leadership team and board of directors. Our leaders bring diverse experience and a shared commitment to helping individuals overcome barriers.',
  openGraph: {
    title: 'Leadership Team | The Ladder Birmingham',
    description: 'Meet our board of directors and leadership team.',
    url: 'https://www.the-ladder.org/leadership-team',
    type: 'website'
  }
}

// Revalidate every hour
export const revalidate = 3600

// Fallback data in case Sanity is unavailable
const fallbackBoardMembers = [
  {
    _id: 'fallback-chairman',
    name: 'Board Chairman',
    title: 'Chairman of the Board',
    organization: 'Blue Cross Blue Shield of Alabama',
    bio: 'Healthcare industry executive with extensive nonprofit board experience. Passionate about community health and crisis intervention. Brings strategic leadership and healthcare industry connections to The Ladder.',
    image: null
  },
  {
    _id: 'fallback-treasurer',
    name: 'Board Treasurer',
    title: 'Treasurer',
    organization: 'Co-Owner, DDS Solutions',
    bio: 'Business leader with expertise in operations and financial management. Committed to efficient resource allocation and sustainable organizational growth. Ensures fiscal responsibility and transparency.',
    image: null
  },
  {
    _id: 'fallback-secretary',
    name: 'Tara Bevelheimer',
    title: 'Secretary',
    organization: 'Community Volunteer & Mentor',
    bio: 'Certified Peer Support Specialist with lived experience in recovery. Dedicated to helping others overcome personal barriers through mentorship and compassionate support.',
    image: null
  }
]

async function getBoardMembers() {
  try {
    const members = await client.fetch(boardMembersQuery)
    return members && members.length > 0 ? members : fallbackBoardMembers
  } catch (error) {
    console.error('Error fetching board members:', error)
    return fallbackBoardMembers
  }
}

export default async function LeadershipTeamPage() {
  const boardMembers = await getBoardMembers()

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Leadership Team
              </h1>
              <p className="text-xl text-white/90">
                Our board members bring diverse professional experience and personal 
                commitment to helping individuals overcome barriers.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h2 
                      className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Leadership Built on Experience
                    </h2>
                    <p className="text-[var(--color-text-secondary)]">
                      Our board members have personal experiences overcoming significant life obstacles, 
                      including addiction recovery. They believe strongly in helping others overcome 
                      roadblocks through immediate needs assistance, accountability, and mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Board of Directors
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Volunteer leadership dedicated to The Ladder&apos;s mission of removing 
                barriers and transforming lives.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <div 
                  key={member._id} 
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center"
                >
                  {/* Avatar */}
                  {member.image?.asset?.url ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                      <Image
                        src={member.image.asset.url}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-[var(--color-primary)]">
                        {member.title?.split(' ').map(w => w[0]).join('') || member.name?.[0] || '?'}
                      </span>
                    </div>
                  )}
                  
                  <h3 
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-1"
                  >
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {member.organization}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--color-primary)] hover:underline"
                    >
                      View LinkedIn Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Governance & Oversight
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Our board provides strategic direction and ensures accountability.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Fiscal Responsibility</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Regular financial oversight ensures donations are used effectively.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Quarterly Meetings</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Regular board meetings to review progress and set direction.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Mission Focused</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    All decisions guided by our commitment to removing barriers.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link href="/board-governance" className="btn btn-secondary">
                  Learn More About Our Governance
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether through volunteering, donating, or partnering, you can help us 
              remove barriers and transform lives in Birmingham.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/volunteer" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Volunteer With Us
              </Link>
              <Link href="/donate" className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]">
                Support Our Mission
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
