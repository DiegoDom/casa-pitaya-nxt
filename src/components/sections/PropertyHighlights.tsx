import React from "react";
import { Container } from "@/src/components/ui/Container";

export interface PropertyHighlightsProps {
  labels: {
    guests: string;
    guestsSub: string;
    bedrooms: string;
    bedroomsSub: string;
    beds: string;
    bedsSub: string;
    bathrooms: string;
    bathroomsSub: string;
    pool: string;
    poolSub: string;
    location: string;
    locationSub: string;
  };
}

export function PropertyHighlights({ labels }: PropertyHighlightsProps) {
  const highlights = [
    {
      title: labels.guests,
      subtitle: labels.guestsSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-primary"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: labels.bedrooms,
      subtitle: labels.bedroomsSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-terracotta"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <circle cx="15" cy="12" r="1" />
        </svg>
      ),
    },
    {
      title: labels.beds,
      subtitle: labels.bedsSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-primary"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <path d="M2 17h20" />
          <path d="M6 8v9" />
        </svg>
      ),
    },
    {
      title: labels.bathrooms,
      subtitle: labels.bathroomsSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-coastal-pacific"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h16a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2Z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h1" />
          <path d="M4 21l1-2" />
          <path d="M20 21l-1-2" />
        </svg>
      ),
    },
    {
      title: labels.pool,
      subtitle: labels.poolSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-coastal-sky"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 14c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M2 19c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M12 4v6" />
          <path d="M8 7h8" />
        </svg>
      ),
    },
    {
      title: labels.location,
      subtitle: labels.locationSub,
      icon: (
        <svg
          className="w-6 h-6 stroke-primary-dark"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12Z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative -mt-6 z-20 pb-12">
      <Container>
        <div className="bg-surface-white rounded-2xl sm:rounded-3xl border border-surface-border shadow-warm-md p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-surface-border/60">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? "pt-4 sm:pt-0 sm:px-3" : "sm:pr-3"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-surface-arena flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <span className="text-base sm:text-lg font-bold text-surface-charcoal leading-tight">
                  {item.title}
                </span>
                <span className="text-xs text-surface-driftwood mt-1">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
