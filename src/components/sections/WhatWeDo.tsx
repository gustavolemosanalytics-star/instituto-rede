"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { differentials } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const diffColors = ["#00AEEF", "#ED1C24", "#00A651", "#FFC220", "#00AEEF", "#00A651"];

export default function WhatWeDo() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="O Que Fazemos"
          subtitle="Conheça os diferenciais que nos tornam referência em apoio à gestão pública"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-neutral-200 last:border-b-0"
            >
              <div className="md:col-span-1">
                <span
                  className="font-heading text-3xl"
                  style={{ color: diffColors[i % diffColors.length] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-heading text-2xl">{item.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
