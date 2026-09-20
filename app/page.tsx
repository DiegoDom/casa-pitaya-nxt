"use client";

import React, { useState } from "react";
import { propertyData } from "@/src/data/property";
import { es } from "@/src/data/locales/es";
import { en } from "@/src/data/locales/en";
import { Locale } from "@/src/types/property";

import { SkipLink } from "@/src/components/ui/SkipLink";
import { Navbar } from "@/src/components/layout/Navbar";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { PropertyHighlights } from "@/src/components/sections/PropertyHighlights";
import { AboutSection } from "@/src/components/sections/AboutSection";
import { SpacesSection } from "@/src/components/sections/SpacesSection";
import { OutdoorSection } from "@/src/components/sections/OutdoorSection";
import { AmenitiesSection } from "@/src/components/sections/AmenitiesSection";
import { LocationSection } from "@/src/components/sections/LocationSection";
import { RulesSection } from "@/src/components/sections/RulesSection";
import { HostSection } from "@/src/components/sections/HostSection";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { Footer } from "@/src/components/layout/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");

  const t = locale === "es" ? es : en;

  const whatsAppHref = `https://wa.me/${propertyData.channels.whatsApp.phoneE164.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(
    propertyData.channels.whatsApp.defaultMessage[locale]
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-surface-arena text-surface-charcoal selection:bg-primary selection:text-white">
      {/* Accessibility Skip Link */}
      <SkipLink targetId="main-content">
        {locale === "es"
          ? "Saltar al contenido principal"
          : "Skip to main content"}
      </SkipLink>

      {/* Navigation Header */}
      <Navbar
        locale={locale}
        onLocaleChange={setLocale}
        navLabels={t.nav}
        whatsAppHref={whatsAppHref}
      />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <HeroSection content={t.hero} whatsAppHref={whatsAppHref} />

        {/* Highlights Bar */}
        <PropertyHighlights labels={t.highlights} />

        {/* About Section */}
        <AboutSection content={t.about} />

        {/* Spaces & Bedrooms Section */}
        <SpacesSection
          content={t.spaces}
          rooms={propertyData.rooms}
          bathrooms={propertyData.capacity.bathrooms}
          bungalowPolicy={propertyData.bungalowPolicy[locale]}
          locale={locale}
        />

        {/* Outdoor Living & Pool Section */}
        <OutdoorSection content={t.outdoor} whatsAppHref={whatsAppHref} />

        {/* Amenities Section */}
        <AmenitiesSection
          content={t.amenities}
          categories={propertyData.amenityCategories}
          locale={locale}
        />

        {/* Location & Neighborhood Section */}
        <LocationSection
          content={t.location}
          travelTimes={propertyData.travelTimes}
          address={propertyData.location.address}
          locale={locale}
        />

        {/* Rules & Transparency Section */}
        <RulesSection
          content={t.rules}
          rules={propertyData.rules}
          locale={locale}
        />

        {/* Host & Hospitality Section */}
        <HostSection content={t.host} whatsAppHref={whatsAppHref} />

        {/* Contact & Conversions Section */}
        <ContactSection
          content={t.contact}
          whatsAppHref={whatsAppHref}
          airbnbUrl={propertyData.channels.airbnbUrl}
          instagramUrl={propertyData.channels.instagramUrl}
          facebookUrl={propertyData.channels.facebookUrl}
          phoneDisplay={propertyData.channels.whatsApp.formattedDisplay}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        content={t.footer}
        whatsAppHref={whatsAppHref}
        airbnbUrl={propertyData.channels.airbnbUrl}
        instagramUrl={propertyData.channels.instagramUrl}
        facebookUrl={propertyData.channels.facebookUrl}
      />
    </div>
  );
}
