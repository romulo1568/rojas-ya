"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import { MiniCountdown } from "@/components/mini-countdown"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEnter = () => {
    setShowSplash(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen">
      {showSplash ? (
        <SplashScreen onEnter={handleEnter} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Products />
          <Contact />
          <Footer />
          <MiniCountdown />
        </>
      )}
    </main>
  )
}
