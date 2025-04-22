"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Imagen de fondo del supermercado */}
        <Image
          src="/images/hero.jpg"
          alt="Minimarket Rojas Ya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenido a <span className="text-[#d31a2c]">Rojas Ya</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tu nuevo minimarket de confianza con los mejores productos y precios
            para toda la familia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#d31a2c] hover:bg-[#b01522] text-white px-8 py-6 text-lg"
            >
              Nuestros Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="border-[#d31a2c] text-[#d31a2c] hover:bg-[#d31a2c]/10 px-8 py-6 text-lg"
            >
              Conócenos
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
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-[#d31a2c] transition-colors"
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
  );
}
