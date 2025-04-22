"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { OPENING_DATE } from "@/lib/constants"

export function MiniCountdown() {
  const [isVisible, setIsVisible] = useState(true)
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

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 right-4 z-40 bg-[#d31a2c] text-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full"
      >
        <div className="flex justify-between items-center p-3 bg-[#b01522]">
          <h3 className="font-bold">Inauguración</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
            aria-label="Cerrar contador"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <div className="text-xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</div>
              <div className="text-xs">Días</div>
            </div>
            <div>
              <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs">Horas</div>
            </div>
            <div>
              <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs">Min</div>
            </div>
            <div>
              <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs">Seg</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-center">
            ¡Te esperamos el {OPENING_DATE.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}!
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
