import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const colorPairs = [
  { textColor: "text-verde-musgo", bgColor: "bg-limao" },
  { textColor: "text-lavanda-escuro", bgColor: "bg-lavanda" },
  { textColor: "text-verde-musgo", bgColor: "bg-neon" },
  { textColor: "text-neon", bgColor: "bg-lavanda-escuro" },
  { textColor: "text-neon", bgColor: "bg-verde-musgo" },
];

type FeatureItem = {
  title: string;
  icon: React.ElementType;
};

type Props = {
  items: FeatureItem[];
};

// Função para embaralhar um array (Fisher-Yates)
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function FeatureCardsRandomColor({ items }: Props) {
  let colorQueue = shuffle(colorPairs);
  let lastColorIdx = -1;

  const itemsWithColors = items.map((item) => {
    // Se esgotou as cores, reembaralha, evitando repetição com a última cor usada
    if (colorQueue.length === 0) {
      const newQueue = shuffle(colorPairs);
      // Evita que a última cor do ciclo anterior seja igual à primeira do novo ciclo
      if (
        lastColorIdx !== -1 &&
        colorPairs[lastColorIdx].bgColor === newQueue[0].bgColor &&
        colorPairs[lastColorIdx].textColor === newQueue[0].textColor
      ) {
        // Troca a primeira cor do novo ciclo com outra posição
        if (newQueue.length > 1) {
          [newQueue[0], newQueue[1]] = [newQueue[1], newQueue[0]];
        }
      }
      colorQueue = newQueue;
    }
    const color = colorQueue.shift()!;
    lastColorIdx = colorPairs.findIndex(
      (c) => c.bgColor === color.bgColor && c.textColor === color.textColor
    );
    return { ...item, ...color };
  });

  return (
    <div className="flex flex-wrap gap-8">
      {itemsWithColors.map((item, index) => (
        <div
          className={cn(
            "flex w-full",
            index % 2 === 1 ? "justify-end" : "justify-start"
          )}
          key={item.title}
        >
          <Button
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-4",
              item.bgColor,
              item.textColor
            )}
          >
            <item.icon size={24} />
            <span className="font-semibold">{item.title}</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
