"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MessageSquare, Shield, CheckCircle } from "lucide-react";
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

const ouvidoriaSchema = z.object({
  tipo: z.string().min(1, "Selecione o tipo de manifestação"),
  mensagem: z.string().min(1, "Mensagem é obrigatória"),
  nome: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  telefone: z.string().optional(),
  sigilo: z.boolean().optional(),
});

type OuvidoriaFormData = z.infer<typeof ouvidoriaSchema>;

const tiposManifestacao = [
  { value: "sugestao", label: "Sugestão" },
  { value: "reclamacao", label: "Reclamação" },
  { value: "elogio", label: "Elogio" },
  { value: "denuncia", label: "Denúncia" },
];

const manifestationInfo = [
  {
    icon: MessageSquare,
    title: "Sugestão",
    description: "Proponha melhorias para nossos processos e serviços.",
  },
  {
    icon: MessageSquare,
    title: "Reclamação",
    description: "Relate problemas ou insatisfações com nossos serviços.",
  },
  {
    icon: MessageSquare,
    title: "Elogio",
    description: "Reconheça o bom trabalho de nossas equipes e parceiros.",
  },
  {
    icon: Shield,
    title: "Denúncia",
    description: "Reporte condutas inadequadas ou irregularidades com total sigilo.",
  },
];

export default function OuvidoriaContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OuvidoriaFormData>({
    resolver: zodResolver(ouvidoriaSchema),
    defaultValues: {
      sigilo: false,
    },
  });

  const onSubmit = (_data: OuvidoriaFormData) => {
    setSubmitted(true);
  };

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
              Ouvidoria
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Ouvidoria</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Explanatory Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Canal de Ouvidoria"
            subtitle="A ouvidoria é um canal de comunicação direta entre você e o Instituto Rede. Por meio dela, você pode enviar sugestões, reclamações, elogios ou denúncias, contribuindo para a melhoria contínua de nossos serviços e processos."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {manifestationInfo.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Envie sua manifestação"
            subtitle="Preencha o formulário abaixo. Sua manifestação será tratada com seriedade e confidencialidade."
          />

          <FadeInUp>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Manifestação enviada com sucesso!
                  </h3>
                  <p className="text-neutral-600">
                    Agradecemos sua contribuição. Sua manifestação será analisada por nossa equipe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Tipo de manifestação */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                      Tipo de manifestação
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {tiposManifestacao.map((tipo) => (
                        <label
                          key={tipo.value}
                          className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                        >
                          <input
                            type="radio"
                            value={tipo.value}
                            {...register("tipo")}
                            className="w-4 h-4 text-accent accent-accent"
                          />
                          <span className="text-sm font-medium text-neutral-700">
                            {tipo.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.tipo && (
                      <p className="text-xs text-red-500">{errors.tipo.message}</p>
                    )}
                  </div>

                  <Textarea
                    label="Mensagem"
                    placeholder="Descreva sua manifestação em detalhes..."
                    rows={5}
                    {...register("mensagem")}
                    error={errors.mensagem?.message}
                  />

                  <div className="border-t border-neutral-100 pt-6">
                    <p className="text-sm text-neutral-500 mb-4">
                      Os campos abaixo são opcionais. Preencha caso deseje receber um retorno sobre sua manifestação.
                    </p>
                    <div className="space-y-4">
                      <Input
                        label="Nome (opcional)"
                        placeholder="Seu nome"
                        {...register("nome")}
                        error={errors.nome?.message}
                      />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Email (opcional)"
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
                  </div>

                  {/* Sigilo Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register("sigilo")}
                      className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-accent accent-accent"
                    />
                    <div>
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors">
                        Desejo manter minha identidade em sigilo
                      </span>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Sua identidade será preservada durante todo o processo de apuração.
                      </p>
                    </div>
                  </label>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar manifestação"}
                  </Button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
