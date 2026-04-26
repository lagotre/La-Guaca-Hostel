"use client";

import Image from "next/image";
import { MapPin, Plane, Bus, Car, Clock, ChevronRight, Navigation } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.056!2d-74.2095!3d11.2408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzI3LjAiTiA3NMKwMTInMzQuMiJX!5e0!3m2!1ses!2sco!4v1690000000000";

const nearby = {
  es: [
    { category: "Restaurantes", items: ["La Tienda de Teresa (50m)", "El Buen Sabor (100m)", "Ikaro (200m)"] },
    { category: "Supermercados", items: ["Éxito Bavaria (300m)", "D1 (150m)"] },
    { category: "Centros Comerciales", items: ["Buenavista (2 km)", "Centro Histórico (5 min en taxi)"] },
    { category: "Playas", items: ["El Rodadero (10 min)", "Taganga (15 min)", "Parque Tayrona (45 min)"] },
  ],
  en: [
    { category: "Restaurants", items: ["La Tienda de Teresa (50m)", "El Buen Sabor (100m)", "Ikaro (200m)"] },
    { category: "Supermarkets", items: ["Éxito Bavaria (300m)", "D1 (150m)"] },
    { category: "Shopping Centers", items: ["Buenavista (2 km)", "Historic Center (5 min by taxi)"] },
    { category: "Beaches", items: ["El Rodadero (10 min)", "Taganga (15 min)", "Tayrona Park (45 min)"] },
  ],
};

const howToArrive = {
  es: [
    {
      icon: Plane,
      title: "Desde el Aeropuerto Simón Bolívar",
      steps: [
        "El aeropuerto está a solo 15 min del hostal",
        "Taxi oficial: aprox. COP 25.000–35.000",
        "Coordinamos el taxi desde el hostal — escríbenos tu hora de llegada",
        "Mototaxi: opción económica ~COP 10.000 (para viajeros ligeros)",
      ],
    },
    {
      icon: Bus,
      title: "Desde la Terminal de Transporte",
      steps: [
        "Terminal a 10 min del hostal en taxi",
        "Taxi desde terminal: aprox. COP 12.000–18.000",
        "Bus urbano: toma la ruta que va por la Troncal del Caribe",
        "Indica 'Barrio Bavaria' al conductor",
      ],
    },
    {
      icon: Car,
      title: "Desde el Centro Histórico",
      steps: [
        "El centro histórico está a 5 min en taxi (COP 6.000–10.000)",
        "Caminando: 25-30 min siguiendo la Carrera 5",
        "InDriver o Uber: disponibles en Santa Marta",
      ],
    },
  ],
  en: [
    {
      icon: Plane,
      title: "From Simón Bolívar Airport",
      steps: [
        "The airport is just 15 min from the hostel",
        "Official taxi: approx. COP 25,000–35,000",
        "We can coordinate a taxi from the hostel — send us your arrival time",
        "Mototaxi: budget option ~COP 10,000 (for light travelers)",
      ],
    },
    {
      icon: Bus,
      title: "From the Bus Terminal",
      steps: [
        "Terminal is 10 min from the hostel by taxi",
        "Taxi from terminal: approx. COP 12,000–18,000",
        "City bus: take the route along the Troncal del Caribe",
        "Tell the driver 'Barrio Bavaria'",
      ],
    },
    {
      icon: Car,
      title: "From the Historic Center",
      steps: [
        "Historic center is 5 min by taxi (COP 6,000–10,000)",
        "Walking: 25-30 min following Carrera 5",
        "InDriver or Uber: available in Santa Marta",
      ],
    },
  ],
};

export default function UbicacionPage() {
  const { lang } = useLang();
  const arrivals = howToArrive[lang];
  const nearbyList = nearby[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&auto=format&fit=crop&q=80"
            alt="Santa Marta vista aérea"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-inter text-xs uppercase tracking-widest text-arena mb-2">
            {lang === "es" ? "Barrio Bavaria · Santa Marta" : "Bavaria Neighborhood · Santa Marta"}
          </p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">
            {lang === "es" ? "Cómo llegar" : "How to Get Here"}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <MapPin size={20} className="text-terracota" />
              <div>
                <p className="font-syne font-bold text-lg text-grafito">La Guaca Hostel</p>
                <p className="font-inter text-sm text-grafito-muted">
                  {lang === "es"
                    ? "Barrio Bavaria, Santa Marta, Colombia"
                    : "Bavaria Neighborhood, Santa Marta, Colombia"}
                </p>
              </div>
            </div>
            <div className="rounded-card overflow-hidden h-72 md:h-96 bg-crema-dark">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Guaca Hostel Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=La+Guaca+Hostel+Santa+Marta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4 text-sm"
            >
              <Navigation size={16} />
              {lang === "es" ? "Abrir en Google Maps" : "Open in Google Maps"}
            </a>
          </div>

          {/* How to arrive */}
          <div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-grafito mb-6">
              {lang === "es" ? "¿Cómo llegar?" : "Getting Here"}
            </h2>
            <div className="space-y-6">
              {arrivals.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.title} className="bg-white rounded-card p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-terracota/10 rounded-card flex items-center justify-center">
                        <Icon size={18} className="text-terracota" />
                      </div>
                      <h3 className="font-syne font-bold text-base text-grafito">{method.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 font-inter text-sm text-grafito-muted">
                          <ChevronRight size={14} className="text-terracota mt-0.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Check-in info */}
        <div className="mt-16 bg-selva text-white rounded-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-arena shrink-0 mt-0.5" />
              <div>
                <p className="font-syne font-bold text-lg mb-1">
                  {lang === "es" ? "Check-in" : "Check-in"}
                </p>
                <p className="font-inter text-white/70 text-sm">
                  {lang === "es"
                    ? "Desde las 2:00 PM. Check-out hasta las 12:00 PM. Guardamos tu equipaje gratis antes y después."
                    : "From 2:00 PM. Check-out until 12:00 PM. We store your luggage free before and after."}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-arena shrink-0 mt-0.5" />
              <div>
                <p className="font-syne font-bold text-lg mb-1">
                  {lang === "es" ? "Dirección exacta" : "Exact address"}
                </p>
                <p className="font-inter text-white/70 text-sm">
                  {lang === "es"
                    ? "Cra. 8 No. 27 – 75, Barrio Bavaria, Santa Marta, Colombia"
                    : "Cra. 8 No. 27 – 75, Bavaria Neighborhood, Santa Marta, Colombia"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car size={24} className="text-arena shrink-0 mt-0.5" />
              <div>
                <p className="font-syne font-bold text-lg mb-1">
                  {lang === "es" ? "Taxi desde el hostal" : "Taxi from hostel"}
                </p>
                <p className="font-inter text-white/70 text-sm">
                  {lang === "es"
                    ? "Coordinamos taxi al aeropuerto, terminal y tours. Solo avísanos con 1 hora de antelación."
                    : "We coordinate taxis to the airport, terminal and tours. Just let us know 1 hour in advance."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby */}
        <div className="mt-16">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-grafito mb-8">
            {lang === "es" ? "Qué hay cerca" : "What's nearby"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyList.map((cat) => (
              <div key={cat.category} className="bg-white rounded-card p-5">
                <p className="font-syne font-bold text-terracota text-sm uppercase tracking-wider mb-3">
                  {cat.category}
                </p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="font-inter text-sm text-grafito-muted flex items-center gap-2">
                      <ChevronRight size={12} className="text-terracota shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
