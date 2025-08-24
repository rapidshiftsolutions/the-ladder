// src/util/helpers.js
export const isBranchOpen = (branch) => {
  // If no hours provided, return false
  if (!branch.hours) {
    return false;
  }
  
  // Get current date/time
  const now = new Date();
  
  // Get day of week in correct format to match our data
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayOfWeek = daysOfWeek[now.getDay()]; // getDay() returns 0 for Sunday, 1 for Monday, etc.
  
  // For debugging
  console.log(`Current day is: ${dayOfWeek}`);
  
  // Get today's hours from branch data
  const todaysHoursString = branch.hours ? branch.hours[dayOfWeek] : null;
  
  // If closed today or no hours for today
  if (!todaysHoursString || todaysHoursString.toLowerCase() === 'closed') {
    return false;
  }
  
  // Parse hours string (expected format: "9:00am - 5:00pm")
  try {
    const [openTimeStr, closeTimeStr] = todaysHoursString.split(' - ');
    
    // Helper to convert time string to minutes since midnight
    const parseTimeToMinutes = (timeStr) => {
      const isPM = timeStr.toLowerCase().includes('pm');
      const isAM = timeStr.toLowerCase().includes('am');
      
      // Extract hours and minutes
      let [hours, minutes] = timeStr
        .toLowerCase()
        .replace('am', '')
        .replace('pm', '')
        .trim()
        .split(':')
        .map(Number);
      
      // Convert hours to 24-hour format
      if (isPM && hours < 12) {
        hours += 12;
      } else if (isAM && hours === 12) {
        hours = 0;
      }
      
      return hours * 60 + minutes;
    };
    
    // Get current time in minutes since midnight
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;
    
    // Get open and close times in minutes
    const openTimeInMinutes = parseTimeToMinutes(openTimeStr);
    const closeTimeInMinutes = parseTimeToMinutes(closeTimeStr);
    
    // Check if current time is within open hours
    return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;
  } catch (error) {
    console.error(`Error parsing hours for branch ${branch.name}:`, error);
    return false;
  }
};

export const formatDistance = (meters) => {
  if (!meters || isNaN(meters) || !isFinite(meters) || meters === Number.MAX_VALUE) {
    return "700+ mi";
  }
  
  const miles = meters * 0.000621371; // Convert meters to miles
  
  // Cap extremely large distances
  if (miles > 1000) {
    return "1000+ mi";
  } else if (miles < 0.1) {
    return "Less than 0.1 mi";
  } else if (miles < 10) {
    return `${miles.toFixed(1)} mi`;
  } else {
    return `${Math.round(miles)} mi`;
  }
};

export const getIconForBranch = (branch) => {
  // Default icon
  let icon = {
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23164194' d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
    scaledSize: { width: 32, height: 32 },
    anchor: { x: 16, y: 32 }
  };
  
  // Icon for ATM only locations
  if (branch.isATMOnly) {
    icon.url = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23666666' d='M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z'/%3E%3C/svg%3E";
  }
  
  // Icon for main branch
  if (branch.type === 'Main') {
    icon.url = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23d4af37' d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E";
  }
  
  return icon;
};