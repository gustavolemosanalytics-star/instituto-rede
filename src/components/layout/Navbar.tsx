"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { navbarVariants } from "@/lib/animations";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3">
        <motion.header
          className={`mx-auto max-w-7xl rounded-2xl bg-white/90 backdrop-blur-lg transition-shadow duration-300 ${
            isScrolled ? "shadow-lg" : "shadow-md"
          }`}
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="px-4">
            <div className="flex h-14 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo_branca.png"
                  alt="Instituto Rede de Apoio"
                  width={120}
                  height={36}
                  className="h-11 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-2.5 py-2 text-xs font-medium text-neutral-600 transition-colors hover:text-primary group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                ))}
              </nav>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden ml-auto p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5 text-neutral-900" />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
