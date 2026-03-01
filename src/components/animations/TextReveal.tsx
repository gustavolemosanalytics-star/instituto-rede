"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
