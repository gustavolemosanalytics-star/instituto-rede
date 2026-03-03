"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { areasOfAction } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AreasOfAction() {
  const featuredAreas = areasOfAction.slice(0, 4);

  return (
    <section className="py-28 md:py-36 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Áreas de Atuação"
          subtitle="Atuamos em setores estratégicos para o desenvolvimento do país"
        />

        <div className="mt-16 space-y-0">
          {featuredAreas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-neutral-200 last:border-b-0 ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div className={`md:col-span-5 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className="w-1 h-12 bg-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-3xl mb-3">{area.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`md:col-span-7 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="flex flex-wrap gap-3">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 text-sm text-neutral-600 border border-neutral-200 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          variants={fadeIn}
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
