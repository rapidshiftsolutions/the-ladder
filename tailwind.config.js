/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radio-gradient': 'linear-gradient(to right, #111827 0%, #1890ff 25%, #4b5563 50%, #1f2937 100%)',
        'newport-gradient': 'linear-gradient(135deg, #111827 0%, #1890ff 100%)',
        'newport-subtle': 'linear-gradient(180deg, rgba(24,144,255,0.1) 0%, rgba(17,24,39,0) 100%)',
        'oemradio-gradient': 'linear-gradient(135deg, #002766 0%, #1890ff 50%, #0050b3 100%)',
        'accent-gradient': 'linear-gradient(135deg, #003d00 0%, #00e600 50%, #008000 100%)',
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
        primary: {
          50: '#e6f7ff',        // lightest blue - adapted for OEM Radio Repair
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',       // OEM Radio Repair blue - main brand color
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',       // darkest blue
          dark: '#40a9ff',      // Dark mode adaptation - lighter for visibility
        },
        accent: {
          50: '#e6ffe6',        // light pastel green - adapted for better contrast
          100: '#bfffbf',
          200: '#99ff99',
          300: '#66ff66',
          400: '#33ff33',
          500: '#00e600',       // vibrant pastel green - secondary brand color
          600: '#00b300',
          700: '#008000',
          800: '#005c00',
          900: '#003d00',       // deep green accent
          dark: '#33ff33',      // Dark mode adaptation
        },
        secondary: {
          50: '#fafafa',        // lightest neutral with warmth - adapted from light colors
          100: '#f3f3f3',
          200: '#e4e4e4',
          300: '#cecece',
          400: '#a1a1a1',
          500: '#7a7a7a',       // balanced neutral
          600: '#606060',
          700: '#474747',
          800: '#313131',       // deep charcoal
          900: '#202020',       // deepest neutral
          dark: '#606060',      // Dark mode adaptation
        },
        surface: {
          50: '#fafafa',        // consistent with secondary for surfaces
          100: '#f3f3f3',
          200: '#e4e4e4',
          300: '#cecece',
          400: '#a1a1a1',
          500: '#7a7a7a',
          600: '#606060',
          700: '#474747',
          800: '#313131',       // Dark surface for cards - warmer than pure gray
          900: '#202020',       // Background dark
          dark: '#474747',      // Dark mode surface adaptation
        },
        background: {
          light: '#fafafa',     // Softer white background - warmer feel
          dark: '#202020',      // Consistent with surface-900 for cohesive dark theme
        },
        text: {
          primary: '#fafafa',   // Light text for dark backgrounds - warmer tone
          secondary: '#a1a1a1', // Muted text - better contrast than gray
          light: '#313131',     // Dark text for light backgrounds
          dark: '#f3f3f3',      // Dark mode text color - softer white
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
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
