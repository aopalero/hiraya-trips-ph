"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful mountain landscape for travel inspiration"
            className="w-full h-full object-cover opacity-30"
          />
         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              Plan Your <span className="text-secondary drop-shadow-lg">Adventure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xl"
            >
              Get in touch with our travel experts at HirayaTripsPH. We're here to help you plan the perfect trip with personalized service and unbeatable prices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl bg-white rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      id="destination"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl py-6 text-lg">
                    Send Inquiry Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Contact Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+63 912 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">info@hirayatripsph.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Messenger/WhatsApp</p>
                        <p className="text-muted-foreground">@hirayatripsph</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                                         <div className="flex items-center space-x-3 mb-4">
                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                         <Clock className="w-5 h-5 text-primary" />
                       </div>
                       <div>
                         <p className="font-medium text-foreground">Monday - Friday</p>
                         <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                       </div>
                     </div>
                     <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                         <Clock className="w-5 h-5 text-primary" />
                       </div>
                       <div>
                         <p className="font-medium text-foreground">Saturday</p>
                         <p className="text-muted-foreground">9:00 AM - 2:00 PM</p>
                       </div>
                     </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
