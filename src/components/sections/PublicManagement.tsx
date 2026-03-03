"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";
import { publicManagementServices } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function PublicManagement() {
  return (
    <section className="relative py-28 md:py-36 px-6 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,149,108,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Assessoria à Gestão Pública
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Oferecemos suporte técnico especializado para transformar a
            administração pública, com soluções sob medida que promovem
            eficiência, transparência e resultados concretos para a população.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {publicManagementServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="border-t border-white/15 pt-8"
              >
                <div className="flex items-start gap-4">
                  <Icon size={24} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button variant="secondary" href="/contato" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            Entre em contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
