import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "arena" | "outline";
  shadow?: "none" | "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = "surface",
  shadow = "sm",
  className = "",
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    surface: "bg-surface-white border border-surface-border/80",
    arena: "bg-surface-arena/90 border border-surface-border",
    outline: "bg-transparent border border-surface-border",
  };

  const shadowStyles = {
    none: "",
    sm: "shadow-warm-sm",
    md: "shadow-warm-md",
    lg: "shadow-warm-lg",
  };

  return (
    <div
      className={`rounded-2xl p-6 transition-shadow duration-200 ${variantStyles[variant]} ${shadowStyles[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
