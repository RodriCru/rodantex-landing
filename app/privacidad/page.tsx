import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL, LEGAL_ADDRESS, LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Rodantex: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
  alternates: { canonical: "/privacidad" },
};

export default function Page() {
  return (
    <LegalPage title="Aviso de privacidad">
      <p>
        {LEGAL_NAME} (en adelante, «Rodantex») es responsable del tratamiento de tus datos personales, conforme a la
        Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        {LEGAL_ADDRESS ? ` Domicilio: ${LEGAL_ADDRESS}.` : ""} Contacto en materia de privacidad:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Datos que recabamos</h2>
      <p>Cuando nos escribes para solicitar una demo, información o soporte, podemos recabar:</p>
      <ul>
        <li>Nombre y datos de contacto (correo electrónico, teléfono).</li>
        <li>Nombre de tu empresa y datos generales de tu flota que decidas compartir.</li>
        <li>El contenido de tus mensajes.</li>
      </ul>
      <p>No recabamos datos personales sensibles a través de este sitio.</p>

      <h2>Finalidades</h2>
      <p>Usamos tus datos para:</p>
      <ul>
        <li>Responder tus solicitudes de información, demo o soporte.</li>
        <li>Dar seguimiento comercial a tu solicitud y, en su caso, formalizar la contratación del servicio.</li>
        <li>Mejorar nuestro sitio y servicio mediante estadísticas generales de uso.</li>
      </ul>

      <h2>Transferencia de datos</h2>
      <p>
        No vendemos ni compartimos tus datos personales con terceros, salvo proveedores que nos apoyan a operar el
        sitio y el servicio (por ejemplo, hospedaje y correo electrónico) o cuando una autoridad competente lo requiera.
      </p>

      <h2>Derechos ARCO y revocación del consentimiento</h2>
      <p>
        Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos, así como a revocar tu
        consentimiento. Para ejercerlos, envía un correo a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> con
        tu nombre, el derecho que deseas ejercer y los datos a los que se refiere tu solicitud. Te responderemos en un
        plazo máximo de 20 días hábiles.
      </p>

      <h2>Cookies y analítica</h2>
      <p>
        Este sitio puede usar cookies o herramientas de analítica para conocer, de forma agregada, cómo se utiliza.
        Puedes desactivarlas desde la configuración de tu navegador.
      </p>

      <h2>Cambios a este aviso</h2>
      <p>
        Podemos actualizar este aviso. Publicaremos la versión vigente en esta página, con su fecha de última
        actualización.
      </p>
    </LegalPage>
  );
}
