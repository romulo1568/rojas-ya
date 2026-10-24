"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { OPENING_DATE } from "@/lib/constants"
// @ts-ignore
import confetti from "canvas-confetti"

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
      } else {
        // Cuando el tiempo llega a 0, mostrar confeti
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        
        // Confetti de celebración cuando el tiempo llega a 0
        let confettiInterval = setInterval(() => {
          confetti({
            particleCount: 120,
            angle: 90,
            spread: 120,
            origin: { y: 0 },
            zIndex: 9999,
          })
          confetti({
            particleCount: 80,
            angle: 60,
            spread: 100,
            origin: { x: 0, y: 0.5 },
            zIndex: 9999,
          })
          confetti({
            particleCount: 80,
            angle: 120,
            spread: 100,
            origin: { x: 1, y: 0.5 },
            zIndex: 9999,
          })
        }, 600)
        
        // Limpiar el confeti después de 10 segundos
        setTimeout(() => {
          clearInterval(confettiInterval)
        }, 10000)
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white overflow-hidden dark:bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Minimarket background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-[#d31a2c]/75"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 relative"
      >
        {/* Glow effect behind the title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-32 bg-gradient-to-r from-[#d31a2c]/20 via-white/10 to-[#d31a2c]/20 blur-3xl"></div>
        </div>
        
        <h1 className="mb-4 text-4xl md:text-6xl font-bold relative z-10">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            <span className="text-[#d31a2c] drop-shadow-[0_0_15px_rgba(211,26,44,0.8)] drop-shadow-[0_0_30px_rgba(211,26,44,0.6)] font-extrabold">
              Rojas Ya
            </span>
          </span>
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            {" "}está por llegar
          </span>
        </h1>
        
        <p className="mb-8 text-xl md:text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] font-semibold relative z-10">
          Estamos preparando todo para brindarte la mejor experiencia de compra. ¡Muy pronto abriremos nuestras puertas!
        </p>

        <div className="grid grid-cols-4 gap-2 md:gap-6 mb-12 max-w-2xl mx-auto relative z-10">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>

        <Button
          onClick={onEnter}
          size="lg"
          className="bg-white dark:bg-gray-800 text-[#d31a2c] hover:bg-white/90 dark:hover:bg-gray-700 hover:text-[#d31a2c] text-lg px-8 py-6 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] font-bold border-2 border-white/30 hover:border-white/50 transition-all duration-300"
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
      <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-md rounded-lg p-2 md:p-4 w-full aspect-square flex items-center justify-center border-2 border-white/40 dark:border-gray-700/50 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
        <span className="text-2xl md:text-5xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm mt-1 font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
        {label}
      </span>
    </motion.div>
  )
}
