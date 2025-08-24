// OEM Radio Repair - Vehicle Compatibility Database
// Centralized vehicle list for dynamic page generation and form population

export const vehicles = [
  // DODGE VEHICLES - Priority Brand
  {
    make: "Dodge",
    model: "Charger", 
    years: ["2011", "2012", "2013", "2014"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "dodge-charger-2011-2014",
    commonIssues: ["Ghost touching", "Cracked digitizer", "Black screen", "Unresponsive touch"],
    partNumbers: ["68105083AF", "68105083AG", "68105083AH"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Dodge",
    model: "Journey",
    years: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    screenType: "Uconnect 4C/8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "dodge-journey-2011-2019",
    commonIssues: ["Touch screen not working", "Display issues", "Frozen screen"],
    partNumbers: ["68105084AF", "68105084AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Dodge",
    model: "Challenger",
    years: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch", 
    services: ["digitizer", "lcd"],
    slug: "dodge-challenger-2011-2020",
    commonIssues: ["Cracked screen", "Touch not responding", "Display flickering"],
    partNumbers: ["68105085AF", "68105085AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Dodge",
    model: "Durango",
    years: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "dodge-durango-2011-2021",
    commonIssues: ["Screen goes black", "Touch screen failure", "Display problems"],
    partNumbers: ["68105086AF", "68105086AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },

  // CHRYSLER VEHICLES - Priority Brand
  {
    make: "Chrysler",
    model: "300",
    years: ["2011", "2012", "2013", "2014"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "chrysler-300-2011-2014",
    commonIssues: ["Digitizer cracked", "No touch response", "Screen flickering"],
    partNumbers: ["68105087AF", "68105087AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Chrysler",
    model: "Pacifica",
    years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    screenType: "Uconnect 4C",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "chrysler-pacifica-2017-2023",
    commonIssues: ["Touch screen issues", "Display problems", "System freezing"],
    partNumbers: ["68105088AF", "68105088AG"],
    installDifficulty: 4,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Chrysler",
    model: "Voyager",
    years: ["2020", "2021", "2022", "2023"],
    screenType: "Uconnect 4C",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "chrysler-voyager-2020-2023",
    commonIssues: ["Unresponsive touch", "Cracked screen", "Black display"],
    partNumbers: ["68105089AF", "68105089AG"],
    installDifficulty: 4,
    estimatedRepairTime: "2-3 days"
  },

  // JEEP VEHICLES - Priority Brand
  {
    make: "Jeep",
    model: "Wrangler JL",
    years: ["2018", "2019", "2020", "2021", "2022", "2023"],
    screenType: "Uconnect 4C",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "jeep-wrangler-jl-2018-2023",
    commonIssues: ["Screen not responding", "Cracked digitizer", "Display issues"],
    partNumbers: ["68105090AF", "68105090AG", "68105090AH"],
    installDifficulty: 4,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Jeep", 
    model: "Grand Cherokee WK",
    years: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "jeep-grand-cherokee-wk-2014-2022",
    commonIssues: ["Touch screen failure", "Frozen display", "Cracked screen"],
    partNumbers: ["68105091AF", "68105091AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Jeep",
    model: "Compass",
    years: ["2017", "2018", "2019", "2020", "2021"],
    screenType: "Uconnect 4C",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "jeep-compass-2017-2021",
    commonIssues: ["Ghost touching", "No display", "Touch not working"],
    partNumbers: ["68105092AF", "68105092AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },

  // CADILLAC VEHICLES - Priority Brand
  {
    make: "Cadillac",
    model: "CTS",
    years: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    screenType: "CUE",
    screenSize: "8 inch",
    services: ["digitizer", "lcd"],
    slug: "cadillac-cts-2013-2019",
    commonIssues: ["CUE system frozen", "Touch screen unresponsive", "Black screen"],
    partNumbers: ["23246818", "23246819", "23246820"],
    installDifficulty: 4,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Cadillac",
    model: "ATS",
    years: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    screenType: "CUE",
    screenSize: "8 inch",
    services: ["digitizer", "lcd"],
    slug: "cadillac-ats-2013-2019",
    commonIssues: ["CUE touch problems", "Display flickering", "System crashes"],
    partNumbers: ["23246821", "23246822"],
    installDifficulty: 4,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Cadillac",
    model: "Escalade",
    years: ["2015", "2016", "2017", "2018", "2019", "2020"],
    screenType: "CUE",
    screenSize: "8 inch",
    services: ["digitizer", "lcd"],
    slug: "cadillac-escalade-2015-2020", 
    commonIssues: ["CUE not responding", "Cracked touch screen", "Display issues"],
    partNumbers: ["23246823", "23246824", "23246825"],
    installDifficulty: 5,
    estimatedRepairTime: "2-3 days"
  },

  // RAM VEHICLES - Priority Brand
  {
    make: "Ram",
    model: "1500",
    years: ["2013", "2014", "2015", "2016", "2017", "2018"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch", 
    services: ["digitizer", "lcd"],
    slug: "ram-1500-2013-2018",
    commonIssues: ["Touch screen not working", "Cracked digitizer", "Black screen"],
    partNumbers: ["68105093AF", "68105093AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  },
  {
    make: "Ram",
    model: "2500/3500 HD", 
    years: ["2013", "2014", "2015", "2016", "2017", "2018"],
    screenType: "Uconnect 8.4",
    screenSize: "8.4 inch",
    services: ["digitizer", "lcd"],
    slug: "ram-2500-3500-hd-2013-2018",
    commonIssues: ["Screen goes dark", "Touch not responsive", "Display problems"],
    partNumbers: ["68105094AF", "68105094AG"],
    installDifficulty: 3,
    estimatedRepairTime: "2-3 days"
  }
];

// Service definitions
export const services = {
  digitizer: {
    name: "Digitizer Replacement",
    price: 400,
    description: "Fixes touchscreen responsiveness issues, cracked digitizer glass, and ghost touching problems",
    warranty: "1 year",
    turnaround: "2-3 business days",
    includes: ["Professional diagnosis", "OEM quality digitizer", "Installation", "Testing", "1-year warranty"]
  },
  lcd: {
    name: "LCD Replacement", 
    price: 550,
    description: "Repairs screen display issues, pixel damage, and backlight problems",
    warranty: "1 year",
    turnaround: "2-3 business days", 
    includes: ["Professional diagnosis", "OEM quality LCD", "Installation", "Testing", "1-year warranty"]
  }
};

// Competitor pricing for comparison
export const competitorPricing = {
  "infotainment.com": {
    digitizer: 799,
    lcd: 1199
  },
  "market_average": {
    digitizer: 650,
    lcd: 850
  }
};

// Calculate savings
export const calculateSavings = (service, competitor = "infotainment.com") => {
  const ourPrice = services[service].price;
  const competitorPrice = competitorPricing[competitor][service];
  const savings = competitorPrice - ourPrice;
  const percentage = Math.round((savings / competitorPrice) * 100);
  
  return {
    ourPrice,
    competitorPrice,
    savings,
    percentage
  };
};

// Group vehicles by make for navigation
export const vehiclesByMake = vehicles.reduce((acc, vehicle) => {
  if (!acc[vehicle.make]) {
    acc[vehicle.make] = [];
  }
  acc[vehicle.make].push(vehicle);
  return acc;
}, {});

// Get all unique years across all vehicles
export const allYears = [...new Set(vehicles.flatMap(v => v.years))].sort();

// Get all unique makes
export const allMakes = [...new Set(vehicles.map(v => v.make))].sort();

// Helper function to find vehicles by criteria
export const findVehicles = (filters = {}) => {
  return vehicles.filter(vehicle => {
    if (filters.make && vehicle.make !== filters.make) return false;
    if (filters.model && vehicle.model !== filters.model) return false;
    if (filters.year && !vehicle.years.includes(filters.year)) return false;
    if (filters.service && !vehicle.services.includes(filters.service)) return false;
    return true;
  });
};

// Get vehicle by slug for dynamic routing
export const getVehicleBySlug = (slug) => {
  return vehicles.find(vehicle => vehicle.slug === slug);
};

// Generate all possible slugs for sitemap
export const getAllVehicleSlugs = () => {
  return vehicles.map(vehicle => vehicle.slug);
};