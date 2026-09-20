# SPEC 01 — Landing Page y Home de Casa Pitaya

> **Status:** Approved  
> **Depends on:** None  
> **Date:** 2026-09-20  
> **Objective:** Construir la landing page editorial y responsiva de Casa Pitaya con arquitectura bilingüe (ES/EN), presentación fiel de la propiedad y conversión de reservas a WhatsApp y Airbnb.

---

## 1. Por qué existe esta especificación

Casa Pitaya cuenta con una identidad de marca definida (`docs/brand.md`, `docs/design-system.md`), requerimientos técnicos establecidos (`docs/technical.md`) y datos operativos confirmados (`docs/client.md`, `docs/content.md`).

Esta especificación formaliza la primera entrega funcional del proyecto: una landing page rápida, accesible y de alta calidad visual (Server Components por defecto) que presenta fielmente la residencia a grupos de hasta 16 huéspedes y canaliza el interés directamente hacia la anfitriona (Diana Zavala) mediante WhatsApp y el anuncio oficial de Airbnb, sentando las bases bilingües (español e inglés) y los tokens de diseño para futuras fases del producto.

---

## 2. Alcance (Scope)

### Dentro del alcance (**In**):

- **Tokens de Diseño y Tipografía:**
  - Configuración de tokens semánticos en Tailwind CSS v4 a partir de `docs/brand.md` y `docs/design-system.md` (`primary` `#C83F79`, `primary-dark` `#67213E`, `terracotta` `#BC7D6F`, `coastal-pacific` `#2D91D4`, `coastal-sky` `#5AAFDF`, `surface-arena` `#FFF9F5`, etc.).
  - Configuración de `Noto Serif` para titulares editoriales y `Plus Jakarta Sans` / `Satoshi` para interfaz y cuerpo de texto.
  - Sombras cálidas personalizadas y curvas suaves sin distorsión visual.
- **Capa de Datos Centralizada:**
  - Archivo TypeScript estructurado con la información factual de la propiedad para desacoplar el contenido de la presentación.
  - Registro de capacidad: 16 huéspedes, 6 recámaras, 8 camas, 4 baños (1 baño principal con tina, 3 con regadera, más regadera exterior de alberca).
  - Alberca privada con jacuzzi integrado (especificando claramente que no es climatizada).
  - Regla del bungalow trasero: reservado para grupos mayores a 12 personas mediante acuerdo previo con el anfitrión.
- **Arquitectura Bilingüe (i18n):**
  - Soporte de diccionarios de texto para español (`es-MX`, idioma principal) e inglés (`en`).
  - Selector de idioma accesible en el encabezado.
- **Estructura de la Home (Secciones):**
  1. _Navbar / Header:_ Logotipo, enlaces de navegación por anclas (`#la-casa`, `#alberca`, `#amenidades`, `#ubicacion`, `#reglas`), selector de idioma y CTA a WhatsApp.
  2. _Hero Section:_ Eyebrow, H1 editorial, copy de valor, composición fotográfica y CTAs de acción dual.
  3. _Property Highlights:_ Grid numérico de validación rápida (16 huéspedes, 6 habitaciones, 8 camas, 4 baños, alberca con jacuzzi, Las Gaviotas).
  4. _About ("Una casa hecha para compartir"):_ Narrativa de convivencia y descanso en un entorno residencial.
  5. _Spaces & Bedrooms:_ Detalle de habitabilidad (Recámaras 1 y 2 con detalle; Recámaras 3 a 6 agrupadas en recuento global; baños y regla de bungalow).
  6. _Outdoor & Pool:_ Alberca con jacuzzi integrado, terraza, hamaca, asador, comedor exterior y advertencias transparentes de uso.
  7. _Amenities & Services:_ Inventario categorizado (Cocina, Exterior, Trabajo/Wi-Fi, Confort, Estacionamiento, Mascotas) y lista honesta de lo no disponible (sin A/C, sin lavadora/secadora).
  8. _Location & Neighborhood:_ Atributos de Las Gaviotas, tiempos de traslado estimados en minutos a 6 puntos clave y transporte público cercano.
  9. _House Rules & Safety:_ Horarios de check-in (3–7 PM), check-out (12 PM), horario de silencio (9 PM–10 AM), no fiestas, no mariachis/bandas, no fumar en interiores.
  10. _Host & Hospitality:_ Respaldo de Diana Zavala con 10 años de experiencia.
  11. _Contact & Booking:_ Botón prioritario a WhatsApp (`+523313312672`) con mensaje pre-rellenado y botón alternativo hacia Airbnb.
  12. _Footer:_ Datos de ubicación, canales sociales (Instagram, Facebook), créditos y derechos.
