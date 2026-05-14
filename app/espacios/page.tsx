import type { Metadata } from "next";
import EspaciosClient from "./EspaciosClient";

export const metadata: Metadata = {
  title: "Servicios y Amenidades · La Guaca Hostel Santa Marta",
  description:
    "Piscina jacuzzi, coworking con fibra óptica, bar Don Carlos Tacos & Margaritas, desayuno incluido, cocina comunitaria y más en La Guaca Hostel.",
  openGraph: {
    title: "Servicios y Amenidades · La Guaca Hostel Santa Marta",
    description:
      "Todo lo que necesitas en un hostel: piscina jacuzzi, coworking real, desayuno casero, bar, cocina comunitaria, lockers y staff bilingüe.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/espacios/",
  },
};

export default function EspaciosPage() {
  return <EspaciosClient />;
}
