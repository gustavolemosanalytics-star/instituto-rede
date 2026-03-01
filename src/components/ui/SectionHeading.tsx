"use client";

import FadeInUp from "@/components/animations/FadeInUp";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <FadeInUp className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600">
          {subtitle}
        </p>
      )}
    </FadeInUp>
  );
}
