import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Power Steering Fluid Service | OEM Radio Repair',
  description: 'Professional power steering fluid service in Birmingham, AL. Keep your steering smooth and responsive with fresh power steering fluid.',
  keywords: [
    'power steering fluid',
    'power steering service',
    'steering maintenance',
    'Newport TN',
    'hydraulic steering',
    'steering system service'
  ],
}

const serviceData = {
  title: "Power Steering Fluid Service",
  subtitle: "Smooth, Responsive Steering Performance",
  description: "Maintain easy, responsive steering with our power steering fluid service. Fresh fluid keeps your steering system operating smoothly and prevents costly pump damage.",
  image: "/NewportPitstop/pexels/oil_change.webp",
  startingPrice: "Starting at $87.49+",
  duration: "30 minutes",
  
  features: [
    "Complete power steering fluid exchange",
    "Power steering pump inspection", 
    "Belt and pulley examination",
    "Hose and connection check",
    "Steering rack inspection",
    "Fluid leak detection",
    "Steering performance test",
    "Proper fluid level adjustment"
  ],
  
  serviceTypes: [
    {
      name: "Power Steering Fluid Exchange",
      price: "$87.49",
      description: "Complete fluid exchange with standard power steering fluid",
      bestFor: "Regular maintenance, most vehicles"
    },
    {
      name: "Power Steering System Service", 
      price: "$112.49",
      description: "Comprehensive service including pump and rack inspection",
      bestFor: "High-mileage vehicles, steering issues"
    },
    {
      name: "Performance Steering Fluid",
      price: "$99.99",
      description: "High-performance fluid for racing and modified vehicles",
      bestFor: "Performance cars, racing applications, heavy-duty use"
    }
  ],
  
  process: [
    "Power steering system inspection and fluid condition check",
    "Test steering pump operation and belt condition",
    "Remove old fluid from reservoir and system",
    "Inspect hoses, connections, and rack for leaks", 
    "Refill with fresh power steering fluid",
    "Bleed system and check for proper operation",
    "Test steering feel and responsiveness"
  ],
  
  faqs: [
    {
      question: "How often should power steering fluid be changed?",
      answer: "Most manufacturers recommend power steering fluid service every 50,000-100,000 miles, or if the fluid becomes dark and contaminated."
    },
    {
      question: "What are signs of power steering problems?",
      answer: "Warning signs include hard steering, whining noises, fluid leaks, or steering that pulls to one side. These issues often indicate the need for service."
    },
    {
      question: "Can you fix power steering leaks?",
      answer: "We can diagnose leaks and provide repair estimates. Minor hose leaks can often be repaired, while pump or rack issues may require more extensive service."
    },
    {
      question: "Do you service electric power steering?",
      answer: "Electric power steering systems don't use fluid, but we can diagnose electrical steering issues and recommend appropriate service."
    }
  ],
  
  warranty: "We provide a 12-month/12,000-mile warranty on power steering fluid services.",
  
  relatedServices: [
    { name: "Brake Fluid Service", href: "/services/brake-fluid" },
    { name: "Transmission Fluid", href: "/services/transmission-fluid" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function PowerSteeringPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}