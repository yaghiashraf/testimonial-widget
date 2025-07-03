import { useState, useEffect } from 'react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demoSteps = [
    {
      title: "Step 1: Add Your Testimonials",
      description: "Simply type in customer reviews, add star ratings, and upload photos",
      highlight: "testimonial-form",
      content: "Our intuitive form makes it easy to collect and organize customer feedback."
    },
    {
      title: "Step 2: Customize Your Theme",
      description: "Choose from 8 beautiful themes or create custom colors to match your brand",
      highlight: "theme-picker",
      content: "Professional themes designed to convert visitors into customers."
    },
    {
      title: "Step 3: Preview in Real-Time",
      description: "See exactly how your widget will look on your website",
      highlight: "preview",
      content: "Our live preview shows your widget with real testimonials and animations."
    },
    {
      title: "Step 4: Generate Widget Code",
      description: "Get self-contained HTML/CSS/JS code that works anywhere",
      highlight: "generate",
      content: "Copy and paste one snippet - no external dependencies or complex setup."
    },
    {
      title: "Step 5: Embed & Convert",
      description: "Add to your website and watch conversions increase by up to 340%",
      highlight: "results",
      content: "Responsive, accessible, and optimized for maximum conversion impact."
    }
  ]

  useEffect(() => {
    if (isPlaying && isOpen) {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % demoSteps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, isOpen, demoSteps.length])

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0)
      setIsPlaying(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentStepData = demoSteps[currentStep]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">How TestimonialCraft Works</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              See how easy it is to create converting testimonial widgets
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl p-2"
            aria-label="Close demo"
          >
            ×
          </button>
        </div>

        <div className="grid lg:grid-cols-2 h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-auto">
          {/* Left Side - Step Information */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Progress</span>
                <span className="text-sm text-blue-400">
                  {currentStep + 1} of {demoSteps.length}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Step */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {currentStep + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {currentStepData.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {currentStepData.description}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {currentStepData.content}
              </p>
            </div>

            {/* Step Indicators */}
            <div className="space-y-2">
              {demoSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/50'
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index <= currentStep 
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {index < currentStep ? '✓' : index + 1}
                    </div>
                    <span className={`text-sm font-medium ${
                      index === currentStep ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title.replace(/^Step \d+: /, '')}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                {isPlaying ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>Play</span>
                  </>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === demoSteps.length - 1}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Demo */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 border-l border-gray-700">
            <div className="h-full flex items-center justify-center">
              {currentStep === 0 && (
                <div className="w-full max-w-md animate-fade-in">
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-white font-semibold mb-4">Add Testimonials</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-600 rounded p-3 animate-pulse">
                        <div className="h-2 bg-gray-500 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-500 rounded w-1/2"></div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <div className="bg-blue-600 text-white text-center py-2 rounded text-sm">
                        + Add Testimonial
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="w-full max-w-md animate-fade-in">
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-white font-semibold mb-4">Choose Theme</h4>
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {['#3B82F6', '#8B5CF6', '#10B981', '#EF4444'].map((color, i) => (
                        <div
                          key={i}
                          className={`w-12 h-12 rounded-lg border-2 ${
                            i === 0 ? 'border-white scale-110' : 'border-gray-600'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="bg-gray-600 rounded p-3">
                      <div className="text-blue-400 text-center">
                        "Sample testimonial preview"
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="w-full max-w-md animate-fade-in">
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-white font-semibold mb-4">Live Preview</h4>
                    <div className="bg-gray-800 rounded-lg p-4 border border-blue-500">
                      <div className="flex justify-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                      <div className="text-center">
                        <p className="text-gray-200 text-sm italic mb-2">
                          "Amazing product!"
                        </p>
                        <p className="text-blue-400 text-xs">- Sarah J.</p>
                      </div>
                      <div className="flex justify-center space-x-1 mt-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="w-full max-w-md animate-fade-in">
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-white font-semibold mb-4">Generate Code</h4>
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="text-xs text-gray-400 mb-2">HTML + CSS + JS</div>
                      <div className="space-y-1">
                        <div className="h-2 bg-green-500 rounded w-1/2"></div>
                        <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                        <div className="h-2 bg-yellow-500 rounded w-2/3"></div>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded mt-3 text-sm">
                      Copy Code
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="w-full max-w-md animate-fade-in text-center">
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-700/50 rounded-xl p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Boost Conversions!</h4>
                    <div className="text-3xl font-bold text-green-400 mb-1">+340%</div>
                    <div className="text-sm text-gray-400">Average conversion increase</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-3 sm:p-4 lg:p-6 bg-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              ⚡ Setup time: Under 2 minutes • 🔒 No coding required
            </div>
            <button
              onClick={() => {
                onClose()
                document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoModal