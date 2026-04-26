"use client";

import Image from "next/image";
import { Users, Check, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const BOOK_URL = "https://engine.lobbypms.com/la-guaca-hostel";

const rooms = {
  es: [
    {
      id: "dorm-mixed",
      name: "Dormitorios Mixtos",
      description:
        "La opción perfecta para el viajero social. Comparte el espacio con gente de todo el mundo, conoce nuevas historias y ahorra para lo que importa: explorar Santa Marta y sus alrededores. Disponible en versión de 6 y 8 personas.",
      capacity: "6 u 8 personas",
      priceUSD: "USD 13",
      priceCOP: "COP 55.000",
      images: ["/room-dorm.jpg", "/room-pool.jpg"],
      amenities: [
        "Camas literas con colchón premium",
        "Taquilla con llave incluida",
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
      id: "familia-amigos",
      name: "Habitaciones Familia o Amigos",
      description:
        "Ideal para familias o grupos de amigos que viajan juntos. Espacio amplio y privado con cama doble y literas, baño propio y todas las comodidades del hostal. La solución perfecta para grupos de hasta 4 personas que quieren su propio espacio.",
      capacity: "Hasta 4 personas",
      priceUSD: "USD 55",
      priceCOP: "COP 230.000",
      images: ["/room-familia.jpg", "/room-pool.jpg"],
      amenities: [
        "1 cama doble + 1 litera (2 camas individuales)",
        "Baño privado",
        "Aire acondicionado",
        "Armario",
        "Desayuno gratuito incluido",
        "WiFi fibra óptica",
        "Acceso a piscina jacuzzi",
        "Área social 24h",
      ],
      tag: "Grupos y familias",
      tagColor: "bg-selva",
    },
    {
      id: "private-double",
      name: "Habitaciones Privadas Doble",
      description:
        "Toda la vibra del hostal con la privacidad de tu propio espacio. Cama matrimonial, aire acondicionado y baño privado con estilo. Para parejas o viajeros que quieren lo mejor de los dos mundos.",
      capacity: "2 personas",
      priceUSD: "USD 38",
      priceCOP: "COP 160.000",
      images: ["/room-doble.jpg", "/room-bathroom.jpg"],
      amenities: [
        "Cama doble matrimonial",
        "Aire acondicionado",
        "Baño privado con ducha caliente",
        "Armario",
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
      name: "Habitaciones Privadas Twin",
      description:
        "Perfecta para dos amigos o compañeros de viaje que prefieren camas separadas. Mismas comodidades que la doble — aire acondicionado, baño privado y desayuno incluido — con dos camas individuales.",
      capacity: "2 personas",
      priceUSD: "USD 40",
      priceCOP: "COP 170.000",
      images: ["/room-twin.jpg", "/room-bathroom.jpg"],
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
      name: "Mixed Dorms",
      description:
        "The perfect option for the social traveler. Share the space with people from all over the world, discover new stories and save for what matters: exploring Santa Marta and beyond. Available in 6 and 8-bed configurations.",
      capacity: "6 or 8 people",
      priceUSD: "USD 13",
      priceCOP: "COP 55,000",
      images: ["/room-dorm.jpg", "/room-pool.jpg"],
      amenities: [
        "Bunk beds with premium mattress",
        "Locker with key included",
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
      id: "familia-amigos",
      name: "Family or Friends Rooms",
      description:
        "Ideal for families or groups of friends traveling together. Spacious private room with a double bed and bunk beds, private bathroom and all hostel amenities. The perfect solution for groups of up to 4 who want their own space.",
      capacity: "Up to 4 people",
      priceUSD: "USD 55",
      priceCOP: "COP 230,000",
      images: ["/room-familia.jpg", "/room-pool.jpg"],
      amenities: [
        "1 double bed + 1 bunk bed (2 single beds)",
        "Private bathroom",
        "Air conditioning",
        "Wardrobe",
        "Free breakfast included",
        "Fiber optic WiFi",
        "Jacuzzi pool access",
        "Social area 24h",
      ],
      tag: "Groups & families",
      tagColor: "bg-selva",
    },
    {
      id: "private-double",
      name: "Private Double Rooms",
      description:
        "All the hostel vibe with the privacy of your own space. Double bed, air conditioning and a stylish private bathroom. For couples or travelers who want the best of both worlds.",
      capacity: "2 people",
      priceUSD: "USD 38",
      priceCOP: "COP 160,000",
      images: ["/room-doble.jpg", "/room-bathroom.jpg"],
      amenities: [
        "Double bed",
        "Air conditioning",
        "Private bathroom with hot shower",
        "Wardrobe",
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
      name: "Private Twin Rooms",
      description:
        "Perfect for two friends or travel companions who prefer separate beds. Same amenities as the double — air conditioning, private bathroom and breakfast included — with two single beds.",
      capacity: "2 people",
      priceUSD: "USD 40",
      priceCOP: "COP 170,000",
      images: ["/room-twin.jpg", "/room-bathroom.jpg"],
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
            src="/room-twin.jpg"
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

              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {lang === "es" ? "Reservar" : "Book now"}
                <ChevronRight size={16} />
              </a>
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
