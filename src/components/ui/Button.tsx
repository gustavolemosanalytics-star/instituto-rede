import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

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
  primary: "bg-accent text-white hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg",
  secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  ghost: "text-accent hover:underline underline-offset-4",
};

export default function Button({ children, variant = "primary", href, onClick, type = "button", className = "", disabled = false }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={styles} disabled={disabled}>{children}</button>;
}
