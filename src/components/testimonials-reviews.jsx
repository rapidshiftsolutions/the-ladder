'use client'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'

// Helper function to format date consistently
function formatDate(dateString) {
  // Parse the YYYY-MM-DD format and return a consistent display format
  const date = new Date(dateString + 'T00:00:00') // Add time to avoid timezone issues
  const options = { month: 'numeric', day: 'numeric', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

const testimonials = [
  {
    id: 1,
    name: "ian",
    location: "Google Review",
    rating: 5,
    date: "17 weeks ago",
    reviewText: "Alex did an amazing job installing my new radio. No complaints, job was done well, can't beat the price, very professional",
    serviceUsed: "Radio Installation",
    isRelativeDate: true
  },
  {
    id: 2,
    name: "Larry Muse", 
    location: "Google Review",
    rating: 5,
    date: "24 weeks ago",
    reviewText: "Alex of OEM replaced the screen in my Ford Explorer infotainment system very quickly for an excellent price.",
    serviceUsed: "Screen Replacement",
    isRelativeDate: true
  },
  {
    id: 3,
    name: "Kristal Ingram",
    location: "Google Review", 
    rating: 5,
    date: "37 weeks ago",
    reviewText: "They are the best!! Very knowledgeable and easy to work with! Can't beat the price!!",
    serviceUsed: "Screen Repair",
    hasPhoto: true,
    photoAlt: "Damaged navigation screen",
    isRelativeDate: true
  },
  {
    id: 4,
    name: "Gary Bowker",
    location: "Google Review",
    rating: 5,
    date: "37 weeks ago", 
    reviewText: "Highly recommended!!! Replaced the screen on my radio way cheaper than what the dealership quoted!!!",
    serviceUsed: "Screen Replacement",
    isRelativeDate: true
  }
];

export default function TestimonialsReviews() {
  // Generate review schema for local SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OEM Radio Repair",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.reviewText
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section className="py-16 lg:py-20 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-exo2 font-black italic text-text-primary mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Real Google reviews from satisfied customers nationwide
              </p>
              
              {/* Rating Summary */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-text-primary font-bold text-xl">5.0</span>
                <span className="text-text-secondary">({testimonials.length} reviews)</span>
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-surface-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/30"
                  variants={itemVariants}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary-500 mb-4" />
                  
                  {/* Review Text */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    "{testimonial.reviewText}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${
                          star <= testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-text-primary">{testimonial.name}</p>
                      <div className="flex items-center space-x-1 text-sm text-text-secondary">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary-500 font-medium">{testimonial.serviceUsed}</p>
                      <p className="text-xs text-text-secondary">{testimonial.isRelativeDate ? testimonial.date : formatDate(testimonial.date)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <p className="text-text-secondary mb-6">
                Ready to experience our top-rated service for yourself?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Get Your Repair Quote
                </a>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
                >
                  Call (205) 522-1162
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}