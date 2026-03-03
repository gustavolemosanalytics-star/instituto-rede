interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 uppercase text-xs font-medium tracking-[0.2em] text-accent ${className}`}
    >
      <span className="w-8 h-px bg-accent" />
      {children}
    </span>
  );
}
