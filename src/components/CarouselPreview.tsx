import React, { useState, useEffect, useRef } from 'react'
import { Testimonial, Theme } from '../types'

interface CarouselPreviewProps {
  testimonials: Testimonial[]
  theme: Theme
  showPoweredBy: boolean
  shouldBlur?: boolean
}

/**
 * Live preview component showing how the testimonial carousel will look
 */
const CarouselPreview: React.FC<CarouselPreviewProps> = ({
  testimonials,
  theme,
  showPoweredBy,
  shouldBlur = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying || testimonials.length <= 1) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, testimonials.length])

  // Reset index when testimonials change
  useEffect(() => {
    setCurrentIndex(0)
  }, [testimonials])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  if (testimonials.length === 0) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div className="text-center py-12 text-gray-400">
          <p>Add testimonials to see the preview</p>
        </div>
      </div>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-sm text-gray-400 hover:text-white transition-colors"
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      <div className={`relative ${shouldBlur ? 'filter blur-sm' : ''}`}>
        {/* Mock website container */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-300">Your Website</h3>
            <p className="text-sm text-gray-500">Testimonial widget preview</p>
          </div>

          {/* Testimonial Carousel */}
          <div 
            className="testimonial-widget max-w-md mx-auto"
            style={{ fontSize: `${theme.fontSize}px` }}
          >
            <div className="relative bg-gray-800 rounded-lg p-6 shadow-lg">
              {/* Navigation Arrows */}
              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors z-10"
                    style={{ color: theme.primaryColor }}
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors z-10"
                    style={{ color: theme.primaryColor }}
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </>
              )}

              {/* Testimonial Content */}
              <div className="px-8">
                {/* Author Photo */}
                {currentTestimonial.photoUrl && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={currentTestimonial.photoUrl}
                      alt={`${currentTestimonial.author}'s photo`}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: theme.primaryColor }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}

                {/* Rating */}
                {currentTestimonial.rating && renderStars(currentTestimonial.rating)}

                {/* Testimonial Text */}
                <blockquote className="text-center mb-4">
                  <p className="text-gray-100 italic leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <cite 
                    className="font-semibold not-italic"
                    style={{ color: theme.primaryColor }}
                  >
                    {currentTestimonial.author}
                  </cite>
                </div>
              </div>

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-6'
                          : 'hover:opacity-75'
                      }`}
                      style={{
                        backgroundColor: index === currentIndex ? theme.primaryColor : '#6B7280',
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Powered By Badge */}
              {showPoweredBy && (
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    Powered by Testimonial Widget
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {shouldBlur && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900/80 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Upgrade to Preview</h3>
            <p className="text-gray-300 text-sm">
              Unlock unlimited testimonials to see the full preview
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarouselPreview