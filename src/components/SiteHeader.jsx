'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Heart, Phone, ChevronDown, Mail, Shield, LogIn } from 'lucide-react'
import GivebutterButton from '@/components/givebutter/GivebutterButton'
import { useSiteSettings } from '@/components/SiteSettingsProvider'

const DEFAULT_PHONE = '(205) 306-1690'
const DEFAULT_EMAIL = 'info@the-ladder.org'

function toTelHref(phone) {
  const digits = String(phone || '').replace(/[^0-9+]/g, '')
  return `tel:${digits}`
}

// Navigation structure with dropdowns
const navigation = [
  { 
    name: 'About', 
    href: '/about',
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/leadership-team' },
      { name: 'Board Governance', href: '/board-governance' },
      { name: 'Success Stories', href: '/success-stories' },
    ]
  },
  { name: 'How We Help', href: '/how-we-help' },
  { name: 'Get Help', href: '/get-help' },
  { 
    name: 'Get Involved', 
    href: '/donate',
    children: [
      { name: 'Donate', href: '/donate' },
      { name: 'Monthly Giving', href: '/monthly-giving' },
      { name: 'Volunteer', href: '/volunteer' },
      { name: 'Corporate Partnerships', href: '/corporate-partnerships' },
    ]
  },
  { name: 'Partners', href: '/partners' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

// Dropdown component for desktop
function NavDropdown({ item, isActive }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 whitespace-nowrap px-2 xl:px-4 h-10 text-sm font-medium transition-colors rounded-md leading-none ${
          isActive 
            ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5' 
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={`absolute left-0 top-full pt-2 z-[10000] transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mobile dropdown component
function MobileNavDropdown({ item, onClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = item.children?.some(child => pathname === child.href) || pathname === item.href

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
          isActive 
            ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5' 
            : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
        }`}
      >
        {item.name}
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pl-4 py-1 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                pathname === child.href
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5 font-medium'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
              }`}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const siteSettings = useSiteSettings()
  const phone = siteSettings.phone || DEFAULT_PHONE
  const email = siteSettings.email || DEFAULT_EMAIL
  const telHref = toTelHref(phone)

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Check if a nav item is active
  const isNavActive = (item) => {
    if (item.children) {
      return item.children.some(child => pathname === child.href)
    }
    return pathname === item.href
  }

  return (
    <>
      {/* Top Bar - Trust Signals */}
      <div className="hidden md:block bg-[var(--color-primary)] text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-5">
              <a href={telHref} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {email}
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                501(c)(3) Tax Exempt
              </span>
              <span className="text-white/40">|</span>
              <span>EIN: 82-0737087</span>
              <span className="text-white/40">|</span>
              <span>Serving Birmingham Since 2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-[9999] bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible" aria-label="Main navigation">
          <div className="flex h-16 lg:h-20 items-center justify-between overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-10 flex items-center h-full py-2 px-1 overflow-hidden">
              <Image
                src="/TheLadder/logos/The Ladder - Logo.png"
                alt="The Ladder - Birmingham Nonprofit"
                width={80}
                height={27}
                className="max-h-full w-auto object-contain"
                style={{ maxHeight: 'calc(100% - 1rem)' }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1 relative z-[100]">
              {navigation.map((item) => (
                item.children ? (
                  <NavDropdown 
                    key={item.name} 
                    item={item} 
                    isActive={isNavActive(item)}
                  />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center whitespace-nowrap px-2 xl:px-4 h-10 text-sm font-medium transition-colors rounded-md leading-none ${
                      isNavActive(item)
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTAs — outlined login sits beside the donation button so
                referred applicants have an obvious way in without competing
                with the primary give action. */}
            <div className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-3">
              <Link
                href="/guest-portal"
                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-[var(--color-primary)]/30 px-3 xl:px-4 h-11 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                <span className="xl:hidden">Log In</span>
                <span className="hidden xl:inline">Portal Login</span>
              </Link>

              <GivebutterButton widgetId="prW2aY" />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden relative z-10 p-2 -m-2 text-[var(--color-text-primary)] rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu
            `inert` while closed: the panel stays in the DOM at opacity 0, so
            without it a keyboard user tabs through 19 invisible links. */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          {...(mobileMenuOpen ? {} : { inert: '' })}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div
            className={`absolute inset-x-0 top-16 bottom-0 bg-white overflow-y-auto transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                item.children ? (
                  <MobileNavDropdown 
                    key={item.name} 
                    item={item} 
                    onClose={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Trust Bar */}
              <div className="pt-6 mt-4 border-t border-gray-200">
                <div className="px-4 py-2 text-sm text-[var(--color-text-secondary)]">
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    501(c)(3) Nonprofit Organization
                  </p>
                  <p className="mt-1">EIN: 82-0737087</p>
                </div>
              </div>
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3">
                <div className="px-4 space-y-3">
                  <Link
                    href="/donate"
                    className="btn btn-accent w-full flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </Link>

                  <Link
                    href="/guest-portal"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-primary)] px-4 py-3 text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" aria-hidden="true" />
                    Portal Login
                  </Link>

                  <p className="text-center text-xs text-[var(--color-text-secondary)]">
                    Applying for assistance? Sign in with the password from your partner nonprofit.
                  </p>
                </div>
                
                {/* Mobile Contact */}
                <div className="px-4 pt-4 space-y-3">
                  <a 
                    href={telHref} 
                    className="flex items-center gap-2 text-[var(--color-primary)] font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    {phone}
                  </a>
                  <a 
                    href={`mailto:${email}`} 
                    className="flex items-center gap-2 text-[var(--color-primary)] font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
