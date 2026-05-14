"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const nav = t.nav;
  const footer = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grafito text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo-cuadrado.png"
                alt="La Guaca Hostel"
                width={225}
                height={225}
                className="w-[210px] h-auto object-contain"
              />
            </Link>
            <p className="font-inter text-sm text-white/60 leading-relaxed mb-5">
              {lang === "es"
                ? "Tu base en el Caribe colombiano. Donde cada viaje comienza."
                : "Your base on the Colombian Caribbean. Where every trip starts."}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/laguacahostel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-terracota hover:text-terracota transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/laguacahostel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-terracota hover:text-terracota transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {lang === "es" ? "Páginas" : "Pages"}
            </p>
            <ul className="space-y-2">
              {[
                { href: "/habitaciones", label: nav.rooms },
                { href: "/tours", label: nav.tours },
                { href: "/ubicacion", label: nav.location },
                { href: "/contacto", label: nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <p className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {lang === "es" ? "Destinos" : "Destinations"}
            </p>
            <ul className="space-y-2">
              {[
                { label: "Parque Tayrona", slug: "parque-tayrona" },
                { label: "Playa Cristal", slug: "playa-cristal" },
                { label: "Minca", slug: "minca-tour-dia-completo" },
                { label: "Ciudad Perdida", slug: "ciudad-perdida-trek" },
                { label: "Buceo PADI", slug: "buceo-padi-santa-marta" },
                { label: "Velero Tayrona", slug: "velero-tayrona" },
              ].map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/tours/${d.slug}`}
                    className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-syne font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {lang === "es" ? "Contacto" : "Contact"}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-terracota mt-0.5 shrink-0" />
                <span className="font-inter text-sm text-white/70">{footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-terracota shrink-0" />
                <a
                  href={`tel:${footer.phone}`}
                  className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                >
                  {footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-terracota shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                >
                  {footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            &copy; {year} {footer.rights}
          </p>
          <p className="font-inter text-xs text-white/30">
            {lang === "es" ? "Hecho con ♥ en el Caribe" : "Made with ♥ in the Caribbean"}
          </p>
        </div>
      </div>
    </footer>
  );
}
