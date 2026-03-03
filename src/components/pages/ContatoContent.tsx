"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { offices } from "@/lib/constants";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";
import PageHero from "@/components/shared/PageHero";

const contactSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  telefone: z.string().optional(),
  assunto: z.string().min(1, "Assunto é obrigatório"),
  mensagem: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContatoContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (_data: ContactFormData) => {
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Contato" breadcrumb="Contato" />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-600 leading-relaxed text-lg">
                O Instituto Rede de Apoio coloca-se à disposição para informações
                institucionais, esclarecimentos e comunicações administrativas
                por meio dos canais abaixo.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Canais de Comunicação + Formulário */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Canais de Comunicação"
            subtitle="Entre em contato com o Instituto Rede de Apoio."
          />

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            {/* Form - 60% */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Mensagem enviada com sucesso!
                    </h3>
                    <p className="text-neutral-600">
                      Agradecemos seu contato. Retornaremos o mais breve possível.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <Input
                      label="Nome"
                      placeholder="Seu nome completo"
                      {...register("nome")}
                      error={errors.nome?.message}
                    />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Email"
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
                    <Input
                      label="Assunto"
                      placeholder="Assunto da sua mensagem"
                      {...register("assunto")}
                      error={errors.assunto?.message}
                    />
                    <Textarea
                      label="Mensagem"
                      placeholder="Escreva sua mensagem..."
                      rows={5}
                      {...register("mensagem")}
                      error={errors.mensagem?.message}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info - 40% */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Email */}
              <div className="bg-white rounded-xl p-5 border border-neutral-100">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  E-mail Institucional
                </h4>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href="mailto:rededeapoioinstituto@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    rededeapoioinstituto@gmail.com
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div className="bg-white rounded-xl p-5 border border-neutral-100">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Horário de Funcionamento
                </h4>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>Segunda a sexta-feira, das 8h às 17h</span>
                </div>
              </div>

              {/* Endereços */}
              <div className="bg-white rounded-xl p-5 border border-neutral-100">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Endereços
                </h4>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.label} className="flex gap-2 text-sm text-neutral-600">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-neutral-700">{office.address}</p>
                        <p>
                          {office.city} — CEP: {office.cep}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ouvidoria link */}
              <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Para manifestações, denúncias ou comunicações relacionadas à
                  integridade institucional, utilize o formulário disponível na
                  aba{" "}
                  <Link
                    href="/ouvidoria"
                    className="text-accent font-medium hover:underline"
                  >
                    Ouvidoria e Canal de Integridade
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
