import type { Producto } from "./tipos";

/**
 * ================================================================
 *  SERVICIOS DE PALANCA DIGITAL.
 *  "Servicios" = catálogo con precio de lanzamiento (paquetes nuevos).
 *  El resto son los servicios individuales de siempre.
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "google-business-profile",
    nombre: "Google Business Profile",
    categoria: "Servicios",
    imagen: "/productos/google-business-profile.jpg",
    paraQuien:
      "Para negocios locales que quieren aparecer primero cuando alguien los busca \"cerca de mí\" en Google.",
    beneficio:
      "Tu negocio visible y actualizado en el Mapa de Google, donde se resuelve la mayoría de las búsquedas locales.",
    caracteristicas: [
      "Creación y optimización de tu cuenta de Google Business Profile",
      "Alimentación constante a los motores de búsqueda",
    ],
    precio: "$199 USD/mes",
    precioAntes: "$399 USD/mes",
    facilidades: "Precio de lanzamiento. Pago recurrente mensual. Anticipo requerido: 50% ($99.50 USD).",
    destacado: true,
  },
  {
    slug: "catalogo-vivo",
    nombre: "Catálogo Vivo",
    categoria: "Servicios",
    imagen: "/productos/catalogo-vivo.jpg",
    paraQuien:
      "Para negocios que quieren un catálogo digital propio, con sus productos bien presentados y listo para compartir.",
    beneficio:
      "Un catálogo en línea con tus productos, fotos optimizadas y textos que venden, listo para compartir con un link.",
    caracteristicas: [
      "Diseño de 10 a 20 productos",
      "Optimización visual de tus fotos",
      "Textos persuasivos para cada producto",
    ],
    precio: "$249 USD",
    precioAntes: "$498 USD",
    facilidades: "Precio de lanzamiento. Pago único. Anticipo requerido: 50% ($124.50 USD).",
    destacado: true,
  },
  {
    slug: "pagina-web",
    nombre: "Página Web",
    categoria: "Servicios",
    imagen: "/productos/pagina-web.jpg",
    paraQuien:
      "Para negocios que quieren su propio sitio web, con acompañamiento personalizado mientras se afina.",
    beneficio: "Tu página web lista y en línea, con ajustes incluidos mientras la afinamos juntos.",
    caracteristicas: ["Asesoría personalizada", "Hasta 20 modificaciones incluidas"],
    precio: "$399 USD",
    precioAntes: "$899 USD",
    facilidades:
      "Precio de lanzamiento. Anticipo requerido: 50% ($199.50 USD). Resto + $12 USD/mes de alojamiento (aparte; si no se paga, la página se desactiva).",
    destacado: true,
  },
  {
    slug: "seo-local",
    nombre: "SEO Local",
    categoria: "SEO",
    imagen: "/productos/seo-local.jpg",
    paraQuien:
      "Para negocios locales que quieren aparecer primero cuando alguien los busca \"cerca de mí\" en Google.",
    beneficio:
      "Presencia optimizada y sostenible en Google: tu ficha de negocio, páginas de servicio y resultados que se mantienen con el tiempo.",
    caracteristicas: [
      "Optimización completa de tu Google Business Profile",
      "Creación de páginas de servicio orientadas a búsquedas locales",
      "Estrategia enfocada en resultados sostenibles, no solo temporales",
    ],
    precio: "$399 USD/mes",
    facilidades: "Anticipo requerido: 50% ($199.50 USD). Plazo para resultados: 2 a 3 meses.",
  },
  {
    slug: "google-ads",
    nombre: "Google Ads",
    categoria: "Ads",
    imagen: "/productos/google-ads.jpg",
    paraQuien:
      "Para negocios que quieren tráfico rápido y aparecer en los primeros resultados de Google desde el día uno.",
    beneficio:
      "Anuncios en la primera página de Google con un presupuesto controlado y resultados medibles.",
    caracteristicas: [
      "Configuración y administración de tus campañas",
      "Presupuesto controlado por ti en todo momento",
      "Reportes claros de resultados",
    ],
    precio: "$499 USD el primer mes",
    facilidades:
      "Después $299 USD/mes de administración. Presupuesto de anuncios sugerido: $1,500–$2,000 USD/mes (aparte, se paga directo a Google).",
  },
  {
    slug: "meta-ads",
    nombre: "Meta Ads",
    categoria: "Ads",
    imagen: "/productos/meta-ads.jpg",
    paraQuien:
      "Para negocios que quieren llegar a la gente de su zona con anuncios en Facebook e Instagram, incluyendo campañas de WhatsApp.",
    beneficio:
      "Anuncios con segmentación hiperlocal y diseño visual de marca que llevan gente directo a tu WhatsApp.",
    caracteristicas: [
      "Segmentación hiperlocal de tu audiencia",
      "Campañas enfocadas en generar mensajes de WhatsApp",
      "Diseño visual alineado a tu marca",
    ],
    precio: "$499 USD el primer mes",
    facilidades:
      "Después $299 USD/mes de administración. Presupuesto de anuncios (aparte, se paga directo a Meta).",
  },
  {
    slug: "video-corto",
    nombre: "Co-creación de Video Corto",
    categoria: "Contenido",
    imagen: "/productos/video-corto.jpg",
    paraQuien:
      "Para negocios que quieren estar presentes en Reels y TikTok sin tener que aprender edición ni estrategia de contenido.",
    beneficio:
      "Contenido corto publicado de forma constante en tus redes, sin que tengas que editar nada.",
    caracteristicas: [
      "Tú grabas de 3 a 5 videos por semana con tu celular",
      "Nosotros editamos y optimizamos cada video",
      "Publicación en Reels y TikTok",
    ],
    precio: "$499 USD/mes",
    facilidades: "Requiere que grabes el material cada semana; nosotros nos encargamos del resto.",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
