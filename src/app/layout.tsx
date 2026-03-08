import type { Metadata } from 'next'
import './globals.css'
import FloatingTokens from '@/components/FloatingTokens'

export const metadata: Metadata = {
  title: 'LLM MasterClass - Learn Large Language Models',
  description: 'A comprehensive educational platform for understanding Large Language Models, from fundamentals to advanced concepts.',
  keywords: ['LLM', 'Large Language Models', 'AI', 'Machine Learning', 'Transformer', 'NLP'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FloatingTokens />
        {children}
      </body>
    </html>
  )
}
