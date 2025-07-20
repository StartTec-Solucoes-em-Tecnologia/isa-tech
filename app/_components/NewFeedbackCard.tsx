"use client"; // Adicione esta diretiva para componentes do lado do cliente

import React, { useRef } from "react";
import * as motion from "motion/react-client"; // Importa motion do pacote especificado
import { useInView } from "motion/react"; // Importa useInView do pacote especificado

// Interface de props para o componente Testimonial
interface TestimonialProps {
  // As propriedades 'name', 'postData', 'image' são mantidas na interface
  // mas não serão usadas diretamente no JSX deste componente,
  // pois a requisição é para não exibi-las.
  name?: string;
  postData?: string;
  image?: string;
  text: string;
}

const NewFeedbackCard: React.FC<TestimonialProps> = ({ text }) => {
  const ref = useRef(null);
  // useInView de 'motion/react' retorna apenas o booleano 'inView'
  const inView = useInView(ref, { amount: 0.3, once: true }); // Animação dispara uma vez ao entrar na view

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref} // Atribui a referência ao elemento motion
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 sm:p-8 flex flex-col items-center text-center h-full border border-gray-100 w-full max-w-sm mx-auto sm:min-h-[352px] md:min-h-[275px] lg:min-h-[248px]"
    >
      {/* Imagem do autor do depoimento (REMOVIDA conforme solicitação) */}
      {/* Nome e cargo do autor (REMOVIDOS conforme solicitação) */}

      {/* Texto do depoimento */}
      <p className="italic text-gray-700 leading-relaxed flex-grow">
        {`"${text}"`}
      </p>
    </motion.div>
  );
};

export default NewFeedbackCard;
