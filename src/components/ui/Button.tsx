import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary-light",
  secondary: "border border-primary text-primary hover:bg-primary/5",
  accent: "bg-accent text-white hover:bg-accent-hover",
  ghost: "text-primary hover:text-accent",
};

export default function Button({ children, variant = "primary", href, onClick, type = "button", className = "", disabled = false }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={styles} disabled={disabled}>{children}</button>;
}
