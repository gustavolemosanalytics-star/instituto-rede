"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import TextReveal from "@/components/animations/TextReveal";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-light noise-bg">
      {/* Floating decorative circles with brand colors */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-blue/15 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-brand-green/10 blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-48 h-48 rounded-full bg-brand-red/8 blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          <TextReveal
            text="Há 20 anos transformando desafios em soluções"
            className="text-white"
          />
        </h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Apoiamos a gestão pública e promovemos o desenvolvimento social com
          excelência, inovação e compromisso com resultados.
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" href="/atuacao">
            Conheça nosso trabalho
          </Button>
          <Button variant="secondary" href="/contato" className="border-white text-white hover:bg-white hover:text-primary">
            Entre em contato
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
