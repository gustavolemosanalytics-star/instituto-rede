"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ title, children, className = "" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-neutral-200 rounded-lg overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors hover:bg-neutral-50"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-neutral-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
