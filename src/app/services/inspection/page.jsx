import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Multi-Point Inspection | OEM Radio Repair',
  description: 'Comprehensive vehicle inspection services in Birmingham, AL. Free multi-point inspection with service to keep your vehicle safe and reliable.',
  keywords: [
    'vehicle inspection',
    'multi-point inspection',
    'car inspection',
    'Newport TN',
    'safety inspection',
    'vehicle check'
  ],
}

const serviceData = {
  title: "Multi-Point Inspection",
  subtitle: "Comprehensive Vehicle Health Check",
  description: "Keep your vehicle safe and reliable with our thorough multi-point inspection. We check all major systems to identify potential issues before they become costly repairs.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "FREE",
  duration: "Included with service",
  
  features: [
    "Complete engine and fluid inspection",
    "Brake system safety check", 
    "Tire condition and tread depth",
    "Battery and charging system test",
    "Belts, hoses, and filters inspection",
    "Light and electrical system check",
    "Suspension and steering components",
    "Detailed written report with recommendations"
  ],
  
  serviceTypes: [
    {
      name: "Basic Multi-Point Inspection",
      price: "FREE",
      description: "Comprehensive inspection included with any service over $25",
      bestFor: "Regular maintenance, peace of mind, preventive care"
    },
    {
      name: "Standalone Inspection", 
      price: "$37.49",
      description: "Complete vehicle inspection without other services",
      bestFor: "Pre-purchase checks, travel preparation, troubleshooting"
    },
    {
      name: "Performance Vehicle Inspection",
      price: "$62.49",
      description: "Specialized inspection for modified and performance vehicles",
      bestFor: "Performance cars, modified vehicles, track preparation"
    }
  ],
  
  process: [
    "Visual inspection of engine bay and fluid levels",
    "Test battery, alternator, and starting system",
    "Check all lights, signals, and electrical functions",
    "Inspect tires for wear patterns and proper inflation", 
    "Examine brake components and pedal feel",
    "Test wipers, washers, and climate control",
    "Document findings and provide detailed report with recommendations"
  ],
  
  faqs: [
    {
      question: "How long does a multi-point inspection take?",
      answer: "Our multi-point inspection is typically completed during other services. A standalone inspection takes about 30 minutes."
    },
    {
      question: "What does the inspection report include?",
      answer: "You'll receive a detailed written report showing the condition of major systems, any items needing attention, and priority recommendations."
    },
    {
      question: "Do you inspect modified or performance vehicles?",
      answer: "Yes, we have experience with modified vehicles and can inspect performance modifications, aftermarket parts, and racing components."
    },
    {
      question: "Can you help prioritize needed repairs?",
      answer: "Absolutely. We'll categorize findings by safety priority and help you understand which items need immediate attention versus future maintenance."
    }
  ],
  
  warranty: "Multi-point inspections include a detailed report and 30-day consultation on findings.",
  
  relatedServices: [
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Battery Service", href: "/services/battery" },
    { name: "Air Filter Replacement", href: "/services/air-filter" }
  ]
}

export default function InspectionPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}