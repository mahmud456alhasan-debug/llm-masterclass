'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle, XCircle, RotateCcw, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import { quizQuestions } from '@/data/quizData'

export default function Quiz() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [activeToken, setActiveToken] = useState<number | null>(null)
  const [tokenProbabilities, setTokenProbabilities] = useState([
    { word: 'mat', percentage: 0 },
    { word: 'floor', percentage: 0 },
    { word: 'roof', percentage: 0 },
    { word: 'wall', percentage: 0 }
  ])

  // Shuffle and select 10 questions
  const selectedQuestions = quizQuestions.slice(0, 10)

  // Token click handler for interactive demo
  const handleTokenClick = (tokenIndex: number) => {
    setActiveToken(tokenIndex)

    // Different probability distributions based on context
    const probabilitySets = [
      // "The" - very generic
      [
        { word: 'cat', percentage: 25 },
        { word: 'dog', percentage: 20 },
        { word: 'car', percentage: 15 },
        { word: 'house', percentage: 12 }
      ],
      // "cat" - animal context
      [
        { word: 'sat', percentage: 35 },
        { word: 'ran', percentage: 18 },
        { word: 'ate', percentage: 15 },
        { word: 'slept', percentage: 12 }
      ],
      // "sat" - position/action context
      [
        { word: 'on', percentage: 40 },
        { word: 'down', percentage: 20 },
        { word: 'up', percentage: 15 },
        { word: 'still', percentage: 10 }
      ],
      // "on" - preposition context
      [
        { word: 'the', percentage: 45 },
        { word: 'a', percentage: 20 },
        { word: 'my', percentage: 15 },
        { word: 'her', percentage: 8 }
      ],
      // "the" - article context
      [
        { word: 'mat', percentage: 30 },
        { word: 'table', percentage: 25 },
        { word: 'floor', percentage: 20 },
        { word: 'chair', percentage: 15 }
      ],
      // "▢" - blank/prediction context
      [
        { word: 'mat', percentage: 72 },
        { word: 'floor', percentage: 14 },
        { word: 'roof', percentage: 8 },
        { word: 'wall', percentage: 6 }
      ]
    ]

    setTokenProbabilities(probabilitySets[tokenIndex])
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = selectedAnswer!
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === selectedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleShowResult = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
    setUserAnswers([])
  }

  const getScoreColor = () => {
    const percentage = (score / selectedQuestions.length) * 100
    if (percentage >= 80) return 'text-green-400'
    if (percentage >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreMessage = () => {
    const percentage = (score / selectedQuestions.length) * 100
    if (percentage >= 80) return 'Excellent! You have a strong understanding of LLMs.'
    if (percentage >= 60) return 'Good job! You have a solid foundation in LLM concepts.'
    return 'Keep learning! Review the material and try again.'
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen hero-bg">
        <Navbar onSearchClick={() => setIsSearchOpen(true)} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="creative-card rounded-3xl p-10"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center pulse-creative">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Completed!</h1>

              <div className="text-6xl font-bold mb-4">
                <span className={getScoreColor()}>{score}</span>
                <span className="text-gray-500">/{selectedQuestions.length}</span>
              </div>

              <div className="text-xl text-gray-700 mb-6">
                {Math.round((score / selectedQuestions.length) * 100)}% Correct
              </div>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {getScoreMessage()}
              </p>

              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-8 py-4 btn-gradient rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Take Quiz Again
              </button>
            </motion.div>

            {/* Question Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Question Review</h2>
              {selectedQuestions.map((question, index) => (
                <div key={index} className="creative-card rounded-xl p-6 text-left">
                  <div className="flex items-start gap-3">
                    {userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium mb-2">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="text-sm text-gray-600 mb-2">
                        Your answer: <span className={userAnswers[index] === question.correctAnswer ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
                          {question.options[userAnswers[index]]}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Correct answer: <span className="text-green-600 font-semibold">{question.options[question.correctAnswer]}</span>
                      </div>
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-700 text-sm">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  const question = selectedQuestions[currentQuestion]

  return (
    <div className="min-h-screen hero-bg">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-white/30">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700 font-medium">Interactive Quiz</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Test Your <span className="gradient-text">Knowledge</span>
            </h1>
            <div className="flex items-center justify-center gap-8 text-gray-600">
              <span>Question {currentQuestion + 1} of {selectedQuestions.length}</span>
              <span>Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / selectedQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Interactive Token Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="creative-card rounded-3xl p-8 mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🤖 How LLMs Process Text</h3>
              <p className="text-gray-600 text-sm">Click on tokens to see how the model predicts the next word</p>
            </div>

            <div className="space-y-6">
              {/* Token Flow */}
              <div>
                <div className="text-center text-gray-600 text-sm mb-3 font-medium">Input tokens:</div>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                  {['The', 'cat', 'sat', 'on', 'the', '▢'].map((token, index) => (
                    <button
                      key={index}
                      onClick={() => handleTokenClick(index)}
                      className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 border ${
                        activeToken === index
                          ? 'bg-blue-600 text-white shadow-lg border-blue-600'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {token}
                    </button>
                  ))}
                </div>
              </div>

              {/* Probability Bars */}
              <div>
                <div className="text-center text-gray-600 text-sm mb-3 font-medium">Next token probabilities:</div>
                <div className="space-y-3">
                  {tokenProbabilities.map((prob, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-16 text-right text-gray-600 text-sm font-mono">"{prob.word}"</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-sm"
                          initial={{ width: 0 }}
                          animate={{ width: `${prob.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="w-10 text-left text-gray-600 text-sm font-medium">{prob.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-gray-500 text-xs bg-gray-50 px-4 py-2 rounded-lg">
                ↑ Click different tokens to see how context changes predictions
              </div>
            </div>
          </motion.div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="creative-card rounded-3xl p-8 mb-8"
          >
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold mb-4 ${
                question.difficulty === 'easy' ? 'bg-green-100 text-green-700 border border-green-200' :
                question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {question.difficulty.toUpperCase()}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{question.question}</h2>
              <p className="text-gray-600 font-medium">Category: {question.category}</p>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    selectedAnswer === index
                      ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-md'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:shadow-sm'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Show Result Button */}
            {selectedAnswer !== null && !showResult && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleShowResult}
                  className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 border border-gray-300 transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                >
                  Show Answer
                </button>
              </div>
            )}

            {/* Result */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  {selectedAnswer === question.correctAnswer ? (
                    <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`text-lg font-bold mb-3 ${
                      selectedAnswer === question.correctAnswer ? 'text-green-700' : 'text-red-600'
                    }`}>
                      {selectedAnswer === question.correctAnswer ? 'Correct! 🎉' : 'Incorrect'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Next Button */}
            {showResult && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-10 py-4 btn-gradient rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                >
                  {currentQuestion < selectedQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
