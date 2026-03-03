"use client";

import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <motion.div
            className="lg:col-span-7"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge className="mb-6">Sobre Nós</Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Construindo pontes entre desafios e soluções
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              O Instituto Rede é uma organização social dedicada a apoiar a
              gestão pública e promover o desenvolvimento social em todo o
              Brasil. Com mais de duas décadas de experiência, atuamos como
              parceiros estratégicos de governos municipais e estaduais, oferecendo
              soluções integradas que geram impacto real nas comunidades.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-10">
              Nossa equipe multidisciplinar combina conhecimento técnico,
              inovação e compromisso com resultados para transformar a realidade
              da administração pública brasileira.
            </p>
            <Button variant="primary" href="/institucional">
              Saiba Mais
            </Button>
          </motion.div>

          {/* Right: Pull quote */}
          <motion.div
            className="lg:col-span-5 lg:pt-16"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="border-l-2 border-accent pl-8">
              <span className="font-heading text-6xl text-accent/30 leading-none block mb-2">&ldquo;</span>
              <p className="font-heading text-2xl md:text-3xl leading-snug text-primary italic">
                Promover ações de educação, saúde e esporte como instrumentos
                de desenvolvimento humano e inclusão social.
              </p>
              <p className="mt-6 text-sm text-neutral-600 tracking-wide uppercase">
                Nossa Missão
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
