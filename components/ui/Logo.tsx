// Logo oficial: isotipo + nombre de public/logo-rodantex.svg (sin descriptor ni slogan, que no se leen a esta altura).
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const wordmark = variant === "light" ? "#264653" : "#F3F5F6";
  return (
    <svg viewBox="0 0 340 100" role="img" aria-label="Rodantex" className="h-11 w-auto">
      <rect width="100" height="100" rx="21" fill="#0F4C5C" />
      <rect x="20" y="20" width="25" height="25" rx="6" fill="#2A9D8F" />
      <rect x="55" y="20" width="25" height="25" rx="6" fill="#2A9D8F" />
      <rect x="20" y="55" width="25" height="25" rx="6" fill="#2A9D8F" />
      <path d="M68 55 H80 V80 H55 V68" fill="none" stroke="#E76F51" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <text x="124" y="66" fontFamily="var(--font-manrope), Manrope, system-ui, sans-serif" fontSize="48" fontWeight="800"
        letterSpacing="-1.8" fill={wordmark}>Rodantex</text>
    </svg>
  );
}
