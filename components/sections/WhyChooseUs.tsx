"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  Home,
  Star,
  Shield,
  Users,
  Heart,
  Target,
  Handshake,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "One-Stop Travel Shop",
    description: "Everything you need for your journey. Flights, tours, accommodation and more."
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Guaranteed with no hidden fees. We believe travel should be accessible to everyone."
  },
  {
    icon: Clock,
    title: "Hassle-Free Booking",
    description: "Simple and quick booking process. Get your tickets and packages in minutes, not hours."
  },
  {
    icon: Home,
    title: "Trusted & Home-Based",
    description: "A local family business you can trust, with personalized service and local expertise."
  }
]

const valueProps = [
  {
    icon: Target,
    title: "Affordability",
    description: "Making travel accessible to every budget"
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building lasting relationships with our clients"
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Delivering outstanding service every time"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function WhyChooseUs() {
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
            Why Thousands of Filipinos Trust{" "}
            <span className="text-primary">HirayaTripsPH</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We've been helping families create unforgettable memories through affordable and reliable travel solutions.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700 leading-relaxed font-normal">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-sm">Our Value Proposition</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              We're committed to providing the best travel experience with these key benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <prop.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 drop-shadow-sm">{prop.title}</h4>
                <p className="text-blue-100 text-base font-medium leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
