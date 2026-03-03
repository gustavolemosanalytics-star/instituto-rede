"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { differentials } from "@/lib/constants";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="O Que Fazemos"
          subtitle="Conheça os diferenciais que nos tornam referência em apoio à gestão pública"
          animated
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="flex flex-col gap-4">
                    <Icon size={32} className="text-accent" />
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
