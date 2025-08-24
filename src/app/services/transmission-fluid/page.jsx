import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Transmission Fluid Service | OEM Radio Repair',
  description: 'Professional transmission fluid exchange services in Birmingham, AL. Keep your transmission running smoothly with fresh fluid and filter replacement.',
  keywords: [
    'transmission fluid',
    'transmission service',
    'fluid exchange',
    'Newport TN',
    'automatic transmission',
    'transmission maintenance'
  ],
}

const serviceData = {
  title: "Transmission Fluid Service",
  subtitle: "Keep Your Transmission Running Smooth",
  description: "Maintain your transmission's performance and longevity with our professional fluid exchange service. Fresh transmission fluid ensures smooth shifting and prevents costly transmission repairs.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "Starting at $187.49+",
  duration: "45 minutes",
  
  features: [
    "Complete transmission fluid exchange",
    "New transmission filter (when applicable)",
    "Pan gasket replacement (when applicable)", 
    "System flush to remove old fluid",
    "Transmission inspection",
    "Leak check and seal inspection",
    "Road test for proper operation",
    "Service documentation and recommendations"
  ],
  
  serviceTypes: [
    {
      name: "Transmission Fluid Exchange",
      price: "$187.49",
      description: "Complete fluid exchange using manufacturer-approved fluid",
      bestFor: "Regular maintenance, most vehicles under 100k miles"
    },
    {
      name: "Transmission Service with Filter",
      price: "$287.49",
      description: "Full service including filter replacement and pan inspection",
      bestFor: "High-mileage vehicles, performance cars, complete maintenance"
    },
    {
      name: "Performance Transmission Service",
      price: "$249.99",
      description: "High-performance fluid for racing and modified transmissions",
      bestFor: "Performance vehicles, racing applications, extreme conditions"
    }
  ],
  
  process: [
    "Transmission inspection and fluid condition assessment",
    "Connect flush machine to transmission cooling lines",
    "Remove transmission pan and filter (full service)",
    "Clean pan and install new filter and gasket", 
    "Perform controlled fluid exchange",
    "Check for leaks and proper fluid level",
    "Road test to verify smooth operation"
  ],
  
  faqs: [
    {
      question: "How often should transmission fluid be changed?",
      answer: "Most manufacturers recommend transmission service every 30,000-60,000 miles. Severe driving conditions may require more frequent service."
    },
    {
      question: "What are signs my transmission needs service?",
      answer: "Dark or burnt-smelling fluid, rough shifting, slipping, or transmission warning lights are all signs your transmission needs attention."
    },
    {
      question: "Do you service CVT transmissions?",
      answer: "Yes, we service CVT (Continuously Variable Transmission) systems using the proper CVT-specific fluids required by your vehicle."
    },
    {
      question: "Can transmission service fix shifting problems?",
      answer: "Fresh fluid can improve shifting in many cases, but severe problems may require transmission repair. We'll diagnose and recommend the best solution."
    }
  ],
  
  warranty: "We provide a 12-month/12,000-mile warranty on our transmission fluid services.",
  
  relatedServices: [
    { name: "Coolant System Service", href: "/services/coolant" },
    { name: "Differential Service", href: "/services/differential" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function TransmissionFluidPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}