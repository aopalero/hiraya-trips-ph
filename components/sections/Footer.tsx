"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"
import { COMPANY, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants"
import type { SocialLink, ContactInfo, NavLink } from "@/lib/types"

/**
 * Contact information data with icons
 */
const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    text: COMPANY.contact.phone,
    href: `tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`
  },
  {
    icon: Mail,
    text: COMPANY.contact.email,
    href: `mailto:${COMPANY.contact.email}`
  },
  {
    icon: MapPin,
    text: COMPANY.contact.location
  }
]

/**
 * Social media links data with icons
 */
const socialLinks: SocialLink[] = [
  {
    href: SOCIAL_LINKS[0].href,
    icon: Facebook,
    label: SOCIAL_LINKS[0].label
  },
  {
    href: SOCIAL_LINKS[1].href,
    icon: Instagram,
    label: SOCIAL_LINKS[1].label
  },
  {
    href: SOCIAL_LINKS[2].href,
    icon: MessageCircle,
    label: SOCIAL_LINKS[2].label
  }
]

/**
 * Footer component with company information, navigation, and contact details
 * Features responsive grid layout and smooth animations
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold text-white">{COMPANY.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {COMPANY.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2" role="list">
                {NAV_LINKS.map((link, index) => (
                  <li key={index} role="listitem">
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`Go to ${link.label.toLowerCase()} page`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3" role="list" aria-label="Contact information">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3" role="listitem">
                  <info.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`Contact via ${info.text}`}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                  role="listitem"
                >
                  <social.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-2">
              <span className="text-primary font-semibold">{COMPANY.name}</span> – {COMPANY.tagline}
            </p>
            <p className="text-gray-400">
              © 2025 {COMPANY.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
