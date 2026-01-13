import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Shield, Mail } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | The Ladder',
  description: 'The Ladder\'s privacy policy explaining how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | The Ladder Birmingham',
    url: 'https://www.the-ladder.org/privacy',
    type: 'website'
  }
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Privacy Policy
              </h1>
              <p className="text-white/80">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8">
                
                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Introduction
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    The Ladder (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard 
                    your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Information We Collect
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We may collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-text-secondary)] space-y-2">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Information provided in assistance applications</li>
                    <li>Donation and payment information</li>
                    <li>Communications you send to us</li>
                    <li>Information provided through contact forms</li>
                  </ul>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    How We Use Your Information
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--color-text-secondary)] space-y-2">
                    <li>Process assistance applications and provide services</li>
                    <li>Process donations and provide tax receipts</li>
                    <li>Communicate with you about our services and programs</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Confidentiality
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    All information provided through assistance applications is treated as 
                    strictly confidential. We do not share personal details about individuals 
                    receiving assistance without their explicit consent. Success stories shared 
                    publicly are done so only with permission and may use changed names to 
                    protect privacy.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Information Sharing
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share information with partner organizations only when necessary to 
                    provide services, and only with your consent.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Your Rights
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    You have the right to access, correct, or delete your personal information. 
                    You may opt out of communications at any time. To exercise these rights, 
                    please contact us at the email address below.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Contact Us
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="font-semibold text-[var(--color-text-primary)]">The Ladder</p>
                    <a 
                      href="mailto:privacy@the-ladder.org" 
                      className="flex items-center gap-2 text-[var(--color-primary)] hover:underline mt-2"
                    >
                      <Mail className="w-4 h-4" />
                      privacy@the-ladder.org
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
