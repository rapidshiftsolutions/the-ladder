import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'Privacy Policy | The Ladder Birmingham Nonprofit',
  description: 'The Ladder privacy policy - Learn how we protect donor, volunteer, and client information in accordance with nonprofit regulations and GDPR compliance.',
  keywords: [
    'nonprofit privacy policy',
    'donor data protection',
    'GDPR compliance nonprofit',
    'volunteer data privacy',
    'Birmingham nonprofit privacy',
    'crisis intervention privacy',
    'assistance application privacy',
    'charitable organization data protection',
    'The Ladder privacy policy'
  ],
  openGraph: {
    title: 'Privacy Policy | The Ladder Birmingham Nonprofit',
    description: 'Comprehensive privacy protection for donors, volunteers, and assistance recipients.',
    url: 'https://www.the-ladder.org/privacy',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/privacy'
  }
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
            </p>
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 mb-8">
              <p className="text-text-primary text-sm">
                <strong>The Ladder</strong> (EIN: 47-2123160) is committed to protecting the privacy and confidentiality 
                of donors, volunteers, assistance recipients, and website visitors. This policy complies with federal 
                nonprofit regulations, GDPR, and Alabama state requirements.
              </p>
            </div>
            
            <div className="space-y-6 text-text-primary">
              <section>
                <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
                <p className="text-text-secondary mb-4">
                  We collect information you provide when making donations, applying for assistance, volunteering, or using our website:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Donor Information:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Name, address, email, and phone number</li>
                  <li>Payment information (processed through secure third-party processors)</li>
                  <li>Donation history and preferences</li>
                  <li>Communication preferences</li>
                  <li>Employment information (for matching gift purposes)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Assistance Recipients:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Contact information and demographic data</li>
                  <li>Barrier description and assistance needs</li>
                  <li>Income verification and eligibility documentation</li>
                  <li>Service history and outcomes (for impact measurement)</li>
                  <li>Referral source information</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Volunteers:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Contact information and availability</li>
                  <li>Skills, interests, and volunteer history</li>
                  <li>Background check results (where applicable)</li>
                  <li>Training records and certifications</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Website Visitors:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral sources and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
                <p className="text-text-secondary mb-4">
                  We use collected information for the following nonprofit purposes:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Program Services:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Assess eligibility and provide barrier removal assistance</li>
                  <li>Connect individuals with appropriate partner organizations</li>
                  <li>Track service outcomes and measure impact</li>
                  <li>Coordinate with partner nonprofits and service providers</li>
                  <li>Follow up on assistance effectiveness</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Fundraising & Development:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Process donations and send tax-deductible receipts</li>
                  <li>Send donor communications and impact updates</li>
                  <li>Manage donor recognition and stewardship</li>
                  <li>Identify potential major gift prospects</li>
                  <li>Coordinate fundraising events and campaigns</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Compliance & Reporting:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Maintain IRS-required donor records</li>
                  <li>Prepare annual reports and Form 990</li>
                  <li>Comply with charitable solicitation laws</li>
                  <li>Report to grantmaking foundations</li>
                  <li>Ensure program effectiveness and accountability</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Website & Communications:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Improve website functionality and user experience</li>
                  <li>Send newsletters and program updates</li>
                  <li>Respond to inquiries and assistance requests</li>
                  <li>Maintain volunteer and donor databases</li>
                  <li>Analyze website traffic and engagement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Information Sharing</h2>
                <p className="text-text-secondary mb-4">
                  <strong>We never sell, rent, or trade personal information.</strong> We may share information only in these limited circumstances:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Partner Organizations:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>With your explicit written consent for service coordination</li>
                  <li>Minimum necessary information to provide requested assistance</li>
                  <li>Only with vetted partner nonprofits bound by confidentiality agreements</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Service Providers:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Payment processors (Stripe, PayPal) for donation processing</li>
                  <li>Email service providers for communications</li>
                  <li>Database and website hosting services</li>
                  <li>Background check services for volunteers (with consent)</li>
                  <li>All service providers sign data processing agreements</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Legal Requirements:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>As required by federal or state law</li>
                  <li>In response to valid legal process (subpoenas, court orders)</li>
                  <li>To protect safety or prevent harm</li>
                  <li>IRS reporting for tax-deductible donations</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Aggregate Data:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>De-identified statistics for impact reporting</li>
                  <li>Anonymous data for research and grant applications</li>
                  <li>General demographic information for program planning</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Data Security</h2>
                <p className="text-text-secondary mb-4">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Technical Safeguards:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>SSL/TLS encryption for all website data transmission</li>
                  <li>Encrypted storage of sensitive donor and client information</li>
                  <li>Regular security updates and vulnerability assessments</li>
                  <li>Multi-factor authentication for staff access</li>
                  <li>Secure, GDPR-compliant third-party services</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Administrative Safeguards:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Staff training on data privacy and confidentiality</li>
                  <li>Role-based access controls (staff see only necessary information)</li>
                  <li>Regular data backup and disaster recovery procedures</li>
                  <li>Signed confidentiality agreements for all staff and volunteers</li>
                  <li>Annual privacy policy review and updates</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Physical Safeguards:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Locked filing cabinets for physical documents</li>
                  <li>Secure disposal of sensitive documents (shredding)</li>
                  <li>Limited office access and visitor policies</li>
                  <li>Clean desk policy for staff workstations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Your Rights</h2>
                <p className="text-text-secondary mb-4">
                  Under GDPR and applicable privacy laws, you have the following rights:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Access & Transparency:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Request a copy of all personal information we have about you</li>
                  <li>Understand how your information is being used</li>
                  <li>Know who your information has been shared with</li>
                  <li>Receive information in a portable format</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Control & Correction:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Update your contact preferences and communication settings</li>
                  <li>Opt-out of non-essential marketing communications</li>
                  <li>Withdraw consent for data processing (where applicable)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Deletion & Restriction:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Request deletion of your personal information</li>
                  <li>Restrict processing of your information in certain circumstances</li>
                  <li>Object to processing based on legitimate interests</li>
                </ul>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Note:</strong> Some information may be retained for legal compliance 
                    (IRS donor records, grant reporting requirements) even after deletion requests. We will explain 
                    any limitations when you contact us.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Cookies and Tracking</h2>
                <p className="text-text-secondary mb-4">
                  Our website uses cookies and similar technologies:
                </p>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Essential Cookies:</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Required for website functionality and security</li>
                  <li>Session management and form processing</li>
                  <li>Cannot be disabled without affecting site operation</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Analytics Cookies (Optional):</h3>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>Google Analytics for website improvement</li>
                  <li>Donation form optimization</li>
                  <li>Can be disabled through cookie preferences</li>
                </ul>
                
                <p className="text-text-secondary text-sm">
                  You can control cookies through your browser settings or our cookie preference center.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3">International Transfers</h2>
                <p className="text-text-secondary">
                  Some of our service providers may process data outside the United States. When this occurs, 
                  we ensure appropriate safeguards are in place through standard contractual clauses or 
                  other approved mechanisms to protect your personal information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                <p className="text-text-secondary mb-4">
                  For privacy-related questions, requests, or concerns, please contact us:
                </p>
                <div className="space-y-2 text-text-secondary">
                  <div>
                    <strong className="text-text-primary">Privacy Officer:</strong>
                    <p>The Ladder</p>
                    <p>P.O. Box [TBD], Birmingham, AL 35233</p>
                    <p>Phone: (205) 522-1162</p>
                    <p>Email: privacy@the-ladder.org</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-surface-600">
                    <p className="text-sm">
                      <strong className="text-text-primary">Response Time:</strong> We will respond to privacy requests within 30 days.
                    </p>
                    <p className="text-sm">
                      <strong className="text-text-primary">EIN:</strong> 47-2123160 | 
                      <strong className="text-text-primary">501(c)(3) Status:</strong> Tax-exempt nonprofit organization
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Policy Updates</h2>
                <p className="text-text-secondary mb-4">
                  We may update this privacy policy to reflect changes in our practices, legal requirements, or services. 
                  When we make significant changes:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mb-4">
                  <li>We will post the updated policy on our website with a new effective date</li>
                  <li>We will notify donors and active program participants via email</li>
                  <li>We will highlight major changes in our next newsletter</li>
                  <li>Previous versions will be available upon request</li>
                </ul>
                
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-text-primary">Your Continued Use:</strong> By continuing to use our services 
                    or website after policy updates, you acknowledge acceptance of the revised privacy policy. 
                    If you disagree with changes, please contact us about your options.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}