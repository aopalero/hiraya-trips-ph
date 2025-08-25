/**
 * TypeScript type definitions for the application
 * Centralized location for all interfaces and types
 */

/**
 * Base component props interface
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * Feature item interface for feature grids
 */
export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

/**
 * Service item interface for service grids
 */
export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  image: string
  price: string
  duration: string
}

/**
 * Testimonial item interface
 */
export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

/**
 * Social media link interface
 */
export interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

/**
 * Contact information interface
 */
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  text: string
  href?: string
}

/**
 * Navigation link interface
 */
export interface NavLink {
  href: string
  label: string
}

/**
 * Value proposition interface
 */
export interface ValueProp {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

/**
 * Animation variants interface for Framer Motion
 */
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    transition: {
      duration: number
      delay?: number
      staggerChildren?: number
    }
  }
}

/**
 * Button component props interface
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
