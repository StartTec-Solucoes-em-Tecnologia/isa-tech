import Image from "next/image";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-white">
      <nav className="fixed border-b border-verde-musgo h-[80px] w-full flex items-center justify-center">
        <ul className="flex flex-row w-4/5 h-full items-center justify-between">
          <Image
            alt="Logomarca da navbar"
            src={"/svg/nav-logo.svg"}
            width={96}
            height={47}
          />

          <button className="p-4">
            <MenuIcon className="text-verde-musgo" />
          </button>
        </ul>
      </nav>

      <section
        id="hero"
        className="h-full min-h-fit items-center flex-col justify-center flex w-full pt-[120px]"
      >
        <Image
          alt="Imagem da hero mobile"
          src="/images/hero/mobile.png"
          width={320}
          height={280}
          className="floating z-20"
        />
        <div className="hero_bg w-full h-[280px] absolute top-[120px] left-0 z-0" />

        <div className="flex justify-center w-4/5 flex-col text-verde-musgo text-center items-center gap-6">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Simplifique sua rotina com uma plataforma completa
          </h1>

          <h2 className="lg:text-lg">
            A revolução digital para clínicas e médicos está aqui
          </h2>

          <div className="flex w-full justify-between gap-2">
            <a
              href="#"
              className="rounded-xl font-semibold bg-verde-musgo text-neon px-5 lg:px-8 py-4 items-center justify-center flex text-base lg:text-lg"
            >
              Saber mais
            </a>
            <button className="rounded-xl font-semibold border border-verde-musgo text-verde-musgo px-5 lg:px-8 py-4 items-center justify-center flex text-base lg:text-lg">
              Acessar plataforma
            </button>
          </div>

          <Image
            alt="Clientes"
            src={"/images/hero/users.png"}
            width={98}
            height={34}
          />

          <p>Somos mais de 30.000 mil</p>

          <div className="flex flex-row items-center w-full justify-evenly">
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
