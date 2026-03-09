import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
