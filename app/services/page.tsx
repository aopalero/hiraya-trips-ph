"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { 
  Plane, 
  Globe, 
  Ship, 
  Bus, 
  MapPin, 
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
  Shield
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Domestic Flights",
    description: "Explore the beautiful islands of the Philippines with our affordable domestic flight deals.",
    longDescription: "Discover the hidden gems of the Philippines with our comprehensive domestic flight service. From the pristine beaches of Palawan to the cultural heritage of Vigan, we connect you to over 40 destinations across the archipelago.",
    features: [
      "Best price guarantee",
      "Flexible booking options",
      "24/7 customer support",
      "Instant confirmation"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱1,500"
  },
  {
    icon: Globe,
    title: "International Flights",
    description: "Discover the world with our competitive international flight packages and deals.",
    longDescription: "Embark on global adventures with our international flight service. We partner with major airlines to offer competitive rates to destinations across Asia, Europe, America, and beyond.",
    features: [
      "Multi-airline partnerships",
      "Competitive international rates",
      "Visa assistance available",
      "Travel insurance options"
    ],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱8,000"
  },
  {
    icon: Ship,
    title: "Ferry Tickets",
    description: "Island hopping made easy with our reliable ferry ticket booking service.",
    longDescription: "Experience the beauty of Philippine island hopping with our ferry ticket service. We work with major ferry companies to ensure safe, comfortable, and affordable sea travel between islands.",
    features: [
      "Major ferry company partnerships",
      "Online booking convenience",
      "Flexible schedules",
      "Group booking discounts"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱500"
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Comfortable and affordable bus travel across the Philippines.",
    longDescription: "Travel across the Philippines in comfort with our bus ticket service. From luxury coaches to regular buses, we offer options for every budget and preference.",
    features: [
      "Premium and regular options",
      "Nationwide coverage",
      "Online seat selection",
      "Luggage assistance"
    ],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱200"
  },
  {
    icon: MapPin,
    title: "Holiday Packages",
    description: "Complete vacation packages including flights, hotels, and activities.",
    longDescription: "Enjoy hassle-free vacations with our complete holiday packages. We take care of everything from flights and accommodation to tours and activities, ensuring you have the perfect getaway.",
    features: [
      "All-inclusive packages",
      "Customizable itineraries",
      "Professional tour guides",
      "24/7 travel support"
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱15,000"
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description: "Professional visa application assistance for hassle-free international travel.",
    longDescription: "Navigate the complex world of visa applications with our professional assistance. Our experienced team ensures your visa application process is smooth and successful.",
    features: [
      "Expert visa consultants",
      "Document preparation",
      "Application tracking",
      "High success rate"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱2,000"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Travel services"
            fill
            className="object-cover opacity-30"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our <span className="text-[#FFDE59]">Travel Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 max-w-3xl mx-auto font-medium"
            >
              From flights to complete holiday packages, we offer everything you need for your next adventure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              console.log(`Rendering service ${index}:`, service.title, service.image);
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full overflow-hidden card-hover border-0 shadow-lg bg-background">
                    <div className="relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/95 rounded-lg px-3 py-2 shadow-lg">
                      <p className="text-sm font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/80 leading-relaxed">
                      {service.longDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-6">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/90 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
              Why Choose <span className="text-primary">Our Services?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              We&apos;re committed to providing the best travel experience with these key benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <DollarSign className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 leading-tight">
                    Best Prices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700 leading-relaxed font-normal">
                    Guaranteed lowest prices with no hidden fees
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 leading-tight">
                    24/7 Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700 leading-relaxed font-normal">
                    Round-the-clock assistance for all your travel
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 leading-tight">
                    Secure Booking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700 leading-relaxed font-normal">
                    Safe and secure online booking system
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
