import { useState, useEffect, useRef } from 'react'
import TestimonialForm from './TestimonialForm'
import ThemePicker from './ThemePicker'
import CarouselPreview from './CarouselPreview'
import SnippetModal from './SnippetModal'
import { Testimonial, Theme, WidgetConfig } from '../types'
import { loadFromStorage, saveToStorage } from '../lib/storage'
import { createCheckoutSession } from '../lib/stripe'

interface TestimonialBuilderProps {
  scrollToBuilder?: boolean
}

/**
 * Enhanced testimonial builder component with professional UI and smooth animations
 */
const TestimonialBuilder: React.FC<TestimonialBuilderProps> = ({ scrollToBuilder = false }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [theme, setTheme] = useState<Theme>({ primaryColor: '#3B82F6', fontSize: 16 })
  const [showSnippetModal, setShowSnippetModal] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)
  const builderRef = useRef<HTMLElement>(null)

  // Load saved data on mount
  useEffect(() => {
    const savedConfig = loadFromStorage()
    if (savedConfig) {
      setTestimonials(savedConfig.testimonials)
      setTheme(savedConfig.theme)
    }
    setIsPaid(localStorage.getItem('paid') === 'true')
    
    // Trigger animations
    setTimeout(() => setAnimateIn(true), 100)
    
    // Scroll to builder if requested
    if (scrollToBuilder && builderRef.current) {
      builderRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollToBuilder])

  // Save data when it changes
  useEffect(() => {
    const config: WidgetConfig = {
      testimonials,
      theme,
      showPoweredBy: !isPaid,
    }
    saveToStorage(config)
  }, [testimonials, theme, isPaid])

  const handleUpgrade = async () => {
    setIsUpgrading(true)
    try {
      await createCheckoutSession()
    } catch (error) {
      console.error('Failed to create checkout session:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsUpgrading(false)
    }
  }

  const canAddMoreTestimonials = isPaid || testimonials.length < 1
  const shouldShowUpgradePrompt = !isPaid && testimonials.length >= 1

  return (
    <section ref={builderRef} id="builder" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-700/50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Widget Builder</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Build Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Testimonial Widget
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Create beautiful, responsive testimonial carousels in minutes. 
            Customize colors, add testimonials, and generate code that works everywhere.
          </p>
          
          {!isPaid && (
            <div className="mt-6 inline-flex items-center space-x-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 px-6 py-3 rounded-xl">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-300 font-medium">Free: 1 testimonial</span>
              </div>
              <div className="w-px h-6 bg-gray-600" />
              <button 
                onClick={handleUpgrade}
                disabled={isUpgrading}
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors disabled:opacity-50"
              >
                {isUpgrading ? 'Processing...' : 'Upgrade for unlimited →'}
              </button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Configuration */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            animateIn ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <TestimonialForm
              testimonials={testimonials}
              onTestimonialsChange={setTestimonials}
              canAddMore={canAddMoreTestimonials}
              onUpgrade={handleUpgrade}
              isUpgrading={isUpgrading}
            />
            
            <ThemePicker
              theme={theme}
              onThemeChange={setTheme}
              isPaid={isPaid}
            />
          </div>

          {/* Right Column - Preview */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <CarouselPreview
              testimonials={testimonials}
              theme={theme}
              showPoweredBy={!isPaid}
              shouldBlur={shouldShowUpgradePrompt}
            />
            
            {shouldShowUpgradePrompt && (
              <div className="text-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl scale-110 animate-pulse" />
                  
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl border border-blue-500/30">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Unlock Unlimited Power
                      </h3>
                      
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        Get unlimited testimonials, all color themes, custom styling, 
                        and remove the "Powered by" badge forever.
                      </p>
                      
                      <div className="flex items-center justify-center space-x-6 mb-6 text-sm">
                        <div className="flex items-center space-x-2 text-blue-100">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Unlimited testimonials</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-100">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>All themes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-100">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>No branding</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleUpgrade}
                        disabled={isUpgrading}
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-xl"
                      >
                        {isUpgrading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
                            <span>Processing...</span>
                          </div>
                        ) : (
                          'Upgrade Now - $9.99 Lifetime'
                        )}
                      </button>
                      
                      <p className="text-blue-200 text-sm opacity-80">
                        One-time payment • No subscriptions • 30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {showSnippetModal && (
        <SnippetModal
          config={{
            testimonials,
            theme,
            showPoweredBy: !isPaid,
          }}
          onClose={() => setShowSnippetModal(false)}
        />
      )}
    </section>
  )
}

export default TestimonialBuilder