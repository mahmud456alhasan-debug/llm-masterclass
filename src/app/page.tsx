import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLM MasterClass - Learn Large Language Models',
  description: 'A comprehensive educational platform for understanding Large Language Models, from fundamentals to advanced concepts.',
}

export default async function Home() {
  try {
    // Read and serve the GitHub blog-style HTML file directly
    const htmlPath = path.join(process.cwd(), 'public', 'index.html')
    const htmlContent = await fs.readFile(htmlPath, 'utf8')

    // Update API_BASE for Vercel deployment
    const apiBase = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    const updatedHtml = htmlContent.replace(
      'const API_BASE = window.location.origin;',
      `const API_BASE = '${apiBase}';`
    )

    // Return the HTML as raw content
    return (
      <div
        dangerouslySetInnerHTML={{ __html: updatedHtml }}
        suppressHydrationWarning={true}
      />
    )
  } catch (error) {
    console.error('Error reading HTML file:', error)
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#24292f', marginBottom: '1rem' }}>
          LLM MasterClass
        </h1>
        <p style={{ color: '#656d76', marginBottom: '1rem' }}>Loading GitHub-style content...</p>
        <p style={{ color: '#656d76' }}>Please check back soon!</p>
      </div>
    )
  }
}
