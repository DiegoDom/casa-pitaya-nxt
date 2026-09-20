export type Locale = "es" | "en";

export interface RoomDetail {
  id: string;
  name: { es: string; en: string };
  beds: { es: string; en: string };
  note?: { es: string; en: string };
}

export interface BathroomSummary {
  total: number;
  mainWithTub: number;
  standardWithShower: number;
  outdoorShower: boolean;
}

export interface TravelTime {
  id: string;
  destination: { es: string; en: string };
  durationMinutes: number;
}

export interface HouseRuleItem {
  id: string;
  text: { es: string; en: string };
  critical?: boolean;
}

export interface AmenityItem {
  id: string;
  label: { es: string; en: string };
}

export interface AmenityCategory {
  id: string;
  title: { es: string; en: string };
  items: AmenityItem[];
}

export interface PropertyData {
  name: string;
  location: {
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    address: string;
  };
  capacity: {
    maxGuests: number;
    bedrooms: number;
    beds: number;
    bathrooms: BathroomSummary;
  };
  bungalowPolicy: {
    es: string;
    en: string;
  };
  pool: {
    hasJacuzziIntegrated: boolean;
    isHeated: boolean;
  };
  host: {
    name: string;
    experienceYears: number;
  };
  channels: {
    whatsApp: {
      phoneE164: string; // "+523313312672"
      formattedDisplay: string; // "+52 33 1331 2672"
      defaultMessage: { es: string; en: string };
    };
    airbnbUrl: string;
    instagramUrl: string;
    facebookUrl: string;
  };
  limitations: {
    airConditioning: boolean;
    washerDryer: boolean;
    poolHeating: boolean;
  };
  rooms: RoomDetail[];
  travelTimes: TravelTime[];
  amenityCategories: AmenityCategory[];
  rules: {
    checkIn: string;
    checkOut: string;
    quietHours: string;
    items: HouseRuleItem[];
  };
}
