"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" ||
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark")
    } else {
      setTheme("light")
    }

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Áreas de Negocio", href: "#areas" },
    { name: "Clientes", href: "#clientes" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* CAMBIA AQUI LOS NOMBRES DE LOS ARCHIVOS SI QUIERES USAR OTROS LOGOS */}
          <img
            src={theme === "dark" ? "/images/logoconcretoss.png" : "/images/logoconcretossblanco.png"}
            alt="Concretos y Asfaltos Cerro Blanco"
            className="h-20 md:h-12 lg:h-16 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-[#e8b643] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#e8b643] hover:bg-[#d4a33c] text-gray-900">Contáctanos</Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-[#e8b643] font-medium py-2 text-lg border-b border-gray-100 dark:border-gray-700"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-4">
            <Button className="bg-[#e8b643] hover:bg-[#d4a33c] text-gray-900" onClick={toggleMenu}>
              Contáctanos
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
