import { Reveal } from "../ui/Reveal";
import { features } from "@/lib/data";

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
                <div className="w-11 h-11 rounded-xl bg-primary text-lime flex items-center justify-center text-xs font-extrabold uppercase mb-4" aria-hidden>
                  {f.icon.slice(0, 2)}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-ink-secondary text-[15px] leading-relaxed">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
