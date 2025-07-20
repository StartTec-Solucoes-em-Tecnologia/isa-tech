"use client";

import { ArrowLeft, Grab, Pointer } from "lucide-react";
import { useEffect, useState } from "react";

interface AnimatedProps {
  hiddenLg?: boolean;
}

export default function AnimatedPointer({ hiddenLg }: AnimatedProps) {
  const [showPointer, setShowPointer] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPointer(true);
      setStartAnimation(false);

      // 2s depois, troca ícone
      setTimeout(() => {
        setShowPointer(false);
      }, 1000);

      // 3s depois do início, inicia movimento
      // setTimeout(() => {
      //   setStartAnimation(true);
      // }, 3000);
    }, 4000); // loop total dura 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex w-full justify-center items-center relative h-10 ${
        startAnimation ? "switchToLeft" : ""
      } ${hiddenLg ? "lg:hidden" : ""}`}
    >
      <div
        className={`absolute transition-opacity duration-500 ${
          showPointer ? "opacity-100" : "opacity-0"
        }`}
      >
        <Pointer size={24} className="text-verde-musgo" />
      </div>
      <div
        className={`absolute flex flex-row gap-2 -ml-6 transition-opacity duration-500 ${
          showPointer ? "opacity-0" : "opacity-100"
        }`}
      >
        <ArrowLeft size={16} className="text-verde-musgo" />
        <Grab size={24} className="text-verde-musgo" />
      </div>
    </div>
  );
}
