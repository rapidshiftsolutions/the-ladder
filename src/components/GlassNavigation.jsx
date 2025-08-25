"use client";

import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bars3Icon, 
  XMarkIcon, 
  HeartIcon, 
  HandRaisedIcon,
  ChevronDownIcon 
} from "@heroicons/react/24/outline";
import { NavItems } from '/src/data/navigation';

/**
 * Glass Morphism Navigation Component with iOS 26 Styling
 * Features: Backdrop blur, glass effects, mobile-first responsive design
 */
const GlassNavigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Handle scroll effect for glass nav enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const isActivePath = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleDropdownClick = (e, itemName) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Main Navigation */}
      <header 
        className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav scrolled' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="glass-card-strong p-2 rounded-xl shadow-glass-sm group-hover:shadow-glass-md transition-all duration-300">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder - A Helping Hand To People Who Are Climbing Up"
                  className="h-8 w-auto sm:h-10"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {NavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.sections ? (
                    // Dropdown Navigation Item
                    <button
                      onClick={(e) => handleDropdownClick(e, item.name)}
                      className={`glass-button-secondary text-sm px-4 py-2 rounded-lg flex items-center gap-2 min-h-[44px] ${
                        isActivePath(item.href) ? 'glass-button-accent' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    // Regular Navigation Item
                    <Link
                      href={item.href}
                      className={`glass-button-secondary text-sm px-4 py-2 rounded-lg min-h-[44px] flex items-center ${
                        isActivePath(item.href) ? 'glass-button-accent' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && item.sections && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-full left-0 mt-2 glass-modal p-6 rounded-2xl shadow-glass-lg min-w-[600px]"
                      >
                        <div className="grid grid-cols-3 gap-8">
                          {item.sections.map((section) => (
                            <div key={section.heading}>
                              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3 font-heading">
                                {section.heading}
                              </h3>
                              <ul className="space-y-2">
                                {section.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--ladder-blue)] transition-colors duration-200 block py-1"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link 
                href="/get-help" 
                className="glass-button text-sm px-4 py-2 rounded-lg flex items-center gap-2 min-h-[44px]"
                aria-label="Apply for Assistance"
              >
                <HeartIcon className="w-4 h-4" />
                <span className="hidden md:inline">Get Help</span>
              </Link>
              <Link 
                href="/donate" 
                className="glass-button-accent text-sm px-4 py-2 rounded-lg flex items-center gap-2 min-h-[44px]"
                aria-label="Support Our Mission"
              >
                <HandRaisedIcon className="w-4 h-4" />
                <span className="hidden md:inline">Donate</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden glass-button-secondary p-3 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle main menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="xl:hidden glass-modal border-t border-white/20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <nav className="space-y-4">
                  {NavItems.map((item) => (
                    <div key={item.name}>
                      {item.sections ? (
                        <div>
                          <button
                            onClick={(e) => handleDropdownClick(e, `mobile-${item.name}`)}
                            className="glass-button-secondary w-full text-left px-4 py-3 rounded-lg flex items-center justify-between min-h-[44px]"
                          >
                            {item.name}
                            <ChevronDownIcon 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === `mobile-${item.name}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 pl-4 space-y-3"
                              >
                                {item.sections.map((section) => (
                                  <div key={section.heading}>
                                    <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                                      {section.heading}
                                    </h4>
                                    <div className="space-y-1">
                                      {section.links.map((link) => (
                                        <Link
                                          key={link.href}
                                          href={link.href}
                                          className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--ladder-blue)] transition-colors duration-200"
                                        >
                                          {link.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`glass-button-secondary w-full text-left px-4 py-3 rounded-lg block min-h-[44px] flex items-center ${
                            isActivePath(item.href) ? 'glass-button-accent' : ''
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                    <Link 
                      href="/get-help" 
                      className="glass-button w-full text-center px-4 py-3 rounded-lg flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <HeartIcon className="w-5 h-5" />
                      Apply for Help
                    </Link>
                    <Link 
                      href="/donate" 
                      className="glass-button-accent w-full text-center px-4 py-3 rounded-lg flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <HandRaisedIcon className="w-5 h-5" />
                      Donate Now
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

GlassNavigation.displayName = 'GlassNavigation';

export default GlassNavigation;