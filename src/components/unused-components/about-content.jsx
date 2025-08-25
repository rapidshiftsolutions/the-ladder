'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Users, 
  Award, 
  Clock, 
  Heart, 
  CheckCircle,
  Phone,
  ChevronRight,
  Star,
  Wrench,
  MapPin,
  Mail,
  Truck
} from 'lucide-react'

export default function AboutContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "1-year warranty on all repairs with OEM-quality parts and professional workmanship."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround", 
      description: "2-3 day repair service with free 2-way shipping to get you back on the road quickly."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Heritage",
      description: "Multi-generational family business with decades of experience in the car audio industry."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Honest, transparent service with 50% savings compared to dealership prices."
    }
  ]

  const expertise = [
    {
      title: "Decades of Car Audio Experience",
      description: "Multi-generational family business with deep roots in automotive electronics"
    },
    {
      title: "Infotainment Screen Specialists",
      description: "Expert repair of Uconnect, CUE, and other modern vehicle displays"
    },
    {
      title: "Nationwide Mail-In Service",
      description: "Convenient repair service for customers across the United States"
    },
    {
      title: "Professional Diagnostics",
      description: "Advanced testing and repair techniques for complex electronic issues"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                About OEM Radio Repair
              </h1>
              <p className="text-xl text-primary-500 font-medium mb-6">
                Family-Owned Infotainment Repair Excellence
              </p>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  Founded by Alex Harmon, OEM Radio Repair is a family-owned business built on decades 
                  of experience in the car audio industry. We specialize in professional infotainment 
                  screen repair, offering expert service at a fraction of dealership prices.
                </p>
                <p>
                  Located in Birmingham, Alabama, we serve customers nationwide through our convenient 
                  mail-in repair service. Our multi-generational heritage in automotive electronics 
                  ensures your vehicle's infotainment system receives the expert care it deserves.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                >
                  Get Your Quote
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-6 py-3 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (205) 522-1162
                </a>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                Why Choose OEM Radio Repair?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">50%</div>
                  <div className="text-sm text-text-secondary">Savings vs. Competitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">2-3</div>
                  <div className="text-sm text-text-secondary">Day Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">1 Year</div>
                  <div className="text-sm text-text-secondary">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">Free</div>
                  <div className="text-sm text-text-secondary">Shipping Both Ways</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                The principles that guide everything we do at OEM Radio Repair
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary-500/20 rounded-full">
                      <div className="text-primary-500">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Our Story
              </h2>
            </motion.div>
            
            <motion.div 
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 space-y-6"
              variants={itemVariants}
            >
              <div className="text-lg text-text-secondary space-y-4 leading-relaxed">
                <p>
                  OEM Radio Repair was founded by Alex Harmon, continuing a multi-generational family 
                  tradition in the car audio industry. With decades of combined experience, our family 
                  has been helping customers with automotive electronics long before infotainment systems 
                  became standard.
                </p>
                <p>
                  When modern vehicles started experiencing touchscreen and display issues, Alex recognized 
                  the need for specialized repair services. Dealerships were charging excessive prices for 
                  simple repairs, and many customers were left with expensive replacement quotes.
                </p>
                <p>
                  We built OEM Radio Repair to bridge that gap - providing professional, warranty-backed 
                  repairs at fair prices. Our mail-in service means customers nationwide can access our 
                  expertise without the dealership markup, typically saving 50% or more on repair costs.
                </p>
                <p>
                  Based in Birmingham, Alabama, we're proud to serve customers across the United States, 
                  carrying on our family's commitment to honest service and quality workmanship.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise & Services */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Specialized knowledge built on years of experience
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-surface-800/50 rounded-xl"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Why Choose OEM Radio Repair?
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={itemVariants}>
                {[
                  "50% savings compared to dealership prices",
                  "1-year warranty on all repairs", 
                  "Free 2-way shipping nationwide",
                  "2-3 day professional turnaround",
                  "Family-owned with decades of experience",
                  "Specialized infotainment expertise",
                  "OEM-quality parts and materials",
                  "Transparent pricing with no hidden fees"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary text-lg">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8"
                variants={itemVariants}
              >
                <div className="text-center">
                  <Wrench className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Ready to Save on Your Repair?
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Join thousands of satisfied customers who have saved money and 
                    received professional service from OEM Radio Repair.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                    >
                      Get Quote
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="tel:2055221162"
                      className="inline-flex items-center justify-center px-6 py-3 bg-surface-700 border border-primary-500/30 text-primary-500 font-medium rounded-lg hover:bg-surface-600 transition-all duration-300"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Service Area */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Contact Information
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <a 
                      href="tel:2055221162"
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      (205) 522-1162
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <a 
                      href="mailto:info@oemradiorepair.com"
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      info@oemradiorepair.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div className="text-text-primary">
                      2413 1st Ave S<br />
                      Birmingham, AL 35233
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <Truck className="w-6 h-6 text-primary-500 mr-2" />
                  Service Area
                </h3>
                <div className="space-y-3 text-text-secondary">
                  <p className="text-text-primary font-medium">Nationwide Mail-In Service</p>
                  <p>
                    We serve customers across all 50 states with our convenient mail-in repair service. 
                    Free prepaid shipping labels included with every repair.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm text-text-secondary mb-2">Specializing in:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded">Dodge</span>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded">Chrysler</span>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded">Jeep</span>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded">Cadillac</span>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded">Ram</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}