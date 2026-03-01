"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { navLinks, offices } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const policyLinks = [
  { href: "/compliance", label: "Compliance" },
  { href: "/transparencia", label: "Transparencia" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Description */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Instituto Rede de Apoio"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <h3 className="text-2xl font-bold">Instituto Rede</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Ha mais de 20 anos transformando desafios em solucoes para a gestao
              publica e o desenvolvimento social no Brasil.
            </p>
          </motion.div>

          {/* Column 2: Offices */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Escritorios</h4>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city}>
                  <p className="font-medium text-white/90">{office.city}</p>
                  <p className="text-white/60 text-sm">{office.address}</p>
                  <p className="text-white/60 text-sm">CEP: {office.cep}</p>
                  <p className="text-white/60 text-sm">{office.phone}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Links Rapidos</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Policies + Social */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Politicas</h4>
            <ul className="space-y-2 mb-6">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-accent hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          variants={fadeInUp}
        >
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Instituto Rede. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
