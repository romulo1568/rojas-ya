"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Shield, Users, Zap, Award, TrendingUp } from "lucide-react"

// Definir el tipo para los valores
type ValueItem = {
  id: string
  icon: string
  title: string
  description: string
  image: string
  color?: string
  highlight?: boolean
}

// Datos de valores para Cerro Blanco
const valueItems: ValueItem[] = [
  {
    id: "quality",
    icon: "Award",
    title: "Excelencia en Calidad",
    description: "Control de calidad riguroso en cada etapa de producción, garantizando materiales que cumplen con los más altos estándares de la industria.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    color: "#e8b643",
    highlight: true
  },
  {
    id: "safety",
    icon: "Shield",
    title: "Compromiso con la Seguridad",
    description: "La seguridad de nuestros equipos, clientes y proyectos es nuestra prioridad, con protocolos estrictos en todas nuestras operaciones.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "team",
    icon: "Users",
    title: "Equipo Profesional",
    description: "Contamos con un equipo de expertos altamente capacitados, comprometidos con la excelencia y el éxito de cada proyecto.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "innovation",
    icon: "Zap",
    title: "Innovación Tecnológica",
    description: "Invertimos constantemente en tecnología y procesos modernos para ofrecer soluciones eficientes y de vanguardia.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "growth",
    icon: "TrendingUp",
    title: "Desarrollo Sostenible",
    description: "Nos comprometemos con prácticas responsables con el medio ambiente, contribuyendo al desarrollo sostenible de la región.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop"
  }
]

const iconComponents = {
  Award,
  Shield,
  Users,
  Zap,
  TrendingUp
}

export function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const activeItem = valueItems[activeIndex]
  const IconComponent = iconComponents[activeItem.icon as keyof typeof iconComponents]
  
  const goToNext = () => {
    if (activeIndex < valueItems.length - 1) {
      setDirection(1)
      setActiveIndex(prev => prev + 1)
    }
  }
  
  const goToPrevious = () => {
    if (activeIndex > 0) {
      setDirection(-1)
      setActiveIndex(prev => prev - 1)
    }
  }
  
  const goToItem = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }
  
  // Animaciones para el contenido del valor
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0
    })
  }
  
  // Animación para la aparición de la sección
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.2 
      }
    }
  }
  
  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            variants={itemFade}
          >
            Nuestros <span className="text-[#e8b643]">Valores</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"
            variants={itemFade}
          ></motion.div>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            variants={itemFade}
          >
            Los principios que guían cada decisión y acción en Concretos y Asfaltos Cerro Blanco.
          </motion.p>
        </motion.div>
        
        {/* Navegación visual de valores */}
        <motion.div 
          className="relative mb-16 overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="relative">
            {/* Línea horizontal */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>
            
            {/* Contenedor scrollable horizontal */}
            <div className="relative flex justify-center">
              <div className="flex space-x-4 md:space-x-8 lg:space-x-12 relative py-6 px-4 overflow-x-auto max-w-full scrollbar-hide">
                {valueItems.map((item, index) => {
                  const Icon = iconComponents[item.icon as keyof typeof iconComponents]
                  return (
                    <div key={item.id} className="flex flex-col items-center relative">
                      <motion.div
                        variants={itemFade}
                        onClick={() => goToItem(index)}
                        className={`relative cursor-pointer flex-shrink-0 transition-all duration-300 ${
                          index === activeIndex ? 'scale-110' : 'scale-100'
                        }`}
                      >
                        <div 
                          className={`
                            w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-300
                            ${index === activeIndex 
                              ? 'bg-[#e8b643] text-gray-900' 
                              : item.highlight 
                                ? 'bg-white dark:bg-gray-800 text-[#e8b643] border-2 border-[#e8b643] border-dashed' 
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-[#e8b643]/50'
                            }
                          `}
                        >
                          <Icon size={24} />
                        </div>
                        
                        {/* Indicador de item destacado */}
                        {item.highlight && (
                          <span className="absolute -top-1 -right-1 text-[#e8b643]">
                            <Award size={14} fill="#e8b643" />
                          </span>
                        )}
                        
                        {/* Línea que conecta al item con el título */}
                        <div className={`absolute -bottom-5 left-1/2 h-5 w-0.5 -translate-x-1/2 ${
                          index === activeIndex ? 'bg-[#e8b643]' : 'bg-gray-300 dark:bg-gray-600'
                        } transition-all duration-300`}></div>
                      </motion.div>
                      
                      {/* Título del valor */}
                      <div 
                        className={`
                          w-20 md:w-28 lg:w-36 h-10 flex items-center justify-center mt-6 text-center 
                          text-xs md:text-sm font-medium transition-all duration-300
                          ${index === activeIndex ? 'text-[#e8b643]' : 'text-gray-500 dark:text-gray-400'}
                        `}
                      >
                        {item.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Contenido del valor activo */}
        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="h-96 md:h-[450px] relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row-reverse"
              >
                {/* Imagen del valor */}
                <div className="md:w-1/2 h-48 md:h-full relative">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU/P9/AwAIMgKXB6O+VgAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                
                {/* Contenido del valor */}
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <div 
                    className="inline-flex items-center gap-3 mb-6"
                  >
                    <div className="bg-[#e8b643] p-3 rounded-full text-gray-900">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4 dark:text-white"
                    style={{ color: activeItem.color || '#111' }}
                  >
                    {activeItem.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {activeItem.description}
                  </p>
                  
                  {/* Navegación entre valores */}
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={goToPrevious}
                      disabled={activeIndex === 0}
                      className={`p-2 rounded-full ${
                        activeIndex === 0 
                          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      aria-label="Valor anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {activeIndex + 1} de {valueItems.length}
                    </div>
                    
                    <button
                      onClick={goToNext}
                      disabled={activeIndex === valueItems.length - 1}
                      className={`p-2 rounded-full ${
                        activeIndex === valueItems.length - 1 
                          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      aria-label="Valor siguiente"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Indicadores para móvil */}
        <div className="flex justify-center mt-6 md:hidden">
          {valueItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToItem(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? 'bg-[#e8b643]' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Ir al valor ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}