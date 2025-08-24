'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CreditCard, DollarSign, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react'

export default function FinancingContent() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-exo2 font-black italic text-text-primary mb-4">
            Easy <span className="text-primary-500">Financing</span> Options
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Get the automotive services you need today with flexible payment options through our financing partner.
          </p>
        </motion.div>

        {/* Snap Finance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">Snap Finance</div>
                <div className="text-sm text-gray-600">Payment Solutions</div>
              </div>
            </div>
            <h2 className="text-3xl font-exo2 font-bold text-text-primary mb-4">
              Shop Now, Pay Later
            </h2>
            <p className="text-text-secondary text-lg mb-6">
              OEM Radio Repair partners with Snap Finance to offer flexible payment options for your automotive needs.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Quick Decision</h3>
              <p className="text-text-secondary text-sm">
                Get a decision in seconds with our streamlined application process
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Flexible Terms</h3>
              <p className="text-text-secondary text-sm">
                Choose payment options that work with your budget
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">No Perfect Credit Required</h3>
              <p className="text-text-secondary text-sm">
                Financing options available for various credit situations
              </p>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-surface-800/50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-text-primary mb-4 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">1</div>
                <p className="text-text-secondary text-sm">Choose your services</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">2</div>
                <p className="text-text-secondary text-sm">Apply for financing</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">3</div>
                <p className="text-text-secondary text-sm">Get a quick decision</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">4</div>
                <p className="text-text-secondary text-sm">Complete your service</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-text-secondary mb-4">
              Ready to get started? Contact us to learn more about financing options for your automotive needs.
            </p>
            <a
              href="tel:2055221162"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call to Discuss Financing
            </a>
          </div>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start mb-4">
            <AlertCircle className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Important Information</h3>
              <div className="text-text-secondary text-sm space-y-2">
                <p>• Financing is subject to approval and offered through Snap Finance</p>
                <p>• Terms and conditions apply - all details will be provided during the application process</p>
                <p>• You will review all terms before completing any agreement</p>
                <p>• Contact our staff for complete details about financing options and requirements</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Available for Financing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-exo2 font-bold text-text-primary mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
              Services Available for Financing
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Oil Changes & Fluid Services</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Battery & Electrical Services</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Performance Upgrades</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Suspension & Lift Kits</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Wheels & Tires</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Custom Installation Services</span>
              </div>
            </div>
          </div>

          <div className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-exo2 font-bold text-text-primary mb-6 flex items-center">
              <FileText className="w-6 h-6 text-primary-500 mr-3" />
              What You'll Need
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Valid government-issued ID</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Active checking account</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Steady source of income</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Valid phone number</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="text-text-secondary">Ability to make initial payment</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-surface-800/50 rounded-lg">
              <p className="text-text-secondary text-sm">
                <strong>Note:</strong> Our staff will guide you through the application process and ensure you understand all terms before proceeding.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-exo2 font-bold text-text-primary mb-4">
              Questions About Financing?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand your financing options and find the best solution for your automotive needs. Give us a call to discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:2055221162"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (205) 522-1162
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-surface-800 text-text-primary font-bold rounded-lg hover:bg-surface-700 transition-colors duration-200 border border-primary-500/20"
              >
                Visit Our Location
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}