- **Gestión de Assets Temporales:**
  - Soporte configurado para imágenes de muestra utilizando `https://picsum.photos/` y mocks locales en `public/images/mocks/`.
- **Accesibilidad y SEO:**
  - Cumplimiento de WCAG 2.1 Nivel AA (contraste $\ge 4.5:1$, skip link, foco visible con ring contrastado, etiquetas semánticas, textos `alt` descriptivos).
  - Metadatos SEO, Open Graph y Twitter Cards listos para español e inglés.

### Fuera del alcance (**Out of scope** para futuras especificaciones):

- Formulario de contacto interactivo en servidor con envío de emails (Resend/SendGrid) -> _Fase posterior_.
- Motor de reservas con pasarela de pago (Stripe) y base de datos -> _Fase posterior_.
- Calendario sincronizado con iCal en tiempo real -> _Fase posterior_.
- Publicación del rating de Airbnb (4.62 / 197 evaluaciones) -> _Pendiente de validación por el cliente_.
- Panel de administración para edición de contenidos (CMS) -> _Fase posterior_.
- Fotografías oficiales definitivas (se incorporarán cuando el cliente las proporcione).

---

## 3. Modelo de Datos (Data Model)

Toda la información factual se centraliza en `src/data/property.ts` para garantizar integridad y evitar dispersión de textos en componentes:

```typescript
// src/types/property.ts

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
  destination: { es: string; en: string };
  durationMinutes: number;
}

export interface HouseRuleItem {
  id: string;
  text: { es: string; en: string };
  critical?: boolean;
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
  rules: {
    checkIn: string;
    checkOut: string;
    quietHours: string;
    items: HouseRuleItem[];
  };
}
```

---

## 4. Plan de Implementación (Implementation Plan)

Cada paso deja el repositorio en un estado ejecutable y validable de forma independiente:

1. **Configuración de Imágenes y Dominio en Next.js:**
   - Actualizar `next.config.ts` para autorizar el dominio `picsum.photos` en `images.remotePatterns`.
   - _Verificación manual:_ Ejecutar `npm run dev` y confirmar que no hay advertencias de configuración.

2. **Sistema de Tokens y Estilos Globales en Tailwind CSS v4:**
   - Registrar en `app/globals.css` las variables de color canónicas (`--color-primary: #C83F79`, `--color-primary-dark: #67213E`, `--color-terracotta: #BC7D6F`, `--color-surface-arena: #FFF9F5`, `--color-surface-charcoal: #2B2025`, etc.) y las sombras cálidas.
   - Configurar la declaración de fuentes con fallback para Noto Serif (display) y Satoshi Variable (`/fonts/Satoshi-Variable.ttf`, funcional).
   - _Verificación manual:_ Crear un bloque de prueba con `bg-primary text-white` y verificar compilación limpia.

3. **Capa de Datos y Tipos TypeScript:**
   - Crear `src/types/property.ts` y `src/data/property.ts` con todos los datos confirmados (16 huéspedes, 6 recámaras, 8 camas, 4 baños con 1 tina, alberca con jacuzzi, teléfono `+523313312672`).
   - Crear los catálogos de traducción en `src/data/locales/es.ts` y `src/data/locales/en.ts`.
   - _Verificación manual:_ Ejecutar `npm run build` o `npx tsc --noEmit` y constatar cero errores de tipado.

4. **Componentes UI Base (Atómicos):**
   - Implementar `src/components/ui/Button.tsx` con variantes `primary` y `secondary`, estilos de `:focus-visible` y soporte polimórfico (`as="a"` o `as="button"`).
   - Implementar `src/components/ui/Container.tsx` (ancho máximo de 1280px y padding responsivo).
   - Implementar `src/components/ui/Badge.tsx` y `src/components/ui/Card.tsx`.
   - Implementar `src/components/ui/SkipLink.tsx` para accesibilidad de teclado.
   - _Verificación manual:_ Probar que los componentes renderizan sus variantes con estilos correctos.

