"use client";

import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer-newport';
import ServicePageContent from '/src/components/service-page-content';

export default function AlignmentsPage() {
  const serviceData = {
    title: "Wheel Alignments",
    subtitle: "Precision Alignment Services",
    description: "Precision wheel alignment services using state-of-the-art equipment for optimal performance and tire life",
    image: "/NewportPitstop/pexels/wheels_and_tires.webp",
    startingPrice: "$124.99+",
    duration: "1-2 hours",
    
    features: [
      "Computerized alignment system",
      "Pre and post alignment printout",
      "Suspension inspection",
      "Tire pressure adjustment",
      "Steering wheel centering",
      "Test drive verification"
    ],
    
    serviceTypes: [
      {
        name: "Standard 4-Wheel Alignment",
        description: "Complete 4-wheel alignment for most passenger vehicles",
        features: [
          "Computerized alignment system",
          "Before and after printout",
          "Toe, camber, and caster adjustment", 
          "Steering wheel centering",
          "Road test included"
        ],
        price: "Starting at $125+",
        duration: "1-2 hours",
        warranty: "6 months / 6,000 miles"
      },
      {
        name: "Performance Alignment", 
        description: "Precision alignment optimized for handling and performance driving",
        features: [
          "Performance specifications",
          "Corner weight consideration",
          "Aggressive camber settings",
          "Track-focused setup",
          "Detailed measurements"
        ],
        price: "Starting at $187.50+",
        duration: "2-3 hours", 
        warranty: "6 months / 6,000 miles"
      },
      {
        name: "Lifted Vehicle Alignment",
        description: "Specialized alignment for lifted trucks and SUVs",
        features: [
          "Lift kit compensation",
          "Pinion angle correction",
          "Driveline considerations",
          "Off-road optimization",
          "Suspension inspection"
        ],
        price: "Starting at $156.25+",
        duration: "2-3 hours",
        warranty: "6 months / 6,000 miles"
      },
      {
        name: "Lowered Vehicle Alignment",
        description: "Specialized alignment for lowered and performance vehicles", 
        features: [
          "Lowered vehicle specifications",
          "Camber optimization",
          "Ride height considerations",
          "Performance tire compatibility",
          "Handling optimization"
        ],
        price: "Starting at $156.25+",
        duration: "2-3 hours",
        warranty: "6 months / 6,000 miles"
      },
      {
        name: "Thrust Angle Alignment",
        description: "Front-wheel alignment with thrust angle correction",
        features: [
          "Front toe adjustment",
          "Thrust angle measurement",
          "Steering wheel positioning",
          "Basic caster/camber check",
          "Cost-effective option"
        ],
        price: "Starting at $93.75+", 
        duration: "1 hour",
        warranty: "3 months / 3,000 miles"
      },
      {
        name: "Alignment Check/Inspection",
        description: "Comprehensive alignment measurement and inspection",
        features: [
          "Complete measurement report",
          "Suspension component inspection",
          "Tire wear analysis",
          "Recommendations provided",
          "No adjustments included"
        ],
        price: "Starting at $62.50+",
        duration: "30-45 minutes",
        warranty: "Inspection report provided"
      }
    ],
    benefits: [
      {
        title: "Extended Tire Life",
        description: "Proper alignment prevents premature and uneven tire wear"
      },
      {
        title: "Improved Handling", 
        description: "Better steering response and vehicle stability"
      },
      {
        title: "Fuel Economy",
        description: "Reduced rolling resistance improves gas mileage"
      },
      {
        title: "Safety Enhancement",
        description: "Straight tracking and predictable handling characteristics"
      }
    ],
    faqs: [
      {
        question: "How often should I get a wheel alignment?",
        answer: "We recommend checking alignment annually or every 12,000 miles. Also check after hitting potholes, curbs, or installing suspension modifications."
      },
      {
        question: "What are signs I need an alignment?",
        answer: "Uneven tire wear, vehicle pulling to one side, steering wheel off-center when driving straight, or vibration while driving are common signs."
      },
      {
        question: "Can you align my lowered/lifted vehicle?",
        answer: "Yes, we specialize in alignments for modified vehicles and can accommodate most suspension modifications with proper specifications."
      },
      {
        question: "Do you provide a warranty on alignments?",
        answer: "Yes, we provide a 6-month/6,000-mile warranty on most alignments. We'll re-check and adjust as needed within the warranty period."
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  );
}