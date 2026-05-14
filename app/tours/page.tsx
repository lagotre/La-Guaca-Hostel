import type { Metadata } from "next";
import ToursClient from "./ToursClient";

export const metadata: Metadata = {
  title: "Tours desde Santa Marta · Tayrona, Ciudad Perdida, Minca",
  description:
    "Organizamos tours a Tayrona, Ciudad Perdida, Playa Cristal, Minca y más desde La Guaca Hostel. Transporte, guía bilingüe y seguro incluidos.",
  openGraph: {
    title: "Tours desde Santa Marta · Tayrona, Ciudad Perdida, Minca",
    description:
      "Tours a Parque Tayrona, Ciudad Perdida Trek, Playa Cristal, Minca, velero y buceo PADI. Todo organizado desde el hostel. Grupos y privados.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/tours/",
  },
};

export default function ToursPage() {
  return <ToursClient />;
}
