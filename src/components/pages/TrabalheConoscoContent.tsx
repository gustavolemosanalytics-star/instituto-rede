"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Upload, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PageHero from "@/components/shared/PageHero";

const talentBankSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  areaInteresse: z.string().min(1, "Área de interesse é obrigatória"),
});

type TalentBankFormData = z.infer<typeof talentBankSchema>;

export default function TrabalheConoscoContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TalentBankFormData>({
    resolver: zodResolver(talentBankSchema),
  });

  const onSubmit = (_data: TalentBankFormData) => {
    setSubmitted(true);
  };

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

      {/* Editais */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Lista de Editais"
            subtitle="Confira os editais de processos seletivos vigentes."
          />

          <StaggerContainer className="max-w-3xl mx-auto mt-12">
            <motion.div variants={fadeInUp}>
              <Card className="mb-6">
                <h3 className="font-heading text-lg text-primary mb-4">
                  Santo Antônio de Jesus, Bahia
                </h3>
                <div className="space-y-3">
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
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:border-accent/30 hover:bg-accent/5 transition-all group opacity-50 cursor-not-allowed"
                  >
                    <FileText className="w-5 h-5 text-neutral-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-neutral-700">
                      Realizar inscrição
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

      {/* Banco de Talentos */}
      <section id="banco-de-talentos" className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Banco de Talentos"
            subtitle="Interessados poderão cadastrar currículo para eventual participação em futuros processos seletivos, observadas as necessidades institucionais."
          />

          <FadeInUp>
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border border-neutral-200 mt-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-2xl text-primary mb-2">
                    Cadastro realizado com sucesso!
                  </h3>
                  <p className="text-neutral-600">
                    Agradecemos seu interesse. Seu currículo será analisado
                    conforme as necessidades institucionais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input
                    label="Nome"
                    placeholder="Seu nome completo"
                    {...register("nome")}
                    error={errors.nome?.message}
                  />
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  <Input
                    label="Telefone"
                    placeholder="(00) 00000-0000"
                    {...register("telefone")}
                    error={errors.telefone?.message}
                  />
                  <Input
                    label="Área de interesse"
                    placeholder="Ex: Educação, Saúde, Esporte..."
                    {...register("areaInteresse")}
                    error={errors.areaInteresse?.message}
                  />

                  {/* File Upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">
                      Upload de currículo
                    </label>
                    <label className="flex items-center gap-3 w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4 text-sm cursor-pointer transition-all hover:border-accent hover:bg-accent/5">
                      <Upload className="w-5 h-5 text-neutral-400" />
                      <span className="text-neutral-500">
                        Clique para selecionar seu currículo (PDF)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Cadastrar currículo"}
                  </Button>
                </form>
              )}
            </div>
          </FadeInUp>

          <p className="text-center text-neutral-500 text-sm mt-8 max-w-2xl mx-auto">
            O Instituto Rede de Apoio reafirma seu compromisso com a
            transparência, a meritocracia e a valorização profissional na
            composição de sua equipe técnica e administrativa.
          </p>
        </div>
      </section>
    </>
  );
}
