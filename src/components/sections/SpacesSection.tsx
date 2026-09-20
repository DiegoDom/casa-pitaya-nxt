import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { RoomDetail, BathroomSummary, Locale } from "@/src/types/property";

export interface SpacesSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bungalowTitle: string;
    bathroomsTitle: string;
    bathroomsDesc: string;
  };
  rooms: RoomDetail[];
  bathrooms: BathroomSummary;
  bungalowPolicy: string;
  locale: Locale;
}

export function SpacesSection({
  content,
  rooms,
  bathrooms,
  bungalowPolicy,
  locale,
}: SpacesSectionProps) {
  // Mock image representations for room cards
  const roomImages = [
    "https://picsum.photos/id/103/600/400",
    "https://picsum.photos/id/201/600/400",
    "https://picsum.photos/id/249/600/400",
  ];

  return (
    <section id="espacios" className="py-20 md:py-28">
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

        {/* Bedroom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, idx) => (
            <Card
              key={room.id}
              variant="surface"
              shadow="sm"
              className="p-0 overflow-hidden flex flex-col hover:shadow-warm-md transition-shadow"
            >
              <div className="relative aspect-[16/10] w-full bg-surface-arena">
                <Image
                  src={roomImages[idx] || "https://picsum.photos/id/201/600/400"}
                  alt={room.name[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl font-bold text-surface-charcoal">
                    {room.name[locale]}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-arena text-primary-dark">
                    {room.id === "room-3-6" ? "4 cuartos" : "Recámara"}
                  </span>
                </div>

                <p className="text-sm font-semibold text-terracotta mb-2">
                  {room.beds[locale]}
                </p>

                {room.note && (
                  <p className="text-xs text-surface-driftwood leading-relaxed mt-auto pt-2 border-t border-surface-border/50">
                    {room.note[locale]}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bathrooms & Bungalow Policy Sub-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Bathrooms Detail */}
          <Card
            variant="surface"
            shadow="sm"
            className="md:col-span-6 p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-coastal-sky/15 flex items-center justify-center text-coastal-pacific">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12h16a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2Z" />
                    <path d="M6 12V5a2 2 0 0 1 2-2h1" />
                    <path d="M4 21l1-2" />
                    <path d="M20 21l-1-2" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-surface-charcoal">
                  {content.bathroomsTitle}
                </h3>
              </div>

              <p className="text-sm text-surface-driftwood leading-relaxed mb-6">
                {content.bathroomsDesc}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-surface-border">
              <div className="text-center p-2 rounded-lg bg-surface-arena">
                <span className="block text-lg font-bold text-surface-charcoal">
                  {bathrooms.mainWithTub}
                </span>
                <span className="text-[11px] text-surface-driftwood">
                  {locale === "es" ? "Con tina" : "With tub"}
                </span>
              </div>
              <div className="text-center p-2 rounded-lg bg-surface-arena">
                <span className="block text-lg font-bold text-surface-charcoal">
                  {bathrooms.standardWithShower}
                </span>
                <span className="text-[11px] text-surface-driftwood">
                  {locale === "es" ? "Con regadera" : "With shower"}
                </span>
              </div>
              <div className="text-center p-2 rounded-lg bg-surface-arena">
                <span className="block text-lg font-bold text-coastal-pacific">
                  +1
                </span>
                <span className="text-[11px] text-surface-driftwood">
                  {locale === "es" ? "Regadera exterior" : "Outdoor rinse"}
                </span>
              </div>
            </div>
          </Card>

          {/* Bungalow Access Policy Notice */}
          <Card
            variant="arena"
            shadow="sm"
            className="md:col-span-6 p-7 sm:p-8 flex flex-col justify-between border-terracotta/30"
          >
            <div>
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-surface-charcoal">
                  {content.bungalowTitle}
                </h3>
              </div>

              <p className="text-sm text-surface-driftwood leading-relaxed">
                {bungalowPolicy}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-terracotta/20 flex items-center gap-2 text-xs font-semibold text-terracotta-dark">
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>
                {locale === "es"
                  ? "Capacidad total de la casa: hasta 16 huéspedes"
                  : "Total property capacity: up to 16 guests"}
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
