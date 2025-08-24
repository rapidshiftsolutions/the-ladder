'use client'
import { motion } from 'framer-motion'
import { Check, X, Star, Shield, Truck, Clock } from 'lucide-react'
import { services, calculateSavings } from '/src/data/vehicles'

export default function PricingComparison({ className = '' }) {
  const digitizerSavings = calculateSavings('digitizer')
  const lcdSavings = calculateSavings('lcd')

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const ComparisonCard = ({ title, ourPrice, competitorPrice, savings, percentage, isRecommended = false }) => (
    <motion.div
      variants={cardVariants}
      className={`relative bg-surface-800/50 backdrop-blur-sm border rounded-xl p-6 ${
        isRecommended 
          ? 'border-primary-500 ring-2 ring-primary-500/20' 
          : 'border-surface-600'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-6">
          <div className="bg-primary-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
            <Star className="w-3 h-3 mr-1" />
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        
        {/* Price Comparison */}
        <div className="space-y-3">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <div className="text-green-400 text-sm font-medium">OEM Radio Repair</div>
            <div className="text-3xl font-bold text-green-500">${ourPrice}</div>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <div className="text-red-400 text-sm font-medium">Infotainment.com</div>
            <div className="text-2xl font-bold text-red-500 line-through">${competitorPrice}</div>
          </div>
        </div>

        {/* Savings Display */}
        <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-4">
          <div className="text-primary-400 text-sm font-medium">You Save</div>
          <div className="text-2xl font-bold text-primary-500">${savings}</div>
          <div className="text-primary-400 text-sm">({percentage}% off)</div>
        </div>

        {/* Features */}
        <div className="space-y-2 text-left">
          <div className="flex items-center text-sm text-text-primary">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            1-Year Warranty
          </div>
          <div className="flex items-center text-sm text-text-primary">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            Free Shipping Both Ways
          </div>
          <div className="flex items-center text-sm text-text-primary">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            2-3 Day Turnaround
          </div>
          <div className="flex items-center text-sm text-text-primary">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            OEM Quality Parts
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className={`py-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
            Unbeatable Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Save 50%+ compared to major competitors while getting the same quality service and warranty
          </p>
        </motion.div>

        {/* Service Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ComparisonCard
            title="Digitizer Replacement"
            ourPrice={digitizerSavings.ourPrice}
            competitorPrice={digitizerSavings.competitorPrice}
            savings={digitizerSavings.savings}
            percentage={digitizerSavings.percentage}
            isRecommended={true}
          />
          <ComparisonCard
            title="LCD Replacement"
            ourPrice={lcdSavings.ourPrice}
            competitorPrice={lcdSavings.competitorPrice}
            savings={lcdSavings.savings}
            percentage={lcdSavings.percentage}
          />
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          variants={itemVariants}
          className="bg-surface-800/30 backdrop-blur-sm border border-surface-600 rounded-xl overflow-hidden"
        >
          <div className="px-6 py-4 bg-surface-700/50 border-b border-surface-600">
            <h3 className="text-lg font-bold text-text-primary">Service Comparison</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-700/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-text-primary">Service</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-green-400">OEM Radio Repair</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-red-400">Infotainment.com</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-primary-400">Your Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-600">
                <tr className="hover:bg-surface-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">Digitizer Replacement</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl font-bold text-green-500">${digitizerSavings.ourPrice}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl font-bold text-red-500 line-through">${digitizerSavings.competitorPrice}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-primary-500">${digitizerSavings.savings}</div>
                    <div className="text-sm text-primary-400">({digitizerSavings.percentage}% off)</div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">LCD Replacement</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl font-bold text-green-500">${lcdSavings.ourPrice}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-2xl font-bold text-red-500 line-through">${lcdSavings.competitorPrice}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-primary-500">${lcdSavings.savings}</div>
                    <div className="text-sm text-primary-400">({lcdSavings.percentage}% off)</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Value Props */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-primary-500" />
            </div>
            <h4 className="font-bold text-text-primary">1-Year Warranty</h4>
            <p className="text-sm text-text-secondary">Comprehensive warranty coverage on all repairs</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <Truck className="w-6 h-6 text-primary-500" />
            </div>
            <h4 className="font-bold text-text-primary">Free Shipping</h4>
            <p className="text-sm text-text-secondary">Prepaid shipping labels both ways included</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-primary-500" />
            </div>
            <h4 className="font-bold text-text-primary">Fast Turnaround</h4>
            <p className="text-sm text-text-secondary">2-3 business day repair time</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-6 h-6 text-primary-500" />
            </div>
            <h4 className="font-bold text-text-primary">Family Business</h4>
            <p className="text-sm text-text-secondary">Multi-generational automotive expertise</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group">
            Start Your Repair & Save Now
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </button>
          
          <p className="mt-4 text-sm text-text-secondary">
            No hidden fees • Free diagnosis • 1-year warranty included
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}