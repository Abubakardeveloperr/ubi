import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+923076633037" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 
                 bg-red-600 hover:bg-red-700 text-white px-4 py-3 
                 rounded-full flex items-center gap-2 shadow-lg 
                 hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp className="text-xl animate-pulse" />
     
    </a>
  );
};

export default WhatsAppButton;
