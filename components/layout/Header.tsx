"use client";
import { useState } from "react";
import { Logo } from "../ui/Logo";

const links = [
  { href: "#features", label: "Funciones" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-app/90 backdrop-blur border-b border-border">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-6 py-3.5">
        <a href="#inicio" aria-label="Rodantex inicio"><Logo /></a>

        <button className="md:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row md:items-center gap-7 absolute md:static top-full left-0 right-0 bg-surface md:bg-transparent p-6 md:p-0 border-b md:border-0 border-border`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-sm font-semibold text-ink-secondary hover:text-primary transition">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="bg-lime hover:bg-lime-hover text-primary font-bold text-sm px-5 py-2.5 rounded-[10px] text-center">
            Agendar demo
          </a>
        </nav>
      </div>
    </header>
  );
}