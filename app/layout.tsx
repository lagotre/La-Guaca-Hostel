import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "La Guaca Hostel · Santa Marta, Colombia",
    template: "%s",
  },
  verification: {
    google: "UdFnIqu39TEdzf_828UuG_lZQJ8Ij3mz_9oUv3xb62U",
  },
  description:
    "Hostel con piscina jacuzzi y desayuno incluido en Santa Marta. Base perfecta para Tayrona, Minca y Ciudad Perdida. Reserva directo y ahorra.",
  keywords: [
    "hostel santa marta",
    "hostal santa marta",
    "la guaca hostel",
    "hostel santa marta jacuzzi",
    "hostel santa marta con desayuno",
    "tayrona tour",
    "ciudad perdida trek",
    "minca santa marta",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png" },
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
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
    <html lang="es" className={`${raleway.variable} ${lato.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKQWGQZD');`,
          }}
        />
        {/* Schema: LodgingBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "La Guaca Hostel",
              description:
                "Hostel en Barrio Bavaria, Santa Marta, Colombia. Piscina jacuzzi, desayuno incluido, coworking con fibra óptica y tours organizados a Tayrona, Minca y Ciudad Perdida.",
              url: "https://laguacahostel.com",
              logo: "https://laguacahostel.com/logo-cuadrado.png",
              image: "https://laguacahostel.com/hero-recepcion.jpg",
              telephone: "+573046537134",
              email: "info@laguacahostel.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cra. 8 No. 27 – 75",
                addressLocality: "Santa Marta",
                addressRegion: "Magdalena",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 11.2408,
                longitude: -74.2095,
              },
              priceRange: "$$",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Piscina Jacuzzi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Desayuno gratuito", value: true },
                { "@type": "LocationFeatureSpecification", name: "WiFi fibra óptica", value: true },
                { "@type": "LocationFeatureSpecification", name: "Coworking", value: true },
                { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
                { "@type": "LocationFeatureSpecification", name: "Restaurante", value: true },
                { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
                { "@type": "LocationFeatureSpecification", name: "Lavandería", value: true },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "9.2",
                bestRating: "10",
                reviewCount: "500",
                ratingCount: "500",
              },
              sameAs: [
                "https://www.instagram.com/laguacahostel",
                "https://www.facebook.com/laguacahostel",
              ],
              checkInTime: "14:00",
              checkOutTime: "12:00",
              petsAllowed: false,
            }),
          }}
        />
        {/* Schema: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿El desayuno está incluido en el precio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos los huéspedes de La Guaca Hostel reciben desayuno casero gratuito cada mañana, independientemente del tipo de habitación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo llegar al hostel desde el aeropuerto?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El aeropuerto Simón Bolívar está a solo 15 minutos del hostel. El taxi oficial cuesta entre COP 25.000 y 35.000. También coordinamos el taxi directamente desde el hostel.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El hostel organiza tours a Parque Tayrona y Ciudad Perdida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, organizamos tours a Parque Tayrona, Ciudad Perdida Trek (4-5 días), Playa Cristal, Minca, Playa Cinto, buceo PADI y velero por Tayrona. Todos incluyen transporte y guía bilingüe.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Tienen espacio de coworking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, tenemos un espacio de coworking con fibra óptica real, buena silla, buena iluminación y ambiente del hostal. Ideal para nómadas digitales y viajeros que trabajan remotamente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la ventaja de reservar directo vs Hostelworld o Booking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Reservando directamente en nuestro sistema obtienes el mejor precio garantizado, sin comisiones de intermediarios. También puedes coordinar llegada, tours y servicios directamente con nosotros.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKQWGQZD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
