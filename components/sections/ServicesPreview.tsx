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
  Clock
} from "lucide-react"

/**
 * Service item interface for the services grid
 */
interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  image: string
  price: string
  duration: string
}

/**
 * Animation variants for staggered animations
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

/**
 * Animation variants for individual items
 */
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

/**
 * Services data for the grid layout
 */
const services: Service[] = [
  {
    icon: Plane,
    title: "Domestic Flights",
    description: "Explore the beautiful islands of the Philippines with our affordable domestic flight deals.",
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱1,500",
    duration: "2-3 hours average"
  },
  {
    icon: Globe,
    title: "International Flights",
    description: "Discover the world with our competitive international flight packages and deals.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱8,000",
    duration: "4-12 hours average"
  },
  {
    icon: Ship,
    title: "Ferry Tickets",
    description: "Island hopping made easy with our reliable ferry ticket booking service.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱500",
    duration: "1-4 hours average"
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Comfortable and affordable bus travel across the Philippines.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱200",
    duration: "2-8 hours average"
  },
  {
    icon: MapPin,
    title: "Holiday Packages",
    description: "Complete vacation packages including flights, hotels, and activities.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱15,000",
    duration: "3-7 days average"
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description: "Professional visa application assistance for hassle-free international travel.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "Starting from ₱2,000",
    duration: "5-15 days processing"
  }
]

/**
 * Default fallback image for service cards
 */
const DEFAULT_SERVICE_IMAGE = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

/**
 * ServicesPreview component showcasing available travel services
 * Features a responsive grid layout with service cards and smooth animations
 */
export function ServicesPreview() {
  /**
   * Handle image load errors by setting a fallback image
   */
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = DEFAULT_SERVICE_IMAGE
  }

  return (
    <section className="relative py-20 overflow-hidden" aria-label="Travel services preview">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Travel services background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            Our <span className="text-secondary">Travel Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            From flights to complete holiday packages, we offer everything you need for your next adventure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Available travel services"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} role="listitem">
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    width={800}
                    height={400}
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-sm font-bold text-primary">{service.price}</p>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                    <Clock className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base text-gray-700 mb-6 leading-relaxed font-normal">
                    {service.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-lg"
                  >
                    <Link href="/services" aria-label={`Book ${service.title} service`}>
                      Book Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
          >
            <Link href="/services" aria-label="View all available services">
              View All Services →
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
