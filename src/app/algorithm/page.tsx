'use client'

import { motion } from 'framer-motion'
import { Cpu, Network, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Algorithm() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-400/30 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-blue-500/20 to-cyan-400/30 rounded-full blur-3xl float-animation delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/10 via-purple-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/20 mb-8 pulse-glow">
              <Cpu className="w-5 h-5 text-indigo-400 animate-pulse" />
              <span className="text-sm text-slate-200 font-semibold tracking-wide">🤖 Algorithm Architecture</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              LLM <span className="gradient-text">Algorithm</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Deep dive into the Transformer architecture that revolutionized AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-indigo-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center pulse-glow">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Self-Attention Mechanism</h2>
                    <p className="text-slate-400">The heart of Transformer models</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Self-attention allows the model to weigh the importance of different parts
                    of the input when processing each token, enabling parallel computation of relationships.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Attention Formula:</p>
                    <code className="text-indigo-400 block text-center">Attention(Q,K,V) = softmax(Q×Kᵀ/√dₖ) × V</code>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-sm font-bold text-indigo-400 mb-1">Query</div>
                      <div className="text-xs text-slate-400">What to look for</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-sm font-bold text-indigo-400 mb-1">Key</div>
                      <div className="text-xs text-slate-400">What is available</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-sm font-bold text-indigo-400 mb-1">Value</div>
                      <div className="text-xs text-slate-400">What to extract</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-indigo-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center pulse-glow">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Multi-Head Attention</h2>
                    <p className="text-slate-400">Parallel attention computation</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Multiple attention heads allow the model to focus on different aspects
                    of the input simultaneously, capturing diverse relationships and patterns.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Benefits:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Different attention patterns</li>
                      <li>• Richer representations</li>
                      <li>• Better generalization</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">8-12</div>
                      <div className="text-sm text-slate-400">Typical heads</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">64-128</div>
                      <div className="text-sm text-slate-400">Head dimension</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-indigo-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center pulse-glow">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Positional Encoding</h2>
                    <p className="text-slate-400">Adding sequence position information</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Since Transformers don't have inherent position awareness like RNNs,
                    positional encodings are added to token embeddings to indicate sequence order.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Formula:</p>
                    <code className="text-pink-400 block text-center">PE(pos,2i) = sin(pos/10000^(2i/d))</code>
                    <code className="text-pink-400 block text-center">PE(pos,2i+1) = cos(pos/10000^(2i/d))</code>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Why it works:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Relative position encoding</li>
                      <li>• Handles variable sequence lengths</li>
                      <li>• Enables generalization to longer sequences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-indigo-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center pulse-glow">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Feed-Forward Networks</h2>
                    <p className="text-slate-400">Token-wise transformations</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Each token goes through independent feed-forward networks that transform
                    representations, adding non-linearity and increasing model capacity.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Architecture:</p>
                    <div className="text-center">
                      <code className="text-cyan-400">FFN(x) = max(0, x×W₁ + b₁)×W₂ + b₂</code>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400 mb-1">4×</div>
                      <div className="text-sm text-slate-400">Expansion factor</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400 mb-1">ReLU</div>
                      <div className="text-sm text-slate-400">Activation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-3xl p-8 border border-white/10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Transformer Architecture Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Encoder</h4>
                <p className="text-slate-400 text-sm">Processes input sequences</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Decoder</h4>
                <p className="text-slate-400 text-sm">Generates output sequences</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Attention</h4>
                <p className="text-slate-400 text-sm">Connects encoder and decoder</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/process"
                className="inline-flex items-center gap-3 px-8 py-4 btn-gradient rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 group"
              >
                Next: LLM Process Flow
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-2xl font-bold text-lg text-white hover:text-cyan-300 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                Test Your Knowledge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
