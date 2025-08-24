import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Wiper Blade Replacement | OEM Radio Repair',
  description: 'Professional wiper blade replacement services in Birmingham, AL. Improve visibility and safety with quality wiper blades for all weather conditions.',
  keywords: [
    'wiper blade replacement',
    'windshield wipers',
    'wiper blades',
    'Newport TN',
    'rain visibility',
    'safety service'
  ],
}

const serviceData = {
  title: "Wiper Blade Replacement",
  subtitle: "Clear Visibility in All Weather",
  description: "Maintain clear visibility and driving safety with our wiper blade replacement service. Quality wiper blades ensure streak-free performance in rain, snow, and debris.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "Starting at $24.99+",
  duration: "10 minutes",
  
  features: [
    "Front and rear wiper blade replacement",
    "Windshield washer fluid top-off", 
    "Wiper arm inspection",
    "Windshield condition check",
    "Proper blade size fitting",
    "Quality replacement blades",
    "Installation and testing",
    "Seasonal maintenance advice"
  ],
  
  serviceTypes: [
    {
      name: "Standard Wiper Blades",
      price: "$24.99",
      description: "Quality replacement blades for clear visibility (per pair)",
      bestFor: "Regular replacement, standard driving conditions"
    },
    {
      name: "Premium All-Weather Blades", 
      price: "$43.74",
      description: "High-performance blades for all weather conditions (per pair)",
      bestFor: "Extreme weather, maximum performance, longer life"
    },
    {
      name: "Winter/Snow Blades",
      price: "$37.49",
      description: "Heavy-duty blades designed for snow and ice (per pair)",
      bestFor: "Winter conditions, snow removal, mountain driving"
    }
  ],
  
  process: [
    "Inspect current wiper blades for wear and damage",
    "Measure blade length and determine correct size",
    "Remove old blades and inspect wiper arms",
    "Install new blades with proper attachment", 
    "Test wiper operation and contact pattern",
    "Top off windshield washer fluid",
    "Clean windshield for optimal performance"
  ],
  
  faqs: [
    {
      question: "How often should wiper blades be replaced?",
      answer: "Wiper blades should typically be replaced every 6-12 months, or when they start streaking, skipping, or making noise on the windshield."
    },
    {
      question: "What are signs that wiper blades need replacement?",
      answer: "Replace wiper blades if they streak, skip, chatter, leave gaps, or if the rubber is cracked, torn, or hardened."
    },
    {
      question: "Can you replace just one wiper blade?",
      answer: "While possible, we recommend replacing both front blades at the same time to ensure even performance and visibility."
    },
    {
      question: "Do you install customer-provided wiper blades?",
      answer: "Yes, we can install wiper blades you provide, though we recommend using quality blades for optimal performance and safety."
    }
  ],
  
  warranty: "All wiper blade installations include a 30-day installation warranty.",
  
  relatedServices: [
    { name: "Multi-Point Inspection", href: "/services/inspection" },
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Cabin Air Filter", href: "/services/cabin-filter" }
  ]
}

export default function WiperBladesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}