import { Reveal } from "../ui/Reveal";
import { plans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="precios" className="py-[90px]">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Planes para cada flota
          </h2>
          <p className="text-ink-secondary text-[17px]">Sin contrato forzoso. Cambia de plan cuando lo necesites.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <Reveal key={p.name}>
              <article
                className={`h-full rounded-2xl p-7 flex flex-col border ${
                  p.featured ? "bg-primary text-white border-primary shadow-xl" : "bg-surface border-border"
                }`}
              >
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className={`text-sm mb-5 ${p.featured ? "text-info-light" : "text-ink-secondary"}`}>{p.desc}</p>
                <p className="mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className={p.featured ? "text-info-light" : "text-ink-muted"}>{p.period}</span>
                </p>
                <ul className="flex flex-col gap-2.5 text-sm mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-info" aria-hidden>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`text-center font-bold px-5 py-3 rounded-[10px] transition ${
                    p.featured
                      ? "bg-lime hover:bg-lime-hover text-primary"
                      : "border-[1.5px] border-border text-primary hover:border-info hover:text-info"
                  }`}
                >
                  {p.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
