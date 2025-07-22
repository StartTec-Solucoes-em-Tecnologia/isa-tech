"use client";

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

  // Reativando a lógica de arrasto para desktop
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // --- Lógica de Arrasto para Rolagem (Ativa apenas em desktop/telas maiores) ---
  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
      // Verifica se é uma tela mobile (menor que md) para NÃO aplicar o arrasto manual
      // ou se for touch event (mobile), o browser já gerencia bem o scroll.
      // O scroll snap vai dominar no mobile.
      if (window.innerWidth < 768 && "touches" in e) {
        return; // Não interfere com o scroll snap no mobile
      }
      if ("button" in e && e.button !== 0) return; // Apenas botão esquerdo do mouse

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

      // Impede o comportamento padrão apenas se estiver arrastando com o mouse
      if ("buttons" in e && e.buttons === 1) {
        e.preventDefault();
      } else if ("touches" in e) {
        // Para touch, podemos deixar o preventDefault, mas o scroll snap já estará ativo
      }

      const currentX = "touches" in e ? e.touches[0].pageX : e.pageX;
      // Multiplicador de sensibilidade para desktop, se desejar um arrasto mais rápido
      const sensitivity = 1; // Ou 1.5, 2.0 para maior sensibilidade no desktop
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
      // Eventos de mouse para desktop
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp); // Para quando o mouse sai da área

      // Eventos de touch para mobile - deixar o browser gerenciar com scroll snap
      // removemos os listeners touchMove e touchEnd personalizados aqui para não interferir
      // com o scroll snap no mobile, mas mantemos o onTouchStart no JSX.
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
        if (maxVisibleIndex !== -1) {
          setActiveItemIndex(maxVisibleIndex);
        }
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

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans py-10">
      {/* Cabeçalho da Seção (Opcional) */}
      {(sectionHeaderTitle || sectionHeaderDescription) && (
        <div className="flex flex-col text-center w-full items-center justify-center gap-2 lg:mb-10 px-[5%]">
          {sectionHeaderTitle && (
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
              {sectionHeaderTitle}
            </h2>
          )}
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
        className={`relative flex flex-row overflow-x-scroll scroll-smooth select-none
                   snap-x snap-mandatory lg:snap-none`} // snap-x snap-mandatory apenas para mobile, lg:snap-none para desktop
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown} // Ativado para mouse (desktop)
        onTouchStart={handleMouseDown} // Ativado para touch (mobile), mas o JS de arrasto será desativado em handleMouseDown
      >
        {/* Linha de fundo da timeline */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-[linear-gradient(to_right,transparent_0%,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ width: "10000px", transform: "translateY(-50%)" }}
        >
          {/* Linha de progresso */}
          <div
            className="absolute inset-y-0 left-0 h-[2px] bg-gradient-to-r from-limao via-verde-musgo to-transparent from-[0%] via-[10%] rounded-full"
            style={{ width: "100%", opacity: 1 }}
          />
        </div>

        {/* Mapeia os itens da timeline */}
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`flex flex-col items-center justify-center min-w-[220px] md:min-w-[300px] lg:min-w-[400px] p-6 relative flex-shrink-0 flex-grow-0 snap-center lg:snap-none`}
          >
            {/* Círculo da timeline (a "bolinha") */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center z-0">
              <div
                className={`h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700 p-2 transition-colors duration-300
                  ${
                    index === activeItemIndex
                      ? "bg-verde-musgo"
                      : "bg-neutral-200 dark:bg-neutral-800"
                  }`}
              />
            </div>

            {/* Conteúdo do item da timeline (o card de texto) */}
            <div className="pt-4 pb-4 w-80 flex-col text-center relative z-10 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg h-full flex items-center justify-center">
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
          display: none; /* For Chrome, Safari, and Opera */
        }
        .overflow-x-scroll {
          -ms-overflow-style: none; /* For Internet Explorer and Edge */
          scrollbar-width: none; /* For Firefox */
        }

        /* Scroll padding para Mobile (aplicado por padrão, ou seja, em telas menores que 'md') */
        .scroll-container-padding {
          padding-left: calc(
            50vw - 110px
          ); /* 50% da viewport menos metade da largura do card (220px/2) */
          padding-right: calc(
            50vw - 110px
          ); /* Mesma lógica para o lado direito */
        }

        /* Scroll padding para Desktop (a partir de 'md' e 'lg') */
        @media (min-width: 768px) {
          /* md */
          .scroll-container-padding {
            padding-left: 1rem; /* Um padding fixo, ou o que você tinha antes para desktop */
            padding-right: 1rem; /* Um padding fixo, ou o que você tinha antes para desktop */
          }
        }

        @media (min-width: 1024px) {
          /* lg */
          .scroll-container-padding {
            padding-left: 2rem; /* Exemplo de padding maior para LG, ajuste conforme necessário */
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};
