"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FloatingElements from "@/components/animations/FloatingElements";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white pt-40 pb-20 overflow-hidden">
      {/* Decorative floating shapes */}
      <FloatingElements count={5} />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {children ? (
            children
          ) : (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
          )}

          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mt-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">{breadcrumb}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
