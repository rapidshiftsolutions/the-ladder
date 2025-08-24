"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TrackAtmosphereSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const atmospherePoints = [
    {
      title: "First-Timer Friendly",
      description: "Never been to a drag strip? Our staff will walk you through everything from safety rules to timing slips.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Competitive Spirit",
      description: "Serious racers push limits here. Championship points, cash payouts, and bragging rights on the line.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Family Atmosphere",
      description: "Kids love the pit area access, and parents appreciate the safe, controlled environment for excitement.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Adrenaline Rush",
      description: "Feel the ground shake, hear the engines roar, and experience speeds that will leave you breathless.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle racing stripes */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-accent-400 to-secondary-500 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-500 via-accent-400 to-primary-500 opacity-20"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-anton tracking-wide uppercase">
            Where Welcoming Meets Competitive
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At English Mountain Raceway, you'll discover a unique atmosphere where first-timers feel at home 
            and veterans push their limits. It's a place where everyone truly has a blast.
          </p>
        </motion.div>

        {/* Atmosphere Points */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {atmospherePoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {point.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 15h30v1H0zM15 0v30h1V0z'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-black mb-4 font-anton tracking-wide uppercase">
                Come Be Part of Our Racing Family
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Whether you're looking to watch incredible racing or get behind the wheel yourself, 
                you'll find your place at English Mountain Raceway.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events?category=test-tune"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg font-anton tracking-wide uppercase"
                >
                  Try Test & Tune
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="tel:8652588184"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ask Us Anything
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrackAtmosphereSection;