import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISA Tech",
  description: "Simplifique sua rotina de forma inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
