"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInUp({ children, className }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
