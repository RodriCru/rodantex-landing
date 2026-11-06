export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const wordmark = variant === "light" ? "#17232F" : "#F3F5F6";
  const box = variant === "light" ? "#0F4C5C" : "#153039";
  return (
    <svg viewBox="0 0 420 120" role="img" aria-label="Rodantex" className="h-11 w-auto">
      <g transform="translate(20, 10)">
        <rect x="4" y="4" width="92" height="92" rx="22" fill={box} />
        <path d="M 30 74 L 30 26 L 56 26 C 70 26 74 34 74 42 C 74 50 70 58 56 58 L 30 58"
          fill="none" stroke="#2A9D8F" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 50 58 L 74 74" fill="none" stroke="#2A9D8F" strokeWidth="7" strokeLinecap="round" />
        <circle cx="74" cy="74" r="6" fill="#E76F51" />
      </g>
      <text x="130" y="76" fontFamily="Manrope, system-ui, sans-serif" fontSize="46" fontWeight="800"
        fill={wordmark} letterSpacing="-1">rodantex</text>
    </svg>
  );
}