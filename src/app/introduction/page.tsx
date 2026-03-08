'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Introduction() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Introduction</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              What are <span className="gradient-text">Large Language Models</span>?
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover the revolutionary technology powering modern AI applications
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h2 className="text-2xl font-semibold text-white mb-4">The Basics</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Large Language Models (LLMs) are AI systems trained on massive amounts of text data
                    to understand and generate human-like text. They represent a breakthrough in natural
                    language processing and have revolutionized how we interact with computers.
                  </p>
                  <p>
                    These models are "large" because they contain hundreds of millions to billions of
                    parameters - the learned patterns and relationships that allow them to process language.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h2 className="text-2xl font-semibold text-white mb-4">Key Characteristics</h2>
                <ul className="space-y-3">
                  {[
                    { icon: Brain, text: "Contextual Understanding - LLMs can maintain context across long conversations" },
                    { icon: Zap, text: "Few-shot Learning - Perform new tasks with minimal examples" },
                    { icon: Target, text: "Versatility - Handle translation, writing, coding, and analysis" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h2 className="text-2xl font-semibold text-white mb-4">How They Work</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    LLMs are based on the Transformer architecture, which uses attention mechanisms
                    to process text. They predict the next word in a sequence by considering all
                    previous words simultaneously.
                  </p>
                  <p>
                    During training, models learn patterns in language through self-supervised learning
                    - predicting missing words in vast amounts of text data. This creates a deep
                    understanding of language structure and meaning.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h2 className="text-2xl font-semibold text-white mb-4">Real-World Impact</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Code Generation & Assistance",
                    "Content Creation & Translation",
                    "Customer Service Automation",
                    "Educational Tools & Tutoring",
                    "Medical Diagnosis Support",
                    "Research & Analysis"
                  ].map((application, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">{application}</span>
                    </div>
                  ))}
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/background"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all group"
              >
                Learn About Background
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold border border-slate-700 hover:bg-slate-700 transition-all"
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
