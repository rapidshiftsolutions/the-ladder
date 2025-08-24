import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Bumper Installation | OEM Radio Repair',
  description: 'Professional aftermarket bumper installation in Birmingham, AL. Off-road bumpers, performance bumpers, and custom installations for trucks and SUVs.',
  keywords: [
    'bumper installation',
    'aftermarket bumpers',
    'off-road bumpers',
    'Newport TN',
    'truck bumpers',
    'performance bumpers'
  ],
}

const serviceData = {
  title: "Aftermarket Bumper Installation",
  subtitle: "Enhanced Protection & Performance Styling",
  description: "Upgrade your vehicle's protection and appearance with our professional bumper installation services. From off-road bumpers to performance styling, we install quality aftermarket bumpers for trucks, SUVs, and performance vehicles.",
  image: "/NewportPitstop/pexels/bumpers.webp",
  startingPrice: "Starting at $374.99+",
  duration: "2-4 hours",
  
  features: [
    "Professional bumper removal and installation",
    "Off-road and performance bumper options", 
    "Winch mount preparation and installation",
    "LED light integration",
    "Proper wiring and electrical connections",
    "Tow hook and recovery point installation",
    "Paint matching and finishing services",
    "Function and safety testing"
  ],
  
  serviceTypes: [
    {
      name: "Standard Bumper Installation",
      price: "$374.99",
      description: "Professional installation of aftermarket bumpers",
      bestFor: "Style upgrades, basic protection enhancement"
    },
    {
      name: "Off-Road Bumper Package", 
      price: "$562.49",
      description: "Heavy-duty bumper installation with winch mount and lights",
      bestFor: "Off-road enthusiasts, maximum protection, recovery capability"
    },
    {
      name: "Performance Bumper Install",
      price: "$449.99",
      description: "Aerodynamic performance bumpers for sports cars and modified vehicles",
      bestFor: "Performance cars, racing applications, aggressive styling"
    },
    {
      name: "Complete Custom Package",
      price: "$749.99",
      description: "Custom bumper with lights, winch, and full integration",
      bestFor: "Complete transformation, maximum functionality, professional finish"
    }
  ],
  
  process: [
    "Vehicle assessment and bumper compatibility check",
    "Careful removal of factory bumper and components",
    "Fit and align new aftermarket bumper",
    "Install winch mounts, light brackets, or other accessories", 
    "Complete electrical connections for lights and accessories",
    "Apply protective finishes or paint matching as needed",
    "Final inspection and function testing"
  ],
  
  faqs: [
    {
      question: "Do aftermarket bumpers affect airbag systems?",
      answer: "We ensure all installations maintain safety system integrity. Some bumpers may require specific sensors or modifications for proper airbag function."
    },
    {
      question: "Can you install lights with the bumper?",
      answer: "Yes, we can integrate LED light bars, fog lights, and other lighting into bumper installations with proper wiring and switching."
    },
    {
      question: "Will my new bumper match my vehicle's color?",
      answer: "We offer paint matching services or can recommend powder coating options to ensure your new bumper complements your vehicle."
    },
    {
      question: "Do you install winches with bumpers?",
      answer: "Absolutely. We can install winches during bumper installation and ensure proper mounting, wiring, and operation."
    }
  ],
  
  warranty: "We provide a 12-month warranty on bumper installations and a 90-day warranty on paint and finishing work.",
  
  relatedServices: [
    { name: "Lift Kit Installation", href: "/services/lift-kits" },
    { name: "Lighting Installation", href: "/services/lighting" },
    { name: "Performance Services", href: "/services/performance-oil" }
  ]
}

export default function BumpersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}