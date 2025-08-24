import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Coolant Service | OEM Radio Repair',
  description: 'Professional coolant system service in Birmingham, AL. Coolant flush, thermostat replacement, and cooling system maintenance for all vehicles.',
  keywords: [
    'coolant service',
    'coolant flush',
    'radiator service',
    'Newport TN',
    'cooling system',
    'antifreeze service'
  ],
}

const serviceData = {
  title: "Coolant System Service",
  subtitle: "Keep Your Engine Running Cool",
  description: "Maintain your vehicle's cooling system with our professional coolant service. Fresh coolant prevents overheating, corrosion, and costly engine damage.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "Starting at $112.49+",
  duration: "45-60 minutes",
  
  features: [
    "Complete coolant system flush",
    "New coolant and additives", 
    "Radiator and hose inspection",
    "Thermostat function test",
    "Water pump inspection",
    "Pressure test for leaks",
    "Temperature sensor check",
    "Cooling fan operation test"
  ],
  
  serviceTypes: [
    {
      name: "Coolant Flush Service",
      price: "$112.49",
      description: "Complete system flush with new coolant and inspection",
      bestFor: "Regular maintenance, most vehicles"
    },
    {
      name: "Cooling System Service", 
      price: "$162.49",
      description: "Comprehensive service including thermostat and pressure testing",
      bestFor: "High-mileage vehicles, cooling system issues"
    },
    {
      name: "Performance Coolant Service",
      price: "$149.99",
      description: "High-performance coolant for racing and modified vehicles",
      bestFor: "Performance cars, racing applications, extreme conditions"
    }
  ],
  
  process: [
    "Cooling system inspection and pressure test",
    "Drain old coolant and inspect for contamination",
    "Flush system with cleaning solution if needed",
    "Check thermostat, hoses, and connections", 
    "Refill with manufacturer-specified coolant",
    "Bleed air from system and test operation",
    "Road test to verify proper temperature control"
  ],
  
  faqs: [
    {
      question: "How often should coolant be changed?",
      answer: "Most manufacturers recommend coolant service every 30,000-100,000 miles depending on coolant type. Check your owner's manual for specific intervals."
    },
    {
      question: "What are signs my cooling system needs service?",
      answer: "Warning signs include overheating, low coolant levels, rusty or discolored coolant, sweet smell, or visible leaks under the vehicle."
    },
    {
      question: "Can you fix cooling system leaks?",
      answer: "We can diagnose and provide estimates for leak repairs. Simple hose replacements can often be done during service, while major repairs may require additional scheduling."
    },
    {
      question: "Do you service all types of coolant?",
      answer: "Yes, we service all coolant types including traditional green, extended-life orange/red, and newer organic acid technology (OAT) coolants."
    }
  ],
  
  warranty: "We provide a 12-month/12,000-mile warranty on coolant system services.",
  
  relatedServices: [
    { name: "Transmission Fluid", href: "/services/transmission-fluid" },
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function CoolantPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}