'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'How We Help', href: '/how-we-help' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Leadership', href: '/leadership-team' },
  { name: 'Events', href: '/events' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-ladder-blue)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/TheLadder/logos/The Ladder - Logo.png"
              alt="The Ladder"
              width={150}
              height={50}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              href="/guest-portal"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] transition-colors"
            >
              Guest Portal
            </Link>
            <Link
              href="/donate"
              className="btn-accent flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-3 -m-2 text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-background)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ladder-blue)]"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
              id="mobile-menu"
            >
              <div className="py-4 space-y-1 border-t border-[var(--color-border)]" role="menu">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] hover:bg-[var(--color-background)] rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-[var(--color-border)] space-y-2">
                  <Link
                    href="/guest-portal"
                    className="block px-4 py-3 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-ladder-blue)] hover:bg-[var(--color-background)] rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Guest Portal
                  </Link>
                  <Link
                    href="/donate"
                    className="btn-accent w-full flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
