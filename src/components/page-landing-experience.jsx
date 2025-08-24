"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experienceTypes = [
    {
      id: "spectators",
      title: "Spectators",
      subtitle: "Feel the Thunder",
      description: "Experience drag racing like never before. Every ticket includes pit access - get up close to the drivers, feel the ground shake, and witness speeds exceeding 130 MPH on our 1/8 mile concrete strip.",
      features: [
        "FREE admission for kids 12 & under",
        "Pit pass included with every ticket",
        "Meet the drivers & get autographs", 
        "Concessions & family seating",
        "Friday & Saturday night racing"
      ],
      cta: "Get Your Tickets",
      ctaLink: "/spectators",
      image: "/NewportPitstop/pexels/spectators.webp",
      price: "$20 Adults • $10 Kids Under 13",
      testimonial: {
        quote: "The kids loved getting to see the cars up close. The drivers were so friendly and let them sit in the race cars!",
        author: "Sarah M.",
        role: "Family Visitor"
      }
    },
    {
      id: "test-tune",
      title: "Test & Tune",
      subtitle: "Your First Race Awaits",
      description: "Never raced before? Perfect! Our Test & Tune sessions welcome ALL street-legal vehicles. From muscle cars to minivans - if it's street legal, you can race it. Our friendly staff will guide you through everything.",
      features: [
        "Beginners welcome - no experience needed",
        "All street-legal vehicles accepted",
        "Professional timing system",
        "Friendly staff guidance",
        "Race your friends or random opponents"
      ],
      cta: "Start Racing Today",
      ctaLink: "/events?category=test-tune",
      image: "/NewportPitstop/pexels/car_show.webp",
      price: "Entry: $25 • Spectators: $10",
      testimonial: {
        quote: "I brought my stock Camry and had the time of my life! The staff helped me every step of the way. Already planning my next visit.",
        author: "Mike R.",
        role: "First-Time Racer"
      }
    },
    {
      id: "competitive",
      title: "Competitive Racing",
      subtitle: "Prove Your Worth",
      description: "Ready for serious competition? Join our bracket racing program with multiple classes from Jr. Dragster to Pro ET. IHRA sanctioned events with championship points and cash payouts every weekend.",
      features: [
        "IHRA sanctioned competition",
        "Multiple racing classes",
        "Championship points series",
        "Cash payouts every weekend",
        "Professional-grade concrete surface"
      ],
      cta: "View Racing Schedule",
      ctaLink: "/events",
      image: "/NewportPitstop/pexels/racecar_big_turbos.webp", 
      price: "Entry varies by class",
      testimonial: {
        quote: "The competition here is fierce but fair. Great track prep and the best racing surface in Tennessee.",
        author: "Tommy K.",
        role: "Pro ET Champion"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-anton tracking-wide uppercase">
            Your Racing Experience Starts Here
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're here to watch the action or become part of it, English Mountain Raceway delivers 
            an unforgettable experience where welcoming meets competitive, and everyone has a blast.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            {experienceTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap
                  ${activeTab === index
                    ? "bg-primary-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }
                `}
              >
                {type.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 font-anton tracking-wide">
                  {experienceTypes[activeTab].subtitle}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {experienceTypes[activeTab].description}
                </p>
                
                {/* Price Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                  <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-primary-700 font-medium text-sm">
                    {experienceTypes[activeTab].price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {experienceTypes[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={experienceTypes[activeTab].ctaLink}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl font-anton tracking-wide uppercase"
                >
                  {experienceTypes[activeTab].cta}
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <a
                  href="tel:8652588184"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={experienceTypes[activeTab].image}
                    alt={experienceTypes[activeTab].title}
                    width={600}
                    height={400}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Track Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-white font-anton">1/8</div>
                          <div className="text-xs text-white/80 uppercase tracking-wide">Mile Track</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-white font-anton">130+</div>
                          <div className="text-xs text-white/80 uppercase tracking-wide">MPH Speeds</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-white font-anton">IHRA</div>
                          <div className="text-xs text-white/80 uppercase tracking-wide">Sanctioned</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;