'use client'
import { motion } from 'framer-motion'
import { Shield, Truck, Clock, Award, CheckCircle, Star, Phone, MapPin } from 'lucide-react'

export default function TrustElements({ variant = 'default', className = '' }) {
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

  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "1-Year Warranty",
      subtitle: "All Repairs Guaranteed",
      description: "Comprehensive warranty coverage on all digitizer and LCD replacements",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      subtitle: "Both Ways Included",
      description: "Prepaid shipping labels for sending your unit to us and returning it to you",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "2-3 Day Turnaround",
      subtitle: "Fast Professional Service",
      description: "Quick repair turnaround time once we receive your infotainment unit",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "50%+ Savings",
      subtitle: "vs. Major Competitors",
      description: "Save hundreds compared to infotainment.com and other repair services",
      color: "text-primary-500",
      bgColor: "bg-primary-500/20",
      borderColor: "border-primary-500/30"
    }
  ]

  const compactTrustItems = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "1-Year Warranty",
      color: "text-green-500"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Free Shipping",
      color: "text-blue-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "2-3 Day Turnaround",
      color: "text-purple-500"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "OEM Quality",
      color: "text-primary-500"
    }
  ]

  const businessCredentials = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Birmingham, AL",
      subtitle: "Family-Owned Since Founded"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "(205) 522-1162",
      subtitle: "Expert Support Available"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Multi-Generation",
      subtitle: "Automotive Expertise"
    }
  ]

  if (variant === 'compact') {
    return (
      <motion.div
        className={`flex flex-wrap items-center gap-4 ${className}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {compactTrustItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-2 text-sm"
          >
            <div className={`${item.color}`}>
              {item.icon}
            </div>
            <span className="text-text-primary font-medium whitespace-nowrap">
              {item.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === 'badges') {
    return (
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {trustBadges.map((badge, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative bg-surface-800/30 backdrop-blur-sm border ${badge.borderColor} rounded-xl p-6 text-center hover:bg-surface-700/30 transition-all duration-300 group`}
          >
            <div className={`w-16 h-16 ${badge.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className={badge.color}>
                {badge.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">
              {badge.title}
            </h3>
            <p className={`text-sm font-medium mb-2 ${badge.color}`}>
              {badge.subtitle}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {badge.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === 'hero') {
    return (
      <motion.div
        className={`bg-surface-800/20 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 ${className}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h3 className="text-lg font-bold text-text-primary mb-2">
            Why Choose OEM Radio Repair?
          </h3>
          <p className="text-text-secondary text-sm">
            Trusted by thousands of customers nationwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center space-y-2"
            >
              <div className={`w-12 h-12 ${badge.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                <div className={`${badge.color} w-6 h-6`}>
                  {badge.icon}
                </div>
              </div>
              <h4 className="text-sm font-bold text-text-primary">
                {badge.title}
              </h4>
              <p className={`text-xs ${badge.color}`}>
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-surface-600 pt-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            {businessCredentials.map((cred, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div className="text-primary-500">
                  {cred.icon}
                </div>
                <div>
                  <div className="text-text-primary font-medium">
                    {cred.title}
                  </div>
                  <div className="text-text-secondary text-xs">
                    {cred.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'inline') {
    return (
      <motion.div
        className={`flex flex-wrap items-center justify-center gap-6 text-sm ${className}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {compactTrustItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-2 px-3 py-2 bg-surface-800/30 backdrop-blur-sm border border-surface-600 rounded-lg"
          >
            <div className={item.color}>
              {item.icon}
            </div>
            <span className="text-text-primary font-medium whitespace-nowrap">
              {item.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      className={`space-y-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Trusted Nationwide Service
        </h2>
        <p className="text-text-secondary">
          Thousands of satisfied customers across the United States
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustBadges.map((badge, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-surface-800/30 backdrop-blur-sm border ${badge.borderColor} rounded-lg p-4 text-center hover:bg-surface-700/30 transition-all duration-300`}
          >
            <div className={`w-12 h-12 ${badge.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <div className={badge.color}>
                {React.cloneElement(badge.icon, { className: 'w-6 h-6' })}
              </div>
            </div>
            <h3 className="text-base font-bold text-text-primary mb-1">
              {badge.title}
            </h3>
            <p className={`text-sm ${badge.color}`}>
              {badge.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Individual trust badge components for flexible usage
export function WarrantyBadge({ size = 'default' }) {
  const iconSize = size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6'
  const textSize = size === 'small' ? 'text-xs' : size === 'large' ? 'text-base' : 'text-sm'
  
  return (
    <div className="flex items-center space-x-2">
      <Shield className={`${iconSize} text-green-500`} />
      <span className={`${textSize} font-medium text-text-primary`}>
        1-Year Warranty
      </span>
    </div>
  )
}

export function FreeShippingBadge({ size = 'default' }) {
  const iconSize = size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6'
  const textSize = size === 'small' ? 'text-xs' : size === 'large' ? 'text-base' : 'text-sm'
  
  return (
    <div className="flex items-center space-x-2">
      <Truck className={`${iconSize} text-blue-500`} />
      <span className={`${textSize} font-medium text-text-primary`}>
        Free Shipping Both Ways
      </span>
    </div>
  )
}

export function FastTurnaroundBadge({ size = 'default' }) {
  const iconSize = size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6'
  const textSize = size === 'small' ? 'text-xs' : size === 'large' ? 'text-base' : 'text-sm'
  
  return (
    <div className="flex items-center space-x-2">
      <Clock className={`${iconSize} text-purple-500`} />
      <span className={`${textSize} font-medium text-text-primary`}>
        2-3 Day Turnaround
      </span>
    </div>
  )
}