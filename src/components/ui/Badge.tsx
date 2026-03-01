interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block uppercase text-xs font-medium tracking-widest bg-accent/10 text-accent px-3 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
