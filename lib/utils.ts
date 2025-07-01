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
    title: "Gestão de clínica",
    bg: "bg-limao",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: "/images/highlights/suporte.png",
    title: "Suporte Humanizado",
    bg: "bg-lavanda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    image: "/images/highlights/produtividade.png",
    title: "Produtividade Real",
    bg: "bg-neon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
  },
  {
    title: "Seus dados seguros",
    image: "/images/highlights/seguranca.png",
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

export const feedbacks = [
  {
    name: "Dr. Pedro Rodrigues",
    postData: "17/05/2024",
    image: "/images/feedbacks/dr-pedro-rodrigues.webp",
    text: "Há pouco mais de 5 anos trabalhamos com o StDoctor, e a evolução tem sido constante, com atualizações e facilidades no sistema, o que nos proporciona agilidade nos atendimentos e credibilidade. Além disso, recebemos auxílio fora do consultório, agora com o aplicativo gratuito. Mas o principal para mim é a assistência, que é impecável. Essas alterações corrigem alguns erros de pontuação e de concordância, tornando o comentário mais claro e fluente.",
  },
  {
    name: "Dra. Luciana Rocha",
    postData: "24/08/2024",
    image: "/images/feedbacks/dra-luciana.webp",
    text: "O StDoctor é um sistema completo e fácil de operar. A assistência técnica é perfeita e a recente gestão financeira é uma ótima adição. Com atualizações frequentes, temos agilidade nos atendimentos e mais credibilidade. O aplicativo gratuito também auxilia fora do consultório. Sem dúvida, o StDoctor é essencial para aprimorar nossas práticas na área da saúde e oferecer um serviço de excelência aos pacientes.",
  },
  {
    name: "Mônica Pereira",
    postData: "11/02/2025",
    image: "/images/feedbacks/interne-prime.webp",
    text: "Gostaria de parabenizar a todos que fazem parte da equipe StDoctor, pelo atendimento de excelência em todas as etapas do nosso processo. Com plataforma flexível e adequada a cada cliente conseguem demonstrar exclusividade em cada atendimento e olhar diferenciado para necessidade do que o cliente entende como valor.",
  },
  {
    name: "Dr. Rilcon Coelho",
    postData: "12/06/2025",
    image: "/images/feedbacks/dr-rilcon-coelho.webp",
    text: "É com grande satisfação que expresso minha admiração pelo excepcional programa de prontuário eletrônico STDoctor. Como oftalmologista, reconheço a importância de ferramentas eficientes na gestão de informações médicas e no atendimento aos pacientes. O STDoctor não apenas simplifica o registro de dados clínicos, mas também proporciona uma interface amigável e intuitiva, otimizando o fluxo de trabalho no consultório. Sua abordagem abrangente e recursos personalizáveis demonstram um compromisso genuíno com a excelência na assistência médica. Parabenizo a equipe por criar um sistema tão notável e benéfico para a comunidade médica.",
  },
  {
    name: "João Paulo",
    postData: "@jpmed",
    image: "/images/hero/users.png",
    text: "A integração com outras ferramentas é um diferencial. Otimizou muito o meu tempo! Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. Lorem Ipsum tem sido o texto padrão usado por essas indústrias desde o ano de 1500.",
  },
  {
    name: "Patrícia",
    postData: "@patriciapsi",
    image: "/images/hero/users.png",
    text: "Há pouco mais de 5 anos trabalhamos com o StDoctor, e a evolução tem sido constante, com atualizações e facilidades no sistema, o que nos proporciona agilidade nos atendimentos e credibilidade. Além disso, recebemos auxílio fora do consultório, agora com o aplicativo gratuito. Mas o principal para mim é a assistência, que é impecável. Essas alterações corrigem alguns erros de pontuação e de concordância, tornando o comentário mais claro e fluente.",
  },
  {
    name: "Lucas",
    postData: "@lucasdoc",
    image: "/images/hero/users.png",
    text: "O StDoctor é um sistema completo e fácil de operar. A assistência técnica é perfeita e a recente gestão financeira é uma ótima adição. Com atualizações frequentes, temos agilidade nos atendimentos e mais credibilidade. O aplicativo gratuito também auxilia fora do consultório. Sem dúvida, o StDoctor é essencial para aprimorar nossas práticas na área da saúde e oferecer um serviço de excelência aos pacientes.",
  },
];
