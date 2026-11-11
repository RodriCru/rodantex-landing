import { Reveal } from "../ui/Reveal";
import Image from "next/image";
import { CircleDot, Wrench, ChartColumn, ShieldCheck, Users, MessagesSquare, type LucideIcon } from "lucide-react";
import { features } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  tire: CircleDot,
  wrench: Wrench,
  chart: ChartColumn,
  shield: ShieldCheck,
  users: Users,
  chat: MessagesSquare,
};

const screenshots = [
  { src: "/images/dashboard.webp", title: "Dashboard operativo", eyebrow: "Una vista para decidir", alt: "Dashboard de Rodantex con resumen de la flota y vehículos en mantenimiento" },
  { src: "/images/Vehiculos.png", title: "Vehículos", eyebrow: "Cada unidad en orden", alt: "Listado de vehículos en Rodantex con patio, conductor asignado y ficha técnica" },
  { src: "/images/Detalle de una unidad.png", title: "Detalle de una unidad", eyebrow: "La ficha completa", alt: "Detalle de una unidad dentro de Rodantex" },
  { src: "/images/Mantenimientos de vehiculos.png", title: "Mantenimientos", eyebrow: "Anticipa paradas", alt: "Módulo de mantenimientos de vehículos en Rodantex" },
  { src: "/images/Inspecciones.png", title: "Inspecciones", eyebrow: "Control desde el campo", alt: "Módulo de inspecciones de vehículos en Rodantex" },
  { src: "/images/Rutas y viajes.png", title: "Rutas y viajes", eyebrow: "Sigue la operación", alt: "Módulo de rutas y viajes en Rodantex" },
  { src: "/images/Provedores.png", title: "Proveedores", eyebrow: "Tu red de servicio", alt: "Listado de proveedores en Rodantex: talleres, refacciones, RFC y contacto" },
];

export function Features() {
  return (
    <section id="features" className="py-[90px] bg-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Del patio a la carretera, todo conectado
          </h2>
          <p className="text-ink-secondary text-[17px]">Una vista operativa para cuidar cada unidad, anticipar pendientes y respaldar tus decisiones.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Reveal key={f.title}>
              <article className="h-full bg-app border border-border rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg hover:border-info/50">
                <div className="w-11 h-11 rounded-xl bg-primary text-lime flex items-center justify-center mb-4" aria-hidden>
                  {(() => {
                    const Icon = icons[f.icon] ?? CircleDot;
                    return <Icon size={22} strokeWidth={2} />;
                  })()}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-ink-secondary text-[15px] leading-relaxed">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 mb-8 max-w-[650px]">
          <p className="text-sm font-bold uppercase tracking-[1.2px] text-info mb-3">Producto en acción</p>
          <h3 className="text-[clamp(25px,3vw,34px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            La operación completa, a la vista
          </h3>
          <p className="text-ink-secondary text-[17px]">
            Desde el tablero general hasta una inspección en campo, tu equipo trabaja con la misma información.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {screenshots.map((sc) => (
            <Reveal key={sc.src}>
              <figure className="h-full group">
                <Image
                  src={sc.src}
                  alt={sc.alt}
                  width={sc.src.includes("dashboard") ? 1600 : sc.src.endsWith(".png") ? 3370 : 1400}
                  height={sc.src.includes("dashboard") ? 772 : sc.src.endsWith(".png") ? 1694 : 558}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto rounded-2xl border border-border shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
                />
                <figcaption className="mt-4">
                  <span className="block text-xs font-bold uppercase tracking-[1px] text-info mb-1">{sc.eyebrow}</span>
                  <span className="block text-base font-bold text-primary">{sc.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
