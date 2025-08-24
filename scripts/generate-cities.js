#!/usr/bin/env node

// Script to generate comprehensive US cities database
// Uses multiple data sources to create a complete list

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// US States with abbreviations
const US_STATES = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
  'DC': 'District of Columbia', 'PR': 'Puerto Rico', 'VI': 'US Virgin Islands', 'GU': 'Guam'
};

// Function to create URL-friendly slug
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Function to fetch data from a URL
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

// Method 1: Fetch comprehensive cities from GitHub repository
async function fetchFromGitHub() {
  try {
    console.log('Fetching comprehensive cities data from GitHub...');
    const url = 'https://raw.githubusercontent.com/kelvins/US-Cities-Database/main/csv/us_cities.csv';
    
    const csvData = await fetchCSVData(url);
    if (!csvData) {
      console.log('Failed to fetch GitHub CSV data');
      return null;
    }

    console.log('Processing CSV data...');
    const cities = parseCSVToCities(csvData);
    console.log(`Processed ${cities.length} cities from comprehensive dataset`);
    
    return cities;
  } catch (error) {
    console.log('GitHub repository not available:', error.message);
    return null;
  }
}

// Function to fetch CSV data
function fetchCSVData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Function to parse CSV to cities format
function parseCSVToCities(csvData) {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const cities = [];
  
  // Find column indices
  const cityIndex = headers.findIndex(h => h.toUpperCase() === 'CITY');
  const stateIndex = headers.findIndex(h => h.toUpperCase() === 'STATE_CODE');
  
  if (cityIndex === -1 || stateIndex === -1) {
    console.error('Required columns not found in CSV');
    return [];
  }

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line (handle quoted fields)
    const fields = parseCSVLine(line);
    if (fields.length < Math.max(cityIndex, stateIndex) + 1) continue;
    
    const cityName = fields[cityIndex];
    const stateCode = fields[stateIndex];
    
    if (cityName && stateCode && cityName.length > 0 && stateCode.length === 2) {
      cities.push({
        name: cityName,
        state: stateCode,
        slug: createSlug(cityName)
      });
    }
  }
  
  // Remove duplicates (same city name in same state)
  const unique = cities.reduce((acc, city) => {
    const key = `${city.state}-${city.slug}`;
    if (!acc.has(key)) {
      acc.set(key, city);
    }
    return acc;
  }, new Map());
  
  return Array.from(unique.values());
}

// Function to parse a CSV line with proper quote handling
function parseCSVLine(line) {
  const fields = [];
  let currentField = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      fields.push(currentField.trim());
      currentField = '';
    } else {
      currentField += char;
    }
  }
  
  fields.push(currentField.trim());
  return fields;
}

