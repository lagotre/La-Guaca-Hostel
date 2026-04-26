"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const services = [
  {
    id: "wifi",
    emoji: "📶",
    img: "/svc-wifi.jpg",
    hours: null,
    es: {
      name: "WiFi Gratis",
      desc: "Fibra óptica de verdad, no el WiFi fantasma que promete 3 barras y entrega angustia. Trabaja, sube tus fotos, videollamada a tu mamá — todo sin excusas.",
    },
    en: {
      name: "Free WiFi",
      desc: "Real fiber optic internet — not the kind that promises five bars and delivers existential dread. Stream, work, or call your mom guilt-free.",
    },
  },
  {
    id: "desayuno",
    emoji: "🍳",
    img: "/svc-desayuno.jpg",
    hours: null,
    es: {
      name: "Desayuno Incluido",
      desc: "Cada mañana, desayuno recién preparado esperándote. Porque empezar el día sin comer es un plan y el plan está mal.",
    },
    en: {
      name: "Free Breakfast",
      desc: "A freshly made breakfast every morning, included. Because exploring on an empty stomach is a terrible idea and we refuse to let that happen to you.",
    },
  },
  {
    id: "social",
    emoji: "🛋️",
    img: "/svc-social.jpg",
    hours: null,
    es: {
      name: "Espacios Sociales",
      desc: "Hamacas, sofás y rincones perfectos para no hacer nada productivo — o para hacer los mejores amigos del viaje. Las dos opciones son igual de válidas.",
    },
    en: {
      name: "Social Spaces",
      desc: "Hammocks, couches, and corners built for doing absolutely nothing — or for meeting your new favorite humans. Both are equally valid life choices.",
    },
  },
  {
    id: "lockers",
    emoji: "🔒",
    img: "/svc-lockers.jpg",
    hours: null,
    es: {
      name: "Lockers Individuales Amplios",
      desc: "Lo suficientemente grandes para tu mochila, tu paranoia y tus cosas de valor. Cierra, respira y sal a explorar tranquilo.",
    },
    en: {
      name: "Spacious Personal Lockers",
      desc: "Big enough for your backpack, your valuables, and your travel anxiety. Lock it up and go enjoy Santa Marta with a clear conscience.",
    },
  },
  {
    id: "banos",
    emoji: "🚿",
    img: "/svc-banos.jpg",
    hours: null,
    es: {
      name: "Baños Limpios",
      desc: "Limpios, suficientes y sin lista de espera a las 8am. Sí, sabemos que en algunos hostales esto es noticia. Aquí es el estándar.",
    },
    en: {
      name: "Clean Bathrooms",
      desc: "Clean, plentiful, and no queue at 8am. We know that in some hostels this would be headline news. Here, it's just Tuesday.",
    },
  },
  {
    id: "piscina",
    emoji: "🏊",
    img: "/svc-piscina.jpg",
    hours: null,
    es: {
      name: "Piscina Jacuzzi",
      desc: "Porque después de caminar por Tayrona bajo el sol del Caribe, hay pocas cosas más honestas que tirarse al agua. La piscina jacuzzi está lista. Tú también deberías estarlo.",
    },
    en: {
      name: "Jacuzzi Pool",
      desc: "After hiking Tayrona under the Caribbean sun, there's one honest thing to do: get in the water. The jacuzzi pool is always ready. The question is — are you?",
    },
  },
  {
    id: "tours",
    emoji: "🗺️",
    img: "/tour-tayrona.jpg",
    hours: null,
    es: {
      name: "Tours & Experiencias Locales",
      desc: "Tayrona, Minca, Ciudad Perdida, Taganga — los destinos están ahí afuera esperando. Nosotros te organizamos todo para que tú solo te encargues de disfrutar y tomarte fotos.",
    },
    en: {
      name: "Local Tours & Experiences",
      desc: "Tayrona, Minca, Lost City, Taganga — the adventures are out there. We handle the logistics so your only job is to show up and be amazed.",
    },
  },
  {
    id: "cocina",
    emoji: "👩‍🍳",
    img: "/svc-cocina.jpg",
    hours: null,
    es: {
      name: "Cocina Comunitaria Equipada",
      desc: "Ollas, sartenes, nevera y todo lo que necesitas para cocinar, ahorrar y de paso conocer a quien cocina al lado tuyo. La mitad de las amistades de este hostal nacieron aquí.",
    },
    en: {
      name: "Fully Equipped Community Kitchen",
      desc: "Pots, pans, fridge — everything you need to cook, save money, and accidentally meet your new travel buddy. Half the friendships at La Guaca started right here.",
    },
  },
  {
    id: "staff",
    emoji: "🌍",
    img: "/svc-staff.jpg",
    hours: null,
    es: {
      name: "Staff Bilingüe",
      desc: "Hablamos español, inglés y el idioma universal de saber exactamente qué hacer en Santa Marta. Pregúntanos cualquier cosa — sin excepción.",
    },
    en: {
      name: "Bilingual Staff",
      desc: "We speak Spanish, English, and the universal language of knowing exactly what to do in Santa Marta. Ask us anything — no question is too small or too weird.",
    },
  },
  {
    id: "coworking",
    emoji: "💻",
    img: "/svc-coworking.jpg",
    hours: null,
    es: {
      name: "Coworking Space",
      desc: "Para los que viajan trabajando o trabajan viajando. Buena silla, buena luz, fibra óptica y vista al ambiente del hostal. La reunión de las 10am nunca fue tan agradable.",
    },
    en: {
      name: "Coworking Space",
      desc: "For those who travel while working — or work while traveling. Good chair, good light, fiber optic WiFi, and hostel vibes around you. Your 10am meeting just got a serious upgrade.",
    },
  },
  {
    id: "taxi",
    emoji: "🚕",
    img: "/svc-taxi.jpg",
    hours: null,
    es: {
      name: "Servicio de Taxi",
      desc: "Llegaste tarde, estás cargado y no tienes ganas de negociar con un taxista en la oscuridad. Nosotros te conseguimos el transporte. Problema resuelto antes de que fuera problema.",
    },
    en: {
      name: "Taxi Service",
      desc: "Late arrival, heavy bags, zero energy to negotiate a taxi in the dark — we've got you covered. Transport sorted before it even becomes a problem.",
    },
  },
  {
    id: "lavanderia",
    emoji: "👕",
    img: "/svc-lavanderia.jpg",
    hours: null,
    es: {
      name: "Lavandería",
      desc: "Porque llevas dos semanas viajando y esa camiseta ya tomó vida propia. Sin juicios, con soluciones.",
    },
    en: {
      name: "Laundry Service",
      desc: "Because you've been traveling for two weeks and that shirt is developing its own personality. No judgment — just clean clothes, fast.",
    },
  },
  {
    id: "ubicacion",
    emoji: "📍",
    img: "/svc-ubicacion.jpg",
    hours: null,
    es: {
      name: "Excelente Ubicación",
      desc: "Bavaria, a pasos del centro histórico, con restaurantes, supermercados y transporte al frente. No es el mapa del tesoro — es mejor, porque el tesoro ya está aquí.",
    },
    en: {
      name: "Prime Location",
      desc: "Bavaria neighborhood, steps from the historic center, with restaurants, supermarkets, and transport at your door. Not quite a treasure map — better, because the treasure is already here.",
    },
  },
  {
    id: "equipaje",
    emoji: "🧳",
    img: "/svc-equipaje.jpg",
    hours: null,
    es: {
      name: "Guarda Equipaje",
      desc: "Tu vuelo sale a medianoche pero son las 11am. Deja las maletas, olvídate de ellas y exprime cada hora que te queda en Santa Marta. Gratis, seguro, sin drama.",
    },
    en: {
      name: "Luggage Storage",
      desc: "Your flight's at midnight but it's 11am. Drop your bags, forget about them, and make the most of your last hours in Santa Marta. Free, safe, no stress.",
    },
  },
  {
    id: "bar",
    emoji: "🍹",
    img: "/svc-bar.jpg",
    hours: "5:00 pm – 9:30 pm",
    es: {
      name: "Bar",
      desc: "El lugar donde el plan de \"solo un trago\" cumple su ciclo natural de convertirse en la mejor noche del viaje. Bien te lo advertimos.",
    },
    en: {
      name: "Bar",
      desc: "The place where \"just one drink\" naturally evolves into the best night of your trip. Don't say we didn't warn you.",
    },
  },
  {
    id: "restaurante",
    emoji: "🌮",
    img: "/svc-restaurante.jpg",
    hours: "5:00 pm – 9:30 pm",
    es: {
      name: "Don Carlos — Tacos & Margaritas",
      desc: "Tacos que no piden perdón y margaritas que tampoco. Don Carlos es el vecino que todo viajero merece tener: sabor real, precio honesto y ambiente que te da ganas de quedarte otro día en Santa Marta.",
    },
    en: {
      name: "Don Carlos — Tacos & Margaritas",
      desc: "Tacos that mean business and margaritas that match. Don Carlos is the neighbor every traveler deserves — real flavor, honest price, and the kind of vibe that makes you book one more night.",
    },
  },
];

