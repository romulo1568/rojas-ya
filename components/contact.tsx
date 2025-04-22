"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar, Loader2 } from "lucide-react";
import { OPENING_DATE } from "@/lib/constants";
import Image from "next/image";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ""
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formattedDate = OPENING_DATE.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#d31a2c]">Contáctanos</span>
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
            Estamos aquí para atenderte. No dudes en contactarnos para cualquier
            consulta o sugerencia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c] mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Dirección</h4>
                  <p className="text-gray-600">Av. Los Maestros, San Carlos, Nasca</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c] mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                  <p className="text-gray-600">+51 974 607 772</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c] mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600">rojasya.central@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d31a2c]/10 p-3 rounded-full text-[#d31a2c] mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Horario de Atención
                  </h4>
                  <p className="text-gray-600">
                    Lunes a Sábado: 8:00 AM - 9:00 PM
                  </p>
                  <p className="text-gray-600">Domingo: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#d31a2c]/10 rounded-lg border border-[#d31a2c]/20">
              <div className="flex items-start gap-4">
                <div className="bg-[#d31a2c]/20 p-3 rounded-full text-[#d31a2c] mt-1">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    ¡Inauguración Próxima!
                  </h4>
                  <p className="text-gray-700">
                    Abriremos nuestras puertas el{" "}
                    <span className="font-semibold">{formattedDate}</span>. ¡Te
                    esperamos para celebrar juntos!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                {" "}
                {/* Altura más cómoda */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.8628712915556!2d-74.94415215488816!3d-14.832952348874674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91141e6a0f2ff35d%3A0x6aaa5a1485be857f!2sRojas%20Ya!5e0!3m2!1ses!2spe!4v1744964924305!5m2!1ses!2spe"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>

            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              setStatus({ loading: true, success: false, error: "" });

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (!response.ok) {
                  throw new Error(data.error || "Error al enviar el mensaje");
                }

                setStatus({ loading: false, success: true, error: "" });
                setFormData({ name: "", email: "", subject: "", message: "" });
              } catch (error) {
                setStatus({
                  loading: false,
                  success: false,
                  error: error instanceof Error ? error.message : "Error al enviar el mensaje"
                });
              }
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d31a2c] hover:bg-[#b01522] text-white"
                disabled={status.loading}
              >
                {status.loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
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

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Preguntas Frecuentes</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-[#d31a2c]">
                    ¿Ofrecen servicio de delivery?
                  </h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Sí, contamos con servicio de delivery para pedidos dentro de
                    nuestra zona de cobertura.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-[#d31a2c]">
                    ¿Aceptan tarjetas de crédito?
                  </h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Aceptamos todas las tarjetas de crédito y débito, así como
                    pagos en efectivo.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-[#d31a2c]">
                    ¿Tienen ofertas especiales?
                  </h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Sí, cada semana tenemos ofertas y promociones especiales.
                    ¡Visítanos para conocerlas!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
