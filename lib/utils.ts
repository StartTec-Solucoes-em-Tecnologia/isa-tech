import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Calendar,
  ChartNetwork,
  HandCoins,
  MessageSquareText,
  MonitorSmartphone,
  ScrollText,
  Sofa,
  Tickets,
} from "lucide-react";
import { HouseIcon, Lightbulb, UsersRound, Zap } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const highlightCards = [
  {
    image: "/images/highlights/gestao.png",
    title: "Gestão de clínica",
    bg: "bg-limao",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: "/images/highlights/produtividade.png",
    title: "Suporte Humanizado",
    bg: "bg-lavanda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: "/images/highlights/seguranca.png",
    title: "Produtividade Real",
    bg: "bg-neon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: "/images/highlights/suporte.png",
    title: "Seus dados seguros",
    bg: "bg-verde-musgo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
];

export const featuresSimple = [
  { title: "Agendamento", icon: Calendar },
  { title: "Recepção", icon: Sofa },
  { title: "Prontuário eletrônico", icon: ScrollText },
  { title: "Faturamento TISS", icon: HandCoins },
  { title: "Gestão de filas", icon: Tickets },
  { title: "Chat Interno", icon: MessageSquareText },
  { title: "Telemedicina", icon: MonitorSmartphone },
  { title: "Power BI", icon: ChartNetwork },
  { title: "ChatBot", icon: ChartNetwork },
  { title: "Aplicativo do Médico", icon: ChartNetwork },
  { title: "I.A Inteligencia Artificial", icon: ChartNetwork },
  { title: "Contabilidade", icon: ChartNetwork },
  { title: "Financeiro", icon: ChartNetwork },
  { title: "Estoque", icon: ChartNetwork },
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
    textColor: "text-verde-musgo",
    bgColor: "bg-neon",
  },
  {
    title: "Faturamento TISS",
    icon: HandCoins,
    textColor: "text-neon",
    bgColor: "bg-lavanda-escuro",
  },
  {
    title: "Gestão de filas",
    icon: Tickets,
    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
  },
  {
    title: "Chat Interno",
    icon: MessageSquareText,
    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
  },
  {
    title: "Telemedicina",
    icon: MonitorSmartphone,
    textColor: "text-verde-musgo",
    bgColor: "bg-neon",
  },
  {
    title: "Power BI",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "ChatBot",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Aplicativo do Médico",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "I.A Inteligencia Artificial",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Contabilidade",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Financeiro",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Estoque",
    icon: ChartNetwork,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
];

export const aboutTab = [
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
