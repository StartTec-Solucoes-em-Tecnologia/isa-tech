"use client";

import { HouseIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
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
                        <p className="text-sm leading-none font-semibold text-texto z-10">
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
                        <p className="text-sm leading-none font-semibold text-texto z-10">
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
                  strokeWidth: 3,
                })
              ) : (
                <HouseIcon className={textColor} strokeWidth={3} />
              )}
            </div>

            <div className="flex flex-col gap-1 w-2/3">
              <div className="flex flex-row gap-2 relative">
                <p className="text-sm leading-none font-semibold text-texto z-10">
                  {title}
                </p>

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
