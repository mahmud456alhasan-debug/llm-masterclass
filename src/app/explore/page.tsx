'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, History, Database, Target, Shield, ArrowRight, Play, Pause } from 'lucide-react'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'

export default function Explore() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Animation explainer scenes
  const scenes = [
    {
      emoji: '🧠',
      title: 'Meet the LLM',
      description: 'An LLM is like a super-reader who has consumed almost every book, article, and website ever written — and learned how to continue any sentence you give it.'
    },
    {
      emoji: '📚',
      title: 'It Reads Everything',
      description: 'Before it can speak, an LLM is trained on billions of pages — Wikipedia, books, code, news, science. This pre-training can take weeks on thousands of computers.'
    },
    {
      emoji: '🔢',
      title: 'Words Become Numbers',
      description: 'The model doesn\'t read letters — it reads numbers called tokens. Every word gets a unique ID. Computers excel at math, not reading alphabets!'
    },
    {
      emoji: '🎯',
      title: 'Guessing the Next Word',
      description: 'At its core, an LLM is a smart word-guesser. For every blank, it calculates probabilities for thousands of possible next words and picks the best one.'
    },
    {
      emoji: '⚡',
      title: 'The Secret: Attention',
      description: 'The breakthrough is attention — the model looks at ALL words simultaneously and scores their connections. Context determines meaning.'
    },
    {
      emoji: '🎬',
      title: 'Token by Token',
      description: 'The model generates its response token by token, always picking the best next word. This creates emails, code, translations, and more!'
    },
    {
      emoji: '🚀',
      title: 'Now It\'s Everywhere!',
      description: 'From writing assistants to medical diagnosis, LLMs are transforming every industry. It all started with one simple idea: predict the next word.'
    }
  ]

  // History timeline
  const timeline = [
    { year: '1950s–1990s', title: 'Statistical Language Models', desc: 'Early NLP relied on n-gram models and Markov chains for basic text prediction.' },
    { year: '2013', title: 'Word2Vec', desc: 'Google\'s Word2Vec created vector representations of words with semantic meaning.' },
    { year: '2017', title: 'Attention Is All You Need', desc: 'Google\'s Transformer paper introduced self-attention, the foundation of modern LLMs.' },
    { year: '2018', title: 'BERT & GPT-1', desc: 'OpenAI released GPT-1; Google released BERT. Pre-train → fine-tune paradigm emerged.' },
    { year: '2020', title: 'GPT-3 (175B parameters)', desc: 'Few-shot learning shocked the world. One model could write, code, and answer questions.' },
    { year: '2022', title: 'ChatGPT Goes Viral', desc: '100M users in 2 months — fastest adoption ever. LLMs became mainstream.' },
    { year: '2023–2025', title: 'Multimodal & Reasoning Era', desc: 'Vision, audio, long-context reasoning. Open-source models caught up with proprietary ones.' }
  ]

  // Applications
  const applications = [
    { icon: '💻', title: 'Code Generation', desc: 'GitHub Copilot and similar tools help developers write, debug, and explain code — boosting productivity by up to 55%.' },
    { icon: '🏥', title: 'Healthcare', desc: 'Clinical notes summarization, drug discovery, radiology reports, and patient communication assistance.' },
    { icon: '📖', title: 'Education', desc: 'Personalized tutoring, automated grading, curriculum generation, and language learning support.' },
    { icon: '⚖️', title: 'Legal & Finance', desc: 'Contract analysis, compliance checking, financial summarization, and fraud detection.' },
    { icon: '🎨', title: 'Creative Industries', desc: 'Brainstorming, content generation, and creative assistance for writers, designers, and marketers.' },
    { icon: '🌐', title: 'Translation & Localization', desc: 'Superior multilingual capabilities enabling real-time global communication.' }
  ]

  // Ethics & challenges
  const ethics = [
    { icon: '🌀', title: 'Hallucinations', desc: 'LLMs generate plausible-sounding but sometimes false information. They predict likely text, not verified facts.' },
    { icon: '⚠️', title: 'Bias & Fairness', desc: 'Training data carries human biases. Without auditing, LLMs can perpetuate stereotypes in gender, race, and culture.' },
    { icon: '🔒', title: 'Privacy & Data', desc: 'Models may memorize private information from training data. GDPR and regulations create complex challenges.' },
    { icon: '🌍', title: 'Environmental Cost', desc: 'Training GPT-3 used ~1,300 MWh. As models scale, their carbon footprint becomes a major ethical concern.' },
    { icon: '🛡️', title: 'Alignment & Safety', desc: 'AI alignment ensures LLMs act with human values. Preventing harmful goals is critical research today.' },
    { icon: '📰', title: 'Misinformation', desc: 'LLMs can generate convincing fake news and propaganda at scale — challenging information integrity globally.' }
  ]

  const handleSceneChange = (direction: number) => {
    const newScene = Math.max(0, Math.min(scenes.length - 1, currentScene + direction))
    setCurrentScene(newScene)
  }

  return (
    <div className="min-h-screen hero-bg">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full mb-8 border border-white/30">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700 font-semibold">🎯 Deep Dive into LLMs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Explore the
              <span className="block gradient-text-rainbow">Science Behind AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive exploration of Large Language Models — from fundamental concepts to cutting-edge applications and ethical considerations.
            </p>
          </motion.div>

          {/* What is LLM */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">01 — Foundation</div>
            <h2 className="section-title text-center mb-12">What is a Large Language Model?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="creative-card p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Database className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Trained on Massive Data</h3>
                  </div>
                  <p className="text-gray-600">LLMs consume books, websites, code, and scientific papers — sometimes trillions of words — to build statistical models of language.</p>
                </div>

                <div className="creative-card p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Tokens, Not Words</h3>
                  </div>
                  <p className="text-gray-600">Text is split into tokens — sub-word units like "unbelievable" → ["un","believ","able"]. Models operate on token IDs, not raw text.</p>
                </div>
              </div>

              <div className="creative-card p-8 rounded-3xl">
                <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Interactive Token Demo</h4>
                <div className="space-y-4">
                  <div className="text-center text-gray-600 text-sm">Input tokens:</div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {['The', 'cat', 'sat', 'on', 'the', '▢'].map((token, index) => (
                      <button
                        key={index}
                        className="px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg font-mono text-sm transition-colors border border-gray-200 hover:border-blue-300"
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                  <div className="text-center text-gray-600 text-sm mt-4">Next token predictions:</div>
                  <div className="space-y-2">
                    {[
                      { word: 'mat', pct: 72 },
                      { word: 'floor', pct: 14 },
                      { word: 'roof', pct: 8 },
                      { word: 'wall', pct: 6 }
                    ].map((pred, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-12 text-right text-sm font-mono text-gray-600">"{pred.word}"</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${pred.pct}%` }}
                          />
                        </div>
                        <span className="w-8 text-left text-sm text-gray-600">{pred.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How Transformers Work */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">02 — Architecture</div>
            <h2 className="section-title text-center mb-12">How Transformers Work</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Cpu,
                  title: 'Self-Attention',
                  desc: 'Each token scores relevance against every other token. Context disambiguates meaning automatically.'
                },
                {
                  icon: Zap,
                  title: 'Multi-Head Attention',
                  desc: 'Multiple attention heads run in parallel, learning different relationship types simultaneously.'
                },
                {
                  icon: Target,
                  title: 'Layer Stacking',
                  desc: 'Modern LLMs stack 96+ transformer layers. Lower layers capture syntax; higher layers capture reasoning.'
                }
              ].map((item, index) => (
                <div key={index} className="creative-card p-6 rounded-2xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="creative-card p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Transformer Block Architecture</h4>
              <div className="overflow-x-auto">
                <div className="min-w-[600px] space-y-3">
                  {[
                    { label: 'Output', blocks: ['Softmax → Token'], color: 'green' },
                    { label: 'Linear', blocks: ['Feed-Forward Layer', 'Feed-Forward Layer'], color: 'blue' },
                    { label: 'Norm', blocks: ['Layer Norm', 'Layer Norm'], color: 'orange' },
                    { label: 'Attention', blocks: ['Head 1', 'Head 2', 'Head 3', 'Head N'], color: 'purple' },
                    { label: 'Embed', blocks: ['Token + Positional'], color: 'blue' },
                    { label: 'Input', blocks: ['Tokenized Text'], color: 'green' }
                  ].map((layer, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-20 text-right text-sm font-mono text-gray-600">{layer.label}</span>
                      <div className="flex gap-2 flex-1">
                        {layer.blocks.map((block, j) => (
                          <div key={j} className={`flex-1 p-3 rounded-lg text-center text-xs font-medium border ${
                            layer.color === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                            layer.color === 'purple' ? 'bg-purple-50 border-purple-200 text-purple-700' :
                            layer.color === 'orange' ? 'bg-orange-50 border-orange-200 text-orange-700' :
                            'bg-green-50 border-green-200 text-green-700'
                          }`}>
                            {block}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Animation Explainer */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">03 — Visual Story</div>
            <h2 className="section-title text-center mb-12">What is an LLM? (Step by Step)</h2>

            <div className="creative-card p-8 rounded-3xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{scenes[currentScene].emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{scenes[currentScene].title}</h3>
                <p className="text-gray-600 leading-relaxed">{scenes[currentScene].description}</p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => handleSceneChange(-1)}
                  disabled={currentScene === 0}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-medium transition-colors"
                >
                  ← Previous
                </button>

                <div className="flex gap-2">
                  {scenes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentScene(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentScene ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm text-gray-600 font-mono">
                  {currentScene + 1} / {scenes.length}
                </span>

                <button
                  onClick={() => handleSceneChange(1)}
                  disabled={currentScene === scenes.length - 1}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-medium transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.section>

          {/* History Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">04 — Timeline</div>
            <h2 className="section-title text-center mb-12">History of LLMs</h2>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 mb-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                    )}
                  </div>

                  <div className="flex-1 creative-card p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="text-sm font-mono text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-lg">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Applications */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">05 — Use Cases</div>
            <h2 className="section-title text-center mb-12">Real-World Applications</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="creative-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{app.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Ethics & Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="section-label text-center mb-8">06 — Responsibility</div>
            <h2 className="section-title text-center mb-12">Ethics & Challenges</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ethics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="creative-card p-6 rounded-2xl border-l-4 border-red-400"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
