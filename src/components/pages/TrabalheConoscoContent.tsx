"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Users, Heart, Rocket, MapPin, Briefcase, Upload, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobPostings } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";

const applicationSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  cargo: z.string().min(1, "Cargo pretendido é obrigatório"),
  mensagem: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const cultureValues = [
  {
    icon: Users,
    title: "Crescimento",
    description: "Oportunidades reais de desenvolvimento profissional e pessoal dentro de uma organização em expansão.",
  },
  {
    icon: Heart,
    title: "Impacto",
    description: "Trabalhe em projetos que transformam a gestão pública e impactam positivamente a vida de milhares de pessoas.",
  },
  {
    icon: Rocket,
    title: "Inovação",
    description: "Ambiente que valoriza ideias criativas e soluções inovadoras para os desafios da gestão pública.",
  },
];

export default function TrabalheConoscoContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (_data: ApplicationFormData) => {
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
              Trabalhe Conosco
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Trabalhe Conosco</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Venha fazer parte do nosso time"
            subtitle="No Instituto Rede, acreditamos que grandes resultados nascem de equipes engajadas. Nossa cultura valoriza a colaboração, o respeito e a busca constante por excelência no serviço ao interesse público."
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-12">
            {cultureValues.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Vagas Abertas"
            subtitle="Confira nossas oportunidades e encontre a vaga ideal para você."
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {jobPostings.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <Badge className="mb-3 self-start">{job.department}</Badge>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-1">
                    {job.description}
                  </p>
                  <Button variant="primary" href="#formulario" className="w-full">
                    Candidate-se
                  </Button>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section id="formulario" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Envie seu currículo"
            subtitle="Preencha o formulário abaixo e nossa equipe de RH entrará em contato."
          />

          <FadeInUp>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Currículo enviado com sucesso!
                  </h3>
                  <p className="text-neutral-600">
                    Agradecemos seu interesse em fazer parte do nosso time. Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input
                    label="Nome completo"
                    placeholder="Seu nome completo"
                    {...register("nome")}
                    error={errors.nome?.message}
                  />
                  <Input
                    label="Email"
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
                    label="Cargo pretendido"
                    placeholder="Ex: Analista de Projetos"
                    {...register("cargo")}
                    error={errors.cargo?.message}
                  />
                  <Textarea
                    label="Mensagem (opcional)"
                    placeholder="Conte um pouco sobre você e suas experiências..."
                    rows={4}
                    {...register("mensagem")}
                    error={errors.mensagem?.message}
                  />

                  {/* File Upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">
                      Currículo (PDF)
                    </label>
                    <label className="flex items-center gap-3 w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4 text-sm cursor-pointer transition-all hover:border-accent hover:bg-accent/5">
                      <Upload className="w-5 h-5 text-neutral-400" />
                      <span className="text-neutral-500">
                        Clique para selecionar seu currículo
                      </span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar currículo"}
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
