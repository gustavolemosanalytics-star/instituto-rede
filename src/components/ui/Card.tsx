"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ borderColor: "var(--accent)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white border border-neutral-200 rounded-xl p-6 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
