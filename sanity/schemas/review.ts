import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "⭐ Reseñas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del huésped",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "country",
      title: "País de origen",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", placeholder: "Alemania" },
        { name: "en", title: "🇺🇸 English", type: "string", placeholder: "Germany" },
      ],
    }),
    defineField({
      name: "rating",
      title: "Puntuación (1-10)",
      type: "number",
      validation: (R) => R.required().min(1).max(10),
    }),
    defineField({
      name: "text",
      title: "Reseña",
      type: "object",
      description: "Si el huésped escribió en inglés, puedes copiar y pegar en ambos campos o traducir.",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "text", rows: 3 },
        { name: "en", title: "🇺🇸 English", type: "text", rows: 3 },
      ],
    }),
    defineField({
      name: "platform",
      title: "Plataforma de origen",
      type: "string",
      options: { list: ["Google", "Hostelworld", "Booking.com", "Airbnb", "Directo"] },
      initialValue: "Google",
    }),
    defineField({
      name: "featured",
      title: "¿Destacar en la página principal?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", rating: "rating", country: "country.es" },
    prepare: ({ title, rating, country }) => ({
      title: title ?? "Sin nombre",
      subtitle: `${rating}/10 · ${country ?? ""}`,
    }),
  },
});
