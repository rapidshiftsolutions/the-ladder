// OEM Radio Repair Location Data
// Main repair facility in Birmingham, AL with nationwide mail-in service

export const mainLocation = {
  id: 1,
  name: "OEM Radio Repair - Main Facility",
  address: "2413 1st Ave S, Birmingham, AL 35233",
  coordinates: { lat: 33.5018, lng: -86.8024 },
  type: 'Main',
  hasMailInService: true,
  isShipToLocation: true,
  hours: { 
    monday: '9:00am - 5:00pm', 
    tuesday: '9:00am - 5:00pm', 
    wednesday: '9:00am - 5:00pm', 
    thursday: '9:00am - 5:00pm', 
    friday: '9:00am - 5:00pm', 
    saturday: 'closed', 
    sunday: 'closed' 
  },
  phone: "(205) 522-1162",
  email: "info@oemradiorepair.com",
  ownerTitle: "Founder",
  ownerName: "Alex Harmon",
  services: ["digitizer-replacement", "lcd-replacement", "diagnostics", "warranty-service"],
  specialties: [
    "Dodge/Chrysler/Jeep Infotainment Systems",
    "Cadillac CUE Systems", 
    "Ram Uconnect Systems",
    "Multi-generational automotive expertise"
  ]
};

// OEM Radio Repair operates as a mail-in repair service
// Customers nationwide can ship their infotainment units to our Birmingham facility
export const serviceAreas = [
  {
    id: 1,
    name: "Nationwide Mail-In Service",
    description: "We accept infotainment units from customers across the United States via prepaid shipping",
    coverage: "United States",
    shippingTime: "2-3 business days",
    repairTurnaround: "2-3 business days", 
    returnShipping: "2-3 business days",
    totalTurnaround: "6-9 business days"
  }
];

// Priority service areas based on vehicle compatibility and market presence
export const priorityVehicleMarkets = [
  "Alabama", "Georgia", "Tennessee", "Florida", "Mississippi", "South Carolina", "North Carolina"
];

// Supported shipping carriers for repair services
export const shippingCarriers = [
  {
    name: "FedEx",
    services: ["Ground", "Express", "2Day"],
    trackingEnabled: true
  },
  {
    name: "UPS",
    services: ["Ground", "Express", "2nd Day Air"],
    trackingEnabled: true
  },
  {
    name: "USPS",
    services: ["Priority Mail", "Express Mail"],
    trackingEnabled: true
  }
];

// For compatibility with existing code that might reference 'branches'
export const branches = [mainLocation];
export const locations = [mainLocation];