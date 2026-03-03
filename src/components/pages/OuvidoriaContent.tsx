"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle,
  Upload,
} from "lucide-react";
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
import { Textarea } from "@/components/ui/Input";
import PageHero from "@/components/shared/PageHero";

const ouvidoriaSchema = z.object({
  tipoManifestacao: z.string().min(1, "Selecione o tipo de manifestação"),
  identificar: z.string().min(1, "Selecione uma opção"),
  nome: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  telefone: z.string().optional(),
  relacao: z.string().optional(),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  declaracao: z.literal(true, { message: "Você deve aceitar a declaração" }),
});

type OuvidoriaFormData = z.infer<typeof ouvidoriaSchema>;

const tiposManifestacao = [
  { value: "informacao", label: "Solicitação de informação" },
  { value: "sugestao", label: "Sugestão" },
  { value: "reclamacao", label: "Reclamação" },
  { value: "elogio", label: "Elogio" },
  { value: "denuncia", label: "Denúncia" },
  { value: "outros", label: "Outros" },
];

const relacoesInstituto = [
  { value: "colaborador", label: "Colaborador" },
  { value: "fornecedor", label: "Fornecedor" },
  { value: "beneficiario", label: "Beneficiário" },
  { value: "parceiro", label: "Parceiro" },
  { value: "cidadao", label: "Cidadão" },
  { value: "outro", label: "Outro" },
];

const garantias = [
  "Possibilidade de manifestação identificada ou anônima",
  "Tratamento confidencial das informações recebidas",
  "Proibição de retaliação",
  "Análise técnica e imparcial das comunicações",
  "Encaminhamento aos órgãos internos competentes",
];

