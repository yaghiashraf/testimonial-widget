import { useState, useEffect, useCallback } from 'react'

interface Testimonial {
  text: string
  author: string
  company: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    text: "Increased our conversion rate by 340% in just 2 weeks!",
    author: "Sarah Chen",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    text: "The most beautiful testimonial widget I've ever seen.",
    author: "Marcus Rivera", 
    company: "Design Studio Pro",
    rating: 5
  },
  {
    text: "Setup took 2 minutes, results were immediate.",
    author: "Emily Watson",
    company: "E-commerce Plus",
    rating: 5
  }
]

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div 
      className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser mockup header */}
      <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-700/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 bg-gray-700/50 rounded px-3 py-1 text-sm text-gray-400 text-center">
          yourwebsite.com
        </div>
      </div>

      {/* Testimonial content */}
      <div className="space-y-6 min-h-[200px] flex flex-col justify-center">
        <div className="text-center">
          {/* Star rating */}
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-lg text-gray-200 font-medium mb-4 transition-all duration-500">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          {/* Author info */}
          <div className="space-y-1">
            <cite className="text-blue-400 font-semibold">
              {testimonials[currentIndex].author}
            </cite>
            <div className="text-sm text-gray-400">
              {testimonials[currentIndex].company}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                index === currentIndex 
                  ? 'bg-blue-500 w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default HeroCarousel