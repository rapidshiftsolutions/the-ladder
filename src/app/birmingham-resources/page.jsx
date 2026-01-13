import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { ExternalLink, Phone, MapPin, Heart, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Birmingham Resources | Community Support Directory',
  description: 'Directory of Birmingham area resources for housing, food, healthcare, employment, and other support services. Find help in your community.',
  openGraph: {
    title: 'Birmingham Resources | The Ladder',
    description: 'Find community resources and support services in the Birmingham area.',
    url: 'https://www.the-ladder.org/birmingham-resources',
    type: 'website'
  }
}

const resourceCategories = [
  {
    category: 'Housing & Shelter',
    resources: [
      { name: 'First Light', description: 'Emergency shelter and services', phone: '(205) 323-4277' },
      { name: 'Firehouse Ministries', description: 'Men\'s shelter and recovery programs', phone: '(205) 252-9571' },
      { name: 'Birmingham Housing Authority', description: 'Public housing and vouchers', phone: '(205) 521-0600' }
    ]
  },
  {
    category: 'Food Assistance',
    resources: [
      { name: 'Community Food Bank of Central Alabama', description: 'Food pantry network', phone: '(205) 942-8911' },
      { name: 'Grace Klein Community', description: 'Free grocery distribution', phone: '(205) 856-2683' },
      { name: 'SNAP/Food Stamps', description: 'Government food assistance', phone: '(334) 242-1310' }
    ]
  },
  {
    category: 'Healthcare',
    resources: [
      { name: 'UAB Community Health Services', description: 'Affordable primary care', phone: '(205) 934-9600' },
      { name: 'Birmingham Free Clinic', description: 'Free medical care for uninsured', phone: '(205) 933-3330' },
      { name: 'Crisis Center Birmingham', description: 'Mental health crisis support', phone: '(205) 323-7777' }
    ]
  },
  {
    category: 'Employment',
    resources: [
      { name: 'Alabama Career Center', description: 'Job search and training', phone: '(205) 943-8730' },
      { name: 'Goodwill Industries', description: 'Job training and placement', phone: '(205) 323-6331' },
      { name: 'Dress for Success Birmingham', description: 'Professional attire and career support', phone: '(205) 458-8900' }
    ]
  }
]

export default function BirminghamResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Birmingham Area Resources
              </h1>
              <p className="text-xl text-white/90">
                A directory of community organizations and services that can help 
                with various needs in the Birmingham metro area.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-6 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-amber-800 text-center max-w-3xl mx-auto">
              <strong>Note:</strong> This is a general resource list. The Ladder does not 
              operate these organizations. Please contact them directly for current availability 
              and eligibility requirements.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {resourceCategories.map((cat, index) => (
                  <div key={index}>
                    <h2 
                      className="text-2xl font-bold text-[var(--color-text-primary)] mb-6"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {cat.category}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {cat.resources.map((resource, i) => (
                        <div 
                          key={i}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                        >
                          <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                            {resource.description}
                          </p>
                          <a 
                            href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                            className="flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm hover:underline"
                          >
                            <Phone className="w-4 h-4" />
                            {resource.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Need Help Navigating Resources?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                The Ladder can help connect you with the right resources and 
                address barriers that fall outside traditional service categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-help" className="btn btn-primary">
                  Apply for Assistance
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
