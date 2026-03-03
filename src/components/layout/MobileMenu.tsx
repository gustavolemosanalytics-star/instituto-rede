"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import {
  mobileMenuVariants,
  menuStaggerContainer,
  menuItemVariants,
} from "@/lib/animations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-[300px] max-w-[80vw] bg-white z-50 shadow-2xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6 text-neutral-900" />
              </button>
            </div>

            {/* Navigation links */}
            <motion.nav
              className="flex flex-col px-6 gap-1"
              variants={menuStaggerContainer}
              initial="closed"
              animate="open"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 px-4 text-lg font-medium text-neutral-900 hover:text-accent hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            </motion.nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
