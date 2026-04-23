import { defineField, defineType } from "sanity";

export const tour = defineType({
  name: "tour",
  title: "🗺️ Tours & Experiencias",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "ID interno",
      type: "slug",
      options: { source: "name.es", maxLength: 40 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Orden de aparición",
      type: "number",
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "name",
      title: "Nombre del tour",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", validation: (R) => R.required() },
        { name: "en", title: "🇺🇸 English", type: "string", validation: (R) => R.required() },
      ],
    }),
    defineField({
      name: "tagline",
      title: "Frase corta (tagline)",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string" },
        { name: "en", title: "🇺🇸 English", type: "string" },
      ],
    }),
    defineField({
      name: "description",
      title: "Descripción completa",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "text", rows: 4 },
        { name: "en", title: "🇺🇸 English", type: "text", rows: 4 },
      ],
    }),
    defineField({
      name: "duration",
      title: "⏱️ Duración",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", placeholder: "1 día" },
        { name: "en", title: "🇺🇸 English", type: "string", placeholder: "1 day" },
      ],
    }),
    defineField({
      name: "difficulty",
      title: "💪 Dificultad",
      type: "object",
      fields: [
        {
          name: "es",
          title: "🇨🇴 Español",
          type: "string",
          options: { list: ["Fácil", "Moderado", "Difícil"] },
        },
        {
          name: "en",
          title: "🇺🇸 English",
          type: "string",
          options: { list: ["Easy", "Moderate", "Hard"] },
        },
      ],
    }),
    defineField({
      name: "distance",
      title: "📍 Distancia desde Santa Marta",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", placeholder: "45 km de Santa Marta" },
        { name: "en", title: "🇺🇸 English", type: "string", placeholder: "45 km from Santa Marta" },
      ],
    }),
    defineField({
      name: "price",
      title: "💰 Precio (string)",
      type: "string",
      description: "Ejemplo: COP 120.000",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "priceNote",
      title: "Nota del precio (qué incluye)",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", placeholder: "Incluye transporte + entrada" },
        { name: "en", title: "🇺🇸 English", type: "string", placeholder: "Includes transport + entrance" },
      ],
    }),
    defineField({
      name: "image",
      title: "📸 Foto del tour",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "highlights",
      title: "✨ Highlights / Puntos clave",
      type: "object",
      fields: [
        {
          name: "es",
          title: "🇨🇴 Lista en Español",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        },
        {
          name: "en",
          title: "🇺🇸 List in English",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        },
      ],
    }),
    defineField({
      name: "tip",
      title: "💡 Consejo del hostal",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "text", rows: 2 },
        { name: "en", title: "🇺🇸 English", type: "text", rows: 2 },
      ],
    }),
  ],
  preview: {
    select: { title: "name.es", price: "price", media: "image" },
    prepare: ({ title, price, media }) => ({ title: title ?? "Sin nombre", subtitle: price, media }),
  },
});
