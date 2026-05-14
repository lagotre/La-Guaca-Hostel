import type { Metadata } from "next";
import HabitacionesClient from "./HabitacionesClient";

export const metadata: Metadata = {
  title: "Habitaciones · Dormitorios y Privadas · La Guaca Hostel",
  description:
    "Dormitorios mixtos, habitaciones privadas doble, twin y familiar en Santa Marta. Todos con desayuno incluido y acceso a piscina jacuzzi. Reserva directo.",
  openGraph: {
    title: "Habitaciones en La Guaca Hostel · Santa Marta",
    description:
      "Elige tu habitación: dormitorio mixto, privada doble, twin o familiar. Desayuno casero y piscina jacuzzi incluidos para todos los huéspedes.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/habitaciones/",
  },
};

export default function HabitacionesPage() {
  return <HabitacionesClient />;
}
