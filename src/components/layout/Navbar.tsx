"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { Locale } from "@/src/types/property";

export interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  navLabels: {
    about: string;
    spaces: string;
    outdoor: string;
    amenities: string;
    location: string;
    rules: string;
    contact: string;
    cta: string;
    languageSwitch: string;
  };
  whatsAppHref: string;
}

export function Navbar({
  locale,
  onLocaleChange,
  navLabels,
  whatsAppHref,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#la-casa", label: navLabels.about },
    { href: "#espacios", label: navLabels.spaces },
    { href: "#alberca", label: navLabels.outdoor },
    { href: "#amenidades", label: navLabels.amenities },
    { href: "#ubicacion", label: navLabels.location },
    { href: "#reglas", label: navLabels.rules },
  ];

  const toggleLocale = () => {
    onLocaleChange(locale === "es" ? "en" : "es");
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-surface-arena/95 backdrop-blur-md shadow-warm-sm border-b border-surface-border"
          : "bg-surface-arena/80 backdrop-blur-sm border-b border-surface-border/40"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg py-1"
          aria-label="Casa Pitaya — Inicio"
        >
          <Image
            src="/images/client/logo-primary-horizontal.svg"
            alt="Casa Pitaya"
            width={185}
            height={38}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-surface-charcoal"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            className="px-2.5 py-1.5 rounded-md text-xs font-semibold text-terracotta border border-terracotta/30 hover:bg-terracotta-light/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Cambiar idioma a ${locale === "es" ? "Inglés" : "Español"}`}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          {/* Primary CTA */}
          <Button
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="primary"
          >
            {navLabels.cta}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="px-2 py-1 rounded text-xs font-semibold text-terracotta border border-terracotta/30 mr-1"
            aria-label="Cambiar idioma"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-surface-charcoal hover:bg-surface-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            <svg
              className="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-surface-border bg-surface-arena px-4 pt-2 pb-6 shadow-warm-md"
        >
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-md text-base font-medium text-surface-charcoal hover:bg-surface-white hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-surface-border/60 flex flex-col gap-2">
              <Button
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
                onClick={closeMenu}
              >
                {navLabels.cta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
