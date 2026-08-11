import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Phone, Heart, HelpingHand, Clock, Shield, CheckCircle, Lock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Get Help | Apply for Barrier Removal Assistance',
  description:
    'Apply for free, confidential barrier removal assistance from The Ladder through your partner nonprofit referral and invitation-only portal.',
  keywords: [
    'Birmingham Alabama emergency help',
    'crisis intervention Birmingham',
    'barrier removal assistance',
    'individual assistance Birmingham',
    'emergency assistance application',
    'Birmingham nonprofit help',
  ],
  openGraph: {
    title: 'Get Help | Apply for Assistance | The Ladder Birmingham',
    description:
      'Apply for free barrier removal assistance through The Ladder’s invitation-only guest portal.',
    url: 'https://the-ladder.org/get-help',
    type: 'website',
  },
  alternates: {
    canonical: 'https://the-ladder.org/get-help',
  },
}

export default function GetHelpPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get the Help You Need
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Facing a barrier that&apos;s preventing your progress? The Ladder provides
                free, confidential assistance when a partner nonprofit refers you.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Free Services
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Invitation Only
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50 border-y border-red-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-semibold text-red-900 mb-1">Need Immediate Help?</h2>
                <p className="text-red-700 text-sm">
                  If you&apos;re experiencing a crisis or emergency, call our support line now.
                </p>
              </div>
              <a
                href="tel:+12055221162"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 text-sm font-medium mb-4">
                    <Lock className="w-4 h-4" />
                    Password-protected application
                  </div>
                  <h2
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Apply through the Guest Portal
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Sponsorship applications are invitation-only. Ask your partner nonprofit
                    for The Ladder portal password. Once you have it, sign in and submit your
                    application.
                  </p>

                  <ol className="space-y-4 mb-8 text-[var(--color-text-secondary)]">
                    <li className="flex gap-3">
                      <span className="font-bold text-[var(--color-primary)]">1.</span>
                      Work with a partner nonprofit who identifies a barrier they can&apos;t cover.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[var(--color-primary)]">2.</span>
                      Receive the shared portal password from that partner or The Ladder.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[var(--color-primary)]">3.</span>
                      Sign in and complete the sponsorship application.
                    </li>
                  </ol>

                  <Link href="/guest-portal" className="btn btn-primary btn-lg inline-flex items-center">
                    Enter Guest Portal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>

                  <p className="mt-6 text-sm text-[var(--color-text-muted)]">
                    Don&apos;t have a referral yet?{' '}
                    <Link href="/contact" className="text-[var(--color-primary)] underline">
                      Contact us
                    </Link>{' '}
                    or explore{' '}
                    <Link href="/partners" className="text-[var(--color-primary)] underline">
                      partner organizations
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3
                    className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Barriers We Address
                  </h3>
                  <ul className="space-y-3 text-[var(--color-text-secondary)]">
                    {[
                      'Transportation (car repairs, temporary transit)',
                      'Housing (deposits, documentation fees)',
                      'Employment (work equipment, licensing)',
                      'Education (tuition gaps, materials)',
                      'Healthcare (appointments, prescriptions)',
                      'Legal/Documents (ID replacement, fees)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--color-primary)]/5 rounded-xl border border-[var(--color-primary)]/20 p-6">
                  <h3
                    className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Our Promise to You
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Confidential</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Your information is protected and never shared without consent.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Thoughtful review</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Applications are reviewed by our team after portal submission.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">People over problems</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          We focus on your specific missing rung — not a one-size-fits-all program.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HelpingHand className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Partnership model</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          We work with the nonprofit already walking alongside you.
                        </p>
                      </div>
                    </div>
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
