import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Battery Service & Replacement | OEM Radio Repair',
  description: 'Professional battery testing and replacement services in Birmingham, AL. Keep your vehicle starting reliably with quality batteries and expert service.',
  keywords: [
    'battery service',
    'battery replacement',
    'battery testing',
    'Newport TN',
    'car battery',
    'automotive battery'
  ],
}

const serviceData = {
  title: "Battery Service & Replacement",
  subtitle: "Reliable Starting Power When You Need It",
  description: "Don't get stranded with a dead battery. Our comprehensive battery service includes testing, cleaning, and replacement with quality batteries backed by solid warranties.",
  image: "/NewportPitstop/pexels/battery_services.webp",
  startingPrice: "Starting at $112.49+",
  duration: "20 minutes",
  
  features: [
    "Free battery testing and analysis",
    "Terminal cleaning and protection", 
    "Charging system inspection",
    "Battery tray and hold-down check",
    "Quality replacement batteries",
    "Professional installation",
    "Alternator performance test",
    "Starting system evaluation"
  ],
  
  serviceTypes: [
    {
      name: "Battery Test & Clean",
      price: "FREE",
      description: "Free battery testing with terminal cleaning (with any service)",
      bestFor: "Preventive maintenance, battery health check"
    },
    {
      name: "Standard Battery Replacement", 
      price: "$112.49",
      description: "Quality replacement battery with 2-year warranty",
      bestFor: "Most vehicles, reliable everyday driving"
    },
    {
      name: "Premium Battery Replacement",
      price: "$162.49",
      description: "High-performance battery with 3-year warranty and higher CCA",
      bestFor: "Extreme weather, high electrical demand vehicles"
    },
    {
      name: "Performance/AGM Battery",
      price: "$224.99",
      description: "Advanced AGM battery for performance and modified vehicles",
      bestFor: "Performance cars, audio systems, start/stop technology"
    }
  ],
  
  process: [
    "Battery and charging system diagnostic test",
    "Visual inspection of battery condition and connections",
    "Clean terminals and apply protective coating",
    "Test alternator output and charging rate", 
    "Replace battery if needed with proper disposal",
    "Secure battery and verify proper fit",
    "Final system test and starting verification"
  ],
  
  faqs: [
    {
      question: "How long do car batteries typically last?",
      answer: "Most car batteries last 3-5 years, but extreme temperatures, short trips, and electrical accessories can shorten battery life."
    },
    {
      question: "What are signs my battery needs replacement?",
      answer: "Warning signs include slow engine cranking, dim headlights, dashboard warning lights, battery case swelling, or age over 3-4 years."
    },
    {
      question: "Can you test my battery for free?",
      answer: "Yes! We provide free battery testing with any service. We can quickly determine if your battery needs replacement or just maintenance."
    },
    {
      question: "Do you dispose of old batteries?",
      answer: "Absolutely. We properly recycle old batteries and handle all disposal requirements. Most battery purchases include a core credit for your old battery."
    }
  ],
  
  warranty: "Battery warranties range from 2-3 years depending on battery type. Installation includes a 30-day service warranty.",
  
  relatedServices: [
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Multi-Point Inspection", href: "/services/inspection" },
    { name: "Performance Services", href: "/services/performance-oil" }
  ]
}

export default function BatteryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}