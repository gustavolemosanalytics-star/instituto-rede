"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({
  count = 6,
  className = "",
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const shapes = el.querySelectorAll(".floating-shape");

    shapes.forEach((shape, i) => {
      const randomDelay = i * 400 + Math.random() * 600;
      const randomDuration = 4000 + Math.random() * 3000;

      animate(shape, {
        translateY: [-20, 20],
        translateX: [-10, 10],
        rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
        opacity: [0.15, 0.35],
        duration: randomDuration,
        delay: randomDelay,
        loop: true,
        alternate: true,
        ease: "inOutSine",
      });
    });
  }, []);

  const shapes = Array.from({ length: count }, (_, i) => {
    const size = 30 + Math.random() * 60;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const isCircle = i % 3 === 0;
    const isTriangle = i % 3 === 1;

    return (
      <div
        key={i}
        className="floating-shape absolute opacity-0"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
        }}
      >
        {isCircle ? (
          <div className="w-full h-full rounded-full border border-white/20" />
        ) : isTriangle ? (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <polygon
              points="20,5 35,35 5,35"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          </svg>
        ) : (
          <div className="w-full h-full rounded-lg border border-white/15 rotate-45" />
        )}
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {shapes}
    </div>
  );
}
