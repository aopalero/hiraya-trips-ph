import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes efficiently
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * ```tsx
 * cn("px-4 py-2", "px-6", { "bg-blue-500": isActive })
 * // Returns: "py-2 px-6 bg-blue-500" (px-4 is overridden by px-6)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
