"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import FadeInUp from "@/components/animations/FadeInUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import WaveDivider from "@/components/shared/WaveDivider";

export default function ProjetosContent() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Projetos
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Projetos</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <WaveDivider className="text-white -mt-1" />

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Projetos"
            subtitle="Conheça os projetos que estão transformando a gestão pública e impactando comunidades em todo o Brasil."
          />

          {/* Filter Tabs */}
          <FadeInUp className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-white shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </FadeInUp>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm h-full flex flex-col"
                  >
                    {/* Placeholder Image */}
                    <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <Badge className="mb-3 self-start">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <FadeInUp className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                Nenhum projeto encontrado nessa categoria.
              </p>
            </FadeInUp>
          )}
        </div>
      </section>
    </>
  );
}
