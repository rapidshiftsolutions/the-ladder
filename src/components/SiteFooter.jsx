import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Shield, Award, CheckCircle } from 'lucide-react'

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Leadership Team', href: '/leadership-team' },
    { name: 'Board Governance', href: '/board-governance' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Annual Reports', href: '/annual-reports' },
    { name: 'Financials', href: '/financials' },
  ],
  getInvolved: [
    { name: 'Donate Now', href: '/donate' },
    { name: 'Monthly Giving', href: '/monthly-giving' },
    { name: 'Corporate Partnerships', href: '/corporate-partnerships' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Events', href: '/events' },
  ],
  getHelp: [
    { name: 'How We Help', href: '/how-we-help' },
    { name: 'Apply for Assistance', href: '/get-help' },
    { name: 'Guest Portal', href: '/guest-portal' },
    { name: 'Partner Organizations', href: '/partners' },
    { name: 'Birmingham Resources', href: '/birmingham-resources' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

// Default values (used when CMS data is not available)
const defaultSettings = {
  orgName: 'The Ladder',
  phone: '(205) 522-1162',
  email: 'info@the-ladder.org',
  address: {
    city: 'Birmingham',
    state: 'AL',
  },
  ein: '82-0737087',
  foundedYear: 2021,
  socialLinks: {
    instagram: 'https://instagram.com/theladder_bham',
    facebook: '#',
    linkedin: '#',
  },
}

export default function SiteFooter({ siteSettings = {} }) {
  const currentYear = new Date().getFullYear()
  
  // Merge with defaults
  const settings = {
    ...defaultSettings,
    ...siteSettings,
    address: { ...defaultSettings.address, ...siteSettings?.address },
    socialLinks: { ...defaultSettings.socialLinks, ...siteSettings?.socialLinks },
  }

  const fullAddress = settings.address.street 
    ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip || ''}`
    : `${settings.address.city}, ${settings.address.state}`

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* CTA Section */}
      <section className="bg-gray-700 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Help Us Remove Barriers for Birmingham Residents
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Your generosity makes it possible for individuals to overcome obstacles 
              and build better lives. Every contribution creates real, measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-accent-light)] transition-colors shadow-lg"
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
              <Link
                href="/monthly-giving"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Become a Monthly Donor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">501(c)(3) Tax Exempt</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <Award className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">Serving Birmingham Since {settings.foundedYear}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">100% of Donations to Direct Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Image
                src="/TheLadder/logos/The Ladder - Logo.png"
                alt={settings.orgName}
                width={160}
                height={53}
                className="h-12 w-auto mb-4"
              />
              <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-sm">
                {settings.orgName} is a Birmingham, Alabama 501(c)(3) nonprofit organization 
                dedicated to helping individuals overcome barriers to success through 
                crisis intervention and community partnerships.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <a 
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  {settings.phone}
                </a>
                <a 
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                  {settings.email}
                </a>
                <div className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] mt-0.5" />
                  <span>{fullAddress}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {settings.socialLinks.instagram && (
                  <a
                    href={settings.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {settings.socialLinks.facebook && settings.socialLinks.facebook !== '#' && (
                  <a
                    href={settings.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {settings.socialLinks.linkedin && settings.socialLinks.linkedin !== '#' && (
                  <a
                    href={settings.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Connect on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">About Us</h3>
              <ul className="space-y-1">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved Links */}
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Get Involved</h3>
              <ul className="space-y-1">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Help Links */}
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Get Help</h3>
              <ul className="space-y-1">
                {footerLinks.getHelp.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Legal</h3>
              <ul className="space-y-1">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[44px] flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* EIN Badge */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">EIN:</strong> {settings.ein}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Tax-deductible donations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-secondary)]">
            <p>
              © {currentYear} {settings.orgName}. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              All donations are tax-deductible to the fullest extent allowed by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
