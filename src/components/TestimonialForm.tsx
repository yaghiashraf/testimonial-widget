import { Testimonial } from '../types'

interface TestimonialFormProps {
  testimonials: Testimonial[]
  onTestimonialsChange: (testimonials: Testimonial[]) => void
  canAddMore: boolean
  onUpgrade: () => void
  isUpgrading: boolean
}

/**
 * Form component for managing testimonials - add, edit, delete
 */
const TestimonialForm: React.FC<TestimonialFormProps> = ({
  testimonials,
  onTestimonialsChange,
  canAddMore,
  onUpgrade,
  isUpgrading,
}) => {
  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      text: '',
      author: '',
      rating: 5,
      photoUrl: '',
    }
    onTestimonialsChange([...testimonials, newTestimonial])
  }

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    onTestimonialsChange(
      testimonials.map(t => (t.id === id ? { ...t, ...updates } : t))
    )
  }

  const deleteTestimonial = (id: string) => {
    onTestimonialsChange(testimonials.filter(t => t.id !== id))
  }

  const renderStars = (rating: number, onChange: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`text-2xl transition-all duration-200 transform hover:scale-110 ${
              star <= rating 
                ? 'text-yellow-400 drop-shadow-lg' 
                : 'text-gray-600 hover:text-yellow-300'
            }`}
            aria-label={`${star} star${star !== 1 ? 's' : ''}`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">Your Testimonials</h2>
          <p className="text-gray-400 text-sm">Add customer reviews to build trust and credibility</p>
        </div>
        {canAddMore ? (
          <button
            onClick={addTestimonial}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            aria-label="Add new testimonial"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>Add Testimonial</span>
            </span>
          </button>
        ) : (
          <button
            onClick={onUpgrade}
            disabled={isUpgrading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
          >
            {isUpgrading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Upgrade to Pro</span>
              </span>
            )}
          </button>
        )}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Start Building Trust</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">Add your first testimonial to see the magic happen. Customer reviews increase conversions by up to 340%!</p>
          <button 
            onClick={addTestimonial} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>Add Your First Testimonial</span>
            </span>
          </button>
        </div>
      )}

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="group bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/50 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">Testimonial {index + 1}</h3>
                  <p className="text-xs text-gray-400">Customer review</p>
                </div>
              </div>
              <button
                onClick={() => deleteTestimonial(testimonial.id)}
                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 hover:bg-red-900/20 p-2 rounded-lg transition-all duration-200"
                aria-label={`Delete testimonial ${index + 1}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-3">
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span>Customer Review *</span>
                  </span>
                </label>
                <textarea
                  value={testimonial.text}
                  onChange={e => updateTestimonial(testimonial.id, { text: e.target.value })}
                  placeholder="This product exceeded my expectations! The quality is outstanding and customer service was amazing."
                  className="w-full h-28 bg-gray-800/50 border border-gray-600 focus:border-blue-500 text-white rounded-xl px-4 py-3 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3">
                    <span className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>Customer Name *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={testimonial.author}
                    onChange={e => updateTestimonial(testimonial.id, { author: e.target.value })}
                    placeholder="Sarah Johnson"
                    className="w-full bg-gray-800/50 border border-gray-600 focus:border-purple-500 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3">
                    <span className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Rating</span>
                    </span>
                  </label>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3">
                    {renderStars(testimonial.rating || 5, rating =>
                      updateTestimonial(testimonial.id, { rating })
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-3">
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span>Profile Photo (optional)</span>
                  </span>
                </label>
                <input
                  type="url"
                  value={testimonial.photoUrl || ''}
                  onChange={e => updateTestimonial(testimonial.id, { photoUrl: e.target.value })}
                  placeholder="https://example.com/customer-photo.jpg"
                  className="w-full bg-gray-800/50 border border-gray-600 focus:border-green-500 text-white rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 placeholder-gray-500"
                />
                {testimonial.photoUrl && (
                  <div className="mt-3">
                    <img
                      src={testimonial.photoUrl}
                      alt="Preview"
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialForm