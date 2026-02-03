export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney", // Tipo específico para advogados
    "name": "Alan Reis",
    "image": "https://espacocerto.net.br/wp-content/uploads/2022/02/desafios-iniciais-da-carreira-de-advogado.jpeg",
    "url": "https://www.seusite.com.br",
    "telephone": "+5561998860874",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000",
      "addressLocality": "Brasília",
      "addressRegion": "DF",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5614, // Pegue no Google Maps
      "longitude": -46.6559
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}