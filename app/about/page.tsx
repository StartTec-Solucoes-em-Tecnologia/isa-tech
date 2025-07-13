import { TimelineDemo } from "../_components/Timeline";
import { BentoDemo } from "../_components/AboutGrid";
import HeroImageFade from "../_components/HeroImageFade";

const usersImages = [
  "/images/about/user1.png",
  "/images/about/user2.png",
  "/images/about/user1.png",
  "/images/about/user2.png",
  "/images/about/user1.png",
  "/images/about/user2.png",
];

export default function AboutPage() {
  return (
    <main className="h-full w-full bg-white">
      <section className="h-[80vh] w-full flex flex-row px-[5%] items-center justify-between pt-[120px] overflow-hidden">
        <div className="grid grid-cols-2 w-[45%]">
          <div className="flex flex-col gap-12 -pt282">
            {usersImages.map(
              (item, index) => index < 3 && <HeroImageFade key={index} />
            )}
          </div>

          <div className="flex flex-col gap-12 pt-28">
            {usersImages.map(
              (item, index) => index >= 3 && <HeroImageFade key={index} />
            )}
          </div>
        </div>

        <div className="flex w-[45%] flex-col">
          <h1 className="text-3xl text-verde-musgo">
            Muito além de um sistema: somos parceiros da boa medicina.
          </h1>
          <p>
            A ISA TECH nasceu para transformar a forma como médicos e clínicas
            vivem a gestão.
            <br />
            <br />
            Com uma plataforma completa, suporte real e foco no que importa,
            tornamos os bastidores da rotina médica mais leves, organizados e
            seguros.
            <br />
            <br />
            Acreditamos que tempo, clareza e tranquilidade são essenciais para
            cuidar bem — e é isso que nossa tecnologia entrega.
            <br />
            <br />
            Na prática, somos mais do que um sistema: somos inteligência
            aplicada com empatia, ajudando profissionais da saúde a viverem com
            mais eficiência, bem-estar e propósito.
          </p>
        </div>
      </section>

      <section className="h-[80vh] w-full flex flex-row px-[5%] items-center justify-between pt-[120px] bg-limao/30 overflow-hidden">
        <BentoDemo />
      </section>

      <section className="h-fit w-full flex flex-row px-[5%] items-center justify-between pt-[120px]">
        <TimelineDemo />
      </section>
    </main>
  );
}
