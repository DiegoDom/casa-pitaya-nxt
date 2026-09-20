import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 min-h-[36px]",
    md: "text-sm px-5 py-2.5 min-h-[44px]",
    lg: "text-base px-6 py-3 min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white shadow-warm-sm hover:bg-primary-dark hover:shadow-warm-md active:scale-[0.98]",
    secondary:
      "bg-surface-white text-primary-dark border border-terracotta/40 hover:border-terracotta hover:bg-terracotta-light/30 shadow-warm-sm active:scale-[0.98]",
    outline:
      "border border-surface-border text-surface-charcoal hover:bg-surface-white hover:border-primary/50 active:scale-[0.98]",
    ghost:
      "text-surface-charcoal hover:bg-surface-white/60 hover:text-primary active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
