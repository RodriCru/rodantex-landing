import { Reveal } from "../ui/Reveal";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-[90px]">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Cómo funciona
          </h2>
          <p className="text-ink-secondary text-[17px]">En tres pasos tu flota queda bajo control.</p>
        </Reveal>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.n}>
              <Reveal>
                <div className="h-full bg-surface border border-border rounded-2xl p-6">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-lime text-primary font-extrabold mb-4">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-ink-secondary text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
