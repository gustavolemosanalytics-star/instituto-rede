"use client";

import FadeInUp from "@/components/animations/FadeInUp";
import StaggerLetters from "@/components/animations/StaggerLetters";
import AnimatedLine from "@/components/animations/AnimatedLine";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  animated?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  animated = false,
}: SectionHeadingProps) {
  if (animated) {
    return (
      <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
        <StaggerLetters
          text={title}
          as="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        />
        <div className="flex justify-center mt-4">
          <AnimatedLine width="80px" color="#3FAE49" strokeWidth={3} duration={800} />
        </div>
        {subtitle && (
          <p className="mt-4 text-lg text-neutral-600">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

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
