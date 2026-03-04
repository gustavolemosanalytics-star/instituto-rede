"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { impactNumbers } from "@/lib/constants";

function AnimeCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          observer.disconnect();

          const obj = { val: 0 };
          animate(obj, {
            val: value,
            duration: 2000,
            ease: "inOutExpo",
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

const impactColors = ["#00AEEF", "#ED1C24", "#00A651", "#FFC220"];

export default function ImpactNumbers() {
  return (
    <section className="py-28 md:py-36 px-6 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {impactNumbers.map((item, i) => (
            <div
              key={item.label}
              className={`text-center ${
                i < impactNumbers.length - 1 ? "md:border-r md:border-neutral-200" : ""
              }`}
            >
              <AnimeCounter
                value={item.value}
                suffix={item.suffix}
                className="text-5xl md:text-7xl font-light text-primary tabular-nums"
              />
              <div
                className="mx-auto mt-4 mb-2 w-8 h-0.5 rounded-full"
                style={{ backgroundColor: impactColors[i] }}
              />
              <p className="text-neutral-600 text-xs md:text-sm tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
