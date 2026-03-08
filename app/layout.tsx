import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fundacion-sonrisas.org'),
  title: {
    default: 'Fundación Sonrisas - Transformando Vidas de Niños',
    template: '%s | Fundación Sonrisas'
  },
  description: 'Fundación dedicada al bienestar y desarrollo integral de niños en situación de vulnerabilidad. Únete a nuestra misión de construir un futuro mejor.',
  keywords: ['fundación', 'niños', 'ayuda social', 'donaciones', 'ONG', 'educación', 'salud infantil', 'voluntariado'],
  authors: [{ name: 'Fundación Sonrisas' }],
  creator: 'Fundación Sonrisas',
  publisher: 'Fundación Sonrisas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://fundacion-sonrisas.org',
    title: 'Fundación Sonrisas - Transformando Vidas de Niños',
    description: 'Fundación dedicada al bienestar y desarrollo integral de niños en situación de vulnerabilidad. Únete a nuestra misión de construir un futuro mejor.',
    siteName: 'Fundación Sonrisas',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Fundación Sonrisas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundación Sonrisas - Transformando Vidas de Niños',
    description: 'Fundación dedicada al bienestar y desarrollo integral de niños en situación de vulnerabilidad.',
    images: ['/placeholder.jpg'],
    creator: '@fundacionsonrisas',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
