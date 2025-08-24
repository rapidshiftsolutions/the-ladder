'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Monitor, 
  Smartphone, 
  Shield, 
  Truck,
  Clock,
  CheckCircle,
  ChevronRight,
  Phone,
  Star,
  Award,
  Package,
  RefreshCw,
  MessageCircle
} from 'lucide-react'

export default function ServicesOverviewContent() {
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

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digitizer Replacement",
      description: "Professional digitizer repair for touchscreen responsiveness issues, cracked glass, and ghost touching problems",
      price: "$400",
      originalPrice: "$799 at competitors",
      savings: "Save $399 (50%)",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/repair-screen.webp",
      href: "/services/digitizer-replacement",
      features: ["OEM quality parts", "1-year warranty", "Free shipping both ways", "Expert diagnosis"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "LCD Screen Replacement", 
      description: "Expert LCD screen repair for display issues, pixel damage, backlight problems, and complete screen failures",
      price: "$550",
      originalPrice: "$1,199 at competitors",
      savings: "Save $649 (54%)",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/pexels-introspectivedsgn-8266749.webp",
      href: "/services/lcd-replacement",
      features: ["OEM quality LCD", "1-year warranty", "Free shipping both ways", "Color calibration"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Complete Screen Assembly",
      description: "Full screen assembly replacement when both digitizer and LCD need replacement or for maximum reliability",
      price: "$650",
      originalPrice: "$1,499 at competitors",
      savings: "Save $849 (57%)",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/pexels-introspectivedsgn-28984397.webp",
      href: "/services/complete-screen",
      features: ["Complete assembly", "1-year warranty", "Free shipping both ways", "Factory calibration"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Touchscreen Not Responding",
      description: "Diagnose and repair unresponsive touchscreen issues including calibration problems and hardware failures",
      price: "From $400",
      originalPrice: "",
      savings: "50%+ savings",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/repair-screen.webp",
      href: "/services/touchscreen-repair",
      features: ["Full diagnostics", "Touch calibration", "Hardware testing", "Software updates"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Screen Flickering/Black",
      description: "Expert repair for display issues including flickering screens, black screens, and backlight failures",
      price: "From $550",
      originalPrice: "",
      savings: "50%+ savings",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/pexels-mikebirdy-11845200.webp",
      href: "/services/display-repair",
      features: ["Backlight repair", "Display driver fix", "Power supply check", "Color correction"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cracked Screen Glass",
      description: "Professional glass replacement for cracked or shattered infotainment screen surfaces",
      price: "From $400",
      originalPrice: "",
      savings: "50%+ savings",
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/repair-screen.webp",
      href: "/services/glass-repair",
      features: ["Tempered glass", "Perfect fit", "No bubbles", "Scratch resistant"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Ghost Touch Problems",
      description: "Fix phantom touches, erratic screen behavior, and unwanted input responses on your infotainment system",
      price: "From $400",
      originalPrice: "",
      savings: "50%+ savings", 
      duration: "2-3 business days",
      image: "/OEMRadioRepair/pexels/repair-screen.webp",
      href: "/services/ghost-touch",
      features: ["Touch sensor repair", "Grounding fix", "Interference removal", "Calibration"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Mail-In Repair Service",
      description: "Convenient nationwide mail-in service with prepaid shipping labels and real-time tracking",
      price: "Free shipping",
      originalPrice: "",
      savings: "Included with repair",
      duration: "Door-to-door in 6-9 days",
      image: "/OEMRadioRepair/pexels/mailin.webp",
      href: "/services/mail-in-service",
      features: ["Prepaid shipping labels", "Secure packaging", "Real-time tracking", "Insurance included"]
    }
  ]

  const whyChooseUs = [
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: "Fast Turnaround",
      description: "2-3 day repair turnaround with nationwide shipping"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: "OEM Quality Parts",
      description: "We use only genuine OEM and OEM-equivalent components"
    },
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: "Multi-Generation Expertise", 
      description: "Family business with decades of automotive electronics experience"
    },
    {
      icon: <Star className="w-6 h-6 text-primary-500" />,
      title: "Unbeatable Prices",
      description: "50%+ savings compared to major competitors like infotainment.com"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
                Expert Infotainment Repair Services
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Specializing in digitizer and LCD replacements for Dodge, Chrysler, Jeep, and Cadillac 
                infotainment systems at 50% less than competitors. Nationwide mail-in service with 1-year warranty.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Get Free Quote
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl overflow-hidden hover:bg-surface-700/50 transition-all duration-300 group"
                  variants={itemVariants}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4 p-3 bg-primary-500/20 backdrop-blur-sm rounded-full">
                      <div className="text-primary-500">
                        {service.icon}
                      </div>
                    </div>

                    {/* Price & Duration */}
                    <div className="absolute bottom-4 left-4 space-y-1">
                      <p className="text-primary-500 font-bold">{service.price}</p>
                      {service.savings && (
                        <p className="text-green-400 text-xs font-medium">{service.savings}</p>
                      )}
                      <p className="text-text-secondary text-sm">{service.duration}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                      <p className="text-text-secondary">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-text-primary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-surface-800/30">
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
              Why Choose OEM Radio Repair?
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary-500/20 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-6"
              variants={itemVariants}
            >
              Ready for Professional Service?
            </motion.h2>
            <motion.p 
              className="text-lg text-text-secondary mb-8"
              variants={itemVariants}
            >
              Experience unbeatable savings and expert service. Start your repair today!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Get Free Quote
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Your Repair
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}