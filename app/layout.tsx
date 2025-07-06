import type { Metadata } from "next";
import "./globals.css";

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

      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
