"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Users,
  ClipboardList,
  FileText,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHero from "@/components/shared/PageHero";

const principios = [
  "Legalidade",
  "Impessoalidade",
  "Moralidade",
  "Publicidade",
  "Eficiência",
  "Transparência",
  "Responsabilidade social",
  "Controle interno",
];

const politicas = [
  "Código de Ética e Conduta",
  "Política de Integridade e Compliance",
  "Política de Recrutamento e Seleção",
  "Política de Compras e Contratações",
  "Política de Gestão de Recursos Humanos",
  "Política de Conflito de Interesses",
  "Política de Transparência",
  "Regulamento Administrativo",
];

export default function ComplianceContent() {
  return (
    <>
      <PageHero title="Governança e Integridade" breadcrumb="Governança e Integridade" />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed">
              <p>
                O Instituto Rede de Apoio adota modelo de governança
                institucional estruturado com base na legalidade, transparência,
                responsabilidade administrativa e controle interno, assegurando
                conformidade normativa e integridade na gestão de suas atividades
                e parcerias.
              </p>
              <p>
                A organização de sua governança observa as disposições do
                Estatuto Social e a legislação aplicável às organizações da
                sociedade civil, especialmente a Lei nº 13.019/2014, quando da
                celebração de parcerias com o Poder Público, e, quando aplicável,
                a Lei nº 9.637/1998, no âmbito de contratos de gestão.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Estrutura de Governança */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Estrutura de Governança"
            subtitle="Órgãos estatutários com competências definidas e segregadas."
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
                  Função deliberativa máxima da organização.
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
                  Diretrizes estratégicas e supervisão institucional.
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
                  Gestão administrativa e operacional.
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
                  Fiscalização contábil, financeira e patrimonial.
                </p>
              </Card>
            </motion.div>
          </StaggerContainer>

          <FadeInUp>
            <p className="text-neutral-600 leading-relaxed text-center mt-10 max-w-3xl mx-auto">
              O modelo adotado assegura segregação de funções, fiscalização
              interna e equilíbrio entre deliberação estratégica e execução
              administrativa.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Princípios Institucionais */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Princípios Institucionais
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto">
            Valores que orientam a governança e a atuação do Instituto.
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

      {/* Políticas Institucionais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Políticas Institucionais"
            subtitle="Documentos que regem a atuação institucional."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {politicas.map((politica) => (
              <motion.div key={politica} variants={fadeInUp}>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group"
                >
                  <FileText className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700">
                    {politica}
                  </span>
                </a>
              </motion.div>
            ))}
          </StaggerContainer>

          <p className="text-center text-neutral-500 text-sm mt-6">
            Documentos serão disponibilizados em breve.
          </p>
        </div>
      </section>

      {/* Sistema de Controle Interno */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Sistema de Controle Interno"
            subtitle="Regularidade administrativa e conformidade jurídica."
          />

          <FadeInUp>
            <div className="max-w-4xl mx-auto space-y-4 text-neutral-600 leading-relaxed mt-8">
              <p>
                O Instituto Rede de Apoio adota sistema de controle interno
                estruturado, destinado a assegurar regularidade administrativa,
                conformidade jurídica e adequada aplicação dos recursos sob sua
                gestão.
              </p>
              <p>
                O modelo de controle interno é fundamentado na segregação de
                funções, na formalização de atos administrativos, no registro
                documental das decisões institucionais e no acompanhamento
                sistemático da execução financeira e operacional dos projetos.
              </p>
              <p>
                O Instituto mantém procedimentos formais de controle
                orçamentário, acompanhamento de metas, análise de conformidade
                contratual e verificação da aderência às políticas
                institucionais, assegurando rastreabilidade das decisões e
                transparência na gestão.
              </p>
              <p>
                As práticas de controle interno visam prevenir irregularidades,
                mitigar riscos institucionais, evitar conflitos de interesse e
                assegurar o cumprimento das obrigações legais e contratuais
                assumidas, especialmente no âmbito das parcerias com o Poder
                Público.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gestão de Riscos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <FadeInUp>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Gestão de Riscos e Integridade
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A atuação institucional é orientada por práticas de integridade
                  e gestão de riscos, com identificação preventiva de
                  vulnerabilidades administrativas, financeiras e operacionais. O
                  Instituto adota medidas voltadas à mitigação de riscos,
                  prevenção de desvios, promoção da ética organizacional e
                  fortalecimento da cultura de conformidade normativa.
                </p>
              </Card>
            </FadeInUp>

            <FadeInUp>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Compromisso com a Transparência
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A governança do Instituto Rede de Apoio reflete compromisso
                  permanente com a transparência, o controle social e a boa
                  gestão de recursos, garantindo que suas atividades sejam
                  conduzidas com responsabilidade, eficiência e observância aos
                  princípios que regem a administração pública.
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA to Ouvidoria */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center text-white">
              <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Canal de Integridade
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Utilize nosso canal de ouvidoria para enviar manifestações,
                denúncias ou comunicações relacionadas à integridade
                institucional. Garantimos total confidencialidade.
              </p>
              <Button variant="primary" href="/ouvidoria">
                Acessar Ouvidoria
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
