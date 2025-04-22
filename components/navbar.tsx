"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Productos", href: "#products" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        <img src="/images/rojaspngpeque.png" alt="Rojas Ya" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#d31a2c] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#d31a2c] hover:bg-[#b01522] text-white">Visítanos</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#d31a2c] font-medium py-2 text-lg border-b border-gray-100"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#d31a2c] hover:bg-[#b01522] text-white mt-4" onClick={toggleMenu}>
            Visítanos
          </Button>
        </nav>
      </div>
    </header>
  )
}
