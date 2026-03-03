"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative bg-primary text-white pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">{breadcrumb}</span>
          </nav>

          {children ? (
            children
          ) : (
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight">
              {title}
            </h1>
          )}
        </motion.div>
      </div>
    </section>
  );
}
