import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  pipeColor: "bg-lavanda" | "bg-limao";
}

export default function SectionHeader({
  title,
  pipeColor,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-center relative">
      <h2 className="font-bold text-xl z-10 xl:text-2xl 2xl:text-3xl text-gray-700 text-center">
        {title}
      </h2>

      <div
        className={cn(
          "flex absolute w-2/3 right-0 bottom-1 z-0 h-1",
          pipeColor
        )}
      />
    </div>
  );
}
