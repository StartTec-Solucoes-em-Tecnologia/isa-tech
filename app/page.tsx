import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import Image from "next/image";
import HeroImage from "./_components/HeroImage.";
import { NavigationBar } from "./_components/NavigationBar";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-white">
      <NavigationBar />

      <section
        id="hero"
        className="h-full min-h-fit items-center flex-col justify-center flex w-full pt-[120px] lg:pt-[10%] lg:flex-row lg:justify-evenly"
      >
        <HeroImage />

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
            alt="Clientes"
            src={"/images/hero/users.png"}
            width={98}
            height={34}
          />

          <p>Somos mais de 30.000 mil</p>

          <div className="flex flex-row items-center w-full lg:w-fit lg:gap-4 justify-evenly">
            <a href="#" className="underline flex flex-row items-center gap-3">
              <Image
                alt="Clientes"
                src={"/svg/apple-store.svg"}
                width={24}
                height={24}
              />
              <p>Apple Store</p>
            </a>

            <a href="#" className="underline flex flex-row items-center gap-3">
              <Image
                alt="Clientes"
                src={"/svg/play-store.svg"}
                width={24}
                height={24}
              />
              <p>Play Store</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
