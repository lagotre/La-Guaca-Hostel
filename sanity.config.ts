import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "la-guaca-hostel",
  title: "La Guaca Hostel — Panel de Contenido",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Panel de contenido")
          .items([
            S.listItem()
              .title("⚙️ Configuración General")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("room").title("🛏️ Habitaciones"),
            S.documentTypeListItem("tour").title("🗺️ Tours & Experiencias"),
            S.documentTypeListItem("review").title("⭐ Reseñas"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
