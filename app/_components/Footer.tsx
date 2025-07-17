/* eslint-disable @next/next/no-html-link-for-pages */
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-verde-musgo text-white py-10 px-4 border-t border-[#3a545a] mt-8">
      <div className="mx-auto items-center flex flex-col lg:flex-row lg:justify-evenly lg:items-start gap-10 lg:gap-0">
        <Image
          src="/svg/footer-logo.svg"
          alt="ISA Tech Logo"
          width={300}
          height={300}
          className="mb-2 w-[120px] h-fit"
        />

        <div className="flex flex-col gap-4 mt-8 md:mt-0 min-w-[180px] w-3/4 sm:w-1/2 lg:w-fit">
          <span className="font-bold text-white">
            Simplifique sua rotina com uma
            <br />
            plataforma completa!
          </span>

          <div className="flex flex-row gap-2">
            <Mail />
            contato@isatech.com.br
          </div>
          <a
            href="https://www.instagram.com/isatechbr/"
            className="flex flex-row gap-2"
          >
            <Instagram />
            @isatechbr
          </a>
          <div className="flex flex-row gap-2">
            <Linkedin />
            in.isatechbr
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-8 md:mt-0 min-w-[180px] w-3/4 sm:w-1/2 lg:w-fit">
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
          <a href="#features" className="hover:underline text-gray-100 text-sm">
            Funcionalidades
          </a>
          <a
            href="#feedbacks"
            className="hover:underline text-gray-100 text-sm"
          >
            Depoimentos
          </a>
          {/* <a href="#plans" className="hover:underline text-gray-100 text-sm">
            Planos
          </a> */}
        </div>

        <div className="flex flex-col gap-2 mt-8 md:mt-0 min-w-[180px] w-3/4 sm:w-1/2 lg:w-fit">
          <span className="font-bold text-white mb-1">Navegue pelo site</span>
          <a href="/" className="hover:underline text-gray-100 text-sm">
            Início
          </a>
          {/* <a href="#" className="hover:underline text-gray-100 text-sm">
            Produtos e serviços
          </a> */}
          <a href="/about" className="hover:underline text-gray-100 text-sm">
            Sobre nós
          </a>
          {/* <a href="#" className="hover:underline text-gray-100 text-sm">
            Valores
          </a> */}
        </div>
      </div>

      <div className="w-full text-center text-xs text-gray-300 mt-12">
        © 2025 ISA Tech todos os direitos reservados.
      </div>
    </footer>
  );
}
