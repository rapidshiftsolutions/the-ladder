import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Users, Heart, Clock, CheckCircle, Award, Star, Phone, Mail, Calendar, Target, Shield, HelpingHand } from 'lucide-react'

export const metadata = {
  title: 'Volunteer Opportunities | The Ladder Birmingham Community Volunteers',
  description: 'Join The Ladder volunteer team in Birmingham, Alabama. Help with crisis intervention, barrier removal, and community outreach. Training provided for all volunteers.',
  keywords: [
    'volunteer Birmingham Alabama',
    'nonprofit volunteer opportunities',
    'Birmingham community volunteers',
    'crisis intervention volunteers',
    'barrier removal volunteers',
    'The Ladder volunteers',
    'volunteer Birmingham nonprofit',
    'community service Birmingham',
    'volunteer training Birmingham',
    'nonprofit volunteer work',
    'Birmingham volunteer programs',
    'volunteer crisis support',
    'community volunteer Birmingham',
    'volunteer application Birmingham'
  ],
  openGraph: {
    title: 'Volunteer Opportunities | The Ladder Birmingham Community Volunteers',
    description: 'Make a difference in Birmingham by volunteering with The Ladder. Help individuals overcome barriers through crisis intervention and community support.',
    url: 'https://www.the-ladder.org/volunteer',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/volunteer'
  }
}

