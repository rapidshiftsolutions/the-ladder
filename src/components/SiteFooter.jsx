'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Shield, Award, CheckCircle } from 'lucide-react'
import { useSiteSettings } from '@/components/SiteSettingsProvider'

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Leadership Team', href: '/leadership-team' },
    { name: 'Governance', href: '/board-governance' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Annual Reports', href: '/annual-reports' },
    { name: 'Financials', href: '/financials' },
  ],
  getInvolved: [
    { name: 'Donate Now', href: '/donate' },
    { name: 'Monthly Giving', href: '/monthly-giving' },
    { name: 'Corporate Partners', href: '/corporate-partnerships' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Events', href: '/events' },
  ],
  getHelp: [
    { name: 'How We Help', href: '/how-we-help' },
    { name: 'Apply for Help', href: '/get-help' },
    { name: 'Guest Portal', href: '/guest-portal' },
    { name: 'Partners', href: '/partners' },
    { name: 'Local Resources', href: '/birmingham-resources' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

const defaultSettings = {
  orgName: 'The Ladder',
  phone: '(205) 306-1690',
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

function FooterNavColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <h3 className="site-footer__heading mb-3">{title}</h3>
      <ul className="space-y-0.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="site-footer__link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SiteFooter({ siteSettings = {} }) {
  const currentYear = new Date().getFullYear()
  const cmsSettings = useSiteSettings()
  const incoming = {
    ...cmsSettings,
    ...siteSettings,
    address: { ...cmsSettings?.address, ...siteSettings?.address },
    socialLinks: { ...cmsSettings?.socialLinks, ...siteSettings?.socialLinks },
  }

  const settings = {
    ...defaultSettings,
    ...incoming,
    address: { ...defaultSettings.address, ...incoming.address },
    socialLinks: { ...defaultSettings.socialLinks, ...incoming.socialLinks },
  }

  const fullAddress = settings.address.street
    ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip || ''}`.trim()
    : `${settings.address.city}, ${settings.address.state}`

  return (
    <footer className="site-footer bg-white border-t border-gray-200 pb-20 sm:pb-0">
      <section className="bg-[var(--color-primary)] py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="mb-4 text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Help Us Remove Barriers for Birmingham Residents
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-base text-white/90 sm:text-lg">
              Your generosity helps people overcome obstacles and rebuild. Every gift creates measurable impact.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--color-accent-light)] sm:text-lg"
              >
                <Heart className="h-5 w-5" />
                Make a Donation
              </Link>
              <Link
                href="/monthly-giving"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/20 sm:text-lg"
              >
                Become a Monthly Donor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-[var(--color-text-secondary)] sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Shield className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">501(c)(3) Tax Exempt</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Award className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">
                Serving Birmingham Since {settings.foundedYear}
              </span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">100% to Direct Services</span>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.95fr)_minmax(0,2.2fr)] lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <Image
                src="/TheLadder/logos/The Ladder - Logo.png"
                alt={settings.orgName}
                width={160}
                height={53}
                className="mb-4 h-12 w-auto"
              />
              <p className="site-footer__blurb mb-6 text-sm leading-relaxed">
                {settings.orgName} helps Birmingham residents clear specific barriers
                standing in the way of their next step forward.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="site-footer__contact"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <span>{settings.phone}</span>
                </a>
                <a href={`mailto:${settings.email}`} className="site-footer__contact">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <span className="break-all">{settings.email}</span>
                </a>
                <div className="site-footer__contact">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  <span>{fullAddress}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {settings.socialLinks.instagram && (
                  <a
                    href={settings.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {settings.socialLinks.facebook && settings.socialLinks.facebook !== '#' && (
                  <a
                    href={settings.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {settings.socialLinks.linkedin && settings.socialLinks.linkedin !== '#' && (
                  <a
                    href={settings.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                    aria-label="Connect on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-5 lg:gap-x-6 xl:gap-x-8">
              <FooterNavColumn title="About Us" links={footerLinks.about} />
              <FooterNavColumn title="Get Involved" links={footerLinks.getInvolved} />
              <FooterNavColumn title="Get Help" links={footerLinks.getHelp} />
              <div className="min-w-0">
                <FooterNavColumn title="Legal" links={footerLinks.legal} />
                <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3">
                  <p className="text-xs leading-relaxed text-[#3d4f5f]">
                    <span className="font-semibold text-[var(--color-text-primary)]">EIN</span>{' '}
                    {settings.ein}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#3d4f5f]">
                    Tax-deductible donations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-[#2f4050] md:flex-row md:gap-4 md:text-left">
            <p>
              © {currentYear} {settings.orgName}. All rights reserved.
            </p>
            <p className="text-pretty md:text-right">
              Donations are tax-deductible as allowed by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
