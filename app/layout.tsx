import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "./_components/Footer";
import { NavigationBar } from "./_components/NavigationBar";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export const metadata: Metadata = {
  title: "ISA Tech",
  description: "Simplifique sua rotina de forma inteligente",
  openGraph: {
    images: ["/images/preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <meta property="og:image:alt" content="About Acme" />

        <meta property="twitter:image:alt" content="About Acme" />
      </head>

      <body className={`antialiased relative`}>
        <NavigationBar />
        {children}

        <Footer />

        <a
          href={`http://wa.me/5581983501757?text=${encodeURIComponent(
            `Olá! Venho do site da ISA Tech e gostaria de fazer um orçamento.`
          )}`}
          target="_blank"
          className="fixed bottom-24 right-4 rounded-full p-4 bg-verde-musgo z-30"
        >
          <Image
            alt="Whatsapp"
            src={"/svg/whatsapp.svg"}
            width={24}
            height={24}
          />
        </a>

        <a
          href={"#hero"}
          className="fixed bottom-6 right-4 rounded-full p-4 bg-verde-musgo z-30"
        >
          <ArrowUp className="text-limao" />
        </a>
      </body>

      <Analytics />
    </html>
  );
}
