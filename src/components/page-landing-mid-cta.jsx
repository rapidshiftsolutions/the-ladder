"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ExpertiseCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ctaRef = useRef(null);

  // Handle hydration issues and prevent layout shifts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle intersection observer for animations
  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25, rootMargin: "100px 0px" }
    );

    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, [isMounted]);

  // Early return a pre-styled container with fixed dimensions to prevent layout shift
  if (!isMounted) {
    return (
      <section className="relative overflow-hidden bg-slate-100 py-16 md:py-20 min-h-[400px]">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
        <div className="container mx-auto px-4 relative z-10 min-h-[300px]">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Empty placeholders with fixed heights to reserve space */}
              <div className="h-60" aria-hidden="true"></div>
              <div className="bg-white p-8 md:p-10 shadow-sm h-72" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ctaRef}
      className="relative overflow-hidden bg-slate-100 py-16 md:py-20"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-2">
                <div className="w-12 h-0.5 bg-blue-800"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                <span className="font-medium">Expertise</span> that drives your business forward
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At ServisFirst, we combine deep industry knowledge with financial expertise to deliver solutions tailored to your specific objectives. Our relationship managers work closely with you to understand your challenges and opportunities.
              </p>
              
              <div className="space-y-4 md:space-y-0 md:flex md:space-x-5">
                <a 
                  href="/about-us" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Meet Our Experts
                </a>
                <a 
                  href="/about-us" 
                  className="inline-block px-6 py-3 border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                >
                  Read Our Insights
                </a>
              </div>
            </motion.div>
            
            {/* Right Column - Testimonials & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 shadow-sm"
              style={{ minHeight: "320px" }} // Fixed min-height to prevent layout shift
            >
              <blockquote className="mb-8">
                <p className="text-lg text-gray-700 italic mb-4">
                  "ServisFirst's team provided us with strategic financial guidance that has been instrumental to our growth. Their expertise and commitment to understanding our business sets them apart."
                </p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-800 flex items-center justify-center rounded-full mr-3">
                    <span className="text-sm font-bold">JT</span>
                  </div>
                  <div>
                    <cite className="text-sm font-medium text-gray-900 not-italic">James Thompson</cite>
                    <p className="text-xs text-gray-500">CFO, Meridian Industries</p>
                  </div>
                </footer>
              </blockquote>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-light text-blue-800">97%</p>
                  <p className="text-sm text-gray-600">Client satisfaction rating</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-blue-800">18+</p>
                  <p className="text-sm text-gray-600">Years of industry expertise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCTA;