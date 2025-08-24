import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'

export const metadata = {
  title: 'Privacy Policy | OEM Radio Repair',
  description: 'OEM Radio Repair privacy policy - Learn how we protect and handle your personal information.',
  keywords: ['privacy policy', 'data protection', 'OEM Radio Repair'],
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-exo2 font-black italic text-text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              <strong>Effective Date:</strong> 2025
            </p>
            
            <div className="space-y-6 text-text-primary">
              <section>
                <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
                <p className="text-text-secondary mb-4">
                  We collect information you provide when booking appointments, including:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Name and contact information</li>
                  <li>Vehicle information (year, make, model, mileage)</li>
                  <li>Service preferences and history</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Schedule and confirm appointments</li>
                  <li>Provide automotive services</li>
                  <li>Send service reminders and maintenance notifications</li>
                  <li>Process payments</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Information Sharing</h2>
                <p className="text-text-secondary">
                  We do not sell, rent, or share your personal information with third parties except:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary mt-2">
                  <li>With your explicit consent</li>
                  <li>To process payments through secure payment processors</li>
                  <li>As required by law or legal process</li>
                  <li>To protect our rights and property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Data Security</h2>
                <p className="text-text-secondary">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Your Rights</h2>
                <p className="text-text-secondary mb-2">You have the right to:</p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Contact Us</h2>
                <p className="text-text-secondary">
                  If you have questions about this privacy policy, contact us at:
                </p>
                <div className="mt-2 text-text-secondary">
                  <p>OEM Radio Repair</p>
                  <p>2413 1st Ave S, Birmingham, AL 35233</p>
                  <p>Phone: (205) 522-1162</p>
                  <p>Email: info@oemradiorepair.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Changes to This Policy</h2>
                <p className="text-text-secondary">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
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