# Memoria del proyecto — rodantex-landing-web

> Contexto persistente para retomar el trabajo del landing de Rodantex.

## Estado actual

- Landing Next.js para Rodantex, plataforma de gestión de flotillas.
- Dominio canónico: `https://www.rodantex.com`.
- Paleta visual: Fusion — graphite, lime, teal, amber y coral.
- Producto comunicado: dashboard, vehículos, mantenimiento, inspecciones, rutas, viajes y proveedores.
- La landing ya cuenta con SEO técnico, páginas legales, sitemap, robots, JSON-LD, imágenes OG y formulario de contacto.

## Cambios recientes

- Hero rediseñado con mensaje orientado al problema operativo y CTA `Cotizar mi flota`.
- Navegación actualizada para dirigir el CTA principal a precios/cotización.
- Copy de funcionalidades y proceso de uso corregido y alineado con el producto real.
- El formulario de cotización dejó de usar un número de WhatsApp ficticio y ahora prepara un correo a `contacto@rodantex.com`.
- Se eliminó la dependencia de `next/font/google` para que el build no dependa de red.
- La sección de funciones ahora incluye una galería `Producto en acción` con capturas del SaaS.

## Capturas integradas

Actualmente la galería usa:

- `public/images/dashboard.webp`
- `public/images/Vehiculos.png`
- `public/images/Detalle de una unidad.png`
- `public/images/Mantenimientos de vehiculos.png`
- `public/images/Inspecciones.png`
- `public/images/Rutas y viajes.png`
- `public/images/Provedores.png`

Las capturas antiguas `funcion-vehiculos.webp` y `funcion-proveedores.webp` ya no se usan en la galería.

## Pendientes

- Agregar capturas reales de perfil/documentos cuando estén disponibles.
- Agregar una captura móvil actualizada cuando la app esté compilada.
- Revisar visualmente la landing en móvil y desktop con todas las capturas nuevas.
- Considerar mejorar el hero con indicadores visuales del producto.
- Ejecutar el checklist final de enlaces, placeholders y despliegue.

## Validación

- `pnpm exec next build --webpack` pasa correctamente.
- TypeScript pasa durante el build.
- `git diff --check` pasa.
- `pnpm build` con Turbopack presenta un fallo interno de Next/Turbopack al intentar enlazar un puerto; Webpack funciona correctamente.

## Convenciones

- Comunicación y documentación del repositorio en español.
- No crear commits salvo que el usuario lo pida explícitamente.
- Usar capturas reales del SaaS; no inventar vistas de perfil, documentos o móvil.
- Mantener coherencia visual con la app Rodantex y la paleta Fusion.
