const items = [
  { plate: "ABC-123-A", label: "En ruta", bg: "var(--status-active-bg)", fg: "var(--status-active-fg)" },
  { plate: "XYZ-987-B", label: "Mantenimiento", bg: "var(--status-maint-bg)", fg: "var(--status-maint-fg)" },
  { plate: "JKL-456-C", label: "Revisión", bg: "var(--status-incident-bg)", fg: "var(--status-incident-fg)" },
];

export function HeroPanel() {
  return (
    <div className="bg-surface border border-border rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-extrabold text-primary">Estado de la flota</h2>
        <span className="text-xs text-ink-muted">Hoy</span>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((i) => (
          <li key={i.plate} className="flex items-center justify-between bg-app rounded-xl px-4 py-3">
            <span className="font-bold text-sm text-primary">{i.plate}</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: i.bg, color: i.fg }}>
              {i.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
