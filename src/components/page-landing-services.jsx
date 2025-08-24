"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const RacingServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Racing services data
  const services = [
    {
      id: "test-tune",
      title: "Test & Tune",
      description: "Perfect your setup with our weekly test and tune sessions. Get unlimited runs on our professionally prepped track with timing and safety equipment.",
      features: [
        "Every Friday night",
        "Professional track prep",
        "Full timing system",
        "Tech inspection available"
      ],
      ctaLink: "/test-and-tune",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: "/OptimizedImages/office-1.avif"
    },
    {
      id: "racer-registration",
      title: "Racer Registration",
      description: "Register for upcoming events online and save time at the track. Secure your spot in bracket classes, grudge races, and special events.",
      features: [
        "Online pre-registration",
        "Secure payment processing",
        "Class selection",
        "Digital tech cards"
      ],
      ctaLink: "/registration",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: "/OptimizedImages/office-2.avif"
    },
    {
      id: "track-rental",
      title: "Track Rental",
      description: "Book exclusive track time for private testing, filming, or special events. Our facility offers complete customization for your needs.",
      features: [
        "Private track sessions",
        "Event hosting",
        "Film/photo shoots",
        "Corporate events"
      ],
      ctaLink: "/track-rental",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: "/OptimizedImages/office-3.avif"
    },
    {
      id: "racing-school",
      title: "Racing School",
      description: "Learn from the pros with our comprehensive drag racing school. From basics to advanced techniques, we'll help you become a better racer.",
      features: [
        "Beginner to advanced",
        "Licensed instructors",
        "Classroom & track time",
        "Jr. Dragster program"
      ],
      ctaLink: "/racing-school",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: "/OptimizedImages/office-4.avif"
    },
    {
      id: "spectator-info",
      title: "Spectator Experience",
      description: "Enjoy the best drag racing action in East Tennessee with comfortable seating, concessions, and an up-close view of all the racing excitement.",
      features: [
        "Covered grandstands",
        "Full concessions",
        "VIP experiences",
        "Family-friendly events"
      ],
      ctaLink: "/spectator-info",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: "/OptimizedImages/office-6.avif"
    },
  ];

  // Fallback images
  const fallbackImages = [
    "/OptimizedImages/office-9.avif",
    "/OptimizedImages/office-7.avif",
    "/OptimizedImages/office-3.avif",
    "/OptimizedImages/office-4.avif",
    "/OptimizedImages/desk-1.avif",
  ];

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Track Services</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Race
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            From test sessions to racing school, we provide comprehensive services for racers and fans alike.
          </motion.p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`
                  px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300
                  ${activeTab === index 
                    ? 'bg-primary-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {services[activeTab].title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeTab].description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {services[activeTab].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={services[activeTab].ctaLink}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Learn More
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={services[activeTab].image || fallbackImages[activeTab % fallbackImages.length]}
                  alt={services[activeTab].title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages[activeTab % fallbackImages.length];
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full blur-2xl opacity-50"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.p variants={itemVariants} className="text-gray-600 mb-4">
            Need more information about our services?
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Contact our track office
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RacingServices;