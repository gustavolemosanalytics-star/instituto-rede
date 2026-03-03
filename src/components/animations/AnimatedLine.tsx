"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface AnimatedLineProps {
  className?: string;
  color?: string;
  width?: string;
  strokeWidth?: number;
  duration?: number;
}

export default function AnimatedLine({
  className = "",
  color = "currentColor",
  width = "120px",
  strokeWidth = 2,
  duration = 1000,
}: AnimatedLineProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el || hasAnimated) return;

    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          animate(el, {
            strokeDashoffset: [length, 0],
            duration,
            ease: "inOutQuad",
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, duration]);

  return (
    <svg
      className={className}
      style={{ width, height: `${strokeWidth + 4}px` }}
      viewBox={`0 0 200 ${strokeWidth + 4}`}
      preserveAspectRatio="none"
    >
      <line
        ref={lineRef}
        x1="0"
        y1={strokeWidth / 2 + 2}
        x2="200"
        y2={strokeWidth / 2 + 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
