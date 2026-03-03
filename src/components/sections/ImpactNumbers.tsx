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

export default function ImpactNumbers() {
  return (
    <section className="py-20 md:py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impactNumbers.map((item) => (
            <div key={item.label} className="text-center">
              <AnimeCounter
                value={item.value}
                suffix={item.suffix}
                className="text-4xl md:text-5xl font-bold text-primary"
              />
              <p className="mt-2 text-neutral-600 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
