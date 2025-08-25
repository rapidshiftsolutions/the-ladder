import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'Terms of Service | The Ladder Birmingham Nonprofit',
  description: 'The Ladder terms of service - Legal terms governing donations, volunteer participation, and assistance services for our Birmingham nonprofit organization.',
  keywords: [
    'nonprofit terms of service',
    'donation terms conditions',
    'volunteer agreement terms',
    'Birmingham nonprofit legal',
    'charitable organization terms',
    'crisis intervention terms',
    'assistance application terms',
    'The Ladder terms service',
    'nonprofit liability protection'
  ],
  openGraph: {
    title: 'Terms of Service | The Ladder Birmingham Nonprofit',
    description: 'Legal terms for donations, volunteer participation, and assistance services.',
    url: 'https://www.the-ladder.org/terms',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/terms'
  }
}

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
            </p>
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 mb-8">
              <p className="text-text-primary text-sm">
                These terms govern your use of The Ladder's services, website, donations, and volunteer participation. 
                <strong>The Ladder</strong> is a 501(c)(3) tax-exempt nonprofit organization (EIN: 47-2123160) 
                incorporated in Alabama.
              </p>
            </div>
            
            <div className="space-y-6 text-text-primary">
              <section>
                <h2 className="text-xl font-bold mb-3">Acceptance of Terms</h2>
                <p className="text-text-secondary mb-4">
                  By using The Ladder's services, making donations, volunteering, applying for assistance, or visiting our website, 
                  you agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
                <p className="text-text-secondary text-sm">
                  <strong>Who We Are:</strong> The Ladder is a Birmingham-based nonprofit organization dedicated to 
                  helping individuals overcome personal barriers through crisis intervention and partner organization referrals.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Services Provided</h2>
                <p className="text-text-secondary mb-4">
                  The Ladder provides nonprofit services focused on barrier removal and crisis intervention:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Core Services:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Individual crisis intervention and assessment</li>
                  <li>Barrier identification and removal assistance</li>
                  <li>Partner organization referrals and coordination</li>
                  <li>Emergency assistance for Birmingham residents</li>
                  <li>Follow-up support and outcome tracking</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Additional Services:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Volunteer coordination and training</li>
                  <li>Community education and barrier prevention</li>
                  <li>Nonprofit partnership facilitation</li>
                  <li>Resource directory maintenance</li>
                </ul>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Important:</strong> Our services are provided free of charge to qualified recipients. 
                    We do not guarantee specific outcomes but commit to connecting individuals with appropriate resources.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Donations and Financial Terms</h2>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Donation Processing:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>All donations are processed securely through third-party payment providers</li>
                  <li>Donations are generally tax-deductible to the extent allowed by law</li>
                  <li>Official donation receipts will be provided for tax purposes</li>
                  <li>Recurring donations can be cancelled at any time through your donor account</li>
                  <li>We do not store credit card information on our servers</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Donation Refund Policy:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Donations are generally non-refundable once processed</li>
                  <li>Refunds may be considered in cases of technical error or duplicate charges</li>
                  <li>Refund requests must be made within 30 days of donation</li>
                  <li>Approved refunds will result in amended tax receipt information</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Use of Donations:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Donations support our general operations and barrier removal programs</li>
                  <li>Specific program designations will be honored where possible</li>
                  <li>Administrative costs are kept to a minimum</li>
                  <li>Annual reports detail how donations are used</li>
                </ul>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Tax Deductibility:</strong> The Ladder is a 501(c)(3) organization. 
                    Donations are tax-deductible to the fullest extent allowed by law. Consult your tax advisor for specific guidance.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">User Responsibilities</h2>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Assistance Recipients:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Provide accurate information about barriers and assistance needs</li>
                  <li>Participate honestly in assessment and follow-up processes</li>
                  <li>Respect confidentiality of other clients and volunteers</li>
                  <li>Follow through with agreed-upon action plans and referrals</li>
                  <li>Report changes in circumstances that may affect assistance</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Donors:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Provide accurate contact and payment information</li>
                  <li>Update us about changes to contact preferences</li>
                  <li>Use official donation receipts appropriately for tax purposes</li>
                  <li>Notify us of any unauthorized charges immediately</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Volunteers:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Complete required training and background checks</li>
                  <li>Maintain confidentiality of client information</li>
                  <li>Follow organizational policies and ethical guidelines</li>
                  <li>Report safety concerns or policy violations</li>
                  <li>Represent The Ladder professionally in all interactions</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Website Users:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Provide accurate information in contact forms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use the website for legitimate purposes only</li>
                  <li>Report technical issues or security concerns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Limitation of Liability</h2>
                <p className="text-text-secondary mb-4">
                  As a nonprofit organization providing services free of charge, The Ladder's liability is limited by law. 
                  We are not liable for:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Service Limitations:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Inability to remove specific barriers or guarantee outcomes</li>
                  <li>Actions or decisions of partner organizations</li>
                  <li>Changes in eligibility for government or partner programs</li>
                  <li>Delays in service provision due to resource limitations</li>
                  <li>Consequences of client decisions following our assistance</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">General Limitations:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Indirect, consequential, or punitive damages</li>
                  <li>Lost wages, profits, or opportunities</li>
                  <li>Emotional distress or personal injury claims</li>
                  <li>Technical problems with third-party services</li>
                  <li>Content or accuracy of external website links</li>
                </ul>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Maximum Liability:</strong> In any case where liability is established, 
                    our maximum liability shall not exceed the amount of any donation you have made to The Ladder in the 
                    12 months preceding the claim.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Service Disclaimers</h2>
                <p className="text-text-secondary mb-4">
                  Our services are provided "as is" without warranties of any kind:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">No Guarantees:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>We cannot guarantee specific outcomes or barrier removal success</li>
                  <li>Partner organization availability and eligibility requirements may change</li>
                  <li>Government programs and benefits are subject to policy changes</li>
                  <li>Individual circumstances may affect assistance effectiveness</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Best Efforts Standard:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>We commit to providing services with professional competence</li>
                  <li>We maintain current knowledge of available resources</li>
                  <li>We follow established assessment and referral protocols</li>
                  <li>We provide follow-up within our capacity and resources</li>
                </ul>
                
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Important:</strong> The Ladder is not a licensed counseling, 
                    legal, or financial services provider. We provide referrals to qualified professionals when needed.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Confidentiality and Information Security</h2>
                <p className="text-text-secondary mb-4">
                  We are committed to protecting the confidentiality of all clients, donors, and volunteers:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Client Confidentiality:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Assistance recipient information is kept strictly confidential</li>
                  <li>Information is shared only with partner organizations as authorized</li>
                  <li>Staff and volunteers sign confidentiality agreements</li>
                  <li>Access to client records is limited to authorized personnel</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Information Sharing:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>We may share aggregate, non-identifying data for reporting purposes</li>
                  <li>Success stories are shared only with explicit written consent</li>
                  <li>Legal obligations may require disclosure in limited circumstances</li>
                  <li>Partner organizations receive only information necessary for service provision</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Data Security:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Electronic records are encrypted and password-protected</li>
                  <li>Physical records are stored in locked, secure locations</li>
                  <li>Regular security training for all staff and volunteers</li>
                  <li>Incident response procedures for any security breaches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Service Access and Eligibility</h2>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Eligibility Requirements:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Primary focus on Birmingham and surrounding area residents</li>
                  <li>Individual barriers that can be addressed through partner referrals</li>
                  <li>Willingness to participate in assessment and follow-up processes</li>
                  <li>Compliance with partner organization requirements and expectations</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Service Availability:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Services are provided based on available resources and capacity</li>
                  <li>Emergency situations receive priority consideration</li>
                  <li>Some services may have waiting periods or limited availability</li>
                  <li>We reserve the right to prioritize based on need and impact potential</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Termination of Services:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Services may be terminated for non-compliance with program requirements</li>
                  <li>Threatening or disruptive behavior toward staff, volunteers, or other clients</li>
                  <li>Misrepresentation of circumstances or needs</li>
                  <li>Failure to engage with referred resources without reasonable explanation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Dispute Resolution</h2>
                <p className="text-text-secondary mb-4">
                  We are committed to resolving any concerns or disputes fairly and efficiently:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Internal Resolution:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Contact our Executive Director directly for service concerns</li>
                  <li>Board of Directors available for unresolved issues</li>
                  <li>Written complaint process with documented response timeline</li>
                  <li>Good faith negotiation and mediation preferred</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Formal Dispute Resolution:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Binding arbitration under Alabama state law if necessary</li>
                  <li>Legal actions must be filed in Jefferson County, Alabama</li>
                  <li>Class action lawsuits are waived in favor of individual arbitration</li>
                  <li>Disputes must be brought within one year of the incident</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Governing Law</h2>
                <p className="text-text-secondary">
                  These terms are governed by Alabama state law, federal nonprofit regulations, and local Birmingham ordinances. 
                  The Ladder is incorporated in Alabama and operates under Alabama Nonprofit Corporation Act. 
                  Any legal actions must be filed in Jefferson County, Alabama.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Modifications to Terms</h2>
                <p className="text-text-secondary mb-4">
                  We may modify these terms to reflect changes in our services, legal requirements, or organizational policies:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Updated terms will be posted on our website with a new effective date</li>
                  <li>Material changes will be communicated to active donors and program participants</li>
                  <li>Board of Directors approval required for significant changes</li>
                  <li>Continued use of services constitutes acceptance of updated terms</li>
                </ul>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Notification:</strong> We will provide 30 days advance notice 
                    for significant changes that affect donor rights or service eligibility.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Contact Information</h2>
                <div className="text-text-secondary">
                  <p className="mb-4">For questions about these terms or legal matters, contact:</p>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold text-text-primary">Executive Director</p>
                      <p>The Ladder</p>
                      <p>P.O. Box [TBD], Birmingham, AL 35233</p>
                      <p>Phone: (205) 522-1162</p>
                      <p>Email: legal@the-ladder.org</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-surface-600">
                      <p className="text-sm">
                        <strong className="text-text-primary">Organization Details:</strong>
                      </p>
                      <p className="text-sm">EIN: 47-2123160</p>
                      <p className="text-sm">501(c)(3) Tax-Exempt Status</p>
                      <p className="text-sm">Alabama Nonprofit Corporation</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Severability</h2>
                <p className="text-text-secondary">
                  If any portion of these terms is found to be unenforceable, the remaining portions shall remain in full force and effect.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}