import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zero Analytics - Privacy-First Analytics Platform',
  description: 'Deploy analytics in 30 seconds with zero dependencies. Privacy-first, GDPR compliant by design.',
  keywords: 'analytics, privacy, GDPR, self-hosted, zero dependencies',
  authors: [{ name: 'Zero Analytics Team' }],
  openGraph: {
    title: 'Zero Analytics - Privacy-First Analytics',
    description: 'Deploy analytics in 30 seconds with zero dependencies',
    type: 'website',
    url: 'https://zeroanalytics.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Analytics - Privacy-First Analytics',
    description: 'Deploy analytics in 30 seconds with zero dependencies',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}