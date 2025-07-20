/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex transition-all duration-300 h-screen w-screen",
        open ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-verde-musgo/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Menu content */}
      <div className="relative h-full w-full max-w-[90vw] sm:max-w-xs bg-white shadow-xl flex flex-col p-6 gap-6 animate-in slide-in-from-right-10 border-l border-verde-musgo">
        {/* Logo */}
        <div className="flex items-center mb-4 flex-row justify-between">
          <img
            src="/svg/nav-logo.svg"
            alt="ISA Tech Logo"
            className="w-24 h-auto"
          />

          <button onClick={onClose}>
            <X />
          </button>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-4 text-verde-musgo text-lg font-medium">
          <a href="/" onClick={onClose}>
            Início
          </a>
          <MobileDropdown label="Produtos e serviços">
            <a href="/products" className="block py-2">
              Nossos produtos
            </a>
            <a href="/products" className="block py-2">
              Funcionalidades
            </a>
            <a href="/products" className="block py-2">
              Por que nos escolher
            </a>
            <a href="/products" className="block py-2">
              Nossos serviços
            </a>
          </MobileDropdown>
          <MobileDropdown label="Sobre nós">
            <a onClick={onClose} href="/about#hero" className="block py-2">
              Início
            </a>
            <a
              onClick={onClose}
              href="/about#principles"
              className="block py-2"
            >
              Missão, visão e valores
            </a>
            <a onClick={onClose} href="/about#timeline" className="block py-2">
              Nossa história
            </a>
            {/* <a onClick={onClose} href="/about#feedbacks" className="block py-2">
              Nosso time
            </a> */}
            <a
              onClick={onClose}
              href="/about#motivations"
              className="block py-2"
            >
              O que nos move
            </a>
          </MobileDropdown>
          {/* <a href="#" onClick={onClose}>
            Valores
          </a> */}
        </nav>
        <a
          className="mt-8 w-full bg-verde-musgo text-white rounded-xl p-3 text-center font-semibold"
          // onClick={onClose}
          href="https://isatech.com.br"
        >
          Acessar plataforma
        </a>
      </div>
    </div>
  );
}

function MobileDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between w-full py-2 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span>{label}</span>
        <svg
          className={cn(
            "w-4 h-4 ml-2 transition-transform",
            open ? "rotate-180" : "rotate-0"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="pl-4 border-l border-verde-musgo/20 flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
}
