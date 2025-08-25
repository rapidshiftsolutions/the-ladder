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
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  PhoneIcon,
  InformationCircleIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon
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

  // Get appropriate icon and color for each section
  const getSectionIcon = (heading) => {
    const iconMap = {
      // How We Help sections
      'Our Services': HeartIcon,
      'Common Barriers': ExclamationTriangleIcon,
      'Success Stories': DocumentDuplicateIcon,
      
      // Get Involved sections  
      'Support Our Mission': CurrencyDollarIcon,
      'Partner With Us': BuildingOffice2Icon,
      'Stay Connected': ChatBubbleLeftRightIcon,
    };
    
    return iconMap[heading] || InformationCircleIcon;
  };

  // Get brand color for each section
  const getSectionColor = (heading) => {
    const colorMap = {
      // How We Help sections
      'Our Services': 'var(--ladder-red)',
      'Common Barriers': 'var(--ladder-gold)',
      'Success Stories': 'var(--ladder-green)',
      
      // Get Involved sections  
      'Support Our Mission': 'var(--ladder-blue)',
      'Partner With Us': 'var(--ladder-purple)',
      'Stay Connected': 'var(--ladder-teal)',
    };
    
    return colorMap[heading] || 'var(--ladder-blue)';
  };

  // Get glass background color for each section
  const getSectionGlassColor = (heading) => {
    const glassColorMap = {
      // How We Help sections
      'Our Services': 'glass-card-red',
      'Common Barriers': 'glass-card-gold',
      'Success Stories': 'glass-card-green',
      
      // Get Involved sections  
      'Support Our Mission': 'glass-card',
      'Partner With Us': 'glass-card-purple',
      'Stay Connected': 'glass-card-teal',
    };
    
    return glassColorMap[heading] || 'glass-card';
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
              <img 
                src="/TheLadder/logos/The Ladder - Logo.png" 
                alt="The Ladder - A Helping Hand To People Who Are Climbing Up"
                className="h-12 w-auto sm:h-14 lg:h-16 group-hover:scale-105 transition-all duration-300"
              />
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
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-2xl w-[800px] overflow-hidden"
                      >
                        {/* Branded header with gradient */}
                        <div className="bg-gradient-to-r from-[var(--ladder-blue)]/12 via-[var(--ladder-red)]/8 to-[var(--ladder-green)]/6 px-4 py-3 border-b border-white/30">
                          <h2 className="text-sm font-bold text-[var(--ladder-blue)] flex items-center">
                            <div className="w-2 h-2 bg-[var(--ladder-red)] rounded-full mr-2"></div>
                            {item.name}
                          </h2>
                        </div>
                        
                        <div className="p-4">
                          <div className="grid grid-cols-3 gap-6">
                            {item.sections.map((section, index) => (
                              <div key={section.heading} className="relative">
                                {/* Subtle divider */}
                                {index > 0 && (
                                  <div className="absolute left-0 top-0 w-px h-full bg-[var(--ladder-blue)]/15 -ml-3"></div>
                                )}
                                
                                <div className={`${getSectionGlassColor(section.heading)} backdrop-blur-md border border-white/30 rounded-xl p-3 hover:scale-[1.02] transition-all duration-300 shadow-sm`}>
                                  <div className="flex items-center mb-2">
                                    {(() => {
                                      const IconComponent = getSectionIcon(section.heading);
                                      const sectionColor = getSectionColor(section.heading);
                                      return (
                                        <div 
                                          className="w-5 h-5 mr-2 flex-shrink-0"
                                          style={{ color: sectionColor }}
                                        >
                                          <IconComponent className="w-5 h-5" />
                                        </div>
                                      );
                                    })()}
                                    <h3 
                                      className="text-xs font-bold uppercase tracking-wide"
                                      style={{ color: getSectionColor(section.heading) }}
                                    >
                                      {section.heading}
                                    </h3>
                                  </div>
                                  
                                  <ul className="space-y-1 ml-2">
                                    {section.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          className="group flex items-center text-sm text-[var(--text-secondary)] hover:bg-white/60 transition-all duration-200 py-1.5 px-2 rounded-md"
                                          style={{
                                            '--hover-color': getSectionColor(section.heading)
                                          }}
                                        >
                                          <div 
                                            className="w-1 h-1 rounded-full mr-2 flex-shrink-0 transition-all duration-200 group-hover:scale-125"
                                            style={{ 
                                              backgroundColor: `${getSectionColor(section.heading)}40`,
                                              '--group-hover-bg': getSectionColor(section.heading)
                                            }}
                                          ></div>
                                          <span 
                                            className="font-medium group-hover:font-semibold transition-all duration-200 text-ellipsis overflow-hidden"
                                            style={{ color: 'inherit' }}
                                            onMouseEnter={(e) => e.target.style.color = getSectionColor(section.heading)}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                          >
                                            {link.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
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
                                transition={{ duration: 0.3 }}
                                className="mt-2 bg-white/85 backdrop-blur-md border border-white/40 rounded-lg p-3 shadow-lg"
                              >
                                <div className="space-y-3">
                                  {item.sections.map((section, index) => (
                                    <div key={section.heading}>
                                      {index > 0 && <div className="border-t border-white/30 -mx-3 pt-3"></div>}
                                      
                                      <div className="flex items-center mb-2">
                                        {(() => {
                                          const IconComponent = getSectionIcon(section.heading);
                                          const sectionColor = getSectionColor(section.heading);
                                          return (
                                            <div 
                                              className="w-4 h-4 mr-2 flex-shrink-0"
                                              style={{ color: sectionColor }}
                                            >
                                              <IconComponent className="w-4 h-4" />
                                            </div>
                                          );
                                        })()}
                                        <h4 
                                          className="text-xs font-bold uppercase"
                                          style={{ color: getSectionColor(section.heading) }}
                                        >
                                          {section.heading}
                                        </h4>
                                      </div>
                                      
                                      <div className="space-y-0.5 ml-2">
                                        {section.links.map((link) => (
                                          <Link
                                            key={link.href}
                                            href={link.href}
                                            className="group flex items-center py-1.5 px-2 text-sm text-[var(--text-secondary)] hover:bg-white/60 rounded transition-all duration-200"
                                          >
                                            <div 
                                              className="w-1 h-1 rounded-full mr-2 flex-shrink-0 transition-all duration-200 group-hover:scale-150"
                                              style={{ 
                                                backgroundColor: `${getSectionColor(section.heading)}40`
                                              }}
                                            ></div>
                                            <span 
                                              className="font-medium group-hover:font-semibold transition-all duration-200"
                                              onMouseEnter={(e) => e.target.style.color = getSectionColor(section.heading)}
                                              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                            >
                                              {link.name}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
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