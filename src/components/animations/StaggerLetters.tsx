"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

interface StaggerLettersProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  delay?: number;
}

export default function StaggerLetters({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
}: StaggerLettersProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const chars = el.querySelectorAll(".stagger-char");
          animate(chars, {
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.8, 1],
            duration: 800,
            ease: "outElastic(1, 0.6)",
            delay: stagger(40, { start: delay }),
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, delay]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as never} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="stagger-char inline-block opacity-0"
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
