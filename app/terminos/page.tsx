import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos y condiciones de uso del sitio y del servicio de Rodantex.",
  alternates: { canonical: "/terminos" },
};

export default function Page() {
  return (
    <LegalPage title="Términos de uso">
      <p>
        Al acceder y usar este sitio web y los servicios de {LEGAL_NAME} («Rodantex») aceptas estos términos. Si no
        estás de acuerdo, te pedimos no utilizarlos.
      </p>

      <h2>El servicio</h2>
      <p>
        Rodantex ofrece software para la gestión de flotas (control de llantas, mantenimiento, documentos y costos por
        unidad). Las funciones y los planes descritos en el sitio pueden cambiar con el tiempo.
      </p>

      <h2>Precios y contratación</h2>
      <p>
        Los precios publicados son informativos, están expresados en pesos mexicanos y pueden cambiar. Las condiciones
        finales de cada plan (vigencia, facturación e impuestos) se confirman al contratar.
      </p>

      <h2>Uso adecuado</h2>
      <ul>
        <li>Debes proporcionar información veraz y mantener la confidencialidad de tus accesos.</li>
        <li>No puedes usar el servicio con fines ilícitos ni intentar vulnerar su seguridad.</li>
        <li>Eres responsable de la información que cargas y de contar con derecho para hacerlo.</li>
      </ul>

      <h2>Propiedad intelectual</h2>
      <p>
        El software, la marca, el diseño y los contenidos del sitio son propiedad de Rodantex o de sus licenciantes.
        Estos términos no te transfieren ningún derecho sobre ellos, salvo el uso del servicio contratado.
      </p>

      <h2>Tus datos</h2>
      <p>
        La información de tu flota que cargues en el servicio sigue siendo tuya. El tratamiento de datos personales se
        rige por nuestro <a href="/privacidad">Aviso de privacidad</a>.
      </p>

      <h2>Limitación de responsabilidad</h2>
      <p>
        Rodantex es una herramienta de apoyo a la gestión. Las decisiones operativas, de mantenimiento y de seguridad de
        tus unidades son responsabilidad tuya. Hacemos lo posible por mantener el servicio disponible, pero no
        garantizamos que esté libre de interrupciones o errores, y no seremos responsables por daños indirectos.
      </p>

      <h2>Modificaciones</h2>
      <p>Podemos actualizar estos términos; la versión vigente es la publicada en esta página.</p>

      <h2>Ley aplicable y contacto</h2>
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para dudas, escríbenos a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
