import { clsx, type ClassValue } from "clsx";
import {
  BotMessageSquare,
  Box,
  BrainCircuit,
  Calendar,
  ChartNetwork,
  HandCoins,
  HouseIcon,
  Landmark,
  Lightbulb,
  MessageSquareText,
  MonitorSmartphone,
  PiggyBank,
  ScrollText,
  Sofa,
  TabletSmartphone,
  Tickets,
  UsersRound, Zap,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

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
    title: "Aplicativo do Médico",
    icon: TabletSmartphone,
    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
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
    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
  },
  {
    title: "ChatBot",
    icon: BotMessageSquare,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "I.A Inteligencia Artificial",
    icon: BrainCircuit,
    textColor: "text-lavanda-escuro",
    bgColor: "bg-lavanda",
  },
  {
    title: "Contabilidade",
    icon: Landmark,
    textColor: "text-neon",
    bgColor: "bg-verde-musgo",
  },
  {
    title: "Financeiro",
    icon: PiggyBank,
    textColor: "text-verde-musgo",
    bgColor: "bg-limao",
  },
  {
    title: "Estoque",
    icon: Box,
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

export const testimonials = [
  {
    name: "Daniel",
    username: "@askdalik",
    image: "/images/hero/users.png", // Substitua por um avatar real se desejar
    text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "Marina",
    username: "@marinadev",
    image: "/images/hero/users.png",
    text: "A plataforma revolucionou a rotina da minha clínica. Extremamente intuitiva e eficiente! Recomendo para todos os profissionais da saúde.",
  },
  {
    name: "Carlos",
    username: "@carluxo",
    image: "/images/hero/users.png",
    text: "O suporte é excelente e as funcionalidades atendem todas as necessidades do meu consultório. Estou muito satisfeito! Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "Fernanda",
    username: "@feroliveira",
    image: "/images/hero/users.png",
    text: "Nunca foi tão fácil gerenciar meus pacientes e agendamentos. A interface é linda e muito prática! Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "João Paulo",
    username: "@jpmed",
    image: "/images/hero/users.png",
    text: "A integração com outras ferramentas é um diferencial. Otimizou muito o meu tempo! Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "Patrícia",
    username: "@patriciapsi",
    image: "/images/hero/users.png",
    text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "Lucas",
    username: "@lucasdoc",
    image: "/images/hero/users.png",
    text: "A plataforma revolucionou a rotina da minha clínica. Extremamente intuitiva e eficiente! Recomendo para todos os profissionais da saúde.",
  },
];
