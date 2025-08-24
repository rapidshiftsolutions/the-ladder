"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '/src/components/ContactForm';

export default function ContactUsClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/NewportPitstop/pexels/car_show.webp"
            alt="Contact OEM Radio Repair"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Dynamic Racing Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
        </div>

        {/* Racing Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0zM0 59h60v1H0zM0 0v60h1V0zM59 0v60h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="text-center space-y-8"
            >
              {/* Main Title */}
              <motion.div variants={slideInLeft}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1] tracking-wide font-anton pt-10">
                  <span className="block">CONTACT</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400">
                    NEWPORT PITSTOP
                  </span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.div variants={slideInLeft}>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 font-inter leading-tight max-w-4xl mx-auto">
                  Questions about automotive services, pricing, or scheduling? We're here to help.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Speed Lines Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <div className="h-full bg-gradient-to-r from-transparent via-primary-500/20 to-transparent transform -skew-y-2" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="space-y-6 sm:space-y-8 lg:space-y-12"
            >
              {/* Track Information */}
              <motion.div variants={fadeInUp}>
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20">
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 font-anton tracking-wide uppercase">
                    TRACK INFO
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-500/30">
                        <svg className="w-6 h-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white font-anton tracking-wide uppercase">ADDRESS</h3>
                        <p className="text-white/80 font-inter">2413 1st Ave S</p>
                        <p className="text-white/80 font-inter">Newport, TN 37821</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-accent-500/30">
                        <svg className="w-6 h-6 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white font-anton tracking-wide uppercase">HOURS</h3>
                        <p className="text-white/80 font-inter">Monday - Friday: 8AM - 6PM</p>
                        <p className="text-white/80 font-inter">Saturday: 8AM - 4PM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-secondary-500/30">
                        <svg className="w-6 h-6 text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white font-anton tracking-wide uppercase">SERVICES</h3>
                        <p className="text-white/80 font-inter">Full Service Auto Care</p>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <a
                      href="https://www.google.com/maps/place/513+Cosby+Hwy+%237371,+Newport,+TN+37821/@35.9606,-83.1943,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:from-primary-400 hover:to-primary-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-primary-500/25 font-anton tracking-wide uppercase"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInUp}>
                <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-500/30">
                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 font-anton tracking-wide uppercase">
                    FOLLOW THE ACTION
                  </h2>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/Newportpitstopquicklube"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold font-anton tracking-wide uppercase"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Visit Our Facebook
                    </a>
                  </div>
                  <p className="text-blue-200/80 mt-4 text-sm font-inter">
                    Stay updated with service specials, automotive tips, and company news on our Facebook page.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
              className="bg-black/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20"
            >
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 font-anton tracking-wide uppercase">
                SEND US A MESSAGE
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}