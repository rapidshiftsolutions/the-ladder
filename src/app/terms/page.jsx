import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'

export const metadata = {
  title: 'Terms of Service | OEM Radio Repair',
  description: 'OEM Radio Repair terms of service - Important legal information about using our services.',
  keywords: ['terms of service', 'legal', 'OEM Radio Repair'],
}

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-exo2 font-black italic text-text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              <strong>Effective Date:</strong> 2025
            </p>
            
            <div className="space-y-6 text-text-primary">
              <section>
                <h2 className="text-xl font-bold mb-3">Acceptance of Terms</h2>
                <p className="text-text-secondary">
                  By using OEM Radio Repair's services, scheduling appointments, or visiting our facility, you agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Services Provided</h2>
                <p className="text-text-secondary mb-2">
                  OEM Radio Repair provides automotive maintenance and modification services including but not limited to:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Oil changes and fluid services</li>
                  <li>Filter replacements and maintenance</li>
                  <li>Battery service and replacement</li>
                  <li>Aftermarket installations (lifts, bumpers, lighting, audio)</li>
                  <li>Vehicle inspections and diagnostics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Pricing and Payment</h2>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Pricing:</strong> All prices listed are starting amounts and may vary based on vehicle specifications, parts required, labor complexity, and service requirements. Final pricing will be confirmed before service begins.</p>
                  <p><strong>Payment:</strong> Payment is due upon completion of services. We accept cash, credit cards, and debit cards.</p>
                  <p><strong>Estimates:</strong> Estimates are provided in good faith but are not binding. Final charges may differ based on actual work performed.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Customer Responsibilities</h2>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Provide accurate vehicle information and service history</li>
                  <li>Disclose any known vehicle issues or modifications</li>
                  <li>Remove personal items from vehicle before service</li>
                  <li>Pay for services in full upon completion</li>
                  <li>Follow recommended maintenance schedules</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Limitation of Liability</h2>
                <div className="space-y-2 text-text-secondary">
                  <p>OEM Radio Repair's liability is limited to the cost of services performed. We are not liable for:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Consequential, incidental, or indirect damages</li>
                    <li>Pre-existing vehicle conditions or hidden defects</li>
                    <li>Normal wear and tear</li>
                    <li>Damage from customer misuse or neglect</li>
                    <li>Issues arising from modifications performed elsewhere</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Warranties</h2>
                <p className="text-text-secondary">
                  Service warranties are provided as specified in our Warranty Policy. Warranties do not cover normal wear, misuse, or damage from external factors. See our warranty page for complete terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Vehicle Custody and Risk</h2>
                <div className="space-y-2 text-text-secondary">
                  <p>While vehicles are in our care, we exercise reasonable care to protect them. However:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>We are not responsible for theft of personal items left in vehicles</li>
                    <li>Pre-existing damage should be disclosed before service</li>
                    <li>We reserve the right to refuse service on unsafe vehicles</li>
                    <li>Customer assumes risk for vehicles with illegal modifications</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Appointment and Cancellation Policy</h2>
                <ul className="list-disc ml-6 space-y-1 text-text-secondary">
                  <li>Appointments are recommended but not required</li>
                  <li>Service times are estimates and may vary</li>
                  <li>Cancellations should be made at least 2 hours in advance</li>
                  <li>We reserve the right to reschedule due to unforeseen circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Dispute Resolution</h2>
                <p className="text-text-secondary">
                  Any disputes will be resolved through good faith negotiation. If necessary, disputes may be subject to binding arbitration under Tennessee state law in Cocke County, Tennessee.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Governing Law</h2>
                <p className="text-text-secondary">
                  These terms are governed by Tennessee state law and local Birmingham, AL ordinances. Any legal actions must be filed in Cocke County, Tennessee.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Modifications to Terms</h2>
                <p className="text-text-secondary">
                  We reserve the right to modify these terms at any time. Updated terms will be posted on our website with an updated effective date. Continued use of our services constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Contact Information</h2>
                <div className="text-text-secondary">
                  <p>For questions about these terms, contact:</p>
                  <div className="mt-2">
                    <p>OEM Radio Repair</p>
                    <p>2413 1st Ave S, Birmingham, AL 37821</p>
                    <p>Phone: (205) 522-1162</p>
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