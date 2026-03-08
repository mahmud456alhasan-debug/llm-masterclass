import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLM Universe — Large Language Models Explained',
  description: 'Explore the technology that powers modern AI — from transformers and attention to GPT, Claude, and beyond.',
}

export default async function Home() {
  try {
    // Read and serve the original HTML file directly
    const htmlPath = path.join(process.cwd(), 'public', 'index.html')
    const htmlContent = await fs.readFile(htmlPath, 'utf8')

    // Return the HTML as raw content
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent.replace(
            '<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>',
            ''
          ).replace(
            'const API_BASE = window.location.origin;',
            `const API_BASE = '${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}';`
          )
        }}
      />
    )
  } catch (error) {
    console.error('Error reading HTML file:', error)
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>LLM Universe</h1>
        <p>Loading original content...</p>
        <p>Please check back soon!</p>
      </div>
    )
  }
}

  const features = [
    {
      icon: BookOpen,
      title: 'Introduction',
      description: 'Learn what LLMs are and why they matter in AI',
      href: '/introduction',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Math Background',
      description: 'Understand the mathematical foundations',
      href: '/math',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Cpu,
      title: 'Algorithm',
      description: 'Deep dive into Transformers and attention',
      href: '/algorithm',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Database,
      title: 'Resources',
      description: 'Explore models, datasets, frameworks & tools',
      href: '/resources',
      color: 'from-cyan-400 to-teal-600'
    }
  ]

  const stats = [
    { value: '20+', label: 'Quiz Questions' },
    { value: '5', label: 'Core Modules' },
    { value: '100+', label: 'Topics Covered' },
    { value: '∞', label: 'Learning Potential' }
  ]

  return (
    <div className="min-h-screen hero-bg">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Creative Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Creative Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gradient orbs with creative positioning */}
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl float-gentle"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl float-gentle delay-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl float-gentle delay-400"></div>
          <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-violet-200/25 to-purple-200/25 rounded-full blur-2xl float-gentle delay-100"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-white/20 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700 font-semibold">🚀 Master Large Language Models</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Discover the
              <span className="block gradient-text-rainbow shimmer">Future of AI</span>
          </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Immerse yourself in a beautifully crafted educational experience exploring Large Language Models.
              From fundamental concepts to cutting-edge algorithms, unlock the secrets of AI innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/introduction"
                className="inline-flex items-center gap-3 px-10 py-5 btn-gradient rounded-xl font-semibold text-lg pulse-creative"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 px-10 py-5 btn-creative rounded-xl font-semibold text-lg"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Take Quiz</span>
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-center p-6 creative-card rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-black gradient-text mb-3">{stat.value}</div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Clean Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={feature.href}
                  className="group block p-8 creative-card rounded-2xl hover:scale-105 transition-all duration-500 card-hover"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color.replace('primary', 'blue').replace('accent', 'purple')} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg pulse-creative`}>
                    <feature.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>

                  <div className="mt-6 flex items-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="text-sm font-semibold">Explore</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Clean Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                href: "/resources",
                icon: Database,
                title: "Explore Resources",
                description: "Models, datasets, frameworks & tools"
              },
              {
                href: "/quiz",
                icon: GraduationCap,
                title: "Test Your Knowledge",
                description: "Challenge yourself with 46 questions"
              },
              {
                href: "/qa",
                icon: MessageSquare,
                title: "Ask Questions",
                description: "Get answers from our LLM assistant"
              }
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={action.href}
                  className="flex items-center gap-6 p-8 creative-card rounded-2xl hover:scale-105 transition-all duration-500 card-hover group overflow-hidden"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/30">
                    <action.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{action.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{action.description}</p>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Features Section */}
      <section className="py-32 px-4 creative-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full mb-8 border border-white/30">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">✨ Why Choose LLM MasterClass?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 gradient-text-rainbow">
              Transform Your AI Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Immerse yourself in a beautifully crafted learning experience that combines cutting-edge technology
              with elegant design, making complex AI concepts accessible and engaging
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Deep Understanding',
                description: 'Go beyond surface-level explanations and truly grasp how LLMs work under the hood with advanced visualizations and detailed breakdowns',
                gradient: 'from-blue-500 to-cyan-500',
                glowColor: 'glow-primary'
              },
              {
                icon: Zap,
                title: 'Interactive Learning',
                description: 'Engage with dynamic quizzes, interactive examples, and hands-on exercises to reinforce your understanding',
                gradient: 'from-purple-500 to-pink-500',
                glowColor: 'glow-secondary'
              },
              {
                icon: Target,
                title: 'Structured Path',
                description: 'Follow a carefully designed curriculum from basics to advanced concepts with clear milestones and progress tracking',
                gradient: 'from-emerald-500 to-teal-500',
                glowColor: 'glow-accent'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-center p-10 creative-card rounded-3xl hover:scale-105 transition-all duration-500 card-hover group"
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/40 shadow-lg">
                  <item.icon className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>

                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
