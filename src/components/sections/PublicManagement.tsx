"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";
import { publicManagementServices } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function PublicManagement() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-primary text-white overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(65,182,230,0.15)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Assessoria à Gestão Pública
          </h2>
          <p className="text-lg text-white/70">
            Oferecemos suporte técnico especializado para transformar a
            administração pública, com soluções sob medida que promovem
            eficiência, transparência e resultados concretos para a população.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
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
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
              >
                <Icon size={32} className="text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button variant="primary" href="/contato">
            Entre em contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
