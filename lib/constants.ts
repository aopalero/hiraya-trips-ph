/**
 * Application constants and configuration
 * Centralized location for all hardcoded values
 */

/**
 * Company information
 */
export const COMPANY = {
  name: "HirayaTripsPH",
  tagline: "Your Affordable Getaway Solution",
  description: "From domestic flights to international adventures, ferry and bus tickets, or complete holiday packages – we make your dream trips simple, reliable, and budget-friendly with HirayaTripsPH.",
  contact: {
    phone: "+63 912 345 6789",
    email: "info@hirayatripsph.com",
    location: "Metro Manila, Philippines"
  }
} as const

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  {
    href: "#",
    label: "Facebook",
    icon: "Facebook"
  },
  {
    href: "#",
    label: "Instagram", 
    icon: "Instagram"
  },
  {
    href: "#",
    label: "Messenger",
    icon: "MessageCircle"
  }
] as const

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" }
] as const

/**
 * Default images for fallbacks
 */
export const DEFAULT_IMAGES = {
  service: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  services: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
} as const

/**
 * Animation durations for consistent timing
 */
export const ANIMATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  slower: 1.0
} as const

/**
 * Breakpoint values for responsive design
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
} as const
