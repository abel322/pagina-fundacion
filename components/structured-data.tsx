export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Fundación Sonrisas',
    description: 'Fundación dedicada al bienestar y desarrollo integral de niños en situación de vulnerabilidad',
    url: 'https://fundacion-sonrisas.org',
    logo: 'https://fundacion-sonrisas.org/placeholder-logo.png',
    sameAs: [
      'https://facebook.com/fundacionsonrisas',
      'https://twitter.com/fundacionsonrisas',
      'https://instagram.com/fundacionsonrisas',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contacto@fundacionsonrisas.org',
      availableLanguage: ['Spanish'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
