"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RacingTypes = () => {
    const [activeService, setActiveService] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const services = [
        {
            id: "no-prep",
            title: "No Prep Racing",
            headline: "Raw power meets pure racing.",
            description:
                "Experience the ultimate test of driver skill and machine capability. No Prep racing brings street racing excitement to a safe, controlled environment where true racers prove their worth.",
            cta: "View No Prep Events",
            href: "/events/no-prep",
            image: "/OptimizedImages/conference-4.avif",
            color: "#0C3464",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            features: [
                { name: "No Prep Racing", icon: "surface" },
                { name: "Big Tire Classes", icon: "tire" },
                { name: "Small Tire Classes", icon: "small-tire" },
                { name: "Cash Payouts", icon: "money" }
            ],
            testimonial: {
                quote: "English Mountain Raceway has the best no prep racing in the Southeast. The competition is fierce and the payouts are worth the trip.",
                author: "Jake Thompson",
                position: "2023 No Prep Champion"
            }
        },

        {
            id: "grudge",
            title: "Grudge Racing",
            headline: "Settle it on the strip.",
            description:
                "Where rivalries are born and legends are made. Our grudge racing events provide the perfect venue for heads-up competition. Bring your best and prove who's fastest in front of our passionate crowd.",
            cta: "Join Grudge Night",
            href: "/events/grudge",
            image: "/OptimizedImages/man-3.avif",
            color: "#1E40AF",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            features: [
                { name: "Heads-Up Racing", icon: "versus" },
                { name: "Call-Outs Welcome", icon: "challenge" },
                { name: "Spectator Friendly", icon: "crowd" },
                { name: "Social Media Updates", icon: "stream" }
            ],
            testimonial: {
                quote: "The atmosphere at English Mountain's grudge nights is electric. The racing is consistent and the staff runs a tight ship.",
                author: "Maria Rodriguez",
                position: "Street Outlaw Competitor"
            }
        },

        {
            id: "bracket",
            title: "Bracket Racing",
            headline: "Consistency wins championships.",
            description:
                "Every weekend, we host competitive bracket racing for all skill levels. From Jr. Dragsters to Pro ET, our professional timing system ensures fair competition for everyone.",
            cta: "View Points Standings",
            href: "/events/bracket",
            image: "/OptimizedImages/meeting-1.avif",
            color: "#2563EB",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            features: [
                { name: "Jr. Dragster", icon: "junior" },
                { name: "Footbrake Class", icon: "footbrake" },
                { name: "Electronics Class", icon: "electronics" },
                { name: "Points Championships", icon: "trophy" }
            ],
            testimonial: {
                quote: "The bracket program at English Mountain is second to none. Great payouts, fair competition, and the track staff treats everyone like family.",
                author: "Robert Williams",
                position: "5-Time Track Champion"
            }
        }
    ];

    // Feature icon mapping
    const getFeatureIcon = (iconType) => {
        const icons = {
            "surface": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            ),
            "tire": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            "small-tire": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            "money": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            "versus": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
                </svg>
            ),
            "challenge": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            ),
            "crowd": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            "stream": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            "junior": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            "footbrake": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            "electronics": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            "trophy": (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        };
        return icons[iconType] || icons["surface"];
    };

    // Track viewport for responsive behavior
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Update content height for smooth animation
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [activeService]);

    // Intersection observer for fade-in effect
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

        return () => observer.disconnect();
    }, []);

    const handleServiceChange = (index) => {
        if (index !== activeService) {
            setActiveService(index);
        }
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={containerRef}>
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4"
                    >
                        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                        Racing Programs
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        From street-style no prep to professional bracket racing, we offer diverse racing programs for every competitor.
                    </p>
                </motion.div>

                {/* Services Navigation */}
                <motion.div variants={itemVariants} className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-8 relative px-4">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => handleServiceChange(index)}
                                className={`
                                    relative px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl text-center transition-all duration-300 group w-full sm:w-auto
                                    ${activeService === index
                                        ? "bg-white shadow-lg scale-105 border-2 border-primary-500"
                                        : "bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent"
                                    }
                                `}
                                aria-label={`View ${service.title} information`}
                            >
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                    <div
                                        className={`
                                            p-1.5 sm:p-2 rounded-lg transition-colors duration-300
                                            ${activeService === index ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-500"}
                                        `}
                                    >
                                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <span className={`font-semibold text-sm sm:text-base ${activeService === index ? "text-primary-900" : "text-gray-700"}`}>
                                        {service.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Service Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                        ref={contentRef}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-4">
                            {/* Content Side */}
                            <div className="order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {/* Service Tag */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-primary-700">{services[activeService].title}</span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                                        {services[activeService].headline}
                                    </h3>

                                    <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                                        {services[activeService].description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                                        {services[activeService].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + idx * 0.1 }}
                                                className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="text-primary-500">
                                                    {getFeatureIcon(feature.icon)}
                                                </div>
                                                <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <Link
                                            href={services[activeService].href}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg group w-full sm:w-auto"
                                        >
                                            {services[activeService].cta}
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Image Side */}
                            <div className="order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={services[activeService].image}
                                            alt={services[activeService].title}
                                            width={600}
                                            height={400}
                                            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>

                                    {/* Testimonial Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="absolute -bottom-6 -left-4 -right-4 sm:-bottom-8 sm:-left-8 sm:right-8 bg-white p-4 sm:p-6 rounded-xl shadow-xl"
                                    >
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm italic mb-3">
                                            "{services[activeService].testimonial.quote}"
                                        </p>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{services[activeService].testimonial.author}</p>
                                            <p className="text-xs text-gray-500">{services[activeService].testimonial.position}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default RacingTypes;