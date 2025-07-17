// Exemplo: src/app/_components/TimelineDemo.tsx (ou onde você quiser usar)
import { Timeline } from "@/components/ui/timeline"; // Importe o componente e a interface

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
    <div className="w-full">
      <Timeline
        data={data}
        sectionHeaderTitle="Nossa jornada até aqui — e além"
        sectionHeaderDescription="A ISA TECH nasceu do desejo de mudar a experiência da gestão médica. Veja como essa ideia se transformou em realidade."
      />
    </div>
  );
}
