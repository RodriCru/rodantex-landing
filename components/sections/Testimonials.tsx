import { Reveal } from "../ui/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-[90px] bg-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-3">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i}>
              <figure className="h-full bg-app border border-border rounded-2xl p-6 flex flex-col">
                <blockquote className="text-ink-secondary text-[15px] leading-relaxed mb-5 flex-1">“{t.quote}”</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-info-dark text-white text-sm font-bold flex items-center justify-center">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-primary">{t.name}</span>
                    <span className="block text-[13px] text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
