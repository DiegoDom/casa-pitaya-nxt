import React from "react";

export interface SkipLinkProps {
  targetId?: string;
  children?: React.ReactNode;
}

export function SkipLink({
  targetId = "main-content",
  children = "Saltar al contenido principal",
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-warm-md focus:outline-none focus:ring-2 focus:ring-primary-dark font-medium text-sm transition-all"
    >
      {children}
    </a>
  );
}
