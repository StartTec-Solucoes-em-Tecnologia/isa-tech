import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import Image from "next/image";
import { NavigationBar } from "./_components/NavigationBar";
import { cn, featureCards, featuresSimple, highlightCards } from "@/lib/utils";
import { FeatureCardsRandomColor } from "./_components/FeatureCardsRandomColor";
import SectionHeader from "./_components/SectionHeader";

export default function Home() {
  return (
    <main className="h-full w-screen bg-white">
      <NavigationBar />

      <section
        id="hero"
        className="h-full min-h-fit items-center flex-col justify-center flex w-full pt-[120px] lg:pt-[10%] lg:flex-row lg:justify-evenly"
      >
        <Image
          alt="Imagem da hero"
          src="/images/hero/desktop.png"
          width={700}
          height={610}
          sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
          className="floating z-20 w-[320px] h-[280px] lg:w-[533px] lg:h-[465px] 2xl:w-[700px] 2xl:h-[610px]"
          priority
        />

        <div className="hero_bg w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-full lg:top-0" />

        <div className="flex justify-center w-4/5 lg:w-1/3 flex-col text-verde-musgo text-center items-center gap-6 lg:items-start lg:text-start z-10">
          <div className="flex relative">
            <h1 className="text-2xl lg:text-5xl z-10">
              Simplifique sua rotina com uma plataforma completa
            </h1>
            <div className="w-1/2 bg-lavanda h-2 absolute bottom-1 z-0 hidden lg:flex" />
          </div>

          <h2 className="lg:text-lg">
            A revolução digital para clínicas e médicos está aqui
          </h2>

          <div className="flex w-full justify-between gap-2 lg:w-fit lg:gap-4">
            <Link
              href="#"
              className="rounded-xl font-semibold bg-verde-musgo text-neon px-5 lg:px-8 py-4 items-center justify-center flex text-base lg:text-lg"
            >
              Saber mais
            </Link>
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

          <div className="flex flex-row items-center w-full lg:w-fit lg:gap-4 justify-evenly">
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
        className="items-center flex flex-col w-full justify-start py-20"
      >
        <SectionHeader title="Diferenciais" pipeColor="bg-limao" />

        <div className="flex gap-12 flex-col lg:flex-row w-full lg:w-4/5 h-fit items-center mt-12 z-10">
          {highlightCards.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex rounded-xl flex-col py-10 px-8 gap-6 w-[60%] items-center",
                item.bg
              )}
            >
              <Image
                alt={`Ilustração ${item.title}`}
                src={item.image}
                width={150}
                height={205}
                sizes="(max-width: 768px) 100px, 150px"
                className="w-[100px] h-[137px] lg:w-[150px] lg:h-[205px]"
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
        className="items-center flex flex-col w-full justify-start py-20 gap-20"
      >
        <SectionHeader pipeColor="bg-lavanda" title="Funcionalidades" />

        <div className="flex lg:w-4/5 gap-12">
          <div className="lg:flex hidden flex-col items-center justify-center w-1/4 h-full gap-12 pl-6 relative">
            <FeatureCardsRandomColor
              items={featuresSimple.filter(
                (_, index) => index < featuresSimple.length / 2
              )}
            />

            <Image
              alt="Cursor indicando interação"
              src="/svg/cursor-pointer.svg"
              width={24}
              height={24}
              sizes="24px"
              className="absolute top-12 left-[45%] w-[24px] h-[24px]"
            />
          </div>

          <div className="flex lg:w-2/4 items-center">
            <Image
              src="/images/features/dashboard.png"
              alt="Dashboard da plataforma"
              width={1070}
              height={715}
              sizes="(max-width: 768px) 375px, 1070px"
              className="object-cover lg:object-top w-full h-[375px] lg:h-full lg:w-[1070px]"
              priority
            />
          </div>

          <div className="lg:flex hidden flex-col items-center justify-center w-1/4 h-full gap-12 pl-6">
            <FeatureCardsRandomColor
              items={featuresSimple.filter(
                (_, index) => index < featuresSimple.length / 2
              )}
            />
          </div>
        </div>

        <div className="flex flex-row items-start justify-start w-fit max-w-screen overflow-x-auto gap-6 pl-6 relative lg:hidden">
          {featureCards.map((item, index) => (
            <Button
              key={index}
              className={cn(
                "flex flex-row items-center justify-center gap-2 rounded-full",
                item.bgColor,
                item.textColor
              )}
            >
              <item.icon size={24} />
              {item.title}
            </Button>
          ))}

          <Image
            alt="Cursor indicando interação"
            src="/svg/cursor-pointer.svg"
            width={24}
            height={24}
            sizes="24px"
            className="absolute bottom-0 left-[45%] w-[24px] h-[24px]"
          />
        </div>

        <p className="text-center mt-4 lg:hidden">
          <strong className="text-verde-musgo">Deslize</strong> para o lado e{" "}
          <strong className="text-lavanda-escuro">clique</strong> em uma das
          funcionalidades para vê-la acima
        </p>

        <p className="text-center mt-4 lg:flex hidden">
          Clique em uma das funcionalidades para vê-la acima
        </p>
      </section>
    </main>
  );
}
