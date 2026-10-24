"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Target, Eye, Shield, Truck, Zap, Award } from "lucide-react"
import Image from "next/image"
import { ValuesSection } from "@/components/values" // Importamos el nuevo componente

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Sobre <span className="text-[#e8b643]">Cerro Blanco</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            ></motion.div>
            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Líderes en la producción y suministro de materiales de construcción para proyectos de infraestructura y obra pesada.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Nuestra Misión</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#e8b643] p-3 rounded-full text-gray-900">
                    <Target size={24} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Somos una empresa orientada al abastecimiento del concreto premezclado para el rubro de construcción
                    y minería a nivel nacional siendo un soporte esencial para el cliente que se encuentra en zonas
                    aisladas y que necesitan un aliado estratégico durante la realización de sus proyectos.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8 dark:text-white">Nuestra Visión</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-[#e8b643] p-3 rounded-full text-gray-900">
                    <Eye size={24} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Llegar a consolidarnos como unas de las empresas top a nivel regional y nacional siendo una gran alternativa
                    para el mercado peruano respecto al abastecimiento de concreto premezclado con la premisa de mejorar
                    continuamente a fin de entregarle al cliente un producto con altos estándares de calidad y servicio.
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
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                  alt="Planta de producción Cerro Blanco"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nuestros Diferenciales</h3>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#e8b643]/10 p-3 rounded-full text-[#e8b643]">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Calidad Garantizada</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Control de calidad riguroso en cada etapa de producción.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#e8b643]/10 p-3 rounded-full text-[#e8b643]">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Entrega Puntual</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Flotilla propia y logística optimizada para cumplir con tus plazos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#e8b643]/10 p-3 rounded-full text-[#e8b643]">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Capacidad Industrial</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Infraestructura moderna para atender proyectos de cualquier escala.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Integramos la sección de valores */}
      <ValuesSection />
    </>
  )
}