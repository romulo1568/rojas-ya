"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: "" })
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus({ loading: false, success: true, error: "" })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-[#e8b643]">Contáctanos</span>
          </h2>
          <div className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Estamos listos para ayudarte con tu próximo proyecto de construcción.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8b643]/10 p-3 rounded-lg text-[#e8b643] mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Dirección</h4>
                  <p className="text-gray-600 dark:text-gray-300">Calle Los Heraldos s/n distrito de Vista Alegre</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e8b643]/10 p-3 rounded-lg text-[#e8b643] mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-300">+51 968 886 615</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e8b643]/10 p-3 rounded-lg text-[#e8b643] mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">ventas@concretoscerroblanco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e8b643]/10 p-3 rounded-lg text-[#e8b643] mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                    Horario de Atención
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lunes a Sábado: 7:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-xl h-80">
              {/* Reemplaza el src con tu propio iframe de Google Maps */}
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.1114862088422!2d-74.93560072033382!3d-14.856321972093255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91141f0045037a7f%3A0x58ebb86f70e30d2e!2sCantera%20Joselito!5e0!3m2!1ses!2spe!4v1784147625740!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Concretos y Asfaltos Cerro Blanco"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envíanos un Mensaje</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-gray-300 dark:border-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="border-gray-300 dark:border-gray-600"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#e8b643] hover:bg-[#d4a33c] text-gray-900 font-semibold"
                disabled={status.loading}
              >
                {status.loading ? "Enviando..." : "Enviar Mensaje"}
              </Button>

              {status.error && (
                <p className="mt-2 text-sm text-red-600">{status.error}</p>
              )}

              {status.success && (
                <p className="mt-2 text-sm text-green-600">
                  Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
