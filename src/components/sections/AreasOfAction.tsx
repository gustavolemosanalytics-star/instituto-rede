"use client";

import { motion } from "framer-motion";
import { scaleIn, fadeIn } from "@/lib/animations";
import { areasOfAction } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AreasOfAction() {
  const featuredAreas = areasOfAction.slice(0, 2);

  return (
    <section className="py-20 md:py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Áreas de Atuação"
          subtitle="Atuamos em setores estratégicos para o desenvolvimento do país"
          animated
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="h-full p-8">
                  <div className="flex flex-col gap-4">
                    <Icon size={40} className="text-accent" />
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button variant="secondary" href="/areas-de-atuacao">
            Veja Todas as Áreas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
