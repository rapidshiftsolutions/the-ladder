import { Scale, Shield, Users, AlertCircle, FileText, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | The Ladder - Website Terms & Conditions Birmingham',
  description: 'Terms of Service for The Ladder nonprofit website. User responsibilities, service limitations, intellectual property, and legal agreements for accessing our Birmingham nonprofit services.',
  keywords: 'terms of service, website terms, nonprofit legal terms, user agreement, service conditions, The Ladder terms, Birmingham nonprofit policies',
  openGraph: {
    title: 'Terms of Service | The Ladder',
    description: 'Terms of Service for The Ladder nonprofit website and services. User responsibilities and legal agreements.',
    type: 'website',
    url: 'https://the-ladder.org/terms-of-service',
  },
  alternates: {
    canonical: 'https://the-ladder.org/terms-of-service'
  }
}

export default function TermsOfServicePage() {
  const lastUpdated = new Date('2024-01-15').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-purple)] text-white py-16 overflow-hidden">
        {/* Glass morphism background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <Scale className="h-16 w-16 mx-auto mb-6 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl leading-relaxed mb-4">
                Legal terms and conditions governing the use of The Ladder's website and services.
              </p>
              <p className="text-lg opacity-90">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card bg-[var(--ladder-blue)]/10 backdrop-blur-xl border-l-4 border-[var(--ladder-blue)] border border-white/30 p-6 rounded-2xl shadow-xl">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-[var(--ladder-blue)] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-lg text-[var(--ladder-blue)] mb-2">Agreement to Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using The Ladder's website (https://the-ladder.org), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            {/* 1. Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-[var(--ladder-blue)] mr-3" />
                1. Definitions
              </h2>
              <div className="glass-card bg-white/50 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-lg">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>"Organization"</strong> refers to The Ladder, a 501(c)(3) nonprofit organization (EIN: 47-2123160) based in Birmingham, Alabama.</li>
                  <li><strong>"Website"</strong> refers to https://the-ladder.org and all associated subdomains and pages.</li>
                  <li><strong>"Services"</strong> refers to all programs, resources, and assistance provided by The Ladder.</li>
                  <li><strong>"User"</strong> refers to any individual accessing or using the Website or Services.</li>
                  <li><strong>"Content"</strong> refers to all text, images, videos, documents, and other materials on the Website.</li>
                </ul>
              </div>
            </div>

            {/* 2. Use License */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access and use the materials on The Ladder's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="text-gray-700">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Ladder at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>

            {/* 3. Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You may use our Website and Services only for lawful purposes and in accordance with these Terms. You agree not to use the Website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To impersonate or attempt to impersonate The Ladder, a Ladder employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
                <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website</li>
              </ul>
            </div>

            {/* 4. User Submissions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Submissions</h2>
              <p className="text-gray-700 mb-4">
                The Website may allow you to submit information, including personal information through forms, surveys, or other interactive features. By submitting information to us, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>You own or control all rights in and to the submitted information</li>
                <li>All submitted information is accurate and truthful</li>
                <li>Use of the submitted information will not infringe or violate the rights of any third party</li>
              </ul>
              <p className="text-gray-700">
                By submitting information to us, you grant The Ladder a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such information in connection with our mission and programs.
              </p>
            </div>

            {/* 5. Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Website and Services, you consent to the collection and use of information as outlined in our Privacy Policy.
              </p>
              <div className="glass-card bg-[var(--ladder-gold)]/15 backdrop-blur-xl border border-[var(--ladder-gold)]/40 rounded-xl p-4 shadow-lg">
                <p className="text-gray-700">
                  <strong>Important:</strong> We collect and process personal information in accordance with applicable privacy laws, including but not limited to the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
                </p>
              </div>
            </div>

            {/* 6. Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Service Limitations:</strong> While The Ladder strives to provide comprehensive support and resources, we cannot guarantee specific outcomes or results from our programs and services. Our services are provided on an "as available" basis.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Information Accuracy:</strong> The materials on The Ladder's website are provided on an 'as is' basis. The Ladder makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-gray-700">
                  <strong>Third-Party Resources:</strong> Our website may contain links to third-party websites or references to external resources. We do not endorse or take responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>
            </div>

            {/* 7. Limitations of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitations of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall The Ladder or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Ladder's website, even if The Ladder or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. In such jurisdictions, The Ladder's liability is limited to the fullest extent permitted by law.
              </p>
            </div>

            {/* 8. Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless The Ladder, its officers, directors, employees, agents, and volunteers from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Your use of and access to the Website and Services</li>
                <li>Your violation of any term of these Terms of Service</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your submitted information caused damage to a third party</li>
              </ul>
            </div>

            {/* 9. Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the Website will cease immediately. If you wish to terminate your account, you may simply discontinue using the Website. All provisions of the Terms which by their nature should survive termination shall survive termination.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Alabama, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Jefferson County, Alabama.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                The Ladder reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* 12. Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* 13. Waiver */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Waiver</h2>
              <p className="text-gray-700">
                The failure of The Ladder to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. No waiver shall be considered a further or continuing waiver of such term or any other term.
              </p>
            </div>

            {/* 14. Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
              <p className="text-gray-700">
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and The Ladder regarding the use of our Website and Services, superseding any prior agreements between you and The Ladder relating to your use of the Website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[var(--ladder-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us using the information below.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Email Us</h3>
                <p className="mb-4">Send legal questions or concerns about our terms</p>
                <a 
                  href="mailto:legal@the-ladder.org?subject=Terms of Service Inquiry" 
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  legal@the-ladder.org
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Call Us</h3>
                <p className="mb-4">Speak with our administrative team</p>
                <a 
                  href="tel:+12055555123" 
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  (205) 555-5123
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Mailing Address</h3>
                <p className="text-lg">
                  The Ladder<br />
                  Legal Department<br />
                  2413 1st Ave S<br />
                  Birmingham, AL 35233
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms of Service",
          "description": "Terms of Service and legal conditions for using The Ladder nonprofit website and services",
          "url": "https://the-ladder.org/terms-of-service",
          "dateModified": "2024-01-15",
          "isPartOf": {
            "@type": "WebSite",
            "name": "The Ladder",
            "url": "https://the-ladder.org"
          },
          "publisher": {
            "@type": "NonProfit",
            "name": "The Ladder",
            "taxID": "47-2123160",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2413 1st Ave S", 
              "addressLocality": "Birmingham",
              "addressRegion": "AL",
              "postalCode": "35233",
              "addressCountry": "US"
            }
          },
          "mainEntity": {
            "@type": "Article",
            "headline": "Terms of Service",
            "author": {
              "@type": "Organization",
              "name": "The Ladder"
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15"
          }
        })
      }} />
    </div>
  )
}