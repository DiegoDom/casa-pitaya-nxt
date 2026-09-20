import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "terracotta" | "coastal" | "neutral";
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "primary",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-soft text-primary-dark border border-primary/20",
    terracotta: "bg-terracotta-light text-terracotta-dark border border-terracotta/25",
    coastal: "bg-coastal-sky/15 text-coastal-pacific border border-coastal-sky/30",
    neutral: "bg-surface-white text-surface-driftwood border border-surface-border",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
