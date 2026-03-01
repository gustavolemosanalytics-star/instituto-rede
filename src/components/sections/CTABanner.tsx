"use client";

import FadeInUp from "@/components/animations/FadeInUp";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-r from-accent to-accent-hover">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Pronto para transformar desafios em resultados?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Entre em contato e descubra como podemos ajudar.
          </p>
          <Button
            variant="secondary"
            href="/contato"
            className="bg-white text-accent border-white hover:bg-white/90 hover:text-accent"
          >
            Fale Conosco
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
