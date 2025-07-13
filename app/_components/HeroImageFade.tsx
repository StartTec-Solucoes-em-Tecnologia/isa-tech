"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/about/user1.png",
  "/images/about/user2.png",
  "/images/about/user1.png",
  "/images/about/user2.png",
];

export default function HeroImageFade() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 2500);
    const next = setTimeout(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
      setFade(true);
    }, 3000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <div className="relative w-[300px] h-auto flex items-center justify-center">
      <Image
        src={heroImages[index]}
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
