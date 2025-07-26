"use client"; // Adicione esta diretiva para componentes do lado do cliente

import Image from "next/image";
import React, { useRef } from "react"; // Importa useRef
import * as motion from "motion/react-client";

// Importa os ícones do Lucide React
import {
  Calendar,
  Users,
  FileText,
  DollarSign,
  ClipboardList,
  BarChart2,
  Wallet,
  MonitorPlay,
  MessageSquare,
  Smartphone,
  Video,
  Bot,
} from "lucide-react";
import { useInView } from "motion/react";
import SectionHeader from "../_components/SectionHeader";
import Motion from "../_components/Motion";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Interfaces para as estruturas de dados
interface ProductItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkHref: string;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: "";
  linkText: string;
  linkHref: string;
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: number;
}

// Dados para a seção de Produtos
const productsData: ProductItem[] = [
  {
    id: 4,
    title: "Isa Bot",
    description:
      "Automatize mensagens, agendamentos e check-ins. Atenda 24h com o nosso chatbot.",
    imageUrl: "/images/products/isabot.png",
    linkText: "Conhecer Isa Bot",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 5,
    title: "Isa Go",
    description:
      "O app médico que te dá mobilidade, controle e praticidade — onde você estiver.",
    imageUrl: "/images/highlights/gestao.png",
    linkText: "Baixar App",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 6,
    title: "Isa Clinic",
    description: "Gestão completa para sua clínica. Tudo em um só lugar.",
    imageUrl: "/images/products/isaclinic.png",
    linkText: "Saber Mais",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 7,
    title: "Isa Cont",
    description:
      "Contabilidade integrada com as soluções ISA. Menos dor de cabeça, mais controle.",
    imageUrl: "/images/products/isacount.png",
    linkText: "Conhecer Isa Cont",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 8,
    title: "Isa Consult",
    description:
      "Consultoria para sua clínica crescer com eficiência: reduza custos, aumente lucros.",
    imageUrl: "/images/products/isaconsult.png",
    linkText: "Solicitar Consultoria",
    linkHref: "#", // Link a ser definido
  },
];
// Dados para a seção de Serviços
const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Suporte Humanizado e Especializado",
    description:
      "Conte com uma equipe de suporte dedicada e que realmente entende a rotina médica. Nosso atendimento é ágil e eficaz, pronto para auxiliar você em qualquer etapa da utilização do sistema, garantindo sua tranquilidade.",
    imageUrl: "",
    linkText: "Fale Conosco",
    linkHref: "https://isa-tech-pied.vercel.app/#contato",
  },
  {
    id: 2,
    title: "Implantação e Treinamento",
    description:
      "Oferecemos um processo de implantação guiado e treinamento completo para sua equipe. Garantimos que a transição para o ISA Tech seja suave e que todos possam aproveitar ao máximo as funcionalidades do sistema desde o primeiro dia.",
    imageUrl: "",
    linkText: "Solicitar Demonstração",
    linkHref: "https://isa-tech-pied.vercel.app/#contato",
  },
  {
    id: 3,
    title: "Atualizações Constantes",
    description:
      "O ISA Tech está em constante evolução. Nosso compromisso é com a melhoria contínua, entregando novas funcionalidades e otimizações regularmente para que seu consultório esteja sempre à frente, com as ferramentas mais modernas.",
    imageUrl: "",
    linkText: "Ver Novidades",
    linkHref: "https://isa-tech-pied.vercel.app/#funcionalidades",
  },
];

