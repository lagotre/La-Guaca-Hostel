"use client";

import Image from "next/image";
import { Clock, Zap, MessageCircle, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const WA_NUMBER = "573000000000";

const tours = {
  es: [
    {
      id: "tayrona",
      name: "Parque Nacional Tayrona",
      tagline: "Jungla + playa en un día épico",
      description:
        "El Parque Tayrona es lo que imaginas cuando piensas en el Caribe colombiano. Selva tropical que cae directo al mar, playas de arena blanca rodeadas de palmeras y ruinas indígenas entre los árboles. El acceso más popular es por Calabazo o por El Zaino. Nosotros te organizamos el transporte y el ingreso.",
      duration: "1 día",
      difficulty: "Moderado",
      distance: "45 km de Santa Marta",
      price: "COP 120.000",
      priceNote: "Incluye transporte + entrada + guía",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Playa Cristal", "Playas Arrecifes", "Cañaveral", "Fauna y flora tropical"],
      tip: "Lleva protector solar, agua y ropa que puedas mojar. Cero wi-fi — y eso es bueno.",
    },
    {
      id: "minca",
      name: "Minca — El pueblo de la montaña",
      tagline: "Cascadas, cafetales y aire fresco",
      description:
        "A solo 45 min de Santa Marta, Minca es el antídoto perfecto al calor caribeño. Pueblo hippie, relajado y sin ruido. Puedes ir un día y volver, o quedarte a dormir entre los cafetales. Las cascadas de Pozo Azul y La Victoria son obligatorias. También hay avistamiento de aves épico si madrugas.",
      duration: "1-2 días",
      difficulty: "Fácil",
      distance: "20 km de Santa Marta",
      price: "COP 80.000",
      priceNote: "Incluye transporte ida y vuelta",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Cascada Pozo Azul", "Fincas cafeteras", "Avistamiento de aves", "Vista panorámica"],
      tip: "Si te quedas a dormir, hay cabañas desde USD 15. Avísanos y lo coordinamos.",
    },
    {
      id: "ciudad-perdida",
      name: "Ciudad Perdida — El Trek Legendario",
      tagline: "4 a 6 días en la selva de la Sierra Nevada",
      description:
        "Una de las experiencias más épicas de Sudamérica. Caminar 4-6 días por selva cerrada hasta llegar a la ciudad indígena Teyuna, construida hace más de 650 años. Solo los fuertes llegan — y vale cada paso. Se puede hacer solo con operadores autorizados. Nosotros te conectamos con la agencia de confianza.",
      duration: "4-6 días",
      difficulty: "Difícil",
      distance: "Sierra Nevada de Santa Marta",
      price: "COP 1.200.000",
      priceNote: "Todo incluido (guías, comidas, camping)",
      img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&auto=format&fit=crop&q=80",
      highlights: [
        "Ciudad Teyuna (650 años de historia)",
        "Trek por selva virgen",
        "Ríos y cascadas en el camino",
        "Comunidades indígenas Kogi",
      ],
      tip: "Necesitas estar en buena condición física. No es apto para todos. Consulta antes de reservar.",
    },
    {
      id: "taganga",
      name: "Taganga — Buceo y Atardecer",
      tagline: "Pueblo de pescadores con vistas increíbles",
      description:
        "A 15 min de Santa Marta, Taganga es un pueblito de pescadores famoso por su buceo accesible y económico. La bahía es tranquila, el pescado es fresco y el atardecer sobre el Caribe es de los más bonitos de la costa. También hay kayak y snorkel.",
      duration: "Medio día — día completo",
      difficulty: "Fácil",
      distance: "4 km de Santa Marta",
      price: "COP 50.000",
      priceNote: "Transporte + snorkel básico",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Buceo de bautismo", "Snorkel", "Kayak", "Pescado fresco al atardecer"],
      tip: "Si quieres sacar licencia de buceo, Taganga es uno de los lugares más baratos del mundo para hacerlo.",
    },
    {
      id: "playa-blanca",
      name: "Playa Blanca — Paraíso sin filtros",
      tagline: "Aguas turquesas y arena blanca de película",
      description:
        "La joya del Caribe samario. Aguas cristalinas entre azul y verde, arena blanca y un ambiente relajado que invita a quedarse. Se llega en lancha desde Taganga o en tour organizado. Perfecto para un día sin planear nada — solo playa, sol y chicha fría.",
      duration: "1 día",
      difficulty: "Fácil",
      distance: "Acceso en lancha desde Taganga",
      price: "COP 100.000",
      priceNote: "Transporte + lancha incluidos",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Aguas turquesas", "Arena blanca", "Snorkel", "Ambiente tranquilo"],
      tip: "Lleva tu propio almuerzo o cómprate un pescado a la brasa en el puesto local. Mucho más rico y económico.",
    },
  ],
  en: [
    {
      id: "tayrona",
      name: "Tayrona National Park",
      tagline: "Jungle + beach in one epic day",
      description:
        "Tayrona Park is exactly what you imagine when you think of the Colombian Caribbean. Tropical jungle falling directly into the sea, white sand beaches surrounded by palms and indigenous ruins among the trees. We organize transport and entry for you.",
      duration: "1 day",
      difficulty: "Moderate",
      distance: "45 km from Santa Marta",
      price: "COP 120,000",
      priceNote: "Includes transport + entrance + guide",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Playa Cristal", "Arrecifes Beach", "Cañaveral", "Tropical flora & fauna"],
      tip: "Bring sunscreen, water and clothes you can get wet. Zero wi-fi — and that's a good thing.",
    },
    {
      id: "minca",
      name: "Minca — The Mountain Village",
      tagline: "Waterfalls, coffee farms and fresh air",
      description:
        "Just 45 min from Santa Marta, Minca is the perfect antidote to Caribbean heat. A hippie, relaxed and quiet village. You can go for a day and come back, or stay overnight among the coffee farms. The Pozo Azul and La Victoria waterfalls are a must. Epic birdwatching too if you're an early riser.",
      duration: "1-2 days",
      difficulty: "Easy",
      distance: "20 km from Santa Marta",
      price: "COP 80,000",
      priceNote: "Includes return transport",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Pozo Azul Waterfall", "Coffee farms", "Birdwatching", "Panoramic views"],
      tip: "If you stay overnight, there are cabins from USD 15. Let us know and we'll coordinate it.",
    },
    {
      id: "ciudad-perdida",
      name: "Lost City — The Legendary Trek",
      tagline: "4 to 6 days in the Sierra Nevada jungle",
      description:
        "One of the most epic experiences in South America. Walking 4-6 days through dense jungle to reach the indigenous city of Teyuna, built over 650 years ago. Only the strong make it — and it's worth every step. Can only be done with authorized operators. We connect you with our trusted agency.",
      duration: "4-6 days",
      difficulty: "Hard",
      distance: "Sierra Nevada de Santa Marta",
      price: "COP 1,200,000",
      priceNote: "All inclusive (guides, meals, camping)",
      img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&auto=format&fit=crop&q=80",
      highlights: [
        "Teyuna City (650 years of history)",
        "Trek through virgin jungle",
        "Rivers and waterfalls along the way",
        "Kogi indigenous communities",
      ],
      tip: "You need to be in good physical shape. Not suitable for everyone. Please consult before booking.",
    },
    {
      id: "taganga",
      name: "Taganga — Diving & Sunset",
      tagline: "Fishing village with incredible views",
      description:
        "15 min from Santa Marta, Taganga is a small fishing village famous for accessible and affordable diving. The bay is calm, the fish is fresh and the Caribbean sunset is one of the most beautiful on the coast. There's also kayaking and snorkeling.",
      duration: "Half day — full day",
      difficulty: "Easy",
      distance: "4 km from Santa Marta",
      price: "COP 50,000",
      priceNote: "Transport + basic snorkel",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Baptism dive", "Snorkeling", "Kayaking", "Fresh fish at sunset"],
      tip: "If you want to get your diving license, Taganga is one of the cheapest places in the world to do it.",
    },
    {
      id: "playa-blanca",
      name: "Playa Blanca — Unfiltered Paradise",
      tagline: "Turquoise waters and movie-scene white sand",
      description:
        "The jewel of the Samario Caribbean. Crystal clear waters between blue and green, white sand and a relaxed atmosphere that makes you want to stay forever. Reached by boat from Taganga or on an organized tour. Perfect for a day with no plans — just beach, sun and a cold drink.",
      duration: "1 day",
      difficulty: "Easy",
      distance: "Boat access from Taganga",
      price: "COP 100,000",
      priceNote: "Transport + boat included",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
      highlights: ["Turquoise waters", "White sand", "Snorkeling", "Relaxed atmosphere"],
      tip: "Bring your own lunch or buy a grilled fish from a local stand. Much tastier and cheaper.",
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
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop&q=80"
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
              ? `Hola! Me interesa el tour de ${tour.name}. ¿Tienen disponibilidad?`
              : `Hi! I'm interested in the ${tour.name} tour. Do you have availability?`
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

                <div className="flex items-center gap-4 flex-wrap">
                  <div>
                    <p className="font-syne font-bold text-2xl text-terracota">{tour.price}</p>
                    <p className="font-inter text-xs text-grafito-muted">{tour.priceNote}</p>
                  </div>
                  <a
                    href={`${waBase}${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={16} />
                    {lang === "es" ? "Consultar por WhatsApp" : "Ask on WhatsApp"}
                  </a>
                </div>
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
