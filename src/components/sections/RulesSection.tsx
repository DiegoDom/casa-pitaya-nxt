import React from "react";
import { Container } from "@/src/components/ui/Container";
import { Badge } from "@/src/components/ui/Badge";
import { Card } from "@/src/components/ui/Card";
import { HouseRuleItem, Locale } from "@/src/types/property";

export interface RulesSectionProps {
  content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    checkInLabel: string;
    checkOutLabel: string;
    quietHoursLabel: string;
    importantRulesTitle: string;
  };
  rules: {
    checkIn: string;
    checkOut: string;
    quietHours: string;
    items: HouseRuleItem[];
  };
  locale: Locale;
}

export function RulesSection({ content, rules, locale }: RulesSectionProps) {
  return (
    <section id="reglas" className="py-20 md:py-28 bg-surface-arena/60">
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

        {/* Timing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Check-in */}
          <Card variant="surface" shadow="sm" className="p-6 text-center">
            <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-2">
              {content.checkInLabel}
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-surface-charcoal">
              {rules.checkIn}
            </span>
          </Card>

          {/* Check-out */}
          <Card variant="surface" shadow="sm" className="p-6 text-center">
            <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-2">
              {content.checkOutLabel}
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-surface-charcoal">
              {rules.checkOut}
            </span>
          </Card>

          {/* Quiet Hours */}
          <Card variant="surface" shadow="sm" className="p-6 text-center">
            <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider block mb-2">
              {content.quietHoursLabel}
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark">
              {rules.quietHours}
            </span>
          </Card>
        </div>

        {/* Important House Rules */}
        <div className="bg-surface-white rounded-2xl sm:rounded-3xl border border-surface-border p-6 sm:p-10 shadow-warm-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-surface-charcoal mb-6">
            {content.importantRulesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {rules.items.map((rule) => (
              <div
                key={rule.id}
                className={`p-4 rounded-xl flex items-start gap-3.5 ${
                  rule.critical
                    ? "bg-primary-soft/50 border border-primary/20 text-primary-dark font-medium"
                    : "bg-surface-arena/60 border border-surface-border text-surface-charcoal"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rule.critical
                      ? "bg-primary text-white"
                      : "bg-surface-border text-surface-driftwood"
                  }`}
                >
                  {rule.critical ? (
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>

                <span className="text-sm leading-relaxed">
                  {rule.text[locale]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
