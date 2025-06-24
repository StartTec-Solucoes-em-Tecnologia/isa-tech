"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imageUrl = ["/images/hero/desktop.png", "/images/hero/mobile.png"];
const imageWidth = [700, 320];
const imageHeight = [610, 280];

export default function HeroImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const index = isMobile ? 1 : 0;

  return (
    <Image
      alt="Imagem da hero mobile"
      src={imageUrl[index]}
      width={imageWidth[index]}
      height={imageHeight[index]}
      className="floating z-20 lg:w-[533px] h-[465px] 2xl:w-[700px] 2xl:h-[610px]"
    />
  );
}