// Dados para a nova seção de Funcionalidades em Detalhe
const detailedFeaturesData: FeatureItem[] = [
  {
    id: 1,
    title: "Agendamento",
    description:
      "Otimize a agenda da sua clínica de forma eficiente. Agende consultas com facilidade, evite conflitos de horário e ofereça um atendimento ágil e conveniente.",
    icon: <Calendar className="w-12 h-12 text-verde-musgo" />,
    variant: 1,
  },
  {
    id: 2,
    title: "Recepção",
    description:
      "Encante os pacientes desde o primeiro momento. Nossa equipe de recepção está pronta para oferecer um acolhimento caloroso e uma experiência memorável.",
    icon: <Users className="w-12 h-12 text-verde-musgo" />,
    variant: 2,
  },
  {
    id: 3,
    title: "Prontuário Eletrônico",
    description:
      "Mantenha os registros de saúde dos seus pacientes de forma segura e acessível. Tenha todas as informações necessárias ao alcance para um atendimento personalizado e eficaz.",
    icon: <FileText className="w-12 h-12 text-limao" />,
    variant: 3,
  },
  {
    id: 4,
    title: "Faturamento TISS",
    description:
      "Simplifique a parte financeira da sua clínica. Lidamos com o faturamento TISS, garantindo conformidade e permitindo que você foque na saúde dos pacientes.",
    icon: <DollarSign className="w-12 h-12 text-verde-musgo" />,
    variant: 2,
  },
  {
    id: 5,
    title: "Prescrição Digital",
    description:
      "Modernize suas prescrições médicas. Ofereça tratamentos avançados com prescrições digitais precisas e integradas ao histórico do paciente.",
    icon: <ClipboardList className="w-12 h-12 text-limao" />,
    variant: 3,
  },
  {
    id: 6,
    title: "Power B.I",
    description:
      "Decisões baseadas em dados para otimizar sua clínica. Visualize informações relevantes de forma clara e tome decisões informadas para um gerenciamento eficaz.",
    icon: <BarChart2 className="w-12 h-12 text-verde-musgo" />,
    variant: 1,
  },
  {
    id: 7,
    title: "Financeiro",
    description:
      "Mantenha as finanças da sua clínica organizadas. Gerencie pagamentos, receitas e despesas de forma simples, garantindo estabilidade e crescimento.",
    icon: <Wallet className="w-12 h-12 text-limao" />,
    variant: 3,
  },
  {
    id: 8,
    title: "Painel de Chamada",
    description:
      "Otimização no atendimento. Utilize nosso painel de chamada para manter um fluxo contínuo e eficiente, garantindo que os pacientes sejam atendidos prontamente.",
    icon: <MonitorPlay className="w-12 h-12 text-verde-musgo" />,
    variant: 2,
  },
  {
    id: 9,
    title: "Chat Interno",
    description:
      "Comunique-se de maneira direta e segura. Nosso chat interno permite uma comunicação eficiente entre a equipe médica, agilizando processos e decisões.",
    icon: <MessageSquare className="w-12 h-12 text-verde-musgo" />,
    variant: 1,
  },
  {
    id: 10,
    title: "App para o Médico",
    description:
      "Tecnologia ao alcance do médico. Nosso aplicativo exclusivo oferece ferramentas personalizadas para otimizar sua prática, simplificando a rotina clínica.",
    icon: <Smartphone className="w-12 h-12 text-verde-musgo" />,
    variant: 1,
  },
  {
    id: 11,
    title: "Telemedicina",
    description:
      "Ofereça consultas remotas ilimitadas de qualidade. Amplie seu alcance, mantenha o cuidado à distância e proporcione comodidade aos pacientes com a telemedicina. Acesse os prontuários durante as consultas online.",
    icon: <Video className="w-12 h-12 text-limao" />,
    variant: 3,
  },
  {
    id: 12,
    title: "Inteligência Artificial",
    description:
      "Revolucione sua prática clínica com a ISA, nossa Inteligência Artificial avançada. Ela oferece suporte inteligente durante as consultas, otimiza tarefas administrativas, auxilia na análise de dados complexos e fornece insights valiosos para um atendimento ainda mais preciso e eficiente.",
    icon: <Bot className="w-12 h-12 text-verde-musgo" />,
    variant: 2,
  },
];

// Interface de props para o componente Card (Mantido para outras seções, mas não usado em "Nossos Produtos")
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  linkText: string;
  linkHref: string;
}

