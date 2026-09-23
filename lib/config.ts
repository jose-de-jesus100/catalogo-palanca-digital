import type { Config } from "./tipos";

/**
 * ================================================================
 *  CONFIGURACIÓN DE PALANCA DIGITAL.
 * ================================================================
 */
export const CONFIG: Config = {
  marca: {
    negocio: "Palanca Digital",
    descripcion:
      "Servicios digitales para hacer crecer tu negocio: presencia en Google, catálogo y página web.",
    logo: "/logo.png",
    logoPie: "/logo-pie.png",
    primario: "#35D0A6",
    secundario: "#12151A",
    fondo: "oscuro",
    whatsappPrincipal: "5213348898695",
    ciudad: "Autlán de Navarro, Jalisco (atendemos todo el continente americano)",
  },

  // Tu equipo. Cada quien comparte su liga: tucatalogo.com/?v=slug
  vendedores: [
    {
      slug: "jose",
      nombre: "José de Jesús Sandoval Gutiérrez",
      apodoSaludo: "José de Jesús",
      whatsapp: "5213348898695",
      puesto: "Fundador",
    },
  ],

  // El orden de las secciones de tu catálogo.
  categorias: ["Servicios", "SEO", "Ads", "Contenido"],

  // El mensaje que se abre en WhatsApp. {saludo} y {producto} se llenan solos.
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¡Quiero aprovechar el precio de lanzamiento!",
};
