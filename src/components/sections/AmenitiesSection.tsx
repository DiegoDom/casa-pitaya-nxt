import React from "react";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { AmenityCategory, Locale } from "@/src/types/property";

export interface AmenitiesSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    limitationsTitle: string;
    limitationsDesc: string;
    noAc: string;
    noWasher: string;
    stairs: string;
  };
  categories: AmenityCategory[];
  locale: Locale;
}

export function AmenitiesSection({
  content,
  categories,
  locale,
}: AmenitiesSectionProps) {
  return (
    <section id="amenidades" className="py-20 md:py-28 bg-surface-arena/50">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="primary" className="mb-4">
            {content.eyebrow}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-charcoal leading-tight mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-surface-driftwood leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {categories.map((category) => (
            <Card
              key={category.id}
              variant="surface"
              shadow="sm"
              className="p-6 sm:p-7 flex flex-col justify-between hover:shadow-warm-md transition-shadow"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-surface-charcoal mb-4 pb-3 border-b border-surface-border">
                  {category.title[locale]}
                </h3>

                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item.id} className="flex items-start gap-2.5 text-sm text-surface-charcoal">
                      <svg
                        className="w-4 h-4 mt-0.5 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item.label[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Honest Limitations Notice Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-terracotta-light/50 border border-terracotta/30 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-surface-charcoal">
              {content.limitationsTitle}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-surface-driftwood mb-4">
            {content.limitationsDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-surface-charcoal">
            <div className="p-3 rounded-xl bg-surface-white/80 border border-terracotta/20 flex items-start gap-2.5">
              <span className="text-terracotta font-bold">•</span>
              <span>{content.noAc}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-white/80 border border-terracotta/20 flex items-start gap-2.5">
              <span className="text-terracotta font-bold">•</span>
              <span>{content.noWasher}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-white/80 border border-terracotta/20 flex items-start gap-2.5">
              <span className="text-terracotta font-bold">•</span>
              <span>{content.stairs}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
