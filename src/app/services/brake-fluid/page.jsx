import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Brake Fluid Service | OEM Radio Repair',
  description: 'Professional brake fluid exchange services in Birmingham, AL. Keep your brakes safe and responsive with fresh brake fluid service.',
  keywords: [
    'brake fluid service',
    'brake fluid flush',
    'brake maintenance',
    'Newport TN',
    'brake safety',
    'brake system service'
  ],
}

const serviceData = {
  title: "Brake Fluid Service",
  subtitle: "Critical Safety System Maintenance",
  description: "Ensure your brakes perform when you need them most with our professional brake fluid service. Fresh brake fluid maintains proper braking performance and prevents system corrosion.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "Starting at $99.99+",
  duration: "30-45 minutes",
  
  features: [
    "Complete brake fluid exchange",
    "DOT 3, DOT 4, or DOT 5.1 fluid options", 
    "Brake system inspection",
    "Brake line and hose check",
    "Master cylinder inspection",
    "Brake pedal feel test",
    "ABS system compatibility check",
    "Brake performance road test"
  ],
  
  serviceTypes: [
    {
      name: "Standard Brake Fluid Service",
      price: "$99.99",
      description: "Complete brake fluid exchange with DOT 3 or DOT 4 fluid",
      bestFor: "Regular maintenance, most passenger vehicles"
    },
    {
      name: "Performance Brake Fluid Service", 
      price: "$124.99",
      description: "High-performance DOT 4 or racing brake fluid for extreme conditions",
      bestFor: "Performance vehicles, heavy towing, mountain driving"
    },
    {
      name: "European Brake Fluid Service",
      price: "$112.49",
      description: "Specialized brake fluid meeting European vehicle specifications",
      bestFor: "BMW, Mercedes-Benz, Audi, Volkswagen, Porsche"
    }
  ],
  
  process: [
    "Brake system inspection and fluid contamination check",
    "Test brake pedal feel and master cylinder function",
    "Connect brake bleeding equipment to all calipers",
    "Exchange old fluid with fresh brake fluid", 
    "Bleed all brake lines to remove air bubbles",
    "Test brake pedal feel and system operation",
    "Road test to verify proper braking performance"
  ],
  
  faqs: [
    {
      question: "How often should brake fluid be changed?",
      answer: "Most manufacturers recommend brake fluid service every 2-3 years or 30,000-45,000 miles. Brake fluid absorbs moisture over time, reducing its effectiveness."
    },
    {
      question: "What happens if brake fluid isn't changed?",
      answer: "Old brake fluid absorbs moisture, leading to reduced braking performance, internal corrosion, and potential brake system failure in extreme cases."
    },
    {
      question: "Can you tell if my brake fluid needs changing?",
      answer: "Yes, we can test brake fluid condition. Dark, contaminated fluid or high moisture content indicates it's time for service."
    },
    {
      question: "Do you work on ABS brake systems?",
      answer: "Yes, we service all brake systems including ABS, traction control, and electronic stability systems. We use proper bleeding procedures for each system type."
    }
  ],
  
  warranty: "We provide a 12-month/12,000-mile warranty on brake fluid services.",
  
  relatedServices: [
    { name: "Multi-Point Inspection", href: "/services/inspection" },
    { name: "Power Steering Fluid", href: "/services/power-steering" },
    { name: "Transmission Fluid", href: "/services/transmission-fluid" }
  ]
}

export default function BrakeFluidPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}