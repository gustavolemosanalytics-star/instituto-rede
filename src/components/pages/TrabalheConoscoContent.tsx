"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageHero from "@/components/shared/PageHero";

export default function TrabalheConoscoContent() {
  return (
    <>
      <PageHero title="Trabalhe Conosco" breadcrumb="Trabalhe Conosco" />

      {/* Introduction */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed">
              <p>
                O Instituto Rede de Apoio adota critérios objetivos,
                transparentes e impessoais para seleção de profissionais e
                colaboradores, observando princípios de legalidade, ética,
                igualdade de oportunidades e conformidade normativa.
              </p>
              <p>
                Os processos seletivos são realizados de acordo com a necessidade
                institucional e, quando vinculados a parcerias com o Poder
                Público, observam as regras estabelecidas nos respectivos
                instrumentos jurídicos e na legislação aplicável.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Política de Recrutamento */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Política de Recrutamento e Seleção"
            subtitle="Critérios técnicos e transparência em todos os processos."
          />

          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed mt-8">
              <p>
                A seleção de profissionais é realizada com base em critérios
                técnicos, experiência profissional, qualificação compatível com
                a função e aderência aos valores institucionais.
              </p>
              <p>
                O Instituto poderá realizar processos seletivos por meio de
                divulgação pública de editais, análise curricular, entrevistas
                técnicas e demais etapas compatíveis com a natureza da função.
              </p>
              <p>
                É assegurada igualdade de condições a todos os candidatos, vedada
                qualquer forma de discriminação.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Processo Seletivo */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Processo Seletivo"
            subtitle="Confira o edital vigente e realize sua inscrição."
          />

          <StaggerContainer className="max-w-3xl mx-auto mt-12">
            <motion.div variants={fadeInUp}>
              <Card className="mb-6">
                <h3 className="font-heading text-lg text-primary mb-4">
                  Santo Antônio de Jesus, Bahia
                </h3>
                <div className="space-y-3">
                  <a
                    href="/arquivos/Edital_Processo_Seletivo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group"
                  >
                    <Download className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-neutral-700">
                      Edital de Processo Seletivo
                    </span>
                  </a>
                  <a
                    href="https://forms.gle/bZxNZ3zj6K1Xixag7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all group"
                  >
                    <ExternalLink className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">
                      Realizar inscrição
                    </span>
                  </a>
                  <a
                    href="https://cqrpbiepyeypbkizwacu.supabase.co/storage/v1/object/public/arquivos/Edital_Chamamento_Termo_de_Colaboracao_Completo_errata_08_12_2025_1_.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group"
                  >
                    <FileText className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-neutral-700">
                      Edital Nº 01/2026
                    </span>
                  </a>
                  <a
                    href="https://cqrpbiepyeypbkizwacu.supabase.co/storage/v1/object/public/arquivos/DOM_Resultado_Definitivo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group"
                  >
                    <FileText className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-neutral-700">
                      Resultado
                    </span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Closing */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <p className="text-center text-neutral-500 text-sm max-w-2xl mx-auto">
              O Instituto Rede de Apoio reafirma seu compromisso com a
              transparência, a meritocracia e a valorização profissional na
              composição de sua equipe técnica e administrativa.
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
