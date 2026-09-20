import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";

export interface HostSectionProps {
  content: {
    eyebrow: string;
    title: string;
    hostName: string;
    experience: string;
    desc: string;
  };
  whatsAppHref: string;
}

export function HostSection({ content, whatsAppHref }: HostSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-surface-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-terracotta-light/40 via-surface-arena to-primary-soft/30 border border-surface-border p-8 sm:p-12 lg:p-16 shadow-warm-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Host Graphic / Avatar */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-surface-white shadow-warm-md bg-surface-arena">
                <Image
                  src="https://picsum.photos/id/64/400/400"
                  alt={`Anfitriona ${content.hostName} — Casa Pitaya`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Host Information */}
            <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <Badge variant="primary" className="mb-3">
                {content.eyebrow}
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-surface-charcoal mb-2">
                {content.title}
              </h2>

              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-dark">
                  {content.hostName}
                </span>
                <span className="text-terracotta">•</span>
                <span className="text-sm font-semibold text-terracotta">
                  {content.experience}
                </span>
              </div>

              <p className="text-base text-surface-driftwood leading-relaxed mb-8 max-w-2xl">
                {content.desc}
              </p>

              <Button
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Contactar a {content.hostName.split(" ")[0]}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
