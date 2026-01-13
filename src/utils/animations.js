/**
 * Shared animation variants for The Ladder components
 * Based on the design language from problem-solution-compact.jsx
 */

// Container variants - stagger children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

// Card variants - fade in from bottom with scale
export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth animation
    }
  }
}

// Item variants - slide in from left
export const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Icon variants - spring animation with rotation
export const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

// Fade in from bottom (simpler variant)
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Scale in variant
export const scaleInVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200
    }
  }
}

// Header section variant
export const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

// Badge/pill variant
export const badgeVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200
    }
  }
}
