import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'About The Ladder | Birmingham Nonprofit Crisis Intervention & Barrier Assistance',
  description: 'Learn about The Ladder - Birmingham nonprofit founded in 2021. We help individuals overcome specific barriers preventing success through nonprofit partnerships and crisis intervention.',
  keywords: [
    'about The Ladder Birmingham',
    'Birmingham nonprofit organization',
    'crisis intervention Birmingham AL',
    'barrier removal assistance',
    'nonprofit partnerships Birmingham',
    'Birmingham charity organization',
    'individual barrier assistance',
    'The Ladder mission Birmingham',
    'nonprofit board Birmingham AL',
    'crisis intervention nonprofit',
    '501c3 Birmingham Alabama'
  ],
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">The Ladder</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help individuals one by one climb over very specific, personal barriers that are 
              otherwise keeping them from moving forward in life.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 inline-block">
              <p className="text-sm text-gray-600">
                <strong>501(c)(3) Tax-Exempt Organization</strong><br/>
                Founded 2021 • EIN: 47-2123160 • Birmingham, Alabama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Ladder partners with other nonprofits to help individuals overcome specific personal 
                barriers that are preventing them from moving forward in life. We focus on people over problems, 
                addressing individual roadblocks rather than focusing on specific issues.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Why "The Ladder"?</h3>
                <p className="text-primary-700">
                  We call ourselves "The Ladder" because we help individuals climb over specific barriers - 
                  the "missing rungs" that keep them from success. When a nonprofit can't meet a specific need, 
                  we step in to bridge the gap.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>People Over Problems:</strong> We focus on individual barriers, not systemic issues</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Partnership Model:</strong> We work with, not in competition with, other nonprofits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Individual Focus:</strong> Each case is unique and personally addressed</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>Rapid Response:</strong> We can address immediate needs quickly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our partnership process ensures individuals get the specific help they need
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Identification</h3>
                <p className="text-gray-600">
                  A nonprofit partner identifies a client who has encountered a barrier they can't overcome - 
                  something both the nonprofit and individual agree is preventing success, but falls outside 
                  the nonprofit's scope.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Referral</h3>
                <p className="text-gray-600">
                  The nonprofit partners with The Ladder for this specific need, maintaining their relationship 
                  with the individual while we address the barrier.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600">
                  The Ladder interviews the person to hear their story and identify potential solutions, 
                  ensuring we understand the specific barrier and how to address it effectively.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">
                  The Ladder works with the client to help them over the "missing rung," providing accountability, 
                  mentorship, and resources to ensure lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our board members have personal experiences overcoming significant life obstacles and believe 
              strongly in helping others overcome roadblocks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Chairman</h3>
              <p className="text-primary-600 font-medium mb-3">Blue Cross Blue Shield of Alabama</p>
              <p className="text-gray-600 text-sm">
                Brings extensive nonprofit board experience and healthcare industry knowledge. 
                Passionate about community health and crisis intervention.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Treasurer</h3>
              <p className="text-primary-600 font-medium mb-3">Co-Owner, DDS Solutions</p>
              <p className="text-gray-600 text-sm">
                Business leader with expertise in operations and financial management. 
                Committed to efficient resource allocation and sustainable growth.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Secretary</h3>
              <p className="text-primary-600 font-medium mb-3">Community Volunteer & Mentor</p>
              <p className="text-gray-600 text-sm">
                Certified Peer Support Specialist with lived experience in recovery. 
                Dedicated to helping others overcome personal barriers through mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Transparency */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparency & Accountability</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a young organization founded in 2021, we're committed to building trust through 
              transparency and measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Transparency</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Annual Form 990 filings available
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Listed on Charity Navigator
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ProPublica Nonprofit Explorer profile
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quarterly impact reports for donors
                </li>
              </ul>
              <a 
                href="/annual-reports" 
                className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-500 font-medium"
              >
                View Financial Documents
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100% of donations go to direct assistance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Volunteer-based operations model
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Regular board oversight and accountability
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Continuous impact measurement and reporting
                </li>
              </ul>
              <a 
                href="/board-governance" 
                className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-500 font-medium"
              >
                Learn About Our Governance
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Help Remove Barriers?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need assistance, want to refer someone, or support our mission, 
            we're here to help individuals climb over life's barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-help" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Apply for Help
            </a>
            <a 
              href="/donate" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Support Our Mission
            </a>
            <a 
              href="/partners" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}