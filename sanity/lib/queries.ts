import { client } from "./client";
import { content } from "@/lib/content";
import { urlFor } from "./image";

const isConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);

function resolveImage(img: { asset?: unknown } | null, fallback: string): string {
  if (!img?.asset) return fallback;
  try {
    return urlFor(img).width(900).auto("format").url();
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  if (!isConfigured) return null;
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]{
      bookingUrl,
      whatsappNumber,
      "hero": {
        "es": { "tagline": hero.tagline.es, "subtitle": hero.subtitle.es },
        "en": { "tagline": hero.tagline.en, "subtitle": hero.subtitle.en }
      },
      "contact": {
        "phone": contact.phone,
        "email": contact.email,
        "address": { "es": contact.address.es, "en": contact.address.en }
      }
    }`);
  } catch {
    return null;
  }
}

export async function getRooms() {
  if (!isConfigured) return null;
  try {
    const rooms = await client.fetch(`*[_type == "room"] | order(order asc){
      "id": slug.current,
      "name": name,
      "description": description,
      "capacity": capacity,
      priceUSD,
      priceCOP,
      "images": images[]{asset},
      "amenities": amenities,
      "tag": tag,
      order
    }`);
    if (!rooms?.length) return null;

    const fallbackImgs = [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
    ];

    return {
      es: rooms.map((r: Record<string, unknown>, i: number) => ({
        id: r.id,
        name: (r.name as Record<string, string>)?.es ?? "",
        description: (r.description as Record<string, string>)?.es ?? "",
        capacity: (r.capacity as Record<string, string>)?.es ?? "",
        priceUSD: r.priceUSD as string,
        priceCOP: r.priceCOP as string,
        images: ((r.images as Array<{ asset?: unknown }>) || []).map((img, j) =>
          resolveImage(img, fallbackImgs[j % fallbackImgs.length])
        ),
        amenities: (r.amenities as Record<string, string[]>)?.es ?? [],
        tag: (r.tag as Record<string, string>)?.es ?? null,
        tagColor: i === 0 ? "bg-terracota" : i === 1 ? "bg-selva" : "bg-arena text-grafito",
      })),
      en: rooms.map((r: Record<string, unknown>, i: number) => ({
        id: r.id,
        name: (r.name as Record<string, string>)?.en ?? "",
        description: (r.description as Record<string, string>)?.en ?? "",
        capacity: (r.capacity as Record<string, string>)?.en ?? "",
        priceUSD: r.priceUSD as string,
        priceCOP: r.priceCOP as string,
        images: ((r.images as Array<{ asset?: unknown }>) || []).map((img, j) =>
          resolveImage(img, fallbackImgs[j % fallbackImgs.length])
        ),
        amenities: (r.amenities as Record<string, string[]>)?.en ?? [],
        tag: (r.tag as Record<string, string>)?.en ?? null,
        tagColor: i === 0 ? "bg-terracota" : i === 1 ? "bg-selva" : "bg-arena text-grafito",
      })),
    };
  } catch {
    return null;
  }
}

export async function getTours() {
  if (!isConfigured) return null;
  try {
    const tours = await client.fetch(`*[_type == "tour"] | order(order asc){
      "id": slug.current,
      "name": name,
      "tagline": tagline,
      "description": description,
      "duration": duration,
      "difficulty": difficulty,
      "distance": distance,
      price,
      "priceNote": priceNote,
      "image": image{asset},
      "highlights": highlights,
      "tip": tip,
      order
    }`);
    if (!tours?.length) return null;

    const fallbackImgs = [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=900&auto=format&fit=crop&q=80",
    ];

    const mapTour = (lang: "es" | "en") =>
      tours.map((t: Record<string, unknown>, i: number) => ({
        id: t.id,
        name: (t.name as Record<string, string>)?.[lang] ?? "",
        tagline: (t.tagline as Record<string, string>)?.[lang] ?? "",
        description: (t.description as Record<string, string>)?.[lang] ?? "",
        duration: (t.duration as Record<string, string>)?.[lang] ?? "",
        difficulty: (t.difficulty as Record<string, string>)?.[lang] ?? "",
        distance: (t.distance as Record<string, string>)?.[lang] ?? "",
        price: t.price as string,
        priceNote: (t.priceNote as Record<string, string>)?.[lang] ?? "",
        img: resolveImage(t.image as { asset?: unknown }, fallbackImgs[i % fallbackImgs.length]),
        highlights: (t.highlights as Record<string, string[]>)?.[lang] ?? [],
        tip: (t.tip as Record<string, string>)?.[lang] ?? "",
      }));

    return { es: mapTour("es"), en: mapTour("en") };
  } catch {
    return null;
  }
}

export async function getReviews() {
  if (!isConfigured) return null;
  try {
    const reviews = await client.fetch(`*[_type == "review"] | order(_createdAt desc)[0...8]{
      name,
      "country": country,
      rating,
      "text": text
    }`);
    if (!reviews?.length) return null;

    return {
      es: reviews.map((r: Record<string, unknown>) => ({
        name: r.name as string,
        country: (r.country as Record<string, string>)?.es ?? "",
        rating: r.rating as number,
        text: (r.text as Record<string, string>)?.es ?? "",
      })),
      en: reviews.map((r: Record<string, unknown>) => ({
        name: r.name as string,
        country: (r.country as Record<string, string>)?.en ?? "",
        rating: r.rating as number,
        text: (r.text as Record<string, string>)?.en ?? "",
      })),
    };
  } catch {
    return null;
  }
}

export async function getAllPageData() {
  const [rooms, tours, reviews, settings] = await Promise.all([
    getRooms(),
    getTours(),
    getReviews(),
    getSiteSettings(),
  ]);

  return {
    rooms: rooms ?? { es: content.es.rooms.items, en: content.en.rooms.items },
    tours: tours ?? { es: content.es.tours.items, en: content.en.tours.items },
    reviews: reviews ?? { es: content.es.reviews.items, en: content.en.reviews.items },
    settings,
  };
}
