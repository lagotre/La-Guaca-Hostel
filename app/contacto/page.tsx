"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, ChevronDown, ChevronUp, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const WA_NUMBER = "573000000000";

const faqs = {
  es: [
    {
      q: "¿A qué hora es el check-in y check-out?",
      a: "Check-in desde las 2:00 PM. Check-out hasta las 12:00 PM. Si llegas antes, guardamos tu equipaje de forma gratuita y puedes usar las instalaciones.",
    },
    {
      q: "¿Está incluido el desayuno en todos los tipos de habitación?",
      a: "Sí, el desayuno casero está incluido para todos los huéspedes, independientemente del tipo de habitación que reserves.",
    },
    {
      q: "¿Cuál es la política de cancelación?",
      a: "Cancelación gratuita hasta 48 horas antes del check-in. Reservas realizadas directamente en el hostal: cancela hasta 24 horas antes sin cargo.",
    },
    {
      q: "¿Aceptan pagos en efectivo y tarjeta?",
      a: "Aceptamos efectivo (COP y USD) y tarjetas de crédito/débito. Para reservas online puedes pagar con tarjeta o transferencia bancaria.",
    },
    {
      q: "¿Hay edad mínima para hospedarse?",
      a: "Mayores de 18 años para los dormitorios compartidos. Familias con menores pueden hospedarse en habitaciones privadas.",
    },
    {
      q: "¿El WiFi es realmente rápido?",
      a: "Tenemos fibra óptica de 200 Mbps dedicada. Suficiente para trabajar en remoto, videollamadas y streaming. También tenemos zona de coworking.",
    },
    {
      q: "¿Organizan los tours ellos mismos o son terceros?",
      a: "Trabajamos con operadores locales de confianza con los que llevamos años. No somos agencia, pero te conectamos y te garantizamos buena atención.",
    },
    {
      q: "¿Hay estacionamiento?",
      a: "No tenemos estacionamiento propio, pero hay parqueaderos públicos cercanos. Consulta precios en recepción.",
    },
  ],
  en: [
    {
      q: "What time is check-in and check-out?",
      a: "Check-in from 2:00 PM. Check-out until 12:00 PM. If you arrive earlier, we store your luggage for free and you can use the facilities.",
    },
    {
      q: "Is breakfast included in all room types?",
      a: "Yes, homemade breakfast is included for all guests, regardless of the room type you book.",
    },
    {
      q: "What is the cancellation policy?",
      a: "Free cancellation up to 48 hours before check-in. Bookings made directly at the hostel: cancel up to 24 hours in advance at no charge.",
    },
    {
      q: "Do you accept cash and card payments?",
      a: "We accept cash (COP and USD) and credit/debit cards. For online bookings you can pay by card or bank transfer.",
    },
    {
      q: "Is there a minimum age to stay?",
      a: "18+ for shared dorms. Families with children can stay in private rooms.",
    },
    {
      q: "Is the WiFi really fast?",
      a: "We have dedicated 200 Mbps fiber optic. Enough for remote work, video calls and streaming. We also have a coworking area.",
    },
    {
      q: "Do you run tours yourselves or are they third parties?",
      a: "We work with trusted local operators we've collaborated with for years. We're not an agency, but we connect you and guarantee good service.",
    },
    {
      q: "Is there parking?",
      a: "We don't have our own parking, but there are public parking lots nearby. Ask at reception for prices.",
    },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-crema-dark last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-syne font-semibold text-grafito text-base">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-terracota shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-grafito-muted shrink-0" />
        )}
      </button>
      {open && (
        <p className="font-inter text-grafito-muted text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function ContactoPage() {
  const { lang } = useLang();
  const faqList = faqs[lang];
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    lang === "es"
      ? "Hola! Tengo una consulta sobre La Guaca Hostel"
      : "Hi! I have a question about La Guaca Hostel"
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, submitted: true }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-56 md:h-72 flex items-end pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop&q=80"
            alt="Social area La Guaca"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">
            {lang === "es" ? "Contacto & FAQ" : "Contact & FAQ"}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form + info */}
          <div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-grafito mb-2">
              {lang === "es" ? "Escríbenos" : "Get in Touch"}
            </h2>
            <p className="font-inter text-grafito-muted mb-8">
              {lang === "es"
                ? "Respondemos en menos de 2 horas en horario de 8am–10pm (COT)."
                : "We respond in less than 2 hours between 8am–10pm (COT)."}
            </p>

            {/* Quick contacts */}
            <div className="space-y-3 mb-10">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-card p-4 hover:bg-[#25D366]/20 transition-colors group"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
                <div>
                  <p className="font-syne font-semibold text-grafito text-sm">WhatsApp</p>
                  <p className="font-inter text-xs text-grafito-muted">+57 300 000 0000</p>
                </div>
                <span className="ml-auto font-inter text-xs text-[#25D366] font-semibold group-hover:underline">
                  {lang === "es" ? "Escribir" : "Chat"}
                </span>
              </a>
              <a
                href="mailto:hola@laguacahostel.com"
                className="flex items-center gap-4 bg-white border border-crema-dark rounded-card p-4 hover:border-terracota transition-colors group"
              >
                <Mail size={22} className="text-terracota" />
                <div>
                  <p className="font-syne font-semibold text-grafito text-sm">Email</p>
                  <p className="font-inter text-xs text-grafito-muted">hola@laguacahostel.com</p>
                </div>
                <span className="ml-auto font-inter text-xs text-terracota font-semibold group-hover:underline">
                  {lang === "es" ? "Escribir" : "Write"}
                </span>
              </a>
              <div className="flex items-center gap-4 bg-white border border-crema-dark rounded-card p-4">
                <MapPin size={22} className="text-terracota" />
                <div>
                  <p className="font-syne font-semibold text-grafito text-sm">
                    {lang === "es" ? "Dirección" : "Address"}
                  </p>
                  <p className="font-inter text-xs text-grafito-muted">
                    Barrio Bavaria, Santa Marta, Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            {!formState.submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-inter text-sm font-medium text-grafito block mb-1.5">
                    {lang === "es" ? "Nombre" : "Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    className="w-full border border-crema-dark rounded-card px-4 py-3 font-inter text-sm focus:outline-none focus:border-terracota transition-colors bg-white"
                    placeholder={lang === "es" ? "Tu nombre" : "Your name"}
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-grafito block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    className="w-full border border-crema-dark rounded-card px-4 py-3 font-inter text-sm focus:outline-none focus:border-terracota transition-colors bg-white"
                    placeholder={lang === "es" ? "tu@email.com" : "your@email.com"}
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-grafito block mb-1.5">
                    {lang === "es" ? "Mensaje" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    className="w-full border border-crema-dark rounded-card px-4 py-3 font-inter text-sm focus:outline-none focus:border-terracota transition-colors bg-white resize-none"
                    placeholder={
                      lang === "es"
                        ? "¿Tienes alguna pregunta? ¿Vienes en grupo?"
                        : "Have a question? Coming as a group?"
                    }
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  {lang === "es" ? "Enviar mensaje" : "Send message"}
                </button>
              </form>
            ) : (
              <div className="bg-selva/10 border border-selva/30 rounded-card p-6 text-center">
                <p className="font-syne font-bold text-selva text-xl mb-2">
                  {lang === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                </p>
                <p className="font-inter text-grafito-muted text-sm">
                  {lang === "es"
                    ? "Te respondemos en menos de 2 horas. También puedes escribirnos por WhatsApp si es urgente."
                    : "We'll get back to you in under 2 hours. You can also WhatsApp us if it's urgent."}
                </p>
              </div>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-grafito mb-2">
              {lang === "es" ? "Preguntas frecuentes" : "Frequently Asked Questions"}
            </h2>
            <p className="font-inter text-grafito-muted mb-8">
              {lang === "es"
                ? "Todo lo que necesitas saber antes de llegar."
                : "Everything you need to know before you arrive."}
            </p>
            <div className="bg-white rounded-card px-6">
              {faqList.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
