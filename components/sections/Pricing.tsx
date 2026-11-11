"use client";

import type { FormEvent } from "react";
import { Reveal } from "../ui/Reveal";
import { plans } from "@/lib/data";

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);

  const nombre = data.get("nombre");
  const unidades = data.get("unidades");
  const telefono = data.get("telefono");
  const correo = data.get("correo");
  const notas = data.get("notas");

  const mensaje = [
    "Nueva solicitud de cotización - Rodantex",
    "",
    `Nombre: ${nombre}`,
    `Unidades aproximadas: ${unidades}`,
    `Teléfono: ${telefono}`,
    `Correo: ${correo}`,
    `Notas: ${notas || "—"}`,
  ].join("\n");

  window.location.href = `mailto:contacto@rodantex.com?subject=Solicitud%20de%20cotización&body=${encodeURIComponent(mensaje)}`;
};

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

    {/* Contenedor de dos columnas: planes + formulario */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-8 items-stretch max-w-270 mx-auto">
      {/* Columna izquierda: planes */}
      <div className="grid grid-cols-1 gap-6 items-stretch">
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
                <span className={`ml-1 whitespace-nowrap ${p.featured ? "text-info-light" : "text-ink-muted"}`}>{p.period}</span>
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

      {/* Columna derecha: formulario de cotización */}
      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-7 border bg-surface border-border flex flex-col gap-4 h-full"
        >
          <div>
            <h3 className="text-lg font-bold text-primary mb-1">Solicita tu cotización</h3>
            <p className="text-sm text-ink-secondary">Te contactamos en menos de 24 h.</p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="text-sm font-semibold text-primary">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="rounded-[10px] border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-info"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="unidades" className="text-sm font-semibold text-primary">Unidades aproximadas</label>
            <input
              id="unidades"
              name="unidades"
              type="number"
              min="1"
              required
              className="rounded-[10px] border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-info"
              placeholder="Ej. 10"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="telefono" className="text-sm font-semibold text-primary">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="rounded-[10px] border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-info"
              placeholder="Ej. +52 55 1234 5678"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="correo" className="text-sm font-semibold text-primary">Correo</label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              className="rounded-[10px] border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-info"
              placeholder="tu@correo.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="notas" className="text-sm font-semibold text-primary">Notas</label>
            <textarea
              id="notas"
              name="notas"
              rows={3}
              className="rounded-[10px] border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-info resize-none"
              placeholder="Cuéntanos sobre tu flota..."
            />
          </div>

          <button
            type="submit"
            className="bg-lime hover:bg-lime-hover text-primary font-bold px-5 py-3 rounded-[10px] transition"
          >
            Solicitar cotización
          </button>

          <p className="text-xs text-ink-muted text-center">
            O escríbenos a{" "}
            <a href="mailto:contacto@rodantex.com" className="font-semibold text-info hover:underline">
              contacto@rodantex.com
            </a>
          </p>
        </form>
      </Reveal>
    </div>
  </div>
</section>
  );
}
