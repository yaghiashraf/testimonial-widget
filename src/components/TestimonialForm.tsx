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
            className={`text-2xl transition-colors ${
              star <= rating ? 'text-yellow-400' : 'text-gray-600'
            } hover:text-yellow-300`}
            aria-label={`${star} star${star !== 1 ? 's' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Testimonials</h2>
        {canAddMore ? (
          <button
            onClick={addTestimonial}
            className="btn-primary"
            aria-label="Add new testimonial"
          >
            + Add Testimonial
          </button>
        ) : (
          <button
            onClick={onUpgrade}
            disabled={isUpgrading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {isUpgrading ? 'Processing...' : 'Upgrade to Add More'}
          </button>
        )}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="mb-4">No testimonials yet. Add your first one!</p>
          <button onClick={addTestimonial} className="btn-primary">
            Add Your First Testimonial
          </button>
        </div>
      )}

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="border border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-gray-300">Testimonial {index + 1}</h3>
              <button
                onClick={() => deleteTestimonial(testimonial.id)}
                className="text-red-400 hover:text-red-300 transition-colors"
                aria-label={`Delete testimonial ${index + 1}`}
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Testimonial Text *
                </label>
                <textarea
                  value={testimonial.text}
                  onChange={e => updateTestimonial(testimonial.id, { text: e.target.value })}
                  placeholder="Enter the testimonial text..."
                  className="input-field w-full h-24 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  value={testimonial.author}
                  onChange={e => updateTestimonial(testimonial.id, { author: e.target.value })}
                  placeholder="John Doe"
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Rating
                </label>
                {renderStars(testimonial.rating || 5, rating =>
                  updateTestimonial(testimonial.id, { rating })
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Photo URL (optional)
                </label>
                <input
                  type="url"
                  value={testimonial.photoUrl || ''}
                  onChange={e => updateTestimonial(testimonial.id, { photoUrl: e.target.value })}
                  placeholder="https://example.com/photo.jpg"
                  className="input-field w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialForm