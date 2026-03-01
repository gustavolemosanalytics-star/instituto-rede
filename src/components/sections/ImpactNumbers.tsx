"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { impactNumbers } from "@/lib/constants";
import StaggerContainer from "@/components/animations/StaggerContainer";
import CounterAnimation from "@/components/animations/CounterAnimation";

export default function ImpactNumbers() {
  return (
    <section className="py-20 md:py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impactNumbers.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="text-center"
            >
              <CounterAnimation
                value={item.value}
                suffix={item.suffix}
                className="text-4xl md:text-5xl font-bold text-primary"
              />
              <p className="mt-2 text-neutral-600 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
