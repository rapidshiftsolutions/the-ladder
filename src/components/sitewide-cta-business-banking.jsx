"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const ExpertiseCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold: 0.15 }
    );

    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, [controls]);

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section 
      ref={ctaRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 mt-10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-gray-900" style={{ top: `${(i + 1) * 10}%` }} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-gray-900" style={{ left: `${(i + 1) * 10}%` }} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(30,64,175,1) 0%, rgba(255,255,255,0) 70%)" }}
        />
      </div>
      
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-600"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={contentVariants}
            >
              <motion.div variants={itemVariants} className="mb-4">
                <div className="w-16 h-1.5 bg-primary-600 rounded-full"></div>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-anton"
              >
                <span className="">Banking</span> that <br className="" /> powers your growth
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
              >
                English Mountain Raceway combines financial strength with personalized service to deliver exceptional banking solutions for businesses. With a robust capital position and industry recognition, we're positioned to help your business thrive.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="space-y-4 md:space-y-0 md:flex md:space-x-5"
              >
                <Link 
                  href="/treasury-management" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300 shadow-md group"
                >
                  Explore Treasury Solutions
                  <svg 
                    className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/commercial-banking" 
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  View Business Banking
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Stats Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-100"
            >
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={contentVariants}
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-md md:text-xl font-bold text-gray-900 mb-8"
                >
                  English Mountain Raceway by the Numbers
                </motion.h3>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10">
                  {[
                    { value: "$17.35B", label: "Total assets" },
                    { value: "$13.54B", label: "Total deposits" },
                    { value: "14.98%", label: "Return on average equity" },
                    { value: "12.90%", label: "Total capital ratio" },
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      variants={statVariants}
                      custom={idx}
                      className="group"
                    >
                      <p className="text-2xl md:text-4xl font-bold text-primary-700 group-hover:text-primary-800 transition-colors duration-300">
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm font-medium text-gray-600">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  variants={itemVariants}
                  className="space-y-6 border-t border-gray-200 pt-8"
                >
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-primary-100 text-primary-700 flex items-center justify-center rounded-full mr-4 flex-shrink-0 shadow-sm group-hover:bg-primary-200 transition-colors duration-300">
                      <span className="text-lg font-bold">#15</span>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      Ranked on Forbes' 2023 "America's Best Banks" list
                    </p>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-primary-100 text-primary-700 flex items-center justify-center rounded-full mr-4 flex-shrink-0 shadow-sm group-hover:bg-primary-200 transition-colors duration-300">
                      <span className="text-lg font-bold">#4</span>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      Among publicly traded banks with $10-50B in assets
                    </p>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-primary-100 flex items-center justify-center rounded-full mr-4 flex-shrink-0 shadow-sm group-hover:bg-primary-200 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      Selected for D.A. Davidson's elite Best-of-Breed Bison designation
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCTA;