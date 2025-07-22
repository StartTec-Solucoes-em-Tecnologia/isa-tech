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
}

// Dados para a seção de Produtos
const productsData: ProductItem[] = [
  {
    id: 4,
    title: "Isa Bot",
    description:
      "Automatize mensagens, agendamentos e check-ins. Atenda 24h com o nosso chatbot.",
    imageUrl: "/images/logos/bot.png",
    linkText: "Conhecer Isa Bot",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 5,
    title: "Isa Go",
    description:
      "O app médico que te dá mobilidade, controle e praticidade — onde você estiver.",
    imageUrl: "/images/logos/go.png",
    linkText: "Baixar App",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 6,
    title: "Isa Clinic",
    description: "Gestão completa para sua clínica. Tudo em um só lugar.",
    imageUrl: "/images/logos/clinic.png",
    linkText: "Saber Mais",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 7,
    title: "Isa Cont",
    description:
      "Contabilidade integrada com as soluções ISA. Menos dor de cabeça, mais controle.",
    imageUrl: "/images/logos/count.png",
    linkText: "Conhecer Isa Cont",
    linkHref: "#", // Link a ser definido
  },
  {
    id: 8,
    title: "Isa Consult",
    description:
      "Consultoria para sua clínica crescer com eficiência: reduza custos, aumente lucros.",
    imageUrl: "/images/logos/consult.png",
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
  },
  {
    id: 2,
    title: "Recepção",
    description:
      "Encante os pacientes desde o primeiro momento. Nossa equipe de recepção está pronta para oferecer um acolhimento caloroso e uma experiência memorável.",
    icon: <Users className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 3,
    title: "Prontuário Eletrônico",
    description:
      "Mantenha os registros de saúde dos seus pacientes de forma segura e acessível. Tenha todas as informações necessárias ao alcance para um atendimento personalizado e eficaz.",
    icon: <FileText className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 4,
    title: "Faturamento TISS",
    description:
      "Simplifique a parte financeira da sua clínica. Lidamos com o faturamento TISS, garantindo conformidade e permitindo que você foque na saúde dos pacientes.",
    icon: <DollarSign className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 5,
    title: "Prescrição Digital",
    description:
      "Modernize suas prescrições médicas. Ofereça tratamentos avançados com prescrições digitais precisas e integradas ao histórico do paciente.",
    icon: <ClipboardList className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 6,
    title: "Power B.I",
    description:
      "Decisões baseadas em dados para otimizar sua clínica. Visualize informações relevantes de forma clara e tome decisões informadas para um gerenciamento eficaz.",
    icon: <BarChart2 className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 7,
    title: "Financeiro",
    description:
      "Mantenha as finanças da sua clínica organizadas. Gerencie pagamentos, receitas e despesas de forma simples, garantindo estabilidade e crescimento.",
    icon: <Wallet className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 8,
    title: "Painel de Chamada",
    description:
      "Otimização no atendimento. Utilize nosso painel de chamada para manter um fluxo contínuo e eficiente, garantindo que os pacientes sejam atendidos prontamente.",
    icon: <MonitorPlay className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 9,
    title: "Chat Interno",
    description:
      "Comunique-se de maneira direta e segura. Nosso chat interno permite uma comunicação eficiente entre a equipe médica, agilizando processos e decisões.",
    icon: <MessageSquare className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 10,
    title: "App para o Médico",
    description:
      "Tecnologia ao alcance do médico. Nosso aplicativo exclusivo oferece ferramentas personalizadas para otimizar sua prática, simplificando a rotina clínica.",
    icon: <Smartphone className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 11,
    title: "Telemedicina",
    description:
      "Ofereça consultas remotas ilimitadas de qualidade. Amplie seu alcance, mantenha o cuidado à distância e proporcione comodidade aos pacientes com a telemedicina. Acesse os prontuários durante as consultas online.",
    icon: <Video className="w-12 h-12 text-verde-musgo" />,
  },
  {
    id: 12,
    title: "Inteligência Artificial",
    description:
      "Revolucione sua prática clínica com a ISA, nossa Inteligência Artificial avançada. Ela oferece suporte inteligente durante as consultas, otimiza tarefas administrativas, auxilia na análise de dados complexos e fornece insights valiosos para um atendimento ainda mais preciso e eficiente.",
    icon: <Bot className="w-12 h-12 text-verde-musgo" />,
  },
];

