"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Download } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageHero from "@/components/shared/PageHero";

const SUPABASE_STORAGE = "https://cqrpbiepyeypbkizwacu.supabase.co/storage/v1/object/public/arquivos";

const documentacaoInstitucional = [
  {
    title: "Estatuto Social",
    href: `${SUPABASE_STORAGE}/Estatuto%20Social%20-%20Instituto%20Rede%20de%20Apoi.pdf`,
  },
  {
    title: "Cartão CNPJ",
    href: `${SUPABASE_STORAGE}/CARTAO%20CNPJ%20-%20INSTITUTO%20REDE.pdf`,
  },
  { title: "Ata de eleição da diretoria vigente", href: "#" },
  { title: "Certidões", href: "#" },
  { title: "Qualificações", href: "#" },
];

const termosColaboracaoLinks = [
  {
    title: "Edital Chamamento Público",
    href: `${SUPABASE_STORAGE}/REDE%20SAJ.pdf`,
  },
  {
    title: "Ata de Julgamento",
    href: `${SUPABASE_STORAGE}/ATA_DE_JULGAMENTO.pdf`,
  },
  {
    title: "Parecer Jurídico",
    href: `${SUPABASE_STORAGE}/PARECER_JURIDICO.pdf`,
  },
  {
    title: "Resultado Definitivo",
    href: `${SUPABASE_STORAGE}/DOM_Resultado_Definitivo.pdf`,
  },
  {
    title: "Ato de Homologação",
    href: `${SUPABASE_STORAGE}/Publicacao_Ato_de_Homologacao.pdf`,
  },
  {
    title: "Portaria SME Nº 15/2026",
    href: `${SUPABASE_STORAGE}/PORTARIA_SME_N_15_2026_GESTORA_AVALIACAO_E_MONITORAMENTO.pdf`,
  },
];

export default function TransparenciaContent() {
  return (
    <>
      <PageHero title="Portal da Transparência" breadcrumb="Portal da Transparência">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image
            src="/images/simbolo_transparencia.png"
            alt="Símbolo de Transparência"
            width={56}
            height={56}
            className="w-14 h-14"
          />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-tight">
            Portal da Transparência
          </h1>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed">
              <p>
                O Instituto Rede de Apoio disponibiliza neste espaço informações
                atualizadas sobre suas parcerias, execução financeira e prestação
                de contas, em observância aos princípios da publicidade e da
                transparência, especialmente no âmbito da Lei nº 13.019/2014 e,
                quando aplicável, da Lei nº 9.637/1998, bem como demais normas
                pertinentes.
              </p>
              <p>
                As informações disponibilizadas neste Portal são atualizadas
                periodicamente, conforme a execução dos instrumentos firmados e
                os prazos legais aplicáveis.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Documentação Institucional */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Documentação Institucional"
            subtitle="Documentos oficiais do Instituto Rede de Apoio."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            {documentacaoInstitucional.map((doc) => (
              <motion.div key={doc.title} variants={fadeInUp}>
                <a
                  href={doc.href}
                  target={doc.href !== "#" ? "_blank" : undefined}
                  rel={doc.href !== "#" ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-white hover:border-accent/30 hover:bg-accent/5 transition-all group ${
                    doc.href === "#" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {doc.href !== "#" ? (
                    <Download className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                  ) : (
                    <FileText className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                  <span className="text-sm font-medium text-neutral-700">
                    {doc.title}
                  </span>
                </a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Parcerias e Instrumentos Firmados */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Parcerias e Instrumentos Firmados"
            subtitle="Informações sobre termos, contratos e prestações de contas."
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            {/* Termos de Colaboração */}
            <FadeInUp>
              <Card>
                <h3 className="font-heading text-xl text-primary mb-4">
                  Termos de Colaboração
                </h3>

                <div className="mb-4">
                  <h4 className="text-base font-semibold text-neutral-700 mb-3">
                    Santo Antônio de Jesus, Bahia
                  </h4>
                  <div className="space-y-2">
                    {termosColaboracaoLinks.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group"
                      >
                        <Download className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-neutral-700">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeInUp>

            {/* Termos de Fomento */}
            <FadeInUp>
              <Card>
                <h3 className="font-heading text-xl text-primary mb-3">
                  Termos de Fomento
                </h3>
                <p className="text-neutral-500 text-sm">
                  Informações serão disponibilizadas conforme a formalização de
                  novos instrumentos.
                </p>
              </Card>
            </FadeInUp>

            {/* Contratos de Gestão */}
            <FadeInUp>
              <Card>
                <h3 className="font-heading text-xl text-primary mb-3">
                  Contratos de Gestão
                </h3>
                <p className="text-neutral-500 text-sm">
                  Informações serão disponibilizadas conforme a formalização de
                  novos instrumentos.
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
