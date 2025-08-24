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
      isOpen ? "text-primary-500" : "text-text-primary hover:text-primary-500"
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
        isScrolled ? "shadow-xl shadow-black/20 bg-surface-900/95" : "bg-surface-900/90"
      } backdrop-blur-md border-b border-primary-500/30`}
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
                  <Image
                    src="/OEMRadioRepair/logo-light.svg"
                    alt="OEM Radio Repair Logo"
                    width={200}
                    height={60}
                    className="h-7 md:h-10 w-auto"
                    priority={true}
                    loading="eager"
                  />
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
                            className="px-4 py-2.5 text-sm font-medium text-text-primary hover:text-primary-500 transition-all duration-200 whitespace-nowrap inline-flex items-center"
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
                  href="/contact"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Contact Us"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                
                <a
                  href="/contact"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary-500 hover:bg-gray-50 transition-colors duration-300 border border-primary-500/20"
                  aria-label="Contact us"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <motion.button
                  type="button"
                  className={`inline-flex items-center justify-center p-2.5 rounded-md text-text-primary hover:bg-surface-800 transition-colors duration-300 ${
                    mobileMenuOpen ? "bg-surface-800" : ""
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
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 whitespace-nowrap shadow-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Contact Us
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
