"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { areasOfAction } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import WaveDivider from "@/components/shared/WaveDivider";

export default function AtuacaoContent() {
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
              Áreas de Atuação
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Áreas de Atuação</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <WaveDivider className="text-white -mt-1" />

      {/* Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossas Áreas de Atuação"
            subtitle="Atuamos em setores estratégicos para promover o desenvolvimento e a transformação da gestão pública."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {areasOfAction.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div key={area.title} variants={fadeInUp}>
                  <Card className="h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider className="text-primary -mt-1" />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer saber como podemos ajudar?
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Entre em contato com nossa equipe e descubra como o Instituto Rede
              pode apoiar a gestão pública na sua região.
            </p>
            <Button href="/contato" variant="primary" className="group">
              Fale Conosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
