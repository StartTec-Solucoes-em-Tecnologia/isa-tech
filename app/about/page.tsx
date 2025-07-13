import { TimelineDemo } from "../_components/Timeline";
import HeroImageFade from "../_components/HeroImageFade";
import SectionHeader from "../_components/SectionHeader";
import { Briefcase, Eye, Heart } from "lucide-react";
import { AnimatedTestimonialsDemo } from "../_components/AboutFeedback";

const usersImages = [
  "/images/about/user1.png",
  "/images/about/user2.png",
  "/images/about/user3.jpg",
  "/images/about/user4.jpg",
  "/images/about/user5.jpg",
  "/images/about/user6.jpg",
  "/images/about/user7.jpg",
  "/images/about/user8.jpg",
  "/images/about/user9.jpg",
  "/images/about/user10.jpg",
  "/images/about/user11.jpg",
];

function getRandomDelay(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotateArray<T>(arr: T[], positions: number): T[] {
  return arr.slice(positions).concat(arr.slice(0, positions));
}

export default function AboutPage() {
  // Definindo configurações para cada "slot" do mural
  const muralConfigs = [
    {
      initialIndex: 0,
      delay: getRandomDelay(0, 800),
      transitionInterval: getRandomInterval(3200, 5200),
    },
    {
      initialIndex: 1,
      delay: getRandomDelay(400, 1200),
      transitionInterval: getRandomInterval(3500, 6000),
    },
    {
      initialIndex: 2,
      delay: getRandomDelay(800, 1600),
      transitionInterval: getRandomInterval(4000, 7000),
    },
    {
      initialIndex: 3,
      delay: getRandomDelay(1200, 2000),
      transitionInterval: getRandomInterval(3700, 6500),
    },
    {
      initialIndex: 4,
      delay: getRandomDelay(1600, 2400),
      transitionInterval: getRandomInterval(3300, 6000),
    },
    {
      initialIndex: 5,
      delay: getRandomDelay(2000, 3000),
      transitionInterval: getRandomInterval(4200, 8000),
    },
  ];

  // Gera arrays rotacionados para cada slot
  const imagesPerSlot = muralConfigs.map((cfg, idx) =>
    rotateArray(usersImages, idx)
  );

  return (
    <main className="h-full w-full bg-white">
      <section className="pb-12 sm:h-[90vh] w-full flex flex-col sm:flex-row px-[5%] items-center justify-evenly pt-[120px] overflow-hidden">
        <div className="flex sm:grid sm:grid-cols-2 w-full sm:w-1/2 gap-6 h-full sm:h-auto justify-center">
          <div className="flex-col gap-12 -pt282 hidden sm:flex">
            {muralConfigs.slice(0, 3).map((cfg, index) => (
              <HeroImageFade
                key={index}
                images={imagesPerSlot[index]}
                initialIndex={0}
                delay={cfg.delay}
                transitionInterval={cfg.transitionInterval}
              />
            ))}
          </div>

          <div className="sm:flex hidden flex-col gap-12 pt-28">
            {muralConfigs.slice(3).map((cfg, index) => (
              <HeroImageFade
                key={index + 3}
                images={imagesPerSlot[index + 3]}
                initialIndex={0}
                delay={cfg.delay}
                transitionInterval={cfg.transitionInterval}
              />
            ))}
          </div>

          <div className="flex flex-row gap-3 sm:hidden">
            {muralConfigs.map((cfg, index) => (
              <HeroImageFade
                key={index}
                images={imagesPerSlot[index]}
                initialIndex={0}
                delay={cfg.delay}
                transitionInterval={cfg.transitionInterval}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full sm:w-1/2 flex-col gap-6 pt-6 sm:pt-0">
          <h1 className="text-3xl text-verde-musgo">
            Muito além de um sistema: somos parceiros da boa medicina.
          </h1>
          <p className="text-sm xl:text-base">
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

      <section className="h-fit w-full flex flex-col px-[5%] items-center gap-12 justify-between py-[120px] bg-limao/30 overflow-hidden">
        <SectionHeader title="O que nos guia, do código ao cuidado" />

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {/* Missão Card */}
            <div className="bg-[#274F4A] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
              <Briefcase className="w-12 h-12 mb-4 text-[#E6ECC0]" />{" "}
              {/* Ícone da Maleta */}
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-sm font-light leading-relaxed">
                Organize agenda, prontuário, financeiro e contabilidade em uma
                única plataforma intuitiva.
              </p>
            </div>

            {/* Visão Card */}
            <div className="bg-[#C7D1F5] text-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
              <Eye className="w-12 h-12 mb-4 text-gray-700" />{" "}
              {/* Ícone do Olho */}
              <h3 className="text-xl font-semibold mb-2">Visão</h3>
              <p className="text-sm font-light leading-relaxed">
                Organize agenda, prontuário, financeiro e contabilidade em uma
                única plataforma intuitiva.
              </p>
            </div>

            {/* Valores Card */}
            <div className="bg-[#E6ECC0] text-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
              <Heart className="w-12 h-12 mb-4 text-gray-700" />{" "}
              {/* Ícone do Coração */}
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <p className="text-sm font-light leading-relaxed">
                Organize agenda, prontuário, financeiro e contabilidade em uma
                única plataforma intuitiva.
              </p>
            </div>
          </div>
        </div>

        {/* <BentoDemo /> */}
      </section>

      <section className="h-fit w-full flex flex-row px-[5%] items-center justify-between pt-[120px]">
        <TimelineDemo />
      </section>

      <section className="flex flex-col items-center py-[120px]">
        <div className="flex gap-2 flex-col items-center w-full">
          <SectionHeader title="Pessoas reais. Suporte de verdade." />
          <p className="w-2/3 xl:w-1/2 text-center">
            A ISA TECH nasceu do desejo de mudar a experiência da gestão médica.
            Veja como essa ideia se transformou em realidade.
          </p>
        </div>

        <AnimatedTestimonialsDemo />

        <div className="flex w-full items-center justify-center">
          <p className="w-2/3 xl:w-1/2 text-center">
            Por trás da ISA TECH, há um time de especialistas apaixonados por
            fazer a diferença.
            <br />
            <br />
            Somos desenvolvedores, designers, atendentes e estrategistas — todos
            unidos por um propósito comum: tornar a rotina médica mais leve.
            Acreditamos no suporte próximo e humano. Fale com a gente, sem
            burocracia.
          </p>
        </div>
      </section>
    </main>
  );
}
