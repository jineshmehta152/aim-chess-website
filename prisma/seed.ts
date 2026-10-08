import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SEED_FAQS = [
  // 1. Reserves & Preus (Booking)
  {
    category: "booking",
    order: 1,
    questionCa: "Com funciona el lloguer del local? És realment 100% exclusiu?",
    questionEs: "¿Cómo funciona el alquiler del local? ¿Es realmente 100% exclusivo?",
    questionEn: "How does venue rental work? Is it 100% private and exclusive?",
    answerCa: "Sí, totalment exclusiu. Durant la teva franja horària reservada, tot l'espai d'Esplúdic (pista de boles, parc infantil, zona menjador, office i cafeteria lounge) queda tancat única i exclusivament per a tu i els teus convidats. Mai coincidiràs amb altres grups ni desconeguts.",
    answerEs: "Sí, totalmente exclusivo. Durante tu franja horaria reservada, todo el espacio de Esplúdic (parque de bolas, zona comedor, office y cafetería lounge) queda cerrado única y exclusivamente para ti y tus invitados. Nunca coincidirás con otros grupos.",
    answerEn: "Yes, completely exclusive! During your booked time slot, the entire Esplúdic venue (ball pit, playground, dining area, kitchen office, and lounge) is reserved 100% for you and your guests. Never shared with strangers.",
  },
  {
    category: "booking",
    order: 2,
    questionCa: "Amb quant de temps d'antelació és recomanable reservar?",
    questionEs: "¿Con cuánto tiempo de antelación es recomendable reservar?",
    questionEn: "How far in advance should I book?",
    answerCa: "Recomanem reservar amb un mínim de 2 a 4 setmanes d'antelació, especialment per a caps de setmana i divendres a la tarda, que són les dates més demandades. Si tens una data urgent, escriu-nos per WhatsApp per comprovar cancel·lacions d'última hora.",
    answerEs: "Recomendamos reservar con un mínimo de 2 a 4 semanas de antelación, especialmente para fines de semana y viernes tarde, que son las fechas más demandadas. Escríbenos por WhatsApp para comprobar disponibilidad inmediata.",
    answerEn: "We recommend booking 2 to 4 weeks in advance, especially for weekends and Friday afternoons. For urgent dates, send us a WhatsApp message to check last-minute openings.",
  },
  {
    category: "booking",
    order: 3,
    questionCa: "Com es formalitza la reserva i quins mètodes de pagament accepteu?",
    questionEs: "¿Cómo se formaliza la reserva y qué métodos de pago aceptáis?",
    questionEn: "How is the reservation confirmed and what payment methods do you accept?",
    answerCa: "Per bloquejar la teva data sol·licitem una paga i senyal. La resta de l'import s'abona còmodament abans de l'inici de la celebració. Acceptem transferència bancària, Bizum i targeta de crèdit.",
    answerEs: "Para bloquear tu fecha solicitamos una paga y señal. El resto del importe se abona cómodamente antes del inicio de la celebración. Aceptamos transferencia, Bizum y tarjeta.",
    answerEn: "To secure your date we request a deposit. The remaining balance is paid before the celebration starts. We accept bank transfer, Bizum, and credit cards.",
  },
  {
    category: "booking",
    order: 4,
    questionCa: "Què passa si he de cancel·lar o canviar la data de la festa?",
    questionEs: "¿Qué pasa si tengo que cancelar o cambiar la fecha de la fiesta?",
    questionEn: "What happens if I need to cancel or change the party date?",
    answerCa: "Oferim màxima flexibilitat: si ens avises amb almenys 15 dies d'antelació, podràs canviar la teva data a qualsevol altre dia disponible del calendari sense cap cost addicional.",
    answerEs: "Ofrecemos máxima flexibilidad: si nos avisas con al menos 15 días de antelación, podrás cambiar tu fecha a cualquier otro día disponible del calendario sin coste adicional.",
    answerEn: "We offer maximum flexibility: if you inform us at least 15 days in advance, you can reschedule to any available date without additional charges.",
  },
  {
    category: "booking",
    order: 5,
    questionCa: "Quant de temps abans puc entrar al local per preparar la decoració?",
    questionEs: "¿Cuánto tiempo antes puedo entrar al local para preparar la decoración?",
    questionEn: "How early can I arrive to set up decorations?",
    answerCa: "Totes les reserves inclouen 30 minuts de cortesia previs a l'inici de la festa per poder col·locar el teu pastís, begudes i decoració personalitzada amb total tranquil·litat.",
    answerEs: "Todas las reservas incluyen 30 minutos de cortesía previos al inicio de la fiesta para colocar tu tarta, bebidas y decoración personalizada con total tranquilidad.",
    answerEn: "All bookings include 30 complimentary minutes prior to your start time to set up your cake, drinks, and custom decorations with peace of mind.",
  },

  // 2. Instal·lacions & Aforament (Venue)
  {
    category: "venue",
    order: 6,
    questionCa: "Quina és la capacitat màxima d'aforament del local?",
    questionEs: "¿Cuál es la capacidad máxima de aforo del local?",
    questionEn: "What is the maximum venue capacity?",
    answerCa: "L'aforament màxim homologat és de 60 persones (sumant infants i adults). L'espai diàfan de 220 m² en planta baixa permet que tothom gaudeixi còmodament sense sensació d'atabalament.",
    answerEs: "El aforo máximo homologado es de 60 personas (sumando niños y adultos). El espacio diáfano de 220 m² en planta baja permite disfrutar cómodamente.",
    answerEn: "The certified maximum capacity is 60 people (children plus adults combined). The open 220 m² ground-floor layout ensures everyone enjoys the space comfortably.",
  },
  {
    category: "venue",
    order: 7,
    questionCa: "El local és accessible per a cadires de rodes i cotxets de nadó?",
    questionEs: "¿El local es accesible para sillas de ruedas y carritos de bebé?",
    questionEn: "Is the venue wheelchair and baby stroller accessible?",
    answerCa: "Sí, el local és 100% accessible en planta baixa, a peu de carrer, sense esglaons ni barreres arquitectòniques. Disposem de lavabo adaptat per a persones amb mobilitat reduïda i canviador per a nadons.",
    answerEs: "Sí, el local es 100% accesible en planta baja, a pie de calle, sin escalones ni barreras arquitectónicas. Disponemos de baño adaptado y cambiador de bebés.",
    answerEn: "Yes, the venue is 100% ground floor and street level accessible with no steps. We provide wheelchair-accessible restrooms and baby changing facilities.",
  },
  {
    category: "venue",
    order: 8,
    questionCa: "Quines zones de joc inclou el parc infantil?",
    questionEs: "¿Qué zonas de juego incluye el parque infantil?",
    questionEn: "What play zones are included in the indoor playground?",
    answerCa: "Inclou piscina de boles gegant homologada sota normativa europea, tobogans de fusta, laberint d'obstacles encoixinats de psicomotricitat, zona tova sensorial per a nadons de 0-3 anys i racó de tallers creatius.",
    answerEs: "Incluye piscina de bolas gigante homologada bajo normativa europea, toboganes, laberinto de psicomotricidad acolchado, zona blanda sensorial para bebés de 0-3 años y rincón de talleres creativos.",
    answerEn: "It includes a certified ball pit, slides, padded psychomotor obstacle labyrinth, sensory soft play zone for toddlers 0–3, and creative craft tables.",
  },
  {
    category: "venue",
    order: 9,
    questionCa: "El local disposa de climatització fred/calor?",
    questionEs: "¿El local dispone de climatización frío/calor?",
    questionEn: "Does the venue have heating and air conditioning?",
    answerCa: "Sí, disposem d'un sistema integral de climatització amb aire condicionat i calefacció per garantir una temperatura agradable durant qualsevol època de l'any, a més de renovació contínua d'aire.",
    answerEs: "Sí, disponemos de climatización integral con aire acondicionado y calefacción para garantizar la temperatura ideal todo el año, además de renovación continua de aire.",
    answerEn: "Yes, we have full climate control with air conditioning and heating, plus continuous fresh air ventilation systems.",
  },
  {
    category: "venue",
    order: 10,
    questionCa: "Hi ha aparcament a prop d'Esplúdic a Esplugues?",
    questionEs: "¿Hay aparcamiento cerca de Esplúdic en Esplugues?",
    questionEn: "Is there convenient parking near Esplúdic in Esplugues?",
    answerCa: "Sí, als voltants del local hi ha zones d'aparcament còmodes i gratuïtes, a més de pàrquings públics i bona connexió amb transport públic (Trambaix i autobusos).",
    answerEs: "Sí, alrededor del local hay zonas de aparcamiento cómodas y gratuitas, además de parkings públicos y excelente conexión con transporte público (Trambaix y autobuses).",
    answerEn: "Yes, there is ample free street parking in the surrounding neighborhood, plus nearby public parking and direct transit connections (Trambaix and bus).",
  },

  // 3. Menjar & Càtering (Food)
  {
    category: "food",
    order: 11,
    questionCa: "Puc portar el meu propi berenar, pastís i begudes?",
    questionEs: "¿Puedo traer mi propia merienda, tarta y bebidas?",
    questionEn: "Can I bring my own food, cake, and beverages?",
    answerCa: "I tant! Tens total llibertat per portar el teu propi menjar, pastissos, snacks i begudes sense cap cost addicional. Disposem d'office equipat amb nevera, congelador i microones perquè puguis conservar i escalfar el que necessitis.",
    answerEs: "¡Por supuesto! Tienes total libertad para traer tu propia comida, tartas, aperitivos y bebidas sin coste adicional. Disponemos de office equipado con nevera, congelador y microondas.",
    answerEn: "Absolutely! You are free to bring your own birthday treats, cake, snacks, and drinks without extra fees. Our kitchen office includes a full fridge, freezer, and microwave.",
  },
  {
    category: "food",
    order: 12,
    questionCa: "Oferiu servei de càtering o berenars infantils?",
    questionEs: "¿Ofrecéis servicio de catering o meriendas infantiles?",
    questionEn: "Do you offer catering packages or snack menus?",
    answerCa: "Sí, col·laborem amb proveïdors locals de confiança que ofereixen menús de berenar infantil sans i deliciosos, així com safates d'embotits, canapès i coques salades per als adults.",
    answerEs: "Sí, colaboramos con obradores locales de confianza que ofrecen menús infantiles saludables y bandejas de embutidos, canapés y repostería salada para adultos.",
    answerEn: "Yes! We partner with trusted local bakeries offering nutritious kids snack boxes and savory catering platters for parents and adult guests.",
  },
  {
    category: "food",
    order: 13,
    questionCa: "Teniu opcions de menjar per a celíacs o al·lèrgies alimentàries?",
    questionEs: "¿Tenéis opciones de comida para celíacos o alergias alimentarias?",
    questionEn: "Are gluten-free and allergy-safe food options available?",
    answerCa: "Sí, si encarregues el càtering amb nosaltres podem adaptar els menús per a celíacs (sense gluten), intolerants a la lactosa, vegans o qualsevol altra al·lèrgia prèviament informada.",
    answerEs: "Sí, si contratas el catering con nosotros adaptamos menús sin gluten para celíacos, sin lactosa, opciones veganas o cualquier otra alergia.",
    answerEn: "Yes, when booking catering through us, we offer certified gluten-free, lactose-free, and allergy-customized snack boxes.",
  },

  // 4. Normes & Accés (Rules)
  {
    category: "rules",
    order: 14,
    questionCa: "És obligatori l'ús de mitjons antilliscants a la piscina de boles?",
    questionEs: "¿Es obligatorio el uso de calcetines antideslizantes en el parque de bolas?",
    questionEn: "Are non-slip socks mandatory in the ball pit and playground?",
    answerCa: "Sí, per motius d'higiene i màxima seguretat és obligatori que tots els infants i adults que accedeixin a les zones de joc encoixinades portin mitjons (preferiblement antilliscants).",
    answerEs: "Sí, por motivos de higiene y seguridad es obligatorio que todos los niños y adultos que accedan a las estructuras acolchadas lleven calcetines (preferiblemente antideslizantes).",
    answerEn: "Yes, for hygiene and child safety, socks (preferably non-slip grip socks) are mandatory for all children and adults entering the play structures.",
  },
  {
    category: "rules",
    order: 15,
    questionCa: "Com funciona el servei de neteja al final de la festa?",
    questionEs: "¿Cómo funciona el servicio de limpieza al finalizar la fiesta?",
    questionEn: "How does end-of-party cleaning work?",
    answerCa: "Pots triar recollir el local bàsicament abans de sortir o contractar el nostre servei opcional de neteja integral exprés (per només 35€-50€ segons el pack) i oblidar-te de tot.",
    answerEs: "Puedes recoger el local de forma básica antes de salir o contratar nuestro servicio opcional de limpieza integral exprés (por solo 35€-50€) y marcharte tranquilamente.",
    answerEn: "You can either do a basic trash tidy before leaving or book our complete express cleaning service (for 35€–50€) and leave the cleanup to us.",
  },
  {
    category: "rules",
    order: 16,
    questionCa: "Es permet posar música pròpia o connectar el mòbil als altaveus?",
    questionEs: "¿Se permite poner música propia o conectar el móvil a los altavoces?",
    questionEn: "Can we play our own music playlist via Bluetooth?",
    answerCa: "Sí! El nostre equip de so professional disposa de connexió Bluetooth senzilla perquè connectis el teu telèfon o tauleta i reprodueixis les cançons i llistes de Spotify favorites dels nens.",
    answerEs: "¡Sí! Nuestro equipo de sonido profesional dispone de conexión Bluetooth sencilla para conectar tu móvil o tablet y reproducir tus listas favoritas de Spotify.",
    answerEn: "Yes! Our high-quality sound system includes Bluetooth connectivity so you can stream your favorite Spotify playlists seamlessly.",
  },

  // 5. Animació & Serveis Addicionals (Extras)
  {
    category: "extras",
    order: 17,
    questionCa: "Es poden contractar monitors, mags o animadors infantils?",
    questionEs: "¿Se pueden contratar monitores, magos o animadores infantiles?",
    questionEn: "Can we hire children animators, face painters, or magicians?",
    answerCa: "Sí, disposem de contactes amb els millors animadors professionals: pintacares amb maquillatge hipoal·lergènic, mags, espectacles de titelles, bombolles gegants i dinamitzadors de jocs.",
    answerEs: "Sí, disponemos de contacto con animadores profesionales: pintacaras con maquillaje hipoalergénico, magos, cuentacuentos, pompas gigantes y dinámicas de juegos.",
    answerEn: "Yes! We can arrange professional face painters with hypoallergenic paints, magic shows, balloon artists, and party game coordinators.",
  },
  {
    category: "extras",
    order: 18,
    questionCa: "Puc portar decoració temàtica, arcs de globus o photocall?",
    questionEs: "¿Puedo traer decoración temática, arcos de globos o photocall?",
    questionEn: "Can I bring themed decorations, balloon arches, or a photo booth?",
    answerCa: "I tant! El local compta amb parets preparades i punts de subjecció per penjar garlandes, números lluminosos, arcs de globus orgànics i el teu photocall personalitzat.",
    answerEs: "¡Por supuesto! El local cuenta con zonas y anclajes preparados para colgar guirnaldas, números luminosos, arcos de globos orgánicos y tu photocall personalizado.",
    answerEn: "Absolutely! The venue features dedicated hanging points and backdrops designed for balloon arches, marquee numbers, and themed photo areas.",
  },
  {
    category: "extras",
    order: 19,
    questionCa: "Oferiu opció de contractar hores addicionals si la festa s'allarga?",
    questionEs: "¿Ofrecéis opción de contratar horas adicionales si la fiesta se alarga?",
    questionEn: "Can we book extra hours if we want to extend the party?",
    answerCa: "Sí, sempre que la disponibilitat del calendari posterior ho permeti, pots afegir hores extra per 35€/hora per continuar gaudint de la celebració.",
    answerEs: "Sí, siempre que la disponibilidad de la sala lo permita, puedes añadir horas adicionales por 35€/hora para seguir disfrutando.",
    answerEn: "Yes, subject to schedule availability, you can extend your celebration with additional hours for 35€/hour.",
  },
];

