import { Logo } from "../ui/Logo";

const cols = [
  { title: "Producto", links: [
    { href: "#features", label: "Funciones" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#precios", label: "Precios" },
  ] },
  { title: "Empresa", links: [
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#cta", label: "Contacto" },
  ] },
  { title: "Legal", links: [
    { href: "#", label: "Aviso de privacidad" },
    { href: "#", label: "Términos de uso" },
  ] },
];

export async function Footer() {
  "use cache";
  return (
    <footer className="bg-primary text-white pt-[54px] pb-7">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 mb-10">
          <div>
            <Logo variant="dark" />
            <p className="text-sm text-info-light mt-3.5 max-w-[300px] leading-relaxed">
              Software de gestión de flotas para transporte escolar, público y privado...
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-bold mb-3.5">{c.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-info-light hover:text-white transition">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-3 text-[13px] text-info-light">
          <span>© {new Date().getFullYear()} Rodantex. Todos los derechos reservados.</span>
          <span>Hecho para transportistas, por gente que conoce el sector.</span>
        </div>
      </div>
    </footer>
  );
}