import React from "react";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";

export interface ContactSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsAppButton: string;
    airbnbButton: string;
    note: string;
  };
  whatsAppHref: string;
  airbnbUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  phoneDisplay: string;
}

export function ContactSection({
  content,
  whatsAppHref,
  airbnbUrl,
  instagramUrl,
  facebookUrl,
  phoneDisplay,
}: ContactSectionProps) {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-surface-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            {content.eyebrow}
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-charcoal leading-tight mb-6">
            {content.title}
          </h2>

          <p className="text-base sm:text-lg text-surface-driftwood leading-relaxed mb-10 max-w-2xl mx-auto">
            {content.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base flex items-center gap-2.5"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{content.whatsAppButton}</span>
            </Button>

            <Button
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base"
            >
              {content.airbnbButton}
            </Button>
          </div>

          <p className="text-xs text-surface-driftwood mb-12">
            {content.note}
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card variant="arena" shadow="none" className="p-5 text-center">
              <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-1">
                WhatsApp
              </span>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-surface-charcoal hover:text-primary transition-colors"
              >
                {phoneDisplay}
              </a>
            </Card>

            <Card variant="arena" shadow="none" className="p-5 text-center">
              <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-1">
                Instagram
              </span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-surface-charcoal hover:text-primary transition-colors"
              >
                @soycasapitaya
              </a>
            </Card>

            <Card variant="arena" shadow="none" className="p-5 text-center">
              <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-1">
                Facebook
              </span>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-surface-charcoal hover:text-primary transition-colors"
              >
                /casapitaya
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
