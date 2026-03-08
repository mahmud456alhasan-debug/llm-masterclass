'use client'

import { motion } from 'framer-motion'
import { BookOpen, Hash, Type, Zap, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Background() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/30 via-blue-500/20 to-purple-400/30 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-indigo-400/30 rounded-full blur-3xl float-animation delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-500/10 via-blue-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/20 mb-8 pulse-glow">
              <BookOpen className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-sm text-slate-200 font-semibold tracking-wide">📚 Background Knowledge</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-black mb-6">
              LLM <span className="gradient-text">Background</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Understanding the fundamental concepts that power Large Language Models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-green-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center pulse-glow">
                    <Hash className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Tokenization</h2>
                    <p className="text-slate-400">Breaking text into meaningful units</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Tokenization is the process of converting raw text into smaller units called tokens.
                    These tokens can be words, subwords, or even characters, depending on the tokenization strategy.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Example:</p>
                    <code className="text-green-400">"Hello world" → ["Hello", " world"]</code>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-green-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center pulse-glow">
                    <Type className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Embeddings</h2>
                    <p className="text-slate-400">Numerical representations of text</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Embeddings convert tokens into dense numerical vectors that capture semantic meaning.
                    Similar words or concepts end up with similar vector representations.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Vector Example:</p>
                    <code className="text-blue-400">[0.1, 0.8, -0.2, 0.5, ...]</code>
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
              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-green-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center pulse-glow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Context Window</h2>
                    <p className="text-slate-400">How much text the model can consider</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    The context window determines how many tokens the model can consider when making predictions.
                    Larger context windows allow for better understanding of longer documents and conversations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">4K</div>
                      <div className="text-sm text-slate-400">Basic models</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">128K+</div>
                      <div className="text-sm text-slate-400">Advanced models</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-green-400/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center pulse-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Fine-tuning</h2>
                    <p className="text-slate-400">Adapting models to specific tasks</p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Fine-tuning takes a pre-trained model and continues training on a specific dataset
                    to adapt its knowledge and capabilities for particular applications.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <p className="text-sm text-slate-400 mb-2">Types:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">Instruction Tuning</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">RLHF</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">LoRA</span>
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
                href="/math"
                className="inline-flex items-center gap-3 px-8 py-4 btn-gradient rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 group"
              >
                Next: Math Background
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
