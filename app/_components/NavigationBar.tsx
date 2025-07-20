"use client";

import { HouseIcon, MenuIcon } from "lucide-react";
import NextLink from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { aboutTab, cn } from "@/lib/utils";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import "../globals.css";
import "./NavigationBar.css";
import { Link } from "@/components/ui/link";

const productsAndServices = [
  {
    title: "Isa Bot",
    description:
      "Automatize mensagens, agendamentos e check-ins. Atenda 24h com o nosso chatbot.",
  },
  {
    title: "Isa Go",
    description:
      "O app médico que te dá mobilidade, controle e praticidade — onde você estiver.",
  },
  {
    title: "Isa Clinic",
    description: "Gestão completa para sua clínica. Tudo em um só lugar.",
  },
  {
    title: "Isa Cont",
    description:
      "Contabilidade integrada com as soluções ISA. Menos dor de cabeça, mais controle.",
  },
  {
    title: "Isa Consult",
    description:
      "Consultoria para sua clínica crescer com eficiência: reduza custos, aumente lucros.",
  },
];

export function NavigationBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <div className="navbar-blur-wrapper">
        <div className="navbar-blur-bg" />
      </div>
      <nav className="navbar-content">
        <div className="w-4/5 items-center justify-between hidden lg:flex">
          <div className="flex flex-row gap-6 text-verde-musgo">
            <Image
              alt="Logomarca da navbar"
              src={"/svg/nav-logo.svg"}
              width={400}
              height={400}
              className="w-[120px] h-full"
            />

            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuLink href="/">Início</NavigationMenuLink>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Produtos e serviços
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="flex flex-row p-4">
                    <NavigationMenuLink asChild>
                      <Image
                        alt="Captura de tela do app"
                        src={"/images/highlights/gestao.png"}
                        width={250}
                        height={340}
                        className="object-contain"
                      />
                    </NavigationMenuLink>
                    <ul className="grid grid-cols-2 w-[550px] xl:w-[650px] py-2">
                      {productsAndServices.map((item, index) => (
                        <li key={index} className="px-4">
                          <a
                            className="py-2 w-full"
                            href="#" // Substitua '#' pela rota real do seu produto/serviço
                          >
                            <div className="block text-sm leading-none font-semibold text-texto hover:text-verde-musgo transition-colors">
                              {item.title}
                            </div>
                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
                              {item.description}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sobre nós</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 w-[500px] md:grid-cols-2">
                      {aboutTab.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                          textColor={item.textColor}
                          bgColor={item.bgColor}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* <NavigationMenuLink>Valores</NavigationMenuLink> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Link size={"sm"} href="https://isatech.com.br">
            Acessar plataforma
          </Link>
        </div>

        <ul className="flex flex-row w-4/5 h-full items-center justify-between lg:hidden">
          <Image
            alt="Logomarca da navbar"
            src={"/svg/nav-logo.svg"}
            width={96}
            height={47}
          />

          <button className="p-4" onClick={() => setMobileOpen(true)}>
            <MenuIcon className="text-verde-musgo" />
          </button>
        </ul>
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </nav>
    </>
  );
}

interface ListItemProps {
  title: string;
  children: React.ReactNode;
  href: string;
  icon?: React.ElementType;
  textColor?: string;
  bgColor?: string;
  pipeColor?: string;
}

function ListItem({
  title,
  children,
  href,
  icon,
  textColor = "",
  bgColor = "",
  // pipeColor = "",
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <NextLink href={href}>
          <div className="flex gap-4">
            <div
              className={cn(
                "flex rounded-full items-center justify-center w-10 h-10",
                bgColor
              )}
            >
              {icon ? (
                React.createElement(icon, {
                  className: textColor,
                  strokeWidth: 3,
                })
              ) : (
                <HouseIcon className={textColor} strokeWidth={3} />
              )}
            </div>

            <div className="flex flex-col gap-1 w-2/3">
              <p className="text-sm leading-none font-semibold text-texto z-10">
                {title}
              </p>

              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </div>
          </div>
        </NextLink>
      </NavigationMenuLink>
    </li>
  );
}
