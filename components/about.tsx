"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Target, Eye, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Sobre <span className="text-[#d31a2c]">Nosotros</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#d31a2c] mx-auto mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Somos un nuevo minimarket comprometido con ofrecer productos de calidad a precios accesibles para nuestra
            comunidad.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#d31a2c] p-3 rounded-full text-white">
                  <Target size={24} />
                </div>
                <p className="text-gray-700">
                  Proporcionar a nuestros clientes una experiencia de compra conveniente y agradable, ofreciendo
                  productos frescos y de calidad a precios competitivos, mientras contribuimos positivamente a nuestra
                  comunidad local.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Nuestra Visión</h3>
              <div className="flex items-center gap-4">
                <div className="bg-[#d31a2c] p-3 rounded-full text-white">
                  <Eye size={24} />
                </div>
                <p className="text-gray-700">
                  Ser reconocidos como el minimarket preferido en nuestra área, destacándonos por nuestro servicio
                  excepcional, variedad de productos y compromiso con la satisfacción del cliente.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative rounded-lg overflow-hidden"
          >
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="Equipo de Rojas Ya"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>

              <div className="flex gap-4 items-start">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c]">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Productos Frescos</h4>
                  <p className="text-gray-600">
                    Nos aseguramos de que todos nuestros productos sean frescos y de la mejor calidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c]">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Precios Competitivos</h4>
                  <p className="text-gray-600">
                    Ofrecemos precios justos y competitivos para todos nuestros productos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c]">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Atención Personalizada</h4>
                  <p className="text-gray-600">
                    Nuestro equipo está siempre dispuesto a ayudarte y brindarte la mejor atención.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
