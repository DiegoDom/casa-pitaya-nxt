import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";

export interface AboutSectionProps {
  content: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="la-casa" className="py-20 md:py-28 bg-surface-white/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative grid grid-cols-12 gap-4">
              {/* Primary Image */}
              <div className="col-span-8 relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-md border border-surface-border bg-surface-white">
                <Image
                  src="https://picsum.photos/id/10/800/1000"
                  alt="Casa Pitaya — Espacios amplios y luminosos para compartir"
                  fill
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="col-span-4 self-end -mb-6 sm:-mb-8 relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-warm-lg border-2 border-surface-white bg-surface-arena">
                <Image
                  src="https://picsum.photos/id/42/600/800"
                  alt="Casa Pitaya — Detalles y rincones tranquilos"
                  fill
                  sizes="(max-width: 768px) 30vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <Badge variant="primary" className="mb-4">
              {content.eyebrow}
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-charcoal leading-tight mb-6">
              {content.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-surface-driftwood leading-relaxed">
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
              <p>{content.paragraph3}</p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-surface-border/80 w-full">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-surface-driftwood">
                  Casa entera privada para tu grupo
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-terracotta">
                  Las Gaviotas
                </span>
                <span className="text-xs sm:text-sm text-surface-driftwood">
                  Zona residencial tranquila y arbolada
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
