"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/instituto.rede?igsh=MWh0OW80N2V5dDVyYw==", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* Column 1: Logo + Description */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Instituto Rede de Apoio"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <h3 className="font-heading text-2xl">Instituto Rede</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Desde 1998 promovendo educação, saúde e esporte com
              responsabilidade social.
            </p>
            <p className="text-white/40 text-xs tracking-wide">
              INSTITUTO REDE DE APOIO
              <br />
              CNPJ: 02.932.616/0001-26
            </p>
          </motion.div>

          {/* Column 2: Addresses */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-medium tracking-wide uppercase text-white/50 mb-5">Endereços</h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    Avenida Fernandes Da Cunha, nº 552, Mares
                  </p>
                  <p className="text-white/50 text-sm">
                    Salvador, Bahia — CEP 40.445-201
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Contact + Links + Social */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-medium tracking-wide uppercase text-white/50 mb-5">Contato</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:rededeapoioinstituto@gmail.com"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  rededeapoioinstituto@gmail.com
                </a>
              </div>
            </div>

            <h4 className="text-sm font-medium tracking-wide uppercase text-white/50 mb-4">Links</h4>
            <ul className="space-y-2 mb-8">
              <li>
                <Link
                  href="/transparencia"
                  className="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                >
                  Portal da Transparência
                </Link>
              </li>
              <li>
                <Link
                  href="/ouvidoria"
                  className="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                >
                  Ouvidoria e Canal de Integridade
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/50 hover:text-accent transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm text-center">
            &copy; {new Date().getFullYear()} Instituto Rede de Apoio. Todos os
            direitos reservados.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
