import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Users, Shield, Calendar, FileText, Award, CheckCircle, Mail, Phone, Clock, Target } from 'lucide-react'

export const metadata = {
  title: 'Board & Governance | The Ladder Birmingham Nonprofit Leadership',
  description: 'Meet The Ladder\'s Board of Directors and learn about our governance structure, policies, and leadership transparency in Birmingham, Alabama.',
  keywords: [
    'nonprofit board directors Birmingham',
    'The Ladder board governance',
    'nonprofit leadership Birmingham',
    'board of directors Alabama',
    'nonprofit governance structure',
    'charitable organization leadership',
    'nonprofit board transparency',
    'Birmingham nonprofit board',
    'governance policies nonprofit',
    'board meetings Birmingham',
    'nonprofit accountability leadership',
    'The Ladder leadership team',
    'nonprofit board members',
    'governance transparency Alabama'
  ],
  openGraph: {
    title: 'Board & Governance | The Ladder Birmingham Nonprofit Leadership',
    description: 'Meet our Board of Directors and learn about The Ladder\'s governance structure and leadership transparency.',
    url: 'https://www.the-ladder.org/board-governance',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/board-governance'
  }
}

export default function BoardGovernancePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Board & <span className="text-primary-400">Governance</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Strong leadership and transparent governance drive our mission forward. Meet our Board of Directors 
                and learn how we ensure accountability, ethical practices, and effective stewardship of your trust.
              </p>
            </div>

            {/* Governance Principles */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-400" />
                </div>
                <div className="font-semibold text-text-primary mb-1">Transparency</div>
                <div className="text-sm text-text-secondary">Open decisions & reporting</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
                <div className="font-semibold text-text-primary mb-1">Diversity</div>
                <div className="text-sm text-text-secondary">Lived experience leadership</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-400" />
                </div>
                <div className="font-semibold text-text-primary mb-1">Accountability</div>
                <div className="text-sm text-text-secondary">Regular oversight & review</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-400" />
                </div>
                <div className="font-semibold text-text-primary mb-1">Mission-Focused</div>
                <div className="text-sm text-text-secondary">Impact-driven decisions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Board of Directors
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our Board brings together diverse expertise, lived experience, and deep commitment to Birmingham's community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Board Chair */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Maria Rodriguez</h3>
                    <p className="text-sm text-primary-400 font-medium">Board Chair</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Former social worker with 15 years experience 
                    in crisis intervention. Overcame housing instability and unemployment in her 20s.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Social services navigation, community advocacy, 
                    nonprofit governance, bilingual crisis intervention
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2023-2026 (Chair since 2024)
                  </p>
                </div>
              </div>

              {/* Vice Chair */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">James Washington</h3>
                    <p className="text-sm text-primary-400 font-medium">Vice Chair</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Small business owner and recovered 
                    individual who rebuilt his life after addiction and legal challenges.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Addiction recovery, reentry services, 
                    small business development, community organizing
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2023-2026
                  </p>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <FileText className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Dr. Angela Thompson</h3>
                    <p className="text-sm text-primary-400 font-medium">Secretary</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Healthcare administrator and single 
                    mother who navigated career change after job loss and family crisis.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Healthcare systems, program evaluation, 
                    strategic planning, board governance
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2024-2027
                  </p>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Robert Chen, CPA</h3>
                    <p className="text-sm text-primary-400 font-medium">Treasurer</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Certified Public Accountant who 
                    experienced financial hardship during family medical crisis.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Nonprofit accounting, financial controls, 
                    audit oversight, tax compliance, risk management
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2023-2026
                  </p>
                </div>
              </div>

              {/* Board Member 1 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Sarah Davis</h3>
                    <p className="text-sm text-primary-400 font-medium">Board Member</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Legal aid attorney who overcame 
                    educational barriers as a first-generation college student.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Legal advocacy, policy analysis, 
                    educational access, immigration issues
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2024-2027
                  </p>
                </div>
              </div>

              {/* Board Member 2 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Michael Johnson</h3>
                    <p className="text-sm text-primary-400 font-medium">Board Member</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Background:</strong> Mental health counselor and veteran 
                    who navigated PTSD and housing challenges after military service.
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Expertise:</strong> Mental health services, veteran affairs, 
                    trauma-informed care, crisis intervention
                  </p>
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Term:</strong> 2023-2026
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary-500/10 rounded-xl border border-primary-500/20 p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Lived Experience Leadership
                </h3>
                <p className="text-text-secondary">
                  Every member of our Board of Directors has personally overcome significant barriers similar to those 
                  faced by the individuals we serve. This lived experience informs our policies, programs, and approach 
                  to barrier removal, ensuring we remain grounded in the reality of what it takes to create lasting change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Governance Structure
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our governance model ensures effective oversight, strategic direction, and ethical operations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Board Responsibilities */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Board Responsibilities
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Strategic Oversight</h4>
                      <p className="text-text-secondary text-sm">
                        Set organizational direction, approve strategic plans, and ensure mission alignment 
                        in all program decisions and resource allocation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Financial Stewardship</h4>
                      <p className="text-text-secondary text-sm">
                        Approve annual budgets, monitor financial performance, ensure proper controls, 
                        and oversee audit processes for accountability to donors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Executive Leadership</h4>
                      <p className="text-text-secondary text-sm">
                        Hire, evaluate, and support the Executive Director; set compensation policies; 
                        ensure succession planning for key leadership positions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Program Evaluation</h4>
                      <p className="text-text-secondary text-sm">
                        Review program effectiveness, approve new initiatives, ensure impact measurement, 
                        and maintain quality standards for service delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Legal Compliance</h4>
                      <p className="text-text-secondary text-sm">
                        Ensure adherence to federal, state, and local regulations; maintain tax-exempt status; 
                        oversee risk management and insurance coverage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Schedule & Committees */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Meetings & Committees
                </h3>
                
                <div className="space-y-6">
                  {/* Board Meetings */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-primary-400" />
                      <h4 className="text-xl font-semibold text-text-primary">Board Meetings</h4>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Regular Meetings:</span>
                        <span className="text-text-primary">Quarterly</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Annual Planning:</span>
                        <span className="text-text-primary">February</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Emergency Meetings:</span>
                        <span className="text-text-primary">As needed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Public Access:</span>
                        <span className="text-text-primary">Open portions available</span>
                      </div>
                    </div>
                  </div>

                  {/* Committees */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <h4 className="text-xl font-semibold text-text-primary mb-4">Standing Committees</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-text-primary">Executive Committee</p>
                        <p className="text-sm text-text-secondary">Strategic planning, emergency decisions, ED evaluation</p>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">Finance Committee</p>
                        <p className="text-sm text-text-secondary">Budget oversight, audit review, financial controls</p>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">Program Committee</p>
                        <p className="text-sm text-text-secondary">Service evaluation, outcome measurement, quality assurance</p>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">Governance Committee</p>
                        <p className="text-sm text-text-secondary">Board recruitment, policy development, training</p>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Minutes */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <h4 className="text-xl font-semibold text-text-primary mb-4">Meeting Records</h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Board meeting minutes are available to the public upon request, excluding confidential 
                      personnel and legal matters.
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        Request Minutes
                      </a>
                      <span className="text-text-secondary">|</span>
                      <a 
                        href="/annual-reports" 
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        <Calendar className="w-4 h-4" />
                        View Schedule
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies & Ethics */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Policies & Ethics
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Clear policies and ethical standards guide all aspects of our governance and operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Conflict of Interest */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Conflict of Interest</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  All board members sign annual conflict of interest statements and recuse themselves 
                  from decisions where conflicts exist.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• Annual disclosure requirements</p>
                  <p>• Transaction review process</p>
                  <p>• Recusal protocols</p>
                  <p>• Public documentation</p>
                </div>
              </div>

              {/* Whistleblower Protection */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Whistleblower Protection</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Safe reporting mechanisms for ethical concerns, with protection against retaliation 
                  for good faith reporting.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• Anonymous reporting options</p>
                  <p>• Investigation procedures</p>
                  <p>• Anti-retaliation protections</p>
                  <p>• Board-level oversight</p>
                </div>
              </div>

              {/* Document Retention */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Document Retention</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Comprehensive policies for maintaining, storing, and disposing of organizational 
                  records in compliance with legal requirements.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• Legal compliance standards</p>
                  <p>• Electronic record management</p>
                  <p>• Retention schedules</p>
                  <p>• Secure disposal procedures</p>
                </div>
              </div>

              {/* Executive Compensation */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Executive Compensation</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Transparent process for setting executive compensation based on comparable organizations 
                  and performance metrics.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• Comparability data review</p>
                  <p>• Independent evaluation</p>
                  <p>• Board approval process</p>
                  <p>• Public disclosure</p>
                </div>
              </div>

              {/* Gift Acceptance */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Gift Acceptance</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Clear guidelines for accepting donations, including restrictions on gifts that might 
                  compromise our mission or independence.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• Donation evaluation criteria</p>
                  <p>• Restricted gift policies</p>
                  <p>• Due diligence procedures</p>
                  <p>• Board approval thresholds</p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Data Protection</h3>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Comprehensive policies protecting client, donor, and organizational data in compliance 
                  with privacy regulations.
                </p>
                <div className="space-y-2 text-xs text-text-secondary">
                  <p>• GDPR compliance measures</p>
                  <p>• Client confidentiality protocols</p>
                  <p>• Donor privacy protection</p>
                  <p>• Security breach procedures</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary-500/10 rounded-xl border border-primary-500/20 p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Policy Access & Questions
                </h3>
                <p className="text-text-secondary mb-4">
                  Complete versions of our governance policies are available upon request. We welcome questions 
                  about our governance structure, ethical standards, or decision-making processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Request Policies
                  </a>
                  <a 
                    href="tel:+12055221162"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-primary-500/10 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (205) 522-1162
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Recruitment */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Join Our Board
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We're always seeking passionate leaders with lived experience and professional expertise 
                to join our Board of Directors
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* What We're Looking For */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  What We're Looking For
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Lived Experience (Essential)</h4>
                    <p className="text-text-secondary text-sm">
                      Personal experience overcoming significant barriers similar to those faced by our clients. 
                      This perspective is crucial for authentic, effective governance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Professional Expertise (Preferred)</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• Nonprofit management or board experience</li>
                      <li>• Financial management or accounting background</li>
                      <li>• Legal expertise (especially nonprofit law)</li>
                      <li>• Social services or community development</li>
                      <li>• Healthcare or mental health services</li>
                      <li>• Marketing, communications, or fundraising</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Commitment & Availability</h4>
                    <ul className="space-y-1 text-text-secondary text-sm">
                      <li>• 3-year term commitment</li>
                      <li>• Quarterly board meetings (3-4 hours each)</li>
                      <li>• Committee participation (2-4 hours monthly)</li>
                      <li>• Occasional special events and fundraising</li>
                      <li>• Financial contribution or fundraising participation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Application Process
                </h3>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Initial Inquiry</h4>
                      <p className="text-text-secondary text-sm">
                        Contact us to express interest and receive detailed board member information packet.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Application & References</h4>
                      <p className="text-text-secondary text-sm">
                        Submit completed application with professional and personal references.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Interview Process</h4>
                      <p className="text-text-secondary text-sm">
                        Meet with current board members and executive director to discuss fit and expectations.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Board Approval</h4>
                      <p className="text-text-secondary text-sm">
                        Current board votes on new member selection and provides orientation materials.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <h4 className="font-semibold text-text-primary mb-4">Ready to Apply?</h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Board service is a meaningful way to directly impact barrier removal in Birmingham while 
                      developing leadership skills and professional networks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="mailto:board@the-ladder.org"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Express Interest
                      </a>
                      <a 
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-primary-500/10 transition-colors"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}