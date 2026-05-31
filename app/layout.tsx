import type { Metadata } from 'next'
import { Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-andale',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'leparfum.ai — Bespoke scents for unforgettable memories',
  description: 'AI-curated bespoke fragrances for weddings, corporate events, and hospitality.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={shareTechMono.variable}>
      <body>{children}</body>
    </html>
  )
}