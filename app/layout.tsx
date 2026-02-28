import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import CartSidebarContainer from '@/components/CartSidebarContainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Santosh Photography | Best Photographer in Bhimavaram',
  description: 'Professional photography services in Bhimavaram. Specialized in Weddings, Baby Showers, Cradle Ceremonies, and Fashion Shoots. Capturing your timeless memories with passion.',
  keywords: ['Photographer in Bhimavaram', 'Wedding Photography', 'Baby Shower Photography', 'Cradle Ceremony', 'Santosh Photography', 'Best Photographer India'],
  authors: [{ name: 'Santosh Photography' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772271906/logo.jpg_duilqh.jpg',
    apple: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772271906/logo.jpg_duilqh.jpg',
  },
  openGraph: {
    title: 'Santosh Photography | Timeless Memories',
    description: 'Professional photography services in Bhimavaram. Capturing moments, creating memories.',
    url: 'https://santoshphotography.in',
    siteName: 'Santosh Photography',
    images: [
      {
        url: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772271906/logo.jpg_duilqh.jpg',
        width: 1200,
        height: 630,
        alt: 'Santosh Photography Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

// Load Inter for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Load Poppins for headings
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <CartProvider>
          {children}
          <CartSidebarContainer />
        </CartProvider>
      </body>
    </html>
  )
}