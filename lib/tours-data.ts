export type TourSlug =
  | "parque-tayrona"
  | "ciudad-perdida-trek"
  | "playa-cristal"
  | "minca-tour-dia-completo"
  | "velero-tayrona"
  | "buceo-padi-santa-marta"
  | "bahia-concha"
  | "playa-cinto";

export interface TourFAQ {
  q: string;
  a: string;
}

export interface TourLocale {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  includes: string[];
  tip: string;
  faqs: TourFAQ[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
}

export interface Tour {
  slug: TourSlug;
  img: string;
  duration: { es: string; en: string };
  difficulty: { es: string; en: string };
  distance: { es: string; en: string };
  price: string;
  priceNote: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
  es: TourLocale;
  en: TourLocale;
}

export const tours: Tour[] = [
  {
    slug: "parque-tayrona",
    img: "/tour-tayrona.jpg",
    duration: { es: "1 día", en: "1 day" },
    difficulty: { es: "Moderado", en: "Moderate" },
    distance: { es: "45 km de Santa Marta", en: "45 km from Santa Marta" },
    price: "COP 230.000",
    priceNote: {
      es: "Transporte + entrada + seguro + guía bilingüe. Almuerzo no incluido.",
      en: "Transport + entrance + insurance + bilingual guide. Lunch not included.",
    },
    highlights: {
      es: ["Transporte ida y vuelta en minibús", "Entrada al parque incluida", "Seguro de viaje incluido", "Guía bilingüe español/inglés", "Disponible todos los días"],
      en: ["Round-trip minibus transport", "Park entrance included", "Travel insurance included", "Bilingual guide Spanish/English", "Available every day"],
    },
    es: {
      name: "Parque Nacional Tayrona",
      tagline: "Selva, playas y vida salvaje — disponible todos los días",
      shortDescription:
        "El Parque Tayrona es lo que imaginas cuando piensas en el Caribe colombiano: selva tropical que cae directo al mar, playas de arena blanca y fauna increíble.",
      fullDescription: [
        "El Parque Nacional Natural Tayrona es uno de los destinos más emblemáticos de Colombia y el más visitado de la región Caribe. Situado a apenas 45 km de Santa Marta, concentra en un mismo espacio selva tropical, playas vírgenes, arrecifes de coral y una biodiversidad que no tiene paralelo en el país. Dentro del parque conviven más de 300 especies de aves, monos, iguanas, y en las aguas que lo bordean, tortugas marinas y barracudas.",
        "Nuestro tour desde La Guaca Hostel sale cada mañana en minibús directamente desde el hostal. No necesitas preocuparte por nada: nosotros coordinamos el transporte ida y vuelta, incluimos la entrada al parque y el seguro de viaje, y te acompañamos con un guía bilingüe que conoce los mejores senderos y las playas menos concurridas. Las más visitadas dentro del parque son Cabo San Juan del Guía y Arrecifes — ambas espectaculares, con su combinación de selva densa, agua azul y arena blanca.",
        "El tour es moderado en esfuerzo físico: el acceso a las playas más remotas requiere caminatas de entre 30 y 90 minutos por senderos de selva bien señalizados. Si prefieres menos caminata, existen opciones de acceso más cortas. En el parque hay restaurantes y tiendas donde puedes almorzar. Lo más recomendable es llegar temprano para evitar las horas de mayor calor y disfrutar las playas antes de que lleguen los grupos grandes.",
      ],
      tip: "Lleva protector solar, repelente, agua y ropa que puedas mojar. Los lunes el parque suele tener menos gente. El parque puede cerrar temporalmente en semana santa — consulta disponibilidad con nosotros.",
      includes: [
        "Transporte ida y vuelta en minibús",
        "Entrada al Parque Nacional Tayrona",
        "Seguro de viaje",
        "Guía bilingüe",
      ],
      faqs: [
        {
          q: "¿Cuándo es la mejor época para visitar el Parque Tayrona?",
          a: "El parque está abierto todo el año. La temporada seca (diciembre–abril) es la más popular: menos lluvia, mar más calmado y agua más cristalina. En temporada de lluvias (mayo–noviembre) hay menos turistas y el parque está más verde. Hay cierres temporales en febrero y noviembre por mantenimiento ambiental — avísanos tu fecha y te confirmamos disponibilidad.",
        },
        {
          q: "¿Está incluido el almuerzo?",
          a: "El almuerzo no está incluido. Dentro del parque hay varios restaurantes y pequeñas tiendas donde puedes comer a precios razonables. También puedes llevar tu propio almuerzo o snacks.",
        },
        {
          q: "¿Hay que tener buena condición física para el tour?",
          a: "Una condición física básica es suficiente. El camino a la mayoría de las playas implica caminatas de 30 a 90 minutos por sendero de selva. Si tienes problemas de movilidad, existen playas accesibles por camino corto — cuéntanos y te orientamos.",
        },
        {
          q: "¿Puedo bañarme en las playas del parque?",
          a: "En algunas playas el baño está permitido y en otras no, dependiendo de las corrientes. Arrecifes tiene las aguas más bonitas para contemplar, pero el baño puede estar restringido. Cabo San Juan del Guía y Playa Cristal son excelentes para nadar. El guía te indicará exactamente dónde es seguro.",
        },
      ],
      metaTitle: "Tour Parque Nacional Tayrona desde Santa Marta · La Guaca Hostel",
      metaDescription:
        "Tour de 1 día al Parque Tayrona desde Santa Marta. Transporte, entrada, seguro y guía bilingüe incluidos. Desde COP 230.000. Disponible todos los días.",
      h1: "Tour Parque Nacional Tayrona desde Santa Marta",
    },
    en: {
      name: "Tayrona National Park Tour",
      tagline: "Jungle, beaches and wildlife — available every day",
      shortDescription:
        "Tayrona National Park is the Colombian Caribbean at its best: tropical jungle meeting the sea, white-sand beaches and incredible wildlife.",
      fullDescription: [
        "Tayrona National Natural Park is one of Colombia's most iconic destinations and the most visited on the Caribbean coast. Located just 45 km from Santa Marta, it combines tropical jungle, pristine beaches, coral reefs and biodiversity that is unmatched in the country. Inside the park live over 300 bird species, monkeys, iguanas, and in the surrounding waters, sea turtles and barracuda.",
        "Our tour departs every morning by minibus directly from La Guaca Hostel. You don't have to worry about anything: we coordinate round-trip transport, include park entrance and travel insurance, and accompany you with a bilingual guide who knows the best trails and the less-crowded beaches. The most visited beaches inside the park are Cabo San Juan del Guía and Arrecifes — both spectacular, with their combination of dense jungle, blue water and white sand.",
        "The tour is moderate in physical effort: access to the more remote beaches requires hikes of 30 to 90 minutes on well-marked jungle trails. If you prefer less walking, shorter access options exist. There are restaurants and shops inside the park where you can have lunch. We recommend arriving early to avoid peak heat hours and enjoy the beaches before larger groups arrive.",
      ],
      tip: "Bring sunscreen, insect repellent, water and clothes you can get wet. Mondays tend to have fewer crowds. The park may close temporarily during Easter week — check availability with us.",
      includes: [
        "Round-trip minibus transport",
        "Tayrona National Park entrance",
        "Travel insurance",
        "Bilingual guide",
      ],
      faqs: [
        {
          q: "When is the best time to visit Tayrona National Park?",
          a: "The park is open year-round. The dry season (December–April) is most popular: less rain, calmer sea and clearer water. During rainy season (May–November) there are fewer tourists and the park is lush and green. There are brief closures in February and November for environmental maintenance — let us know your date and we'll confirm availability.",
        },
        {
          q: "Is lunch included?",
          a: "Lunch is not included. Inside the park there are several restaurants and small shops where you can eat at reasonable prices. You can also bring your own lunch or snacks.",
        },
        {
          q: "Do I need to be physically fit?",
          a: "Basic fitness is enough. Access to most beaches involves 30 to 90-minute hikes on jungle trails. If you have mobility issues, there are beaches with shorter access — just let us know and we'll advise.",
        },
        {
          q: "Can I swim at the park beaches?",
          a: "Swimming is allowed at some beaches and restricted at others, depending on currents. Arrecifes has stunning water to admire but swimming may be restricted. Cabo San Juan del Guía and Playa Cristal are great for swimming. Your guide will tell you exactly where it's safe.",
        },
      ],
      metaTitle: "Tayrona National Park Tour from Santa Marta · La Guaca Hostel",
      metaDescription:
        "1-day tour to Tayrona National Park from Santa Marta. Transport, entrance, insurance and bilingual guide included. From COP 230,000. Available every day.",
      h1: "Tayrona National Park Tour from Santa Marta",
    },
  },

  {
    slug: "ciudad-perdida-trek",
    img: "/tour-ciudad-perdida.jpg",
    duration: { es: "4 o 5 días", en: "4 or 5 days" },
    difficulty: { es: "Difícil", en: "Hard" },
    distance: { es: "Sierra Nevada de Santa Marta", en: "Sierra Nevada de Santa Marta" },
    price: "COP 2.150.000",
    priceNote: {
      es: "Todo incluido: transporte, alojamiento en camas, todas las comidas, agua purificada, guía bilingüe.",
      en: "All inclusive: transport, bed accommodation, all meals, purified water, bilingual guide.",
    },
    highlights: {
      es: ["Ciudad Teyuna (más de 650 años de historia)", "Alojamiento en camas con mosquitero", "Todas las comidas incluidas", "Agua purificada, frutas y snacks", "Guía bilingüe certificado", "Opción vegana/vegetariana disponible"],
      en: ["Teyuna City (650+ years of history)", "Bed accommodation with mosquito net", "All meals included", "Purified water, fruits and snacks", "Certified bilingual guide", "Vegan/vegetarian option available"],
    },
    es: {
      name: "Ciudad Perdida Trek — El Legendario",
      tagline: "4 o 5 días en la selva de la Sierra Nevada",
      shortDescription:
        "Una de las experiencias más épicas de Sudamérica: caminar hasta la ciudad indígena Teyuna, construida hace más de 650 años en el corazón de la Sierra Nevada.",
      fullDescription: [
        "El trek a Ciudad Perdida es, para muchos viajeros, la experiencia cumbre de su paso por Colombia. La ciudad indígena Teyuna — conocida popularmente como Ciudad Perdida — fue construida por la civilización Tairona alrededor del año 800 d.C., unos 650 años antes de Machu Picchu. Perdida en la selva de la Sierra Nevada de Santa Marta durante siglos, fue redescubierta en los años 70. Hoy es un lugar de enorme valor arqueológico y espiritual, todavía habitado por los pueblos indígenas Kogi, Arhuaco y Wiwa.",
        "El trek dura 4 o 5 días y cubre aproximadamente 44 km de camino de ida y vuelta por selva cerrada, ríos y ascensos de piedra. Es exigente físicamente — espera caminar entre 6 y 8 horas diarias — pero está al alcance de cualquier viajero con buena condición física y motivación. La recompensa al llegar a las terrazas circulares de Teyuna, emergiendo desde la niebla de la selva, es una de esas imágenes que no se olvidan.",
        "Nuestro tour incluye absolutamente todo: transporte desde el hostal hasta el punto de inicio del trek, alojamiento en campamentos con camas y mosquitero, todas las comidas (opción vegana y vegetariana disponible), agua purificada, frutas y snacks durante la caminata, y guía bilingüe certificado. Los grupos son pequeños para garantizar una experiencia más personal y segura. Coordinar el trek desde La Guaca Hostel tiene una ventaja: nos conocemos el camino, los guías y las condiciones del tiempo. Te preparamos para que llegues con todo bajo control.",
      ],
      tip: "Necesitas condición física real: caminar entre 6 y 8 horas por día durante 4 días. Lleva botas o zapatillas de senderismo con buen agarre, repelente fuerte y ropa ligera de secado rápido. El calor y la humedad de la selva son intensos. El peso de tu mochila hará la diferencia — menos es más.",
      includes: [
        "Transporte ida y vuelta al punto de inicio",
        "Alojamiento en camas con mosquitero",
        "Todas las comidas (4 días)",
        "Agua purificada incluida",
        "Frutas y snacks durante la caminata",
        "Guía bilingüe certificado",
        "Opción vegana/vegetariana",
      ],
      faqs: [
        {
          q: "¿Qué condición física se necesita para el trek?",
          a: "El trek es exigente: caminarás entre 6 y 8 horas por día durante 4 días en terreno de selva con pendientes pronunciadas y cruce de ríos. Necesitas buena condición física, no necesariamente de atleta, pero sí estar acostumbrado a caminar largas distancias. Si tienes dudas sobre tu condición, cuéntanos y te ayudamos a evaluar.",
        },
        {
          q: "¿El precio incluye realmente todo?",
          a: "Sí, el precio es todo incluido: transporte, alojamiento en camas (no en colchonetas en el suelo), todas las comidas (desayuno, almuerzo, cena y snacks), agua purificada ilimitada, frutas y guía bilingüe. Solo necesitas llevar dinero para bebidas extras o souvenirs en los campamentos.",
        },
        {
          q: "¿Cuántas personas van en el grupo?",
          a: "Los grupos son pequeños, generalmente entre 6 y 12 personas. Esto garantiza una mejor experiencia, más atención del guía y mayor seguridad en los puntos más técnicos del camino.",
        },
        {
          q: "¿Es seguro el trek?",
          a: "Sí. Ciudad Perdida fue considerada peligrosa en décadas pasadas, pero hoy es completamente segura. Está bajo protección del SNSM y los grupos van siempre con guías certificados y autorizados. Las fuerzas de seguridad colombianas tienen presencia permanente en la zona.",
        },
      ],
      metaTitle: "Ciudad Perdida Trek Colombia · 4-5 Días Sierra Nevada desde Santa Marta",
      metaDescription:
        "Trek a Ciudad Perdida: 4-5 días en la Sierra Nevada. Todo incluido: transporte, alojamiento, comidas, agua y guía bilingüe. Desde COP 2.150.000.",
      h1: "Ciudad Perdida Trek — 4 o 5 Días en la Sierra Nevada",
    },
    en: {
      name: "Lost City Trek — The Legendary Route",
      tagline: "4 or 5 days deep in the Sierra Nevada jungle",
      shortDescription:
        "One of South America's most epic experiences: trekking to the ancient indigenous city of Teyuna, built over 650 years ago in the heart of the Sierra Nevada.",
      fullDescription: [
        "The Lost City trek is, for many travelers, the highlight of their time in Colombia. The indigenous city of Teyuna — popularly known as Ciudad Perdida or the Lost City — was built by the Tairona civilization around 800 AD, some 650 years before Machu Picchu. Hidden in the Sierra Nevada jungle for centuries, it was rediscovered in the 1970s. Today it is a place of enormous archaeological and spiritual significance, still inhabited by the indigenous Kogi, Arhuaco and Wiwa peoples.",
        "The trek takes 4 or 5 days and covers approximately 44 km round trip through dense jungle, river crossings and stone staircases. It is physically demanding — expect to walk 6 to 8 hours per day — but accessible to any traveler with good fitness and motivation. The reward upon reaching Teyuna's circular terraces, emerging from the jungle mist, is one of those images that stays with you forever.",
        "Our tour includes absolutely everything: transport from the hostel to the trailhead, accommodation in camps with beds and mosquito nets, all meals (vegan/vegetarian option available), purified water, fruits and snacks during the hike, and a certified bilingual guide. Groups are kept small to ensure a more personal and safe experience. Booking the trek through La Guaca Hostel has a real advantage: we know the trail, the guides and the conditions. We'll prepare you so you arrive with everything under control.",
      ],
      tip: "You need real physical fitness: hiking 6-8 hours per day for 4 days in jungle terrain. Bring hiking boots or trail shoes with good grip, strong insect repellent and lightweight quick-dry clothing. Heat and humidity in the jungle are intense. The weight of your pack will make a big difference — less is more.",
      includes: [
        "Round-trip transport to trailhead",
        "Bed accommodation with mosquito net",
        "All meals (4 days)",
        "Unlimited purified water",
        "Fruits and snacks during the hike",
        "Certified bilingual guide",
        "Vegan/vegetarian option",
      ],
      faqs: [
        {
          q: "How fit do I need to be for the trek?",
          a: "The trek is demanding: you'll walk 6-8 hours per day for 4 days on jungle terrain with steep sections and river crossings. You need good fitness — not athlete-level, but you should be comfortable walking long distances. If you have doubts about your fitness, let us know and we'll help you assess.",
        },
        {
          q: "Does the price really include everything?",
          a: "Yes, the price is truly all-inclusive: transport, accommodation in actual beds (not ground mats), all meals (breakfast, lunch, dinner and snacks), unlimited purified water, fruits and bilingual guide. You only need money for extra drinks or souvenirs at the camps.",
        },
        {
          q: "How many people are in the group?",
          a: "Groups are kept small, typically between 6 and 12 people. This ensures a better experience, more attention from the guide and greater safety on the more technical sections of the trail.",
        },
        {
          q: "Is the trek safe?",
          a: "Yes. The Lost City was considered dangerous in past decades, but today it is completely safe. It is protected by the SNSM and groups always travel with certified, authorized guides. Colombian security forces have a permanent presence in the area.",
        },
      ],
      metaTitle: "Lost City Trek Colombia · 4-5 Days Sierra Nevada from Santa Marta",
      metaDescription:
        "Lost City trek: 4-5 days in the Sierra Nevada. All inclusive: transport, accommodation, meals, water and bilingual guide. From COP 2,150,000.",
      h1: "Lost City Trek — 4 or 5 Days in the Sierra Nevada",
    },
  },

  {
    slug: "playa-cristal",
    img: "/tour-playa-cristal.png",
    duration: { es: "1 día", en: "1 day" },
    difficulty: { es: "Fácil", en: "Easy" },
    distance: { es: "Parque Tayrona", en: "Tayrona National Park" },
    price: "COP 195.000",
    priceNote: {
      es: "Transporte + entrada + seguro + lancha rápida. Almuerzo no incluido.",
      en: "Transport + entrance + insurance + speedboat. Lunch not included.",
    },
    highlights: {
      es: ["Minibús ida y vuelta desde el hostal", "Entrada al Parque Tayrona incluida", "Seguro de viaje incluido", "Lancha rápida a la playa", "Agua cristalina y arrecifes de coral"],
      en: ["Round-trip minibus from hostel", "Tayrona park entrance included", "Travel insurance included", "Speedboat to the beach", "Crystal clear water and coral reefs"],
    },
    es: {
      name: "Playa Cristal",
      tagline: "El mejor punto de snorkel del Caribe colombiano",
      shortDescription:
        "Playa Cristal es la joya del Parque Tayrona: aguas tan cristalinas que se ven los arrecifes de coral desde la orilla, llenas de vida marina y colores que no se olvidan.",
      fullDescription: [
        "Playa Cristal es, por consenso, una de las playas más bonitas del Caribe colombiano. Está dentro del Parque Nacional Tayrona, lo que garantiza que sus aguas se mantienen protegidas: cristalinas, con visibilidad perfecta y arrecifes de coral a pocos metros de la orilla. La playa en sí es pequeña e íntima — a diferencia de Cabo San Juan o Arrecifes, no la encontrarás llena de hamacas y vendedores, sino con el silencio y la calma que uno busca cuando imagina el Caribe perfecto.",
        "El acceso a Playa Cristal es en lancha rápida desde la costa, lo que añade un componente de aventura al tour y garantiza que solo llegan quienes hacen el esfuerzo de buscarla. Nuestro tour incluye el minibús desde el hostal hasta el punto de embarque, la lancha rápida de ida y vuelta, la entrada al parque y el seguro de viaje. Una vez en la playa, el tiempo es tuyo: snorkel entre los corales, nadar en aguas tranquilas o simplemente quedarte mirando cómo cambia el color del agua.",
        "El snorkel en Playa Cristal es espectacular incluso para quienes nunca lo han hecho. Los arrecifes están a poca profundidad y las corrientes son mínimas, lo que hace que sea perfectamente accesible para principiantes. Si tienes tu propio equipo de snorkel, llévalo — si no, en el punto de embarque puedes alquilar. El fondo marino de Playa Cristal reúne peces de colores, corales, estrellas de mar y esponjas que no tienen nada que envidiarle a destinos de snorkel más famosos.",
      ],
      tip: "Si tienes tu propio equipo de snorkel, llévalo. El agua es tranquila y perfecta para nadar. Lleva protector solar biodegradable para no dañar los corales. En el punto de embarque hay un pequeño restaurante para el almuerzo.",
      includes: [
        "Transporte en minibús ida y vuelta",
        "Entrada al Parque Nacional Tayrona",
        "Seguro de viaje",
        "Lancha rápida a Playa Cristal",
      ],
      faqs: [
        {
          q: "¿Se puede hacer snorkel sin experiencia previa?",
          a: "Perfectamente. El agua en Playa Cristal es tranquila, con poca corriente y los arrecifes están a poca profundidad. Es ideal para principiantes. No necesitas experiencia ni certificación de buceo para disfrutar el snorkel aquí.",
        },
        {
          q: "¿Está incluido el equipo de snorkel?",
          a: "El equipo de snorkel no está incluido en el tour, pero se puede alquilar en el punto de embarque a precio razonable. Si tienes el tuyo propio, llévalo.",
        },
        {
          q: "¿Cuánto tiempo se pasa en la playa?",
          a: "Normalmente entre 3 y 4 horas en la playa, dependiendo de la hora de llegada y las condiciones del mar. La lancha regresa en la tarde. El guía te indicará el horario exacto en el tour.",
        },
        {
          q: "¿La playa puede estar llena?",
          a: "Playa Cristal recibe menos visitantes que otras playas de Tayrona porque el acceso es en lancha. Nunca está masificada. En temporada alta (diciembre–enero, semana santa) hay más gente, pero siempre con espacio suficiente.",
        },
      ],
      metaTitle: "Tour Playa Cristal Santa Marta · Snorkel Caribe Colombiano",
      metaDescription:
        "Tour a Playa Cristal en lancha rápida desde Santa Marta. Aguas cristalinas, coral y snorkel en el Parque Tayrona. Transporte + entrada + lancha. COP 195.000.",
      h1: "Tour Playa Cristal — Snorkel en el Caribe Colombiano",
    },
    en: {
      name: "Playa Cristal",
      tagline: "The best snorkel spot on the Colombian Caribbean",
      shortDescription:
        "Playa Cristal is Tayrona's gem: water so clear you can see the coral reefs from the shore, teeming with marine life and colors you won't forget.",
      fullDescription: [
        "Playa Cristal is, by consensus, one of the most beautiful beaches on the Colombian Caribbean. It sits inside Tayrona National Park, which ensures its waters remain protected: crystal clear, with perfect visibility and coral reefs just metres from the shore. The beach itself is small and intimate — unlike Cabo San Juan or Arrecifes, you won't find it packed with hammocks and vendors, but with the quiet and calm that people imagine when they picture the perfect Caribbean beach.",
        "Access to Playa Cristal is by speedboat from the coast, which adds an element of adventure to the tour and ensures only those who make the effort to find it actually get there. Our tour includes the minibus from the hostel to the embarkation point, the speedboat round trip, park entrance and travel insurance. Once on the beach, your time is your own: snorkel through the coral, swim in calm waters or simply watch how the color of the sea shifts through the day.",
        "Snorkeling at Playa Cristal is spectacular even for first-timers. The reefs are at shallow depth and currents are minimal, making it perfectly accessible for beginners. If you have your own snorkel gear, bring it — if not, you can rent at the embarkation point. The seabed at Playa Cristal hosts colorful fish, corals, starfish and sponges that rival far more famous snorkel destinations.",
      ],
      tip: "Bring your own snorkel gear if you have it. The water is calm and perfect for swimming. Use reef-safe biodegradable sunscreen to protect the coral. There's a small restaurant at the embarkation point for lunch.",
      includes: [
        "Round-trip minibus transport",
        "Tayrona National Park entrance",
        "Travel insurance",
        "Speedboat to Playa Cristal",
      ],
      faqs: [
        {
          q: "Can I snorkel without any prior experience?",
          a: "Absolutely. The water at Playa Cristal is calm, with minimal current and shallow reefs. It's ideal for beginners. You don't need any experience or diving certification to enjoy snorkeling here.",
        },
        {
          q: "Is snorkel equipment included?",
          a: "Snorkel equipment is not included in the tour price, but it can be rented at the embarkation point at a reasonable price. If you have your own gear, bring it.",
        },
        {
          q: "How long do we spend at the beach?",
          a: "Normally between 3 and 4 hours at the beach, depending on arrival time and sea conditions. The speedboat returns in the afternoon. Your guide will give you the exact schedule on the day.",
        },
        {
          q: "Will the beach be crowded?",
          a: "Playa Cristal gets fewer visitors than other Tayrona beaches because access is by speedboat. It's never overcrowded. In high season (December–January, Easter) there are more people, but always with plenty of space.",
        },
      ],
      metaTitle: "Playa Cristal Snorkel Tour Santa Marta · Colombian Caribbean",
      metaDescription:
        "Speedboat tour to Playa Cristal from Santa Marta. Crystal clear water, coral reefs and snorkeling in Tayrona. Transport + entrance + boat. COP 195,000.",
      h1: "Playa Cristal Tour — Snorkeling on the Colombian Caribbean",
    },
  },

  {
    slug: "minca-tour-dia-completo",
    img: "/tour-minca.webp",
    duration: { es: "1 día completo", en: "Full day" },
    difficulty: { es: "Fácil", en: "Easy" },
    distance: { es: "20 km de Santa Marta", en: "20 km from Santa Marta" },
    price: "COP 195.000",
    priceNote: {
      es: "Transporte + almuerzo gourmet incluidos.",
      en: "Round-trip transport + gourmet lunch included.",
    },
    highlights: {
      es: ["Cascada escondida con baño incluido", "Taller de chocolate artesanal", "Recorrido por finca cafetera", "Visita a casa de bambú", "Avistamiento de aves", "Almuerzo gourmet incluido"],
      en: ["Hidden waterfall swim included", "Chocolate-making workshop", "Coffee farm tour", "Bamboo house visit", "Birdwatching", "Gourmet lunch included"],
    },
    es: {
      name: "Minca — Tour Día Completo",
      tagline: "Cascadas, cafetales, chocolate y aves",
      shortDescription:
        "Minca es el antídoto perfecto al calor caribeño: a solo 20 km de Santa Marta y 600 metros de altura, un pueblo de montaña rodeado de naturaleza, cafetales y cascadas.",
      fullDescription: [
        "Minca es uno de esos secretos que los que ya lo conocen no quieren que se sepa mucho. A solo 20 km de Santa Marta y unos 600 metros de altitud, la temperatura baja entre 8 y 10 grados con respecto a la costa — alivio inmediato después de días de calor caribeño. El pueblo en sí es pequeño y tranquilo, rodeado de fincas cafeteras, selva tropical y ríos que bajan de la Sierra Nevada.",
        "Nuestro tour de día completo a Minca es uno de los más completos y mejor valorados que ofrecemos. El día incluye visita a una cascada escondida con baño incluido, taller práctico de chocolate artesanal donde aprenderás todo el proceso del cacao, recorrido por una finca cafetera con degustación, visita a una casa de bambú tradicional y avistamiento de aves en uno de los corredores de migración más ricos de Suramérica. Minca es el punto con mayor diversidad de aves en toda la región Caribe de Colombia.",
        "El almuerzo gourmet está incluido — preparado con ingredientes locales y con una presentación que sorprende para estar en medio de la montaña. El transporte ida y vuelta desde el hostal también está incluido. El tour es adecuado para todo tipo de viajeros: familias, mochileros, nómadas digitales que quieren desconectar un día y cualquiera que quiera ver Colombia más allá de las playas.",
      ],
      tip: "Lleva ropa ligera pero una segunda capa para la tarde (en Minca refresca). La cascada es parte del tour — no se puede visitar por separado. El almuerzo gourmet es en una finca local y es una de las partes favoritas del tour para la mayoría de los viajeros.",
      includes: [
        "Transporte ida y vuelta desde el hostal",
        "Visita a cascada escondida con baño",
        "Taller de chocolate artesanal",
        "Recorrido por finca cafetera",
        "Visita a casa de bambú",
        "Avistamiento de aves",
        "Almuerzo gourmet",
      ],
      faqs: [
        {
          q: "¿El tour de Minca es apto para familias con niños?",
          a: "Sí, es uno de los tours más familiares que ofrecemos. Las actividades son accesibles para niños de 6 años en adelante. La cascada requiere una caminata corta, pero no es difícil. El taller de chocolate suele ser lo favorito de los más pequeños.",
        },
        {
          q: "¿Qué ropa debo llevar para Minca?",
          a: "Ropa ligera y cómoda para las actividades del día. Lleva una segunda capa para la tarde porque en Minca refresca. Para la cascada, ropa de baño o ropa que puedas mojar. Calzado con buen agarre para los senderos.",
        },
        {
          q: "¿El almuerzo realmente está incluido?",
          a: "Sí, el almuerzo gourmet preparado en finca local está completamente incluido en el precio del tour. Es una comida de calidad con ingredientes frescos de la zona — no un almuerzo de tour genérico.",
        },
        {
          q: "¿Se puede ver Minca por libre sin el tour?",
          a: "Sí, puedes ir a Minca por tu cuenta en colectivo desde la plaza de Santa Marta (muy económico). Sin embargo, nuestro tour incluye acceso a la cascada privada, el taller de chocolate y la finca cafetera, que no se pueden visitar sin guía o reserva previa.",
        },
      ],
      metaTitle: "Tour Minca Día Completo desde Santa Marta · Cascadas y Cafetales",
      metaDescription:
        "Tour a Minca con cascada, taller de chocolate, finca cafetera, avistamiento de aves y almuerzo gourmet incluido. Desde COP 195.000. Desde La Guaca Hostel.",
      h1: "Tour Minca Día Completo — Cascadas, Chocolate y Cafetales",
    },
    en: {
      name: "Minca — Full Day Tour",
      tagline: "Waterfalls, coffee, chocolate and birdwatching",
      shortDescription:
        "Minca is the perfect antidote to Caribbean heat: just 20 km from Santa Marta and 600 metres above sea level, a mountain village surrounded by nature, coffee farms and waterfalls.",
      fullDescription: [
        "Minca is one of those places that those who've been there hope doesn't get too famous. Just 20 km from Santa Marta and around 600 metres in altitude, the temperature drops 8 to 10 degrees compared to the coast — immediate relief after days of Caribbean heat. The village itself is small and quiet, surrounded by coffee farms, tropical jungle and rivers cascading down from the Sierra Nevada.",
        "Our full day tour to Minca is one of the most complete and highest-rated tours we offer. The day includes a visit to a hidden waterfall with a swim, a hands-on chocolate-making workshop where you'll learn the full cacao process, a tour of a coffee farm with tasting, a visit to a traditional bamboo house and birdwatching in one of South America's richest migratory bird corridors. Minca has the highest bird diversity of any location on Colombia's entire Caribbean coast.",
        "A gourmet lunch is included — prepared with local ingredients and plated to a standard that surprises for being deep in the mountains. Round-trip transport from the hostel is also included. The tour suits all types of travelers: families, backpackers, digital nomads who want to disconnect for a day, and anyone who wants to see Colombia beyond the beaches.",
      ],
      tip: "Wear light clothing but pack an extra layer for the afternoon (Minca cools down). The waterfall is part of the tour — it cannot be visited separately. The gourmet lunch at a local farm is most travelers' favorite part of the day.",
      includes: [
        "Round-trip transport from hostel",
        "Hidden waterfall visit and swim",
        "Chocolate-making workshop",
        "Coffee farm tour with tasting",
        "Bamboo house visit",
        "Birdwatching",
        "Gourmet lunch",
      ],
      faqs: [
        {
          q: "Is the Minca tour suitable for families with children?",
          a: "Yes, it's one of our most family-friendly tours. Activities are accessible for children aged 6 and up. The waterfall requires a short hike, but it's not difficult. The chocolate workshop tends to be kids' favorite part.",
        },
        {
          q: "What should I wear for Minca?",
          a: "Light, comfortable clothing for the day's activities. Pack an extra layer for the afternoon as Minca cools down. Bring swimwear or clothes you can get wet for the waterfall. Shoes with good grip for the trails.",
        },
        {
          q: "Is the gourmet lunch really included?",
          a: "Yes, a gourmet lunch prepared at a local farm is fully included in the tour price. It's a quality meal with fresh local ingredients — not a generic tour lunch.",
        },
        {
          q: "Can I visit Minca on my own without the tour?",
          a: "Yes, you can take a collective taxi to Minca from Santa Marta's main square (very affordable). However, our tour includes access to the private waterfall, the chocolate workshop and the coffee farm, which cannot be visited without a guide or prior booking.",
        },
      ],
      metaTitle: "Minca Full Day Tour from Santa Marta · Waterfalls & Coffee Farms",
      metaDescription:
        "Full day tour to Minca with waterfall, chocolate workshop, coffee farm, birdwatching and gourmet lunch included. From COP 195,000. From La Guaca Hostel.",
      h1: "Minca Full Day Tour — Waterfalls, Chocolate & Coffee",
    },
  },

  {
    slug: "velero-tayrona",
    img: "/tour-velero.jpg",
    duration: { es: "1 día", en: "1 day" },
    difficulty: { es: "Fácil", en: "Easy" },
    distance: { es: "Sale desde La Marina", en: "Departs from La Marina" },
    price: "COP 236.000",
    priceNote: {
      es: "Almuerzo + agua + frutas + snorkel + paddle board incluidos. Taxi a La Marina no incluido (~COP 15.000).",
      en: "Lunch + water + fruits + snorkel + paddleboard included. Taxi to La Marina not included (~COP 15,000).",
    },
    highlights: {
      es: ["Navegación en velero por el Caribe", "Bahía Concha y playas de Tayrona desde el mar", "Paddle board incluido", "Snorkel en arrecifes incluido", "Almuerzo + agua + frutas + snacks a bordo", "Atardecer desde cubierta"],
      en: ["Sailing on the Caribbean Sea", "Bahía Concha and Tayrona beaches from the sea", "Paddleboard included", "Snorkeling at reefs included", "Lunch + water + fruits + snacks on board", "Sunset from the deck"],
    },
    es: {
      name: "Velero por Tayrona Beach",
      tagline: "Navega el Caribe con paddle board y snorkel incluido",
      shortDescription:
        "La forma más espectacular de ver el Parque Tayrona: desde el mar, en velero, con el Caribe colombiano abierto frente a ti y las playas del parque al fondo.",
      fullDescription: [
        "Ver el Parque Tayrona desde la tierra es increíble. Verlo desde el mar es otra dimensión. Este tour en velero te lleva desde La Marina — el puerto deportivo de Santa Marta — a navegar por la costa del parque, con paradas en Bahía Concha y las playas más bonitas vistas desde el agua. La perspectiva desde cubierta, con la selva cayendo directo al mar y el Caribe de fondo, es una de esas imágenes que definitivamente se comparte.",
        "El velero sale en la mañana y regresa al atardecer. A bordo hay equipo de paddle board y snorkel disponible para todos los pasajeros — las aguas de Bahía Concha tienen visibilidad perfecta para explorar el fondo marino. El almuerzo está incluido a bordo, preparado por el equipo del velero con ingredientes frescos. También hay agua, frutas y snacks disponibles durante todo el día. Los grupos son pequeños para garantizar espacio a bordo y una experiencia genuina.",
        "El taxi desde La Guaca Hostel hasta La Marina cuesta aproximadamente COP 15.000 y no está incluido en el precio del tour — pero lo coordinamos desde la recepción del hostal. Si llegas el día anterior, cuéntanos a qué hora quieres salir y te organizamos el taxi para que todo fluya sin estrés.",
      ],
      tip: "El taxi desde el hostal hasta La Marina cuesta aproximadamente COP 15.000. Coordínalo con recepción la noche anterior. Lleva protector solar, gafas de sol y una chaqueta ligera para la brisa marina. En día de viento fuerte el tour puede cancelarse por seguridad.",
      includes: [
        "Navegación en velero todo el día",
        "Parada en Bahía Concha y playas de Tayrona",
        "Equipo de paddle board",
        "Equipo de snorkel",
        "Almuerzo a bordo",
        "Agua, frutas y snacks todo el día",
      ],
      faqs: [
        {
          q: "¿Se puede marear en el velero?",
          a: "Depende de las condiciones del mar ese día. El Caribe frente a Santa Marta suele ser tranquilo, pero en días de viento fuerte puede haber algo de movimiento. Si eres propenso al mareo, toma una pastilla preventiva la noche anterior. El equipo del velero siempre lleva bolsas por si acaso.",
        },
        {
          q: "¿Hay experiencia náutica necesaria para el paddle board?",
          a: "No. El paddle board que se usa en las bahías de Tayrona no requiere experiencia previa. Las aguas son tranquilas y el equipo del velero te da instrucciones básicas antes de entrar al agua.",
        },
        {
          q: "¿Por qué el taxi no está incluido si otros tours incluyen transporte?",
          a: "La Marina es un puerto deportivo que está en dirección contraria al parque — incluir el taxi encarecería el tour de forma desproporcionada. Desde el hostal te coordinamos el taxi para que sea fácil y económico.",
        },
        {
          q: "¿El tour sale con mal tiempo?",
          a: "El velero sale con todas las condiciones meteorológicas normales del Caribe, incluyendo algo de viento. En casos de viento muy fuerte o mal mar, el tour se puede cancelar o reprogramar por seguridad. Te notificamos con anticipación si es el caso.",
        },
      ],
      metaTitle: "Tour en Velero por Tayrona · Sailing Santa Marta Colombia",
      metaDescription:
        "Navega el Parque Tayrona en velero. Almuerzo, paddle board, snorkel y atardecer incluidos. Sale desde La Marina. Desde COP 236.000. La Guaca Hostel.",
      h1: "Tour en Velero por Tayrona — Sail the Colombian Caribbean",
    },
    en: {
      name: "Sailing Boat Tour — Tayrona Beach",
      tagline: "Sail the Caribbean with paddleboard & snorkel included",
      shortDescription:
        "The most spectacular way to see Tayrona National Park: from the sea, on a sailboat, with the Colombian Caribbean open in front of you and the park's beaches in the background.",
      fullDescription: [
        "Seeing Tayrona National Park from land is incredible. Seeing it from the sea is a different dimension entirely. This sailing tour takes you from La Marina — Santa Marta's marina — to sail along the park's coastline, with stops at Bahía Concha and the most beautiful beaches viewed from the water. The perspective from the deck, with jungle falling directly into the sea and the Caribbean stretching behind you, is one of those images that definitely gets shared.",
        "The sailboat departs in the morning and returns at sunset. On board there is paddleboard and snorkel equipment available for all passengers — the waters of Bahía Concha have perfect visibility for exploring the seabed. Lunch is included on board, prepared by the boat's crew with fresh ingredients. Water, fruits and snacks are available throughout the day. Groups are kept small to ensure space on board and a genuine experience.",
        "The taxi from La Guaca Hostel to La Marina costs approximately COP 15,000 and is not included in the tour price — but we coordinate it from the hostel's reception. If you're arriving the night before, let us know what time you want to leave and we'll arrange the taxi so everything runs smoothly.",
      ],
      tip: "The taxi from the hostel to La Marina costs approximately COP 15,000. Coordinate it with reception the night before. Bring sunscreen, sunglasses and a light jacket for the sea breeze. In strong wind conditions the tour may be cancelled for safety.",
      includes: [
        "Full day sailing on the sailboat",
        "Stop at Bahía Concha and Tayrona beaches",
        "Paddleboard equipment",
        "Snorkel equipment",
        "Lunch on board",
        "Water, fruits and snacks all day",
      ],
      faqs: [
        {
          q: "Could I get seasick on the sailboat?",
          a: "It depends on sea conditions that day. The Caribbean off Santa Marta is usually calm, but on windy days there may be some movement. If you're prone to seasickness, take a preventive pill the night before. The boat crew always has bags just in case.",
        },
        {
          q: "Do I need paddleboard experience?",
          a: "No. The paddleboarding takes place in the calm bays of Tayrona and requires no prior experience. The boat crew gives you basic instructions before you get in the water.",
        },
        {
          q: "Why isn't the taxi included if other tours include transport?",
          a: "La Marina is a marina in the opposite direction from the park — including the taxi would disproportionately increase the tour price. We coordinate the taxi from the hostel to make it easy and affordable.",
        },
        {
          q: "Does the tour run in bad weather?",
          a: "The sailboat goes out in all normal Caribbean weather conditions, including some wind. In cases of very strong wind or rough seas, the tour may be cancelled or rescheduled for safety. We'll notify you in advance if that's the case.",
        },
      ],
      metaTitle: "Sailing Tour Tayrona Colombia · Santa Marta Sailboat Trip",
      metaDescription:
        "Sail Tayrona National Park on a sailboat. Lunch, paddleboard, snorkel and sunset included. Departs La Marina. From COP 236,000. La Guaca Hostel.",
      h1: "Sailing Tour Tayrona — Sail the Colombian Caribbean",
    },
  },

  {
    slug: "buceo-padi-santa-marta",
    img: "/tour-buceo.png",
    duration: { es: "Medio día", en: "Half day" },
    difficulty: { es: "Moderado", en: "Moderate" },
    distance: { es: "Sale desde La Marina", en: "Departs from La Marina" },
    price: "COP 230.000",
    priceNote: {
      es: "Fundive 2 inmersiones. Minicurso PADI: COP 280.000. Entrada a La Marina (COP 11.000) no incluida.",
      en: "Fundive 2 dives. PADI Minicourse: COP 280,000. Marina entry fee (COP 11,000) not included.",
    },
    highlights: {
      es: ["2 inmersiones a máximo 9 metros", "Equipo de buceo completo incluido", "Instructor PADI certificado bilingüe", "Transporte en lancha desde La Marina", "Fotos y videos bajo el agua", "Grupos pequeños"],
      en: ["2 dives to maximum 9 metres", "Full diving equipment included", "Certified bilingual PADI instructor", "Boat transport from La Marina", "Underwater photos and video", "Small groups"],
    },
    es: {
      name: "Buceo PADI en Santa Marta",
      tagline: "Dos inmersiones con instructor certificado bilingüe",
      shortDescription:
        "Sumérgete en el Caribe colombiano con un instructor PADI certificado. No necesitas experiencia previa para el Fundive — el Caribe de Santa Marta te espera bajo el agua.",
      fullDescription: [
        "El buceo en Santa Marta es uno de los secretos mejor guardados del Caribe colombiano. Las aguas de la región tienen una visibilidad que puede superar los 20 metros en días buenos, con una biodiversidad marina que incluye corales, peces de colores, langostas, pulpos y, con suerte, algún tiburón nodriza. Es un destino de buceo auténtico — no masificado, no turístico al exceso — donde todavía se puede sentir que se está explorando.",
        "El tour incluye dos modalidades: el Fundive (para quienes nunca han buceado o quieren una experiencia puntual sin certificación) y el Minicurso PADI (para quienes quieren obtener su certificación oficial). En ambos casos el instructor PADI certificado y bilingüe te acompañará en todo momento. El Fundive incluye dos inmersiones a máximo 9 metros de profundidad, completamente guiadas. El equipo completo está incluido: traje de neopreno, máscara, aletas, tanque, regulador y chaleco hidrostático.",
        "La salida es en lancha desde La Marina, el puerto deportivo de Santa Marta. Lleva ropa cómoda para ponerte encima del traje de buceo, protector solar biodegradable (no productos con químicos perjudiciales para el coral) y una tarjeta de memoria si quieres usar la cámara bajo el agua. El instructor hace fotos y videos durante las inmersiones — incluido en el precio del tour.",
      ],
      tip: "No comas nada pesado en las 2 horas previas al buceo. Si usas gafas graduadas, avísanos y te buscamos máscara con corrección óptica. La entrada a La Marina (COP 11.000) no está incluida en el precio del tour. El taxi desde el hostal cuesta unos COP 15.000.",
      includes: [
        "2 inmersiones guiadas (Fundive)",
        "Equipo completo de buceo",
        "Instructor PADI bilingüe certificado",
        "Transporte en lancha",
        "Agua y snack",
        "Fotos y videos bajo el agua",
      ],
      faqs: [
        {
          q: "¿Necesito experiencia previa para el Fundive?",
          a: "No. El Fundive está diseñado precisamente para personas sin experiencia. El instructor te explica todo en tierra antes de entrar al agua — técnica de respiración, señas de comunicación bajo el agua y cómo manejar el equipo. Después te acompaña en todo momento durante las inmersiones.",
        },
        {
          q: "¿Cuál es la diferencia entre el Fundive y el Minicurso PADI?",
          a: "El Fundive son 2 inmersiones guiadas sin certificación, perfectas para probar el buceo. El Minicurso PADI incluye una clase teórica básica y 2 inmersiones, y al terminar obtienes un certificado oficial reconocido internacionalmente que te permite bucear sin instructor en el futuro.",
        },
        {
          q: "¿Qué profundidad alcanzan las inmersiones?",
          a: "El Fundive llega a un máximo de 9 metros de profundidad. Es suficiente para ver los mejores arrecifes y la mayor cantidad de vida marina. El Minicurso PADI también trabaja en aguas poco profundas para el aprendizaje seguro.",
        },
        {
          q: "¿Es seguro bucear en Santa Marta sin experiencia?",
          a: "Sí, con un instructor certificado. El Fundive está diseñado para ser la primera experiencia de buceo de una persona — el instructor PADI ha pasado por una certificación rigurosa para acompañar a principiantes de forma completamente segura.",
        },
      ],
      metaTitle: "Buceo PADI Santa Marta · 2 Inmersiones Caribe Colombiano",
      metaDescription:
        "Buceo PADI en Santa Marta con instructor bilingüe. Fundive 2 inmersiones desde COP 230.000. Equipo, fotos y lancha incluidos. Sin experiencia previa necesaria.",
      h1: "Buceo PADI Santa Marta — 2 Inmersiones en el Caribe",
    },
    en: {
      name: "PADI Diving Santa Marta",
      tagline: "Two dives with a certified bilingual instructor",
      shortDescription:
        "Dive into the Colombian Caribbean with a certified PADI instructor. No prior experience needed for the Fundive — the Santa Marta seabed is waiting for you.",
      fullDescription: [
        "Diving in Santa Marta is one of the Colombian Caribbean's best-kept secrets. The region's waters can have visibility exceeding 20 metres on good days, with marine biodiversity that includes corals, colorful fish, lobsters, octopuses and, with luck, the occasional nurse shark. It's an authentic diving destination — not overcrowded, not over-touristed — where you can still feel like you're genuinely exploring.",
        "The tour comes in two formats: the Fundive (for those who have never dived or want a one-off experience without certification) and the PADI Minicourse (for those who want to earn their official certification). In both cases a certified bilingual PADI instructor accompanies you at all times. The Fundive includes two dives to a maximum depth of 9 metres, fully guided. Complete equipment is included: wetsuit, mask, fins, tank, regulator and buoyancy vest.",
        "The departure is by boat from La Marina, Santa Marta's marina. Bring comfortable clothes to wear over your wetsuit, reef-safe biodegradable sunscreen and a memory card if you want to use the underwater camera. The instructor takes photos and videos during the dives — included in the tour price.",
      ],
      tip: "Don't eat a heavy meal in the 2 hours before diving. If you wear prescription glasses, let us know and we'll find a corrective mask for you. The Marina entry fee (COP 11,000) is not included in the tour price. Taxi from the hostel costs around COP 15,000.",
      includes: [
        "2 guided dives (Fundive)",
        "Full diving equipment",
        "Certified bilingual PADI instructor",
        "Boat transport",
        "Water and snack",
        "Underwater photos and video",
      ],
      faqs: [
        {
          q: "Do I need prior experience for the Fundive?",
          a: "No. The Fundive is designed specifically for people with no experience. The instructor explains everything on land before you enter the water — breathing technique, underwater signals and how to handle the equipment. They accompany you at all times during the dives.",
        },
        {
          q: "What's the difference between the Fundive and the PADI Minicourse?",
          a: "The Fundive is 2 guided dives without certification, perfect for trying diving. The PADI Minicourse includes a basic theory class and 2 dives, and upon completion you receive an internationally recognized official certificate that allows you to dive without an instructor in the future.",
        },
        {
          q: "How deep do the dives go?",
          a: "The Fundive reaches a maximum depth of 9 metres. That's enough to see the best reefs and the most marine life. The PADI Minicourse also works in shallow water for safe learning.",
        },
        {
          q: "Is it safe to dive in Santa Marta without experience?",
          a: "Yes, with a certified instructor. The Fundive is designed to be someone's very first diving experience — the PADI instructor has undergone rigorous certification specifically to accompany beginners in a completely safe way.",
        },
      ],
      metaTitle: "PADI Diving Santa Marta · 2 Dives Colombian Caribbean",
      metaDescription:
        "PADI diving in Santa Marta with bilingual instructor. Fundive 2 dives from COP 230,000. Equipment, photos and boat included. No prior experience required.",
      h1: "PADI Diving Santa Marta — 2 Dives in the Caribbean",
    },
  },

  {
    slug: "bahia-concha",
    img: "/tour-bahia-concha.webp",
    duration: { es: "1 día", en: "1 day" },
    difficulty: { es: "Fácil", en: "Easy" },
    distance: { es: "Parque Tayrona", en: "Tayrona National Park" },
    price: "COP 80.000",
    priceNote: {
      es: "Transporte + seguro incluidos. Almuerzo no incluido.",
      en: "Transport + insurance included. Lunch not included.",
    },
    highlights: {
      es: ["Transporte ida y vuelta desde el hostal", "Seguro de viaje incluido", "Aguas calmas ideales para nadar", "Snorkel en arrecifes", "Precio más accesible de los tours de playa", "Dentro del Parque Nacional Tayrona"],
      en: ["Round-trip transport from hostel", "Travel insurance included", "Calm waters ideal for swimming", "Snorkeling at reefs", "Most affordable beach tour", "Inside Tayrona National Park"],
    },
    es: {
      name: "Bahía Concha",
      tagline: "Playa tranquila dentro del Parque Tayrona",
      shortDescription:
        "Bahía Concha es la puerta de entrada más accesible al Parque Tayrona: aguas calmas y cristalinas, arrecifes de coral a poca profundidad y sin necesidad de largas caminatas.",
      fullDescription: [
        "Si quieres experimentar el Parque Nacional Tayrona sin grandes caminatas por selva y a un precio accesible, Bahía Concha es tu opción. Esta playa es una de las más cercanas al ingreso del parque y tiene una característica que la hace especialmente valorada: sus aguas son extraordinariamente calmas. La bahía está protegida de las corrientes del Caribe por la disposición de la costa, lo que crea condiciones perfectas para nadar, practicar snorkel y flotar tranquilamente sin que el mar te genere ningún esfuerzo.",
        "La playa tiene un tamaño moderado con zona de sombra natural de palmeras y árboles de la selva que bordean la arena. El fondo marino de Bahía Concha tiene arrecifes de coral accesibles sin equipo de buceo — con solo gafas y snorkel se puede apreciar la vida marina que habita bajo la superficie. Es común ver peces de colores, estrellas de mar y, en temporada, tortugas marinas.",
        "Nuestro tour incluye transporte en minibús ida y vuelta desde La Guaca Hostel y seguro de viaje. Con el precio más accesible de todos nuestros tours de playa, Bahía Concha es la opción perfecta si es tu primera vez en Tayrona, si viajas con presupuesto ajustado o si simplemente quieres un día de playa tranquilo en el Parque sin mucho esfuerzo físico.",
      ],
      tip: "Lleva almuerzo o compra en los puestos de comida que hay en la playa. El agua es tan calma que incluso quienes no saben nadar bien se sienten cómodos. Lleva protector solar biodegradable para cuidar los corales.",
      includes: [
        "Transporte en minibús ida y vuelta",
        "Seguro de viaje",
      ],
      faqs: [
        {
          q: "¿Bahía Concha está dentro del Parque Tayrona? ¿Hay que pagar entrada?",
          a: "Sí, Bahía Concha está dentro del Parque Nacional Natural Tayrona. La entrada al parque no está incluida en el precio del tour básico — se paga directamente en la taquilla del parque el día del tour. Consulta el precio actualizado con nosotros.",
        },
        {
          q: "¿Qué diferencia hay entre Bahía Concha y Playa Cristal?",
          a: "Bahía Concha es más accesible (no requiere lancha), más económica y perfecta para un día de playa tranquilo. Playa Cristal tiene aguas más cristalinas y mejor snorkel, pero requiere lancha rápida para llegar. Ambas están dentro del Parque Tayrona.",
        },
        {
          q: "¿Es seguro nadar en Bahía Concha?",
          a: "Sí. Bahía Concha es una de las playas más seguras del Parque Tayrona para nadar. Sus aguas son calmas y no hay corrientes fuertes. Es apta incluso para quienes no son buenos nadadores.",
        },
        {
          q: "¿Hay dónde comer en Bahía Concha?",
          a: "Sí, hay algunos puestos de comida en la playa con mariscos, pescado y bebidas a precios razonables. También puedes llevar tu propio almuerzo y picnic.",
        },
      ],
      metaTitle: "Tour Bahía Concha Santa Marta · Playa Tayrona Aguas Calmas",
      metaDescription:
        "Tour a Bahía Concha en el Parque Tayrona. Aguas calmas, snorkel y playa tranquila. Transporte + seguro incluidos. Desde COP 80.000. La Guaca Hostel.",
      h1: "Tour Bahía Concha — Playa Tranquila en el Parque Tayrona",
    },
    en: {
      name: "Bahía Concha",
      tagline: "Calm beach inside Tayrona National Park",
      shortDescription:
        "Bahía Concha is the most accessible entry point to Tayrona National Park: calm, crystal-clear waters, shallow coral reefs and no long jungle hikes required.",
      fullDescription: [
        "If you want to experience Tayrona National Park without long jungle hikes and at an accessible price, Bahía Concha is your option. This beach is one of the closest to the park's entrance and has a characteristic that makes it especially valued: its waters are extraordinarily calm. The bay is sheltered from Caribbean currents by the configuration of the coastline, creating perfect conditions for swimming, snorkeling and floating effortlessly.",
        "The beach is of moderate size with natural shade from palm trees and jungle vegetation bordering the sand. Bahía Concha's seabed has coral reefs accessible without scuba gear — with just goggles and a snorkel you can appreciate the marine life beneath the surface. It's common to see colorful fish, starfish and, in season, sea turtles.",
        "Our tour includes round-trip minibus transport from La Guaca Hostel and travel insurance. As the most affordable of all our beach tours, Bahía Concha is the perfect option for your first time in Tayrona, if you're on a tight budget, or if you simply want a relaxed beach day in the park without a lot of physical effort.",
      ],
      tip: "Bring lunch or buy at the food stalls on the beach. The water is so calm that even those who are not strong swimmers feel comfortable. Use reef-safe biodegradable sunscreen to protect the coral.",
      includes: [
        "Round-trip minibus transport",
        "Travel insurance",
      ],
      faqs: [
        {
          q: "Is Bahía Concha inside Tayrona National Park? Is there an entry fee?",
          a: "Yes, Bahía Concha is inside Tayrona National Natural Park. The park entrance fee is not included in the basic tour price — it's paid directly at the park's ticket office on the day of the tour. Ask us for the current price.",
        },
        {
          q: "What's the difference between Bahía Concha and Playa Cristal?",
          a: "Bahía Concha is more accessible (no speedboat needed), more affordable and perfect for a relaxed beach day. Playa Cristal has clearer water and better snorkeling but requires a speedboat to reach. Both are inside Tayrona National Park.",
        },
        {
          q: "Is it safe to swim at Bahía Concha?",
          a: "Yes. Bahía Concha is one of the safest beaches in Tayrona for swimming. Its waters are calm with no strong currents. It's suitable even for those who are not strong swimmers.",
        },
        {
          q: "Is there anywhere to eat at Bahía Concha?",
          a: "Yes, there are some food stalls on the beach serving seafood, fish and drinks at reasonable prices. You can also bring your own lunch and picnic.",
        },
      ],
      metaTitle: "Bahía Concha Tour Santa Marta · Calm Beach Tayrona Park",
      metaDescription:
        "Tour to Bahía Concha in Tayrona National Park. Calm waters, snorkeling and relaxed beach day. Transport + insurance included. From COP 80,000. La Guaca Hostel.",
      h1: "Bahía Concha Tour — Calm Beach inside Tayrona National Park",
    },
  },

  {
    slug: "playa-cinto",
    img: "/tour-playa-cinto.jpg",
    duration: { es: "1 día", en: "1 day" },
    difficulty: { es: "Fácil", en: "Easy" },
    distance: { es: "Costa Caribe — acceso en lancha", en: "Caribbean coast — boat access" },
    price: "COP 200.000",
    priceNote: {
      es: "Transporte + seguro + lancha incluidos. Almuerzo no incluido.",
      en: "Transport + insurance + speedboat included. Lunch not included.",
    },
    highlights: {
      es: ["Transporte ida y vuelta desde el hostal", "Seguro de viaje incluido", "Lancha rápida a la playa", "Playa virgen sin aglomeraciones", "Arena blanca y aguas turquesas", "Acceso exclusivo en lancha"],
      en: ["Round-trip transport from hostel", "Travel insurance included", "Speedboat to the beach", "Virgin beach without crowds", "White sand and turquoise water", "Exclusive speedboat access"],
    },
    es: {
      name: "Playa Cinto — Virgin Beach",
      tagline: "Playa virgen sin masas turísticas",
      shortDescription:
        "Playa Cinto es uno de los secretos mejor guardados del Caribe colombiano: acceso exclusivo en lancha, arena blanca inmaculada y un silencio que ya es difícil de encontrar.",
      fullDescription: [
        "En un Caribe que cada vez tiene más turistas, Playa Cinto se mantiene como un lugar genuinamente especial. Esta playa virgen de la costa caribeña colombiana no tiene acceso terrestre — solo se llega en lancha rápida, lo que significa que la cantidad de visitantes es siempre pequeña y la playa mantiene su estado prístino. Arena blanca, aguas turquesas, selva al fondo y el sonido del mar. Sin música, sin vendedores ambulantes, sin hamacas de alquiler masivo.",
        "El tour parte desde Santa Marta en minibús hasta el punto de embarque, donde te espera la lancha rápida que te lleva directamente a la playa. Una vez en Playa Cinto, el tiempo es tuyo. El agua es perfecta para nadar — tranquila, cristalina y sin corrientes fuertes. La playa en sí es íntima, con tamaño suficiente para estar cómodo pero sin esa sensación de estar en un parque temático.",
        "Playa Cinto es ideal para quienes buscan una experiencia de playa más auténtica y menos masificada que las opciones principales del Parque Tayrona. Es perfecta para parejas, viajeros que buscan desconectar o cualquiera que quiera una playa caribeña que todavía se siente como un descubrimiento propio. El precio incluye transporte, lancha y seguro — todo lo que necesitas para un día perfecto en el Caribe colombiano.",
      ],
      tip: "Lleva tu propio almuerzo y suficiente agua. En Playa Cinto no hay tiendas, restaurantes ni servicios. Lleva todo lo que necesites para el día. La soledad de la playa es parte de su encanto — aprovéchala.",
      includes: [
        "Transporte en minibús ida y vuelta",
        "Seguro de viaje",
        "Lancha rápida a Playa Cinto",
      ],
      faqs: [
        {
          q: "¿Por qué Playa Cinto es tan poco conocida?",
          a: "Porque el acceso es complicado — no hay carretera y solo se llega en lancha. Eso es exactamente lo que la mantiene virgen. Los que la conocen tienden a guardarla como un secreto.",
        },
        {
          q: "¿Hay actividades de snorkel en Playa Cinto?",
          a: "Las aguas de Playa Cinto son cristalinas y perfectas para nadar. El fondo marino tiene coral y peces, aunque no tan abundante como en Playa Cristal. Si quieres priorizar el snorkel, te recomendamos el tour a Playa Cristal; si priorizas soledad y playa virgen, Cinto es tu destino.",
        },
        {
          q: "¿Hay sombra en la playa?",
          a: "Sí, la playa tiene árboles y vegetación que dan algo de sombra natural. Sin embargo, si eres sensible al sol, lleva sombrilla ligera o camiseta de lycra. No hay sombrillas de alquiler.",
        },
        {
          q: "¿Cuánto tiempo se pasa en la playa?",
          a: "Normalmente entre 4 y 5 horas en la playa. La lancha de regreso sale en la tarde. Tu guía te dará el horario exacto el día del tour.",
        },
      ],
      metaTitle: "Tour Playa Cinto Santa Marta · Playa Virgen Caribe Colombiano",
      metaDescription:
        "Tour a Playa Cinto en lancha rápida. Playa virgen sin turistas masivos, arena blanca y aguas turquesas. Transporte + lancha incluidos. COP 200.000. La Guaca Hostel.",
      h1: "Tour Playa Cinto — Playa Virgen en el Caribe Colombiano",
    },
    en: {
      name: "Playa Cinto — Virgin Beach",
      tagline: "Remote virgin beach away from the crowds",
      shortDescription:
        "Playa Cinto is one of the Colombian Caribbean's best-kept secrets: speedboat-only access, pristine white sand and a quiet that is increasingly hard to find.",
      fullDescription: [
        "In a Caribbean that gets more tourists every year, Playa Cinto remains genuinely special. This virgin beach on the Colombian Caribbean coast has no road access — you can only get there by speedboat, which means the number of visitors is always small and the beach remains pristine. White sand, turquoise water, jungle in the background and the sound of the sea. No music, no beach vendors, no rows of rented hammocks.",
        "The tour departs from Santa Marta by minibus to the embarkation point, where a speedboat takes you directly to the beach. Once at Playa Cinto, your time is your own. The water is perfect for swimming — calm, crystal clear and without strong currents. The beach itself is intimate, large enough to feel comfortable but without that theme-park sensation.",
        "Playa Cinto is ideal for those looking for a more authentic and less crowded beach experience than the main options in Tayrona National Park. It's perfect for couples, travelers looking to disconnect or anyone who wants a Caribbean beach that still feels like their own discovery. The price includes transport, speedboat and insurance — everything you need for a perfect day on the Colombian Caribbean.",
      ],
      tip: "Bring your own lunch and plenty of water. There are no shops, restaurants or services at Playa Cinto. Bring everything you need for the day. The solitude of the beach is part of its charm — embrace it.",
      includes: [
        "Round-trip minibus transport",
        "Travel insurance",
        "Speedboat to Playa Cinto",
      ],
      faqs: [
        {
          q: "Why is Playa Cinto so unknown?",
          a: "Because access is difficult — there's no road and you can only get there by speedboat. That's exactly what keeps it pristine. Those who know it tend to keep it as a secret.",
        },
        {
          q: "Is there snorkeling at Playa Cinto?",
          a: "The waters at Playa Cinto are crystal clear and perfect for swimming. The seabed has coral and fish, though not as abundant as at Playa Cristal. If you want to prioritize snorkeling, we recommend the Playa Cristal tour; if you prioritize solitude and a virgin beach, Cinto is your destination.",
        },
        {
          q: "Is there shade on the beach?",
          a: "Yes, the beach has trees and vegetation that provide some natural shade. However, if you're sun-sensitive, bring a light umbrella or a UV-protection shirt. There are no umbrella rentals.",
        },
        {
          q: "How long do we spend at the beach?",
          a: "Normally between 4 and 5 hours at the beach. The speedboat back leaves in the afternoon. Your guide will give you the exact schedule on the day of the tour.",
        },
      ],
      metaTitle: "Playa Cinto Tour Santa Marta · Virgin Beach Colombian Caribbean",
      metaDescription:
        "Speedboat tour to Playa Cinto — virgin beach with no crowds, white sand and turquoise water. Transport + speedboat included. COP 200,000. La Guaca Hostel.",
      h1: "Playa Cinto Tour — Virgin Beach on the Colombian Caribbean",
    },
  },
];

export const tourSlugs: TourSlug[] = tours.map((t) => t.slug);

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getRelatedTours(slug: string, count = 3): Tour[] {
  return tours.filter((t) => t.slug !== slug).slice(0, count);
}
