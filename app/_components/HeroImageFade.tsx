"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface HeroImageFadeProps {
  images: string[];
  initialIndex?: number;
  delay?: number;
  transitionInterval?: number; // tempo entre trocas, em ms
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function HeroImageFade({
  images,
  initialIndex = 0,
  delay = 0,
  transitionInterval = 3500, // valor padrão
}: HeroImageFadeProps) {
  const [shuffledImages, setShuffledImages] = useState(images);
  const [index, setIndex] = useState(initialIndex % images.length);
  const [fade, setFade] = useState(true);
  const [started, setStarted] = useState(false);

  // Embaralhar imagens apenas no cliente, após o mount
  useEffect(() => {
    setShuffledImages(shuffleArray(images));
    // Reiniciar índice para garantir que está dentro do novo array
    setIndex(initialIndex % images.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Primeiro ciclo com delay inicial
    if (!started) {
      setStarted(true);
      setFade(true);
      const fadeOut = setTimeout(
        () => setFade(false),
        Math.max(transitionInterval - 500, 500) + delay
      );
      const next = setTimeout(() => {
        setIndex((prev) => (prev + 1) % shuffledImages.length);
        setFade(true);
      }, transitionInterval + delay);
      return () => {
        clearTimeout(fadeOut);
        clearTimeout(next);
      };
    }
    // Próximos ciclos sempre com o mesmo intervalo
    const fadeOut = setTimeout(
      () => setFade(false),
      Math.max(transitionInterval - 500, 500)
    );
    const next = setTimeout(() => {
      setIndex((prev) => (prev + 1) % shuffledImages.length);
      setFade(true);
    }, transitionInterval);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index, delay, transitionInterval, shuffledImages.length, started]);

  return (
    <div className="relative w-[70px] h-auto sm:w-[100px] md:w-[150px] md:h-[200px] lg:w-[200px] 2xl:w-[300px] lg:h-[300px] 2xl:h-[400px] flex items-center justify-center">
      <Image
        src={shuffledImages[index]}
        alt="Usuário em destaque"
        width={500}
        height={500}
        className={`object-cover w-full h-full rounded-2xl shadow-xl transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
