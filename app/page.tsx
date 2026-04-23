"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Waves,
  Coffee,
  Compass,
  Wifi,
  Monitor,
  Car,
  Shield,
  Users,
  Shirt,
  Star,
  ChevronRight,
  ArrowDown,
  Clock,
  Zap,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const BOOK_URL = "https://app.lobbypms.com/booking/la-guaca-hostel";
const WA_NUMBER = "573000000000";

const ICON_MAP: Record<string, React.ElementType> = {
  MapPin,
  Waves,
  Coffee,
  Compass,
  Wifi,
  Monitor,
  Car,
  Shield,
  Users,
  Shirt,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= Math.round(rating / 2) ? "text-arena fill-arena" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const { lang } = useLang();
  const t = content[lang];

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    lang === "es"
      ? "Hola! Quiero saber más sobre tours y habitaciones"
      : "Hi! I'd like to know more about tours and rooms"
  )}`;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&auto=format&fit=crop&q=80"
            alt="La Guaca Hostel piscina"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-grafito/70 via-grafito/40 to-grafito/80" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="font-inter text-sm uppercase tracking-[0.25em] text-arena mb-6 animate-fade-in">
            Santa Marta, Colombia · Barrio Bavaria
          </p>
          <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-8xl leading-none mb-4 animate-slide-up">
            {t.hero.tagline}
          </h1>
          <p className="font-syne text-2xl sm:text-3xl text-white/70 mb-4 animate-slide-up">
            {t.hero.taglineAlt}
          </p>
          <p className="font-inter text-lg text-white/80 mb-10 max-w-xl mx-auto animate-fade-in">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              {t.hero.bookNow}
            </a>
            <Link href="/habitaciones" className="btn-white text-base px-8 py-4">
              {t.hero.seeRooms}
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-8 sm:gap-16 text-white/60 font-inter text-sm">
            <div className="text-center">
              <p className="font-syne font-bold text-3xl text-white">9.2</p>
              <p className="text-xs mt-1">Hostelworld</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="font-syne font-bold text-3xl text-white">500+</p>
              <p className="text-xs mt-1">{lang === "es" ? "Reseñas" : "Reviews"}</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="font-syne font-bold text-3xl text-white">5</p>
              <p className="text-xs mt-1">{lang === "es" ? "Destinos clave" : "Key destinations"}</p>
            </div>
          </div>
        </div>

        <a
          href="#why"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </section>

      {/* ─── WHY LA GUACA ─── */}
      <section id="why" className="py-20 lg:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-inter text-sm uppercase tracking-widest text-terracota mb-3">
            {lang === "es" ? "Nuestra propuesta" : "Why us"}
          </p>
          <h2 className="section-heading">{t.why.heading}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Compass;
            return (
              <div
                key={i}
                className="bg-white rounded-card p-6 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-terracota/10 rounded-card flex items-center justify-center mb-5 group-hover:bg-terracota group-hover:text-white transition-colors duration-300">
                  <Icon size={22} className="text-terracota group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-syne font-bold text-lg text-grafito mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-grafito-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── ROOMS ─── */}
      <section className="py-20 lg:py-28 bg-crema-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-inter text-sm uppercase tracking-widest text-terracota mb-3">
                {lang === "es" ? "Dónde dormir" : "Where to sleep"}
              </p>
              <h2 className="section-heading">{t.rooms.heading}</h2>
              <p className="font-inter text-grafito-muted mt-3 max-w-lg">{t.rooms.subheading}</p>
            </div>
            <Link href="/habitaciones" className="btn-secondary text-sm shrink-0">
              {t.rooms.seeAll}
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.rooms.items.map((room) => (
              <div key={room.id} className="card group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.tag && (
                    <span className="absolute top-3 left-3 bg-terracota text-white font-syne font-semibold text-xs px-3 py-1 rounded-full">
                      {room.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-syne font-bold text-lg text-grafito">{room.name}</h3>
                      <p className="font-inter text-xs text-grafito-muted flex items-center gap-1 mt-0.5">
                        <Users size={12} /> {room.capacity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-syne font-bold text-terracota text-lg">{room.priceUSD}</p>
                      <p className="font-inter text-xs text-grafito-muted">{t.rooms.night}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.amenities.map((a) => (
                      <span
                        key={a}
                        className="font-inter text-xs bg-crema text-grafito-muted px-2 py-1 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-sm py-2.5"
                  >
                    {t.rooms.bookRoom}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-inter text-sm uppercase tracking-widest text-terracota mb-3">
            {lang === "es" ? "Comodidades" : "Amenities"}
          </p>
          <h2 className="section-heading">{t.services.heading}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {t.services.items.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] || Compass;
            const isPrimary = i < 4;
            return (
              <div
                key={svc.label}
                className={`rounded-card p-5 flex flex-col items-center text-center gap-3 ${
                  isPrimary
                    ? "bg-selva text-white"
                    : "bg-white text-grafito border border-crema-dark"
                }`}
              >
                <Icon size={24} className={isPrimary ? "text-arena" : "text-terracota"} />
                <p className={`font-syne font-semibold text-sm ${isPrimary ? "text-white" : "text-grafito"}`}>
                  {svc.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── DESTINATIONS ─── */}
      <section className="py-20 lg:py-28 bg-grafito text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-inter text-sm uppercase tracking-widest text-arena mb-3">
              {lang === "es" ? "Explora" : "Explore"}
            </p>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white">{t.destinations.heading}</h2>
            <p className="font-inter text-white/60 mt-3 max-w-lg mx-auto">{t.destinations.subheading}</p>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Feature card (Tayrona) */}
            <div className="md:col-span-7 relative h-72 md:h-96 rounded-card overflow-hidden group cursor-pointer">
              <Image
                src={t.destinations.items[0].img}
                alt={t.destinations.items[0].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-inter text-xs text-arena uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Clock size={12} /> {t.destinations.items[0].duration}
                </p>
                <h3 className="font-syne font-bold text-2xl text-white">{t.destinations.items[0].name}</h3>
                <p className="font-inter text-sm text-white/70 mt-1">{t.destinations.items[0].desc}</p>
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {t.destinations.items.slice(1, 3).map((dest) => (
                <div key={dest.name} className="relative h-44 rounded-card overflow-hidden group cursor-pointer flex-1">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="font-inter text-xs text-arena uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <Clock size={11} /> {dest.duration}
                    </p>
                    <h3 className="font-syne font-bold text-lg text-white">{dest.name}</h3>
                    <p className="font-inter text-xs text-white/60 mt-0.5">{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            {t.destinations.items.slice(3).map((dest) => (
              <div key={dest.name} className="md:col-span-6 relative h-44 rounded-card overflow-hidden group cursor-pointer">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-inter text-xs text-arena uppercase tracking-wider mb-0.5 flex items-center gap-1">
                    <Clock size={11} /> {dest.duration}
                  </p>
                  <h3 className="font-syne font-bold text-lg text-white">{dest.name}</h3>
                  <p className="font-inter text-xs text-white/60 mt-0.5">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/tours" className="btn-white text-sm">
              {lang === "es" ? "Ver todos los tours" : "See all tours"}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 lg:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-inter text-sm uppercase tracking-widest text-terracota mb-3">
              {lang === "es" ? "Opiniones reales" : "Real opinions"}
            </p>
            <h2 className="section-heading">{t.reviews.heading}</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="font-syne font-bold text-5xl text-terracota">{t.reviews.score}</span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="text-arena fill-arena" />
                  ))}
                </div>
                <p className="font-inter text-xs text-grafito-muted mt-1">{t.reviews.platform}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.reviews.items.map((review, i) => (
              <div key={i} className="bg-white rounded-card p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-syne font-bold text-grafito">{review.name}</p>
                    <p className="font-inter text-xs text-grafito-muted flex items-center gap-1">
                      <MapPin size={11} /> {review.country}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-syne font-bold text-terracota text-xl">{review.rating}/10</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="font-inter text-sm text-grafito-light leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOURS PREVIEW ─── */}
      <section className="py-20 lg:py-28 bg-crema-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-inter text-sm uppercase tracking-widest text-terracota mb-3">
                {lang === "es" ? "Aventura" : "Adventure"}
              </p>
              <h2 className="section-heading">{t.tours.heading}</h2>
              <p className="font-inter text-grafito-muted mt-3 max-w-lg">{t.tours.subheading}</p>
            </div>
            <Link href="/tours" className="btn-secondary text-sm shrink-0">
              {t.tours.seeAll}
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.tours.items.map((tour) => (
              <div key={tour.id} className="card group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={tour.img}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grafito/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2">
                    <span className="font-inter text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock size={11} /> {tour.duration}
                    </span>
                    <span className={`font-inter text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                      tour.difficulty === "Difícil" || tour.difficulty === "Hard"
                        ? "bg-terracota text-white"
                        : tour.difficulty === "Moderado" || tour.difficulty === "Moderate"
                        ? "bg-arena text-grafito"
                        : "bg-selva text-white"
                    }`}>
                      <Zap size={11} /> {tour.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-syne font-bold text-lg text-grafito mb-1">{tour.name}</h3>
                  <p className="font-syne font-semibold text-terracota mb-4">{tour.price}</p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center text-sm py-2.5"
                  >
                    {t.cta.askTour}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&auto=format&fit=crop&q=80"
            alt="Playa Colombia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-terracota/80" />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-4xl lg:text-5xl mb-4">
            {lang === "es" ? "¿Listo para el Caribe?" : "Ready for the Caribbean?"}
          </h2>
          <p className="font-inter text-white/80 text-lg mb-8">
            {lang === "es"
              ? "Reserva directo y consigue el mejor precio. Sin intermediarios."
              : "Book direct and get the best price. No middlemen."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-white text-base px-8 py-4">
              {t.cta.bookNow}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white font-syne font-semibold px-8 py-4 rounded-card hover:bg-white hover:text-terracota transition-colors duration-200">
              {t.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
