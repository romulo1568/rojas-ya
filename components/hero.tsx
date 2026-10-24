"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image - local hero.jpeg */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <Image
          src="/images/hero.jpeg"
          alt="Concretos y Asfaltos Cerro Blanco"
          fill
          className="object-cover opacity-30 "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Concretos y Asfaltos <span className="text-[#e8b643]">Cerro Blanco</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Soluciones integrales en producción de concreto premezclado, asfalto, agregados y logística de materiales para proyectos de infraestructura y construcción pesada.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={() => {
                document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-[#e8b643] hover:bg-[#d4a33c] text-gray-900 px-8 py-6 text-lg font-semibold"
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              variant="outline"
              className="border-[#e8b643] text-[#e8b643] hover:bg-[#e8b643]/10 px-8 py-6 text-lg font-semibold"
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#areas"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-[#e8b643] transition-colors"
          >
            <span className="text-sm mb-2">Descubre más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <ArrowRight className="h-5 w-5 transform rotate-90" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