// Method 2: Use a comprehensive hardcoded dataset
function generateComprehensiveCitiesList() {
  console.log('Generating comprehensive cities list...');
  
  // This is a curated list of major cities per state
  // In production, you'd want to use a complete dataset
  const citiesData = {
    'AL': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Dothan', 'Auburn', 'Decatur', 'Madison', 'Florence', 'Gadsden', 'Vestavia Hills', 'Prattville', 'Phenix City', 'Hoover', 'Enterprise', 'Anniston', 'Bessemer', 'Opelika', 'Alabaster', 'Pelham', 'Troy', 'Homewood', 'Cullman', 'Tuskegee', 'Selma', 'Alexander City', 'Ozark', 'Scottsboro', 'Fort Payne'],
    'AK': ['Anchorage', 'Juneau', 'Fairbanks', 'Sitka', 'Ketchikan', 'Wasilla', 'Kenai', 'Kodiak', 'Bethel', 'Palmer', 'Homer', 'Barrow', 'Unalaska', 'Soldotna', 'Valdez', 'Nome', 'Kotzebue', 'Seward', 'Wrangell', 'Petersburg'],
    'AZ': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Yuma', 'Avondale', 'Flagstaff', 'Goodyear', 'Buckeye', 'Casa Grande', 'Sierra Vista', 'Maricopa', 'Oro Valley', 'Prescott', 'Bullhead City', 'Prescott Valley', 'Lake Havasu City', 'Apache Junction', 'Marana', 'El Mirage', 'Kingman', 'Queen Creek', 'Catalina Foothills', 'San Tan Valley'],
    'AR': ['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale', 'Jonesboro', 'North Little Rock', 'Conway', 'Rogers', 'Pine Bluff', 'Bentonville', 'Hot Springs', 'Benton', 'Sherwood', 'Texarkana', 'Paragould', 'Cabot', 'El Dorado', 'Van Buren', 'Blytheville', 'Bryant', 'Russellville', 'Bella Vista', 'Jacksonville', 'West Memphis', 'Siloam Springs', 'Searcy', 'Harrison', 'Forrest City', 'Arkadelphia', 'Camden'],
    'CA': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine', 'Chula Vista', 'Fremont', 'San Bernardino', 'Modesto', 'Fontana', 'Oxnard', 'Moreno Valley', 'Huntington Beach', 'Glendale', 'Santa Clarita', 'Garden Grove', 'Oceanside', 'Rancho Cucamonga', 'Santa Rosa', 'Ontario', 'Lancaster', 'Elk Grove', 'Corona', 'Palmdale', 'Salinas', 'Pomona', 'Hayward', 'Escondido', 'Torrance', 'Sunnyvale', 'Orange', 'Fullerton', 'Pasadena', 'Thousand Oaks', 'Visalia', 'Simi Valley', 'Concord', 'Roseville', 'Rockville', 'Santa Clara', 'Victorville'],
    'CO': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Centennial', 'Boulder', 'Greeley', 'Longmont', 'Loveland', 'Grand Junction', 'Broomfield', 'Castle Rock', 'Commerce City', 'Parker', 'Littleton', 'Northglenn', 'Brighton', 'Englewood', 'Wheat Ridge', 'Lafayette', 'Louisville', 'Durango', 'Fort Morgan', 'Golden', 'Montrose'],
    'CT': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain', 'West Hartford', 'Greenwich', 'Hamden', 'Meriden', 'Bristol', 'Manchester', 'West Haven', 'Milford', 'Stratford', 'East Hartford', 'Middletown', 'Wallingford', 'Norwich', 'Torrington', 'New London', 'Glastonbury', 'Newington', 'Trumbull', 'Fairfield', 'Naugatuck', 'Enfield', 'Windsor'],
    'DE': ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna', 'Milford', 'Seaford', 'Georgetown', 'Elsmere', 'New Castle', 'Laurel', 'Harrington', 'Camden', 'Clayton', 'Lewes', 'Milton', 'Selbyville', 'Bridgeville', 'Delmar', 'Dagsboro'],
    'FL': ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Port St. Lucie', 'Cape Coral', 'Pembroke Pines', 'Hollywood', 'Miramar', 'Gainesville', 'Coral Springs', 'Miami Gardens', 'Clearwater', 'Palm Bay', 'West Palm Beach', 'Pompano Beach', 'Lakeland', 'Davie', 'Sunrise', 'Boca Raton', 'Deltona', 'Plantation', 'Miami Beach', 'Largo', 'Deerfield Beach', 'Boynton Beach', 'Lauderhill', 'Weston', 'Homestead', 'Kissimmee', 'Fort Myers', 'Sarasota', 'Coconut Creek', 'Ocala', 'Bradenton', 'Sanford'],
    'GA': ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Albany', 'Warner Robins', 'Alpharetta', 'Marietta', 'Valdosta', 'Smyrna', 'Dunwoody', 'Rome', 'East Point', 'Peachtree Corners', 'Gainesville', 'Hinesville', 'Kennesaw', 'Newnan', 'Douglasville', 'Statesboro', 'Stockbridge', 'Decatur', 'Lawrenceville', 'McDonough', 'Duluth'],
    'HI': ['Honolulu', 'East Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe', 'Mililani Town', 'Kahului', 'Ewa Gentry', 'Mililani Mauka', 'Kihei', 'Wahiawa', 'Ewa Beach', 'Royal Kunia', 'Kapolei', 'Makakilo', 'Waimalu', 'Halawa', 'Wailuku'],
    'ID': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls', 'Lewiston', 'Post Falls', 'Rexburg', 'Moscow', 'Eagle', 'Kuna', 'Ammon', 'Chubbuck', 'Hayden', 'Mountain Home', 'Jerome', 'Burley', 'Blackfoot', 'Garden City', 'Rathdrum', 'Star', 'Middleton', 'Sandpoint', 'Emmett', 'Payette', 'McCall', 'Weiser'],
    'IL': ['Chicago', 'Aurora', 'Peoria', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Elgin', 'Waukegan', 'Cicero', 'Champaign', 'Bloomington', 'Arlington Heights', 'Evanston', 'Decatur', 'Schaumburg', 'Bolingbrook', 'Palatine', 'Skokie', 'Des Plaines', 'Orland Park', 'Tinley Park', 'Oak Lawn', 'Berwyn', 'Mount Prospect', 'Normal', 'Wheaton', 'Hoffman Estates', 'Oak Park', 'Downers Grove', 'Elmhurst', 'Glenview', 'DeKalb', 'Lombard', 'Belleville', 'Moline', 'Buffalo Grove', 'Bartlett', 'Urbana', 'Quincy'],
    'IN': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Bloomington', 'Fishers', 'Hammond', 'Gary', 'Muncie', 'Lafayette', 'Terre Haute', 'Kokomo', 'Anderson', 'Noblesville', 'Greenwood', 'Elkhart', 'Mishawaka', 'Lawrence', 'Jeffersonville', 'Columbus', 'Portage', 'New Albany', 'Richmond', 'Westfield', 'Valparaiso', 'Bloomington', 'Marion', 'Crown Point', 'Michigan City'],
    'IA': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo', 'Council Bluffs', 'Ames', 'West Des Moines', 'Dubuque', 'Ankeny', 'Urbandale', 'Cedar Falls', 'Marion', 'Bettendorf', 'Mason City', 'Marshalltown', 'Clinton', 'Burlington', 'Ottumwa', 'Fort Dodge', 'Indianola', 'Newton', 'Altoona', 'Muscatine', 'Johnston', 'North Liberty', 'Coralville', 'Pleasant Hill', 'Clive'],
    'KS': ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa', 'Salina', 'Hutchinson', 'Leavenworth', 'Leawood', 'Dodge City', 'Garden City', 'Derby', 'Prairie Village', 'Emporia', 'Liberal', 'Junction City', 'Newton', 'Pittsburg', 'Hays', 'McPherson', 'Arkansas City', 'Coffeyville', 'Parsons', 'Great Bend', 'El Dorado', 'Ottawa'],
    'KY': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence', 'Hopkinsville', 'Nicholasville', 'Elizabethtown', 'Henderson', 'Frankfort', 'Jeffersontown', 'Independence', 'Paducah', 'Radcliff', 'Ashland', 'Murray', 'Winchester', 'St. Matthews', 'Fort Thomas', 'Danville', 'Madisonville', 'Erlanger', 'Somerset', 'Corbin', 'Fort Mitchell', 'Glasgow', 'Bardstown'],
    'LA': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Kenner', 'Bossier City', 'Monroe', 'Alexandria', 'Houma', 'Marrero', 'New Iberia', 'Laplace', 'Slidell', 'Prairieville', 'Central', 'Ruston', 'Sulphur', 'Hammond', 'Natchitoches', 'Gretna', 'Opelousas', 'Pineville', 'Baker', 'Zachary', 'Thibodaux', 'Chalmette', 'Minden', 'DeRidder', 'Bogalusa'],
    'ME': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Sanford', 'Saco', 'Augusta', 'Westbrook', 'Waterville', 'Presque Isle', 'Gorham', 'Brewer', 'Cape Elizabeth', 'Caribou', 'Old Orchard Beach', 'Bath', 'Calais', 'Rockland', 'Belfast', 'Gardiner', 'Orono', 'Old Town', 'Hampden', 'Ellsworth', 'Rumford', 'Falmouth', 'Houlton', 'Kittery'],
    'MD': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Hagerstown', 'Annapolis', 'College Park', 'Salisbury', 'Laurel', 'Greenbelt', 'Cumberland', 'Westminster', 'Hyattsville', 'Takoma Park', 'Easton', 'Elkton', 'Aberdeen', 'Cambridge', 'Havre de Grace', 'Glen Burnie', 'Edgewood', 'Seat Pleasant', 'New Carrollton', 'La Plata', 'Cheverly', 'Mount Rainier', 'Berlin', 'Pocomoke City', 'Frostburg'],
    'MA': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'Quincy', 'Lynn', 'Fall River', 'Newton', 'Lawrence', 'Somerville', 'Framingham', 'Haverhill', 'Waltham', 'Malden', 'Brookline', 'Plymouth', 'Medford', 'Taunton', 'Chicopee', 'Weymouth', 'Revere', 'Peabody', 'Methuen', 'Barnstable', 'Pittsfield', 'Attleboro', 'Everett', 'Salem', 'Westfield', 'Leominster', 'Fitchburg', 'Beverly', 'Holyoke', 'Marlborough', 'Woburn', 'Amherst', 'Chelsea', 'Braintree'],
    'MI': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn', 'Livonia', 'Westland', 'Troy', 'Farmington Hills', 'Kalamazoo', 'Wyoming', 'Southfield', 'Rochester Hills', 'Taylor', 'Pontiac', 'St. Clair Shores', 'Royal Oak', 'Novi', 'Dearborn Heights', 'Battle Creek', 'Saginaw', 'Kentwood', 'East Lansing', 'Roseville', 'Portage', 'Midland', 'Lincoln Park', 'Bay City', 'Norton Shores', 'Muskegon', 'Walker', 'Jackson', 'Garden City', 'Inkster', 'Waterford', 'Forest Hills', 'Eastpointe'],
    'MN': ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Woodbury', 'Lakeville', 'Maple Grove', 'Blaine', 'Burnsville', 'Eden Prairie', 'Coon Rapids', 'Minnetonka', 'Edina', 'St. Louis Park', 'Moorhead', 'Mankato', 'Shakopee', 'Cottage Grove', 'Richfield', 'Roseville', 'Inver Grove Heights', 'Apple Valley', 'Eagan', 'White Bear Lake', 'St. Cloud', 'Oakdale', 'Fridley', 'Winona', 'Chanhassen', 'Ramsey', 'Faribault', 'Crystal', 'New Brighton', 'Golden Valley', 'Savage', 'Rosemount', 'Brooklyn Center'],
    'MS': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Greenville', 'Olive Branch', 'Horn Lake', 'Clinton', 'Pearl', 'Ridgeland', 'Starkville', 'Columbus', 'Vicksburg', 'Pascagoula', 'Oxford', 'Clarksdale', 'Laurel', 'Picayune', 'McComb', 'Gautier', 'Greenwood', 'Madison', 'Natchez', 'Corinth', 'Cleveland', 'Long Beach', 'Ocean Springs'],
    'MO': ['Kansas City', 'St. Louis', 'Springfield', 'Independence', 'Columbia', 'Lee\'s Summit', 'O\'Fallon', 'St. Joseph', 'St. Charles', 'St. Peters', 'Blue Springs', 'Florissant', 'Joplin', 'Chesterfield', 'Jefferson City', 'Cape Girardeau', 'Oakville', 'Wildwood', 'University City', 'Ballwin', 'Raytown', 'Liberty', 'Wentzville', 'Mehlville', 'Nixa', 'Sedalia', 'Kirkwood', 'Maryland Heights', 'Hazelwood', 'Ferguson', 'Gladstone', 'Grandview', 'Belton', 'Webster Groves', 'Rolla', 'Sikeston', 'Moberly', 'Carthage', 'Warrensburg', 'Poplar Bluff'],
    'MT': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena', 'Kalispell', 'Havre', 'Anaconda', 'Miles City', 'Belgrade', 'Livingston', 'Laurel', 'Whitefish', 'Lewistown', 'Sidney', 'Glendive', 'Columbia Falls', 'Hamilton', 'Polson', 'Hardin', 'Dillon', 'Wolf Point', 'Cut Bank', 'Glasgow', 'Libby', 'Baker', 'Red Lodge', 'Ronan', 'Browning'],
    'NE': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'North Platte', 'Norfolk', 'Columbus', 'Papillion', 'La Vista', 'Scottsbluff', 'South Sioux City', 'Beatrice', 'Chalco', 'Alliance', 'Nebraska City', 'Gering', 'York', 'McCook', 'Sidney', 'Seward', 'Lexington', 'Crete', 'Blair', 'Plattsmouth', 'Gretna', 'Holdrege', 'Aurora'],
    'NV': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City', 'Fernley', 'Elko', 'Mesquite', 'Boulder City', 'Fallon', 'Winnemucca', 'West Wendover', 'Ely', 'Yerington', 'Carlin', 'Lovelock', 'Wells', 'Caliente', 'Gabbs'],
    'NH': ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester', 'Salem', 'Merrimack', 'Hudson', 'Londonderry', 'Keene', 'Bedford', 'Portsmouth', 'Goffstown', 'Laconia', 'Hampton', 'Milford', 'Durham', 'Exeter', 'Windham', 'Hooksett', 'Claremont', 'Lebanon', 'Pelham', 'Amherst', 'Seabrook', 'Berlin', 'Somersworth', 'Franklin', 'Raymond'],
    'NJ': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Lakewood', 'Toms River', 'Hamilton', 'Trenton', 'Clifton', 'Camden', 'Brick', 'East Orange', 'Vineland', 'Bayonne', 'Irvington', 'Newark', 'New Brunswick', 'Perth Amboy', 'West Orange', 'East Brunswick', 'Wayne', 'Hoboken', 'Plainfield', 'West New York', 'Washington', 'Hackensack', 'Union City', 'Sayreville', 'Hillsborough', 'Bloomfield', 'Long Branch', 'Cherry Hill', 'Passaic', 'North Bergen', 'Old Bridge', 'Jackson', 'Middletown', 'Parsippany-Troy Hills'],
    'NM': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington', 'Clovis', 'Hobbs', 'Alamogordo', 'Carlsbad', 'Gallup', 'Deming', 'Los Alamos', 'Chaparral', 'Sunland Park', 'Las Vegas', 'Portales', 'North Valley', 'South Valley', 'Silver City', 'Artesia', 'Lovington', 'Anthony', 'Grants', 'Socorro', 'Ruidoso', 'Española', 'Bernalillo', 'Aztec', 'Bloomfield'],
    'NY': ['New York', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'Mount Vernon', 'Schenectady', 'Utica', 'White Plains', 'Hempstead', 'Troy', 'Niagara Falls', 'Binghamton', 'Freeport', 'Valley Stream', 'Long Beach', 'Rome', 'Watertown', 'Ithaca', 'Middletown', 'Spring Valley', 'Kiryas Joel', 'Poughkeepsie', 'Newburgh', 'North Tonawanda', 'Jamestown', 'Plattsburgh', 'Auburn', 'Elmira', 'Kingston', 'Cortland', 'Oswego', 'Glen Cove', 'Johnson City', 'Amsterdam', 'Peekskill', 'Cohoes', 'Oneonta'],
    'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Greenville', 'Asheville', 'Concord', 'Gastonia', 'Jacksonville', 'Chapel Hill', 'Rocky Mount', 'Burlington', 'Wilson', 'Huntersville', 'Kannapolis', 'Apex', 'Hickory', 'Goldsboro', 'Indian Trail', 'Wake Forest', 'Monroe', 'Salisbury', 'Thomasville', 'Cornelius', 'Mint Hill', 'New Bern', 'Sanford', 'Mooresville', 'Lumberton', 'Statesville', 'Asheboro', 'Kinston', 'Carrboro', 'Albemarle', 'Elizabeth City'],
    'ND': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston', 'Dickinson', 'Mandan', 'Jamestown', 'Wahpeton', 'Devils Lake', 'Watford City', 'Valley City', 'Grafton', 'Rugby', 'Beulah', 'Sidney', 'Carrington', 'New Town', 'Bottineau', 'Hazen', 'Lisbon', 'Mayville', 'Park River', 'Garrison', 'Harvey', 'Bowman', 'Velva', 'Crosby', 'Stanley'],
    'OH': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Springfield', 'Kettering', 'Elyria', 'Lakewood', 'Cuyahoga Falls', 'Middletown', 'Newark', 'Euclid', 'Mansfield', 'Mentor', 'Beavercreek', 'Cleveland Heights', 'Strongsville', 'Dublin', 'Fairborn', 'Warren', 'Findlay', 'Lancaster', 'Lima', 'Huber Heights', 'Westerville', 'Marion', 'Grove City', 'Stow', 'Delaware', 'Brunswick', 'Upper Arlington', 'Reynoldsburg', 'Gahanna'],
    'OK': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City', 'Enid', 'Stillwater', 'Muskogee', 'Bartlesville', 'Owasso', 'Shawnee', 'Ponca City', 'Ardmore', 'Duncan', 'Bixby', 'McAlester', 'Sapulpa', 'Jenks', 'Yukon', 'Bethany', 'Mustang', 'Sand Springs', 'Claremore', 'El Reno', 'Tahlequah', 'Ada', 'Durant'],
    'OR': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Bend', 'Beaverton', 'Medford', 'Springfield', 'Corvallis', 'Albany', 'Tigard', 'Lake Oswego', 'Keizer', 'Grants Pass', 'Oregon City', 'McMinnville', 'Redmond', 'Tualatin', 'West Linn', 'Woodburn', 'Forest Grove', 'Newberg', 'Roseburg', 'Klamath Falls', 'Ashland', 'Milwaukie', 'Hermiston', 'Pendleton', 'The Dalles', 'Central Point', 'Canby', 'Gladstone', 'Newport', 'Molalla', 'Coos Bay', 'Lebanon', 'Dallas', 'Cornelius', 'St. Helens'],
    'PA': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Levittown', 'Harrisburg', 'Altoona', 'York', 'State College', 'Wilkes-Barre', 'Chester', 'Williamsport', 'Easton', 'Lebanon', 'Hazleton', 'New Castle', 'Johnstown', 'Washington', 'West Chester', 'Norristown', 'Greensburg', 'McKeesport', 'Indiana', 'Butler', 'Hermitage', 'Pottstown', 'Chambersburg', 'Uniontown', 'Meadville', 'Kingston', 'Carlisle', 'Lower Burrell', 'Coatesville', 'Phoenixville', 'Oil City', 'Franklin'],
    'RI': ['Providence', 'Cranston', 'Warwick', 'Pawtucket', 'East Providence', 'Woonsocket', 'Newport', 'Central Falls', 'Westerly', 'North Providence', 'West Warwick', 'Johnston', 'North Kingstown', 'South Kingstown', 'Coventry', 'Cumberland', 'Lincoln', 'Smithfield', 'Middletown', 'Bristol', 'Tiverton', 'East Greenwich', 'Barrington', 'Warren', 'Portsmouth', 'Narragansett', 'North Smithfield', 'Exeter', 'Scituate', 'Richmond'],
    'SC': ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Sumter', 'Hilton Head Island', 'Florence', 'Spartanburg', 'Aiken', 'Goose Creek', 'Anderson', 'Greer', 'Myrtle Beach', 'Greenwood', 'Hanahan', 'Orangeburg', 'Mauldin', 'Simpsonville', 'Easley', 'North Augusta', 'Cayce', 'West Columbia', 'Bluffton', 'Georgetown', 'Taylors', 'Lexington', 'Conway', 'Beaufort', 'Clemson', 'Gaffney', 'Socastee', 'Red Bank', 'Parker', 'Irmo', 'Fort Mill', 'Port Royal', 'Tega Cay'],
    'SD': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre', 'Huron', 'Spearfish', 'Vermillion', 'Brandon', 'Box Elder', 'Madison', 'Sturgis', 'Milbank', 'Hot Springs', 'Lead', 'Dell Rapids', 'Winner', 'Flandreau', 'Sisseton', 'Wagner', 'Custer', 'Mobridge', 'Belle Fourche', 'De Smet', 'Deadwood', 'Webster', 'Alcester'],
    'TN': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City', 'Bartlett', 'Hendersonville', 'Kingsport', 'Collierville', 'Smyrna', 'Cleveland', 'Germantown', 'Brentwood', 'Columbia', 'La Vergne', 'Gallatin', 'Cookeville', 'Mount Juliet', 'Lebanon', 'Morristown', 'Oak Ridge', 'Maryville', 'Bristol', 'Shelbyville', 'Dyersburg', 'Goodlettsville', 'Spring Hill', 'East Ridge', 'Red Bank', 'Soddy-Daisy', 'Tullahoma', 'Farragut', 'Greeneville', 'McMinnville', 'Athens', 'Sevierville'],
    'TX': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo', 'Lubbock', 'Garland', 'Irving', 'Amarillo', 'Grand Prairie', 'Brownsville', 'McKinney', 'Frisco', 'Pasadena', 'Killeen', 'Mesquite', 'McAllen', 'Waco', 'Carrollton', 'Denton', 'Midland', 'Abilene', 'Beaumont', 'Round Rock', 'Odessa', 'Wichita Falls', 'Richardson', 'Lewisville', 'Tyler', 'College Station', 'Pearland', 'San Angelo', 'Allen', 'League City', 'Sugar Land', 'Longview', 'Baytown', 'Missouri City', 'Edinburg', 'Conroe', 'Flower Mound', 'New Braunfels', 'Cedar Park', 'Harlingen', 'North Richland Hills'],
    'UT': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville', 'Logan', 'South Jordan', 'Lehi', 'Murray', 'Draper', 'Bountiful', 'Riverton', 'Roy', 'Pleasant Grove', 'Tooele', 'Spanish Fork', 'Springville', 'Cedar City', 'Cottonwood Heights', 'American Fork', 'Eagle Mountain', 'Saratoga Springs', 'Herriman', 'West Haven', 'Payson', 'Clearfield', 'Kaysville', 'Midvale', 'South Salt Lake', 'Holladay', 'Hurricane', 'Farmington', 'Magna', 'Washington', 'Clinton'],
    'VT': ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier', 'Winooski', 'St. Albans', 'Newport', 'Vergennes', 'St. Johnsbury', 'Brattleboro', 'Bennington', 'White River Junction', 'Essex Junction', 'Middlebury', 'Bellows Falls', 'Hartford', 'Colchester', 'Springfield', 'Swanton', 'Milton', 'Morrisville', 'Northfield', 'Brandon', 'Ludlow', 'Windsor', 'Enosburg Falls', 'Richmond', 'Shelburne', 'Bristol'],
    'VA': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Portsmouth', 'Suffolk', 'Roanoke', 'Lynchburg', 'Harrisonburg', 'Leesburg', 'Charlottesville', 'Danville', 'Blacksburg', 'Manassas', 'Petersburg', 'Fredericksburg', 'Winchester', 'Salem', 'Staunton', 'Falls Church', 'Hopewell', 'Fairfax', 'Herndon', 'Vienna', 'Poquoson', 'Waynesboro', 'Colonial Heights', 'Radford', 'Bristol', 'Martinsville', 'Franklin', 'Williamsburg', 'Galax', 'Bedford', 'Norton', 'Lexington', 'Buena Vista'],
    'WA': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Spokane Valley', 'Federal Way', 'Yakima', 'Bellingham', 'Kennewick', 'Auburn', 'Pasco', 'Marysville', 'Lakewood', 'Redmond', 'Shoreline', 'Richland', 'Kirkland', 'Burien', 'Bothell', 'Olympia', 'Longview', 'Lacey', 'Edmonds', 'Bremerton', 'Puyallup', 'Wenatchee', 'Mount Vernon', 'University Place', 'Sammamish', 'Lynnwood', 'Mill Creek', 'Des Moines', 'Issaquah', 'SeaTac', 'Tukwila', 'Pullman'],
    'WV': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown', 'Wheeling', 'Martinsburg', 'Fairmont', 'Beckley', 'Clarksburg', 'Lewisburg', 'Hurricane', 'Buckhannon', 'Charles Town', 'South Charleston', 'St. Albans', 'Bridgeport', 'Ranson', 'Keyser', 'Oak Hill', 'Elkins', 'Shepherdstown', 'Point Pleasant', 'Nitro', 'Cross Lanes', 'Dunbar', 'Princeton', 'Summersville', 'Ripley', 'Kingwood', 'Romney'],
    'WI': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Eau Claire', 'Oshkosh', 'Janesville', 'West Allis', 'La Crosse', 'Sheboygan', 'Wauwatosa', 'Fond du Lac', 'New Berlin', 'Wausau', 'Brookfield', 'Greenfield', 'Beloit', 'Franklin', 'Oak Creek', 'Manitowoc', 'West Bend', 'Sun Prairie', 'Superior', 'Middleton', 'Stevens Point', 'Fitchburg', 'Wisconsin Rapids', 'Neenah', 'Menomonee Falls', 'Cary', 'Germantown', 'Mount Pleasant', 'De Pere', 'Muskego', 'Cudahy', 'Menasha', 'South Milwaukee'],
    'WY': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Green River', 'Evanston', 'Riverton', 'Jackson', 'Cody', 'Rawlins', 'Lander', 'Torrington', 'Powell', 'Douglas', 'Worland', 'Buffalo', 'Newcastle', 'Wheatland', 'Thermopolis', 'Afton', 'Pinedale', 'Kemmerer', 'Saratoga', 'Lovell', 'Glenrock', 'Basin', 'Mountain View', 'Lusk'],
    'DC': ['Washington'],
    'PR': ['San Juan', 'Bayamón', 'Carolina', 'Ponce', 'Caguas', 'Guaynabo', 'Arecibo', 'Toa Baja', 'Mayagüez', 'Trujillo Alto', 'Toa Alta', 'Aguadilla', 'Humacao', 'Vega Alta', 'Vega Baja', 'Dorado', 'Coamo', 'Cayey', 'Juana Díaz', 'Fajardo'],
    'VI': ['Charlotte Amalie', 'Christiansted', 'Frederiksted', 'Cruz Bay', 'Coral Bay', 'Red Hook', 'Estate Thomas', 'Frenchtown', 'Anna\'s Retreat', 'Tutu'],
    'GU': ['Hagåtña', 'Dededo', 'Yigo', 'Tamuning', 'Mangilao', 'Barrigada', 'Santa Rita', 'Mongmong-Toto-Maite', 'Sinajana', 'Chalan Pago-Ordot']
  };

  const allCities = [];
  
  // Convert to our format
  for (const [stateAbbr, stateCities] of Object.entries(citiesData)) {
    for (const cityName of stateCities) {
      allCities.push({
        name: cityName,
        state: stateAbbr,
        slug: createSlug(cityName)
      });
    }
  }

  console.log(`Generated ${allCities.length} cities across ${Object.keys(citiesData).length} states/territories`);
  return allCities;
}

