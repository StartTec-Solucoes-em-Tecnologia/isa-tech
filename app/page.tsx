import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { Link } from "@/components/ui/link";
import { cn, highlightCards, feedbacks } from "@/lib/utils";
import Image from "next/image";
import { NavigationBar } from "./_components/NavigationBar";
import SectionHeader from "./_components/SectionHeader";
import FadeCarrossel from "./_components/FadeCarrossel";
import FeedbackCard from "./_components/FeedbackCard";
import Motion from "./_components/Motion";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Transforme sua rotina médica com mais leveza, inteligência e segurança.`;

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
      <NavigationBar />

      <div className="bg-limao/30 w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-full lg:top-0" />
      <div className="hero_gradient w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-full lg:top-0" />

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
            <TextGenerateEffect duration={2} filter={false} words={words} />

            <h2 className="text-sm 2xl:text-lg">
              A ISA TECH é o sistema de gestão completo que simplifica
              processos, protege dados e devolve tempo para o que realmente
              importa: cuidar de vidas.
            </h2>

            <div className="flex w-full justify-between gap-2 sm:w-fit lg:gap-4">
              <Link href="#">Saber mais</Link>

              <Button variant={"outline"}>Acessar plataforma</Button>
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
                href="#"
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
                href="#"
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
                "flex rounded-xl flex-col py-10 px-8 gap-6 w-[60%] items-center lg:w-1/4 lg:px-4 xl:px-8",
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
                  "flex flex-col text-verde-musgo gap-2",
                  index === 3 && "text-white"
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
        className="items-center flex flex-col w-full justify-start py-12 xl:py-20"
      >
        <SectionHeader pipeColor="bg-lavanda" title="Funcionalidades" />

        <FadeCarrossel />

        <p className="text-center mt-4 lg:hidden">
          <strong className="text-verde-musgo">Deslize</strong> para o lado e{" "}
          <strong className="text-lavanda-escuro">clique</strong> em uma das
          funcionalidades para vê-la acima
        </p>

        <p className="text-center mt-4 lg:flex hidden">
          <strong className="text-verde-musgo mr-1">Clique</strong> em uma das
          funcionalidades para vê-la acima
        </p>
      </section>

      <section
        id="banner"
        className="w-full h-[40vh] relative items-center justify-center hidden sm:flex"
      >
        <div className="hero_bg w-full h-full absolute left-0 z-0 lg:h-full lg:top-0" />
        <div className="hero_gradient w-full h-full absolute left-0 z-10 lg:h-full lg:top-0" />

        <div className="flex w-full h-full flex-col items-center text-center justify-center gap-12">
          <SectionHeader
            pipeColor="bg-lavanda"
            title="Números que refletem a realidade"
          />

          <div className="flex flex-row z-30 text-xl xl:text-3xl 2xl:text-4xl text-verde-musgo w-full justify-evenly">
            <p>
              <strong>+330K</strong> Atendimentos
            </p>
            <p>
              <strong>+60</strong> Médicos
            </p>
            <p>
              <strong>+135K</strong> Pacientes
            </p>
          </div>
        </div>
      </section>

      <section
        id="feedbacks"
        className="w-full flex flex-col items-center py-12 xl:py-20 bg-transparent"
      >
        <SectionHeader pipeColor="bg-lavanda" title="Depoimentos" />

        <div className="hidden lg:flex w-4/5 flex-row gap-12 mt-12 lg:w-11/12 2xl:w-4/5">
          <div className="flex flex-col gap-6 w-1/4">
            <Motion direction="top" identifier={10} key={10}>
              <FeedbackCard {...feedbacks[0]} />
            </Motion>
            <div className="flex lg:hidden xl:flex">
              <Motion direction="top" identifier={11} key={11}>
                <FeedbackCard {...feedbacks[1]} />
              </Motion>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-2/4">
            <Motion direction="top" identifier={12} key={12}>
              <FeedbackCard {...feedbacks[2]} />
            </Motion>
            <Motion direction="top" identifier={13} key={13}>
              <FeedbackCard {...feedbacks[3]} />
            </Motion>
            <div className="flex lg:hidden xl:flex">
              <Motion direction="top" identifier={14} key={14}>
                <FeedbackCard {...feedbacks[4]} />
              </Motion>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/4">
            <Motion direction="top" identifier={15} key={15}>
              <FeedbackCard {...feedbacks[1]} />
            </Motion>
            <div className="flex lg:hidden xl:flex">
              <Motion direction="top" identifier={16} key={16}>
                <FeedbackCard {...feedbacks[6]} />
              </Motion>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden w-4/5 gap-12 mt-12">
          {feedbacks.map((item, index) => (
            <Motion direction="top" identifier={20 + index} key={index}>
              <FeedbackCard {...item} />
            </Motion>
          ))}
        </div>
      </section>

      <footer className="w-full bg-verde-musgo text-white py-10 px-4 border-t border-[#3a545a] mt-8">
        <div className="mx-auto items-center flex flex-col lg:flex-row lg:justify-evenly lg:items-start gap-10 lg:gap-0">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full lg:w-2/5">
            <div className="flex flex-col items-start gap-2 min-w-[120px]">
              <Image
                src="/svg/footer-logo.svg"
                alt="ISA Tech Logo"
                width={120}
                height={80}
                className="mb-2"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm min-w-[180px] md:min-w-auto">
              <span className="font-bold text-white">
                Simplifique sua rotina com uma
                <br />
                plataforma completa!
              </span>
              <a
                className="mt-2 underline"
                href="https://api.whatsapp.com/send/?phone=558197515199&text=Ol%C3%A1%21+Venho+do+site+e+gostaria+de+fazer+um+or%C3%A7amento+e+entender+melhor+esse+produto%21&type=phone_number&app_absent=0"
              >
                +55 (81) 9.9751-5199
              </a>
              <a
                className="mt-1 underline"
                href="mailto:atendimento@isatech.com.br"
              >
                atendimento@isatech.com.br
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-8 md:mt-0 min-w-[180px]">
            <span className="font-bold text-white mb-1">
              Navegue nesta página
            </span>
            <a href="#hero" className="hover:underline text-gray-100 text-sm">
              Início
            </a>
            <a
              href="#highlights"
              className="hover:underline text-gray-100 text-sm"
            >
              Diferenciais
            </a>
            <a
              href="#features"
              className="hover:underline text-gray-100 text-sm"
            >
              Funcionalidades
            </a>
            <a
              href="#feedbacks"
              className="hover:underline text-gray-100 text-sm"
            >
              Feedbacks
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-8 md:mt-0 min-w-[180px]">
            <span className="font-bold text-white mb-1">Navegue pelo site</span>
            <a href="#" className="hover:underline text-gray-100 text-sm">
              Início
            </a>
            <a href="#" className="hover:underline text-gray-100 text-sm">
              Produtos e serviços
            </a>
            <a href="#" className="hover:underline text-gray-100 text-sm">
              Sobre nós
            </a>
            <a href="#" className="hover:underline text-gray-100 text-sm">
              Valores
            </a>
          </div>
        </div>

        <div className="w-full text-center text-xs text-gray-300 mt-12">
          © 2025 ISA Tech todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
