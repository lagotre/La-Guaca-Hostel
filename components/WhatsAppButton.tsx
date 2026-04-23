"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";

const WA_NUMBER = "573000000000";
const WA_MESSAGE_ES = "Hola! Me gustaría saber más sobre La Guaca Hostel";
const WA_MESSAGE_EN = "Hi! I'd like to know more about La Guaca Hostel";

export default function WhatsAppButton() {
  const { lang } = useLang();
  const msg = lang === "es" ? WA_MESSAGE_ES : WA_MESSAGE_EN;
  const label = content[lang].cta.whatsapp;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-syne font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
    >
      <span className="flex items-center justify-center w-14 h-14">
        <MessageCircle size={26} fill="white" />
      </span>
      <span className="pr-5 hidden sm:block text-sm whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500">
        {label}
      </span>
    </a>
  );
}
