'use client'

import { useEffect, useState } from 'react'

interface FloatingToken {
  id: number
  text: string
  x: number
  y: number
  delay: number
}

const tokenTexts = [
  'token', 'embed', 'attention', 'softmax', 'weight', 'layer', 'norm', 'query',
  'key', 'value', 'GPT', 'BERT', 'LLM', '∑', 'σ', '∇', 'W·x', 'Q·K',
  'neuron', 'matrix', 'vector', 'tensor', 'loss', 'gradient', 'batch', 'epoch',
  'encode', 'decode', 'mask', 'pad', 'CLS', 'SEP', 'POS', 'NER'
]

export default function FloatingTokens() {
  const [tokens, setTokens] = useState<FloatingToken[]>([])

  useEffect(() => {
    // Generate random tokens
    const generateTokens = () => {
      const newTokens: FloatingToken[] = []

      for (let i = 0; i < 25; i++) {
        newTokens.push({
          id: i,
          text: tokenTexts[Math.floor(Math.random() * tokenTexts.length)],
          x: Math.random() * 100, // 0-100% of viewport width
          y: Math.random() * 100, // 0-100% of viewport height
          delay: Math.random() * 20 // 0-20 second delay
        })
      }

      setTokens(newTokens)
    }

    generateTokens()

    // Regenerate tokens occasionally for variety
    const interval = setInterval(() => {
      generateTokens()
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-tokens">
      {tokens.map((token) => (
        <div
          key={token.id}
          className="floating-token"
          style={{
            left: `${token.x}%`,
            top: `${token.y}%`,
            animationDelay: `${token.delay}s`,
            animationDuration: `${12 + Math.random() * 20}s`
          }}
        >
          {token.text}
        </div>
      ))}
    </div>
  )
}
