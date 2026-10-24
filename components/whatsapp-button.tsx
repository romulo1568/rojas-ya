"use client"

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number (include country code, no + sign)
  const WHATSAPP_NUMBER = "51968886615" // Example: Peru number
  const WHATSAPP_MESSAGE = encodeURIComponent("Hola! Quiero más información sobre sus servicios.")

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#e8b643] hover:bg-[#d4a32f] text-white rounded-full shadow-2xl transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  )
}