const SEED_SETTINGS = [
  { key: "phone", value: "+34 669 84 43 33" },
  { key: "whatsapp", value: "34669844333" },
  { key: "whatsapp_display", value: "669 84 43 33" },
  { key: "address", value: "Carrer d'Exemple, 12, 08950 Esplugues de Llobregat, Barcelona" },
  { key: "opening_hours", value: "Dilluns a Diumenge: 10:00 - 21:00 (amb cita prèvia per visites)" },
  { key: "banner_notice", value: "✨ Obert el calendari de reserves per a la nova temporada!" },
  { key: "banner_active", value: "true" },
];

const SEED_PACKAGES = [
  {
    slug: "laborables",
    titleCa: "Laborables",
    titleEs: "Laborables",
    titleEn: "Weekdays (Mon–Thu)",
    subtitleCa: "De dilluns a dijous per a festes i trobades íntimes",
    subtitleEs: "De lunes a jueves para fiestas y celebraciones",
    subtitleEn: "Monday to Thursday for parties and gatherings",
    hours: "17:00h – 21:00h (4h)",
    basePrice: 130,
    isPopular: false,
    isFeatured: false,
    descriptionCa: "Lloguer exclusiu de tot el recinte Esplúdic durant la tarda.",
    descriptionEs: "Alquiler exclusivo de todo el espacio Esplúdic por la tarde.",
    descriptionEn: "Exclusive rental of the full Esplúdic venue during the afternoon.",
    includedCa: JSON.stringify([
      "Ús exclusiu de tot el local (parc infantil, jocs, taules)",
      "Equip de so i il·luminació ambiental",
      "Zona office amb nevera, microones i cafetera",
      "Mobiliari complet per a nens i adults",
    ]),
    includedEs: JSON.stringify([
      "Uso exclusivo de todo el local (parque infantil, juegos, mesas)",
      "Equipo de sonido e iluminación ambiental",
      "Zona office con nevera, microondas y cafetera",
      "Mobiliario completo para niños y adultos",
    ]),
    includedEn: JSON.stringify([
      "Exclusive use of the entire venue (indoor playground, games, tables)",
      "Sound system and atmospheric lighting",
      "Office area with fridge, microwave, and coffee maker",
      "Complete seating and tables for kids and adults",
    ]),
    order: 1,
    extras: [
      {
        nameCa: "Accés extra al matí per a preparació",
        nameEs: "Extra acceso por la mañana para preparación",
        nameEn: "Morning setup preparation access",
        price: 10,
        timeSlot: "14:00 – 15:00",
      },
      {
        nameCa: "Servei de neteja final integral",
        nameEs: "Servicio de limpieza final integral",
        nameEn: "End of party full cleaning service",
        price: 35,
      },
    ],
  },
  {
    slug: "divendres",
    titleCa: "Divendres i Vigílies",
    titleEs: "Viernes y Vísperas",
    titleEn: "Friday & Eve of Holidays",
    badgeCa: "MÉS DEMANAT",
    badgeEs: "MÁS DEMANDADO",
    badgeEn: "HIGH DEMAND",
    subtitleCa: "La millor manera de començar el cap de setmana celebrant",
    subtitleEs: "La mejor manera de empezar el fin de semana celebrando",
    subtitleEn: "The best way to kick off the weekend celebrating",
    hours: "17:00h – 21:00h (4h)",
    basePrice: 170,
    isPopular: true,
    isFeatured: true,
    descriptionCa: "Torn estrella per a celebracions d'aniversari escolars.",
    descriptionEs: "Turno estrella para celebraciones de cumpleaños escolares.",
    descriptionEn: "Top choice for after-school birthday celebrations.",
    includedCa: JSON.stringify([
      "Exclusivitat total de 220 m² de recinte privat",
      "Piscina de boles gegant, tirolina i psicomotricitat",
      "Altaveus Bluetooth d'alta fidelitat",
      "Nevera, congelador, microones i cafetera",
    ]),
    includedEs: JSON.stringify([
      "Exclusividad total de 220 m² de recinto privado",
      "Piscina de bolas gigante, tirolina y psicomotricidad",
      "Altavoces Bluetooth de alta fidelidad",
      "Nevera, congelador, microondas y cafetera",
    ]),
    includedEn: JSON.stringify([
      "Total exclusivity of 220 m² private venue",
      "Giant ball pit, zipline, and psychomotor playground",
      "High-fidelity Bluetooth sound system",
      "Full kitchen appliances (fridge, freezer, microwave)",
    ]),
    order: 2,
    extras: [
      {
        nameCa: "Accés anticipat per a decoració (1h abans)",
        nameEs: "Acceso anticipado para decoración (1h antes)",
        nameEn: "Early decoration access (1h prior)",
        price: 20,
        timeSlot: "16:00 – 17:00",
      },
      {
        nameCa: "Servei de neteja completa",
        nameEs: "Servicio de limpieza completa",
        nameEn: "Full post-party cleaning service",
        price: 35,
      },
    ],
  },
  {
    slug: "dissabte_mati",
    titleCa: "Dissabte Matí",
    titleEs: "Sábado Mañana",
    titleEn: "Saturday Morning",
    subtitleCa: "Franja lluminosa ideal per a berenars i aniversaris de matí",
    subtitleEs: "Franja luminosa ideal para fiestas de mañana",
    subtitleEn: "Bright morning slot ideal for early celebrations",
    hours: "10:00h – 14:00h (4h)",
    basePrice: 150,
    isPopular: false,
    isFeatured: false,
    descriptionCa: "Quatre hores completes de diversió matinal exclusiva.",
    descriptionEs: "Cuatro horas completas de diversión matinal exclusiva.",
    descriptionEn: "Four full hours of exclusive morning fun.",
    includedCa: JSON.stringify([
      "Accés privat a tot l'espai Esplúdic",
      "Zona de boles, laberint i tobogans",
      "Taules i cadires preparades",
      "Nevera, microones i office complet",
    ]),
    includedEs: JSON.stringify([
      "Acceso privado a todo el espacio Esplúdic",
      "Zona de bolas, laberinto y toboganes",
      "Mesas y sillas preparadas",
      "Nevera, microondas y office completo",
    ]),
    includedEn: JSON.stringify([
      "Private access to full Esplúdic playground",
      "Ball pit, labyrinth, and slides",
      "Complete tables and chairs set up",
      "Fridge, microwave, and full prep kitchen",
    ]),
    order: 3,
    extras: [
      {
        nameCa: "Hora extra ampliació",
        nameEs: "Hora extra ampliación",
        nameEn: "Extra hour extension",
        price: 35,
        timeSlot: "14:00 – 15:00",
      },
      {
        nameCa: "Servei de neteja",
        nameEs: "Servicio de limpieza",
        nameEn: "Cleaning service",
        price: 35,
      },
    ],
  },
  {
    slug: "dissabte_tarda",
    titleCa: "Dissabte Tarda",
    titleEs: "Sábado Tarde",
    titleEn: "Saturday Afternoon",
    badgeCa: "MOLT POPULAR",
    badgeEs: "MUY POPULAR",
    badgeEn: "MOST POPULAR",
    subtitleCa: "La franja perfecta per a grans festes amb tota la família",
    subtitleEs: "La franja perfecta para grandes fiestas familiares",
    subtitleEn: "The perfect afternoon slot for big family gatherings",
    hours: "17:00h – 21:00h (4h)",
    basePrice: 185,
    isPopular: true,
    isFeatured: true,
    descriptionCa: "La franja de major èxit per a festes multitudinàries d'aniversari.",
    descriptionEs: "La franja de mayor éxito para fiestas de cumpleaños.",
    descriptionEn: "Our most popular slot for birthday parties.",
    includedCa: JSON.stringify([
      "Tot el recinte Esplúdic reservat exclusivament",
      "Jocs infantils, piscina de boles i zona nadons",
      "Cafeteria lounge per a mares i pares",
      "Equip de so i il·luminació disco",
    ]),
    includedEs: JSON.stringify([
      "Todo el recinto Esplúdic reservado en exclusiva",
      "Juegos infantiles, piscina de bolas y zona bebés",
      "Cafetería lounge para madres y padres",
      "Equipo de sonido e iluminación disco",
    ]),
    includedEn: JSON.stringify([
      "Entire venue reserved exclusively for you",
      "Kids games, giant ball pit, and toddler soft zone",
      "Parents lounge with tables and seating",
      "Sound system and party lighting",
    ]),
    order: 4,
    extras: [
      {
        nameCa: "Accés extra al matí per a muntatge",
        nameEs: "Extra acceso por la mañana para montaje",
        nameEn: "Morning setup access",
        price: 20,
        timeSlot: "14:00 – 15:00",
      },
      {
        nameCa: "Servei de neteja exprés",
        nameEs: "Servicio de limpieza exprés",
        nameEn: "Express cleaning service",
        price: 35,
      },
    ],
  },
  {
    slug: "diumenge_mati",
    titleCa: "Diumenge Matí",
    titleEs: "Domingo Mañana",
    titleEn: "Sunday Morning",
    subtitleCa: "Ideal per a batejos, primer any i trobades familiars",
    subtitleEs: "Ideal para bautizos, primer año y reuniones familiares",
    subtitleEn: "Ideal for baptisms, 1st birthdays, and family reunions",
    hours: "10:00h – 14:00h (4h)",
    basePrice: 150,
    isPopular: false,
    isFeatured: false,
    descriptionCa: "Celebracions tranquil·les de matí amb llum natural.",
    descriptionEs: "Celebraciones tranquilas de mañana con luz natural.",
    descriptionEn: "Relaxed Sunday morning celebrations with natural light.",
    includedCa: JSON.stringify([
      "Ús exclusiu de tot el recinte",
      "Zona de jocs segura i adaptada",
      "Office equipat per a refrigeris",
      "Climatització fred/calor",
    ]),
    includedEs: JSON.stringify([
      "Uso exclusivo de todo el recinto",
      "Zona de juegos segura y adaptada",
      "Office equipado para refrigerios",
      "Climatización frío/calor",
    ]),
    includedEn: JSON.stringify([
      "Exclusive use of entire indoor venue",
      "Safe and certified children playground",
      "Fully equipped prep kitchen area",
      "Full climate control AC and heating",
    ]),
    order: 5,
    extras: [
      {
        nameCa: "Hora addicional (14h-15h)",
        nameEs: "Hora adicional (14h-15h)",
        nameEn: "Additional hour (14:00-15:00)",
        price: 35,
        timeSlot: "14:00 – 15:00",
      },
      {
        nameCa: "Neteja final",
        nameEs: "Limpieza final",
        nameEn: "Final cleanup",
        price: 35,
      },
    ],
  },
  {
    slug: "diumenge_tarda",
    titleCa: "Diumenge Tarda",
    titleEs: "Domingo Tarde",
    titleEn: "Sunday Afternoon",
    subtitleCa: "Tanca el cap de setmana amb una gran celebració",
    subtitleEs: "Cierra el fin de semana con una gran celebración",
    subtitleEn: "Wrap up the weekend with a wonderful party",
    hours: "17:00h – 21:00h (4h)",
    basePrice: 185,
    isPopular: false,
    isFeatured: false,
    descriptionCa: "Tarda completa de diumenge per a festes infantils.",
    descriptionEs: "Tarde completa de domingo para fiestas infantiles.",
    descriptionEn: "Full Sunday afternoon for children's birthdays.",
    includedCa: JSON.stringify([
      "220 m² en exclusiva sense interrupcions",
      "Piscina de boles gegant i psicomotricitat",
      "Zona menjador i cafeteria",
      "Neteja bàsica de cortesia",
    ]),
    includedEs: JSON.stringify([
      "220 m² en exclusiva sin interrupciones",
      "Piscina de bolas gigante y psicomotricidad",
      "Zona comedor y cafetería",
      "Limpieza básica de cortesía",
    ]),
    includedEn: JSON.stringify([
      "220 m² private venue with zero interruptions",
      "Giant ball pit and psychomotor soft zone",
      "Dining area and adult coffee lounge",
      "Basic courtesy tidy-up",
    ]),
    order: 6,
    extras: [
      {
        nameCa: "Servei de neteja integral",
        nameEs: "Servicio de limpieza integral",
        nameEn: "Full end-of-party cleaning",
        price: 35,
      },
    ],
  },
  {
    slug: "dia_sencer",
    titleCa: "Dia Sencer (Cap de Setmana)",
    titleEs: "Día Completo (Fin de Semana)",
    titleEn: "Full Day (Weekend VIP)",
    badgeCa: "EXPERIÈNCIA VIP",
    badgeEs: "EXPERIENCIA VIP",
    badgeEn: "VIP EXPERIENCE",
    subtitleCa: "11 hores consecutives d'ús privat total (de 10:00h a 21:00h)",
    subtitleEs: "11 horas consecutivas de uso privado total (de 10:00h a 21:00h)",
    subtitleEn: "11 consecutive hours of 100% private access (10:00 to 21:00)",
    hours: "10:00h – 21:00h (11h)",
    basePrice: 310,
    isPopular: false,
    isFeatured: true,
    descriptionCa: "L'experiència definitiva per a festes dobles, dinars i berenars familiars.",
    descriptionEs: "La experiencia definitiva para fiestas dobles, comidas y meriendas familiares.",
    descriptionEn: "The ultimate option for full-day family celebrations, lunches, and parties.",
    includedCa: JSON.stringify([
      "11 hores ininterrompudes de 10:00h a 21:00h",
      "Dinar i berenar a les mateixes instal·lacions",
      "Capacitat fins a 60 persones",
      "Piscina de boles, jocs i equip multimèdia",
    ]),
    includedEs: JSON.stringify([
      "11 horas ininterrumpidas de 10:00h a 21:00h",
      "Comida y merienda en las mismas instalaciones",
      "Capacidad hasta 60 personas",
      "Piscina de bolas, juegos y equipo multimedia",
    ]),
    includedEn: JSON.stringify([
      "11 continuous hours from 10:00 to 21:00",
      "Host both lunch and afternoon party in one venue",
      "Capacity for up to 60 guests",
      "Full ball pit, games, and multimedia system",
    ]),
    order: 7,
    extras: [
      {
        nameCa: "Servei de neteja VIP fi de festa",
        nameEs: "Servicio de limpieza VIP fin de fiesta",
        nameEn: "VIP end-of-day cleaning service",
        price: 50,
      },
    ],
  },
];

