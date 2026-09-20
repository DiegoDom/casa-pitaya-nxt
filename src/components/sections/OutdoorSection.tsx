import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";

export interface OutdoorSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    poolNoticeTitle: string;
    poolNoticeDesc: string;
    cta: string;
  };
  whatsAppHref: string;
}

export function OutdoorSection({ content, whatsAppHref }: OutdoorSectionProps) {
  const outdoorFeatures = [
    {
      title: "Alberca & Jacuzzi integrado",
      titleEn: "Pool & Integrated Jacuzzi",
      desc: "Espacio privado para nadar, refrescarse y convivir con el grupo.",
      descEn: "Private space for swimming, cooling off, and relaxing together.",
      icon: (
        <svg className="w-5 h-5 stroke-coastal-pacific" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M2 14c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M2 19c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M12 4v6M8 7h8" />
        </svg>
      ),
    },
    {
      title: "Asador & Comedor exterior",
      titleEn: "BBQ Grill & Outdoor Dining",
      desc: "Parrilla lista para carnes asadas y comidas compartidas al aire libre.",
      descEn: "Grill ready for barbecues and shared meals under the open sky.",
      icon: (
        <svg className="w-5 h-5 stroke-terracotta" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: "Hamaca & Camastros",
      titleEn: "Hammock & Sun Loungers",
      desc: "Rincones ideales para lectura, siesta o tomar el sol de Vallarta.",
      descEn: "Prime spots for reading, an afternoon nap, or soaking up the sun.",
      icon: (
        <svg className="w-5 h-5 stroke-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M3 12c4 4 14 4 18 0" />
          <path d="M3 8v8M21 8v8" />
        </svg>
      ),
    },
    {
      title: "Vegetación & Patios",
      titleEn: "Tropical Greenery & Patio",
      desc: "Ambiente tropical costero con plantas locales y sombra natural.",
      descEn: "Coastal atmosphere framed by tropical greenery and natural shade.",
      icon: (
        <svg className="w-5 h-5 stroke-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M12 22V12" />
          <path d="M12 12C12 7 7 4 2 4c0 6 4 10 10 8Z" />
          <path d="M12 12c0-5 5-8 10-8 0 6-4 10-10 8Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="alberca" className="py-20 md:py-28 bg-surface-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Main Visual Presentation */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-md border border-surface-border bg-surface-arena">
              <Image
                src="https://picsum.photos/id/238/1200/825"
                alt="Alberca privada y patio exterior en Casa Pitaya"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-sm sm:text-base font-semibold drop-shadow-md">
                  Alberca privada con jacuzzi integrado
                </span>
                <Badge variant="coastal" className="bg-surface-white/90 text-coastal-pacific border-none">
                  Uso exclusivo
                </Badge>
              </div>
            </div>
          </div>

          {/* Text & Feature Highlights */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Badge variant="coastal" className="mb-4">
              {content.eyebrow}
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-surface-charcoal leading-tight mb-4">
              {content.title}
            </h2>

            <p className="text-base text-surface-driftwood leading-relaxed mb-8">
              {content.subtitle}
            </p>

            {/* Feature mini list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {outdoorFeatures.map((item, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-surface-arena border border-surface-border/60">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {item.icon}
                    <span className="text-sm font-bold text-surface-charcoal">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-surface-driftwood leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {content.cta}
            </Button>
          </div>
        </div>

        {/* Transparent Pool Notice */}
        <div className="p-6 sm:p-7 rounded-2xl bg-coastal-sky/10 border border-coastal-sky/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-coastal-sky/20 flex-shrink-0 flex items-center justify-center text-coastal-pacific">
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-surface-charcoal mb-1">
              {content.poolNoticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-surface-driftwood leading-relaxed">
              {content.poolNoticeDesc}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
