import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto · La Guaca Hostel · Santa Marta Colombia",
  description:
    "¿Tienes preguntas? Escríbenos por WhatsApp, email o visítanos en Barrio Bavaria. Respondemos en menos de 2 horas. También encontrarás nuestras preguntas frecuentes.",
  openGraph: {
    title: "Contacto · La Guaca Hostel · Santa Marta Colombia",
    description:
      "Contáctanos por WhatsApp al +57 304 653 7134 o por email. Respondemos en menos de 2 horas. FAQ de check-in, reservas, tours y más.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/contacto/",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
