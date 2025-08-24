"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const RacingCTA = () => {
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
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-24 mt-6 sm:mt-8 lg:mt-10"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={contentVariants}
              className="text-center md:text-left px-4 md:px-0"
            >
              {/* Tag */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 text-primary-800">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Join the Racing Community
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Ready to Hit the Track?
              </motion.h2>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Whether you're a seasoned racer or just getting started, English Mountain Raceway offers the perfect venue for your drag racing passion. Join us every weekend for the best racing action in East Tennessee.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link
                  href="/events"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Race Schedule
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/track-info"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  Track Information
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Info */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={contentVariants}
              className="grid grid-cols-2 gap-6"
            >
              {/* Stat Cards */}
              <motion.div 
                variants={statVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">52+</h3>
                <p className="text-gray-600">Racing Events Per Year</p>
              </motion.div>

              <motion.div 
                variants={statVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1/8</h3>
                <p className="text-gray-600">Mile Professional Track</p>
              </motion.div>

              <motion.div 
                variants={statVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Active Racers</p>
              </motion.div>

              <motion.div 
                variants={statVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">$1M+</h3>
                <p className="text-gray-600">Annual Payouts</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section - Quick Links */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={contentVariants}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Links for Racers</h3>
              <p className="text-gray-600">Everything you need to get started</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "Track Rules", href: "/rules", icon: "📋" },
                { title: "Tech Inspection", href: "/tech", icon: "🔧" },
                { title: "Points Standings", href: "/points", icon: "🏆" },
                { title: "Weather & Track Conditions", href: "https://weather.com/weather/hourbyhour/l/Newport+TN?canonicalCityId=8e673f230efc3731f221e1ac17503b14", icon: "🌤️" }
              ].map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{link.icon}</span>
                    <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RacingCTA;