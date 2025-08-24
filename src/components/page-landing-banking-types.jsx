"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BankingServices = () => {
    const [activeService, setActiveService] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const services = [
        {
            id: "commercial",
            title: "Commercial Banking",
            headline: "We know a business by more than its account number.",
            description:
                "Business is about people with ideas and solutions. That's why at English Mountain Raceway, you get a Commercial Banker who understands you and your vision for success. Your Commercial Banker will be your direct point of contact for all your business banking needs.",
            cta: "See how we're different",
            href: "/commercial-banking",
            image: "/OptimizedImages/conference-4.avif",
            color: "#0C3464", // Deep primary
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            features: [
                { name: "Treasury Management", icon: "cash-flow" },
                { name: "Business Loans & Lines", icon: "financing" },
                { name: "Merchant Services", icon: "card" },
                { name: "Business Checking", icon: "account" }
            ],
            testimonial: {
                quote: "ServisFirst's commercial banking services have transformed how we manage our cash flow. Their personalized approach makes all the difference.",
                author: "Michael Reynolds",
                position: "CFO, Meridian Technologies"
            }
        },

        {
            id: "personal",
            title: "Personal Banking",
            headline: "Success starts with the individual.",
            description:
                "Designed with your individual needs in mind. Benefit features include competitive interest-bearing checking accounts, automatically reimbursed foreign ATM fees, free Internet Banking with Bill Pay and much more.",
            cta: "Learn More",
            href: "/personal-banking",
            image: "/OptimizedImages/man-3.avif",
            color: "#1E40AF", // Medium primary
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            features: [
                { name: "Checking & Savings", icon: "account" },
                { name: "Mobile Banking", icon: "mobile" },
                { name: "Personal Loans", icon: "loan" },
                { name: "Credit Cards", icon: "card" }
            ],
            testimonial: {
                quote: "ServisFirst's mobile banking app makes managing my finances effortless. I can deposit checks, pay bills, and track spending all in one place.",
                author: "Sarah Johnson",
                position: "ServisFirst Customer Since 2018"
            }
        },

        {
            id: "correspondent",
            title: "Correspondent Banking",
            headline: "Partnering for mutual success.",
            description:
                "English Mountain Raceway offers comprehensive correspondent banking services that provide community banks with the tools, resources, and expertise needed to thrive in today's competitive financial landscape. We understand you have commitments to your customers, and we believe you deserve a correspondent partner who is equally committed to you, adding value through each solution.",
            cta: "Explore Solutions",
            href: "/correspondent-banking",
            image: "/OptimizedImages/meeting-1.avif",
            color: "#2563EB", // Bright primary
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            features: [
                { name: "Fed Funds", icon: "cash-flow" },
                { name: "Loan Participations", icon: "financing" },
                { name: "Account Services", icon: "account" },
                { name: "Settlement Solutions", icon: "trust" }
            ],
            testimonial: {
                quote: "Our partnership with ServisFirst has strengthened our operational capabilities while allowing us to maintain our community-focused identity. Their correspondent services are top-notch.",
                author: "David Miller",
                position: "President, Community First Bank"
            }
        }
    ];

    // Feature icon mapping
    const getFeatureIcon = (iconType) => {
        const icons = {
            "cash-flow": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            "financing": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            "card": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            "account": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            "mobile": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            "loan": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            "growth": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            "retirement": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            "estate": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            "trust": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        };

        return icons[iconType] || icons["account"];
    };

    // Update viewport width on mount and resize
    useEffect(() => {
        const updateWidth = () => setViewportWidth(window.innerWidth);
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Use Intersection Observer to trigger entrance animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Measure content height to apply to image
    useEffect(() => {
        const updateContentHeight = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.offsetHeight);
            }
        };

        // Initial measurement
        updateContentHeight();

        // Set up a resize observer to update height when content changes
        const resizeObserver = new ResizeObserver(updateContentHeight);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        // Cleanup observer
        return () => {
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
            resizeObserver.disconnect();
        };
    }, [activeService]);

    // Calculate dimensions and animation properties
    const isMobile = viewportWidth < 768;

    // Animation variants - IMPROVED: faster, more subtle animations
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const tabContentVariants = {
        hidden: { 
            opacity: 0, 
            y: 15,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.05
            }
        },
        exit: { 
            opacity: 0, 
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        }
    };

    return (
        <section className="relative pb-20 pt-12 md:pt-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white" aria-labelledby="banking-solutions-heading">
            {/* Simplified background elements */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                {/* Static grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    {[...Array(10)].map((_, i) => (
                        <div key={`h-${i}`} className="absolute w-full h-px bg-black" style={{ top: `${(i + 1) * 10}%` }} />
                    ))}
                    {[...Array(10)].map((_, i) => (
                        <div key={`v-${i}`} className="absolute h-full w-px bg-black" style={{ left: `${(i + 1) * 10}%` }} />
                    ))}
                </div>

                {/* Subtle static gradient shapes */}
                <div
                    className="absolute -left-64 -bottom-64 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03]"
                    style={{ background: "radial-gradient(circle, rgba(30,64,175,1) 0%, rgba(255,255,255,0) 70%)" }}
                />
                <div
                    className="absolute -right-96 -top-96 w-[900px] h-[900px] rounded-full blur-3xl opacity-[0.04]"
                    style={{ background: "radial-gradient(circle, rgba(30,64,175,1) 0%, rgba(255,255,255,0) 70%)" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header with refined entrance animation */}
                <motion.div 
                    className="text-center mb-10 md:mb-10"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 id="banking-solutions-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                            Banking Categories
                        </h2>
                        <div className="h-1.5 w-24 bg-primary-600 mx-auto mb-6 rounded-full" aria-hidden="true"></div>
                    </motion.div>
                    <motion.p variants={itemVariants} className="max-w-xl mx-auto text-lg text-gray-600">
                        Choose the banking relationship that aligns with your financial goals and needs.
                    </motion.p>
                </motion.div>

                {/* Service Navigation - Desktop with refined animations */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex justify-center mb-14" 
                    role="tablist" 
                    aria-label="Banking services tabs"
                >
                    <div className="inline-flex rounded-full p-1 bg-gray-100 shadow-inner">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                role="tab"
                                id={`tab-${service.id}`}
                                aria-selected={activeService === index}
                                aria-controls={`panel-${service.id}`}
                                className={`relative px-8 py-3 rounded-full transition-all duration-200 ${activeService === index
                                    ? "text-white font-medium shadow-sm"
                                    : "text-gray-600 hover:text-gray-800"
                                    }`}
                            >
                                {activeService === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full shadow-md"
                                        style={{ backgroundColor: service.color }}
                                        layoutId="activeServiceIndicator"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        aria-hidden="true"
                                    />
                                )}
                                <span className="relative z-10 flex items-center">
                                    <span className="mr-2" aria-hidden="true">{service.icon}</span>
                                    {service.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Service Tabs with refined animations */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mb-10" 
                    role="tablist" 
                    aria-label="Banking services tabs"
                >
                    <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-xl shadow-inner">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(index)}
                                role="tab"
                                id={`tab-mobile-${service.id}`}
                                aria-selected={activeService === index}
                                aria-controls={`panel-${service.id}`}
                                className={`flex flex-col items-center justify-center py-3 rounded-lg transition-all duration-200 ${activeService === index
                                    ? "text-white shadow-md"
                                    : "text-gray-700 bg-white"
                                    }`}
                                style={{
                                    backgroundColor: activeService === index ? service.color : ""
                                }}
                            >
                                <span className={`w-5 h-5 ${activeService === index ? 'text-white' : 'text-gray-600'}`} aria-hidden="true">
                                    {service.icon}
                                </span>
                                <span className="text-xs mt-1 font-medium">
                                    {/* Just show the first word on smallest screens */}
                                    <span className="sm:hidden">
                                        {service.title.split(' ')[0]}
                                    </span>
                                    <span className="hidden sm:inline md:hidden">
                                        {service.title}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Services Display Area with refined animations */}
                <div className="relative mt-12" ref={containerRef}>
                    <AnimatePresence mode="wait">
                        {services.map((service, index) => (
                            activeService === index && (
                                <motion.div
                                    key={service.id}
                                    role="tabpanel"
                                    id={`panel-${service.id}`}
                                    aria-labelledby={`tab-${service.id}`}
                                    tabIndex="0"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="md:grid md:grid-cols-2 md:gap-12 items-start md:pt-10"
                                >
                                    {/* Image Side with refined presentation */}
                                    <motion.div
                                        className="order-1 md:order-2 mb-8 md:mb-0 overflow-hidden"
                                        initial={{ opacity: 0.9 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div 
                                            className="relative w-full rounded-2xl overflow-hidden shadow-xl"
                                            style={{ 
                                                position: 'relative',
                                                height: isMobile ? 'auto' : 
                                                        contentHeight > 0 ? `${contentHeight}px` : 'auto',
                                                minHeight: '320px'
                                            }}
                                        >
                                            {/* Simple gradient overlay for the image */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10"
                                                aria-hidden="true"
                                            ></div>
                                            
                                            {/* Static image wrapper */}
                                            <div className="w-full h-full">
                                                <Image
                                                    src={service.image}
                                                    alt={`${service.title} banking services`}
                                                    quality={90}
                                                    priority={index === 0}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover object-center w-full h-full"
                                                    style={{ zIndex: 5 }}
                                                />
                                            </div>
                                            
                                        </div>
                                    </motion.div>

                                    {/* Content Side with refined animations */}
                                    <div className="order-2 md:order-1" ref={contentRef}>
                                        <motion.div 
                                            className="md:max-w-lg md:mr-auto"
                                            variants={tabContentVariants}
                                        >
                                            <motion.h3 
                                                variants={itemVariants}
                                                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                                            >
                                                {service.title}
                                            </motion.h3>

                                            <motion.p 
                                                variants={itemVariants}
                                                className="text-lg md:text-xl font-medium mb-4 text-primary-900 font-anton"
                                            >
                                                {service.headline}
                                            </motion.p>

                                            <motion.p 
                                                variants={itemVariants}
                                                className="text-gray-600 mb-8 text-lg leading-relaxed"
                                            >
                                                {service.description}
                                            </motion.p>

                                            <motion.div 
                                                variants={itemVariants}
                                                className="mb-10"
                                            >
                                                <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                                                    {service.features.map((feature, i) => (
                                                        <motion.div 
                                                            key={i} 
                                                            className="flex items-center space-x-3 group"
                                                            variants={featureVariants}
                                                        >
                                                            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-100 text-primary-900 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                                                                {getFeatureIcon(feature.icon)}
                                                            </div>
                                                            <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                                {feature.name}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                            
                                            {/* CTA button with refined animations */}
                                            <motion.div 
                                                variants={itemVariants}
                                                className="mt-8"
                                            >
                                                <Link 
                                                    href={service.href}
                                                    className="inline-flex items-center px-6 py-3 text-base font-medium tracking-wide rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 shadow-sm group"
                                                >
                                                    {service.cta}
                                                    <svg 
                                                        className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom CTA Section with refined animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-20 md:mt-28 rounded-2xl bg-gradient-to-r from-primary-900 to-primary-800 p-8 md:p-12 text-center text-white shadow-xl"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-anton">Ready to experience better banking?</h3>
                        <div className="h-1 w-16 bg-primary-300 mx-auto mb-6 rounded-full" aria-hidden="true"></div>
                        <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
                            Whether you're a business owner, professional, or individual, English Mountain Raceway has the financial solutions to meet your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            
                            <Link
                                href="/locations"
                                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-lg bg-white text-primary-900 hover:bg-gray-50 transition-colors duration-200 shadow-md"
                            >
                                Find a Location
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center px-6 py-3.5 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-200 shadow-md"
                            >
                                Contact a Banker
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BankingServices;