"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GenericPageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText = "Contact Us",
  primaryButtonHref = "/contact-us",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/about-us",
  showSecondaryButton = true,
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[650px] flex items-center overflow-hidden">
      {/* Dark overlay with reduced opacity for a more premium look */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={true}
        fetchPriority="high"
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
        style={{
          transform: `scale(${1 + scrollY * 0.0003}) translateY(${
            scrollY * 0.15
          }px)`,
          opacity: 1 - scrollY * 0.0008,
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-sm uppercase tracking-widest font-normal text-white/80 mb-4"
          >
            English Mountain Raceway
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-2 leading-tight">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 mb-6">
              {subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium tracking-wide rounded-md hover:bg-gray-50 transition-colors duration-300 shadow-sm group"
            >
              <span>{primaryButtonText}</span>
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            {showSecondaryButton && (
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 backdrop-blur-sm bg-white/5 text-white font-medium tracking-wide rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                {secondaryButtonText}
              </a>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-auto pt-6 flex flex-wrap gap-x-8 gap-y-4"
          >
            <div className="flex items-center">
              <Image
                src="/images/member-fdic-icon.svg"
                alt="Member FDIC"
                width={26}
                height={26}
                className="h-5 w-auto mr-2"
              />
              <a href="https://www.fdic.gov/" className="text-xs text-white/80 hover:text-white transition-colors duration-300">
                Member FDIC
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/equal-housing-lender-icon.svg"
                alt="Equal Housing Lender"
                width={26}
                height={26}
                className="h-5 w-auto mr-2"
              />
              <a href="https://www.hud.gov/" className="text-xs text-white/80 hover:text-white transition-colors duration-300">
                Equal Housing Lender
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient at the bottom for better transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-10" />
    </section>
  );
}