export default function VolunteerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Volunteer with <span className="text-primary-400">The Ladder</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Join our mission to help Birmingham residents overcome barriers and achieve their goals. 
                Your time, skills, and compassion can make a lasting difference in someone's life.
              </p>
            </div>

            {/* Volunteer Impact Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">85</div>
                <div className="text-text-secondary">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">2,400</div>
                <div className="text-text-secondary">Hours Donated (2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-text-secondary">Training Provided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">4.8★</div>
                <div className="text-text-secondary">Volunteer Satisfaction</div>
              </div>
            </div>

            {/* Why Volunteer */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Why Volunteer with The Ladder?
                    </h3>
                    <p className="text-text-secondary">
                      Volunteering with The Ladder means being part of a movement that creates real, lasting change. 
                      You'll work alongside individuals who have overcome barriers themselves, gaining perspective 
                      while helping others navigate their challenges. Every volunteer makes a direct impact on 
                      someone's journey from crisis to stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Volunteer Opportunities
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Find the perfect way to contribute your skills and passion to barrier removal in Birmingham
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Crisis Support Volunteers */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Crisis Support Team</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Provide initial crisis intervention support, help with intake assessments, and assist 
                    with referrals to partner organizations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">4-8 hours/week, flexible scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Training provided, background check required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">High impact, direct client interaction</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Ideal for:</strong> Social work students, retired professionals, 
                      those with crisis intervention experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Resource Navigation */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Resource Navigators</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Help clients understand available resources, complete applications, and connect with 
                    appropriate services throughout Birmingham.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">3-6 hours/week, daytime preferred</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Orientation required, no experience needed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Learn Birmingham resource landscape</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Ideal for:</strong> Detail-oriented individuals, 
                      bilingual speakers, those interested in social services
                    </p>
                  </div>
                </div>
              </div>

              {/* Administrative Support */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Administrative Support</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Assist with data entry, filing, donor communications, event planning, and general 
                    office support to keep operations running smoothly.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">2-4 hours/week, very flexible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Basic computer skills helpful</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Remote work options available</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Ideal for:</strong> Students, retirees, professionals 
                      with limited time, those with office experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Support */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Event Team</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Help with fundraising events, community outreach activities, volunteer appreciation 
                    events, and awareness campaigns.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Project-based, 2-10 hours per event</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Team-oriented, high energy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Creative and networking opportunities</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Ideal for:</strong> Marketing professionals, 
                      event planners, people-persons, creative individuals
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Skills */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Professional Services</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Contribute specialized skills in areas like legal aid, accounting, marketing, 
                    web development, or graphic design on a project basis.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Project-based, 5-20 hours total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Professional experience required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Portfolio building, networking</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Seeking:</strong> Lawyers, CPAs, marketers, 
                      web developers, grant writers, photographers
                    </p>
                  </div>
                </div>
              </div>

              {/* Board Volunteers */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Board & Leadership</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    Serve on the Board of Directors or volunteer committees to provide organizational 
                    oversight, strategic planning, and governance leadership.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">3-year commitment, 5-10 hours/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">Leadership experience preferred</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-secondary">High-level impact and responsibility</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-600">
                    <p className="text-xs text-text-secondary">
                      <strong className="text-text-primary">Requirements:</strong> Lived experience with barriers, 
                      professional background, financial contribution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                What Our Volunteers Say
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Hear from volunteers about their experience making a difference with The Ladder
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "Volunteering with The Ladder has been incredibly rewarding. I've learned so much about 
                  Birmingham's resource network while directly helping people in crisis. The training was 
                  excellent, and the staff support is amazing."
                </blockquote>
                <div className="text-sm">
                  <p className="text-text-primary font-medium">Jennifer S.</p>
                  <p className="text-text-secondary">Crisis Support Volunteer, 2 years</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "As someone who received help from The Ladder years ago, volunteering here feels like 
                  coming full circle. I get to help others the way I was helped, and it's incredibly meaningful 
                  to be part of someone's success story."
                </blockquote>
                <div className="text-sm">
                  <p className="text-text-primary font-medium">Marcus D.</p>
                  <p className="text-text-secondary">Resource Navigator, 1.5 years</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "The flexibility of volunteer opportunities makes it perfect for my busy schedule. 
                  I can contribute my marketing skills on projects while also helping with events. 
                  Every hour feels impactful."
                </blockquote>
                <div className="text-sm">
                  <p className="text-text-primary font-medium">Sarah L.</p>
                  <p className="text-text-secondary">Professional Services Volunteer, 6 months</p>
                </div>
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-4">
                  Volunteer Benefits & Support
                </h3>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  We invest in our volunteers because they're essential to our mission success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Comprehensive Training</h4>
                  <p className="text-sm text-text-secondary">Initial orientation plus ongoing skill development</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Supportive Community</h4>
                  <p className="text-sm text-text-secondary">Connect with like-minded volunteers and staff</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-text-secondary">Work around your life and commitments</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Recognition Programs</h4>
                  <p className="text-sm text-text-secondary">Annual appreciation events and service awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                How to Get Started
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple steps to begin your volunteer journey with The Ladder
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Application Process */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Application Process
                </h3>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Submit Application</h4>
                      <p className="text-text-secondary text-sm">
                        Complete our online volunteer application with your interests, availability, 
                        and experience. Takes about 10 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Interview & Matching</h4>
                      <p className="text-text-secondary text-sm">
                        Brief conversation with our volunteer coordinator to discuss your interests 
                        and match you with the right opportunity.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Background Check (if required)</h4>
                      <p className="text-text-secondary text-sm">
                        For roles involving direct client contact, we'll conduct a background check 
                        at no cost to you. This protects both volunteers and clients.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Orientation & Training</h4>
                      <p className="text-text-secondary text-sm">
                        Attend comprehensive orientation covering our mission, approach, and specific 
                        training for your volunteer role.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Start Volunteering!</h4>
                      <p className="text-text-secondary text-sm">
                        Begin making a difference with ongoing support from our team and connection 
                        to fellow volunteers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements & FAQ */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Requirements & FAQ
                </h3>
                
                <div className="space-y-6">
                  {/* General Requirements */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <h4 className="font-semibold text-text-primary mb-3">General Requirements</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Must be 18 years or older</li>
                      <li>• Commit to minimum time requirements for chosen role</li>
                      <li>• Complete orientation and required training</li>
                      <li>• Maintain confidentiality of client information</li>
                      <li>• Represent The Ladder professionally</li>
                      <li>• Background check for direct service roles</li>
                    </ul>
                  </div>

                  {/* FAQ */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-text-primary mb-2">How much time do I need to commit?</h5>
                      <p className="text-sm text-text-secondary">
                        Varies by role. Administrative support can be 2-4 hours/week, while crisis support 
                        typically needs 4-8 hours/week. We work with your schedule.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-text-primary mb-2">Do I need experience in social services?</h5>
                      <p className="text-sm text-text-secondary">
                        Not necessarily! We provide training for all roles. Life experience and compassion 
                        are often more valuable than formal credentials.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-text-primary mb-2">Can I volunteer remotely?</h5>
                      <p className="text-sm text-text-secondary">
                        Yes! Several roles offer remote options, including administrative support, 
                        professional services, and some training activities.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-medium text-text-primary mb-2">What if I have a criminal background?</h5>
                      <p className="text-sm text-text-secondary">
                        We evaluate applications individually. Having a background doesn't automatically 
                        disqualify you - we consider the nature, timing, and relevance to the volunteer role.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Ready to Make a <span className="text-primary-400">Difference?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Join our team of dedicated volunteers helping Birmingham residents overcome barriers 
                and achieve their goals. Your contribution matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <HelpingHand className="w-5 h-5 mr-2" />
                  Apply to Volunteer
                </a>
                <a 
                  href="tel:+12055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (205) 522-1162
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Questions About Volunteering?</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Contact our Volunteer Coordinator for more information about opportunities, 
                    requirements, or the application process.
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary-400" />
                      <a href="mailto:volunteers@the-ladder.org" className="text-primary-400 hover:text-primary-300">
                        volunteers@the-ladder.org
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 522-1162 ext. 3</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Next Information Session</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Join our monthly volunteer information session to learn more about opportunities 
                    and meet current volunteers.
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">First Tuesday of each month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">6:00 PM - 7:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-600">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Volunteer Recognition:</strong> 
                  All volunteers receive service hour documentation for resumes, school requirements, 
                  or court-ordered community service completion.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}