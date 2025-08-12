import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ø Analytics - Privacy-First Analytics Platform',
  description:
    'Deploy analytics in 30 seconds with zero dependencies. Privacy-first, GDPR compliant by design.',
  keywords: 'analytics, privacy, GDPR, self-hosted, zero dependencies',
  authors: [{ name: 'Ø Analytics Team' }],
  openGraph: {
    title: 'Ø Analytics - Privacy-First Analytics',
    description: 'Deploy analytics in 30 seconds with zero dependencies',
    type: 'website',
    url: 'https://zeroanalytics.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ø Analytics - Privacy-First Analytics',
    description: 'Deploy analytics in 30 seconds with zero dependencies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[var(--color-bg)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  )
}
