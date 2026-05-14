import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "La Guaca Hostel · Santa Marta, Colombia",
  description:
    "Hostel con piscina jacuzzi y desayuno incluido en Santa Marta. Base perfecta para Tayrona, Minca y Ciudad Perdida. Reserva directo y ahorra.",
  keywords: [
    "hostel santa marta",
    "hostal santa marta",
    "hostel santa marta jacuzzi",
    "hostel santa marta con desayuno",
    "hostel barrio bavaria santa marta",
    "la guaca hostel",
    "tayrona tour santa marta",
    "ciudad perdida trek",
    "minca santa marta",
  ],
  openGraph: {
    title: "La Guaca Hostel · Santa Marta, Colombia",
    description:
      "Hostel con piscina jacuzzi y desayuno incluido. Base perfecta para Tayrona, Minca y Ciudad Perdida. Reserva directo.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
