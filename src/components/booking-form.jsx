'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, User, Car, CheckCircle, AlertCircle } from 'lucide-react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicle: {
      year: '',
      make: '',
      model: '',
      mileage: ''
    },
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [minDate, setMinDate] = useState('')

  useEffect(() => {
    // Set minimum date to today to avoid hydration mismatch
    setMinDate(new Date().toISOString().split('T')[0])
  }, [])

  const services = [
    { value: 'oil-change-conventional', label: 'Conventional Oil Change - Starting at $37.49+', duration: '15 min' },
    { value: 'oil-change-synthetic-blend', label: 'Synthetic Blend Oil Change - Starting at $49.99+', duration: '15 min' },
    { value: 'oil-change-full-synthetic', label: 'Full Synthetic Oil Change - Starting at $62.49+', duration: '15 min' },
    { value: 'oil-change-high-mileage', label: 'High Mileage Oil Change - Starting at $56.24+', duration: '15 min' },
    { value: 'transmission-fluid', label: 'Transmission Fluid Service - Starting at $187.49+', duration: '45 min' },
    { value: 'air-filter', label: 'Air Filter Replacement - Starting at $24.99+', duration: '10 min' },
    { value: 'cabin-filter', label: 'Cabin Air Filter - Starting at $31.24+', duration: '15 min' },
    { value: 'battery-service', label: 'Battery Service - Starting at $112.49+', duration: '20 min' },
    { value: 'multi-point', label: 'Multi-Point Inspection - Free with service', duration: 'Included' },
    { value: 'package-essential', label: 'Essential Package - Starting at $62.49+', duration: '25 min' },
    { value: 'package-premium', label: 'Premium Package - Starting at $99.99+', duration: '35 min' }
  ]

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith('vehicle.')) {
      const vehicleField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          [vehicleField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
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

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto"
              variants={itemVariants}
            >
              <CheckCircle className="w-12 h-12 text-black" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl font-exo2 font-black italic text-text-primary mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                We've received your service request and will contact you shortly to confirm your appointment.
              </p>
            </motion.div>

            <motion.div 
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 text-left max-w-md mx-auto"
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-text-primary mb-4">What happens next?</h3>
              <div className="space-y-3 text-text-secondary">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <p>We'll call you within 2 hours to confirm your appointment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <p>You'll receive a confirmation with your appointment details</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <p>Come in at your scheduled time for fast, professional service</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="tel:2055221162"
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (205) 522-1162
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
              Book Your Service
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Schedule your appointment online and we'll have you back on the road in no time.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <User className="w-6 h-6 text-primary-500 mr-2" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="(423) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <Car className="w-6 h-6 text-primary-500 mr-2" />
                  Vehicle Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      name="vehicle.year"
                      value={formData.vehicle.year}
                      onChange={handleInputChange}
                      required
                      min="1990"
                      max="2025"
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      name="vehicle.make"
                      value={formData.vehicle.make}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      name="vehicle.model"
                      value={formData.vehicle.model}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="Camry"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Mileage
                    </label>
                    <input
                      type="number"
                      name="vehicle.mileage"
                      value={formData.vehicle.mileage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors text-base"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-2" />
                  Service Needed *
                </h3>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary focus:outline-none focus:border-primary-500 transition-colors text-base"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Appointment Time */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-primary-500 mr-2" />
                  Preferred Appointment Time
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={minDate}
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary focus:outline-none focus:border-primary-500 transition-colors text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary focus:outline-none focus:border-primary-500 transition-colors text-base"
                    >
                      <option value="">Select a time...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Additional Notes or Concerns
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 bg-surface-700 border border-primary-500/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-500 transition-colors resize-none text-base"
                  placeholder="Any specific concerns or special requests..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Book Appointment
                    </>
                  )}
                </button>
                <div className="mt-4 space-y-2 text-text-secondary text-sm">
                  <p>We'll contact you within 2 hours to confirm your appointment.</p>
                  <p><strong>*Pricing Disclaimer:</strong> All prices are starting amounts and may vary based on vehicle specifications, oil capacity, and service requirements. Final pricing will be confirmed before service begins.</p>
                </div>
              </div>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 inline-block">
              <div className="flex items-center space-x-2 text-primary-500 mb-2">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Need immediate service?</span>
              </div>
              <p className="text-text-secondary mb-4">
                Call us directly for same-day appointments or urgent service needs.
              </p>
              <a
                href="tel:2055221162"
                className="inline-flex items-center px-6 py-3 bg-surface-700 border border-primary-500/30 text-primary-500 font-medium rounded-lg hover:bg-surface-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                (205) 522-1162
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}