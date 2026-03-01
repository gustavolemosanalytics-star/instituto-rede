"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content (60%) */}
          <motion.div
            className="w-full lg:w-[60%]"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge className="mb-4">Sobre Nós</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Construindo pontes entre desafios e soluções
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              O Instituto Rede é uma organização social dedicada a apoiar a
              gestão pública e promover o desenvolvimento social em todo o
              Brasil. Com mais de duas décadas de experiência, atuamos como
              parceiros estratégicos de governos municipais e estaduais, oferecendo
              soluções integradas que geram impacto real nas comunidades.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nossa equipe multidisciplinar combina conhecimento técnico,
              inovação e compromisso com resultados para transformar a realidade
              da administração pública brasileira.
            </p>
            <Button variant="primary" href="/sobre-nos">
              Saiba Mais
            </Button>
          </motion.div>

          {/* Right: Decorative image placeholder (40%) */}
          <motion.div
            className="w-full lg:w-[40%]"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-[2rem] bg-gradient-to-br from-accent/20 to-primary/20 aspect-[4/5] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              <Building2
                size={120}
                className="text-primary/30"
                strokeWidth={1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
