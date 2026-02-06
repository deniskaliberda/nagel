export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nagel Paul",
    legalName: "JPS GmbH & Co. KG",
    url: "https://nagel-paul.de",
    description:
      "Ihr Fachhandel für professionelle Befestigungstechnik – Nagler, Tacker, Nägel, Klammern und innovative LignoLoc Holznägel.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-89-1234567",
      contactType: "customer service",
      availableLanguage: "German",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "München",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
