"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Target, Eye, Heart } from "lucide-react";
import { timeline } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideFromLeft, slideFromRight } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import WaveDivider from "@/components/shared/WaveDivider";

const valores = [
  "Ética",
  "Transparência",
  "Inovação",
  "Compromisso social",
  "Excelência",
  "Colaboração",
];

export default function SobreNosContent() {
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
              Sobre Nós
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Sobre Nós</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <WaveDivider className="text-white -mt-1" />

      {/* Quem Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge>Quem Somos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
                Construindo pontes entre desafios e soluções
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Fundado em 2003, o Instituto Rede nasceu com a missão de apoiar
                  a gestão pública e promover o desenvolvimento social no Brasil.
                  Ao longo de mais de duas décadas, consolidamos nossa atuação como
                  uma organização de referência no apoio a governos municipais e
                  estaduais.
                </p>
                <p>
                  Nossa trajetória é marcada pelo compromisso com a transformação
                  social por meio de soluções inovadoras e sustentáveis. Atuamos
                  em parceria com gestores públicos para desenvolver projetos que
                  impactam positivamente a vida de milhares de pessoas.
                </p>
                <p>
                  Com uma equipe multidisciplinar e presença em mais de 80
                  municípios, oferecemos consultoria especializada nas áreas de
                  educação, saúde, administração pública, sustentabilidade e
                  infraestrutura.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="w-full h-80 lg:h-[450px] rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 animate-pulse" />
                </div>
                <div className="absolute top-8 right-8 w-20 h-20 rounded-xl bg-primary/10 rotate-12" />
                <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-accent/15" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Missão, Visão e Valores"
            subtitle="Os pilares que guiam nossa atuação e definem quem somos."
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Missão */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Missão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Apoiar a gestão pública e promover o desenvolvimento social,
                  oferecendo soluções inovadoras e sustentáveis.
                </p>
              </Card>
            </motion.div>

            {/* Visão */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Visão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Ser referência nacional em apoio à gestão pública e ao
                  desenvolvimento social.
                </p>
              </Card>
            </motion.div>

            {/* Valores */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Valores</h3>
                <ul className="text-neutral-600 space-y-2">
                  {valores.map((valor) => (
                    <li key={valor} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {valor}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider className="text-neutral-50 -mt-1" flip />

      {/* Timeline - Nossa Trajetória */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossa Trajetória"
            subtitle="Uma história de compromisso com a transformação social e a gestão pública."
          />

          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-accent/20" />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  variants={isLeft ? slideFromLeft : slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-start mb-12 last:mb-0 md:items-center ${
                    isLeft
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md z-10" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                      <Badge className="mb-3">{item.year}</Badge>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
