import { Reveal } from "../ui/Reveal";
import { HeroPanel } from "../ui/HeroPanel";

export function Hero() {
  return (
    <section id="inicio" className="relative py-[90px] pb-[100px] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at 85% 10%, rgba(184,217,87,.18), transparent 60%), radial-gradient(500px circle at 5% 90%, rgba(42,157,143,.12), transparent 60%)" }}
      />
      <div className="relative max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[60px] items-center">
        <div>
          <span className="inline-block text-[12.5px] font-bold uppercase tracking-[1.2px] text-info bg-[var(--status-available-bg)] px-3.5 py-1.5 rounded-full mb-5">
            Software de gestión de flotas
          </span>
          <h1 className="text-[clamp(34px,4.4vw,52px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary mb-5">
            Controla tus llantas, mantenimientos y <span className="text-info">toda tu flota</span> en un solo lugar.
          </h1>
          <p className="text-[18px] text-ink-secondary max-w-[540px] mb-8">
            Rodantex es la plataforma que ayuda a dueños de flotas de transporte escolar, público y privado
            a reducir costos, anticipar fallas y tomar decisiones con datos reales.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-6">
            <a href="#cta" className="bg-lime hover:bg-lime-hover text-primary font-bold px-5 py-3 rounded-[10px]">Solicitar demo</a>
            <a href="#como-funciona" className="border-[1.5px] border-border text-primary font-bold px-5 py-3 rounded-[10px] hover:border-info hover:text-info transition">Ver cómo funciona</a>
          </div>
          <div className="flex flex-wrap gap-6 text-[13.5px] text-ink-muted">
            {["Sin instalar nada", "Soporte en español", "Implementación guiada"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-info" /> {t}
              </span>
            ))}
          </div>
        </div>
        <Reveal><HeroPanel /></Reveal>
      </div>
    </section>
  );
}