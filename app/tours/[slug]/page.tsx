import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTourBySlug, getRelatedTours, tourSlugs } from "@/lib/tours-data";
import TourDetailClient from "./TourDetailClient";

export async function generateStaticParams() {
  return tourSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};
  return {
    title: tour.es.metaTitle,
    description: tour.es.metaDescription,
    openGraph: {
      title: tour.es.metaTitle,
      description: tour.es.metaDescription,
      type: "website",
      locale: "es_CO",
      url: `https://laguacahostel.com/tours/${params.slug}/`,
      images: [{ url: `https://laguacahostel.com${tour.img}` }],
    },
  };
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const related = getRelatedTours(params.slug, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.es.name,
    description: tour.es.metaDescription,
    image: `https://laguacahostel.com${tour.img}`,
    provider: {
      "@type": "LocalBusiness",
      name: "La Guaca Hostel",
      url: "https://laguacahostel.com",
    },
    offers: {
      "@type": "Offer",
      price: tour.price.replace(/[^0-9]/g, ""),
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
    },
    touristType: "Adventure",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TourDetailClient tour={tour} relatedTours={related} />
    </>
  );
}
