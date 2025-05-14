import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Agile',
  description: 'Created By Master 1 Gl',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