5. **Navegación y Header Responsivo:**
   - Crear `src/components/layout/Navbar.tsx` con contenedor fijo/sticky, logotipo horizontal oficial (`public/images/client/logo-primary-horizontal.svg`), enlaces ancla de smooth scroll, botón selector de idioma (ES/EN) y botón CTA a WhatsApp.
   - Incluir drawer/menú colapsable accesible para dispositivos móviles con botón toggle etiquetado con `aria-label`.
   - _Verificación manual:_ Navegar mediante tabulador de teclado y probar la apertura del menú móvil en viewport reducido.

6. **Sección Hero y Cinta de Highlights:**
   - Crear `src/components/sections/HeroSection.tsx` con eyebrow, H1 editorial, copy de introducción, botones de acción y contenedor de imagen (Picsum).
   - Crear `src/components/sections/PropertyHighlights.tsx` con 6 micro-tarjetas numéricas con iconos outline legibles.
   - _Verificación manual:_ Inspeccionar en viewport desktop y mobile comprobando alineaciones y contrastes.

7. **Secciones de Casa y Espacios de Descanso:**
   - Crear `src/components/sections/AboutSection.tsx` con el texto editorial de hospitalidad y convivencia.
   - Crear `src/components/sections/SpacesSection.tsx` detallando la configuración de 6 habitaciones, 8 camas, desglose de los 4 baños (1 tina, 3 regaderas, 1 exterior) y la nota visible sobre el bungalow trasero para grupos mayores a 12 personas.
   - _Verificación manual:_ Validar que el conteo numérico de camas y recámaras coincida exactamente con `docs/client.md`.

8. **Secciones de Exterior, Alberca y Amenidades:**
   - Crear `src/components/sections/OutdoorSection.tsx` destacando la alberca con jacuzzi integrado, terraza, hamaca, asador y nota transparente de "alberca no climatizada".
   - Crear `src/components/sections/AmenitiesSection.tsx` con el catálogo categorizado en pestañas o grid estructurado y bloque de "Información importante" (sin A/C, sin lavadora/secadora).
   - _Verificación manual:_ Verificar que las advertencias y comodidades sean visibles y legibles en dispositivos móviles.

9. **Secciones de Ubicación, Reglas de la Casa y Anfitriona:**
   - Crear `src/components/sections/LocationSection.tsx` con descripción de Las Gaviotas y tarjetas de tiempos estimados a playas y puntos de interés.
   - Crear `src/components/sections/RulesSection.tsx` con horarios de check-in/out, horario de silencio y reglas críticas (no fiestas, no mariachis).
   - Crear `src/components/sections/HostSection.tsx` presentando a Diana Zavala con sus 10 años de experiencia.
   - _Verificación manual:_ Constatar que no se incluyan afirmaciones inventadas sobre distancias o reglas.

10. **Sección de Contacto, Footer y Ensamble de la Home:**
    - Crear `src/components/sections/ContactSection.tsx` con enlace dinámico generado a WhatsApp (`https://wa.me/523313312672?text=...`) y botón directo al anuncio oficial de Airbnb.
    - Crear `src/components/layout/Footer.tsx` utilizando el isotipo/sello oficial (`public/images/client/logo-stacked.svg` o `logo-seal.svg`), resumen legal, ubicación y enlaces a redes sociales.
    - Ensamblar todas las secciones en `app/page.tsx` pasando el estado del idioma activo.
    - _Verificación manual:_ Probar los clics de ambos botones de conversión externa y verificar que abren en pestaña nueva con `rel="noopener noreferrer"`.

11. **Configuración de Metadatos SEO y Accesibilidad Global:**
    - Configurar metadatos en `app/layout.tsx` (Title, Meta Description, Open Graph, Twitter Cards, tags canónicas e idioma dinámico `<html lang="...">`).
    - _Verificación manual:_ Ejecutar `npm run build` y validar que el build de producción finalice con código 0 y sin errores de hidratación.

---

## 5. Criterios de Aceptación (Acceptance Criteria)

- [ ] `npm run build` compila con éxito sin errores de TypeScript ni avisos de ESLint.
- [ ] La barra de navegación permite saltar por anclas suaves a `#la-casa`, `#alberca`, `#amenidades`, `#ubicacion` y `#reglas`.
- [ ] El selector de idioma alterna fluidamente todos los textos de la página entre español e inglés sin recargar la página.
- [ ] La capacidad máxima se muestra explícitamente como **16 huéspedes**, con **6 recámaras**, **8 camas** y **4 baños**.
- [ ] Se especifica claramente que el baño principal cuenta con tina, los demás con regadera y existe regadera exterior para la alberca.
- [ ] Se detalla que la alberca cuenta con jacuzzi integrado y se aclara explícitamente que no está climatizada.
- [ ] Se explicita que para grupos de más de 12 personas el acceso al bungalow se realiza mediante acuerdo con el anfitrión.
- [ ] Se comunican con transparencia las ausencias de aire acondicionado y de lavadora/secadora.
- [ ] El botón primario de WhatsApp abre el enlace oficial con el número `+523313312672` y mensaje predeterminado.
- [ ] El botón secundario de Airbnb enlaza correctamente a `https://www.airbnb.mx/rooms/15582200`.
- [ ] No se muestra el rating de Airbnb (4.62 / 197 evaluaciones) en la interfaz pública hasta contar con validación final del cliente.
- [ ] El enlace accesible de "Saltar al contenido principal" es visible al interactuar con el tabulador del teclado.
- [ ] Todos los elementos interactivos tienen un anillo de foco `:focus-visible` visible y contrastado.
- [ ] En pantallas menores a 768px, el menú móvil se despliega correctamente y los botones mantienen un área de contacto mínima de 48px $\times$ 48px.
- [ ] Las imágenes externas remotas de `picsum.photos` cargan optimizadas a través del componente `next/image`.

---

## 6. Decisiones Tomadas y Descartadas

- **Sí:** Capacidad oficial establecida en 16 huéspedes.
  - _Razón:_ Confirmado directamente por el usuario; elimina la ambigüedad de "+16".
- **Sí:** 4 baños configurados como 1 baño principal con tina, 3 con regadera y regadera exterior en la alberca.
  - _Razón:_ Aclaración operativa del cliente para el borrador inicial.
- **Sí:** Jacuzzi especificado como parte integrada de la alberca.
  - _Razón:_ Claridad factual para el huésped; evita asumir una instalación o tina separada.
- **Sí:** Bungalow para más de 12 huéspedes condicionado a acuerdo con el anfitrión.
  - _Razón:_ Respeta el modelo operativo de la anfitriona documentado en `docs/client.md`.
- **Sí:** Soporte bilingüe (ES / EN) arquitecturado desde la primera especificación.
  - _Razón:_ Requerimiento explícito del cliente para atender al mercado de turismo internacional en Puerto Vallarta desde el inicio.
- **Sí:** Teléfono WhatsApp comercial asignado a `+52 33 1331 2672`.
  - _Razón:_ Sustituye el placeholder `5215512345678` de la documentación inicial.
- **Sí:** Uso temporal de `picsum.photos` y mocks locales en `public/images/mocks/`.
  - _Razón:_ Permite validar la composición editorial completa mientras se reciben las fotos oficiales.
- **No:** Publicar calificación y número de evaluaciones de Airbnb (4.62 / 197 reviews).
  - _Razón:_ El usuario especificó mantenerlo como propuesta pendiente de validación antes de publicarlo.
- **No:** Formulario con backend o reservas directas con tarjeta de crédito en esta fase.
  - _Razón:_ Prioridad en velocidad de lanzamiento y validación de conversión directa vía WhatsApp y Airbnb.

---

## 7. Riesgos Identificados

| Riesgo                                                  | Mitigación                                                                                                                                                                  |
| :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disponibilidad de imágenes de picsum.photos**         | Configurar fallbacks con colores de fondo de los tokens del design system (`surface-arena`, `terracotta-light`) si el servicio externo experimenta lentitud.                |
| **Expectativa de confort climático en Puerto Vallarta** | Indicar de manera prominente pero cordial la presencia de ventiladores de techo y portátiles, y la ausencia de aire acondicionado central, evitando cancelaciones o quejas. |
| **Actualización de fotos oficiales**                    | Centralizar las rutas de imagen en `src/data/property.ts` para que la sustitución de mocks por fotos reales se efectúe en un único punto sin tocar componentes.             |

---

## 8. Lo que NO está en esta especificación

- Formulario de contacto con envío de correos electrónicos.
- Pasarela de pago o procesamiento de depósitos y cobros.
- Sincronización automática de disponibilidad por calendario iCal.
- Panel administrativo para edición de textos o precios.
- Fotografía oficial definitiva de la propiedad.
