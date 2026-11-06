import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { LEGAL_UPDATED } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white border-b border-black/5">
        <div className="max-w-[820px] mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Rodantex inicio"><Logo /></Link>
          <Link href="/" className="text-sm font-semibold text-primary hover:underline">Volver al inicio</Link>
        </div>
      </header>
      <main className="max-w-[820px] mx-auto px-6 py-14">
        <h1 className="text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.5px] text-primary mb-2">{title}</h1>
        <p className="text-sm text-primary/60 mb-10">Última actualización: {LEGAL_UPDATED}</p>
        <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-primary/90 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_a]:text-info-dark [&_a]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
