"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { fadeInUp, slideFromLeft, slideFromRight, staggerContainer } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/shared/PageHero";

const valores = [
  "Ética",
  "Transparência",
  "Responsabilidade social",
  "Eficiência na gestão",
  "Compromisso com resultados",
];

const principios = [
  "Legalidade",
  "Impessoalidade",
  "Moralidade",
  "Publicidade",
  "Eficiência",
  "Transparência",
  "Controle social",
];

const estrutura = [
  {
    title: "Assembleia Geral",
    description:
      "A Assembleia Geral constitui o órgão máximo de deliberação da entidade, sendo responsável por decidir sobre matérias institucionais relevantes, eleger e destituir membros dos órgãos de administração e fiscalização, aprovar alterações estatutárias e deliberar sobre assuntos estratégicos que envolvam os interesses e finalidades da associação, nos termos previstos no Estatuto.",
  },
  {
    title: "Conselho de Administração",
    description:
      "O Conselho de Administração exerce função estratégica e de supervisão institucional, competindo-lhe definir diretrizes gerais de atuação, acompanhar o cumprimento das finalidades estatutárias, deliberar sobre matérias de natureza estratégica e fiscalizar a atuação da Diretoria Executiva. Sua atuação assegura alinhamento entre planejamento institucional, execução de projetos e observância das normas aplicáveis.",
  },
  {
    title: "Diretoria Executiva",
    description:
      "A Diretoria Executiva é o órgão responsável pela administração e gestão cotidiana do Instituto, cabendo-lhe representar institucional e juridicamente a entidade, executar as diretrizes estabelecidas pelos órgãos superiores, administrar recursos financeiros e patrimoniais, celebrar parcerias e instrumentos jurídicos, bem como coordenar a execução de programas, projetos e demais atividades institucionais.",
  },
  {
    title: "Conselho Fiscal",
    description:
      "O Conselho Fiscal atua como órgão de fiscalização e controle interno, competindo-lhe examinar livros e documentos contábeis, emitir parecer sobre demonstrações financeiras, acompanhar a gestão administrativa e financeira e zelar pela regularidade, legalidade e transparência da atuação institucional.",
  },
];

const documentosInstitucionais = [
  { title: "Estatuto Social", href: "#" },
  { title: "Ata da Diretoria vigente", href: "#" },
  { title: "Cartão CNPJ", href: "#" },
];

