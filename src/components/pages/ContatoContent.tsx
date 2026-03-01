"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
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
              Contato
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contato</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Fale Conosco"
            subtitle="Entre em contato com o Instituto Rede. Estamos prontos para atender você."
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
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
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">
                  Nossos escritórios
                </h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Encontre o escritório mais próximo de você.
                </p>

                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-neutral-50 rounded-xl p-5 border border-neutral-100"
                    >
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {office.city}
                      </h4>
                      <div className="space-y-2 text-sm text-neutral-600">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>
                            {office.address}
                            <br />
                            CEP: {office.cep}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-accent shrink-0" />
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent shrink-0" />
                          contato@institutorededeapoio.org.br
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="w-full h-80 rounded-2xl bg-neutral-200 flex items-center justify-center border border-neutral-300 overflow-hidden">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                <p className="text-neutral-500 text-sm">
                  Google Maps - Em breve
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
