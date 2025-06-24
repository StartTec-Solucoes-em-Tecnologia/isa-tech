"use client";

import * as React from "react";
import Link from "next/link";
import {
  HouseIcon,
  Lightbulb,
  MenuIcon,
  ScrollText,
  UsersRound,
  Zap,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aboutTab = [
  {
    title: "Início",
    href: "/docs/primitives/alert-dialog",
    icon: HouseIcon,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",

    textColor: "text-neon",
    bgColor: "bg-limao-escuro",
    pipeColor: "bg-limao",
  },
  {
    title: "Nosso time",
    href: "/docs/primitives/scroll-area",
    icon: UsersRound,
    description: "Visually or semantically separates content.",

    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
    pipeColor: "bg-limao",
  },
  {
    title: "Missão, visão e valores",
    href: "/docs/primitives/hover-card",
    icon: ScrollText,
    description:
      "For sighted users to preview content available behind a link.",

    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
    pipeColor: "bg-lavanda",
  },
  {
    title: "O que nos move",
    href: "/docs/primitives/tabs",
    icon: Zap,
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    textColor: "text-limao-escuro",
    bgColor: "bg-limao",
    pipeColor: "bg-lavanda",
  },
  {
    title: "Nossa história",
    href: "/docs/primitives/progress",
    icon: Lightbulb,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",

    textColor: "text-lavanda",
    bgColor: "bg-lavanda-escuro",
    pipeColor: "bg-limao",
  },
];

export function NavigationBar() {
  return (
    <nav className="fixed border-b border-verde-musgo h-[80px] w-full flex items-center justify-center z-50 bg-white">
      <div className="w-4/5 items-center justify-between hidden lg:flex">
        <div className="flex flex-row gap-12">
          <Image
            alt="Logomarca da navbar"
            src={"/svg/nav-logo.svg"}
            width={96}
            height={47}
          />

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuLink>Início</NavigationMenuLink>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Produtos e serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <NavigationMenuLink asChild>
                    <Image
                      alt="Captura de tela do app"
                      src={"/images/navbar/app_print.png"}
                      width={250}
                      height={340}
                    />
                  </NavigationMenuLink>

                  <ul className="flex flex-col items-center justify-evenly w-[400px] xl:w-[500px]">
                    <div className="flex flex-col gap-1 w-2/3">
                      <div className="flex flex-row gap-2 relative">
                        <p className="text-sm leading-none font-medium z-10">
                          ISA Tech
                        </p>

                        <div className="w-1/4 bg-lavanda h-1 left-0 absolute bottom-0 z-0 hidden lg:flex" />
                      </div>

                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 w-2/3">
                      <div className="flex flex-row gap-2 relative">
                        <p className="text-sm leading-none font-medium z-10">
                          ISA Clinic
                        </p>

                        <div className="w-1/4 bg-limao h-1 left-0 absolute bottom-0 z-0 hidden lg:flex" />
                      </div>

                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has
                      </p>
                    </div>
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
                        pipeColor={item.pipeColor}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink>Valores</NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button size={"sm"}>Acessar plataforma</Button>
      </div>

      <ul className="flex flex-row w-4/5 h-full items-center justify-between lg:hidden">
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
  pipeColor = "",
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
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
                })
              ) : (
                <HouseIcon className={textColor} />
              )}
            </div>

            <div className="flex flex-col gap-1 w-2/3">
              <div className="flex flex-row gap-2 relative">
                <p className="text-sm leading-none font-medium z-10">{title}</p>

                <div
                  className={cn(
                    "w-1/4 bg-lavanda h-1 left-0 absolute bottom-0 z-0 hidden lg:flex",
                    pipeColor
                  )}
                />
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
