'use client'

import { motion } from 'framer-motion'
import { GitBranch, Zap, Target, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Process() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-teal-400/30 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/25 via-cyan-500/20 to-blue-400/30 rounded-full blur-3xl float-animation delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-500/10 via-green-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/20 mb-8 pulse-glow">
              <GitBranch className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-200 font-semibold tracking-wide">⚙️ LLM Process Flow</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              LLM <span className="gradient-text">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Understanding how Large Language Models work from input to output
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center pulse-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Input Processing</h2>
                    <p className="text-slate-400">From text to tokens to embeddings</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Raw text input is tokenized, converted to numerical IDs, and transformed
                    into dense vector embeddings that capture semantic meaning.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Pipeline:</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">Text</span>
                      <span className="text-slate-400">→</span>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">Tokens</span>
                      <span className="text-slate-400">→</span>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">IDs</span>
                      <span className="text-slate-400">→</span>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">Embeddings</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center pulse-glow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Transformer Processing</h2>
                    <p className="text-slate-400">Multi-head attention and feed-forward layers</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    The embedded tokens pass through multiple Transformer layers,
                    each containing multi-head attention and feed-forward networks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">12-24</div>
                        <div className="text-sm text-slate-400">Layers</div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">8-12</div>
                        <div className="text-sm text-slate-400">Attention Heads</div>
                      </div>
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
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center pulse-glow">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Text Generation</h2>
                    <p className="text-slate-400">From logits to human-readable text</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    The final layer produces logits that are converted to probabilities,
                    and tokens are selected using various decoding strategies.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Decoding Strategies:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs">Greedy</span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs">Sampling</span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs">Beam Search</span>
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs">Top-K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center pulse-glow">
                    <GitBranch className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Output Detokenization</h2>
                    <p className="text-slate-400">Converting tokens back to text</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Generated token IDs are converted back to text using the vocabulary,
                    producing human-readable output that can be further processed or displayed.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Final Output:</p>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-cyan-400 font-mono text-sm">
                        "Large Language Models are powerful AI systems that can understand and generate human-like text."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-3xl p-8 border border-white/10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Complete LLM Pipeline</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {[
                { step: "1", title: "Input Text", desc: "Raw text input", color: "from-emerald-500 to-green-500" },
                { step: "2", title: "Tokenization", desc: "Text → Tokens", color: "from-green-500 to-teal-500" },
                { step: "3", title: "Embedding", desc: "Tokens → Vectors", color: "from-teal-500 to-cyan-500" },
                { step: "4", title: "Processing", desc: "Transformer layers", color: "from-cyan-500 to-blue-500" },
                { step: "5", title: "Generation", desc: "Token selection", color: "from-blue-500 to-indigo-500" },
                { step: "6", title: "Output", desc: "Detokenization", color: "from-indigo-500 to-purple-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 pulse-glow`}>
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                  {index < 5 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform translate-x-4"></div>
                  )}
                </div>
              ))}
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
                href="/resources"
                className="inline-flex items-center gap-3 px-8 py-4 btn-gradient rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 group"
              >
                Explore Resources
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-2xl font-bold text-lg text-white hover:text-cyan-300 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                Take the Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
