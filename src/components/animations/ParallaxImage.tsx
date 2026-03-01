"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, position: "relative", width: "100%", height: "100%" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}
