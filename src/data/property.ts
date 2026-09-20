import { PropertyData } from "@/src/types/property";

export const propertyData: PropertyData = {
  name: "Casa Pitaya",
  location: {
    neighborhood: "Las Gaviotas",
    city: "Puerto Vallarta",
    state: "Jalisco",
    country: "México",
    address: "C. Pez Espada 114, Las Gaviotas, 49328 Puerto Vallarta, Jal.",
  },
  capacity: {
    maxGuests: 16,
    bedrooms: 6,
    beds: 8,
    bathrooms: {
      total: 4,
      mainWithTub: 1,
      standardWithShower: 3,
      outdoorShower: true,
    },
  },
  bungalowPolicy: {
    es: "Para reservaciones de 12 personas o menos se accede a la casa principal y la alberca. Para grupos mayores a 12 huéspedes, la habilitación del bungalow trasero se coordina por acuerdo previo con la anfitriona.",
    en: "For bookings of 12 guests or fewer, guests have full access to the main house and pool area. For groups over 12 guests, access to the rear bungalow is arranged by prior agreement with the host.",
  },
  pool: {
    hasJacuzziIntegrated: true,
    isHeated: false,
  },
  host: {
    name: "Diana Zavala",
    experienceYears: 10,
  },
  channels: {
    whatsApp: {
      phoneE164: "+523313312672",
      formattedDisplay: "+52 33 1331 2672",
      defaultMessage: {
        es: "¡Hola Diana! Me interesa consultar disponibilidad para Casa Pitaya en Puerto Vallarta.",
        en: "Hello Diana! I am interested in checking availability for Casa Pitaya in Puerto Vallarta.",
      },
    },
    airbnbUrl: "https://www.airbnb.mx/rooms/15582200",
    instagramUrl: "https://www.instagram.com/soycasapitaya/",
    facebookUrl: "https://www.facebook.com/casapitaya",
  },
  limitations: {
    airConditioning: false,
    washerDryer: false,
    poolHeating: false,
  },
  rooms: [
    {
      id: "room-1",
      name: { es: "Recámara 1", en: "Bedroom 1" },
      beds: { es: "1 cama matrimonial", en: "1 double bed" },
      note: {
        es: "Ventilador de techo, clóset y ropa de cama",
        en: "Ceiling fan, closet, and fresh linens",
      },
    },
    {
      id: "room-2",
      name: { es: "Recámara 2", en: "Bedroom 2" },
      beds: { es: "2 camas queen size", en: "2 queen-size beds" },
      note: {
        es: "Ventilador de techo, cómoda y ropa de cama",
        en: "Ceiling fan, dresser, and fresh linens",
      },
    },
    {
      id: "room-3-6",
      name: { es: "Recámaras 3 a 6", en: "Bedrooms 3 to 6" },
      beds: {
        es: "5 camas distribuidas (total 8 camas en la casa)",
        en: "5 beds distributed (total 8 beds across property)",
      },
      note: {
        es: "Distribución amplia para grupos, con ventilación natural y ventiladores portátiles",
        en: "Spacious layout for groups, natural cross-ventilation and portable fans",
      },
    },
  ],
  travelTimes: [
    {
      id: "dest-center",
      destination: {
        es: "Centro de Puerto Vallarta / Malecón",
        en: "Downtown Puerto Vallarta / Malecón",
      },
      durationMinutes: 8,
    },
    {
      id: "dest-beach",
      destination: {
        es: "Playa",
        en: "Beach",
      },
      durationMinutes: 10,
    },
    {
      id: "dest-la-isla",
      destination: {
        es: "Plaza La Isla",
        en: "La Isla Shopping Village",
      },
      durationMinutes: 10,
    },
    {
      id: "dest-macroplaza",
      destination: {
        es: "Macroplaza Puerto Vallarta",
        en: "Macroplaza Puerto Vallarta",
      },
      durationMinutes: 7,
    },
    {
      id: "dest-airport",
      destination: {
        es: "Aeropuerto Internacional (PVR)",
        en: "International Airport (PVR)",
      },
      durationMinutes: 15,
    },
    {
      id: "dest-bucerias",
      destination: {
        es: "Bucerías",
        en: "Bucerías",
      },
      durationMinutes: 25,
    },
  ],
  amenityCategories: [
    {
      id: "kitchen",
      title: { es: "Cocina & Comedor", en: "Kitchen & Dining" },
      items: [
        { id: "k1", label: { es: "Refrigerador y congelador", en: "Refrigerator & freezer" } },
        { id: "k2", label: { es: "Estufa y horno", en: "Stove & oven" } },
        { id: "k3", label: { es: "Microondas y cafetera", en: "Microwave & coffee maker" } },
        { id: "k4", label: { es: "Licuadora", en: "Blender" } },
        { id: "k5", label: { es: "Ollas, sartenes y utensilios", en: "Pots, pans & cooking basics" } },
        { id: "k6", label: { es: "Vajilla, cubiertos y tazas", en: "Dishes, silverware & glassware" } },
        { id: "k7", label: { es: "Mesa de comedor interior", en: "Indoor dining table" } },
      ],
    },
    {
      id: "outdoor",
      title: { es: "Exteriores & Alberca", en: "Outdoors & Pool" },
      items: [
        { id: "o1", label: { es: "Alberca privada con jacuzzi integrado", en: "Private pool with integrated jacuzzi" } },
        { id: "o2", label: { es: "Parrilla / asador", en: "Grill / BBQ area" } },
        { id: "o3", label: { es: "Comedor al aire libre", en: "Outdoor dining table" } },
        { id: "o4", label: { es: "Camastros y muebles de exterior", en: "Lounge chairs & patio furniture" } },
        { id: "o5", label: { es: "Hamaca para descanso", en: "Relaxation hammock" } },
        { id: "o6", label: { es: "Balcón y patio con vegetación", en: "Balcony & verdant patio" } },
      ],
    },
    {
      id: "connectivity",
      title: { es: "Internet & Trabajo", en: "Internet & Work" },
      items: [
        { id: "c1", label: { es: "Conexión Wi-Fi", en: "Wi-Fi connection" } },
        { id: "c2", label: { es: "Espacio para trabajar", en: "Dedicated workspace" } },
        { id: "c3", label: { es: "Silla ergonómica en área común", en: "Ergonomic chair in common area" } },
      ],
    },
    {
      id: "comfort",
      title: { es: "Confort & Baños", en: "Comfort & Bathrooms" },
      items: [
        { id: "b1", label: { es: "4 baños (1 con tina, 3 con regadera)", en: "4 bathrooms (1 with tub, 3 with shower)" } },
        { id: "b2", label: { es: "Regadera exterior para alberca", en: "Outdoor pool rinse shower" } },
        { id: "b3", label: { es: "Agua caliente continua", en: "Continuous hot water" } },
        { id: "b4", label: { es: "Toallas y sábanas limpias", en: "Fresh towels and bed linens" } },
        { id: "b5", label: { es: "Ventiladores de techo y portátiles", en: "Ceiling and portable fans" } },
        { id: "b6", label: { es: "Plancha y tendedero", en: "Iron and clothes drying rack" } },
      ],
    },
    {
      id: "parking-pets",
      title: { es: "Estacionamiento & Mascotas", en: "Parking & Pets" },
      items: [
        { id: "p1", label: { es: "Estacionamiento gratuito en instalaciones", en: "Free on-premise parking" } },
        { id: "p2", label: { es: "Estacionamiento libre en la calle", en: "Free street parking" } },
        { id: "p3", label: { es: "Se admiten mascotas", en: "Pet-friendly (pets allowed)" } },
        { id: "p4", label: { es: "Animales de asistencia siempre bienvenidos", en: "Assistance animals always welcome" } },
      ],
    },
  ],
  rules: {
    checkIn: "3:00 PM – 7:00 PM",
    checkOut: "Antes de las 12:00 PM",
    quietHours: "9:00 PM – 10:00 AM",
    items: [
      {
        id: "r1",
        text: {
          es: "Prohibidas fiestas o eventos y música en vivo (mariachi, norteño, banda).",
          en: "No parties or events; no live musical groups (mariachi, bands, etc.).",
        },
        critical: true,
      },
      {
        id: "r2",
        text: {
          es: "No se permite el ingreso a personas o invitados no registrados.",
          en: "No unregistered guests or outside visitors permitted on premises.",
        },
        critical: true,
      },
      {
        id: "r3",
        text: {
          es: "No fumar dentro de las habitaciones ni interiores de la casa.",
          en: "No smoking inside bedrooms or any indoor areas of the home.",
        },
        critical: true,
      },
      {
        id: "r4",
        text: {
          es: "Reducir el volumen de música a las 10:00 PM y no poner música alta antes de las 11:00 AM.",
          en: "Lower music volume by 10:00 PM; no loud music before 11:00 AM.",
        },
      },
      {
        id: "r5",
        text: {
          es: "Enjuagarse antes de entrar a la alberca y no arrojar alimentos ni saltar de balcones.",
          en: "Rinse before swimming; do not jump from balconies or bring food into the pool.",
        },
      },
      {
        id: "r6",
        text: {
          es: "Cuidar el agua y respetar los cajones de estacionamiento de los vecinos.",
          en: "Conserve water and strictly respect neighbors' parking spots.",
        },
      },
    ],
  },
};
