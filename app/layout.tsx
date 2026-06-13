import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import '../styles/globals.css'
import GoogleAnalytics from '@/components/shared/GoogleAnalytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ARMH & Co | International Chartered Accountants | UK & UAE',
  description: 'International accounting expertise. Local regulatory precision. Built for businesses that demand both.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        {children}
      </body>
    </html>
  )
}
