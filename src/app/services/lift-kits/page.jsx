import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Lift Kit Installation | OEM Radio Repair',
  description: 'Professional lift kit installation services in Birmingham, AL. Suspension lifts, body lifts, and custom modifications for trucks and SUVs.',
  keywords: [
    'lift kit installation',
    'suspension lift',
    'body lift',
    'Newport TN',
    'truck modification',
    'SUV lift kit'
  ],
}

const serviceData = {
  title: "Lift Kit Installation",
  subtitle: "Professional Vehicle Lifting & Suspension Modification",
  description: "Enhance your truck or SUV's capabilities with our professional lift kit installation services. From suspension lifts to body lifts, we provide expert installation for improved ground clearance and off-road performance.",
  image: "/NewportPitstop/pexels/lift_kits.webp",
  startingPrice: "Starting at $1,124.99+",
  duration: "4-6 hours",
  
  features: [
    "Professional suspension lift installation",
    "Body lift kit installation", 
    "Complete alignment service included",
    "Shock and strut upgrades",
    "Extended brake lines when needed",
    "Driveline modifications if required",
    "Quality lift kit components",
    "Post-installation inspection and test drive"
  ],
  
  serviceTypes: [
    {
      name: "2-3 Inch Suspension Lift",
      price: "$1,124.99",
      description: "Moderate lift for improved clearance and mild off-road capability",
      bestFor: "Daily driving with light off-road use, improved appearance"
    },
    {
      name: "4-6 Inch Suspension Lift", 
      price: "$1,624.99",
      description: "Significant lift for serious off-road capability and larger tires",
      bestFor: "Off-road enthusiasts, larger tire fitment, maximum capability"
    },
    {
      name: "Body Lift Kit (2-3 inch)",
      price: "$749.99",
      description: "Cost-effective lift using body spacers for tire clearance",
      bestFor: "Budget-conscious lifting, tire clearance, maintaining ride quality"
    },
    {
      name: "Complete Lift Package",
      price: "$2,374.99",
      description: "Comprehensive lift with shocks, extended lines, and alignment",
      bestFor: "Maximum performance, complete transformation, serious off-roading"
    }
  ],
  
  process: [
    "Vehicle inspection and lift kit compatibility verification",
    "Disassemble suspension components safely",
    "Install lift kit components with proper torque specifications",
    "Extend or replace brake lines and other components as needed", 
    "Install upgraded shocks and struts",
    "Perform complete wheel alignment",
    "Road test and final inspection for safety and performance"
  ],
  
  faqs: [
    {
      question: "Will a lift kit affect my vehicle's warranty?",
      answer: "Lift kits may affect certain warranty coverage. We recommend checking with your dealer. Properly installed lifts typically don't void the entire warranty."
    },
    {
      question: "How does a lift kit affect ride quality?",
      answer: "Suspension lifts may slightly firm up the ride, while body lifts maintain original ride quality. Quality components minimize any negative effects."
    },
    {
      question: "Can I fit larger tires after a lift?",
      answer: "Yes, that's one of the main benefits. We can recommend appropriate tire sizes for your specific lift and help with fitment."
    },
    {
      question: "Do you provide alignment after installation?",
      answer: "Yes, proper alignment is included with all suspension lift installations to ensure safe handling and tire wear."
    }
  ],
  
  warranty: "We provide a 12-month/12,000-mile warranty on lift kit installations and components.",
  
  relatedServices: [
    { name: "Bumper Installation", href: "/services/bumpers" },
    { name: "Performance Services", href: "/services/performance-oil" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function LiftKitsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}