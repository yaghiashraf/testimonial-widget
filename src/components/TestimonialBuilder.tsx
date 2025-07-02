import { useState, useEffect } from 'react'
import TestimonialForm from './TestimonialForm'
import ThemePicker from './ThemePicker'
import CarouselPreview from './CarouselPreview'
import SnippetModal from './SnippetModal'
import { Testimonial, Theme, WidgetConfig } from '../types'
import { loadFromStorage, saveToStorage } from '../lib/storage'
import { createCheckoutSession } from '../lib/stripe'

/**
 * Main testimonial builder component that orchestrates the entire widget creation flow
 */
const TestimonialBuilder: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [theme, setTheme] = useState<Theme>({ primaryColor: '#3B82F6', fontSize: 16 })
  const [showSnippetModal, setShowSnippetModal] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  // Load saved data on mount
  useEffect(() => {
    const savedConfig = loadFromStorage()
    if (savedConfig) {
      setTestimonials(savedConfig.testimonials)
      setTheme(savedConfig.theme)
    }
    setIsPaid(localStorage.getItem('paid') === 'true')
  }, [])

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

  const canAddMoreTestimonials = isPaid || testimonials.length < 3
  const shouldShowUpgradePrompt = !isPaid && testimonials.length >= 3

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Testimonial Showcase Widget
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Create beautiful, responsive testimonial carousels that you can embed on any website.
          No coding required!
        </p>
        {!isPaid && (
          <div className="mt-4 p-3 bg-blue-900/30 border border-blue-700 rounded-lg inline-block">
            <p className="text-blue-300 text-sm">
              Free tier: 3 testimonials max • 
              <button 
                onClick={handleUpgrade}
                disabled={isUpgrading}
                className="ml-2 text-blue-400 hover:text-blue-300 underline disabled:opacity-50"
              >
                {isUpgrading ? 'Processing...' : 'Upgrade for $15 (unlimited testimonials)'}
              </button>
            </p>
          </div>
        )}
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Configuration */}
        <div className="space-y-8">
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
        <div className="space-y-8">
          <CarouselPreview
            testimonials={testimonials}
            theme={theme}
            showPoweredBy={!isPaid}
            shouldBlur={shouldShowUpgradePrompt}
          />
          
          {shouldShowUpgradePrompt && (
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold mb-2">Unlock Unlimited Testimonials</h3>
                <p className="text-blue-100 mb-4">
                  Get unlimited testimonials, all themes, and remove the "Powered by" badge
                </p>
                <button
                  onClick={handleUpgrade}
                  disabled={isUpgrading}
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold disabled:opacity-50"
                >
                  {isUpgrading ? 'Processing...' : 'Upgrade Now - $15 Lifetime'}
                </button>
              </div>
            </div>
          )}

          {testimonials.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setShowSnippetModal(true)}
                className="btn-primary px-8 py-3 text-lg font-semibold"
                disabled={shouldShowUpgradePrompt}
              >
                Generate Widget Code
              </button>
            </div>
          )}
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
    </div>
  )
}

export default TestimonialBuilder