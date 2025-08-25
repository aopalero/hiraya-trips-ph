"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Calendar, Plane } from "lucide-react"

/**
 * Hero section component featuring a search interface and call-to-action buttons
 * Uses Framer Motion for smooth animations and includes a search form
 */
export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section with travel search"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful mountain landscape for travel inspiration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            Your Affordable <span className="text-secondary drop-shadow-lg">Getaway</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-xl"
          >
            Flights, ferry, bus, and holiday packages – all simple, reliable, and budget-friendly with HirayaTripsPH.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/98 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-10 shadow-2xl border border-gray-200"
          >
            <form className="flex flex-col sm:flex-row gap-4 items-center" role="search">
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-200">
                <Search className="w-6 h-6 text-gray-500 mr-3" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-600 text-lg font-medium"
                  aria-label="Destination search"
                />
              </div>
              <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-200">
                <Calendar className="w-6 h-6 text-gray-500 mr-3" aria-hidden="true" />
                <input
                  type="date"
                  className="bg-transparent border-none outline-none text-gray-900 text-lg font-medium"
                  aria-label="Travel date"
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg min-w-[120px]"
              >
                <Plane className="w-6 h-6 mr-2" aria-hidden="true" />
                Search
              </Button>
            </form>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-white font-extrabold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-10 py-6 bg-white/95 hover:bg-white text-gray-900 hover:text-gray-700 font-extrabold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
            >
              <Link href="/services">Book Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
