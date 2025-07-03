import { useState } from 'react'

const ExamplesSection: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0)

  const examples = [
    {
      title: "E-commerce Store",
      description: "Perfect for online stores to showcase customer satisfaction",
      theme: { primaryColor: "#10B981", fontSize: 16 },
      testimonials: [
        {
          text: "This store has the best customer service! My order arrived quickly and the quality exceeded my expectations.",
          author: "Sarah Johnson",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b35bf1c2?w=64&h=64&fit=crop&crop=face"
        },
        {
          text: "Amazing products and lightning-fast shipping. I'll definitely be ordering again!",
          author: "Mike Chen",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
        }
      ]
    },
    {
      title: "SaaS Platform",
      description: "Build trust for your software product with user testimonials",
      theme: { primaryColor: "#3B82F6", fontSize: 16 },
      testimonials: [
        {
          text: "This platform transformed our workflow. We're 300% more productive now!",
          author: "Jennifer Lee",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
        },
        {
          text: "Incredible software with outstanding support. Worth every penny!",
          author: "David Rodriguez",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
        }
      ]
    },
    {
      title: "Service Business",
      description: "Professional services showcase client satisfaction",
      theme: { primaryColor: "#8B5CF6", fontSize: 16 },
      testimonials: [
        {
          text: "Exceptional service from start to finish. They exceeded all our expectations and delivered on time.",
          author: "Lisa Thompson",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
        },
        {
          text: "Professional, reliable, and results-driven. I highly recommend their services!",
          author: "Robert Kim",
          rating: 5,
          photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
        }
      ]
    }
  ]

  const currentExample = examples[activeExample]

  return (
    <section id="examples" className="py-20 bg-gray-900">
      <div className="container mx-auto px-3">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-700/50 px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-purple-300 text-sm font-medium">Real Examples</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              See It In
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how businesses across different industries use testimonial widgets 
            to build trust and increase conversions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Example Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Choose an Industry</h3>
            
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveExample(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeExample === index
                    ? 'border-purple-500 bg-gradient-to-br from-purple-900/30 to-pink-900/30'
                    : 'border-gray-700 bg-gradient-to-br from-gray-800/30 to-gray-900/30 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{example.title}</h4>
                    <p className="text-gray-400 text-sm">{example.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    activeExample === index 
                      ? 'border-purple-500 bg-purple-500' 
                      : 'border-gray-600'
                  }`}>
                    {activeExample === index && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}

            {/* Usage Stats */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-6 mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Proven Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">340%</div>
                  <div className="text-sm text-gray-400">Avg. Conversion Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">89%</div>
                  <div className="text-sm text-gray-400">Trust Increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl scale-110" />
            
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              {/* Browser mockup header */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 bg-gray-700/50 rounded px-3 py-1 text-sm text-gray-400 text-center">
                  {currentExample.title.toLowerCase().replace(/\s+/g, '')}.com
                </div>
              </div>

              {/* Widget Preview */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    What Our Customers Say
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Don't take our word for it - see what our customers think!
                  </p>
                </div>

                {/* Testimonial Widget */}
                <div 
                  className="max-w-md mx-auto bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
                  style={{ fontSize: `${currentExample.theme.fontSize}px` }}
                >
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Author Photo */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={currentExample.testimonials[0].photoUrl}
                      alt={currentExample.testimonials[0].author}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: currentExample.theme.primaryColor }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentExample.testimonials[0].author)}&background=3B82F6&color=ffffff&size=64`
                      }}
                    />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-center mb-4">
                    <p className="text-gray-100 italic leading-relaxed">
                      "{currentExample.testimonials[0].text}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <cite 
                      className="font-semibold not-italic"
                      style={{ color: currentExample.theme.primaryColor }}
                    >
                      {currentExample.testimonials[0].author}
                    </cite>
                  </div>

                  {/* Navigation dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {currentExample.testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === 0 ? 'w-6' : ''
                        }`}
                        style={{
                          backgroundColor: index === 0 ? currentExample.theme.primaryColor : '#6B7280',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Implementation note */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-700/50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-300 text-sm font-medium">
                      2-minute setup • Zero coding required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Own?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses using testimonial widgets to convert more visitors into customers.
            </p>
            <button 
              onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Building Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExamplesSection