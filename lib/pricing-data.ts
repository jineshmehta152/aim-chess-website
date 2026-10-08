export interface PricingOption {
  id: string;
  name: {
    ca: string;
    es: string;
    en: string;
  };
  price: number;
  timeSlot?: string;
}

export interface PricingTier {
  id: string;
  title: {
    ca: string;
    es: string;
    en: string;
  };
  badge?: {
    ca: string;
    es: string;
    en: string;
  };
  subtitle: {
    ca: string;
    es: string;
    en: string;
  };
  hours: string;
  basePrice: number;
  featured?: boolean;
  popular?: boolean;
  description: {
    ca: string;
    es: string;
    en: string;
  };
  included: {
    ca: string[];
    es: string[];
    en: string[];
  };
  extras: PricingOption[];
}

export const WHATSAPP_PHONE = "34669844333";
export const WHATSAPP_DISPLAY = "669 84 43 33";

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "laborables",
    title: {
      ca: "Laborables",
      es: "Laborables",
      en: "Weekdays (Mon–Thu)",
    },
    subtitle: {
      ca: "De dilluns a dijous per a festes i trobades íntimes",
      es: "De lunes a jueves para fiestas y celebraciones",
      en: "Monday to Thursday for parties and gatherings",
    },
    hours: "17:00h – 21:00h (4h)",
    basePrice: 130,
    description: {
      ca: "Lloguer exclusiu de tot el recinte Esplúdic durant la tarda.",
      es: "Alquiler exclusivo de todo el espacio Esplúdic por la tarde.",
      en: "Exclusive rental of the full Esplúdic venue during the afternoon.",
    },
    included: {
      ca: [
        "Ús exclusiu de tot el local (parc infantil, jocs, taules)",
        "Equip de so i il·luminació ambiental",
        "Zona office amb nevera, microones i cafetera",
        "Mobiliari complet per a nens i adults",
      ],
      es: [
        "Uso exclusivo de todo el local (parque infantil, juegos, mesas)",
        "Equipo de sonido e iluminación ambiental",
        "Zona office con nevera, microondas y cafetera",
        "Mobiliario completo para niños y adultos",
      ],
      en: [
        "Exclusive use of the entire venue (indoor playground, games, tables)",
        "Sound system and atmospheric lighting",
        "Office area with fridge, microwave, and coffee maker",
        "Complete seating and tables for kids and adults",
      ],
    },
    extras: [
      {
        id: "morning_prep_laborables",
        name: {
          ca: "Accés extra al matí per a preparació",
          es: "Extra acceso por la mañana para preparación",
          en: "Morning setup preparation access",
        },
        price: 10,
      },
      {
        id: "cleaning_service_laborables",
        name: {
          ca: "Servei de neteja final",
          es: "Servicio de limpieza final",
          en: "Final cleaning service",
        },
        price: 20,
      },
    ],
  },
  {
    id: "viernes",
    title: {
      ca: "Divendres i Vigílies",
      es: "Viernes y Vísperas",
      en: "Fridays & Holiday Eves",
    },
    badge: {
      ca: "Ideal Cap de Setmana",
      es: "Ideal Fin de Semana",
      en: "Weekend Starter",
    },
    subtitle: {
      ca: "Divendres i vigílies de dies festius",
      es: "Viernes y vísperas de días festivos",
      en: "Fridays and days before official public holidays",
    },
    hours: "17:00h – 21:00h (4h)",
    basePrice: 170,
    popular: true,
    description: {
      ca: "La millor manera de començar el cap de setmana celebrant al màxim.",
      es: "La mejor manera de arrancar el fin de semana celebrando a lo grande.",
      en: "The ultimate way to kick off the weekend celebrating in style.",
    },
    included: {
      ca: [
        "Ús exclusiu de tot el local per a la teva festa",
        "Pista americana, jocs gegants i zona infantil",
        "Música, projector i ambientació de festa",
        "Espai de berenar i taules organitzades",
      ],
      es: [
        "Uso exclusivo de todo el local para tu fiesta",
        "Parque de bolas, juegos gigantes y zona infantil",
        "Música, proyector y ambientación festiva",
        "Espacio de merienda y mesas organizadas",
      ],
      en: [
        "Exclusive venue access for your entire celebration",
        "Soft play structure, giant games & toddler area",
        "Music sound system, projector & ambient vibes",
        "Snack & dining area with full setup",
      ],
    },
    extras: [
      {
        id: "morning_prep_viernes",
        name: {
          ca: "Accés extra al matí per a preparació",
          es: "Extra acceso por la mañana para preparación",
          en: "Morning setup preparation access",
        },
        price: 10,
      },
      {
        id: "cleaning_service_viernes",
        name: {
          ca: "Servei de neteja final",
          es: "Servicio de limpieza final",
          en: "Final cleaning service",
        },
        price: 20,
      },
    ],
  },
  {
    id: "cap-de-setmana-mati",
    title: {
      ca: "Dissabtes, Diumenges i Festius (Matí)",
      es: "Sábados, Domingos y Festivos (Mañana)",
      en: "Weekends & Holidays (Morning)",
    },
    subtitle: {
      ca: "Torn de matí per a festes matinals i dinars",
      es: "Turno de mañana para fiestas y comidas familiares",
      en: "Morning slot for brunch parties and celebrations",
    },
    hours: "10:00h – 14:00h (4h)",
    basePrice: 150,
    description: {
      ca: "Quatre hores de diversió matinal amb opció d'ampliació fins a les 15h.",
      es: "Cuatro horas de diversión matinal con opción de ampliar hasta las 15h.",
      en: "Four hours of morning celebration with optional extension until 15:00.",
    },
    included: {
      ca: [
        "Accés exclusiu a totes les instal·lacions d'Esplúdic",
        "Jocs, joguines, piscina de boles i camp de joc",
        "Neveres i electrodomèstics preparats per al dinar",
        "Climatització (calefacció/aire condicionat)",
      ],
      es: [
        "Acceso exclusivo a todas las instalaciones de Esplúdic",
        "Juegos, juguetes, piscina de bolas y campo lúdico",
        "Neveras y electrodomésticos listos para el almuerzo",
        "Climatización integral frío/calor",
      ],
      en: [
        "Exclusive access to all Esplúdic fun facilities",
        "Ball pit, toys, board games & play zone",
        "Refrigerators and prep appliances ready for lunch",
        "Complete climate control (A/C and heating)",
      ],
    },
    extras: [
      {
        id: "extra_14_15",
        name: {
          ca: "Hora extra de 14:00h a 15:00h",
          es: "Extra de 14:00h a 15:00h",
          en: "Extra hour from 14:00 to 15:00",
        },
        price: 35,
        timeSlot: "14:00 – 15:00",
      },
      {
        id: "cleaning_service_weekend_morning",
        name: {
          ca: "Servei de neteja final",
          es: "Servicio de limpieza final",
          en: "Final cleaning service",
        },
        price: 20,
      },
    ],
  },
  {
    id: "cap-de-setmana-tarda",
    title: {
      ca: "Dissabtes, Diumenges i Festius (Tarda)",
      es: "Sábados, Domingos y Festivos (Tarde)",
      en: "Weekends & Holidays (Afternoon)",
    },
    badge: {
      ca: "Més Sol·licitat",
      es: "Más Solicitado",
      en: "Most Popular",
    },
    subtitle: {
      ca: "Torn estrella de tarda amb opcions d'ampliació nocturna",
      es: "Turno estrella de tarde con opciones de ampliación nocturna",
      en: "Prime afternoon party slot with evening extension options",
    },
    hours: "17:00h – 21:00h (4h)",
    basePrice: 185,
    popular: true,
    featured: true,
    description: {
      ca: "La franja més demandada per a aniversaris complets i celebracions familiars.",
      es: "La franja más demandada para cumpleaños completos y fiestas familiares.",
      en: "The most requested slot for birthdays, family parties, and milestones.",
    },
    included: {
      ca: [
        "Tot l'espai privat en exclusiva per a la teva família i amics",
        "Jocs interactius, pista americana i zona baby",
        "Equip multimèdia per a música i vídeos",
        "Possibilitat d'ampliar abans (16h) i a la nit (fins a les 23h)",
      ],
      es: [
        "Todo el espacio privado en exclusiva para tu grupo",
        "Juegos interactivos, parque de bolas y zona baby",
        "Equipo multimedia para música y vídeos",
        "Posibilidad de ampliar antes (16h) y por la noche (hasta las 23h)",
      ],
      en: [
        "Entire private venue exclusively for your group",
        "Interactive games, soft play structure & baby zone",
        "Multimedia sound system for party playlists",
        "Flexible extensions: early at 16h & late up to 23h",
      ],
    },
    extras: [
      {
        id: "extra_16_17",
        name: {
          ca: "Hora extra prèvia de 16:00h a 17:00h",
          es: "Extra de 16:00h a 17:00h",
          en: "Early entry extra hour 16:00 to 17:00",
        },
        price: 35,
        timeSlot: "16:00 – 17:00",
      },
      {
        id: "extra_21_22",
        name: {
          ca: "Hora extra nocturna de 21:00h a 22:00h",
          es: "Extra de 21:00h a 22:00h",
          en: "Late extension hour 21:00 to 22:00",
        },
        price: 50,
        timeSlot: "21:00 – 22:00",
      },
      {
        id: "extra_22_23",
        name: {
          ca: "Hora extra nocturna de 22:00h a 23:00h",
          es: "Extra de 22:00h a 23:00h",
          en: "Late extension hour 22:00 to 23:00",
        },
        price: 50,
        timeSlot: "22:00 – 23:00",
      },
      {
        id: "cleaning_service_weekend_afternoon",
        name: {
          ca: "Servei de neteja final",
          es: "Servicio de limpieza final",
          en: "Final cleaning service",
        },
        price: 20,
      },
    ],
  },
  {
    id: "dia-complet",
    title: {
      ca: "Dia Complet (Dissabtes, Diumenges i Festius)",
      es: "Día Completo (Sábados, Domingos y Festivos)",
      en: "Full Day (Weekends & Holidays)",
    },
    badge: {
      ca: "Màxima Llibertat",
      es: "Máxima Libertad",
      en: "Best Value & Time",
    },
    subtitle: {
      ca: "11 hores ininterrompudes de 10:00h a 21:00h",
      es: "11 horas ininterrumpidas de 10:00h a 21:00h",
      en: "11 uninterrupted hours from 10:00 to 21:00",
    },
    hours: "10:00h – 21:00h (11h)",
    basePrice: 310,
    featured: true,
    description: {
      ca: "Gaudeix de tot el dia sense presses. Dinar, berenar, jocs i festa sense límit de torns.",
      es: "Disfruta de todo el día sin prisas. Comida, merienda, juegos y celebración non-stop.",
      en: "Enjoy the entire day with zero rush. Lunch, afternoon tea, games, and celebration.",
    },
    included: {
      ca: [
        "11 hores completes d'exclusivitat total del local",
        "Sense necessitat de recollir entre el matí i la tarda",
        "Accés continu a la cuina, jocs, música i climatització",
        "Ideal per a batejos, comunions, aniversaris dobles i grans trobades",
      ],
      es: [
        "11 horas completas de exclusividad total del local",
        "Sin necesidad de recoger entre la mañana y la tarde",
        "Acceso continuo a cocina, juegos, música y climatización",
        "Ideal para bautizos, comuniones, cumpleaños dobles y grandes reuniones",
      ],
      en: [
        "11 full hours of 100% private venue exclusivity",
        "No rush to pack up between morning and afternoon",
        "Continuous access to office, play zone, music & amenities",
        "Perfect for christenings, communions, milestone birthdays & large family events",
      ],
    },
    extras: [
      {
        id: "cleaning_service_full_day",
        name: {
          ca: "Servei de neteja final",
          es: "Servicio de limpieza final",
          en: "Final cleaning service",
        },
        price: 20,
      },
    ],
  },
];
