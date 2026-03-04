"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import PageHero from "@/components/shared/PageHero";

const areas = [
  {
    title: "Educação",
    description:
      "Promoção e desenvolvimento de ações educacionais formais e não formais, incluindo apoio à gestão educacional, formação e capacitação profissional, implementação de projetos pedagógicos, promoção da inclusão educacional e atendimento especializado, bem como iniciativas voltadas à ampliação do acesso e permanência escolar.",
  },
  {
    title: "Saúde",
    description:
      "Promoção, prevenção e atenção à saúde, por meio da execução de programas assistenciais, apoio à gestão de unidades e políticas públicas de saúde, desenvolvimento de ações educativas e preventivas, promoção do bem-estar físico, mental e social, bem como implementação de projetos voltados à atenção integral à saúde da população.",
  },
  {
    title: "Esporte",
    description:
      "Promoção da prática esportiva como instrumento de inclusão social, formação cidadã e desenvolvimento humano, incluindo o desenvolvimento de projetos esportivos educacionais e comunitários, realização de eventos e atividades de incentivo ao esporte, formação esportiva e apoio a políticas públicas de incentivo e fomento à prática esportiva.",
  },
  {
    title: "Assistência Social",
    description:
      "Desenvolvimento de ações voltadas à proteção social básica e especial, fortalecimento de vínculos familiares e comunitários, promoção da cidadania, garantia de direitos e atendimento a pessoas, famílias e grupos em situação de vulnerabilidade social.",
  },
  {
    title: "Cultura",
    description:
      "Promoção de atividades culturais, artísticas e educativas, valorização da diversidade cultural, desenvolvimento de ações voltadas à formação cultural e incentivo à produção e difusão cultural como instrumento de transformação social.",
  },
  {
    title: "Inclusão Social e Direitos Humanos",
    description:
      "Promoção de ações voltadas à defesa e efetivação de direitos fundamentais, inclusão social, fortalecimento da cidadania, enfrentamento de desigualdades sociais e promoção da dignidade humana.",
  },
  {
    title: "Capacitação e Qualificação Profissional",
    description:
      "Realização de cursos, treinamentos, oficinas, seminários e programas de formação voltados ao desenvolvimento de competências técnicas e profissionais, contribuindo para a inclusão produtiva e o fortalecimento da autonomia individual e coletiva.",
  },
  {
    title: "Desenvolvimento Social e Comunitário",
    description:
      "Planejamento, execução e monitoramento de projetos sociais voltados ao desenvolvimento sustentável, fortalecimento comunitário, geração de oportunidades e melhoria da qualidade de vida da população.",
  },
  {
    title: "Apoio Técnico e Gestão de Projetos",
    description:
      "Elaboração, execução, acompanhamento e avaliação de programas e projetos sociais, bem como apoio técnico e administrativo à implementação e gestão de políticas públicas e iniciativas de interesse social.",
  },
];

export default function AtuacaoContent() {
  return (
    <>
      <PageHero title="Áreas de Atuação" breadcrumb="Áreas de Atuação" />

      {/* Introduction */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl">
              <p className="text-neutral-600 leading-relaxed text-lg">
                O Instituto Rede de Apoio desenvolve ações de interesse público
                voltadas à promoção do desenvolvimento humano e social, atuando
                de forma ampla e integrada, nos termos previstos em seu Estatuto
                Social.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg mt-4">
                Nossas áreas de atuação abrangem a elaboração, execução, apoio e
                gestão de programas, projetos e iniciativas próprias ou em
                parceria com o Poder Público e entidades privadas, contemplando
                as seguintes frentes:
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Areas */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col"
              >
                <span className="text-sm font-medium text-accent mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-lg leading-relaxed">
              As áreas de atuação do Instituto Rede de Apoio refletem seu
              compromisso institucional com a promoção de direitos, o
              fortalecimento das políticas públicas e o desenvolvimento social
              sustentável, atuando com responsabilidade, transparência e
              observância à legislação aplicável.
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
