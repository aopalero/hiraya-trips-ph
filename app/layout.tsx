import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { COMPANY } from "@/lib/constants"

/**
 * Font configuration for Geist Sans
 */
const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

/**
 * Font configuration for Geist Mono
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/**
 * Metadata configuration for the application
 */
export const metadata: Metadata = {
  title: `${COMPANY.name} - ${COMPANY.tagline}`,
  description: COMPANY.description,
}

/**
 * Root layout component that wraps all pages
 * Provides the basic HTML structure, fonts, and common components
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
