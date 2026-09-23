import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { CONFIG } from "@/lib/config";
import { linkWhatsApp } from "@/lib/whatsapp";

/** Pie del catálogo: gancho de cierre, logo y crédito. */
export function Pie() {
  const { marca } = CONFIG;
  const ligaWhatsApp = linkWhatsApp(
    marca.whatsappPrincipal,
    "Hola, vi su catálogo y quiero aprovechar el precio de lanzamiento. ¿Me ayudan?"
  );

  return (
    <footer className="border-t border-line py-14 text-center text-sm text-ink-mute">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-5 no-print">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          ¿Listo para que tu negocio aparezca primero?
        </h2>
        <p className="text-base text-ink-soft">
          Los precios de lanzamiento son por tiempo limitado. Agenda tu sesión de arranque hoy.
        </p>
        <a
          href={ligaWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
          style={{ background: "var(--marca)" }}
        >
          <Icon name="logos:whatsapp-icon" size={22} />
          Escríbeme por WhatsApp
        </a>
      </div>

      <div className="mt-12">
        <p className="font-medium text-ink-soft">{marca.negocio}</p>
        {marca.ciudad && <p className="mt-1">{marca.ciudad}</p>}
        <p className="mt-4 no-print">
          <Link href="/vendedores" className="hover:text-marca">
            Kit para vendedores
          </Link>
          {"  ·  "}
          Hecho con <span className="font-semibold text-ink-soft">Catálogo Vivo</span>
        </p>
      </div>
    </footer>
  );
}
