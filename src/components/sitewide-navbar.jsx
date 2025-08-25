"use client";

import { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavbar from "/src/components/sitewide-mobilenavbar";

import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { NavItems } from '/src/data/navigation';

// Pre-computed column classes for better performance
const GRID_CLASSES = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
};

// Pre-computed width styles for better performance
const WIDTH_STYLES = {
  1: { minWidth: "300px", maxWidth: "350px" },
  2: { minWidth: "500px", maxWidth: "650px" },
  3: { minWidth: "700px", maxWidth: "900px" },
  4: { minWidth: "800px", maxWidth: "1000px" },
  5: { minWidth: "900px", maxWidth: "1200px" },
};

// Animation variants
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Enhanced dropdown menu with animations
const DropdownMenu = memo(
  (
    { item, isOpen, onClose, onMouseEnter, onMouseLeave, isRightmost = false },
  ) => {
    const dropdownRef = useRef(null);
    const [position, setPosition] = useState({});

    // Calculate number of columns needed based on number of sections
    const numSections = item.sections?.length || 0;
    const numColumns = Math.min(numSections, 3); // Maximum of 3 columns

    // Dynamic grid class based on number of columns - using pre-computed values
    const gridClass = GRID_CLASSES[numColumns] || GRID_CLASSES[3];

    // Width styles - using pre-computed values
    const widthStyles = WIDTH_STYLES[numColumns] || WIDTH_STYLES[3];

    useEffect(() => {
      if (isOpen && dropdownRef.current) {
        // Force right-aligned positioning for rightmost items
        if (isRightmost) {
          setPosition({ right: "0", left: "auto", transform: "none" });
        } else {
          // Get the position of the dropdown relative to the viewport
          const rect = dropdownRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;

          // Calculate if dropdown would be cut off on edges
          const leftOverflow = rect.left < 0;
          const rightOverflow = rect.right > viewportWidth;

          // Adjust position based on overflow
          if (rightOverflow && !leftOverflow) {
            setPosition({ right: "0", left: "auto", transform: "none" });
          } else if (leftOverflow && !rightOverflow) {
            setPosition({ left: "0", right: "auto", transform: "none" });
          } else if (rightOverflow && leftOverflow) {
            setPosition({ left: "50%", transform: "translateX(-50%)" });
          } else {
            setPosition({ left: "0", transform: "translateX(-10%)" });
          }
        }
      }
    }, [isOpen, isRightmost]);

    if (!isOpen || !item.sections || item.sections.length === 0) return null;

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            className="absolute mt-1 rounded-lg overflow-hidden shadow-xl bg-white z-[10000] border border-gray-100"
            style={{
              width: "max-content",
              ...widthStyles,
              ...position,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            <div className={`grid ${gridClass} gap-0`}>
              {item.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-6 hover:bg-gray-50 transition-all duration-300 h-full"
                >
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 whitespace-nowrap border-b border-gray-100 pb-2">
                    {section.heading}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <motion.div
                          variants={linkVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <Link
                            href={link.href}
                            className="block text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200 whitespace-nowrap"
                            onClick={onClose}
                            prefetch={link.href.startsWith("/")
                              ? true
                              : undefined}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

// Set display name for debugging
DropdownMenu.displayName = "DropdownMenu";

// Enhanced NavLink component with animations
const NavLink = memo(({ item, isOpen, onClick, onMouseEnter }) => (
  <button
    className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
      isOpen ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
    }`}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    aria-expanded={isOpen}
  >
    {item.name}
    {isOpen && (
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-500 rounded-full"
        layoutId="activeNavIndicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
));

// Set display name for debugging
NavLink.displayName = "NavLink";

// Optimized custom Link component that ensures fast navigation
const FastLink = memo(({ href, className, children, prefetch, ...props }) => {
  // Don't trigger prefetch for external links
  const isPrefetchable = href.startsWith("/");

  return (
    <Link
      href={href}
      className={className}
      {...props}
      prefetch={prefetch !== undefined ? prefetch : isPrefetchable}
    >
      {children}
    </Link>
  );
});

// Set display name for debugging
FastLink.displayName = "FastLink";

const Navbar = () => {
  // useState calls using null as initializer for better SSR compatibility
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const navRef = useRef(null);
  const scrollListenerRef = useRef(null);

  // Initialize state on client-side to prevent SSR hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimize scroll listener with throttling and passive option
  useEffect(() => {
    const throttleScroll = () => {
      if (!scrollListenerRef.current) {
        scrollListenerRef.current = setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
          scrollListenerRef.current = null;
        }, 100);
      }
    };

    // Add passive flag for better performance
    window.addEventListener("scroll", throttleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttleScroll);
      if (scrollListenerRef.current) {
        clearTimeout(scrollListenerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHover = (name) => {
    // Only set dropdown for items that have sections
    const item = NavItems.find(item => item.name === name);
    if (item && item.sections && item.sections.length > 0) {
      setOpenDropdown(name);
    }
  };

  // Toggle mobile menu with memoized callback
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Memoized callback for dropdown toggle
  const toggleDropdown = (name) => {
    // Only toggle dropdown for items that have sections
    const item = NavItems.find(item => item.name === name);
    if (item && item.sections && item.sections.length > 0) {
      setOpenDropdown((prev) => prev === name ? null : name);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "shadow-xl shadow-black/20 bg-white/95" : "bg-white/90"
      } backdrop-blur-md border-b border-gray-200/50`}
      ref={navRef}
    >

      {/* Main Navigation - Using simplified rendering for better performance */}
      <div className="bg-transparent backdrop-blur-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Using Link for fast navigation */}
            <div className="flex-shrink-0 flex items-center">
              <FastLink href="/" className="flex items-center" prefetch={true}>
                <motion.div
                  initial={{ opacity: 0.9, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* The Ladder Logo */}
                  <div className="flex items-center">
                    <img 
                      src="/TheLadder/logos/The Ladder - Logo.png" 
                      alt="The Ladder - A Helping Hand To People Who Are Climbing Up"
                      className="h-12 w-auto"
                    />
                  </div>
                </motion.div>
              </FastLink>
            </div>

            {/* Desktop Navigation - Only render on client */}
            {isClient && (
              <motion.nav
                className="hidden xl:flex items-center"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex space-x-0">
                  {NavItems.map((item, idx) => {
                    // Check if this is one of the rightmost items (About Us or last 2 items)
                    const isRightmost = idx >= NavItems.length - 2 ||
                      item.name === "About Us";

                    // If item has href, render as direct link
                    if (item.href) {
                      return (
                        <div key={idx} className="relative flex items-center">
                          <Link
                            href={item.href}
                            className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-500 transition-all duration-200 whitespace-nowrap inline-flex items-center"
                          >
                            {item.name}
                          </Link>
                        </div>
                      );
                    }

                    // If item has sections, render with dropdown
                    return (
                      <div key={idx} className="relative">
                        <NavLink
                          item={item}
                          isOpen={openDropdown === item.name}
                          onClick={() => toggleDropdown(item.name)}
                          onMouseEnter={() => handleHover(item.name)}
                        />
                        <DropdownMenu
                          item={item}
                          isOpen={openDropdown === item.name}
                          onClose={() => setOpenDropdown(null)}
                          onMouseEnter={() => handleHover(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                          isRightmost={isRightmost}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.nav>
            )}

            {/* Mobile navigation trigger */}
            <div className="xl:hidden flex items-center">
              <div className="flex items-center space-x-4">
                <a
                  href="/get-help"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--ladder-red)] text-white hover:bg-[var(--ladder-red)]/90 transition-colors duration-300"
                  aria-label="Get Help"
                  title="Apply for Assistance"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                
                <a
                  href="/donate"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--ladder-gold)] text-white hover:bg-[var(--ladder-gold)]/90 transition-colors duration-300"
                  aria-label="Donate"
                  title="Support Our Mission"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.268-.268-1.707-.707a2.828 2.828 0 010-4l.879-.659C11.536 6.781 12.268 7 12 7s.464-.219.828-.366c1.172-.879 3.07-.879 4.242 0C18.243 7.513 18.243 8.937 17.071 9.816l-.879.659"
                    />
                  </svg>
                </a>
                <motion.button
                  type="button"
                  className={`inline-flex items-center justify-center p-2.5 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300 ${
                    mobileMenuOpen ? "bg-gray-100" : ""
                  }`}
                  onClick={toggleMobileMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle main menu"
                  whileTap={{ scale: 0.95 }}
                >
                  {mobileMenuOpen
                    ? (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )
                    : (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                </motion.button>
              </div>
            </div>

            {/* Auth Buttons - Only render on client */}
            {isClient && (
              <>
                <motion.div
                  className="hidden xl:flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <motion.a
                    href="/get-help"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-medium text-white bg-[var(--ladder-red)] hover:bg-[var(--ladder-red)]/90 transition-all duration-300 whitespace-nowrap shadow-sm mr-3"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Get Help
                  </motion.a>
                  
                  <motion.a
                    href="/donate"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-medium text-white bg-[var(--ladder-gold)] hover:bg-[var(--ladder-gold)]/90 transition-all duration-300 whitespace-nowrap shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.268-.268-1.707-.707a2.828 2.828 0 010-4l.879-.659C11.536 6.781 12.268 7 12 7s.464-.219.828-.366c1.172-.879 3.07-.879 4.242 0C18.243 7.513 18.243 8.937 17.071 9.816l-.879.659" />
                    </svg>
                    Donate
                  </motion.a>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNavbar
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          navItems={NavItems}
        />
      )}
    </header>
  );
};

// Wrap with memo to prevent unnecessary re-renders during page transitions
export default memo(Navbar);
