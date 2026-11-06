import { Reveal } from "../ui/Reveal";

export function CtaFinal() {
  return (
    <section id="cta" className="py-[90px]">
      <div className="max-w-[1140px] mx-auto px-6">
        <Reveal>
          <div className="bg-primary text-white rounded-3xl px-8 py-14 text-center">
            <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold tracking-[-0.5px] mb-3">
              Lleva el control de tu flota hoy
            </h2>
            <p className="text-info-light text-[17px] max-w-[540px] mx-auto mb-8">
              Agenda una demo y te mostramos cómo Rodantex se adapta a tu operación.
            </p>
            <a
              href="mailto:contacto@rodantex.com?subject=Solicitud%20de%20demo"
              className="inline-block bg-lime hover:bg-lime-hover text-primary font-bold px-7 py-3.5 rounded-[10px]"
            >
              Solicitar demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