// Interface de props para o componente SectionTitle
interface SectionTitleProps {
  children: React.ReactNode;
}

// Componente SectionTitle com animação
const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const spanVariants = {
    hidden: { width: 0 },
    visible: { width: 80 },
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={titleVariants}
      transition={{ duration: 0.6 }}
      // Ajuste de tamanhos de fonte responsivos
      className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 pt-12 relative"
    >
      {children}
      <motion.span
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={spanVariants}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="block h-1.5 bg-verde-musgo mx-auto mt-3 rounded"
      ></motion.span>
    </motion.h2>
  );
};

// Interface de props para o componente Card
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 sm:p-8 flex flex-col items-center text-center h-full border border-gray-100"
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
      <h3 className="text-xl sm:text-2xl font-bold text-verde-musgo mb-3 sm:mb-4">
        {title}
      </h3>
      <p className="text-base sm:text-lg leading-relaxed flex-grow text-gray-600">
        {description}
      </p>
      <a
        href={linkHref}
        className="mt-4 sm:mt-6 px-6 sm:px-7 py-2 sm:py-3 bg-limao text-verde-musgo font-semibold rounded-lg hover:bg-verde-musgo hover:text-limao transition-colors duration-300 shadow-md text-base sm:text-lg"
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
}

// Componente FeatureCard para Funcionalidades Detalhadas
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  const featureCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={featureCardVariants}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg  p-5 sm:p-6 flex flex-col items-center text-center h-full border border-gray-100"
    >
      <div className="mb-3 sm:mb-4 text-verde-musgo">{icon}</div>
      <h4 className="text-lg sm:text-xl font-semibold text-verde-musgo mb-2 sm:mb-3">
        {title}
      </h4>
      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

// Componente Principal da Página de Produtos e Serviços
const ProductsAndServices: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8 sm:py-12 pt-[80px] xl:pt-[120px]">
        {/* Seção Hero/Introdução */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-16 px-4 sm:py-20 bg-verde-musgo rounded-2xl shadow-xl mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-limao">
            Soluções Completas para a Sua Clínica
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-white">
            Descubra como o ISA Tech pode transformar a gestão do seu
            consultório, oferecendo inteligência, segurança e leveza para sua
            rotina médica.
          </p>
          <a
            href="https://isa-tech-pied.vercel.app/#contato"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-verde-musgo bg-limao text-lg sm:text-xl font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Fale com um Especialista
          </a>
        </motion.section>

        {/* Seção Nossos Produtos */}
        <section id="products">
          <SectionTitle>Nossos Produtos</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-16">
            {productsData.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Seção Nossas Funcionalidades em Detalhe */}
        <section
          id="features"
          className="py-12 sm:py-16 px-4 bg-limao/30 rounded-2xl mb-16 sm:mb-20 shadow-inner"
        >
          <SectionTitle>
            Funcionalidades que Impulsionam Sua Clínica
          </SectionTitle>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12">
            O ISA Tech é construído com módulos poderosos para cobrir todas as
            necessidades da sua gestão. Conheça cada uma das ferramentas que
            farão a diferença no seu dia a dia:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {detailedFeaturesData.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </section>

        {/* Seção Por Que Escolher ISA Tech? */}
        <section id="choose" className="py-12 sm:py-16">
          <SectionTitle>Por Que Escolher ISA Tech?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
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
          className="py-12 sm:py-16 bg-verde-musgo/10 rounded-2xl mb-16 sm:mb-20 shadow-inner"
        >
          <SectionTitle>O Que Nossos Clientes Dizem</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100"
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
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100"
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
        <section id="services">
          <SectionTitle>Nossos Serviços</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-16">
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
          className="text-center py-16 px-4 sm:py-20 bg-verde-musgo rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-limao mb-4 sm:mb-6 leading-tight">
            Pronto para Transformar Sua Rotina?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-6 sm:mb-8">
            Entre em contato conosco e descubra como o ISA Tech pode otimizar
            sua clínica e elevar a qualidade do seu atendimento.
          </p>
          <a
            href="https://isa-tech-pied.vercel.app/#contato"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-limao text-verde-musgo text-lg sm:text-xl font-bold rounded-full shadow-lg hover:bg-white hover:text-verde-musgo transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Demonstração
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default ProductsAndServices;
