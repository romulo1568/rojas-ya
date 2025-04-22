"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { OPENING_DATE } from "@/lib/constants"

interface SplashScreenProps {
  onEnter: () => void
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = OPENING_DATE.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Initial calculation
    calculateTimeLeft()

    // Set up interval for updates
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up interval
    return () => clearInterval(timer)
  }, []) // No dependencies needed since OPENING_DATE is constant

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Minimarket background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#d31a2c]/80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="mb-4 text-4xl md:text-6xl font-bold">Rojas Ya</h1>
        <p className="mb-8 text-xl md:text-2xl">¡Próxima Inauguración!</p>

        <div className="grid grid-cols-4 gap-2 md:gap-6 mb-12 max-w-2xl mx-auto">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>

        <Button
          onClick={onEnter}
          size="lg"
          className="bg-white text-[#d31a2c] hover:bg-white/90 hover:text-[#d31a2c] text-lg px-8 py-6"
        >
          Ingresar a la Tienda
        </Button>
      </motion.div>
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4 w-full aspect-square flex items-center justify-center border border-white/20">
        <span className="text-2xl md:text-5xl font-bold">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-xs md:text-sm mt-1 font-medium">{label}</span>
    </motion.div>
  )
}
