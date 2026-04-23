import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Guaca Hostel | Santa Marta, Colombia",
  description:
    "Tu base en el Caribe colombiano. Piscina jacuzzi, desayuno incluido, tours a Tayrona, Minca y Ciudad Perdida. Reserva directo y ahorra.",
  keywords: [
    "hostal santa marta",
    "hostel colombia",
    "la guaca hostel",
    "tayrona",
    "minca",
    "ciudad perdida",
    "cartagena caribe",
  ],
  openGraph: {
    title: "La Guaca Hostel | Tu base en el Caribe",
    description: "Cómodo, bien ubicado y con todo para quedarte o para salir a explorar. Santa Marta, Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
