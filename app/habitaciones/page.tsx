"use client";

import Image from "next/image";
import { Users, Check, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const BOOK_URL = "https://engine.lobbypms.com/la-guaca-hostel";

const rooms = {
  es: [
    {
      id: "dorm-mixed",
      name: "Dormitorio Mixto",
      description:
        "La opción perfecta para el viajero social. Conoce gente de todo el mundo, comparte experiencias y ahorra para gastar en lo que importa: explorar.",
      capacity: "6-8 personas",
      priceUSD: "USD 13",
      priceCOP: "COP 55.000",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Camas literas con colchón premium",
        "Taquilla con llave (bring your lock)",
        "Ventilador",
        "Baño compartido (2 personas por baño)",
        "Desayuno gratuito incluido",
        "WiFi fibra óptica",
        "Luz de lectura individual",
        "Acceso a piscina jacuzzi",
        "Área social 24h",
      ],
      tag: "Más popular",
      tagColor: "bg-terracota",
    },
    {
      id: "dorm-female",
      name: "Dormitorio Femenino",
      description:
        "Espacio seguro y relajado solo para viajeras. Mismas comodidades que el dorm mixto, con la tranquilidad de un ambiente exclusivo para mujeres.",
      capacity: "4-6 personas",
      priceUSD: "USD 14",
      priceCOP: "COP 60.000",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Solo para mujeres",
        "Camas literas con colchón premium",
        "Taquilla con llave",
        "Ventilador",
        "Baño compartido (privado del dorm)",
        "Desayuno gratuito incluido",
        "WiFi fibra óptica",
        "Acceso a piscina jacuzzi",
      ],
      tag: "Solo mujeres",
      tagColor: "bg-selva",
    },
    {
      id: "private-double",
      name: "Habitación Privada Doble",
      description:
        "Toda la vibra del hostal con la privacidad de tu propio espacio. Cama matrimonial, AC y baño privado. Para quienes quieren lo mejor de los dos mundos.",
      capacity: "2 personas",
      priceUSD: "USD 38",
      priceCOP: "COP 160.000",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Cama doble matrimonial",
        "Aire acondicionado",
        "Baño privado con ducha caliente",
        "Armario",
        "Escritorio de trabajo",
        "Desayuno gratuito incluido",
        "WiFi fibra óptica",
        "Acceso a piscina jacuzzi",
        "Área social 24h",
      ],
      tag: "Confort",
      tagColor: "bg-arena text-grafito",
    },
    {
      id: "private-twin",
      name: "Habitación Privada Twin",
      description:
        "Perfecta para dos amigos o viajeros que prefieren camas separadas. Mismas comodidades que la doble con dos camas individuales.",
      capacity: "2 personas",
      priceUSD: "USD 40",
      priceCOP: "COP 170.000",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "2 camas individuales",
        "Aire acondicionado",
        "Baño privado",
        "Armario",
        "Desayuno gratuito incluido",
        "WiFi fibra óptica",
        "Acceso a piscina jacuzzi",
      ],
      tag: null,
      tagColor: "",
    },
  ],
  en: [
    {
      id: "dorm-mixed",
      name: "Mixed Dorm",
      description:
        "The perfect option for the social traveler. Meet people from around the world, share experiences and save to spend on what matters: exploring.",
      capacity: "6-8 people",
      priceUSD: "USD 13",
      priceCOP: "COP 55,000",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Bunk beds with premium mattress",
        "Locker with key (bring your lock)",
        "Fan",
        "Shared bathroom (2 guests per bathroom)",
        "Free breakfast included",
        "Fiber optic WiFi",
        "Individual reading light",
        "Jacuzzi pool access",
        "Social area 24h",
      ],
      tag: "Most popular",
      tagColor: "bg-terracota",
    },
    {
      id: "dorm-female",
      name: "Female Only Dorm",
      description:
        "Safe and relaxed space for female travelers only. Same amenities as the mixed dorm with the peace of mind of a women-only environment.",
      capacity: "4-6 people",
      priceUSD: "USD 14",
      priceCOP: "COP 60,000",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Women only",
        "Bunk beds with premium mattress",
        "Locker with key",
        "Fan",
        "Shared bathroom (private to dorm)",
        "Free breakfast included",
        "Fiber optic WiFi",
        "Jacuzzi pool access",
      ],
      tag: "Women only",
      tagColor: "bg-selva",
    },
    {
      id: "private-double",
      name: "Private Double Room",
      description:
        "All the hostel vibe with the privacy of your own space. Double bed, AC and private bathroom. For those who want the best of both worlds.",
      capacity: "2 people",
      priceUSD: "USD 38",
      priceCOP: "COP 160,000",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "Double bed",
        "Air conditioning",
        "Private bathroom with hot shower",
        "Wardrobe",
        "Work desk",
        "Free breakfast included",
        "Fiber optic WiFi",
        "Jacuzzi pool access",
        "Social area 24h",
      ],
      tag: "Comfort",
      tagColor: "bg-arena text-grafito",
    },
    {
      id: "private-twin",
      name: "Private Twin Room",
      description:
        "Perfect for two friends or travelers who prefer separate beds. Same amenities as the double with two single beds.",
      capacity: "2 people",
      priceUSD: "USD 40",
      priceCOP: "COP 170,000",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=80",
      ],
      amenities: [
        "2 single beds",
        "Air conditioning",
        "Private bathroom",
        "Wardrobe",
        "Free breakfast included",
        "Fiber optic WiFi",
        "Jacuzzi pool access",
      ],
      tag: null,
      tagColor: "",
    },
  ],
};

