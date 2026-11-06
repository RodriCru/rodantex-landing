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
  { src: "/images/funcion-vehiculos.webp", title: "Vehículos", alt: "Listado de vehículos en Rodantex con patio, conductor asignado y ficha técnica" },
  { src: "/images/funcion-proveedores.webp", title: "Proveedores", alt: "Listado de proveedores en Rodantex: talleres, refacciones, RFC y contacto" },
];

export function Features() {
  return (
    <section id="features" className="py-[90px] bg-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Todo lo que tu flota necesita
          </h2>
          <p className="text-ink-secondary text-[17px]">Menos hojas de cálculo, más control sobre cada unidad.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Reveal key={f.title}>
              <article className="h-full bg-app border border-border rounded-2xl p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          {screenshots.map((sc) => (
            <Reveal key={sc.src}>
              <figure className="h-full">
                <Image
                  src={sc.src}
                  alt={sc.alt}
                  width={1400}
                  height={558}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto rounded-2xl border border-border shadow-md"
                />
                <figcaption className="text-center text-sm text-ink-muted mt-3">{sc.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
