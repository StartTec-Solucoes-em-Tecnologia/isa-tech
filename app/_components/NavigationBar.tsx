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
import { MobileMenu } from "./MobileMenu";
import "../globals.css";
import "./NavigationBar.css";

export function NavigationBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav className="fixed border-b border-verde-musgo h-[80px] w-full flex items-center justify-center z-50 navbar-blur-bg">
      <div className="w-4/5 items-center justify-between hidden lg:flex">
        <div className="flex flex-row gap-6 text-verde-musgo">
          <Image
            alt="Logomarca da navbar"
            src={"/svg/nav-logo.svg"}
            width={300}
            height={300}
            className="w-[120px] h-[85px]"
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
                      src={"/images/highlights/gestao.png"}
                      width={250}
                      height={340}
                      className="object-contain"
                    />
                  </NavigationMenuLink>

                  <ul className="flex flex-col items-center justify-evenly w-[400px] xl:w-[500px]">
                    <div className="flex flex-col gap-1 w-2/3">
                      <p className="text-sm leading-none font-semibold text-texto z-10">
                        ISA Tech
                      </p>

                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 w-2/3">
                      <p className="text-sm leading-none font-semibold text-texto z-10">
                        ISA Clinic
                      </p>

                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 w-2/3">
                      <p className="text-sm leading-none font-semibold text-texto z-10">
                        ISA GO
                      </p>

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

        <button className="p-4" onClick={() => setMobileOpen(true)}>
          <MenuIcon className="text-verde-musgo" />
        </button>
      </ul>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
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
  // pipeColor = "",
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
              <p className="text-sm leading-none font-semibold text-texto z-10">
                {title}
              </p>

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
