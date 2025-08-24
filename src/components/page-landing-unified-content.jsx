'use client'
import { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { ChevronRight, Phone, Star, Users, Clock, Trophy, Zap, Shield, Gauge, Flag, Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'

const UnifiedContentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [activeTab, setActiveTab] = useState('spectators')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const experienceTabs = {
    spectators: {
      title: "Racing Spectator Experience",
      description: "Feel the thunder of 1,000+ horsepower engines and witness side-by-side racing action on our professionally prepared 1/8 mile track. Every weekend brings new thrills with multiple racing classes.",
      image: "/NewportPitstop/pexels/spectators.webp",
      features: [
        "Grandstand seating with track views",
        "Concession stand & merchandise",
        "Free parking for all events",
        "Family-friendly atmosphere"
      ],
      price: "$15",
      priceLabel: "General Admission",
      testimonial: {
        text: "Best racing action in East Tennessee! The atmosphere is electric every weekend.",
        author: "Mike Johnson",
        role: "Season Pass Holder"
      }
    },
    testTune: {
      title: "Test & Tune Sessions",
      description: "Perfect your launch, dial in your setup, and prepare for competition. Our test sessions provide unlimited runs to help you find those crucial hundredths of a second.",
      image: "/NewportPitstop/pexels/car_show.webp",
      features: [
        "Unlimited runs during session",
        "Professional timing system",
        "Track prep between rounds",
        "Tech inspection available"
      ],
      price: "$30",
      priceLabel: "Per Session",
      testimonial: {
        text: "The track prep is always on point. I've taken seconds off my ET here.",
        author: "Sarah Davis",
        role: "Street ET Racer"
      }
    },
    competitive: {
      title: "Competitive Racing",
      description: "From Jr. Dragsters to Big Tire No Prep, we host IHRA-sanctioned events every weekend. Join our points series or compete in special events with serious payouts.",
      image: "/NewportPitstop/pexels/racecar_big_turbos.webp",
      features: [
        "IHRA sanctioned events",
        "Multiple class options",
        "Points championships",
        "Cash payouts & trophies"
      ],
      price: "$50+",
      priceLabel: "Entry Fees Vary",
      testimonial: {
        text: "The competition here is fierce but fair. Track staff runs a tight ship.",
        author: "Tommy Roberts",
        role: "Super Pro Champion"
      }
    }
  }

  const stats = [
    { number: "500+", label: "Active Racers", icon: Users },
    { number: "52", label: "Events Yearly", icon: Flag },
    { number: "1/8", label: "Mile Track", icon: Gauge },
    { number: "IHRA", label: "Sanctioned", icon: Trophy }
  ]

  const features = [
    {
      icon: Zap,
      title: "Professional Track Prep",
      description: "Meticulously maintained surface for consistent performance"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "IHRA safety standards with trained emergency response team"
    },
    {
      icon: Clock,
      title: "Modern Timing",
      description: "State-of-the-art timing system with instant results"
    },
    {
      icon: Users,
      title: "Racing Community",
      description: "Welcoming atmosphere for racers of all skill levels"
    },
    {
      icon: Trophy,
      title: "Championship Points",
      description: "Season-long points series in multiple racing classes"
    },
    {
      icon: Star,
      title: "Special Events",
      description: "High-stakes grudge matches and no prep shootouts"
    }
  ]

  const atmospherePoints = [
    {
      icon: Heart,
      title: "Family Racing Tradition",
      description: "Three generations of racers compete together at our track"
    },
    {
      icon: Users,
      title: "Tight-Knit Community",
      description: "Where competitors become friends and rivals push each other"
    },
    {
      icon: Trophy,
      title: "Championship Legacy",
      description: "Home to state and national champions across all classes"
    },
    {
      icon: Sparkles,
      title: "Electric Atmosphere",
      description: "Nothing beats the energy of 500+ racers on a Saturday night"
    }
  ]

  const activeExperience = experienceTabs[activeTab]

  return (
    <div className="relative bg-black">
      {/* Modern Section Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-500/5 to-black" />
        
        {/* Main Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent relative"
        >
          {/* Center accent */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary-400 rounded-full shadow-sm shadow-primary-400/30"
          />
        </motion.div>
      </motion.div>
      {/* Section 1: Experience Tabs */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent-100 mb-4 sm:mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-anton font-black text-white uppercase tracking-wide mb-4 sm:mb-6">
              Racing Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From first-time spectators to seasoned competitors, English Mountain Raceway delivers an unforgettable racing experience
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center mb-8 sm:mb-12">
            {Object.entries(experienceTabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === key
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
              >
                {key === 'spectators' && 'Spectators'}
                {key === 'testTune' && 'Test & Tune'}
                {key === 'competitive' && 'Competitive'}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
          >
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-anton font-black text-white uppercase tracking-wide mb-4 sm:mb-6">
                {activeExperience.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                {activeExperience.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {activeExperience.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-accent-600 text-white font-bold rounded-lg hover:bg-accent-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-600/30 text-sm sm:text-base"
                >
                  View Schedule
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:865-258-8184"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  (865) 258-8184
                </a>
              </div>

              {/* Testimonial */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <p className="text-gray-300 italic mb-3 text-sm sm:text-base">"{activeExperience.testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-600/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm sm:text-base">{activeExperience.testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{activeExperience.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={activeExperience.image}
                  alt={activeExperience.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Track Stats Overlay */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 space-y-2 sm:space-y-3">
                  {['1/8 Mile', '130+ MPH', 'IHRA'].map((stat, idx) => (
                    <div key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/80 backdrop-blur-sm rounded-lg border border-accent-500/30">
                      <p className="text-white font-bold text-xs sm:text-sm">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Modern Section Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Subtle background variation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-accent-500/3 to-black" />
        
        {/* Geometric divider */}
        <div className="relative py-1">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent"
          />
          
          {/* Accent elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="w-8 h-px bg-accent-400/60"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 2: Why Choose & Stats */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-100 mb-4 sm:mb-6">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-anton font-black text-white uppercase tracking-wide mb-4 sm:mb-6">
              Why Choose English Mountain
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              East Tennessee's premier drag racing facility with professional standards and a passionate community
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300 text-center"
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-500 mx-auto mb-3 sm:mb-4" />
                <p className="text-3xl sm:text-4xl font-anton font-black text-white mb-2">{stat.number}</p>
                <p className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-600/20 flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

        
        </motion.div>
      </section>

      {/* Modern Section Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Background color variation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-secondary-500/4 to-black" />
        
        {/* Double line divider */}
        <div className="relative py-0.5">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-secondary-400/25 to-transparent mb-1"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-secondary-400/15 to-transparent"
          />
        </div>
      </motion.div>

      {/* Section 3: Track Atmosphere */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent-100 mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-anton font-black text-white uppercase tracking-wide mb-4 sm:mb-6">
              Track Atmosphere
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              More than just a racetrack - we're a community of passionate racers and fans
            </p>
          </motion.div>

          {/* Atmosphere Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {atmospherePoints.map((point, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-900 rounded-xl border border-gray-800 hover:border-accent-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-600/20 flex items-center justify-center">
                    <point.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{point.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 sm:p-12 text-center border border-gray-700"
          >
            <div className="absolute inset-0 bg-[url('/racing-pattern.svg')] opacity-5" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-anton font-black text-white uppercase tracking-wide mb-4 sm:mb-6">
                Experience the Thunder
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join us every weekend for heart-pounding drag racing action. The lights, the sound, the speed - it's all waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-accent-600 text-white font-bold rounded-lg hover:bg-accent-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-600/30 text-sm sm:text-base"
                >
                  Race This Weekend
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.facebook.com/English.Mountain.Raceway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-sm sm:text-base"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default UnifiedContentSection