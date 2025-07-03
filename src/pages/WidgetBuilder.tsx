import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import TestimonialForm from '../components/TestimonialForm'
import ThemePicker from '../components/ThemePicker'
import CarouselPreview from '../components/CarouselPreview'
import SnippetModal from '../components/SnippetModal'
import { Testimonial, Theme } from '../types'
import { setUserFlag } from '../lib/userFlags'
import { createCheckoutSession } from '../lib/stripe'

const WidgetBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [theme, setTheme] = useState<Theme>({ primaryColor: '#3B82F6', fontSize: 16 })
  const [showSnippet, setShowSnippet] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  useEffect(() => {
    setUserFlag('visitedBuilder', true)
    setIsPaid(localStorage.getItem('paid') === 'true')
    
    // Load saved data
    const savedTestimonials = localStorage.getItem('testimonials')
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTestimonials) {
      try {
        setTestimonials(JSON.parse(savedTestimonials))
      } catch (error) {
        console.error('Failed to load testimonials:', error)
      }
    }
    
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme))
      } catch (error) {
        console.error('Failed to load theme:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Auto-save data
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [testimonials, theme])

  const handleUpgrade = async () => {
    setIsUpgrading(true)
    try {
      // Track custom event for analytics
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('stripe_checkout_start')
      }
      await createCheckoutSession()
    } catch (error) {
      console.error('Failed to create checkout session:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsUpgrading(false)
    }
  }

  const canAddMoreTestimonials = isPaid || testimonials.length < 1

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        isPaid={isPaid}
        onUpgrade={handleUpgrade}
        isUpgrading={isUpgrading}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-3">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Create Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Testimonial Widget
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build trust and convert more visitors with beautiful testimonial widgets
            </p>
          </div>
          
          <Breadcrumb currentStep={currentStep} />
        </div>
      </section>

      {/* Builder Content */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Forms */}
            <div className="space-y-8">
              {currentStep === 1 && (
                <TestimonialForm
                  testimonials={testimonials}
                  onTestimonialsChange={setTestimonials}
                  canAddMore={canAddMoreTestimonials}
                  onUpgrade={handleUpgrade}
                  isUpgrading={isUpgrading}
                />
              )}
              
              {currentStep === 2 && (
                <ThemePicker
                  theme={theme}
                  onThemeChange={setTheme}
                  isPaid={isPaid}
                />
              )}
              
              {currentStep === 3 && (
                <div className="card p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Widget Complete!</h2>
                    <p className="text-gray-300 mb-6">
                      Your testimonial widget is ready. Copy the code below and paste it into your website.
                    </p>
                    <button
                      onClick={() => setShowSnippet(true)}
                      className="btn-primary"
                    >
                      Get Copy-Paste Code
                    </button>
                  </div>
                </div>
              )}

              {/* Step Navigation */}
              <div className="flex justify-between items-center pt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous</span>
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    disabled={currentStep === 1 && testimonials.length === 0}
                    className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{currentStep === 1 ? 'Choose Theme' : 'Generate Code'}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="flex items-center space-x-2 btn-secondary"
                  >
                    <span>Create Another</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column - Preview (Sticky) */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <CarouselPreview
                testimonials={testimonials}
                theme={theme}
                showPoweredBy={!isPaid}
                shouldBlur={false}
              />
              
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Code Modal */}
      {showSnippet && (
        <SnippetModal
          config={{
            testimonials,
            theme,
            showPoweredBy: !isPaid
          }}
          onClose={() => setShowSnippet(false)}
        />
      )}
    </div>
  )
}

export default WidgetBuilder