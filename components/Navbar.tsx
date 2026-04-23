"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const BOOK_URL = "https://app.lobbypms.com/booking/la-guaca-hostel";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = content[lang].nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/habitaciones", label: t.rooms },
    { href: "/tours", label: t.tours },
    { href: "/ubicacion", label: t.location },
    { href: "/contacto", label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-syne font-bold text-xl tracking-tight transition-colors ${
              scrolled ? "text-grafito" : "text-white"
            }`}
          >
            La Guaca
            <span className="text-terracota"> Hostel</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-inter text-sm font-medium transition-colors hover:text-terracota ${
                  scrolled ? "text-grafito" : "text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className={`hidden lg:block font-inter text-sm font-semibold px-3 py-1 rounded-full border transition-colors ${
                scrolled
                  ? "border-grafito text-grafito hover:border-terracota hover:text-terracota"
                  : "border-white text-white hover:border-arena hover:text-arena"
              }`}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* Book Now CTA */}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-5"
            >
              {t.bookNow}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-grafito" : "text-white"
              }`}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-crema-dark shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-grafito font-medium py-3 border-b border-crema-dark hover:text-terracota transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <span className="font-inter text-sm text-grafito-muted">
                {lang === "es" ? "Idioma" : "Language"}
              </span>
              <button
                onClick={toggle}
                className="font-syne font-semibold text-sm px-4 py-2 rounded-full border border-grafito text-grafito hover:border-terracota hover:text-terracota transition-colors"
              >
                {lang === "es" ? "Switch to EN" : "Cambiar a ES"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
