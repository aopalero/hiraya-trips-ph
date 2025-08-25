"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Maria Santos",
    location: "Manila",
    rating: 5,
    text: "HirayaTripsPH Travel made our family vacation to Boracay absolutely perfect! The prices were unbeatable and the service was exceptional. Highly recommended!"
  },
  {
    name: "Juan Dela Cruz",
    location: "Cebu",
    rating: 5,
    text: "I've been using their services for years. They always find the best deals on flights and their holiday packages are amazing value for money."
  },
  {
    name: "Ana Rodriguez",
    location: "Davao",
    rating: 5,
    text: "Booking our international trip was so easy with them. Professional, reliable, and they really care about their customers. Will definitely use them again!"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            What Our <span className="text-primary">Happy Customers</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Don't just take our word for it - hear from thousands of satisfied Filipino families who have traveled with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-0 shadow-2xl bg-white rounded-2xl p-8 lg:p-12">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                {testimonials[currentIndex].name}
              </CardTitle>
              <p className="text-lg text-gray-600 font-medium">
                {testimonials[currentIndex].location}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
