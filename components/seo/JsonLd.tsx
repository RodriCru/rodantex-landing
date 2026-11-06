export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Se escapa "<" para evitar cerrar el <script> con contenido inyectado
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