export default function HabitacionesPage() {
  const { lang } = useLang();
  const roomList = rooms[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&auto=format&fit=crop&q=80"
            alt="Habitaciones La Guaca"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-inter text-xs uppercase tracking-widest text-arena mb-2">
            {lang === "es" ? "Dónde dormir" : "Where to sleep"}
          </p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">
            {lang === "es" ? "Habitaciones" : "Rooms"}
          </h1>
        </div>
      </section>

      {/* Rooms list */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-20">
        {roomList.map((room, idx) => (
          <div
            key={room.id}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
          >
            {/* Images */}
            <div className="w-full lg:w-1/2 flex gap-3">
              <div className="relative flex-1 h-64 md:h-80 rounded-card overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                {room.tag && (
                  <span
                    className={`absolute top-3 left-3 font-syne font-semibold text-xs px-3 py-1 rounded-full text-white ${room.tagColor}`}
                  >
                    {room.tag}
                  </span>
                )}
              </div>
              <div className="relative w-28 hidden sm:block h-64 md:h-80 rounded-card overflow-hidden">
                <Image
                  src={room.images[1]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <Users size={15} className="text-terracota" />
                <span className="font-inter text-sm text-grafito-muted">{room.capacity}</span>
              </div>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-grafito mb-3">
                {room.name}
              </h2>
              <p className="font-inter text-grafito-muted leading-relaxed mb-5">{room.description}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 font-inter text-sm text-grafito">
                    <Check size={14} className="text-selva shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 flex-wrap">
                <div>
                  <p className="font-syne font-bold text-3xl text-terracota">{room.priceUSD}</p>
                  <p className="font-inter text-xs text-grafito-muted">{room.priceCOP} · {lang === "es" ? "por noche" : "per night"}</p>
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {lang === "es" ? "Reservar esta habitación" : "Book this room"}
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Included section */}
      <section className="py-16 bg-selva text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-3xl md:text-4xl mb-4">
            {lang === "es" ? "En todas las habitaciones" : "In all rooms"}
          </h2>
          <p className="font-inter text-white/70 mb-10">
            {lang === "es"
              ? "Sin importar el tipo de habitación, todos los huéspedes tienen acceso a:"
              : "Regardless of room type, all guests have access to:"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {(lang === "es"
              ? [
                  "Desayuno casero gratuito",
                  "Piscina jacuzzi",
                  "WiFi fibra óptica",
                  "Área social 24h",
                  "Consigna de equipaje",
                  "Info sobre tours y rutas",
                ]
              : [
                  "Free homemade breakfast",
                  "Jacuzzi pool",
                  "Fiber optic WiFi",
                  "Social area 24h",
                  "Luggage storage",
                  "Tours and routes info",
                ]
            ).map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={14} className="text-arena shrink-0" />
                <span className="font-inter text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
