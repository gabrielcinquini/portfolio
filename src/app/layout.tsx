import './globals.css'

import type { Metadata } from 'next'
import { Heebo, Kalam } from 'next/font/google'
import { Toaster } from 'sonner'

import { ClientProviderLayout } from '@/layouts/ClientProvider'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-heebo',
  fallback: ['Times New Roman', 'Times', 'monospace'],
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kalam',
  fallback: ['Times New Roman', 'Times', 'monospace'],
})

export const metadata: Metadata = {
  title: 'GC Portfolio',
  description: 'Portfolio de Gabriel Cinquini',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${kalam.variable}`}>
        <Toaster richColors closeButton />
        <ClientProviderLayout>{children}</ClientProviderLayout>
      </body>
    </html>
  )
}
