import { Icon } from "@/components/ui/Icon";
import { CONFIG } from "@/lib/config";

/** Encabezado del catálogo: logo o nombre, una línea de qué haces, y el sello 24/7. */
export function MarcaHeader() {
  const { marca } = CONFIG;
  return (
    <header className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 pt-12 pb-8 text-center sm:pt-16">
      <span className="chip no-print">
        <span className="anim-pulse-glow inline-block h-2 w-2 rounded-full" style={{ background: "var(--marca)" }} />
        Catálogo disponible 24/7
      </span>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        {marca.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={marca.logo} alt={marca.negocio} className="h-40 w-40 rounded-full object-cover" />
        )}

        <h1 className="sr-only">
          {marca.negocio}
        </h1>
      </div>

      <p className="max-w-xl text-lg text-ink-soft">{marca.descripcion}</p>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-ink-mute no-print">
        {marca.ciudad && (
          <span className="inline-flex items-center gap-1.5">
            <Icon name="lucide:map-pin" size={15} /> {marca.ciudad}
          </span>
        )}
        {marca.enlace && (
          <span className="inline-flex items-center gap-1.5">
            <Icon name="lucide:link" size={15} /> {marca.enlace}
          </span>
        )}
      </div>
    </header>
  );
}
