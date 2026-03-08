'use client'

import { motion } from 'framer-motion'
import { Calculator, Sigma, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Math() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-purple-400/30 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-indigo-400/30 rounded-full blur-3xl float-animation delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 via-red-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/20 mb-8 pulse-glow">
              <Calculator className="w-5 h-5 text-orange-400 animate-pulse" />
              <span className="text-sm text-slate-200 font-semibold tracking-wide">🔢 Mathematical Foundations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              LLM <span className="gradient-text">Mathematics</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              The mathematical principles that power Large Language Models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center pulse-glow">
                    <Sigma className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Softmax Function</h2>
                    <p className="text-slate-400">Converting logits to probabilities</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    The softmax function converts model outputs (logits) into probability distributions
                    that sum to 1, allowing us to select the most likely next token.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Formula:</p>
                    <code className="text-orange-400 block text-center">softmax(xᵢ) = eˣⁱ / Σⱼ eˣʲ</code>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-orange-400">Input</div>
                      <div className="text-sm text-slate-400">[2.1, 1.3, 0.7]</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-orange-400">Softmax</div>
                      <div className="text-sm text-slate-400">[0.7, 0.2, 0.1]</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-orange-400">Sum</div>
                      <div className="text-sm text-slate-400">1.0</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center pulse-glow">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cross-Entropy Loss</h2>
                    <p className="text-slate-400">Measuring prediction accuracy</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Cross-entropy loss measures the difference between predicted probabilities
                    and actual target distributions, guiding the model to make better predictions.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Formula:</p>
                    <code className="text-red-400 block text-center">L = -Σᵢ yᵢ log(pᵢ)</code>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Where:</p>
                    <ul className="space-y-1 text-sm">
                      <li><code className="text-red-400">yᵢ</code> = actual probability (0 or 1)</li>
                      <li><code className="text-red-400">pᵢ</code> = predicted probability</li>
                    </ul>
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
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center pulse-glow">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Linear Algebra</h2>
                    <p className="text-slate-400">Matrices and vector operations</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Linear algebra forms the foundation of neural networks. Matrices represent
                    weights, and vector operations enable efficient computation of attention mechanisms.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                      <p className="text-sm text-slate-400 mb-2">Matrix Multiplication:</p>
                      <div className="text-center">
                        <code className="text-purple-400">C = A × B</code>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                      <p className="text-sm text-slate-400 mb-2">Attention Computation:</p>
                      <div className="text-center">
                        <code className="text-purple-400">Attention(Q,K,V) = softmax(Q×Kᵀ/√dₖ) × V</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center pulse-glow">
                    <Sigma className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Probability Theory</h2>
                    <p className="text-slate-400">Statistical foundations of LLMs</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Probability theory enables LLMs to make predictions about the likelihood
                    of different tokens appearing next in a sequence.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Next-Token Prediction:</p>
                    <code className="text-cyan-400 block">P(tokenₜ | token₁, token₂, ..., tokenₜ₋₁)</code>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400 mb-1">Greedy</div>
                      <div className="text-sm text-slate-400">Pick highest probability</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400 mb-1">Sampling</div>
                      <div className="text-sm text-slate-400">Temperature-controlled</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/algorithm"
                className="inline-flex items-center gap-3 px-8 py-4 btn-gradient rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 group"
              >
                Next: Algorithm Deep Dive
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
