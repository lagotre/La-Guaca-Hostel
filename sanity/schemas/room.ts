import { defineField, defineType } from "sanity";

export const room = defineType({
  name: "room",
  title: "🛏️ Habitaciones",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "ID interno",
      type: "slug",
      description: "Identificador único. Usar minúsculas y guiones. Ejemplo: dorm-mixto",
      options: { source: "name.es", maxLength: 40 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Orden de aparición",
      type: "number",
      description: "1 = primera, 2 = segunda, etc.",
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "name",
      title: "Nombre de la habitación",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", validation: (R) => R.required() },
        { name: "en", title: "🇺🇸 English", type: "string", validation: (R) => R.required() },
      ],
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "text", rows: 3 },
        { name: "en", title: "🇺🇸 English", type: "text", rows: 3 },
      ],
    }),
    defineField({
      name: "capacity",
      title: "Capacidad",
      type: "object",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string", placeholder: "2 personas" },
        { name: "en", title: "🇺🇸 English", type: "string", placeholder: "2 people" },
      ],
    }),
    defineField({
      name: "priceUSD",
      title: "💵 Precio en USD",
      type: "string",
      description: "Ejemplo: USD 13",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "priceCOP",
      title: "💰 Precio en COP",
      type: "string",
      description: "Ejemplo: COP 55.000",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "images",
      title: "📸 Fotos de la habitación",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (R) => R.min(1).error("Sube al menos 1 foto"),
    }),
    defineField({
      name: "amenities",
      title: "✅ Comodidades incluidas",
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
      name: "tag",
      title: "🏷️ Etiqueta especial (opcional)",
      type: "object",
      description: "Ejemplo: 'Más popular' o 'Solo mujeres'. Dejar vacío si no aplica.",
      fields: [
        { name: "es", title: "🇨🇴 Español", type: "string" },
        { name: "en", title: "🇺🇸 English", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { title: "name.es", price: "priceUSD", media: "images.0" },
    prepare: ({ title, price, media }) => ({ title: title ?? "Sin nombre", subtitle: price, media }),
  },
  orderings: [{ title: "Orden de aparición", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
