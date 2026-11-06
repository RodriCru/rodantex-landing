import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const photos = [
  { src: "/images/autobuses-aerea.webp", w: 1200, h: 1500, label: "Transporte público y escolar", alt: "Vista aérea de un patio con decenas de autobuses rojos estacionados" },
  { src: "/images/registra-inspeccion.webp", w: 1200, h: 1800, label: "Inspecciones en campo", alt: "Operador con chaleco reflectante registrando la inspección de un autobús" },
  { src: "/images/flota-transportes.webp", w: 1200, h: 1594, label: "Transporte de carga", alt: "Fila de tráileres estacionados junto a un poste de luz" },
  { src: "/images/transporte-ciudad.webp", w: 1200, h: 1800, label: "Movilidad urbana", alt: "Autobús circulando en un crucero de la ciudad" },
];

export function FleetGallery() {
  return (
    <section aria-labelledby="flotas-titulo" className="pb-[90px]">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-10">
          <h2 id="flotas-titulo" className="text-[clamp(26px,3vw,34px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Para cualquier tipo de flota
          </h2>
          <p className="text-ink-secondary text-[17px]">
            Transporte escolar, público, de carga o privado: una sola plataforma para todas tus unidades.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((p) => (
            <Reveal key={p.src}>
              <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm font-bold text-white bg-gradient-to-t from-black/70 to-transparent">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
