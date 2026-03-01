"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from "framer-motion";

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function CounterAnimation({
  value,
  suffix = "",
  className,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
