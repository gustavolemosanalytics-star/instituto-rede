"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 h-[3px] bg-accent z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
