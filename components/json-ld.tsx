import { buildStructuredData } from "@/lib/structured-data";
import type { Locale } from "@/lib/translations";

export function JsonLd({ locale }: { locale: Locale }) {
  const schemas = buildStructuredData(locale);

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
