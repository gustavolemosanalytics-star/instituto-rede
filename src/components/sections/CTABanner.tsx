"use client";

import FadeInUp from "@/components/animations/FadeInUp";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-28 md:py-36 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl leading-tight text-primary mb-6">
            Pronto para transformar desafios em{" "}
            <span className="text-accent italic">resultados</span>?
          </h2>
          <p className="text-lg text-neutral-600 mb-12">
            Entre em contato e descubra como podemos ajudar.
          </p>
          <Button variant="accent" href="/contato">
            Fale Conosco
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
