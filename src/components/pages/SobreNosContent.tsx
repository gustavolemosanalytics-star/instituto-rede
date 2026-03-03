"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  FileText,
  Download,
  Scale,
  Users,
  ShieldCheck,
  Landmark,
  ClipboardList,
} from "lucide-react";
import { fadeInUp, slideFromLeft, slideFromRight } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageHero from "@/components/shared/PageHero";
import WaveDivider from "@/components/shared/WaveDivider";

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

const documentosInstitucionais = [
  {
    title: "Estatuto Social",
    href: "/arquivos/Estatuto Social - Instituto Rede de Apoi.pdf",
  },
  { title: "Ata da Diretoria vigente", href: "#" },
  {
    title: "Cartão CNPJ",
    href: "/arquivos/CARTÃO CNPJ - INSTITUTO REDE.pdf",
  },
];

export default function SobreNosContent() {
  return (
    <>
      <PageHero title="Institucional" breadcrumb="Institucional" />

      {/* O Instituto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                O Instituto Rede de Apoio
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
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
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="w-full h-80 lg:h-[400px] rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 relative overflow-hidden flex items-center justify-center">
                <Landmark size={100} className="text-primary/20" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Missão, Visão e Valores"
            subtitle="Os pilares que guiam nossa atuação e definem quem somos."
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Missão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Promover ações de educação, saúde e esporte como instrumentos
                  de desenvolvimento humano e inclusão social.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Visão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Consolidar-se como organização de referência na execução de
                  projetos de interesse público.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Valores
                </h3>
                <ul className="text-neutral-600 space-y-2">
                  {valores.map((valor) => (
                    <li
                      key={valor}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {valor}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider className="text-neutral-50 -mt-1" flip />

      {/* Natureza Jurídica */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Natureza Jurídica e Fundamentação Legal"
            subtitle="Base legal que sustenta a atuação do Instituto."
          />

          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed mt-8">
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
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Finalidades Estatutárias"
            subtitle="Objetivos institucionais previstos no Estatuto Social."
          />

          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed mt-8">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Estrutura Organizacional"
            subtitle="Modelo de governança baseado na colegialidade e transparência."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Assembleia Geral
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Órgão máximo de deliberação, responsável por decidir sobre
                  matérias institucionais relevantes e eleger membros dos órgãos
                  de administração e fiscalização.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Conselho de Administração
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Exerce função estratégica e de supervisão institucional,
                  definindo diretrizes gerais de atuação e fiscalizando a
                  Diretoria Executiva.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Diretoria Executiva
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Responsável pela administração e gestão cotidiana, executando
                  diretrizes, administrando recursos e coordenando programas e
                  projetos.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Conselho Fiscal
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Atua como órgão de fiscalização e controle interno, examinando
                  livros contábeis e emitindo parecer sobre demonstrações
                  financeiras.
                </p>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Documentos Institucionais */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Documentos Institucionais"
            subtitle="Acesse os documentos oficiais do Instituto Rede de Apoio."
          />

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {documentosInstitucionais.map((doc) => (
              <motion.div key={doc.title} variants={fadeInUp}>
                <a
                  href={doc.href}
                  target={doc.href !== "#" ? "_blank" : undefined}
                  rel={doc.href !== "#" ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group ${
                    doc.href === "#" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {doc.href !== "#" ? (
                    <Download className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  ) : (
                    <FileText className="w-8 h-8 text-neutral-400" />
                  )}
                  <span className="text-sm font-medium text-primary text-center">
                    {doc.title}
                  </span>
                </a>
              </motion.div>
            ))}
          </StaggerContainer>

          <p className="text-center text-neutral-500 text-sm mt-6">
            Demais documentos serão disponibilizados em breve.
          </p>
        </div>
      </section>

      {/* Princípios de Atuação */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Princípios de Atuação
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto">
            Valores que norteiam todas as ações do Instituto.
          </p>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {principios.map((principio) => (
              <motion.div
                key={principio}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                {principio}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
