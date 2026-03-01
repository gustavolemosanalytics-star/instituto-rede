"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, FileText, Download } from "lucide-react";
import { transparencyDocuments } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const categories = ["Todos", "Relatório", "Financeiro", "Institucional", "Compliance"];

export default function TransparenciaContent() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredDocuments =
    activeCategory === "Todos"
      ? transparencyDocuments
      : transparencyDocuments.filter((doc) => doc.category === activeCategory);

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
              Transparência
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Transparência</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Documentos e Relatórios"
            subtitle="Compromisso com a transparência e prestação de contas à sociedade."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Documents Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((doc) => (
              <motion.div key={doc.title} variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <Badge className="mb-2">{doc.category}</Badge>
                      <h3 className="text-lg font-bold text-primary">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 mb-1">Ano: {doc.year}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-1">
                    {doc.description}
                  </p>
                  <Button variant="secondary" href={doc.fileUrl} className="w-full">
                    <Download className="w-4 h-4" />
                    Baixar
                  </Button>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          {filteredDocuments.length === 0 && (
            <p className="text-center text-neutral-500 mt-8">
              Nenhum documento encontrado para esta categoria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
