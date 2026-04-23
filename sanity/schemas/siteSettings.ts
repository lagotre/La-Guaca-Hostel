import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "⚙️ Configuración General",
  type: "document",
  fields: [
    defineField({
      name: "bookingUrl",
      title: "🔗 URL de Reservas (Lobby PMS)",
      type: "url",
      description: "El link al motor de reservas. Ejemplo: https://app.lobbypms.com/...",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "whatsappNumber",
      title: "📱 Número de WhatsApp",
      type: "string",
      description: "Solo números, sin espacios ni +. Ejemplo: 573001234567",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "hero",
      title: "🏠 Textos del Hero (Página Principal)",
      type: "object",
      fields: [
        defineField({
          name: "tagline",
          title: "Tagline principal",
          type: "object",
          fields: [
            { name: "es", title: "🇨🇴 Español", type: "string" },
            { name: "en", title: "🇺🇸 English", type: "string" },
          ],
        }),
        defineField({
          name: "subtitle",
          title: "Subtítulo",
          type: "object",
          fields: [
            { name: "es", title: "🇨🇴 Español", type: "string" },
            { name: "en", title: "🇺🇸 English", type: "string" },
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "📞 Información de Contacto",
      type: "object",
      fields: [
        defineField({ name: "phone", title: "Teléfono", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({
          name: "address",
          title: "Dirección",
          type: "object",
          fields: [
            { name: "es", title: "🇨🇴 Español", type: "string" },
            { name: "en", title: "🇺🇸 English", type: "string" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configuración General del Sitio" }),
  },
});
