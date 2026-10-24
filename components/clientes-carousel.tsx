"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y } from "swiper/modules"
import "swiper/css"

export function ClientesCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Example logos: replace these with your actual logo file paths in /public/
  const clientes = [
    { name: "SinoHydro", logo: "/images/SinoHydrou.png" },
    { name: "Municipalidad de Marcona", logo: "/images/muniMarcona.png" },
    { name: "Sociedad de Expertos en Telecomunicaciones S.A.C.", logo: "/images/Sodextel.png" },
    { name: "China Communications Construction Company Ltd.", logo: "/images/cccc2.png" },
    { name: "Tactical IT S.A.C.", logo: "/images/Tactical.png" },
    { name: "Sinton", logo: "/images/Sinton.png" },
    { name: "Vías y Pavimentos SA", logo: "https://picsum.photos/seed/client7/200/100" },
    { name: "Ingeniería Civil Integral", logo: "https://picsum.photos/seed/client8/200/100" },
  ]

  return (
    <section id="clientes" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestros <span className="text-[#e8b643]">Clientes</span>
          </h2>
          <div className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Empresas y organizaciones que confían en nosotros para sus proyectos.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {clientes.map((cliente, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-8"
              >
                <img
                  src={cliente.logo}
                  alt={cliente.name}
                  className="h-16 md:h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}