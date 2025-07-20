import { clsx, type ClassValue } from "clsx";
import {
  Box,
  Calendar,
  HandCoins,
  HouseIcon,
  Lightbulb,
  MessageSquareText,
  ScrollText,
  Sofa,
  UsersRound,
  Zap,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RightToLeft = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.5,
    },
  },
};

export const BotToTop = {
  offscreen: {
    paddingTop: 100,
    opacity: 0,
  },
  onscreen: {
    paddingTop: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.5,
    },
  },
};

export const highlightCards = [
  {
    image: "/images/highlights/gestao.png",
    title: "Gestão inteligente",
    bg: "bg-verde-musgo",
    description:
      "Organize agenda, prontuário, financeiro e contabilidade em uma única plataforma intuitiva.",
  },
  {
    image: "/images/highlights/suporte.png",
    title: "Suporte Humanizado",
    bg: "bg-limao",
    description:
      "Atendimento próximo, ágil e feito por quem entende a rotina médica de verdade.",
  },
  {
    title: "Segurança de dados",
    image: "/images/highlights/seguranca.png",
    bg: "bg-verde-musgo",
    description:
      "Tecnologia robusta com proteção avançada e total conformidade com a LGPD.",
  },
  {
    image: "/images/highlights/produtividade.png",
    title: "Produtividade Real",
    bg: "bg-lavanda",
    description:
      "Organize agenda, prontuário, financeiro e contabilidade em uma única plataforma intuitiva.",
  },
];

export const featureCards = [
  {
    title: "Agendamento",
    icon: Calendar,
    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
  },
  {
    title: "Recepção",
    icon: Sofa,
    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
  },
  {
    title: "Prontuário eletrônico",
    icon: ScrollText,
    textColor: "text-limao",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Faturamento TISS",
    icon: HandCoins,
    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
  },
  {
    title: "Chat Interno",
    icon: MessageSquareText,
    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
  },
  // {
  //   title: "Gestão de filas",
  //   icon: Tickets,
  //   textColor: "text-verde-musgo",
  //   bgColor: "bg-limao",
  // },
  // {
  //   title: "Aplicativo do Médico",
  //   icon: TabletSmartphone,
  //   textColor: "text-limao",
  //   bgColor: "bg-verde-musgo",
  // },
  // {
  //   title: "Telemedicina",
  //   icon: MonitorSmartphone,
  //   textColor: "text-limao",
  //   bgColor: "bg-verde-musgo",
  // },
  // {
  //   title: "Power BI",
  //   icon: ChartNetwork,
  //   textColor: "text-verde-musgo",
  //   bgColor: "bg-lavanda",
  // },
  // {
  //   title: "ChatBot",
  //   icon: BotMessageSquare,
  //   textColor: "text-verde-musgo",
  //   bgColor: "bg-limao",
  // },
  // {
  //   title: "I.A Inteligencia Artificial",
  //   icon: BrainCircuit,
  //   textColor: "text-verde-musgo",
  //   bgColor: "bg-lavanda",
  // },
  // {
  //   title: "Contabilidade",
  //   icon: Landmark,
  //   textColor: "text-limao",
  //   bgColor: "bg-verde-musgo",
  // },
  // {
  //   title: "Financeiro",
  //   icon: PiggyBank,
  //   textColor: "text-verde-musgo",
  //   bgColor: "bg-limao",
  // },
  {
    title: "Estoque",
    icon: Box,
    textColor: "text-limao",
    bgColor: "bg-verde-musgo",
  },
];

export const aboutTab = [
  {
    title: "Início",
    href: "/about#hero",
    icon: HouseIcon,
    description: "Muito além de um sistema: somos parceiros da boa medicina.",

    textColor: "text-limao",
    bgColor: "bg-verde-musgo",
    pipeColor: "bg-limao",
  },
  {
    title: "Nosso time",
    href: "/about#feedbacks",
    icon: UsersRound,
    description: "Pessoas reais. Suporte de verdade.",

    textColor: "text-verde-musgo",
    bgColor: "bg-lavanda",
    pipeColor: "bg-limao",
  },
  {
    title: "Missão, visão e valores",
    href: "/about#principles",
    icon: ScrollText,
    description: "O que nos guia, do código ao cuidado",

    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
    pipeColor: "bg-lavanda",
  },
  {
    title: "O que nos move",
    href: "/about#timeline",
    icon: Zap,
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    textColor: "text-limao",
    bgColor: "bg-verde-musgo",
    pipeColor: "bg-lavanda",
  },
  {
    title: "Nossa história",
    href: "/about#timeline",
    icon: Lightbulb,
    description: "Nossa jornada até aqui — e além",

    textColor: "text-verde-musgo",
    bgColor: "bg-lavanda",
    pipeColor: "bg-limao",
  },
];

export const feedbacks = [
  {
    name: "Dr. Pedro Rodrigues",
    postData: "17/05/2024",
    image: "/images/feedbacks/dr-pedro-rodrigues.webp",
    text: "Trabalhamos com o ISA Tech há mais de 5 anos e a evolução é constante, com atualizações e facilidades que nos dão agilidade e credibilidade. O aplicativo gratuito auxilia fora do consultório, e a assistência é impecável. Essas melhorias tornam o sistema ainda mais fluido e confiável.",
  },
  {
    name: "Dra. Luciana Rocha",
    postData: "24/08/2024",
    image: "/images/feedbacks/dra-luciana.webp",
    text: "O ISA Tech é um sistema completo e fácil de operar. A assistência técnica é perfeita, e a gestão financeira é uma ótima adição. Com atualizações frequentes, ganhamos agilidade e credibilidade. O aplicativo também é essencial, aprimorando nossas práticas e o serviço de excelência aos pacientes.",
  },
  {
    name: "Mônica Pereira",
    postData: "11/02/2025",
    image: "/images/feedbacks/interne-prime.webp",
    text: "Parabenizo a equipe ISA Tech pelo atendimento de excelência em todas as etapas. Com uma plataforma flexível e adequada a cada cliente, demonstram exclusividade e um olhar diferenciado para as necessidades, entregando valor em cada atendimento.",
  },
  {
    name: "Dr. Rilcon Coelho",
    postData: "12/06/2025",
    image: "/images/feedbacks/dr-rilcon-coelho.webp",
    text: "Com grande satisfação, expresso minha admiração pelo programa de prontuário eletrônico ISA Tech. Como oftalmologista, valorizo ferramentas eficientes na gestão de informações médicas. O ISA Tech simplifica o registro de dados e otimiza o fluxo de trabalho. Sua abordagem abrangente e recursos personalizáveis mostram um compromisso com a excelência na assistência médica. Parabéns à equipe!",
  },
];
