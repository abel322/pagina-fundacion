export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Fundación Sonrisas',
    description: 'Fundación dedicada al bienestar y desarrollo integral de niños en situación de vulnerabilidad',
    url: 'https://fundacion-f03hl466e-abel322-e634bac5.vercel.app',
    logo: 'https://fundacion-f03hl466e-abel322-e634bac5.vercel.app/placeholder-logo.png',
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
