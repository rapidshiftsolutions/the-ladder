import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Car Audio & Sound System Installation | OEM Radio Repair',
  description: 'Professional car audio installation in Birmingham, AL. Speakers, amplifiers, subwoofers, and complete sound system upgrades for all vehicles.',
  keywords: [
    'car audio installation',
    'sound system installation',
    'speakers',
    'Newport TN',
    'car stereo',
    'subwoofer installation'
  ],
}

const serviceData = {
  title: "Car Audio & Sound System Installation",
  subtitle: "Premium Sound for Every Drive",
  description: "Upgrade your driving experience with our professional car audio installation services. From speaker upgrades to complete sound system overhauls, we deliver crystal-clear audio that transforms your vehicle into a concert hall.",
  image: "/NewportPitstop/pexels/sound_systems.webp",
  startingPrice: "Starting at $187.49+",
  duration: "2-4 hours",
  
  features: [
    "Speaker installation and upgrades",
    "Amplifier installation and tuning", 
    "Subwoofer and enclosure installation",
    "Head unit and stereo replacement",
    "Professional wiring and integration",
    "Sound deadening and acoustics",
    "Bluetooth and connectivity setup",
    "Custom installation and integration"
  ],
  
  serviceTypes: [
    {
      name: "Speaker Upgrade Package",
      price: "$187.49",
      description: "Replace factory speakers with premium aftermarket speakers",
      bestFor: "Improved sound quality, budget-friendly upgrade"
    },
    {
      name: "Amplifier & Speaker System", 
      price: "$374.99",
      description: "Amplifier installation with speaker upgrade for enhanced power",
      bestFor: "Significant sound improvement, better bass response"
    },
    {
      name: "Subwoofer Installation",
      price: "$249.99",
      description: "Subwoofer and enclosure installation with proper wiring",
      bestFor: "Deep bass, music enthusiasts, complete sound experience"
    },
    {
      name: "Complete Audio Overhaul",
      price: "$749.99",
      description: "Full system replacement with head unit, speakers, amp, and sub",
      bestFor: "Maximum sound quality, complete transformation, audiophile experience"
    }
  ],
  
  process: [
    "Audio consultation and system design planning",
    "Careful removal of factory audio components",
    "Professional installation of new components",
    "Custom wiring and integration with vehicle systems", 
    "Amplifier tuning and sound optimization",
    "Testing all functions and connectivity features",
    "Final sound tuning and customer demonstration"
  ],
  
  faqs: [
    {
      question: "Will aftermarket audio void my vehicle warranty?",
      answer: "Professional installation typically doesn't void warranties. We use proper wiring techniques and maintain factory integration where possible."
    },
    {
      question: "Can you integrate with my vehicle's existing controls?",
      answer: "Yes, we specialize in maintaining steering wheel controls, factory displays, and other integrated features during audio upgrades."
    },
    {
      question: "How much power do I need for my sound system?",
      answer: "Power needs vary by vehicle size and listening preferences. We'll assess your needs and recommend appropriate amplification."
    },
    {
      question: "Do you install customer-provided equipment?",
      answer: "Yes, we can install equipment you provide, though we recommend professional-grade components for best results and reliability."
    }
  ],
  
  warranty: "We provide a 12-month warranty on audio installations and honor manufacturer warranties on components.",
  
  relatedServices: [
    { name: "Lighting Installation", href: "/services/lighting" },
    { name: "Performance Services", href: "/services/performance-oil" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function SoundSystemsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}