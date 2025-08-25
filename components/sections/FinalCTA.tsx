"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

/**
 * FinalCTA component featuring the main call-to-action for the page
 * Uses a gradient background with animated elements to encourage user engagement
 */
export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80" aria-label="Final call to action">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready for Your Next Getaway?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-gray-900 font-bold rounded-xl shadow-lg animate-pulse"
            >
              <Link href="/contact" aria-label="Get free travel assistance and inquire about our services">
                Inquire Now – Get Free Travel Assistance
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