export default function SobreNosContent() {
  return (
    <>
      <PageHero title="Institucional" breadcrumb="Institucional" />

      {/* O Instituto */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              className="lg:col-span-7"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-8 leading-tight">
                O Instituto Rede de Apoio
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  O Instituto Rede de Apoio é uma associação privada sem fins
                  lucrativos, constituída em 1998, com atuação voltada à
                  promoção de ações de interesse público nas áreas da educação,
                  saúde e esporte.
                </p>
                <p>
                  Fundado sob os princípios da legalidade, ética, transparência
                  e responsabilidade social, o Instituto desenvolve programas,
                  projetos e parcerias voltados ao fortalecimento das políticas
                  públicas e à ampliação do acesso a direitos fundamentais.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 lg:pt-8"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="border-l-2 border-accent pl-8 space-y-6">
                <p className="font-heading text-2xl text-primary italic leading-snug">
                  &ldquo;Promovendo educação, saúde e esporte com responsabilidade social desde 1998.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Missão, Visão e Valores"
            subtitle="Os pilares que guiam nossa atuação e definem quem somos."
          />

          <motion.div
            className="mt-16 space-y-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-neutral-200">
              <div className="md:col-span-3">
                <h3 className="font-heading text-2xl text-primary">Missão</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-neutral-600 leading-relaxed">
                  Promover ações de educação, saúde e esporte como instrumentos
                  de desenvolvimento humano e inclusão social.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-neutral-200">
              <div className="md:col-span-3">
                <h3 className="font-heading text-2xl text-primary">Visão</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-neutral-600 leading-relaxed">
                  Consolidar-se como organização de referência na execução de
                  projetos de interesse público.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10">
              <div className="md:col-span-3">
                <h3 className="font-heading text-2xl text-primary">Valores</h3>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-3">
                  {valores.map((valor) => (
                    <span key={valor} className="px-4 py-2 text-sm border border-neutral-200 rounded-full text-neutral-600">
                      {valor}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Natureza Jurídica */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Natureza Jurídica e Fundamentação Legal"
            subtitle="Base legal que sustenta a atuação do Instituto."
          />

          <FadeInUp>
            <div className="max-w-4xl space-y-5 text-neutral-600 leading-relaxed mt-8">
              <p>
                O Instituto Rede de Apoio é pessoa jurídica de direito privado,
                constituída sob a forma de associação civil sem fins lucrativos,
                dotada de autonomia administrativa e financeira, regida por seu
                Estatuto Social e pelas disposições do Código Civil Brasileiro.
              </p>
              <p>
                No âmbito da celebração e execução de parcerias com o Poder
                Público, o Instituto observa integralmente as disposições da Lei
                nº 13.019/2014 (Marco Regulatório das Organizações da Sociedade
                Civil – MROSC), aplicável aos Termos de Colaboração e Termos de
                Fomento.
              </p>
              <p>
                Quando qualificado como Organização Social e na formalização de
                Contratos de Gestão, submete-se igualmente às normas da Lei nº
                9.637/1998, bem como à legislação específica do ente federativo
                contratante, observando os princípios da legalidade,
                impessoalidade, moralidade, publicidade, eficiência e controle
                social.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Finalidades Estatutárias */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Finalidades Estatutárias"
            subtitle="Objetivos institucionais previstos no Estatuto Social."
          />

          <FadeInUp>
            <div className="max-w-4xl space-y-5 text-neutral-600 leading-relaxed mt-8">
              <p>
                Nos termos do Estatuto Social, o Instituto Rede de Apoio tem por
                finalidade promover ações de interesse público voltadas ao
                desenvolvimento humano e social, especialmente nas áreas da
                educação, da saúde, do esporte e da assistência social.
              </p>
              <p>
                Para a consecução de seus objetivos institucionais, poderá
                elaborar, executar, apoiar e gerir programas, projetos e
                iniciativas próprias ou em parceria com o Poder Público e
                entidades privadas, observando a legislação aplicável e os
                princípios da transparência, responsabilidade e controle social.
              </p>
              <p>
                Suas atividades compreendem a promoção de direitos fundamentais,
                o fortalecimento de políticas públicas e a implementação de ações
                voltadas à inclusão social, formação cidadã e melhoria da
                qualidade de vida da população.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Estrutura Organizacional */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Estrutura Organizacional"
            subtitle="Modelo de governança baseado na colegialidade e transparência."
          />

          <FadeInUp>
            <p className="max-w-4xl text-neutral-600 leading-relaxed mt-8 mb-12">
              A estrutura organizacional do Instituto Rede de Apoio está definida
              em seu Estatuto Social, assegurando modelo de governança baseado na
              colegialidade, na segregação de funções, na responsabilidade
              administrativa e no controle interno, com vistas à plena
              conformidade normativa e à transparência institucional.
            </p>
          </FadeInUp>

          <motion.div
            className="grid sm:grid-cols-2 gap-8 mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {estrutura.map((item, i) => (
              <motion.div key={item.title} variants={fadeInUp} className="border-t-2 border-accent pt-6">
                <span className="text-sm text-accent font-medium">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-xl text-primary mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <FadeInUp>
            <div className="max-w-4xl space-y-5 text-neutral-600 leading-relaxed mt-12">
              <p>
                Para o desenvolvimento de suas atividades, o Instituto poderá
                contar com estrutura técnica, administrativa e operacional
                adequada à execução de seus programas e parcerias, observando
                critérios de legalidade, eficiência, economicidade e
                responsabilidade na gestão de recursos.
              </p>
              <p>
                A governança institucional do Instituto Rede de Apoio está
                estruturada de modo a assegurar equilíbrio entre deliberação
                estratégica, gestão executiva e fiscalização interna, garantindo
                conformidade jurídica, transparência e compromisso com os
                princípios que regem sua atuação.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Documentos Institucionais */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Documentos Institucionais"
            subtitle="Acesse os documentos oficiais do Instituto Rede de Apoio."
          />

          <motion.div
            className="grid sm:grid-cols-3 gap-6 mt-16 max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {documentosInstitucionais.map((doc) => (
              <motion.div key={doc.title} variants={fadeInUp}>
                <a
                  href={doc.href}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white border border-neutral-200 hover:border-accent transition-colors group cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-primary">
                    {doc.title}
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Princípios de Atuação */}
      <section className="py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-5">
            Princípios de Atuação
          </h2>
          <p className="text-white/50 mb-14 max-w-2xl mx-auto">
            Valores que norteiam todas as ações do Instituto.
          </p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {principios.map((principio) => (
              <motion.div
                key={principio}
                variants={fadeInUp}
                className="border border-white/20 rounded-full px-6 py-3 text-sm text-white/80"
              >
                {principio}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
