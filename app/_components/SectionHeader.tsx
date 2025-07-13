interface SectionHeaderProps {
  title: string;
  pipeColor?: "bg-lavanda" | "bg-limao";
}

export default function SectionHeader({
  title,
}: // pipeColor,
SectionHeaderProps) {
  return (
    <div className="flex items-center justify-center relative w-4/5 lg:w-3/4">
      <h2 className="z-20 text-3xl 2xl:text-4xl text-gray-700 text-center">
        {title}
      </h2>

      {/* <div
        className={cn(
          "flex absolute w-2/3 right-0 bottom-1 z-10 h-1",
          pipeColor
        )}
      /> */}
    </div>
  );
}
