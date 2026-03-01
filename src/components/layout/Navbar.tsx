"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { navLinks, contactLinks } from "@/lib/constants";
import { navbarVariants } from "@/lib/animations";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Instituto Rede de Apoio"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-primary">
                Instituto Rede
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}

              {/* Contato Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsContactOpen(true)}
                onMouseLeave={() => setIsContactOpen(false)}
              >
                <button
                  className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary group"
                  aria-expanded={isContactOpen}
                  aria-haspopup="true"
                >
                  Contato
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isContactOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 transition-all duration-200 ${
                    isContactOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {contactLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right side: CTA + Mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA Button (desktop only) */}
              <Link
                href="/contato"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Fale Conosco
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6 text-neutral-900" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
