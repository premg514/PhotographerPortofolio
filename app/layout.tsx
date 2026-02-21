import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import CartSidebarContainer from '@/components/CartSidebarContainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Santosh Photography',
  description: 'Capturing moments, creating memories. Professional photography services for all your special occasions.',
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