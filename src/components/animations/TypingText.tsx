"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({
  text,
  className = "",
  speed = 30,
  delay = 0,
}: TypingTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const obj = { progress: 0 };
          el.textContent = "";

          animate(obj, {
            progress: text.length,
            duration: text.length * speed,
            ease: "linear",
            delay,
            onUpdate: () => {
              const count = Math.round(obj.progress);
              el.textContent = text.slice(0, count);
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed, delay, hasAnimated]);

  return (
    <span ref={containerRef} className={className}>
      {text}
    </span>
  );
}