// Componente Card genérico com animação
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkText,
  linkHref,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const case1 = title === "Suporte Humanizado e Especializado";
  const case2 = title === "Implantação e Treinamento";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 rounded-xl sm:p-8 flex flex-col items-center text-center h-full",
        case1
          ? "bg-verde-musgo text-white"
          : case2
          ? "bg-lavanda text-verde-musgo"
          : "bg-limao"
      )}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          height={400}
          width={600}
          objectFit="contain"
          className="w-[150px] xl:w-[200px] 2xl:w-[250px]"
        />
      )}
      <h3 className="text-xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm leading-relaxed flex-grow">{description}</p>
      <a
        href={linkHref}
        className={cn(
          "mt-4 sm:mt-6 px-6 sm:px-7 py-2 sm:py-3 font-semibold rounded-lg hover:bg-verde-musgo hover:text-limao transition-colors duration-300 shadow-md text-xs",
          case2
            ? "bg-verde-musgo text-limao"
            : case1
            ? "bg-limao text-verde-musgo"
            : "bg-verde-musgo text-limao"
        )}
      >
        {linkText}
      </a>
    </motion.div>
  );
};

// Interface de props para o componente FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: number;
}

// Componente FeatureCard para Funcionalidades Detalhadas
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  variant,
}) => {
  return (
    <Motion
      key={5}
      direction="top"
      identifier={5}
      className="flex items-start gap-4 w-xs sm:w-md lg:w-xs my-4"
    >
      <div
        className={cn(
          "flex w-12 h-12 items-center justify-center rounded-full p-3",
          variant === 1
            ? "bg-lavanda"
            : variant === 2
            ? "bg-limao"
            : "bg-verde-musgo"
        )}
      >
        {icon}
      </div>

      <div className="w-2/3 sm:w-full md:w-2/3 xl:w-full">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Motion>
  );
};

// --- NOVO COMPONENTE: ProductShowcaseItem ---
interface ProductShowcaseItemProps extends ProductItem {
  isEven: boolean; // Propriedade para controlar a ordem da imagem/texto
}

