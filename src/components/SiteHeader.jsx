'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Heart, Phone, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'How We Help', href: '/how-we-help' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Leadership', href: '/leadership-team' },
  { name: 'Partners', href: '/partners' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Top Bar - Trust Signals */}
      <div className="hidden md:block bg-[var(--color-primary)] text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+12055221162" className="hover:underline">
                  (205) 522-1162
                </a>
              </span>
              <span className="text-white/80">
                501(c)(3) Nonprofit • EIN: 47-2123160
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/get-help" className="hover:underline">
                Need Help?
              </Link>
              <Link href="/guest-portal" className="hover:underline">
                Guest Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/TheLadder/logos/The Ladder - Logo.png"
                alt="The Ladder - Birmingham Nonprofit"
                width={160}
                height={53}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Link
                href="/get-help"
                className="btn btn-secondary text-sm"
              >
                Get Help
              </Link>
              <Link
                href="/donate"
                className="btn btn-accent flex items-center gap-2 text-sm"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 -m-2 text-[var(--color-text-primary)] rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 z-40"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <div
              className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-white overflow-y-auto"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
            >
              <div className="px-4 py-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Trust Bar */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <div className="px-4 py-2 text-sm text-[var(--color-text-secondary)]">
                    <p className="font-medium text-[var(--color-text-primary)]">
                      501(c)(3) Nonprofit Organization
                    </p>
                    <p>EIN: 47-2123160</p>
                  </div>
                </div>
                
                {/* Mobile CTAs */}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/guest-portal"
                    className="block px-4 py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Guest Portal
                  </Link>
                  
                  <div className="px-4 space-y-3">
                    <Link
                      href="/get-help"
                      className="btn btn-secondary w-full justify-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Help
                    </Link>
                    <Link
                      href="/donate"
                      className="btn btn-accent w-full flex items-center justify-center gap-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Heart className="w-4 h-4" />
                      Donate Now
                    </Link>
                  </div>
                  
                  {/* Mobile Contact */}
                  <div className="px-4 pt-4">
                    <a 
                      href="tel:+12055221162" 
                      className="flex items-center gap-2 text-[var(--color-primary)] font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      (205) 522-1162
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}
