"use client";

// components/WhatsAppButton.tsx
import React, { useState, useEffect } from "react";

const WhatsAppButton: React.FC = () => {
  const [isInitiallyExpanded, setIsInitiallyExpanded] = useState(true); // Controla a expansão inicial
  const [isHovered, setIsHovered] = useState(false); // Controla o hover do mouse

  useEffect(() => {
    // Timer para a retração automática após 4 segundos
    const timer = setTimeout(() => {
      setIsInitiallyExpanded(false); // Define que a expansão inicial terminou
    }, 4000);

    return () => clearTimeout(timer); // Limpa o timer
  }, []); // Executa apenas uma vez ao montar o componente

  // Lógica para determinar se o botão deve estar expandido
  // Ele estará expandido se:
  // 1. Ainda estiver no período de expansão inicial (antes dos 4 segundos)
  // OU
  // 2. O mouse estiver sobre ele
  const isExpanded = isInitiallyExpanded || isHovered;

  const handleWhatsAppClick = () => {
    const phoneNumber = "5581984828889"; // Seu número de telefone
    const message =
      "Olá! Venho do site da ISA Tech e gostaria de fazer um orçamento."; // Sua mensagem
    const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para URL

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed bottom-24 right-4 flex items-center cursor-pointer z-30"
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)} // Expande ao passar o mouse
      onMouseLeave={() => setIsHovered(false)} // Retrai ao tirar o mouse
    >
      <div
        className={`
          flex items-center bg-white rounded-full shadow-lg p-2
          transition-all duration-700 ease-in-out
          ${isExpanded ? "pr-4" : "pr-2 pl-0"} 
        `}
      >
        {/* Div do texto com animação de largura e opacidade */}
        <div
          className={`
            flex items-center space-x-2 mr-2 overflow-hidden
            transition-all duration-700 ease-in-out // Transição para a largura máxima e opacidade
            ${isExpanded ? "max-w-xs opacity-100" : "max-w-0 opacity-0"}
          `}
        >
          <div className="relative flex-shrink-0">
            {/* Ícone interno do WhatsApp com contorno */}
            <img
              src="/images/assistant.png" // Adicione um ícone do WhatsApp com contorno (opcional, pode ser um SVG)
              alt="WhatsApp"
              className="w-8 h-8 rounded-full"
            />
            {/* Círculo verde menor no ícone */}
            <div className="absolute top-0 right-0 bg-green-500 rounded-full border-2 border-white">
              <img
                src="/svg/whatsapp.svg" // Adicione um ícone do WhatsApp preenchido
                alt="WhatsApp"
                className="w-3 h-3"
              />
            </div>
          </div>
          <span className="text-gray-700 whitespace-nowrap text-nowrap">
            Fale comigo no Whatsapp
          </span>
        </div>

        {/* Botão principal do WhatsApp (o círculo verde) */}
        <div className="bg-green-500 rounded-full p-3 flex-shrink-0 flex items-center justify-center">
          <img
            src="/svg/whatsapp.svg" // Adicione um ícone do WhatsApp branco
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
