"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function AreasNegocio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const areas = [
    {
      title: "Concreto Premezclado",
      description: "Producción y suministro de concreto de alta calidad para todo tipo de proyectos, con control de calidad riguroso y entrega oportuna.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Agregados",
      description: "Extracción y procesamiento de agregados de primera calidad: grava, arena, piedra triturada para concreto y asfalto.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Asfalto",
      description: "Fabricación de mezclas asfálticas para pavimentación de carreteras, calles y proyectos viales de alto tráfico.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Logística y Distribución",
      description: "Transporte especializado de materiales de construcción con flotilla propia y rutas optimizadas para garantizar entregas puntuales.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section id="areas" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestras <span className="text-[#e8b643]">Áreas de Negocio</span>
          </h2>
          <div className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Soluciones integrales para la industria de la construcción pesada y la infraestructura.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {areas.map((area, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-3 text-[#e8b643]">
                    {area.title}
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}