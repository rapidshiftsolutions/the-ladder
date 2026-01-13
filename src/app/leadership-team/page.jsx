import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'

export const metadata = {
  title: 'Leadership Team | The Ladder Birmingham Nonprofit',
  description: 'Meet the dedicated board members and staff leading The Ladder nonprofit in Birmingham, Alabama. Our team is committed to helping community members overcome barriers.',
  keywords: [
    'The Ladder board members',
    'Birmingham nonprofit leadership',
    'The Ladder staff',
    'nonprofit board Birmingham',
    'community leaders Birmingham AL',
  ],
  openGraph: {
    title: 'Leadership Team | The Ladder',
    description: 'Meet our dedicated board members and staff helping Birmingham residents overcome barriers.',
    url: 'https://www.the-ladder.org/leadership-team',
    type: 'website',
  },
}

// Placeholder team members - in production, fetch from Sanity
const teamMembers = [
  {
    name: 'Board Member Name',
    title: 'Board President',
    organization: 'Community Partner Organization',
    bio: 'Dedicated community leader with years of experience in nonprofit management and a passion for helping others succeed.',
    memberType: 'board',
  },
  {
    name: 'Board Member Name',
    title: 'Vice President',
    organization: 'Local Business',
    bio: 'Business professional committed to giving back to the Birmingham community through strategic guidance and resources.',
    memberType: 'board',
  },
  {
    name: 'Board Member Name',
    title: 'Treasurer',
    organization: 'Financial Services Company',
    bio: 'Financial expert ensuring The Ladder maintains fiscal responsibility and maximizes impact for every donated dollar.',
    memberType: 'board',
  },
  {
    name: 'Board Member Name',
    title: 'Secretary',
    organization: 'Healthcare Organization',
    bio: 'Healthcare professional who understands the barriers individuals face and works to create pathways to success.',
    memberType: 'board',
  },
  {
    name: 'Board Member Name',
    title: 'Board Member',
    organization: 'Education Institution',
    bio: 'Educator dedicated to breaking down educational barriers and creating opportunities for Birmingham residents.',
    memberType: 'board',
  },
  {
    name: 'Board Member Name',
    title: 'Board Member',
    organization: 'Community Organization',
    bio: 'Longtime community advocate passionate about connecting people with resources they need to thrive.',
    memberType: 'board',
  },
]

export default function LeadershipTeamPage() {
  const boardMembers = teamMembers.filter(m => m.memberType === 'board')
  const staffMembers = teamMembers.filter(m => m.memberType === 'staff')

  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen flex-col pt-16 sm:pt-20">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-ladder-blue to-ladder-blue-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-heading">
            Our Leadership Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the dedicated individuals who guide The Ladder's mission to help Birmingham 
            residents overcome barriers and achieve their goals.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Board of Directors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our volunteer board members bring diverse expertise and a shared commitment 
              to serving our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Photo Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-ladder-blue/10 to-ladder-green/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-ladder-blue/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ladder-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-ladder-blue font-medium">{member.title}</p>
                  {member.organization && (
                    <p className="text-sm text-gray-500 mt-1">{member.organization}</p>
                  )}
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section (if any) */}
      {staffMembers.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Our Staff</h2>
              <p className="text-lg text-gray-600">
                The team that works daily to remove barriers and create opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gradient-to-br from-ladder-green/10 to-ladder-gold/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-ladder-green/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ladder-green/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 font-heading">
                      {member.name}
                    </h3>
                    <p className="text-ladder-green font-medium">{member.title}</p>
                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Us CTA */}
      <section className="py-16 bg-ladder-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in serving on our board or volunteering your expertise? 
            We're always looking for passionate community members to help us grow our impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="bg-white text-ladder-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Volunteer With Us
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      </main>
    </>
  )
}
