import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn, highlightCards, feedbacks } from "@/lib/utils";
import Image from "next/image";
import { NavigationBar } from "./_components/NavigationBar";
import SectionHeader from "./_components/SectionHeader";
import FadeCarrossel from "./_components/FadeCarrossel";
import FeedbackCard from "./_components/FeedbackCard";

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
      <NavigationBar />

      <section
        id="hero"
        className="h-full min-h-[80vh] items-center flex-col justify-center flex w-full pt-[120px] lg:pt-[10%] lg:flex-row lg:justify-evenly"
      >
        <Image
          alt="Imagem da hero"
          src="/images/hero/desktop.png"
          width={700}
          height={610}
          // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
          className="floating z-20 w-[320px] h-[280px] sm:w-[400px] sm:h-[350px] xl:w-[533px] xl:h-[465px] 2xl:w-[700px] 2xl:h-[610px]"
          priority
        />

        <div className="hero_bg w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-full lg:top-0" />
        <div className="hero_gradient w-full h-[280px] absolute top-[120px] left-0 z-10 lg:h-full lg:top-0" />

        <div className="flex justify-center w-4/5 lg:w-[40%] 2xl:w-1/3 flex-col text-verde-musgo text-center items-center gap-4 sm:gap-6 sm:pt-6 2xl:gap-6 lg:items-start lg:text-start z-20">
          <div className="flex relative">
            <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl z-10 lg:font-semibold">
              A revolução digital para clínicas e médicos está aqui
            </h1>
            <div className="w-[60%] bg-lavanda h-2 xl:h-3 absolute bottom-1 xl:bottom-0 z-0 hidden lg:flex" />
          </div>

          <h2 className="2xl:text-lg">
            Simplifique sua rotina com uma plataforma completa
          </h2>

          <div className="flex w-full justify-between gap-2 sm:w-fit lg:gap-4">
            <Link href="#">Saber mais</Link>

            <Button variant={"outline"}>Acessar plataforma</Button>
          </div>

          <Image
            alt="Usuários da plataforma"
            src="/images/hero/users.png"
            width={98}
            height={34}
            sizes="(max-width: 768px) 80px, 98px"
            className="w-[80px] h-[28px] lg:w-[98px] lg:h-[34px]"
          />

          <p>Somos mais de 30.000 mil</p>

          <div className="flex flex-row items-center w-full sm:w-fit sm:gap-4 justify-evenly">
            <a href="#" className="underline flex flex-row items-center gap-3">
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

            <a href="#" className="underline flex flex-row items-center gap-3">
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

      <section
        id="highlights"
        className="items-center flex flex-col w-full justify-start py-12 xl:py-20"
      >
        <SectionHeader title="Diferenciais" pipeColor="bg-limao" />

        <div className="flex gap-12 flex-col lg:flex-row w-full lg:w-11/12 xl:w-4/5 xl:gap-12 lg:gap-6 h-fit items-center mt-12 z-10">
          {highlightCards.map((item, index) => (
            <div
              key={item.title}
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
                className="w-[100px] h-[137px] sm:w-[150px] sm:h-[205px] lg:w-[100px] lg:h-[137px] xl:w-[150px] xl:h-[205px]"
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
            </div>
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

      <section className="w-full flex flex-col items-center py-12 xl:py-20 bg-transparent">
        <SectionHeader pipeColor="bg-lavanda" title="Depoimentos" />

        <div className="hidden lg:flex w-4/5 flex-row gap-12">
          {/* Primeira coluna */}
          <div className="flex flex-col gap-6 w-1/4">
            <FeedbackCard {...feedbacks[0]} />
            <FeedbackCard {...feedbacks[1]} />
          </div>
          {/* Segunda coluna */}
          <div className="flex flex-col gap-6 w-2/4">
            <FeedbackCard {...feedbacks[2]} />
            <FeedbackCard {...feedbacks[3]} />
            <div className="2xl:flex hidden">
              <FeedbackCard {...feedbacks[4]} />
            </div>
          </div>
          {/* Terceira coluna */}
          <div className="flex flex-col gap-6 w-1/4">
            <FeedbackCard {...feedbacks[5]} />
            <FeedbackCard {...feedbacks[6]} />
          </div>
        </div>

        <div className="flex flex-col lg:hidden w-4/5 gap-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:mt-6">
          {feedbacks.map((item, index) => (
            <FeedbackCard key={index} {...item} />
          ))}
        </div>
      </section>

      <footer className="w-full bg-verde-musgo text-white py-10 px-4 border-t border-[#3a545a] mt-8">
        <div className="mx-auto items-center flex flex-col md:flex-row md:justify-evenly md:items-start gap-10 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-2/5">
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
              href="#depoimentos"
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
