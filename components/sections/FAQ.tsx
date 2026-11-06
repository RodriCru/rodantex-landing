import { Reveal } from "../ui/Reveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="py-[90px] bg-surface">
      <div className="max-w-[780px] mx-auto px-6">
        <Reveal className="text-center mb-10">
          <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] text-primary">
            Preguntas frecuentes
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-app border border-border rounded-xl px-5 py-4">
              <summary className="cursor-pointer font-bold text-primary list-none flex justify-between items-center gap-4">
                {f.q}
                <span className="text-info transition group-open:rotate-45 text-xl leading-none" aria-hidden>+</span>
              </summary>
              <p className="text-ink-secondary text-[15px] leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
