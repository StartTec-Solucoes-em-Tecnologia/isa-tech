"use client";

import SectionHeader from "@/app/_components/SectionHeader";
import React, { useEffect, useRef, useState, useCallback } from "react";
import type { ReactNode } from "react";

// Definição da interface para os dados da timeline
export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  sectionHeaderTitle?: string;
  sectionHeaderDescription?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  data,
  sectionHeaderTitle,
  sectionHeaderDescription,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Estado para controlar se o componente já foi animado
  const [hasAnimated, setHasAnimated] = useState(false);

  // Reativando a lógica de arrasto para desktop
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0); // Estado para largura da barra de progresso

  // NOVO ESTADO: Largura total do conteúdo rolável para a linha de fundo
  const [totalContentWidth, setTotalContentWidth] = useState(0);

  // --- Lógica de Arrasto para Rolagem (Ativa apenas em desktop/telas maiores) ---
  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      if (window.innerWidth < 768 && "touches" in e) {
        return;
      }
      if ("button" in e && e.button !== 0) return;

      setIsDragging(true);
      if (scrollContainerRef.current) {
        startX.current = "touches" in e ? e.touches[0].pageX : e.pageX;
        scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = "grabbing";
      }
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;

      if ("buttons" in e && e.buttons === 1) {
        e.preventDefault();
      }

      const currentX = "touches" in e ? e.touches[0].pageX : e.pageX;
      const sensitivity = 1;
      const walk = (currentX - startX.current) * sensitivity;

      scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  }, []);

  // Adiciona e remove os event listeners para o arrasto (principalmente para desktop)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [handleMouseMove, handleMouseUp]);

  // --- Lógica do IntersectionObserver para Bolinha Ativa ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleIndex = -1;
        let maxVisibilityRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement
            );

            if (index !== -1) {
              const containerRect =
                scrollContainerRef.current?.getBoundingClientRect();
              const itemRect = entry.boundingClientRect;

              if (containerRect && itemRect) {
                const viewportCenter =
                  containerRect.left + containerRect.width / 2;
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distanceToCenter = Math.abs(viewportCenter - itemCenter);

                if (
                  maxVisibleIndex === -1 ||
                  entry.intersectionRatio > maxVisibilityRatio ||
                  (entry.intersectionRatio === maxVisibilityRatio &&
                    distanceToCenter <
                      Math.abs(
                        viewportCenter -
                          ((itemRefs.current[
                            maxVisibleIndex
                          ]?.getBoundingClientRect().left || 0) +
                            (itemRefs.current[maxVisibleIndex]?.offsetWidth ||
                              0) /
                              2)
                      ))
                ) {
                  maxVisibilityRatio = entry.intersectionRatio;
                  maxVisibleIndex = index;
                }
              }
            }
          }
        });
        // if (maxVisibleIndex !== -1) {
        // setActiveItemIndex(maxVisibleIndex);
        // }
      },
      {
        root: scrollContainerRef.current,
        rootMargin: "0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
      observer.disconnect();
    };
  }, [data]);

  // --- Lógica de Animação de Rolagem Automática (Personalizada para lentidão) ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    const lastItem = itemRefs.current[data.length - 1];

    if (!container || !lastItem || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startScrollLeft = container.scrollLeft;
          // Padding para o cálculo da animação automática
          const containerPaddingRight = container.clientWidth * 0.6; // 60%

          const targetScrollLeft = Math.max(
            0,
            lastItem.offsetLeft +
              lastItem.offsetWidth -
              container.clientWidth +
              containerPaddingRight
          );

          const duration = 2500;
          let startTime: DOMHighResTimeStamp | null = null;

          const animateScroll = (currentTime: DOMHighResTimeStamp) => {
            if (!startTime) {
              startTime = currentTime;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeInOutQuad = (t: number) =>
              t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const easedProgress = easeInOutQuad(progress);

            container.scrollLeft =
              startScrollLeft +
              (targetScrollLeft - startScrollLeft) * easedProgress;

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          };

          requestAnimationFrame(animateScroll);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [data.length, hasAnimated]);

  // --- Lógica para atualizar a barra de progresso E a largura total da linha ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateMeasurements = () => {
      // Obter os paddings computados em pixels
      // const style = window.getComputedStyle(container);
      // const scrollPaddingLeft = parseFloat(style.scrollPaddingLeft || "0");
      // const scrollPaddingRight = parseFloat(style.scrollPaddingRight || "0");

      // Calcular a largura total do conteúdo visível + o padding que queremos abranger
      // A largura da linha de fundo deve ser igual à scrollWidth do contêiner
      // que inclui o conteúdo e os paddings visíveis.
      const contentScrollWidth = container.scrollWidth;

      setTotalContentWidth(contentScrollWidth); // Define a largura da linha de fundo

      // Cálculo da progressBarWidth
      const maxScrollLeft = contentScrollWidth - container.clientWidth;
      let calculatedProgress = 0;
      if (maxScrollLeft > 0) {
        calculatedProgress = (container.scrollLeft / maxScrollLeft) * 100;
        calculatedProgress = Math.max(0, Math.min(100, calculatedProgress));
      } else if (data.length > 0) {
        calculatedProgress = 100;
      }
      setProgressBarWidth(calculatedProgress);
    };

    // Atualiza as medidas inicialmente e quando o contêiner é dimensionado ou rolado
    updateMeasurements();

    container.addEventListener("scroll", updateMeasurements);
    window.addEventListener("resize", updateMeasurements);

    const mutationObserver = new MutationObserver(updateMeasurements);
    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      container.removeEventListener("scroll", updateMeasurements);
      window.removeEventListener("resize", updateMeasurements);
      mutationObserver.disconnect();
    };
  }, [data.length]);

  // Inicializa a barra de progresso no carregamento
  useEffect(() => {
    // Isso garante que setTotalContentWidth seja chamado no primeiro render também
    const container = scrollContainerRef.current;
    if (container) {
      // Pequeno timeout para garantir que o layout esteja completo
      const timeoutId = setTimeout(() => {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const maxScrollLeft = scrollWidth - clientWidth;
        let initialProgress = 0;
        if (maxScrollLeft <= 0 && data.length > 0) {
          initialProgress = 100;
        }
        setProgressBarWidth(initialProgress);
        setTotalContentWidth(scrollWidth); // Inicializa também a largura total da linha de fundo
      }, 0); // Executa no próximo tick da fila de eventos

      return () => clearTimeout(timeoutId);
    }
  }, [data.length]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans py-10">
      {/* Cabeçalho da Seção (Opcional) */}
      {(sectionHeaderTitle || sectionHeaderDescription) && (
        <div className="flex flex-col text-center w-full items-center justify-center gap-2 lg:mb-10 px-[5%]">
          {sectionHeaderTitle && <SectionHeader title={sectionHeaderTitle} />}
          {sectionHeaderDescription && (
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl">
              {sectionHeaderDescription}
            </p>
          )}
        </div>
      )}

      {/* Contêiner da Timeline com Lógicas de Scroll Responsivas */}
      <div
        ref={scrollContainerRef}
        className={`relative flex flex-row overflow-x-scroll lg:px-16 select-none timeline-scroll-padding
                   snap-x snap-mandatory lg:snap-none`}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/*
          IMPORTANTE: A linha de fundo da timeline (track) e a barra de progresso
          PRECISAM ESTAR DENTRO do contêiner rolável (scrollContainerRef)
          e ter sua largura definida pela scrollWidth para cobrir todo o conteúdo.
        */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2"
          style={{ width: `${totalContentWidth}px` }} // Define a largura total da linha de fundo
        >
          {/* Linha de progresso (a barra que se move) */}
          <div
            className="absolute inset-y-0 left-0 h-[2px] bg-gradient-to-r from-limao via-verde-musgo to-verde-musgo rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progressBarWidth}%` }}
          />
        </div>

        {/* Mapeia os itens da timeline */}
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`flex flex-col items-center justify-center min-w-[126px] md:min-w-[240px] lg:min-w-[320px] lg:max-w-[500px] p-6 relative flex-shrink-0 flex-grow-0 snap-center lg:snap-none`}
          >
            {/* Círculo da timeline (a "bolinha") */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center z-20">
              <div
                className={`h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700 p-2 transition-colors duration-300
                  ${
                    index === activeItemIndex
                      ? "bg-verde-musgo"
                      : "bg-neutral-200 dark:bg-neutral-800"
                  }`}
              />
            </div> */}

            {/* Conteúdo do item da timeline (o card de texto) */}
            <div className="pt-4 pb-4 w-56 lg:w-64 flex-col text-center relative z-10 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg h-full flex items-center justify-evenly">
              <h3 className="text-xl md:text-3xl font-bold text-verde-musgo dark:text-neutral-500 mb-4">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Bloco de estilo JSX para ocultar a barra de rolagem de forma robusta e definir scroll-padding */}
      <style jsx>{`
        .overflow-x-scroll::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Padding AUMENTADO para 60vw */
        .timeline-scroll-padding {
          scroll-padding-left: 60vw;
          scroll-padding-right: 60vw;
        }
      `}</style>
    </div>
  );
};
