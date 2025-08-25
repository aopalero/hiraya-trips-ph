import { Hero } from "@/components/sections/Hero"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { Testimonials } from "@/components/sections/Testimonials"
import { FinalCTA } from "@/components/sections/FinalCTA"

/**
 * Home page component that displays the main landing page sections
 * Includes hero, features, services, testimonials, and call-to-action
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
