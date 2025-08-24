import Navbar from '/src/components/sitewide-navbar'
import LandingHero from '/src/components/page-landing-hero-oemradio'
import ServicesContentSection from '/src/components/services-overview-content'
import TestimonialsReviews from '/src/components/testimonials-reviews'
import ContactForm from '/src/components/ContactForm'
import Footer from '/src/components/sitewide-footer'

export const metadata = {
  title: 'OEM Radio Repair - UConnect & Car Radio Repair Service | Save 50%',
  description: 'Professional OEM radio repair service for Dodge, Chrysler, Jeep, Ford, GM, Toyota vehicles. UConnect radio repair, digitizer replacement $400, LCD $550. Mail-in service with free shipping. Get your free quote today.',
  keywords: [
    'oem radio repair',
    'oem radio repair near me',
    'uconnect radio repair',
    'uconnect repair near me',
    'dodge radio repair',
    'ford oem radio repair',
    'gm oem radio repair',
    'toyota oem radio repair',
    'oem car radio repair',
    'oem factory radio repair',
    'uconnect radio repair mail in service',
    'dodge ram radio repair',
    'dodge charger radio repair',
    'dodge caravan radio repair',
    'roberts oem radio repair',
    'radio repair near me',
    'oem car radio repair near me',
    'uconnect radio issues',
    'dodge radio not working'
  ],
  openGraph: {
    title: 'OEM Radio Repair - UConnect & Car Radio Repair Service | Save 50%',
    description: 'Professional OEM radio repair for Dodge, Ford, GM, Toyota. UConnect radio repair mail-in service. Digitizer $400, LCD $550. Free shipping, 1-year warranty nationwide.',
    url: 'https://oemradiorepair.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'OEM Radio Repair - Professional UConnect & Car Radio Repair Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEM Radio Repair - UConnect & Car Radio Repair Service | Save 50%',
    description: 'Professional OEM radio repair for Dodge, Ford, GM, Toyota. UConnect radio repair mail-in service. Free shipping nationwide.',
    images: ['/meta.png']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <LandingHero />
      
      {/* Service Overview Section */}
      <ServicesContentSection />
      
      {/* Customer Testimonials & Reviews */}
      <TestimonialsReviews />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-background-dark to-surface-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
              Get Your Free <span className="text-primary-400">Repair Quote</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Fill out the form below and we'll provide a detailed quote with pricing and timeline for your specific vehicle
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