const ProductShowcaseItem: React.FC<ProductShowcaseItemProps> = ({
  title,
  description,
  imageUrl,
  linkText,
  linkHref,
  isEven,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  const slideInVariants = {
    hidden: { opacity: 0, x: isEven ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col md:flex-row items-center p-6 sm:p-10 mb-12 sm:mb-16",
        isEven ? "md:flex-row-reverse" : "" // Inverte a ordem para itens pares
      )}
    >
      {/* Coluna da Imagem */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={400} // Tamanho da imagem
          height={400}
          className="object-contain w-3/4 max-w-[300px] max-h-[300px] md:max-w-full rounded-3xl" // Ajuste de tamanho responsivo
        />
      </div>

      {/* Coluna do Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 p-4">
        <h3 className="text-3xl sm:text-4xl font-bold text-verde-musgo mb-4">
          {title}
        </h3>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
          {description}
        </p>
        <a
          href={linkHref}
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-limao text-verde-musgo text-lg sm:text-xl font-bold rounded-full shadow-lg hover:bg-verde-musgo hover:text-limao transition-colors duration-300 transform hover:scale-105"
        >
          {linkText}
        </a>
      </div>
    </motion.div>
  );
};

// Componente Principal da Página de Produtos e Serviços
const ProductsAndServices: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="mx-auto py-8 sm:py-12">
        {/* Seção Hero/Introdução */}
        {/* <section
          id="hero"
          className="h-full min-h-[80vh] items-center flex-col justify-center flex w-full lg:flex-row lg:justify-evenly z-20 banner-background"
        >
          <div className="flex w-full flex-col gap-6 pt-6 px-24 sm:pt-0 text-white items-center">
            <TextGenerateEffect
              className="font-bold"
              duration={2}
              filter={false}
              words={`Soluções completas para a sua clínica.`}
            />

            <p className="text-sm text-center">
              A ISA TECH nasceu para transformar a forma como médicos e clínicas
              vivem a gestão.
              <br />
            </p>
            <a
              href="#products"
              className="inline-block px-8 py-3 text-verde-musgo bg-limao rounded-full shadow-lg hover:opacity-80 transition-all duration-300 items-center justify-center font-semibold"
            >
              Conhecer produtos
            </a>
          </div>
        </section> */}

        <div className="bg-limao/30 w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-screen lg:top-0" />
        <div className="hero_gradient w-full h-[280px] absolute top-[120px] left-0 z-0 lg:h-screen lg:top-0" />

        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="z-20"
        >
          <section
            id="hero"
            className="h-full min-h-[90vh] pb-12 items-center flex-col justify-center flex w-full pt-[120px] sm:pt-[160px] lg:pt-[80px] lg:flex-row lg:justify-evenly z-20"
          >
            <div className="flex relative w-full lg:w-1/3 lg:ml-[5%] lg:xl:ml-[8%] justify-center lg:justify-start lg:-mt-24">
              <Image
                alt="Imagem da hero"
                src="/images/products_hero.jpg"
                width={800}
                height={800}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="z-20 w-[200px] h-[200px] rounded-xl sm:w-[300px] sm:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] object-contain"
                priority
              />
              <Image
                alt="Imagem da hero"
                src="/images/hero/chat.png"
                width={400}
                height={400}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="floating-bottom z-20 w-[120px] h-[120px] sm:w-[94px] sm:h-[132px] 2xl:w-[129px] 2xl:h-[181px] object-contain absolute -top-[12%] left-[8%] sm:left-[18%] md:left-[25%] lg:-top-[12%] lg:-left-[8%] xl:left-0"
                priority
              />
              <Image
                alt="Imagem da hero"
                src="/images/hero/dra.png"
                width={200}
                height={200}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="floating-top z-20 w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] 2xl:w-[129px] 2xl:h-[129px] object-contain absolute bottom-[10%] left-[3%] sm:bottom-[25%] sm:left-[7%] lg:bottom-[34%] lg:-left-[28%]"
                priority
              />

              <Image
                alt="Imagem da hero"
                src="/images/hero/graphic.png"
                width={600}
                height={600}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="floating-bottom z-20 w-[140px] h-[140px] sm:w-[194px] sm:h-[125px] 2xl:w-[266px] 2xl:h-[172px] object-contain absolute -bottom-[40%] left-[20%] sm:-bottom-[20%] lg:-bottom-[20%] lg:-left-[28%] xl:-left-[18%]"
                priority
              />

              <Image
                alt="Imagem da hero"
                src="/images/hero/patient.png"
                width={200}
                height={200}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="floating-top z-20 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[100px] 2xl:h-[100px] object-contain absolute -bottom-[30%] right-[25%] lg:-bottom-[32%] lg:right-[38%]"
                priority
              />

              <Image
                alt="Imagem da hero"
                src="/images/hero/dashboard.png"
                width={600}
                height={600}
                // sizes="(max-width: 768px) 320px, (max-width: 1536px) 533px, 700px"
                className="floating-bottom z-20 w-[125px] h-[125px] sm:w-[242px] sm:h-[125px] 2xl:w-[277px] 2xl:h-[179px] object-contain absolute bottom-[5%] right-[4%] lg:-bottom-[6%] lg:-right-[22%] xl:-right-[12%] 2xl:-right-[5%]"
                priority
              />
            </div>

            <div className="flex w-full sm:w-4/5 lg:w-2/5 flex-col gap-6 pt-6 sm:pt-0 text-verde-musgo px-4 mt-24 lg:mt-0">
              <TextGenerateEffect
                duration={2}
                filter={false}
                words={`O futuro do prontuário chegou, aumente a qualidade do seu serviços utilizando nossos produtos`}
              />
              <p className="text-base xl:text-lg">
                A ISA TECH nasceu para transformar a forma como médicos e
                clínicas vivem a gestão.
                <br />
                <br />
                Com uma plataforma completa, suporte real e foco no que importa,
                tornamos os bastidores da rotina médica mais leves, organizados
                e seguros.
                <br />
              </p>
            </div>
          </section>
        </motion.div>

        {/* Seção Nossos Produtos (NOVO LAYOUT) */}
        <section
          id="products"
          className="flex lg:mx-16 flex-col items-center justify-center px-4"
        >
          <SectionHeader title="Nossos Produtos" />
          <div className="w-full max-w-6xl">
            {/* Iterar sobre os produtos e usar o novo componente */}
            {productsData.map((product, index) => (
              <ProductShowcaseItem
                key={product.id}
                {...product}
                isEven={index % 2 === 1} // Passa se o índice é ímpar (para alternar a ordem)
              />
            ))}
          </div>
        </section>

        {/* Seção Nossas Funcionalidades em Detalhe */}
        <section
          id="features"
          className="flex flex-col items-center justify-center py-12 sm:py-16 bg-limao/30 sm:mb-20"
        >
          <div className="flex container flex-col items-center justify-center gap-8 px-12 xl:px-24 ">
            <SectionHeader title="Funcionalidades que Impulsionam Sua Clínica" />

            <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12">
              O ISA Tech é construído com módulos poderosos para cobrir todas as
              necessidades da sua gestão. Conheça cada uma das ferramentas que
              farão a diferença no seu dia a dia:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 xl:gap-12">
              {detailedFeaturesData.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Por Que Escolher ISA Tech? */}
        <section
          id="choose"
          className="py-12 sm:py-16 flex flex-col items-center justify-center lg:mx-16 px-8 lg:px-0"
        >
          <SectionHeader title="Por Que Escolher ISA Tech?" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 sm:space-y-8 text-base sm:text-lg text-gray-700"
            >
              <p>
                No ISA Tech, entendemos os desafios da rotina médica. Por isso,
                desenvolvemos uma plataforma que não apenas gerencia, mas
                otimiza cada aspecto do seu trabalho, permitindo que você se
                concentre no que realmente importa: seus pacientes.
              </p>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 pl-4">
                <li>
                  <strong className="text-verde-musgo">
                    Intuitivo e Fácil de Usar:
                  </strong>{" "}
                  Interface pensada para a sua praticidade.
                </li>
                <li>
                  <strong className="text-verde-musgo">
                    Suporte Humanizado:
                  </strong>{" "}
                  Equipe dedicada que fala a sua língua.
                </li>
                <li>
                  <strong className="text-verde-musgo">
                    Segurança de Dados:
                  </strong>{" "}
                  Conformidade com a LGPD e proteção avançada.
                </li>
                <li>
                  <strong className="text-verde-musgo">
                    Inovação Constante:
                  </strong>{" "}
                  Atualizações regulares com as últimas tecnologias.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center mt-8 md:mt-0"
            >
              <Image
                src="/images/hero/medic.png" // Imagem representativa
                alt="Médico usando ISA Tech"
                width={500}
                height={500}
                objectFit="contain"
                className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" // Ajuste de tamanho responsivo da imagem
              />
            </motion.div>
          </div>
        </section>

        {/* Seção Depoimentos (Simplificada) */}
        <section
          id="services"
          className="py-12 sm:py-16 bg-limao/30 mb-16 sm:mb-20 flex flex-col items-center gap-12 px-4 xl:px-12"
        >
          <SectionHeader title="O Que Nossos Clientes Dizem" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 max-w-2xl"
            >
              <p className="italic text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                {`"O ISA Tech revolucionou a gestão da minha clínica. O sistema é
                  intuitivo e o suporte é impecável. Recomendo a todos os
                  colegas!"`}
              </p>
              {/* <p className="font-semibold text-verde-musgo text-base sm:text-lg">
                  - Dra. Ana Paula, Cardiologista
                </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 max-w-2xl"
            >
              <p className="italic text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                {`"A telemedicina do ISA Tech me permitiu expandir meus
                  atendimentos e oferecer mais comodidade aos pacientes. É a
                  ferramenta que faltava!"`}
              </p>
              {/* <p className="font-semibold text-verde-musgo text-base sm:text-lg">
                  - Dr. Carlos Eduardo, Clínico Geral
                </p> */}
            </motion.div>
          </div>
        </section>

        {/* Seção Nossos Serviços */}
        <section
          id="services"
          className="flex flex-col items-center justify-center gap-12 px-8"
        >
          <SectionHeader title="Nossos Serviços" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-16 lg:mx-16">
            {servicesData.map((service) => (
              <Card key={service.id} {...service} />
            ))}
          </div>
        </section>

        {/* Seção Call to Action Final */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center py-16 px-4 mx-4 sm:py-20 bg-limao text-white rounded-2xl shadow-xl lg:mx-16 banner-background"
        >
          <h2 className="text-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Pronto para Transformar Sua Rotina?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
            Entre em contato conosco e descubra como o ISA Tech pode otimizar
            sua clínica e elevar a qualidade do seu atendimento.
          </p>
          <a
            href="https://isa-tech-pied.vercel.app/#contato"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-verde-musgo bg-limao text-lg sm:text-xl font-bold rounded-full shadow-lg hover:opacity-80 transition-all duration-300"
          >
            Solicitar Demonstração
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default ProductsAndServices;
