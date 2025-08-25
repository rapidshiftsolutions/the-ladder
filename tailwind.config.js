/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'ladder-gradient': 'linear-gradient(to right, #2C3E50 0%, #34495E 50%, #E74C3C 100%)', // Primary brand gradient
        'trust-gradient': 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)', // Logo blue gradient
        'hope-gradient': 'linear-gradient(135deg, #E74C3C 0%, #F6A0A0 100%)', // Logo red gradient
        'growth-gradient': 'linear-gradient(135deg, #27AE60 0%, #4ADE80 100%)', // Growth green gradient
        'hero-gradient': 'linear-gradient(180deg, rgba(44,62,80,0.1) 0%, rgba(231,76,60,0.05) 100%)', // Subtle hero gradient
      },
      fontFamily: {
        // Default sans-serif font - Inter for all body text
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        
        // Host Grotesk for headings, buttons, and accents
        heading: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        accent: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        button: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        
        // Specific font family references
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'host-grotesk': ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        
        // Legacy font mappings for compatibility - all mapped to Host Grotesk
        exo2: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        anton: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        lacquer: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
        tiltwarp: ['var(--font-host-grotesk)', 'Host Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // The Ladder brand colors from logo
        ladder: {
          red: '#E74C3C',         // Logo red - "The" text and climbing figures
          blue: '#2C3E50',        // Logo dark blue - "LADDER" text
          'blue-light': '#34495E', // Lighter blue for hover states
          white: '#FFFFFF',       // Clean white background
          black: '#000000',       // Black for ladder structure
          green: '#27AE60',       // Success, growth - secondary color
          gold: '#F39C12',        // Hope, urgency - accent color
          purple: '#8E44AD',      // Community, support - supplementary
          teal: '#16A085',        // Wellness, balance - health/wellness
          'gray-warm': '#7F8C8D', // Body text, supporting elements
          'gray-light': '#ECF0F1', // Backgrounds, subtle sections
          'gray-medium': '#95A5A6', // Secondary text
          success: '#27AE60',     // Confirmations, achievements
          alert: '#E74C3C',       // Errors, urgent messaging (matches red)
        },
        // Primary color scale based on The Ladder logo blue
        primary: {
          50: '#F4F6F7',
          100: '#E8EBED',
          200: '#D2D7DC',
          300: '#A9B4BD',
          400: '#7F8C99',
          500: '#2C3E50',        // The Ladder logo blue - main brand color
          600: '#253544',
          700: '#1C2833',
          800: '#141C24',
          900: '#0B0F14',
          dark: '#5A6C7D',       // Dark mode adaptation - lighter for visibility
        },
        // Accent color scale based on The Ladder logo red
        accent: {
          50: '#FDF2F2',
          100: '#FCE4E4',
          200: '#FAC5C5',
          300: '#F6A0A0',
          400: '#EF6B6B',
          500: '#E74C3C',        // The Ladder logo red - accent color
          600: '#D32F2F',
          700: '#B71C1C',
          800: '#991515',
          900: '#7F1010',
          dark: '#F6A0A0',       // Dark mode adaptation
        },
        // Secondary color scale based on The Ladder green
        secondary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#27AE60',        // The Ladder green - growth/success
          600: '#16A085',
          700: '#14643A',
          800: '#0E4326',
          900: '#072113',
          dark: '#4ADE80',       // Dark mode adaptation
        },
        // Surface colors for backgrounds and cards
        surface: {
          50: '#ECF0F1',         // The Ladder gray-light
          100: '#D5DBDD',
          200: '#BDC3C7',
          300: '#A6B1B8',
          400: '#95A5A6',
          500: '#7F8C8D',        // The Ladder gray-warm
          600: '#6C7A7B',
          700: '#566568',
          800: '#34495E',
          900: '#2C3E50',
          dark: '#566568',       // Dark mode surface adaptation
        },
        background: {
          light: '#FFFFFF',      // The Ladder white
          dark: '#1A252F',       // Dark background
        },
        text: {
          primary: '#2C3E50',    // Logo blue for primary text
          secondary: '#7F8C8D',  // Gray for secondary text
          light: '#2C3E50',      // Dark text for light backgrounds
          dark: '#ECF0F1',       // Dark mode text color
        },
        success: '#10B981',      // The Ladder success green
        warning: '#F59E0B',
        error: '#EF4444',        // The Ladder alert red
      },
      borderRadius: {
        '4xl': '2rem',
        'round': '50%',
      },
    },
  },
  plugins: [
    
  ],
};