const SEED_GALLERY = [
  {
    title: "Zona de Joc Principal i Parc de Boles",
    category: "venue",
    imageUrl: "/images/hero.jpg",
    order: 1,
  },
  {
    title: "Festa d'Aniversari Infantil",
    category: "parties",
    imageUrl: "/images/party_kids_celebrate.jpg",
    order: 2,
  },
  {
    title: "Piscina de Boles i Jocs de Psicomotricitat",
    category: "playground",
    imageUrl: "/images/venue_play_park.jpg",
    order: 3,
  },
  {
    title: "Instal·lacions Diàfanes i Menjador",
    category: "venue",
    imageUrl: "/images/venue_interior_space.jpg",
    order: 4,
  },
  {
    title: "Zona Cafeteria i Pares",
    category: "venue",
    imageUrl: "/images/parents_coffee_zone.jpg",
    order: 5,
  },
  {
    title: "Ambient i Decoració de Festa",
    category: "parties",
    imageUrl: "/images/birthday_party_atmosphere.jpg",
    order: 6,
  },
];

async function main() {
  console.log("🌱 Starting Neon PostgreSQL database seed...");

  // 1. Seed Site Settings
  console.log("👉 Seeding Site Settings...");
  for (const s of SEED_SETTINGS) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value },
    });
  }

  // 2. Seed FAQs
  console.log("👉 Seeding FAQs (20+ Multilingual Questions)...");
  // Clear old default FAQs if any
  await prisma.faqItem.deleteMany({});
  for (const faq of SEED_FAQS) {
    await prisma.faqItem.create({
      data: {
        category: faq.category,
        order: faq.order,
        questionCa: faq.questionCa,
        questionEs: faq.questionEs,
        questionEn: faq.questionEn,
        answerCa: faq.answerCa,
        answerEs: faq.answerEs,
        answerEn: faq.answerEn,
        isActive: true,
      },
    });
  }

  // 3. Seed Pricing Packages & Extras
  console.log("👉 Seeding Pricing Packages & Extras...");
  for (const pkg of SEED_PACKAGES) {
    const existing = await prisma.pricingPackage.findUnique({
      where: { slug: pkg.slug },
    });

    let packageId: string;
    if (existing) {
      await prisma.pricingPackage.update({
        where: { id: existing.id },
        data: {
          titleCa: pkg.titleCa,
          titleEs: pkg.titleEs,
          titleEn: pkg.titleEn,
          badgeCa: pkg.badgeCa || null,
          badgeEs: pkg.badgeEs || null,
          badgeEn: pkg.badgeEn || null,
          subtitleCa: pkg.subtitleCa,
          subtitleEs: pkg.subtitleEs,
          subtitleEn: pkg.subtitleEn,
          hours: pkg.hours,
          basePrice: pkg.basePrice,
          isPopular: pkg.isPopular,
          isFeatured: pkg.isFeatured,
          descriptionCa: pkg.descriptionCa,
          descriptionEs: pkg.descriptionEs,
          descriptionEn: pkg.descriptionEn,
          includedCa: pkg.includedCa,
          includedEs: pkg.includedEs,
          includedEn: pkg.includedEn,
          order: pkg.order,
          isActive: true,
        },
      });
      packageId = existing.id;
      // Clear old extras for this package to re-seed cleanly
      await prisma.pricingExtra.deleteMany({ where: { packageId } });
    } else {
      const created = await prisma.pricingPackage.create({
        data: {
          slug: pkg.slug,
          titleCa: pkg.titleCa,
          titleEs: pkg.titleEs,
          titleEn: pkg.titleEn,
          badgeCa: pkg.badgeCa || null,
          badgeEs: pkg.badgeEs || null,
          badgeEn: pkg.badgeEn || null,
          subtitleCa: pkg.subtitleCa,
          subtitleEs: pkg.subtitleEs,
          subtitleEn: pkg.subtitleEn,
          hours: pkg.hours,
          basePrice: pkg.basePrice,
          isPopular: pkg.isPopular,
          isFeatured: pkg.isFeatured,
          descriptionCa: pkg.descriptionCa,
          descriptionEs: pkg.descriptionEs,
          descriptionEn: pkg.descriptionEn,
          includedCa: pkg.includedCa,
          includedEs: pkg.includedEs,
          includedEn: pkg.includedEn,
          order: pkg.order,
          isActive: true,
        },
      });
      packageId = created.id;
    }

    // Insert Extras
    for (const extra of pkg.extras) {
      await prisma.pricingExtra.create({
        data: {
          packageId,
          nameCa: extra.nameCa,
          nameEs: extra.nameEs,
          nameEn: extra.nameEn,
          price: extra.price,
          timeSlot: extra.timeSlot || null,
          isActive: true,
        },
      });
    }
  }

  // 4. Seed Gallery
  console.log("👉 Seeding Gallery Photos...");
  const galleryCount = await prisma.galleryPhoto.count();
  if (galleryCount === 0) {
    for (const photo of SEED_GALLERY) {
      await prisma.galleryPhoto.create({
        data: {
          title: photo.title,
          category: photo.category,
          imageUrl: photo.imageUrl,
          order: photo.order,
          isActive: true,
        },
      });
    }
  }

  console.log("✅ Neon PostgreSQL database seeded successfully with all FAQs, Packages, Settings & Gallery!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