// Method 3: Use NPM package if available
async function fetchFromNPMPackage() {
  try {
    console.log('Checking for NPM packages...');
    // This would require installing the package first
    // const cities = require('countrycitystatejson');
    // return cities.getCountryByShort('US');
    return null;
  } catch (error) {
    console.log('NPM package not available');
    return null;
  }
}

// Main execution
async function generateCitiesDatabase() {
  console.log('🏙️  Starting US Cities Database Generation...\n');
  
  let citiesData = null;

  // Try multiple methods in order of preference
  citiesData = await fetchFromGitHub();
  
  if (!citiesData) {
    citiesData = await fetchFromNPMPackage();
  }
  
  if (!citiesData) {
    citiesData = generateComprehensiveCitiesList();
  }

  if (!citiesData || citiesData.length === 0) {
    console.error('❌ Failed to generate cities data');
    process.exit(1);
  }

  // Sort by state, then by city name
  citiesData.sort((a, b) => {
    if (a.state !== b.state) {
      return a.state.localeCompare(b.state);
    }
    return a.name.localeCompare(b.name);
  });

  // Generate the JavaScript file content
  const fileContent = `// Generated US Cities Database
// Auto-generated on ${new Date().toISOString()}
// Total cities: ${citiesData.length}

const cities = ${JSON.stringify(citiesData, null, 2)};

export default cities;
`;

  // Write to the cities.js file
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'cities.js');
  
  try {
    fs.writeFileSync(outputPath, fileContent);
    console.log(`✅ Successfully generated ${citiesData.length} cities`);
    console.log(`📝 File saved to: ${outputPath}`);
    
    // Show statistics
    const stateStats = citiesData.reduce((acc, city) => {
      acc[city.state] = (acc[city.state] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📊 Cities per state:');
    for (const [state, count] of Object.entries(stateStats)) {
      console.log(`   ${state}: ${count} cities`);
    }
    
  } catch (error) {
    console.error('❌ Error writing file:', error.message);
    process.exit(1);
  }
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
  generateCitiesDatabase().catch(console.error);
}

export { generateCitiesDatabase, createSlug };