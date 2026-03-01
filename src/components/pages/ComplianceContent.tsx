"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, AlertTriangle, Lock, BarChart3 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

const complianceSections = [
  {
    icon: Scale,
    title: "Código de Ética e Conduta",
    content:
      "O Código de Ética e Conduta do Instituto Rede estabelece os princípios, valores e normas de comportamento que orientam a atuação de todos os colaboradores, parceiros e fornecedores. Nosso compromisso é garantir que todas as relações sejam pautadas pela integridade, respeito, transparência e responsabilidade social. O código abrange temas como conflito de interesses, relacionamento com o poder público, uso de recursos institucionais, diversidade e inclusão, e responsabilidade socioambiental. Todos os membros da organização são responsáveis por conhecer, respeitar e promover os valores aqui estabelecidos.",
  },
  {
    icon: ShieldCheck,
    title: "Política Anticorrupção",
    content:
      "O Instituto Rede possui tolerância zero com qualquer forma de corrupção, suborno ou atos ilícitos. Nossa Política Anticorrupção está alinhada com a Lei Anticorrupção (Lei 12.846/2013) e estabelece diretrizes claras para prevenir, detectar e remediar práticas corruptas. A política inclui procedimentos de due diligence para terceiros, controles internos rigorosos, treinamentos periódicos para colaboradores e mecanismos de monitoramento contínuo. Qualquer suspeita de irregularidade deve ser reportada imediatamente através do nosso canal de denúncias.",
  },
  {
    icon: AlertTriangle,
    title: "Canal de Denúncias",
    content:
      "O Canal de Denúncias é um instrumento fundamental do nosso programa de compliance. Por meio dele, colaboradores, parceiros, fornecedores e qualquer pessoa podem reportar, de forma segura e confidencial, situações que envolvam violação do Código de Ética, irregularidades, fraudes ou qualquer conduta incompatível com os valores do Instituto Rede. Garantimos o sigilo absoluto da identidade do denunciante e a não retaliação. Todas as denúncias são apuradas de forma independente e imparcial.",
    hasLink: true,
  },
  {
    icon: Lock,
    title: "Política de Privacidade",
    content:
      "Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), o Instituto Rede adota medidas rigorosas para proteger os dados pessoais de todos os titulares com os quais se relaciona. Nossa Política de Privacidade estabelece as diretrizes para coleta, tratamento, armazenamento e compartilhamento de dados pessoais, garantindo transparência e segurança em todas as operações. Implementamos controles técnicos e administrativos, realizamos avaliações de impacto à proteção de dados e mantemos um encarregado de dados (DPO) dedicado para atender solicitações dos titulares e da Autoridade Nacional de Proteção de Dados (ANPD).",
  },
  {
    icon: BarChart3,
    title: "Gestão de Riscos",
    content:
      "O Instituto Rede adota uma abordagem proativa e sistemática para a gestão de riscos. Nosso programa contempla a identificação, avaliação, tratamento e monitoramento de riscos em todas as áreas da organização, incluindo riscos operacionais, financeiros, regulatórios, de reputação e de conformidade. Utilizamos metodologias reconhecidas internacionalmente e contamos com um comitê de riscos que se reúne periodicamente para avaliar o cenário de riscos e definir estratégias de mitigação. A cultura de gestão de riscos é disseminada em todos os níveis da organização por meio de treinamentos e comunicação contínua.",
  },
];

export default function ComplianceContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Compliance
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Compliance</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ética e Conformidade"
            subtitle="Nosso compromisso com a integridade, a transparência e as boas práticas de governança."
          />

          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-600 leading-relaxed text-lg">
                O Instituto Rede mantém um programa robusto de compliance que permeia todas as
                atividades da organização. Acreditamos que a ética e a conformidade são pilares
                fundamentais para o cumprimento de nossa missão e para a construção de relações de
                confiança com colaboradores, parceiros, governos e a sociedade. Nossas políticas e
                práticas são continuamente aprimoradas para garantir os mais altos padrões de
                integridade e governança corporativa.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {complianceSections.map((section) => (
              <motion.div key={section.title} variants={fadeInUp}>
                <Accordion title={section.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <section.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="leading-relaxed">{section.content}</p>
                      {section.hasLink && (
                        <div className="mt-4">
                          <Button variant="primary" href="/ouvidoria">
                            Acessar Canal de Denúncias
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Accordion>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA to Ouvidoria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center bg-primary rounded-2xl p-10 text-white">
              <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Precisa reportar algo?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Utilize nosso canal de ouvidoria para enviar sugestões, reclamações, elogios ou
                denúncias. Garantimos total sigilo e confidencialidade.
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
