'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Phone, 
  ChevronRight,
  Shield,
  Star,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function ServicePageContent({ serviceData }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedServiceType, setSelectedServiceType] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-exo2 font-black italic text-text-primary mb-4">
                  {serviceData.title}
                </h1>
                <p className="text-xl text-primary-500 font-medium mb-6">
                  {serviceData.subtitle}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {serviceData.description}
                </p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-primary-500" />
                  <div>
                    <p className="text-text-secondary text-sm">Starting at</p>
                    <p className="text-xl font-bold text-text-primary">{serviceData.startingPrice}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary-500" />
                  <div>
                    <p className="text-text-secondary text-sm">Service time</p>
                    <p className="text-xl font-bold text-text-primary">{serviceData.duration}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                >
                  Book This Service
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (205) 522-1162
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src={serviceData.image}
                alt={`${serviceData.title} in Newport, TN - Professional auto service at OEM Radio Repair`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              What's Included
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-surface-800/50 rounded-lg"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Types Section */}
      {serviceData.serviceTypes && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Service Options
              </motion.h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Service Type Cards */}
                <div className="space-y-4">
                  {serviceData.serviceTypes.map((service, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedServiceType === index
                          ? 'bg-primary-500/20 border-2 border-primary-500'
                          : 'bg-surface-800/50 border-2 border-transparent hover:bg-surface-700/50'
                      }`}
                      onClick={() => setSelectedServiceType(index)}
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-text-primary">{service.name}</h3>
                        <span className="text-2xl font-black text-primary-500">{service.price}</span>
                      </div>
                      <p className="text-text-secondary mb-2">{service.description}</p>
                      <p className="text-sm text-primary-500 font-medium">Best for: {service.bestFor}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Selected Service Details */}
                <motion.div 
                  className="bg-surface-800/50 rounded-xl p-8"
                  variants={itemVariants}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    key={selectedServiceType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      {serviceData.serviceTypes[selectedServiceType].name}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {serviceData.serviceTypes[selectedServiceType].description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-primary-500/10 rounded-lg">
                        <span className="text-text-primary font-medium">Price:</span>
                        <span className="text-2xl font-black text-primary-500">
                          {serviceData.serviceTypes[selectedServiceType].price}
                        </span>
                      </div>
                      <Link
                        href="tel:2055221162"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                      >
                        Book This Option
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {serviceData.process && (
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
                Our Service Process
              </motion.h2>
              
              <div className="space-y-6">
                {serviceData.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-surface-800/50 rounded-xl"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-black font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-text-primary text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {serviceData.faqs && (
        <section className="py-16">
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
                Frequently Asked Questions
              </motion.h2>
              
              <div className="space-y-4">
                {serviceData.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-surface-800/50 rounded-xl overflow-hidden"
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-6 text-left"
                    >
                      <h3 className="text-lg font-bold text-text-primary">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-text-secondary">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Warranty & Related Services */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Warranty */}
            {serviceData.warranty && (
              <motion.div 
                className="bg-surface-800/50 rounded-xl p-8"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-500" />
                  <h3 className="text-2xl font-bold text-text-primary">Our Warranty</h3>
                </div>
                <p className="text-text-secondary">{serviceData.warranty}</p>
              </motion.div>
            )}

            {/* Related Services */}
            {serviceData.relatedServices && (
              <motion.div 
                className="bg-surface-800/50 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-text-primary mb-6">Related Services</h3>
                <div className="space-y-3">
                  {serviceData.relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg hover:bg-primary-500/10 transition-colors"
                    >
                      <span className="text-text-primary">{service.name}</span>
                      <ChevronRight className="w-5 h-5 text-primary-500" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
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
              Ready to Schedule Your Service?
            </motion.h2>
            <motion.p 
              className="text-lg text-text-secondary mb-8"
              variants={itemVariants}
            >
              Book online or call us today for fast, professional service.
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