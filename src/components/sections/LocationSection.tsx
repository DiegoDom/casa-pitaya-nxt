import React from "react";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { TravelTime, Locale } from "@/src/types/property";

export interface LocationSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    neighborhoodTitle: string;
    neighborhoodDesc: string;
    travelTimesTitle: string;
    travelDisclaimer: string;
  };
  travelTimes: TravelTime[];
  address: string;
  locale: Locale;
}

export function LocationSection({
  content,
  travelTimes,
  address,
  locale,
}: LocationSectionProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-surface-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="terracotta" className="mb-4">
            {content.eyebrow}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-charcoal leading-tight mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-surface-driftwood leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Neighborhood Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="arena" shadow="sm" className="p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta-light flex items-center justify-center text-terracotta-dark">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12Z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-surface-charcoal">
                    {content.neighborhoodTitle}
                  </h3>
                  <span className="text-xs text-terracotta font-semibold">
                    Las Gaviotas, Puerto Vallarta
                  </span>
                </div>
              </div>

              <p className="text-sm text-surface-driftwood leading-relaxed mb-6">
                {content.neighborhoodDesc}
              </p>

              <div className="p-4 rounded-xl bg-surface-white border border-surface-border text-xs text-surface-charcoal space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-coastal-pacific font-bold text-sm leading-none">•</span>
                  <span>
                    {locale === "es"
                      ? "Transporte público a 2 cuadras (Centro, Olas Altas, Aeropuerto)"
                      : "Public transit 2 blocks away (Downtown, Olas Altas, Airport)"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-coastal-pacific font-bold text-sm leading-none">•</span>
                  <span>
                    {locale === "es"
                      ? "Tiendas, cafés, farmacias y bancos a corta distancia a pie"
                      : "Groceries, cafes, pharmacies, and banks within short walking distance"}
                  </span>
                </div>
              </div>

              <Button
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full"
              >
                {locale === "es" ? "Abrir en Google Maps" : "Open in Google Maps"}
              </Button>
            </Card>
          </div>

          {/* Travel Times Grid */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-surface-charcoal mb-2">
              {content.travelTimesTitle}
            </h3>
            <p className="text-xs text-surface-driftwood mb-6">
              {content.travelDisclaimer}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {travelTimes.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-surface-arena/70 border border-surface-border flex items-center justify-between gap-4 hover:bg-surface-white hover:shadow-warm-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-white border border-surface-border/80 flex items-center justify-center text-primary-dark">
                      <svg
                        className="w-4 h-4 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-surface-charcoal">
                      {item.destination[locale]}
                    </span>
                  </div>

                  <span className="text-base sm:text-lg font-bold text-primary-dark whitespace-nowrap">
                    ~{item.durationMinutes} min
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
