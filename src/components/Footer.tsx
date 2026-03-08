'use client'

import { useState } from 'react'
import { Github, Twitter, Linkedin, Mail, Star } from 'lucide-react'

export default function Footer() {
  const [grade, setGrade] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGradeSubmit = async () => {
    if (!grade || isNaN(Number(grade)) || Number(grade) < 0 || Number(grade) > 100) {
      setFeedback('Please enter a valid grade between 0-100')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: Number(grade) })
      })

      const result = await response.json()
      setFeedback(result.feedback + (result.email_sent ? ' ✅ Sent to professor!' : ' ✅ Recorded locally!'))
    } catch (error) {
      setFeedback('Error submitting grade. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-white/80 border-t border-gray-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center pulse-creative">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl gradient-text">LLM MasterClass</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              A comprehensive educational platform for understanding Large Language Models,
              from fundamentals to advanced concepts. Learn, practice, and master AI.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/introduction" className="text-gray-600 hover:text-blue-600 transition-colors">Introduction</a></li>
              <li><a href="/background" className="text-gray-600 hover:text-blue-600 transition-colors">Background</a></li>
              <li><a href="/math" className="text-gray-600 hover:text-blue-600 transition-colors">Math</a></li>
              <li><a href="/algorithm" className="text-gray-600 hover:text-blue-600 transition-colors">Algorithm</a></li>
              <li><a href="/process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</a></li>
            </ul>
          </div>

          {/* Professor Assessment */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              Professor Assessment
            </h4>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-3">
                Enter a grade (0–100) to assess this project:
              </p>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="0–100"
                  className="w-20 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleGradeSubmit}
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
              {feedback && (
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 LLM MasterClass. Built for educational purposes.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
