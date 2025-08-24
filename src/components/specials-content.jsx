'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Tag,
  Clock,
  CheckCircle,
  ChevronRight,
  Phone,
  Star,
  DollarSign,
  Gift,
  Calendar
} from 'lucide-react'

export default function SpecialsContent() {
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

  const currentSpecials = [
    {
      title: "New Customer Special",
      discount: "$10 OFF",
      description: "Your First Oil Change",
      details: "Valid for first-time customers only. Cannot be combined with other offers.",
      expires: "Valid through end of month",
      image: "/NewportPitstop/pexels/oil_change.webp",
      featured: true
    },
    {
      title: "Multi-Service Discount",
      discount: "15% OFF",
      description: "When You Book 3+ Services",
      details: "Combine any three services and save 15% on your total bill.",
      expires: "Ongoing promotion",
      image: "/NewportPitstop/pexels/performance_parts.webp",
      featured: false
    },
    {
      title: "Battery & Charging Check",
      discount: "FREE",
      description: "With Any Service Over $50",
      details: "Complete battery and charging system test at no additional charge.",
      expires: "Valid all month",
      image: "/NewportPitstop/pexels/battery_services.webp",
      featured: false
    }
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
                Current Specials & Deals
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Save money on quality auto services with our current promotions and special offers
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Book Service Now
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

      {/* Current Specials */}
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
              Limited Time Offers
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentSpecials.map((special, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl ${
                    special.featured 
                      ? 'bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-2 border-primary-500/30' 
                      : 'bg-surface-800/50 border border-primary-500/20'
                  } backdrop-blur-sm`}
                  variants={itemVariants}
                >
                  {special.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={special.image}
                      alt={special.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4">
                      <p className="text-3xl font-black text-primary-500 mb-1">{special.discount}</p>
                      <p className="text-text-primary font-medium">{special.description}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-text-primary">{special.title}</h3>
                    <p className="text-text-secondary">{special.details}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {special.expires}
                      </div>
                      <Link
                        href="tel:2055221162"
                        className="inline-flex items-center px-4 py-2 bg-primary-500 text-black font-medium rounded-lg hover:bg-primary-600 transition-all duration-300"
                      >
                        Claim Offer
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Terms & Conditions */}
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
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <Gift className="w-6 h-6 text-primary-500 mr-2" />
                Terms & Conditions
              </h3>
              <div className="space-y-4 text-text-secondary text-sm">
                <p>• Specials cannot be combined with other offers unless specified</p>
                <p>• New customer special valid for first-time customers only</p>
                <p>• All specials subject to change without notice</p>
                <p>• Must present offer when booking appointment</p>
                <p>• Valid at OEM Radio Repair location only</p>
                <p>• Some restrictions may apply - call for details</p>
              </div>
            </motion.div>
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
              className="text-3xl font-exo2 font-bold italic text-text-primary mb-6"
              variants={itemVariants}
            >
              Ready to Save on Quality Service?
            </motion.h2>
            <motion.p 
              className="text-lg text-text-secondary mb-8"
              variants={itemVariants}
            >
              Don't miss out on these limited-time offers. Book your appointment today!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Book Service Online
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (205) 522-1162
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}