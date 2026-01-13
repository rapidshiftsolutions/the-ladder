import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Leadership Team', href: '/leadership-team' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Annual Reports', href: '/annual-reports' },
  ],
  getInvolved: [
    { name: 'Donate', href: '/donate' },
    { name: 'Partner With Us', href: '/partners' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'How We Help', href: '/how-we-help' },
    { name: 'Guest Portal', href: '/guest-portal' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partner Agencies', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-ladder-blue)] text-white">
      {/* CTA Banner */}
      <div className="bg-[var(--color-ladder-red)] py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Help Someone Climb Higher
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Your donation removes real barriers for real people in Birmingham.
            Every dollar makes a difference.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-ladder-red)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            <Heart className="w-5 h-5" />
            Give Today
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Image
                src="/TheLadder/logos/The Ladder - Logo.png"
                alt="The Ladder"
                width={140}
                height={50}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-white/80 text-sm mb-4">
                Helping Birmingham residents climb over life&apos;s barriers, one rung at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-white/80">
                <a 
                  href="mailto:info@the-ladder.org" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@the-ladder.org
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Birmingham, AL</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/theladder_bham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div className="text-center sm:text-left">
              <p>© {currentYear} The Ladder. All rights reserved.</p>
              <p className="mt-1">
                501(c)(3) Nonprofit Organization • EIN: 47-2123160
              </p>
            </div>
            <p className="text-center sm:text-right">
              All donations are tax-deductible to the extent allowed by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
