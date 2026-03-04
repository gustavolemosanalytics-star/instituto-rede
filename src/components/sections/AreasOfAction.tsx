"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { areasOfAction } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AreasOfAction() {
  return (
    <section className="py-28 md:py-36 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Áreas de Atuação"
          subtitle="Atuamos em setores estratégicos para o desenvolvimento do país"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areasOfAction.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                className="group bg-white rounded-xl border border-neutral-200 p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-primary">
                    {area.title}
                  </h3>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button variant="secondary" href="/areas-de-atuacao">
            Veja todas as áreas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
