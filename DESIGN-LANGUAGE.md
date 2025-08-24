# English Mountain Raceway - Official Design Language Guide

## Design Philosophy
**"Premium Performance Racing Heritage"** - Inspired by Ferrari and McLaren's luxury automotive aesthetic, combined with hardcore dragstrip authenticity. Every element conveys precision engineering, racing excellence, and professional motorsport credibility.

---

## Color System

### Primary Racing Palette
- **Primary Green**: `#22c55e` - Energy, speed, track status
- **Accent Blue**: `#3b82f6` - Technology and performance  
- **Secondary Purple**: `#a855f7` - Premium excitement
- **Background Black**: `#000000` - Maximum contrast racing feel

### Usage Guidelines
- **Primary Green**: Track status, main CTAs, racing credentials
- **Accent Blue**: Technical specs, performance data, interactive elements
- **Secondary Purple**: Special events, premium features, racing classes
- **Black/Gray**: Backgrounds, text hierarchy, card systems

---

## Typography System

### Font Stack
```css
--font-display: 'Anton', Impact, 'Arial Black', sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```

### Racing Typography Hierarchy
- **Hero Headlines**: Anton, font-black, tracking-wide, text-4xl to text-7xl
- **Section Headlines**: Anton, font-black, tracking-wide, text-3xl to text-6xl  
- **Body Text**: Inter, font-medium, text-base to text-xl
- **Racing Stats**: Anton, font-black, text-4xl to text-5xl

---

## Layout System

### Mobile-First Grid Strategy
- **Mobile**: Single column, full-width stacking
- **Desktop**: Two-column asymmetrical grid (60/40 split)
- **Container**: max-w-7xl with responsive padding px-4 sm:px-6 lg:px-8

### Spacing Scale (8px Base Grid)
- **Sections**: py-12 sm:py-16 lg:py-20
- **Component gaps**: gap-6 sm:gap-8 lg:gap-12
- **Card padding**: p-6 sm:p-8 lg:p-10

---

## Component Patterns

### Glass Morphism Cards
```css
.racing-glass-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Button System
- **Primary CTA**: bg-primary-600, shadow-lg shadow-primary-600/30
- **Secondary**: border-2 border-gray-600, hover:bg-white/5
- **Touch Targets**: min-h-[44px] py-3 px-6

### Status Indicators
- **Animated pulse**: bg-primary-400 with pulse animation
- **Glass morphism background**: bg-black/60 backdrop-blur-sm
- **Monospace labels**: font-mono tracking-wider uppercase

---

## Animation Standards

### Framer Motion Variants
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut", 
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

### Interaction Patterns
- **Hover Effects**: scale(1.05), y: -4px
- **Button Animations**: scale(1.02) on hover, scale(0.98) on tap
- **Transition Timing**: 300ms ease-out for interactions

---

## Racing-Specific Elements

### Track Status Display
- **Active Indicator**: Pulsing green dot with "Facility Active" label
- **Typography**: font-mono uppercase tracking-widest
- **Background**: Glass morphism with primary border

### Racing Statistics
- **Large Numbers**: Anton font, text-4xl to text-5xl
- **Color Coding**: Primary for track specs, accent for sanctioning, secondary for schedule
- **Layout**: Horizontal flex layout with consistent spacing

### Event Information Cards
- **Two-column layout**: Event details + pricing/location
- **Glass morphism styling**: Backdrop blur with subtle borders
- **Racing typography**: Anton for headlines, Inter for details

---

## Responsive Design Patterns

### Breakpoint Strategy
- **Mobile**: 320px+ (base styles)
- **Tablet**: 640px+ (sm:)
- **Desktop**: 1024px+ (lg:)
- **Large**: 1280px+ (xl:)

### Mobile Optimizations
- **Full-width CTAs**: w-full sm:w-auto
- **Stacked layouts**: flex-col sm:flex-row
- **Condensed spacing**: gap-4 sm:gap-6 lg:gap-8
- **Touch-friendly targets**: Minimum 44px height/width

---

## Brand Element Usage

### Logo Implementation
- **Hero Logo**: max-w-2xl (desktop), max-w-lg (mobile)
- **Navigation Logo**: h-8 md:h-10
- **Proper alt text**: "English Mountain Raceway"

### Racing Stripe Dividers
- **Height**: h-32 with gradient background
- **Stripes**: 2px accent-600 + 1px white
- **Animation**: scaleX from 0 to 1 with stagger

### Video Backgrounds
- **Fallback images**: Always provide static fallback
- **Autoplay**: muted, loop, playsInline
- **Controls**: Elegant mute toggle with backdrop blur

---

## Accessibility Standards

### Racing-Optimized Accessibility
- **High Contrast**: 4.5:1 minimum for outdoor viewing
- **Touch Targets**: 44px minimum for gloved hands
- **Motion Respect**: prefers-reduced-motion support
- **Focus States**: 3px solid primary-500 outline

### Content Hierarchy
1. **Hero Level**: Track status, main headline, primary CTA
2. **Section Level**: Racing experiences, track features, events  
3. **Supporting Level**: Technical specs, contact info
4. **Utility Level**: Social links, legal text

---

## Performance Guidelines

### Image Optimization
- **Format**: WebP with fallbacks
- **Sizing**: Responsive with proper sizes attribute
- **Priority**: Above-fold images get priority loading
- **Alt Text**: Descriptive for racing context

### Animation Performance  
- **GPU Acceleration**: Use transform and opacity only
- **Reduced Motion**: Respect user preferences
- **Stagger Timing**: 0.2s delays for smooth reveals

---

## Implementation Checklist

- [ ] Mobile-first responsive design
- [ ] High contrast for outdoor conditions
- [ ] Touch-optimized interface (44px+ targets)
- [ ] Racing typography hierarchy maintained
- [ ] Glass morphism effects properly implemented
- [ ] Animation timing follows 0.6s standard
- [ ] Video backgrounds with fallbacks
- [ ] Accessibility standards met (4.5:1 contrast)
- [ ] Performance optimized (WebP images, GPU animations)
- [ ] Brand consistency (logo usage, racing stripes)

---

This design language ensures consistent implementation of English Mountain Raceway's premium racing aesthetic across all components and future development.