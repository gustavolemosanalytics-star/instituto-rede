"use client";

import FadeInUp from "@/components/animations/FadeInUp";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  animated?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  centered = false,
  animated: _animated = false,
}: SectionHeadingProps) {
  const alignment = centered ? "text-center mx-auto" : "";

  return (
    <FadeInUp className={`max-w-3xl mb-14 ${alignment} ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeInUp>
  );
}
