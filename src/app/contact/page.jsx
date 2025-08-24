import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import TrustElements from '/src/components/TrustElements'
import ContactForm from '/src/components/ContactForm.jsx'
import RecaptchaDebugger from '/src/components/RecaptchaDebugger.jsx'
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Contact UConnect & OEM Radio Repair Service | (205) 522-1162',
  description: 'Contact OEM Radio Repair for UConnect radio repair, Dodge radio repair, Ford, GM, Toyota radio service. Birmingham, AL location. Mail-in service nationwide. Call (205) 522-1162.',
  keywords: [
    'oem radio repair phone number',
    'uconnect customer service telephone number',
    'uconnect customer service phone number',
    'uconnect service number',
    'dodge radio repair phone number',
    'oem radio repair near me contact',
    'radio repair near me phone',
    'uconnect customer service hours',
    'oem radio repair birmingham al',
    'roberts oem radio repair contact',
    '(205) 522-1162',
    'info@oemradiorepair.com',
    'uconnect customer service email'
  ],
  openGraph: {
    title: 'Contact UConnect & OEM Radio Repair Service | (205) 522-1162',
    description: 'Professional OEM radio repair for Dodge, Ford, GM, Toyota. UConnect radio repair service. Birmingham, AL. Nationwide mail-in service.',
  },
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RecaptchaDebugger />
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Contact <span className="text-primary-400">OEM Radio Repair</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Ready to fix your infotainment system? Get expert repair services with our convenient 
                mail-in process or contact us for questions about your vehicle's compatibility.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="mb-16">
              <TrustElements variant="badges" className="justify-center" />
            </div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Our expert technicians are ready to help with your infotainment repair needs. 
                    Choose the contact method that works best for you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">

                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Email Us</h3>
                      <p className="text-text-secondary mb-3">
                        Send us details about your repair needs or questions
                      </p>
                      <a 
                        href="mailto:info@oemradiorepair.com"
                        className="text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        info@oemradiorepair.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Visit Our Facility</h3>
                      <p className="text-text-secondary mb-3">
                        Located in Birmingham, AL - mail-in service available nationwide
                      </p>
                      <div className="space-y-1">
                        <p className="text-text-primary font-medium">2413 1st Ave S</p>
                        <p className="text-text-primary font-medium">Birmingham, AL 35233</p>
                        <a 
                          href="https://maps.google.com/?q=2413+1st+Ave+S+Birmingham+AL+35233"
                          className="inline-block text-primary-400 hover:text-primary-300 transition-colors mt-2"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Business Hours</h3>
                      <p className="text-text-secondary mb-3">
                        We're available during these hours for phone support and consultation
                      </p>
                      <div className="space-y-1 text-text-primary">
                        <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 8:00 AM - 5:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Placeholder */}
              <div id="contact-form" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote 
                    and repair timeline for your specific vehicle.
                  </p>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                How Our Mail-In Service Works
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple, secure, and convenient repair process from anywhere in the United States
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">1. Contact Us</h3>
                <p className="text-text-secondary">
                  Call, email, or use our contact form to describe your infotainment issues and get a quote
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">2. Ship Your Unit</h3>
                <p className="text-text-secondary">
                  We provide a prepaid shipping label - securely package and send your infotainment unit
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">3. Expert Repair</h3>
                <p className="text-text-secondary">
                  Our technicians perform the repair with 1-year warranty and ship it back within 2-3 days
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Ready to Fix Your Infotainment System?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Get professional repair service with our 1-year warranty, free shipping both ways, 
                and save 50%+ compared to major competitors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fill Out Form Below
                </a>
                <a 
                  href="mailto:info@oemradiorepair.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}