'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield,
  CheckCircle,
  Clock,
  Phone,
  ChevronRight,
  AlertTriangle,
  FileText,
  Award,
  Settings,
  Car,
  Wrench
} from 'lucide-react'

export default function WarrantyContent() {
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

  const warranties = [
    {
      service: "Oil Change Services",
      warranty: "3 months / 3,000 miles",
      coverage: "Workmanship, oil leaks, filter defects, drain plug issues",
      description: "Complete coverage for all oil change work including free labor and part replacement for any defective service. Must return to OEM Radio Repair for warranty work.",
      icon: <Car className="w-6 h-6" />
    },
    {
      service: "Transmission Service", 
      warranty: "12 months / 12,000 miles",
      coverage: "Service workmanship, fluid exchange quality, filter installation",
      description: "Comprehensive warranty on transmission fluid services. Free labor and parts for defective original service when performed under normal operating conditions.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      service: "Brake Service",
      warranty: "12 months / 12,000 miles",
      coverage: "Installation workmanship, brake fluid service, component function",
      description: "Full warranty on brake fluid service and brake-related work. Does not cover extraordinary brake wear or racing use. Manager consultation required for specific claims.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      service: "Tire Rotation & Balance",
      warranty: "6 months / 6,000 miles",
      coverage: "Service quality, proper torque, wheel balance",
      description: "Warranty covers rotation service and wheel balancing work. Free re-service if rotation was not performed to specification or balance is defective.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      service: "All Other Mechanical Services",
      warranty: "12 months / 12,000 miles",
      coverage: "Installation workmanship, service quality, component function",
      description: "Comprehensive coverage for coolant service, power steering, air filters, batteries, and aftermarket installations. Free labor and parts for defective original service.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      service: "Air Conditioning Service",
      warranty: "Limited Warranty - Manager Consultation Required",
      coverage: "Service workmanship subject to inspection",
      description: "A/C service carries limited warranty coverage. All warranty claims require manager consultation and inspection before approval. Coverage varies by specific service performed.",
      icon: <Settings className="w-6 h-6" />
    }
  ]

  const warrantyConditions = [
    "Service must have been performed at OEM Radio Repair facility",
    "Original receipt or service documentation required for all warranty claims",
    "Must return to original service location (OEM Radio Repair) for warranty work",
    "OEM Radio Repair must be notified and allowed to inspect before any repairs elsewhere",
    "Vehicle operated under normal driving conditions only",
    "No evidence of misuse, neglect, accident damage, or abuse",
    "Warranty work performed during regular business hours only", 
    "Customer responsible for bringing vehicle to facility for warranty service",
    "Does not cover consequential, incidental, or indirect damages",
    "Warranty void if covered system serviced elsewhere after original service",
    "Commercial vehicles and off-road use may have limited or no warranty coverage",
    "Warranty may be denied or adjusted at technician's discretion based on inspection"
  ]

  const exclusions = [
    "Pre-existing conditions or defects not related to our service",
    "Normal wear and tear items and consumable components",
    "Damage from accidents, collisions, vandalism, or acts of nature",
    "Misuse, abuse, neglect, or improper vehicle operation",
    "Issues caused by external factors (road conditions, weather, contamination)",
    "Modifications, alterations, or repairs made after our service",
    "Racing, competitive use, or extreme driving conditions",
    "Commercial use beyond manufacturer's normal parameters",
    "Used or customer-provided parts not installed by OEM Radio Repair",
    "Services, repairs, or maintenance performed at other facilities",
    "Vehicles with illegal modifications or safety violations",
    "Extraordinary brake wear patterns that disqualify future coverage",
    "Manufacturer defects covered under separate manufacturer warranties",
    "Damage resulting from failure to follow recommended maintenance schedules"
  ]

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
                Service Warranty & Guarantees
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We stand behind our work with comprehensive warranties and guarantees. Your satisfaction and vehicle's performance are our top priorities.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                View Our Services
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                (205) 522-1162
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Coverage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary text-center mb-12"
              variants={itemVariants}
            >
              Warranty Coverage by Service
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {warranties.map((warranty, index) => (
                <motion.div
                  key={index}
                  className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6"
                  variants={itemVariants}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary-500/20 rounded-full">
                      <div className="text-primary-500">
                        {warranty.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2">{warranty.service}</h3>
                      <div className="mb-3">
                        <p className="text-primary-500 font-bold text-lg">{warranty.warranty}</p>
                        <p className="text-text-secondary text-sm">Coverage: {warranty.coverage}</p>
                      </div>
                      <p className="text-text-primary">{warranty.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Promise */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-to-r from-primary-500/20 to-primary-600/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 text-center"
              variants={itemVariants}
            >
              <Award className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h2 className="text-3xl font-exo2 font-bold italic text-text-primary mb-4">
                Our Warranty Promise
              </h2>
              <p className="text-lg text-text-primary mb-6">
                OEM Radio Repair guarantees all services with comprehensive warranties. We provide free labor and part replacement for any defective original service. If you experience any covered issues within the warranty period, we'll make it right at no charge to you - that's our commitment to quality.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <h4 className="font-bold text-text-primary">Quality Work</h4>
                  <p className="text-text-secondary text-sm">Professional service every time</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <h4 className="font-bold text-text-primary">Guaranteed</h4>
                  <p className="text-text-secondary text-sm">We stand behind our work</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <h4 className="font-bold text-text-primary">Timely Resolution</h4>
                  <p className="text-text-secondary text-sm">Quick warranty service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-exo2 font-bold italic text-text-primary mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-primary-500 mr-2" />
                  Warranty Conditions
                </h3>
                <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                  <p className="text-text-secondary mb-4">
                    To maintain warranty coverage, the following conditions must be met:
                  </p>
                  <ul className="space-y-3">
                    {warrantyConditions.map((condition, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-text-primary text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-exo2 font-bold italic text-text-primary mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-primary-500 mr-2" />
                  Warranty Exclusions
                </h3>
                <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                  <p className="text-text-secondary mb-4">
                    The following are not covered under our service warranties:
                  </p>
                  <ul className="space-y-3">
                    {exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-text-primary text-sm">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Claims */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-exo2 font-bold italic text-text-primary text-center mb-12"
              variants={itemVariants}
            >
              How to File a Warranty Claim
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call (205) 522-1162 or visit our shop to report the issue. Have your service receipt ready."
                },
                {
                  step: "2", 
                  title: "Bring Your Vehicle",
                  description: "Schedule an appointment to bring your vehicle in for inspection during business hours."
                },
                {
                  step: "3",
                  title: "We'll Fix It",
                  description: "If the issue is warranty-covered, we'll repair it at no charge to you."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-primary-500 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimers */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Important Legal Information
              </h3>
              <div className="space-y-4 text-text-secondary text-sm">
                <p><strong>Warranty Coverage:</strong> OEM Radio Repair provides free labor and part replacement for defective original service within specified warranty periods. Customer must return to OEM Radio Repair for warranty work. We must be notified and allowed to inspect before any repairs are performed elsewhere.</p>
                
                <p><strong>Warranty Limitations:</strong> All warranties are limited to the specific services performed and do not cover consequential, incidental, or indirect damages. Our liability is limited to the cost of the original service performed. Warranty may be denied or adjusted at technician's discretion based on inspection findings.</p>
                
                <p><strong>Pre-existing Conditions:</strong> No warranty coverage applies to pre-existing vehicle conditions, defects, or problems not directly related to our service. Commercial vehicles and off-road use may have limited or no warranty coverage.</p>
                
                <p><strong>Manufacturer Warranties:</strong> Our services do not void manufacturer warranties when performed according to manufacturer specifications. However, modifications or non-standard services may affect manufacturer coverage. Manufacturer defects are covered under separate manufacturer warranties.</p>
                
                <p><strong>Parts vs. Labor Warranties:</strong> Parts warranties are provided by the manufacturer and may vary by brand and type. Labor warranties are provided by OEM Radio Repair as specified above. Used or customer-provided parts have no warranty coverage.</p>
                
                <p><strong>Special Conditions:</strong> Air conditioning service carries limited warranty requiring manager consultation. Extraordinary brake wear may disqualify future warranty coverage. Racing or competitive use voids most warranty coverage.</p>
                
                <p><strong>Dispute Resolution:</strong> Any disputes regarding warranty coverage will be resolved through good faith negotiation. If necessary, disputes may be subject to binding arbitration under Tennessee state law in Cocke County, Tennessee.</p>
                
                <p><strong>Governing Law:</strong> These warranty terms are governed by Tennessee state law. Any legal actions must be filed in Cocke County, Tennessee.</p>
                
                <p><strong>Modification:</strong> These warranty terms may be modified at any time. Current terms apply to all services performed after the effective date of any changes. Continued use of our services constitutes acceptance of modified terms.</p>
                
                <p><strong>Severability:</strong> If any portion of these warranty terms is found to be unenforceable, the remaining portions shall remain in full force and effect.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Warranty */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-exo2 font-bold italic text-text-primary mb-6"
              variants={itemVariants}
            >
              Questions About Your Warranty?
            </motion.h2>
            <motion.p 
              className="text-lg text-text-secondary mb-8"
              variants={itemVariants}
            >
              Our team is here to help with any warranty questions or claims.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (205) 522-1162
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                Visit Our Shop
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}