"use client";

// Exemplo: src/app/_components/TimelineDemo.tsx (ou onde você quiser usar)
import { Timeline } from "@/components/ui/timeline"; // Importe o componente e a interface
import { useEffect, useState } from "react";
import { Pointer, Grab, ArrowLeft } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "2019",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Início da ideia: dois profissionais da área da saúde e tecnologia se
          unem para criar uma solução mais humana para clínicas.
        </p>
      ),
    },
    {
      title: "2020",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Desenvolvimento do primeiro MVP com foco em agenda, prontuário e
          atendimento.
        </p>
      ),
    },
    {
      title: "2021",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lançamento oficial da plataforma ISA TECH. Primeiras clínicas
          parceiras.
        </p>
      ),
    },
    {
      title: "2022",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Expansão da base de usuários e novos módulos: financeiro, contábil e
          relatórios avançados.
        </p>
      ),
    },
    {
      title: "2023",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Consolidação da ISA TECH em mais de 60 clínicas no Brasil.
        </p>
      ),
    },
    {
      title: "2024 e além",
      content: (
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Inovação contínua, novos recursos e a mesma missão: facilitar a vida
          de quem cuida.
        </p>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col gap-0">
      <Timeline
        data={data}
        sectionHeaderTitle="Nossa jornada até aqui — e além"
        sectionHeaderDescription="A ISA TECH nasceu do desejo de mudar a experiência da gestão médica. Veja como essa ideia se transformou em realidade."
      />

      <AnimatedPointer />

      <p className="text-center w-full items-center px-4 md:px-0">
        <strong className="text-verde-musgo">
          Clique e arraste para o lado
        </strong>{" "}
        para ver mais informações sobre nossa linha do tempo{" "}
      </p>
    </div>
  );
}

function AnimatedPointer() {
  const [showPointer, setShowPointer] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPointer(true);
      setStartAnimation(false);

      // 2s depois, troca ícone
      setTimeout(() => {
        setShowPointer(false);
      }, 2000);

      // 3s depois do início, inicia movimento
      setTimeout(() => {
        setStartAnimation(true);
      }, 3000);
    }, 4000); // loop total dura 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex w-full justify-center items-center relative h-8 mb-2 ${
        startAnimation ? "switchToLeft" : ""
      }`}
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
