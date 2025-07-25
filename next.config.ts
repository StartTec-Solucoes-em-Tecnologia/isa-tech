// next.config.mjs ou next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... outras opções de configuração
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**", // Permite qualquer path dentro deste hostname
      },
      // Adicione outros domínios aqui se você usar imagens de outras fontes
      // {
      //   protocol: 'https',
      //   hostname: 'seuhostdeimagens.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
  },
};

export default nextConfig;