export default function EspaciosPage() {
  const { lang } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/svc-piscina.jpg"
            alt="Ambiente y Servicios La Guaca Hostel"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-inter text-xs uppercase tracking-widest text-arena mb-2">
            {lang === "es" ? "La Guaca Hostel" : "La Guaca Hostel"}
          </p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">
            {lang === "es" ? "Ambiente & Servicios" : "Spaces & Services"}
          </h1>
        </div>
      </section>

      {/* Thumbnail carousel */}
      <section className="bg-white border-b border-crema-dark sticky top-16 lg:top-20 z-40">
        <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide max-w-7xl mx-auto">
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => scrollTo(svc.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
            >
              <div className="relative w-16 h-16 rounded-card overflow-hidden ring-2 ring-transparent group-hover:ring-terracota transition-all duration-200">
                <Image
                  src={svc.img}
                  alt={svc[lang].name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-inter text-[10px] text-grafito-muted group-hover:text-terracota transition-colors text-center leading-tight max-w-[72px]">
                {svc.emoji} {svc[lang].name.split("—")[0].trim().split(" ").slice(0, 2).join(" ")}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-20">
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            id={svc.id}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center scroll-mt-40`}
          >
            {/* Photo */}
            <div className="w-full lg:w-1/2 relative h-72 md:h-96 rounded-card overflow-hidden">
              <Image
                src={svc.img}
                alt={svc[lang].name}
                fill
                className="object-cover"
              />
              {svc.hours && (
                <div className="absolute bottom-4 left-4 bg-grafito/80 backdrop-blur-sm text-white font-inter text-xs px-3 py-1.5 rounded-full">
                  {lang === "es" ? "Horario:" : "Hours:"} {svc.hours}
                </div>
              )}
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <p className="text-3xl mb-3">{svc.emoji}</p>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-grafito mb-4">
                {svc[lang].name}
              </h2>
              {svc.hours && (
                <p className="font-inter text-sm font-semibold text-terracota mb-3">
                  {lang === "es" ? "Horario de atención:" : "Opening hours:"} {svc.hours}
                </p>
              )}
              <p className="font-inter text-grafito-muted leading-relaxed text-lg">
                {svc[lang].desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
