'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Layers, GitBranch, Target, Cpu, Database, FlaskConical, Scale, Code, Users, GraduationCap, DollarSign, Shield, Leaf, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { llmModels, domainApplications, datasets, frameworks, benchmarks } from '@/data/resourcesData'

export default function Resources() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('models')
  const [modelFilterSize, setModelFilterSize] = useState('')
  const [modelFilterType, setModelFilterType] = useState('')
  const [modelFilterCommercial, setModelFilterCommercial] = useState('')

  const filteredModels = llmModels.filter(model => {
    const sizeMatch = modelFilterSize === '' ||
      (modelFilterSize === 'small' && parseInt(model.params.replace('B', '')) <= 7) ||
      (modelFilterSize === 'medium' && parseInt(model.params.replace('B', '')) > 7 && parseInt(model.params.replace('B', '')) <= 34) ||
      (modelFilterSize === 'large' && parseInt(model.params.replace('B', '')) > 34)

    const typeMatch = modelFilterType === '' || model.type === modelFilterType
    const commercialMatch = modelFilterCommercial === '' ||
      (modelFilterCommercial === 'commercial' && model.commercial) ||
      (modelFilterCommercial === 'open' && !model.commercial)

    return sizeMatch && typeMatch && commercialMatch
  })

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-400/30 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-indigo-400/30 rounded-full blur-3xl float-animation delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-cyan-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-white/20 mb-8 pulse-glow">
              <Database className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm text-slate-200 font-semibold tracking-wide">🔬 Advanced Resources Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
              LLM <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive collection of cutting-edge Chinese LLM models, datasets, frameworks, and tools for advanced AI development
            </p>
          </motion.div>

          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {[
              { id: 'models', label: 'Models', icon: Cpu, gradient: 'from-blue-500 to-cyan-500' },
              { id: 'applications', label: 'Applications', icon: Users, gradient: 'from-purple-500 to-pink-500' },
              { id: 'datasets', label: 'Datasets', icon: BookOpen, gradient: 'from-green-500 to-emerald-500' },
              { id: 'frameworks', label: 'Frameworks', icon: Code, gradient: 'from-orange-500 to-red-500' },
              { id: 'benchmarks', label: 'Benchmarks', icon: Scale, gradient: 'from-indigo-500 to-purple-500' }
            ].map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 group ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white glow-primary shadow-xl`
                    : 'glass-card text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-slate-600/50 to-slate-700/50 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                }`}>
                  <tab.icon className={`w-5 h-5 transition-all duration-300 ${
                    activeTab === tab.id ? 'text-white' : 'text-slate-400 group-hover:text-cyan-400'
                  }`} />
                </div>
                <span className="relative">
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/80 rounded-full"></div>
                  )}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Models Tab */}
          {activeTab === 'models' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Enhanced Model Filters */}
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                {[
                  {
                    value: modelFilterSize,
                    onChange: setModelFilterSize,
                    options: [
                      { value: '', label: 'All Sizes' },
                      { value: 'small', label: 'Small (1-7B)' },
                      { value: 'medium', label: 'Medium (8-34B)' },
                      { value: 'large', label: 'Large (35B+)' }
                    ],
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    value: modelFilterType,
                    onChange: setModelFilterType,
                    options: [
                      { value: '', label: 'All Types' },
                      { value: 'text', label: 'Text Only' },
                      { value: 'multimodal', label: 'Multimodal' }
                    ],
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    value: modelFilterCommercial,
                    onChange: setModelFilterCommercial,
                    options: [
                      { value: '', label: 'All Licenses' },
                      { value: 'commercial', label: 'Commercial OK' },
                      { value: 'open', label: 'Fully Open' }
                    ],
                    gradient: 'from-green-500 to-emerald-500'
                  }
                ].map((filter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <select
                      value={filter.value}
                      onChange={(e) => filter.onChange(e.target.value)}
                      className="glass-card border border-white/20 rounded-2xl px-4 py-3 text-white text-sm font-medium hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 bg-slate-800/60 backdrop-blur-sm"
                    >
                      {filter.options.map((option) => (
                        <option key={option.value} value={option.value} className="bg-slate-800 text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  onClick={() => {
                    setModelFilterSize('')
                    setModelFilterType('')
                    setModelFilterCommercial('')
                  }}
                  className="px-6 py-3 glass-card rounded-2xl text-sm font-semibold text-slate-300 hover:text-white transition-all duration-300 border border-white/20 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20 group"
                >
                  <span className="group-hover:text-red-400 transition-colors duration-300">Reset Filters</span>
                </motion.button>
              </div>

              {/* Enhanced Models Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-500 card-hover hover:shadow-2xl hover:shadow-cyan-500/30 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-start gap-6 mb-6 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                        <Cpu className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{model.name}</h3>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            model.commercial
                              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-400/30'
                              : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-400/30'
                          }`}>
                            {model.commercial ? 'Commercial' : 'Open Source'}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            model.type === 'multimodal'
                              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-400/30'
                              : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-400/30'
                          }`}>
                            {model.type}
                          </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{model.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm mb-6 relative z-10">
                      {[
                        { label: 'Parameters', value: model.params, color: 'text-blue-400' },
                        { label: 'Context', value: model.context, color: 'text-purple-400' },
                        { label: 'Training', value: model.training, color: 'text-green-400' },
                        { label: 'C-Eval Score', value: model.score, color: 'text-yellow-400' }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-700/30 border border-white/5">
                          <span className="text-slate-400 font-medium">{stat.label}:</span>
                          <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={model.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold group/link relative z-10"
                    >
                      <span className="group-hover/link:underline">View on GitHub</span>
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {domainApplications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{app.domain}</h3>
                      <p className="text-slate-400 text-sm">Specialized LLM applications</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{app.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Models:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.models.map((model, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {app.useCases.slice(0, 3).map((useCase, i) => (
                        <li key={i} className="text-slate-400 text-sm">• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Datasets Tab */}
          {activeTab === 'datasets' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasets.map((dataset, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{dataset.name}</h3>
                      <p className="text-slate-400 text-sm">{dataset.source}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{dataset.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Size:</span>
                      <span className="text-white ml-2">{dataset.size}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Type:</span>
                      <span className="text-white ml-2">{dataset.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Language:</span>
                      <span className="text-white ml-2">{dataset.language}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Quality:</span>
                      <span className={`ml-2 ${dataset.quality === 'high' ? 'text-green-400' : dataset.quality === 'medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                        {dataset.quality}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Frameworks Tab */}
          {activeTab === 'frameworks' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{framework.name}</h3>
                      <p className="text-slate-400 text-sm">{framework.type} framework</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{framework.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {framework.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {framework.keyBenefits?.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="text-slate-400 text-sm">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  {framework.github && (
                    <a
                      href={framework.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      View on GitHub →
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Benchmarks Tab */}
          {activeTab === 'benchmarks' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Benchmarks Overview */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Chinese LLM Benchmarks</h3>
                <div className="space-y-4">
                  {benchmarks.map((benchmark, index) => (
                    <div key={index} className="border-b border-slate-700 pb-4 last:border-b-0">
                      <h4 className="text-lg font-medium text-white mb-2">{benchmark.name}</h4>
                      <p className="text-slate-400 text-sm mb-2">{benchmark.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-400">Coverage:</span>
                          <span className="text-white ml-2">{benchmark.coverage}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Questions:</span>
                          <span className="text-white ml-2">{benchmark.questions}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Key Insights</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Top Performing Models</h4>
                    <div className="space-y-2">
                      {llmModels.filter(m => m.score !== 'N/A' && m.score !== 'TBD').sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).slice(0, 3).map((model, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-slate-300">{model.name}</span>
                          <span className="text-yellow-400 font-medium">{model.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Model Size Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Small (≤7B)</span>
                        <span className="text-cyan-400">{llmModels.filter(m => parseInt(m.params.replace('B', '')) <= 7).length} models</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Medium (8-34B)</span>
                        <span className="text-cyan-400">{llmModels.filter(m => {
                          const params = parseInt(m.params.replace('B', ''))
                          return params >= 8 && params <= 34
                        }).length} models</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Large (≥35B)</span>
                        <span className="text-cyan-400">{llmModels.filter(m => parseInt(m.params.replace('B', '')) >= 35).length} models</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

