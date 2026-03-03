"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";
import TypingText from "@/components/animations/TypingText";
import FloatingElements from "@/components/animations/FloatingElements";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/imagem_banner.png"
        alt="Criança em ambiente educacional"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Floating decorative elements */}
      <FloatingElements count={8} />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6"
        >
          Desde 1998 transformando vidas por meio da Educação, da Saúde e do
          Esporte.
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl font-semibold text-white mb-3">
            <TypingText
              text="Fortalecendo a Educação. Cuidando da Saúde. Incentivando o Esporte."
              speed={35}
              delay={800}
            />
          </p>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3 }}
            className="text-base md:text-lg text-white/80 leading-relaxed"
          >
            Instituição privada sem fins lucrativos dedicada à promoção de ações
            de interesse público, com atuação pautada na responsabilidade,
            transparência e compromisso com o desenvolvimento humano.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.5 }}
        >
          <Button variant="primary" href="/areas-de-atuacao">
            Conheça nossa atuação
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
