import type { Metadata } from "next";
import UbicacionClient from "./UbicacionClient";

export const metadata: Metadata = {
  title: "Cómo llegar a La Guaca Hostel · Barrio Bavaria, Santa Marta",
  description:
    "En el Barrio Bavaria, a 5 min del centro histórico de Santa Marta. Fácil acceso desde el aeropuerto Simón Bolívar, la terminal de buses y El Rodadero.",
  openGraph: {
    title: "Cómo llegar a La Guaca Hostel · Barrio Bavaria, Santa Marta",
    description:
      "Cra. 8 No. 27-75, Barrio Bavaria, Santa Marta. Taxi desde el aeropuerto en 15 min. Te coordinamos el transporte.",
    type: "website",
    locale: "es_CO",
    url: "https://laguacahostel.com/ubicacion/",
  },
};

export default function UbicacionPage() {
  return <UbicacionClient />;
}
