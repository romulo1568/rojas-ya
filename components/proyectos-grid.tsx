"use client"

import { useRef, useState, useMemo } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules"
import { MapPin } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Categoria = "todos" | "mineria" | "puentes" | "energia" | "vial" | "publico"

interface Proyecto {
  nombre: string
  ubicacion: string
  descripcion: string
  imagen: string
  categoria: Exclude<Categoria, "todos">
  destacado?: boolean
}

export function ProyectosCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>("todos")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const categorias: { value: Categoria; label: string }[] = [
    { value: "todos", label: "Destacados" },
    { value: "mineria", label: "Minería" },
    { value: "puentes", label: "Puentes y Estructuras" },
    { value: "energia", label: "Energía" },
    { value: "vial", label: "Infraestructura Vial" },
    { value: "publico", label: "Edificación Pública" },
  ]

  const descripcionesCategoria: Record<Categoria, string> = {
    todos: "Obras de mayor envergadura donde nuestro concreto y asfalto han sido clave para el éxito del proyecto.",
    mineria: "Soluciones de concreto y agregados diseñados para faenas mineras de alta exigencia y operación continua.",
    puentes: "Estructuras de puentes, estribos, tableros y edificaciones industriales con concreto de alta ingeniería.",
    energia: "Cimentaciones y estructuras para subestaciones, parques eólicos, centrales e infraestructura energética.",
    vial: "Redes viales, pavimentos rígidos, carreteras y obras de arte con la calidad que el sector transporte demanda.",
    publico: "Edificaciones de salud, educación y administración pública construidas con estándares y normativa vigente.",
  }

  const proyectos: Proyecto[] = [
    // ---------- EDIFICACIÓN PÚBLICA ----------
    {
      nombre: "Hospital Maria Reiche",
      ubicacion: "Marcona, Nasca",
      descripcion: "Suministro de 16,000 m3 de concreto premezclado de alta resistencia y durabilidad marina para cimentaciones masivas, placas, losas y elementos estructurales principales.",
      imagen: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1d3?q=80&w=2070&auto=format&fit=crop",
      categoria: "publico",
      destacado: true,
    },
    {
      nombre: "Centro Cívico",
      ubicacion: "Marcona, Nasca",
      descripcion: "Producción y bombeo de concreto premezclado estructural para cimientos, columnas, vigas, losas aligeradas y pisos pulidos.",
      imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      categoria: "publico",
      destacado: true,      
    },
    // ---------- INFRAESTRUCTURA VIAL ----------
    {
      nombre: "Pavimento Rigido Urbano",
      ubicacion: "Marcona, Nasca",
      descripcion: "Despacho y colocación de concreto premezclado para pavimento rígido (MR), losas de rodadura, veredas y sardineles urbanos.",
      imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop",
      categoria: "vial",
      destacado: true,
    },
    {
      nombre: "Rehabilitación de Vías Urbanas",
      ubicacion: "Ciudad, País",
      descripcion: "Pavimentación y rehabilitación de 20 km de calles en zona urbana con concreto de alta resistencia al desgaste.",
      imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
      categoria: "vial",
    },
    {
      nombre: "Carretera Interdistrital",
      ubicacion: "Región, País",
      descripcion: "Suministro continuo de concreto y asfalto para tramo carretero de 35 km con bermas y obras de arte.",
      imagen: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
      categoria: "vial",
    },
    // ---------- MINERÍA ----------
    {
      nombre: "Planta Concentradora Minera",
      ubicacion: "Zona Minera, Región",
      descripcion: "Concreto masivo para cimentaciones de equipos pesados, canecas, chutes y estructuras de soporte en faena minera de gran escala.",
      imagen: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2070&auto=format&fit=crop",
      categoria: "mineria",
    },
    {
      nombre: "Tajo Abierto - Infraestructura",
      ubicacion: "Zona Minera, Región",
      descripcion: "Obras de concreto para canales de drenaje, muros de contención y accesos vehiculares en tajo abierto.",
      imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
      categoria: "mineria",
    },
    // ---------- PUENTES Y ESTRUCTURAS ----------
    {
      nombre: "Puente Vehicular Río Grande",
      ubicacion: "Región, País",
      descripcion: "Concreto premezclado de alta resistencia para pilotes, estribos, tablero y barandas de puente de 4 tramos.",
      imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
      categoria: "puentes",
    },
    {
      nombre: "Estructura Industrial Multi-Piso",
      ubicacion: "Ciudad, País",
      descripcion: "Elementos precolados y concreto fundido en sitio para estructura de 5 pisos con entrepiso de carga pesada.",
      imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
      categoria: "puentes",
    },
    // ---------- ENERGÍA ----------
    {
      nombre: "Subestación Eléctrica",
      ubicacion: "Zona Industrial, Región",
      descripcion: "Concreto armado para bases de transformadores, muros de contención y pisos de alta densidad en subestación.",
      imagen: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop",
      categoria: "energia",
    },
    {
      nombre: "Parque Eólico - Plataformas",
      ubicacion: "Zona Costera, Región",
      descripcion: "Cimentaciones de gran volumen para bases de aerogeneradores en parque eólico de 50 MW.",
      imagen: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
      categoria: "energia",
    },
  ]

  const proyectosFiltrados = useMemo(() => {
    if (categoriaActiva === "todos") return proyectos.filter((p) => p.destacado === true)
    return proyectos.filter((p) => p.categoria === categoriaActiva)
  }, [categoriaActiva, proyectos])

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestros <span className="text-[#e8b643]">Proyectos</span>
          </h2>
          <motion.div
            key={categoriaActiva}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"
          />
          <motion.p
            key={`desc-${categoriaActiva}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg min-h-[4rem]"
          >
            {descripcionesCategoria[categoriaActiva]}
          </motion.p>
        </motion.div>

        {/* FILTROS POR CATEGORÍA */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoriaActiva(cat.value)}
              className={`cursor-pointer px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 border-2 select-none ${
                categoriaActiva === cat.value
                  ? "bg-[#e8b643] border-[#e8b643] text-gray-900 shadow-lg scale-105 shadow-[#e8b643]/20"
                  : "bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#e8b643] hover:text-[#e8b643] hover:-translate-y-0.5 active:scale-95"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {proyectosFiltrados.length > 0 ? (
          <Swiper
            key={categoriaActiva}
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
            {proyectosFiltrados.map((proyecto, index) => (
              <SwiperSlide key={`${categoriaActiva}-${proyecto.nombre}-${index}`}>
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl group"
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold mb-3 text-[#e8b643]">
                      {proyecto.nombre}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                      <MapPin className="h-5 w-5" />
                      <span className="text-lg">{proyecto.ubicacion}</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      {proyecto.descripcion}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center py-16"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Próximamente publicaremos proyectos de esta categoría.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
