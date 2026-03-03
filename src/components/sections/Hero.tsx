"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Right side image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Image
          src="/images/imagem_banner.png"
          alt="Criança em ambiente educacional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20 lg:from-primary lg:via-primary/60 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="h-px bg-accent mb-10"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white mb-8"
          >
            Desde 1998 transformando vidas por meio da Educação, da Saúde e do
            Esporte.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-6 max-w-xl"
          >
            Fortalecendo a Educação. Cuidando da Saúde. Incentivando o Esporte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="text-white/40 text-base leading-relaxed mb-12 max-w-lg"
          >
            Instituição privada sem fins lucrativos dedicada à promoção de ações
            de interesse público, com atuação pautada na responsabilidade,
            transparência e compromisso com o desenvolvimento humano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            <Button variant="secondary" href="/areas-de-atuacao" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Conheça nossa atuação
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — vertical line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/20"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
