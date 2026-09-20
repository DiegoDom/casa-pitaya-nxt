import React from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";

export interface FooterProps {
  content: {
    rights: string;
    tagline: string;
    address: string;
  };
  whatsAppHref: string;
  airbnbUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}

export function Footer({
  content,
  whatsAppHref,
  airbnbUrl,
  instagramUrl,
  facebookUrl,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-charcoal text-surface-arena/90 pt-16 pb-12 border-t border-primary-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-driftwood/30">
          {/* Brand Presentation */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="bg-surface-white/95 p-3 rounded-2xl mb-5 shadow-warm-sm">
              <Image
                src="/images/client/logo-stacked.svg"
                alt="Casa Pitaya"
                width={130}
                height={90}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-surface-arena/80 max-w-sm leading-relaxed mb-4">
              {content.tagline}
            </p>
            <p className="text-xs text-surface-driftwood leading-relaxed">
              {content.address}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-bold text-surface-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#la-casa"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  La Casa
                </a>
              </li>
              <li>
                <a
                  href="#espacios"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Espacios & Recámaras
                </a>
              </li>
              <li>
                <a
                  href="#alberca"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Alberca & Exteriores
                </a>
              </li>
              <li>
                <a
                  href="#amenidades"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Amenidades
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Ubicación en Las Gaviotas
                </a>
              </li>
              <li>
                <a
                  href="#reglas"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Reglas de la Casa
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-bold text-surface-white mb-4">
              Contacto & Reservas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-arena/70 hover:text-primary-soft transition-colors"
                >
                  WhatsApp Directo
                </a>
              </li>
              <li>
                <a
                  href={airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Anuncio en Airbnb
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Instagram (@soycasapitaya)
                </a>
              </li>
              <li>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-arena/70 hover:text-white transition-colors"
                >
                  Facebook (/casapitaya)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-surface-driftwood gap-4">
          <p>
            © {currentYear} Casa Pitaya. {content.rights}
          </p>
          <p className="text-center sm:text-right">
            Puerto Vallarta, Jalisco, México
          </p>
        </div>
      </Container>
    </footer>
  );
}