export default function OuvidoriaContent() {
  const [submitted, setSubmitted] = useState(false);
  const [showIdentityFields, setShowIdentityFields] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OuvidoriaFormData>({
    resolver: zodResolver(ouvidoriaSchema),
  });

  const identificar = watch("identificar");

  const onSubmit = (_data: OuvidoriaFormData) => {
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Ouvidoria e Canal de Integridade" breadcrumb="Ouvidoria" />

      {/* Introduction */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl text-neutral-600 leading-relaxed">
              <p>
                O Instituto Rede de Apoio mantém canal permanente de Ouvidoria e
                Integridade destinado ao recebimento de manifestações, sugestões,
                reclamações, denúncias e solicitações de informação, assegurando
                tratamento adequado, confidencialidade e observância aos
                princípios da ética e da transparência institucional.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Finalidade e Canal */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <FadeInUp>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-primary mb-3">
                  Finalidade da Ouvidoria
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A Ouvidoria tem como objetivo promover o diálogo institucional
                  com a sociedade, colaboradores, parceiros e beneficiários,
                  contribuindo para o aprimoramento contínuo das atividades
                  desenvolvidas pelo Instituto.
                </p>
              </Card>
            </FadeInUp>

            <FadeInUp>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-primary mb-3">
                  Canal de Integridade
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  O Canal de Integridade destina-se ao recebimento de
                  comunicações relacionadas a eventuais irregularidades,
                  descumprimento de normas internas, conflitos de interesse,
                  práticas incompatíveis com o Código de Ética ou quaisquer
                  condutas que possam comprometer a integridade institucional.
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Garantias ao Manifestante */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Garantias ao Manifestante"
            subtitle="Asseguramos tratamento ético e confidencial a todas as manifestações."
          />

          <StaggerContainer className="max-w-3xl mx-auto mt-12 space-y-3">
            {garantias.map((garantia) => (
              <motion.div
                key={garantia}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-neutral-700 text-sm">{garantia}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Fluxo e Prazo */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <FadeInUp>
              <Card className="h-full">
                <h3 className="font-heading text-xl text-primary mb-3">
                  Fluxo de Tratamento
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  As manifestações recebidas são registradas, analisadas e
                  encaminhadas aos responsáveis institucionais competentes,
                  observando-se critérios de imparcialidade, legalidade e
                  razoabilidade. Quando necessário, poderão ser adotadas medidas
                  internas de apuração, correção ou encaminhamento às autoridades
                  competentes.
                </p>
              </Card>
            </FadeInUp>

            <FadeInUp>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-heading text-xl text-primary">
                    Prazo de Resposta
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  O Instituto compromete-se a analisar e responder às
                  manifestações no prazo de até 20 (vinte) dias corridos,
                  contados do registro da demanda, podendo esse prazo ser
                  prorrogado mediante justificativa, nos casos que demandem
                  apuração mais complexa.
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Registrar Manifestação"
            subtitle="Preencha o formulário abaixo para registrar sua manifestação."
          />

          <FadeInUp>
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border border-neutral-200 mt-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Sua manifestação foi registrada com sucesso.
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    O prazo estimado para resposta é de até 20 (vinte) dias
                    corridos.
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Caso tenha se identificado, você receberá retorno pelo e-mail
                    informado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Tipo de Manifestação */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                      Tipo de Manifestação *
                    </label>
                    <select
                      {...register("tipoManifestacao")}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Selecione...</option>
                      {tiposManifestacao.map((tipo) => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                    {errors.tipoManifestacao && (
                      <p className="text-xs text-red-500">
                        {errors.tipoManifestacao.message}
                      </p>
                    )}
                  </div>

                  {/* Deseja se identificar? */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                      Deseja se identificar? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                        <input
                          type="radio"
                          value="sim"
                          {...register("identificar")}
                          onChange={(e) => {
                            register("identificar").onChange(e);
                            setShowIdentityFields(true);
                          }}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm font-medium text-neutral-700">
                          Sim
                        </span>
                      </label>
                      <label className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                        <input
                          type="radio"
                          value="nao"
                          {...register("identificar")}
                          onChange={(e) => {
                            register("identificar").onChange(e);
                            setShowIdentityFields(false);
                          }}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm font-medium text-neutral-700">
                          Não (manifestação anônima)
                        </span>
                      </label>
                    </div>
                    {errors.identificar && (
                      <p className="text-xs text-red-500">
                        {errors.identificar.message}
                      </p>
                    )}
                  </div>

                  {/* Identity Fields (conditional) */}
                  {(identificar === "sim" || showIdentityFields) && (
                    <div className="space-y-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <Input
                        label="Nome completo"
                        placeholder="Seu nome"
                        {...register("nome")}
                        error={errors.nome?.message}
                      />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="E-mail"
                          type="email"
                          placeholder="seu@email.com"
                          {...register("email")}
                          error={errors.email?.message}
                        />
                        <Input
                          label="Telefone (opcional)"
                          placeholder="(00) 00000-0000"
                          {...register("telefone")}
                          error={errors.telefone?.message}
                        />
                      </div>
                    </div>
                  )}

                  {/* Relação com o Instituto */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                      Relação com o Instituto (opcional)
                    </label>
                    <select
                      {...register("relacao")}
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Selecione...</option>
                      {relacoesInstituto.map((rel) => (
                        <option key={rel.value} value={rel.value}>
                          {rel.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Descrição */}
                  <Textarea
                    label="Descrição da Manifestação *"
                    placeholder="Descreva sua manifestação em detalhes..."
                    rows={6}
                    {...register("descricao")}
                    error={errors.descricao?.message}
                  />

                  {/* File Upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">
                      Anexar Arquivos (opcional)
                    </label>
                    <label className="flex items-center gap-3 w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4 text-sm cursor-pointer transition-all hover:border-accent hover:bg-accent/5">
                      <Upload className="w-5 h-5 text-neutral-400" />
                      <span className="text-neutral-500">
                        PDF, JPG ou PNG — Clique para selecionar
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Declaração */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register("declaracao")}
                      className="w-4 h-4 mt-0.5 rounded border-neutral-300 accent-accent"
                    />
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      Declaro que as informações prestadas são verdadeiras,
                      estando ciente de que comunicações realizadas de má-fé
                      poderão ser desconsideradas.
                    </span>
                  </label>
                  {errors.declaracao && (
                    <p className="text-xs text-red-500">
                      {errors.declaracao.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar manifestação"}
                  </Button>
                </form>
              )}
            </div>
          </FadeInUp>

          <p className="text-center text-neutral-500 text-sm mt-8 max-w-3xl mx-auto">
            O Instituto Rede de Apoio reafirma seu compromisso com a
            integridade, a transparência e o controle social, incentivando a
            participação responsável da sociedade no acompanhamento de suas
            atividades.
          </p>
        </div>
      </section>
    </>
  );
}
