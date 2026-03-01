"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-sm transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
