"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Zap,
  MapPin,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import type { Tour } from "@/lib/tours-data";

const WA_NUMBER = "573046537134";

const difficultyColor: Record<string, string> = {
  Fácil: "bg-selva text-white",
  Moderado: "bg-arena text-grafito",
  Difícil: "bg-terracota text-white",
  Easy: "bg-selva text-white",
  Moderate: "bg-arena text-grafito",
  Hard: "bg-terracota text-white",
};

interface Props {
  tour: Tour;
  relatedTours: Tour[];
}

export default function TourDetailClient({ tour, relatedTours }: Props) {
  const { lang } = useLang();
  const t = tour[lang];
  const diff = tour.difficulty[lang];
  const dur = tour.duration[lang];
  const dist = tour.distance[lang];

  const waMsg = encodeURIComponent(
    lang === "es"
      ? `Hola! Me gustaría reservar el tour: ${t.name}.`
      : `Hi! I'd like to book the tour: ${t.name}.`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.img}
            alt={t.h1}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1 font-inter text-xs text-white/60 hover:text-white mb-4 transition-colors"
          >
            ← {lang === "es" ? "Todos los tours" : "All tours"}
          </Link>
          <p className="font-inter text-sm text-terracota font-medium mb-2">{t.tagline}</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
            {t.h1}
          </h1>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-grafito text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 sm:gap-8 items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-terracota" />
            <span className="font-inter text-sm">{dur}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-terracota" />
            <span
              className={`font-inter text-xs px-2 py-0.5 rounded-full ${
                difficultyColor[diff] || "bg-white text-grafito"
              }`}
            >
              {diff}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-terracota" />
            <span className="font-inter text-sm">{dist}</span>
          </div>
          <div className="font-syne font-bold text-xl text-crema">{tour.price}</div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description + Tip */}
          <div className="lg:col-span-2 space-y-5">
            {t.fullDescription.map((para, i) => (
              <p key={i} className="font-inter text-grafito leading-relaxed">
                {para}
              </p>
            ))}

            <div className="flex gap-3 bg-arena/20 border border-arena/40 rounded-card p-4 mt-6">
              <Lightbulb size={18} className="text-arena shrink-0 mt-0.5" />
              <div>
                <p className="font-inter text-xs font-semibold text-grafito-muted uppercase tracking-wider mb-1">
                  {lang === "es" ? "Consejo del hostal" : "Hostel tip"}
                </p>
                <p className="font-inter text-sm text-grafito">{t.tip}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Includes + price + CTA */}
            <div className="bg-crema rounded-card p-6 border border-arena/30">
              <p className="font-syne font-semibold text-sm uppercase tracking-wider text-grafito-muted mb-4">
                {lang === "es" ? "Incluye" : "Includes"}
              </p>
              <ul className="space-y-2 mb-5">
                {t.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-inter text-sm text-grafito"
                  >
                    <CheckCircle2 size={15} className="text-selva shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-arena/30 pt-4 mb-5">
                <p className="font-inter text-xs text-grafito-muted mb-1">
                  {lang === "es" ? "Precio por persona" : "Price per person"}
                </p>
                <p className="font-syne font-bold text-2xl text-grafito">{tour.price}</p>
                <p className="font-inter text-xs text-grafito-muted mt-1">
                  {tour.priceNote[lang]}
                </p>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <MessageCircle size={16} />
                {lang === "es" ? "Reservar por WhatsApp" : "Book via WhatsApp"}
              </a>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-card p-5 border border-arena/20">
              <p className="font-syne font-semibold text-sm uppercase tracking-wider text-grafito-muted mb-3">
                {lang === "es" ? "Destacados" : "Highlights"}
              </p>
              <ul className="space-y-2">
                {tour.highlights[lang].map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 font-inter text-sm text-grafito"
                  >
                    <ChevronRight size={14} className="text-terracota shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-crema">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-syne font-bold text-3xl text-grafito mb-8">
            {lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <div className="space-y-6">
            {t.faqs.map((faq, i) => (
              <div key={i} className="border-b border-arena/40 pb-6 last:border-0 last:pb-0">
                <p className="font-syne font-semibold text-lg text-grafito mb-2">{faq.q}</p>
                <p className="font-inter text-grafito-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-syne font-bold text-2xl text-grafito mb-8">
              {lang === "es" ? "Otros tours desde La Guaca" : "Other tours from La Guaca"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedTours.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/tours/${rt.slug}`}
                  className="group rounded-card overflow-hidden border border-arena/20 hover:border-terracota transition-colors"
                >
                  <div className="relative h-40">
                    <Image
                      src={rt.img}
                      alt={rt[lang].name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grafito/70 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-inter text-xs text-white/80">
                        {rt.duration[lang]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-syne font-semibold text-grafito group-hover:text-terracota transition-colors">
                      {rt[lang].name}
                    </p>
                    <p className="font-inter text-xs text-grafito-muted mt-1">{rt.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 bg-selva text-white px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl mb-3">
            {lang === "es" ? "¿Listo para reservar?" : "Ready to book?"}
          </h2>
          <p className="font-inter text-white/70 mb-6 text-sm">
            {lang === "es"
              ? "Escríbenos por WhatsApp y te confirmamos disponibilidad en minutos."
              : "Message us on WhatsApp and we'll confirm availability within minutes."}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-selva font-syne font-semibold px-8 py-4 rounded-card hover:bg-crema transition-colors"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Reservar ahora" : "Book now"}
          </a>
        </div>
      </section>
    </>
  );
}
