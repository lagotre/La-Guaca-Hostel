"use client";

import Image from "next/image";
import { Clock, Zap, MessageCircle, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const WA_NUMBER = "573046537134";

const tours = {
  es: [
    {
      id: "tayrona",
      name: "Parque Nacional Tayrona",
      tagline: "Selva, playas y vida salvaje — disponible todos los días",
      description:
        "El Parque Tayrona es lo que imaginas cuando piensas en el Caribe colombiano: selva tropical que cae directo al mar, playas de arena blanca y fauna increíble. Nuestro tour incluye transporte ida y vuelta en minibús, entrada al parque, seguro y guía bilingüe. Sin estrés, sin complicaciones.",
      duration: "1 día",
      difficulty: "Moderado",
      distance: "45 km de Santa Marta",
      price: "COP 230.000",
      priceNote: "Transporte + entrada + seguro + guía. Almuerzo no incluido.",
      img: "/tour-tayrona.jpg",
      highlights: ["Transporte ida y vuelta", "Entrada + seguro incluidos", "Guía español/inglés", "Disponible todos los días"],
      tip: "Lleva protector solar, agua y ropa que puedas mojar. Hay restaurantes en el parque para el almuerzo.",
    },
    {
      id: "ciudad-perdida",
      name: "Ciudad Perdida — El Trek Legendario",
      tagline: "4 o 5 días en la selva de la Sierra Nevada",
      description:
        "Una de las experiencias más épicas de Sudamérica. Caminar 4 o 5 días por selva cerrada hasta llegar a la ciudad indígena Teyuna, construida hace más de 650 años. El precio incluye absolutamente todo: transporte al inicio del trek, alojamiento en camas con mosquitero, todas las comidas (opción vegana/vegetariana disponible), agua purificada, frutas, snacks y guía bilingüe.",
      duration: "4 o 5 días",
      difficulty: "Difícil",
      distance: "Sierra Nevada de Santa Marta",
      price: "COP 2.150.000",
      priceNote: "Todo incluido: transporte, alojamiento, comidas, agua, guía bilingüe.",
      img: "/tour-ciudad-perdida.jpg",
      highlights: [
        "Ciudad Teyuna (más de 650 años)",
        "Alojamiento + todas las comidas",
        "Agua purificada + snacks",
        "Guía bilingüe certificado",
      ],
      tip: "Opción vegana y vegetariana disponible. Necesitas buena condición física — consulta con nosotros antes de reservar.",
    },
    {
      id: "playa-cristal",
      name: "Playa Cristal",
      tagline: "El mejor punto de snorkel del Caribe colombiano",
      description:
        "Playa Cristal es una de las playas más bonitas del Parque Tayrona — aguas cristalinas, arrecifes de coral y mucha vida marina. El acceso es en lancha rápida desde la costa. Ideal para snorkel y para nadar en aguas tranquilas. El transporte va en minibús hasta el punto de embarque.",
      duration: "1 día",
      difficulty: "Fácil",
      distance: "Parque Tayrona",
      price: "COP 195.000",
      priceNote: "Transporte + entrada + seguro + lancha rápida. Almuerzo no incluido.",
      img: "/tour-playa-cristal.png",
      highlights: ["Minibús ida y vuelta", "Entrada + seguro", "Lancha rápida a la playa", "Punto de snorkel incluido"],
      tip: "Lleva snorkel si tienes el tuyo. El agua es tranquila y perfecta para nadar.",
    },
    {
      id: "bahia-concha",
      name: "Bahía Concha",
      tagline: "Playa tranquila dentro del Parque Tayrona",
      description:
        "Bahía Concha es una de las playas más accesibles del Parque Tayrona — perfecta para un día relajado sin caminatas largas. Aguas calmas y cristalinas ideales para nadar y hacer snorkel. El precio más accesible de nuestros tours de playa y una opción excelente si es tu primera vez en Tayrona.",
      duration: "1 día",
      difficulty: "Fácil",
      distance: "Parque Tayrona",
      price: "COP 80.000",
      priceNote: "Transporte + seguro incluidos. Almuerzo no incluido.",
      img: "/tour-bahia-concha.webp",
      highlights: ["Transporte ida y vuelta", "Seguro incluido", "Aguas tranquilas para nadar", "Snorkel y descanso"],
      tip: "La opción más económica para ver el Parque Tayrona. Lleva tu almuerzo o cómpralo en la playa.",
    },
    {
      id: "playa-cinto",
      name: "Playa Cinto — Virgin Beach",
      tagline: "Playa virgen sin masas turísticas",
      description:
        "Playa Cinto es una de las playas más remotas y prístinas de la costa caribeña. El acceso es en lancha rápida, lo que significa que solo llegan quienes saben buscarla. Arena blanca, aguas turquesas y una tranquilidad que ya no es fácil de encontrar. Un secreto que vale la pena conocer.",
      duration: "1 día",
      difficulty: "Fácil",
      distance: "Costa Caribe — acceso en lancha",
      price: "COP 200.000",
      priceNote: "Transporte + seguro + lancha incluidos. Almuerzo no incluido.",
      img: "/tour-playa-cinto.jpg",
      highlights: ["Transporte ida y vuelta", "Seguro incluido", "Lancha rápida a la playa", "Playa sin aglomeraciones"],
      tip: "Lleva tu propio almuerzo y suficiente agua. No hay tiendas ni restaurantes en la playa.",
    },
    {
      id: "minca",
      name: "Minca — Tour Día Completo",
      tagline: "Cascadas, cafetales, chocolate y aves",
      description:
        "Minca es el antídoto perfecto al calor caribeño. Nuestro tour de día completo incluye visita a la cascada escondida con baño incluido, taller de chocolate artesanal, recorrido por la finca cafetera para aprender los secretos del cultivo tradicional, visita a una casa de bambú y avistamiento de aves. Y para rematar: almuerzo gourmet incluido.",
      duration: "1 día completo",
      difficulty: "Fácil",
      distance: "20 km de Santa Marta",
      price: "COP 195.000",
      priceNote: "Transporte + almuerzo gourmet incluidos.",
      img: "/tour-minca.webp",
      highlights: ["Cascada escondida con baño", "Taller de chocolate artesanal", "Recorrido finca cafetera", "Avistamiento de aves"],
      tip: "Uno de nuestros tours más completos y con mejor relación precio-experiencia. El almuerzo gourmet es una sorpresa.",
    },
    {
      id: "velero-tayrona",
      name: "Velero por Tayrona Beach",
      tagline: "Navega el Caribe con paddle board y snorkel incluido",
      description:
        "Una forma diferente y espectacular de ver el Parque Tayrona: desde el mar. Zarparás desde La Marina en un velero con todo incluido — agua, frutas, snacks, almuerzo, equipo de paddle board y snorkel. La ruta pasa por Bahía Concha y las playas del parque. El atardecer desde cubierta es irrepetible.",
      duration: "1 día",
      difficulty: "Fácil",
      distance: "Sale desde La Marina",
      price: "COP 236.000",
      priceNote: "Almuerzo + agua + frutas + snorkel + paddle board incluidos. Taxi a La Marina no incluido.",
      img: "/tour-velero.jpg",
      highlights: ["Navegación en velero", "Bahía Concha desde el mar", "Paddle board + snorkel", "Almuerzo + snacks incluidos"],
      tip: "El taxi desde el hostal hasta La Marina cuesta aproximadamente COP 15.000. Coordínalo con nosotros.",
    },
    {
      id: "buceo",
      name: "Buceo PADI",
      tagline: "Dos inmersiones con instructor certificado bilingüe",
      description:
        "Sumérgete en el Caribe colombiano con un instructor PADI certificado y bilingüe. El tour incluye dos inmersiones a máximo 9 metros de profundidad, equipo completo, transporte en lancha desde La Marina, agua, snack y fotos bajo el agua. Grupos pequeños para una experiencia más personal y segura.",
      duration: "Medio día",
      difficulty: "Moderado",
      distance: "Sale desde La Marina",
      price: "COP 230.000",
      priceNote: "Fundive (2 inmersiones). Minicurso PADI: COP 280.000. Entrada a La Marina (COP 11.000) no incluida.",
      img: "/tour-buceo.png",
      highlights: ["2 inmersiones (máx. 9 metros)", "Equipo de buceo incluido", "Instructor PADI bilingüe", "Fotos bajo el agua"],
      tip: "No necesitas experiencia previa para el Fundive. Para el Minicurso PADI recibirás tu certificación.",
    },
  ],
  en: [
    {
      id: "tayrona",
      name: "Tayrona National Park Tour",
      tagline: "Jungle, beaches and wildlife — available every day",
      description:
        "Tayrona Park is exactly what you imagine when you think of the Colombian Caribbean: tropical jungle falling into the sea, white sand beaches and incredible wildlife. Our tour includes round-trip transport by minibus, park entrance, insurance and a bilingual guide. Stress-free, hassle-free.",
      duration: "1 day",
      difficulty: "Moderate",
      distance: "45 km from Santa Marta",
      price: "COP 230,000",
      priceNote: "Transport + entrance + insurance + guide. Lunch not included.",
      img: "/tour-tayrona.jpg",
      highlights: ["Round-trip transport", "Entrance + insurance included", "Spanish/English guide", "Available every day"],
      tip: "Bring sunscreen, water and clothes you can get wet. There are restaurants inside the park for lunch.",
    },
    {
      id: "ciudad-perdida",
      name: "Lost City Trek — The Legendary Route",
      tagline: "4 or 5 days deep in the Sierra Nevada jungle",
      description:
        "One of the most epic experiences in South America. Trek 4 or 5 days through dense jungle to reach the ancient indigenous city of Teyuna, built over 650 years ago. The price covers absolutely everything: transport to the trailhead, accommodation in beds with mosquito nets, all meals (veggie/vegan option available), purified water, fruits, snacks and a bilingual guide.",
      duration: "4 or 5 days",
      difficulty: "Hard",
      distance: "Sierra Nevada de Santa Marta",
      price: "COP 2,150,000",
      priceNote: "All inclusive: transport, accommodation, all meals, water, bilingual guide.",
      img: "/tour-ciudad-perdida.jpg",
      highlights: [
        "Teyuna City (650+ years of history)",
        "Accommodation + all meals included",
        "Purified water + snacks",
        "Certified bilingual guide",
      ],
      tip: "Veggie/vegan option available. You need good physical fitness — check with us before booking.",
    },
    {
      id: "playa-cristal",
      name: "Playa Cristal",
      tagline: "The best snorkel spot on the Colombian Caribbean",
      description:
        "Playa Cristal is one of the most beautiful beaches in Tayrona Park — crystal clear water, coral reefs and plenty of marine life. Access is by speedboat from the coast. Perfect for snorkeling and swimming in calm waters. Transport goes by minibus to the boarding point.",
      duration: "1 day",
      difficulty: "Easy",
      distance: "Tayrona National Park",
      price: "COP 195,000",
      priceNote: "Transport + entrance + insurance + speedboat. Lunch not included.",
      img: "/tour-playa-cristal.png",
      highlights: ["Round-trip minibus", "Entrance + insurance", "Speedboat to the beach", "Snorkel point included"],
      tip: "Bring your own snorkel if you have one. The water is calm and perfect for swimming.",
    },
    {
      id: "bahia-concha",
      name: "Bahía Concha",
      tagline: "Calm beach inside Tayrona National Park",
      description:
        "Bahía Concha is one of the most accessible beaches in Tayrona Park — perfect for a relaxed day without long hikes. Calm, crystal clear waters ideal for swimming and snorkeling. The most affordable of our beach tours and a great option if it's your first time in Tayrona.",
      duration: "1 day",
      difficulty: "Easy",
      distance: "Tayrona National Park",
      price: "COP 80,000",
      priceNote: "Transport + insurance included. Lunch not included.",
      img: "/tour-bahia-concha.webp",
      highlights: ["Round-trip transport", "Insurance included", "Calm waters for swimming", "Snorkeling & relaxing"],
      tip: "The most affordable way to visit Tayrona. Bring your lunch or buy it on the beach.",
    },
    {
      id: "playa-cinto",
      name: "Playa Cinto — Virgin Beach",
      tagline: "Remote virgin beach away from the crowds",
      description:
        "Playa Cinto is one of the most pristine and remote beaches on the Caribbean coast. Access is by speedboat, which means only those who know where to look make it here. White sand, turquoise waters and a peace that's getting hard to find. A secret worth knowing.",
      duration: "1 day",
      difficulty: "Easy",
      distance: "Caribbean coast — boat access",
      price: "COP 200,000",
      priceNote: "Transport + insurance + speedboat included. Lunch not included.",
      img: "/tour-playa-cinto.jpg",
      highlights: ["Round-trip transport", "Insurance included", "Speedboat to the beach", "Uncrowded virgin beach"],
      tip: "Bring your own lunch and plenty of water. No shops or restaurants at the beach.",
    },
    {
      id: "minca",
      name: "Minca — Full Day Tour",
      tagline: "Waterfalls, coffee, chocolate and birdwatching",
      description:
        "Minca is the perfect antidote to Caribbean heat. Our full day tour includes a visit to the hidden waterfall with a refreshing swim, a hands-on chocolate-making workshop, a tour of the coffee farm to learn traditional farming secrets, a visit to a bamboo house, birdwatching — and a gourmet lunch included.",
      duration: "Full day",
      difficulty: "Easy",
      distance: "20 km from Santa Marta",
      price: "COP 195,000",
      priceNote: "Round-trip transport + gourmet lunch included.",
      img: "/tour-minca.webp",
      highlights: ["Hidden waterfall swim", "Chocolate-making workshop", "Coffee farm tour", "Birdwatching"],
      tip: "One of our most complete tours and best value for money. The gourmet lunch is a highlight.",
    },
    {
      id: "velero-tayrona",
      name: "Sailing Boat Tour — Tayrona Beach",
      tagline: "Sail the Caribbean with paddleboard & snorkel included",
      description:
        "A spectacular way to experience Tayrona National Park: from the sea. You'll set sail from La Marina with everything included — water, fruits, snacks, lunch, paddleboard and snorkel equipment. The route passes Bahía Concha and the park's beaches. The sunset from the deck is unforgettable.",
      duration: "1 day",
      difficulty: "Easy",
      distance: "Departs from La Marina",
      price: "COP 236,000",
      priceNote: "Lunch + water + fruits + snorkel + paddleboard included. Taxi to La Marina not included.",
      img: "/tour-velero.jpg",
      highlights: ["Sailing boat day trip", "Bahía Concha from the sea", "Paddleboard + snorkel gear", "Lunch + snacks included"],
      tip: "Taxi from the hostel to La Marina costs around COP 15,000. We can help you coordinate it.",
    },
    {
      id: "buceo",
      name: "PADI Diving",
      tagline: "Two dives with a certified bilingual instructor",
      description:
        "Dive into the Colombian Caribbean with a certified bilingual PADI instructor. The tour includes two dives to a maximum depth of 30 feet, full equipment, boat transport from La Marina, water, a snack and underwater photos. Small groups for a more personal and safe experience.",
      duration: "Half day",
      difficulty: "Moderate",
      distance: "Departs from La Marina",
      price: "COP 230,000",
      priceNote: "Fundive (2 dives). PADI Minicourse: COP 280,000. Marine Port entry (COP 11,000) not included.",
      img: "/tour-buceo.png",
      highlights: ["2 dives (max 30 feet)", "Full equipment included", "Bilingual PADI instructor", "Underwater photos"],
      tip: "No prior experience needed for the Fundive. The PADI Minicourse includes your certification.",
    },
  ],
};

const difficultyColor = {
  Fácil: "bg-selva text-white",
  Moderado: "bg-arena text-grafito",
  Difícil: "bg-terracota text-white",
  Easy: "bg-selva text-white",
  Moderate: "bg-arena text-grafito",
  Hard: "bg-terracota text-white",
} as Record<string, string>;

export default function ToursPage() {
  const { lang } = useLang();
  const tourList = tours[lang];

  const waBase = `https://wa.me/${WA_NUMBER}?text=`;

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/tour-tayrona.jpg"
            alt="Tours La Guaca"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-inter text-xs uppercase tracking-widest text-arena mb-2">
            {lang === "es" ? "Explora el Caribe" : "Explore the Caribbean"}
          </p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">
            {lang === "es" ? "Tours & Experiencias" : "Tours & Experiences"}
          </h1>
        </div>
      </section>

      {/* Tours */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">
        {tourList.map((tour, idx) => {
          const waMsg = encodeURIComponent(
            lang === "es"
              ? `Hola! Me gustaría obtener más información sobre el tour: ${tour.name}.`
              : `Hi! I'd like to get more information about the tour: ${tour.name}.`
          );

          return (
            <div
              key={tour.id}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-72 md:h-96 rounded-card overflow-hidden">
                <Image
                  src={tour.img}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grafito/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="font-inter text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock size={12} /> {tour.duration}
                  </span>
                  <span className={`font-inter text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 ${difficultyColor[tour.difficulty] || "bg-white text-grafito"}`}>
                    <Zap size={12} /> {tour.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <p className="font-inter text-sm text-terracota font-medium mb-1">{tour.tagline}</p>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-grafito mb-3">{tour.name}</h2>
                <p className="font-inter text-grafito-muted leading-relaxed mb-5">{tour.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {tour.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 font-inter text-sm text-grafito">
                      <ChevronRight size={14} className="text-terracota shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="bg-arena/20 border border-arena/40 rounded-card p-4 mb-6">
                  <p className="font-inter text-xs font-semibold text-grafito-muted uppercase tracking-wider mb-1">
                    {lang === "es" ? "Consejo del hostal" : "Hostel tip"}
                  </p>
                  <p className="font-inter text-sm text-grafito">{tour.tip}</p>
                </div>

                <a
                  href={`${waBase}${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} />
                  {lang === "es" ? "Más Información" : "More Info"}
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* Group CTA */}
      <section className="py-16 bg-selva text-white px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-syne font-bold text-3xl md:text-4xl mb-4">
            {lang === "es" ? "¿Vienes en grupo?" : "Coming as a group?"}
          </h2>
          <p className="font-inter text-white/70 mb-6">
            {lang === "es"
              ? "Tenemos precios especiales para grupos de 6+ personas. Escríbenos y te armamos el plan perfecto."
              : "We have special prices for groups of 6+ people. Write to us and we'll put together the perfect plan."}
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              lang === "es"
                ? "Hola! Somos un grupo y nos gustaría saber sobre precios especiales en tours."
                : "Hi! We're a group and would like to know about special tour prices."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-selva font-syne font-semibold px-8 py-4 rounded-card hover:bg-crema transition-colors"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Consultar para grupos" : "Group inquiry"}
          </a>
        </div>
      </section>
    </>
  );
}
