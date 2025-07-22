import { NumberTicker } from "@/components/magicui/number-ticker";
import { Link } from "@/components/ui/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn, feedbacks, highlightCards } from "@/lib/utils";
import * as motion from "motion/react-client";
import Image from "next/image";
import FadeCarrossel from "./_components/FadeCarrossel";
import Motion from "./_components/Motion";
import NewFeedbackCard from "./_components/NewFeedbackCard";
import SectionHeader from "./_components/SectionHeader";
import AnimatedPointer from "./_components/AnimatedPointerClick";

export default function Home() {
  return (
    <main className="h-auto w-full bg-white">
      <div className="bg-limao/30 w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-screen lg:top-0" />
      <div className="hero_gradient w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-screen lg:top-0" />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: -0 }}
        transition={{
          duration: 0.5,
        }}
        className="z-20"
      >
        <section
          id="hero"
          className="h-full min-h-[80vh] items-center flex-col justify-center flex w-full pt-[120px] sm:pt-[160px] lg:pt-[80px] lg:flex-row lg:justify-evenly z-20"
        >
          <div className="flex relative w-full lg:w-1/3 lg:ml-[5%] lg:xl:ml-[8%] justify-center lg:justify-start">
            <Image
              alt="Imagem da hero"
              src="/images/hero/medic.png"
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
              className="floating-bottom z-20 w-[120px] h-[120px] sm:w-[94px] sm:h-[132px] 2xl:w-[129px] 2xl:h-[181px] object-contain absolute -top-[12%] left-[8%] sm:left-[18%] md:left-[25%] lg:-top-[12%] lg:-left-[8%]"
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
              className="floating-bottom z-20 w-[140px] h-[140px] sm:w-[194px] sm:h-[125px] 2xl:w-[266px] 2xl:h-[172px] object-contain absolute -bottom-[40%] left-[20%] sm:-bottom-[20%] lg:-bottom-[20%] lg:-left-[18%]"
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
              className="floating-bottom z-20 w-[125px] h-[125px] sm:w-[242px] sm:h-[125px] 2xl:w-[277px] 2xl:h-[179px] object-contain absolute bottom-[5%] right-[4%] lg:-bottom-[6%] lg:-right-[12%] 2xl:-right-[5%]"
              priority
            />
          </div>

          <div className="flex mt-20 lg:mt-16 justify-center w-4/5 lg:w-[40%] flex-col text-verde-musgo text-center items-center gap-4 sm:gap-6 sm:pt-6 2xl:gap-6 lg:items-start lg:text-start z-20">
            <TextGenerateEffect
              duration={2}
              filter={false}
              words={`Transforme sua rotina médica com mais leveza, inteligência e segurança.`}
            />

            <h2 className="text-sm 2xl:text-lg">
              A ISA TECH é o sistema de gestão completo que simplifica
              processos, protege dados e devolve tempo para o que realmente
              importa: cuidar de vidas.
            </h2>

            <div className="flex w-full justify-between gap-2 sm:w-fit lg:gap-4">
              <Link href="#highlights">Saber mais</Link>

              <Link variant={"outline"} href="https://isatech.com.br">
                Acessar plataforma
              </Link>
            </div>

            <Image
              alt="Usuários da plataforma"
              src="/images/hero/users.png"
              width={200}
              height={400}
              sizes="(max-width: 768px) 80px, 98px"
              className="w-[80px] h-[28px] lg:w-[98px] lg:h-[34px]"
            />

            <p>
              Somos mais de{" "}
              <NumberTicker
                value={30.0}
                decimalPlaces={3}
                className="whitespace-pre-wrap text-verde-musgo"
              />{" "}
              mil
            </p>

            <div className="flex flex-row items-center w-full sm:w-fit sm:gap-4 justify-evenly">
              <a
                href="https://apps.apple.com/br/app/stdoctor/id1463715996"
                target="_blank"
                className="underline flex flex-row items-center gap-3"
              >
                <Image
                  alt="Apple Store"
                  src="/svg/apple-store.svg"
                  width={24}
                  height={24}
                  sizes="24px"
                  className="w-[24px] h-[24px]"
                />
                <p>Apple Store</p>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=br.com.starttec.stdoctor&hl=pt_BR"
                target="_blank"
                className="underline flex flex-row items-center gap-3"
              >
                <Image
                  alt="Play Store"
                  src="/svg/play-store.svg"
                  width={24}
                  height={24}
                  sizes="24px"
                  className="w-[24px] h-[24px]"
                />
                <p>Play Store</p>
              </a>
            </div>
          </div>
        </section>
      </motion.div>

      <section
        id="highlights"
        className="items-center flex flex-col w-full justify-start py-12 xl:py-20"
      >
        <SectionHeader title="Diferenciais" pipeColor="bg-limao" />

        <div className="flex gap-12 flex-col lg:flex-row w-full lg:w-11/12 xl:w-4/5 xl:gap-12 lg:gap-6 h-fit items-center mt-12 z-10">
          {highlightCards.map((item, index) => (
            <Motion
              key={index}
              direction="top"
              identifier={index}
              className={cn(
                "flex rounded-xl flex-col py-10 px-8 gap-6 w-[60%] lg:h-[340px] xl:h-[440px] 2xl:h-[400px] items-center lg:w-1/4 lg:px-4 xl:px-8",
                item.bg
              )}
            >
              <Image
                alt={`Ilustração ${item.title}`}
                src={item.image}
                width={150}
                height={205}
                sizes="(max-width: 768px) 100px, 150px"
                className="w-[100px] h-[137px] sm:w-[150px] sm:h-[205px] lg:w-[100px] lg:h-[137px] xl:w-[150px] xl:h-[205px] mt-10"
              />

              <div
                className={cn(
                  "flex flex-col gap-2",
                  index % 2 === 0 ? "text-white" : "text-verde-musgo"
                )}
              >
                <p className="font-bold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </Motion>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="items-center flex flex-col w-full justify-start py-12 xl:py-20 lg:gap-6"
      >
        <SectionHeader pipeColor="bg-lavanda" title="Funcionalidades" />

        <FadeCarrossel />

        <AnimatedPointer hiddenLg />

        <p className="text-center mt-4 lg:hidden w-4/5 items-center">
          <strong className="text-verde-musgo">Deslize</strong> para o lado e{" "}
          <strong className="text-lavanda-escuro">clique</strong> em uma das
          funcionalidades para vê-la acima
        </p>

        <p className="text-center mt-4 lg:flex hidden">
          <strong className="text-verde-musgo mr-1">Passe o mouse</strong> em
          uma das funcionalidades para vê-la acima
        </p>
      </section>

      <section
        id="banner"
        className="w-full h-[40vh] relative items-center justify-center hidden sm:flex bg-limao/30"
      >
        <div className="flex w-full h-full flex-col items-center text-center justify-center gap-12">
          <SectionHeader
            pipeColor="bg-lavanda"
            title="Profissionais que escolheram simplificar a gestão com a ISA TECH"
          />

          <div className="flex flex-row z-30 text-2xl lg:text-3xl 2xl:text-4xl text-verde-musgo w-full justify-evenly">
            <p>
              +
              <NumberTicker
                value={330}
                decimalPlaces={0}
                className="whitespace-pre-wrap text-verde-musgo font-bold"
              />
              K Atendimentos
            </p>
            <p>
              +
              <NumberTicker
                value={60}
                decimalPlaces={0}
                className="whitespace-pre-wrap text-verde-musgo font-bold"
              />
              Médicos
            </p>
            <p>
              +
              <NumberTicker
                value={135}
                decimalPlaces={0}
                className="whitespace-pre-wrap text-verde-musgo font-bold"
              />
              K Pacientes
            </p>
          </div>
        </div>
      </section>

      <section
        id="feedbacks"
        className="w-full flex flex-col items-center py-12 xl:py-20 bg-transparent"
      >
        <SectionHeader pipeColor="bg-lavanda" title="Depoimentos" />

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:flex flex-row flex-wrap items-start justify-center gap-6 lg:gap-8 mx-auto px-12">
          {feedbacks.map((feedback, index) => (
            <Motion
              direction="top" // Você pode ajustar a direção se quiser animações diferentes
              identifier={index} // Use o índice como identificador único
              key={index} // Use o índice como key para renderização de lista
            >
              <NewFeedbackCard {...feedback} />
            </Motion>
          ))}
        </div>
      </section>

      {/* <section
        id="plans"
        className="w-full flex flex-col items-center py-12 xl:py-20 bg-transparent"
      >
        <div className="flex flex-col gap-2 items-center">
          <h2 className="z-20 text-3xl 2xl:text-4xl w-4/5 text-gray-700 text-center">
            Conheça nossos planos
          </h2>
          <p className="text-center">
            Escolha o plano ideal para sua clínica — e ganhe tempo para o que
            importa.
          </p>
        </div>

        <PlansCards />
      </section> */}
    </main>
  );
}
