import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";

export interface HeroSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whatsAppHref: string;
}

export function HeroSection({ content, whatsAppHref }: HeroSectionProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="terracotta" className="mb-4">
              {content.eyebrow}
            </Badge>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-charcoal leading-[1.15] mb-6">
              {content.title}
            </h1>

            <p className="text-base sm:text-lg text-surface-driftwood leading-relaxed mb-8 max-w-2xl">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                {content.primaryCta}
              </Button>
              <Button href="#la-casa" variant="secondary" size="lg">
                {content.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Hero Image / Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm aura behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/15 via-terracotta/10 to-coastal-sky/15 rounded-3xl filter blur-xl -z-10" />

              {/* Main Image Frame with rounded corners */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-warm-lg border border-surface-border bg-surface-white">
                <Image
                  src="https://picsum.photos/id/164/1000/800"
                  alt="Casa Pitaya en Puerto Vallarta — Residencia vacacional con alberca para grupos"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-surface-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-surface-border/80 shadow-warm-sm flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-surface-charcoal tracking-wide">
                    Casa completa · 16 huéspedes · Alberca
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
