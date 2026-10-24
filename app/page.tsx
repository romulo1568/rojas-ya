"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AreasNegocio } from "@/components/areas-negocio"
import { ClientesCarousel } from "@/components/clientes-carousel"
import { ProyectosCarousel } from "@/components/proyectos-grid"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AreasNegocio />
      <ClientesCarousel />
      <ProyectosCarousel />
      <About />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
