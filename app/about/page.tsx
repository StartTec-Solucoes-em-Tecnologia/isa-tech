import { TimelineDemo } from "../_components/Timeline";
import SectionHeader from "../_components/SectionHeader";
import {
  Briefcase,
  Eye,
  Heart,
  HeartHandshake,
  Lightbulb,
  SearchCode,
  UserLock,
  Zap,
} from "lucide-react";
import * as motion from "motion/react-client";
import Motion from "../_components/Motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

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
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="z-20"
      >
        <section
          id="hero"
          className="pb-12 sm:h-[90vh] w-full flex flex-col sm:flex-row px-[5%] items-center justify-evenly pt-[120px] overflow-hidden"
        >
          <div className="flex relative w-full lg:w-1/3 lg:ml-[5%] lg:xl:ml-[8%] justify-center lg:justify-start">
            <Image
              alt="Imagem da hero"
              src="/images/about/woman-looking-to-me.png"
              width={800}
              height={800}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="z-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] object-contain"
              priority
            />
            <Image
              alt="Imagem da hero"
              src="/images/hero/chat.png"
              width={400}
              height={400}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="floating-bottom z-20 w-[120px] h-[120px] sm:w-[94px] sm:h-[132px] 2xl:w-[129px] 2xl:h-[181px] object-contain absolute -top-[12%] left-[8%] sm:left-[18%] md:left-[25%] lg:-top-[12%] lg:-left-[8%] xl:left-0"
              priority
            />
            <Image
              alt="Imagem da hero"
              src="/images/hero/dra.png"
              width={200}
              height={200}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="floating-top z-20 w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] 2xl:w-[129px] 2xl:h-[129px] object-contain absolute bottom-[10%] left-[3%] sm:bottom-[25%] sm:left-[7%] lg:bottom-[34%] lg:-left-[28%]"
              priority
            />

            <Image
              alt="Imagem da hero"
              src="/images/hero/graphic.png"
              width={600}
              height={600}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="floating-bottom z-20 w-[140px] h-[140px] sm:w-[194px] sm:h-[125px] 2xl:w-[266px] 2xl:h-[172px] object-contain absolute -bottom-[40%] left-[20%] sm:-bottom-[20%] lg:-bottom-[20%] lg:-left-[28%] xl:-left-[18%]"
              priority
            />

            <Image
              alt="Imagem da hero"
              src="/images/hero/patient.png"
              width={200}
              height={200}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="floating-top z-20 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[100px] 2xl:h-[100px] object-contain absolute -bottom-[30%] right-[25%] lg:-bottom-[32%] lg:right-[38%]"
              priority
            />

            <Image
              alt="Imagem da hero"
              src="/images/hero/dashboard.png"
              width={600}
              height={600}
              // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
              className="floating-bottom z-20 w-[125px] h-[125px] sm:w-[242px] sm:h-[125px] 2xl:w-[277px] 2xl:h-[179px] object-contain absolute bottom-[5%] right-[4%] lg:-bottom-[6%] lg:-right-[22%] xl:-right-[12%] 2xl:-right-[5%]"
              priority
            />
          </div>

          <div className="flex w-full sm:w-2/5 flex-col gap-6 pt-6 sm:pt-0 text-verde-musgo">
            <TextGenerateEffect
              duration={2}
              filter={false}
              words={`Muito além de um sistema: somos parceiros da boa medicina.`}
            />
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
              aplicada com empatia, ajudando profissionais da saúde a viverem
              com mais eficiência, bem-estar e propósito.
            </p>
          </div>
        </section>
      </motion.div>

      <section
        id="principles"
        className="h-fit w-full flex flex-col px-[5%] items-center gap-12 justify-between py-[120px] bg-limao/30 overflow-hidden"
      >
        <SectionHeader title="O que nos guia, do código ao cuidado" />

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex gap-6 flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full">
            {/* Missão Card */}
            <Motion
              key={0}
              direction="top"
              identifier={0}
              className="flex w-full justify-center  md:w-md lg:w-xs"
            >
              <div className="bg-[#274F4A] text-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center w-4/5 lg:w-full">
                <Briefcase className="w-12 h-12 mb-4 text-[#E6ECC0]" />{" "}
                {/* Ícone da Maleta */}
                <h3 className="text-xl font-semibold mb-2">Missão</h3>
                <p className="text-sm font-light leading-relaxed">
                  Organize agenda, prontuário, financeiro e contabilidade em uma
                  única plataforma intuitiva.
                </p>
              </div>
            </Motion>

            {/* Visão Card */}
            <Motion
              key={1}
              direction="top"
              identifier={1}
              className="flex w-full justify-center md:w-md lg:w-xs"
            >
              <div className="bg-[#C7D1F5] text-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center w-4/5 lg:w-full">
                <Eye className="w-12 h-12 mb-4 text-gray-700" />{" "}
                {/* Ícone do Olho */}
                <h3 className="text-xl font-semibold mb-2">Visão</h3>
                <p className="text-sm font-light leading-relaxed">
                  Organize agenda, prontuário, financeiro e contabilidade em uma
                  única plataforma intuitiva.
                </p>
              </div>
            </Motion>
            <Motion
              key={2}
              direction="top"
              identifier={2}
              className="flex w-full justify-center md:w-md lg:w-xs"
            >
              {/* Valores Card */}
              <div className="bg-[#E6ECC0] text-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center w-4/5 lg:w-full">
                <Heart className="w-12 h-12 mb-4 text-gray-700" />{" "}
                {/* Ícone do Coração */}
                <h3 className="text-xl font-semibold mb-2">Valores</h3>
                <p className="text-sm font-light leading-relaxed">
                  Organize agenda, prontuário, financeiro e contabilidade em uma
                  única plataforma intuitiva.
                </p>
              </div>
            </Motion>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-12 justify-between">
          <SectionHeader title="Valores" />

          <div className="flex flex-row flex-wrap items-center justify-center w-full gap-12 xl:pl-[5%] 2xl:w-4/5">
            {/* Valor 1: Inovação que te acompanha */}
            <Motion key={3} direction="top" identifier={3}>
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-verde-musgo items-center justify-center rounded-full">
                  <Lightbulb className="text-limao" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Inovação que te acompanha
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Evoluímos sempre, criando soluções úteis, modernas e
                    práticas.
                  </p>
                </div>
              </div>
            </Motion>

            {/* Valor 2: Humanização real */}
            <Motion key={4} direction="top" identifier={4}>
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-limao items-center justify-center rounded-full">
                  <HeartHandshake className="text-verde-musgo" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Humanização real
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Tecnologia para aproximar, não afastar. Cuidamos de quem
                    cuida.
                  </p>
                </div>
              </div>
            </Motion>

            {/* Valor 3: Eficiência na prática */}
            <Motion
              key={5}
              direction="top"
              identifier={5}
              className="hidden lg:flex"
            >
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-lavanda items-center justify-center rounded-full">
                  <Zap className="text-verde-musgo" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Eficiência na prática
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Descomplicamos processos com inteligência e foco no
                    essencial.
                  </p>
                </div>
              </div>
            </Motion>

            {/* Valor 4: Transparência de verdade */}
            <Motion key={6} direction="top" identifier={6}>
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-lavanda items-center justify-center rounded-full">
                  <SearchCode className="text-verde-musgo" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Transparência de verdade
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Atuamos com ética, clareza e respeito – do atendimento ao
                    sistema.
                  </p>
                </div>
              </div>
            </Motion>

            {/* Valor 5: Segurança com presença */}
            <Motion key={7} direction="top" identifier={7}>
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-verde-musgo items-center justify-center rounded-full">
                  <UserLock className="text-limao" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Segurança com presença
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Protegemos dados com firmeza e oferecemos suporte ágil,
                    humano e constante.
                  </p>
                </div>
              </div>
            </Motion>

            <Motion
              key={8}
              direction="top"
              identifier={8}
              className="flex lg:hidden"
            >
              <div className="flex items-start gap-4 w-xs sm:w-md lg:w-xs">
                <div className="flex w-12 h-12 bg-lavanda items-center justify-center rounded-full">
                  <Zap className="text-verde-musgo" />
                </div>

                <div className="w-4/5">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
                    Eficiência na prática
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Descomplicamos processos com inteligência e foco no
                    essencial.
                  </p>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="h-fit w-full flex flex-row items-center justify-between pt-12 md:pt-[120px]"
      >
        <TimelineDemo />
      </section>

      <section
        id="motivation"
        className="relative w-full py-6 md:py-32 -mb-8 overflow-hidden bg-gradient-to-br from-white via-white to-[#E6ECC0]/50 dark:from-neutral-950 dark:via-neutral-950 dark:to-[#274F4A]/30"
      >
        <div className="max-w-7xl lg:w-11/12 xl:w-4/5 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
          <div>
            <h2 className="text-3xl 2xl:text-4xl text-gray-700 text-start">
              Acreditamos que a boa medicina começa com tempo e clareza.
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed my-8">
              Para cuidar bem, é preciso ter espaço para pensar, respirar e se
              conectar com as pessoas.
              <br />
              <br />
              Por isso, criamos tecnologia que organiza, protege e simplifica —
              com inteligência e empatia.
            </p>

            <p className="font-semibold text-[#274F4A] dark:text-[#E6ECC0]">
              Não desenvolvemos apenas sistemas: desenvolvemos ferramentas que
              libertam o profissional da saúde para ser, de fato, médico. É isso
              que nos move. Todos os dias.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/images/about/woman-using-laptop.png"
              alt="Profissional da saúde relaxado usando tecnologia moderna"
              className="rounded-xl shadow-2xl w-full h-auto max-w-lg md:max-w-none transform transition-transform duration-500 hover:scale-105"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* <section id="feedbacks" className="flex flex-col items-center py-[120px]">
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
      </section> */}
    </main>
  );
}
