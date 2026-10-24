"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { OPENING_DATE } from "@/lib/constants"
// @ts-ignore
import confetti from "canvas-confetti"

export default function MiniCountdown() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Lanzar confeti al ingresar a la página (desde arriba y lados)
    confetti({
      particleCount: 60,
      angle: 90,
      spread: 70,
      origin: { y: 0 },
      zIndex: 9999,
    })
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      zIndex: 9999,
    })
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      zIndex: 9999,
    })
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-40 flex flex-col items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Cerrar contador"
        >
          <X size={18} />
        </button>
        <h3 className="text-lg font-semibold text-center mb-2 text-[#d31a2c] dark:text-[#ff3a4c]">
          Inauguración
        </h3>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 w-14 mb-1">
              <span className="text-xl font-bold dark:text-white">{timeLeft.days}</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Días</span>
          </div>
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 w-14 mb-1">
              <span className="text-xl font-bold dark:text-white">{timeLeft.hours}</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Horas</span>
          </div>
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 w-14 mb-1">
              <span className="text-xl font-bold dark:text-white">{timeLeft.minutes}</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Min</span>
          </div>
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 w-14 mb-1">
              <span className="text-xl font-bold dark:text-white">{timeLeft.seconds}</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Seg</span>
          </div>
        </div>
          <div className="mt-2 text-xs text-center dark:text-gray-300">
            ¡Te esperamos el {OPENING_DATE.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}!
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
