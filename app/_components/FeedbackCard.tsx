"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client"; // Importe motion corretamente

interface Testimonial {
  name: string;
  postData: string;
  image: string;
  text: string;
}

const MAX_CHARS = 140; // Defina o número máximo de caracteres a serem exibidos inicialmente em telas maiores

export default function FeedbackCard({
  name,
  postData,
  image,
  text,
}: Testimonial) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const needsReadMoreOnDesktop = text.length > MAX_CHARS;

  let displayedText = text;

  // Se não for mobile e precisar de "Ler Mais" e não estiver expandido, trunca o texto
  // Note que isExpanded é manipulado pelos eventos de mouseEnter/Leave.
  // A lógica do texto exibido precisa refletir a necessidade de truncar APENAS quando não expandido E em desktop.
  if (!isMobile && needsReadMoreOnDesktop && !isExpanded) {
    displayedText = `${text.substring(0, MAX_CHARS)}...`;
  }

  // Não precisamos de toggleExpand se estamos usando onMouseEnter/onMouseLeave
  // O estado isExpanded será controlado diretamente pelos eventos de hover.

  return (
    <motion.div // Volte a usar motion.div aqui
      layout // MUITO IMPORTANTE para animar mudanças de tamanho de forma suave
      onMouseEnter={() => setIsExpanded(true)} // Expande ao passar o mouse
      onMouseLeave={() => setIsExpanded(false)} // Retrai ao tirar o mouse
      className="bg-white rounded-xl cursor-pointer shadow-md p-6 flex flex-col items-start min-h-[220px] mx-auto w-full lg:w-[285px] xl:w-[350px] 2xl:w-[450px] transition-all duration-300 ease-in-out"
      // A classe transition-all ainda é útil para outras propriedades, mas 'layout' do motion cuida da altura.
    >
      <div className="flex flex-row items-center mb-4 gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-verde-musgo text-base">{name}</span>
          <span className="text-gray-500 text-sm">{postData}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm text-start leading-relaxed flex-grow">
        {displayedText}
      </p>

      {/* O botão é exibido APENAS se não for mobile E se precisar de "Ler Mais" no desktop */}
      {!isMobile && needsReadMoreOnDesktop && (
        <div // Use uma div para o botão, já que ele não é clicável diretamente para expandir/contrair
          className="mt-4 text-verde-musgo font-semibold cursor-pointer hover:underline self-end"
        >
          {isExpanded ? "Ler menos" : "Passe o mouse para ler mais"}
        </div>
      )}
    </motion.div>
  );
}
