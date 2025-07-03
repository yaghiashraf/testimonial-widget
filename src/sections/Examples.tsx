import { useState } from 'react'

const Examples: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const examples = [
    {
      category: "SaaS Platform",
      testimonials: [
        {
          text: "TestimonialCraft helped us increase conversions by 340% in just 2 weeks. The setup was incredibly easy!",
          author: "Sarah Chen",
          company: "TechStart Inc.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1494790108755-2616b35bf1c2?w=60&h=60&fit=crop&crop=face"
        },
        {
          text: "Beautiful design and lightning-fast performance. Our customers love seeing social proof.",
          author: "David Kim",
          company: "CloudFlow",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
        }
      ]
    },
    {
      category: "E-commerce Store",
      testimonials: [
        {
          text: "Sales increased 280% after adding testimonials. Customers trust us more and buy faster.",
          author: "Maria Rodriguez",
          company: "Boutique Central",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
        },
        {
          text: "The widget looks amazing on mobile. Perfect for our mobile-first customers.",
          author: "James Wilson",
          company: "Gadget Grove",
          rating: 5,
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
        }
      ]
    },
    {
      category: "Service Business",
      testimonials: [
        {
          text: "Booking inquiries doubled since we added testimonials. Clients see we're trustworthy.",
          author: "Lisa Thompson",
          company: "Elite Consulting",
          rating: 5,
          image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face"
        },
        {
          text: "Professional look that matches our brand perfectly. Setup took under 5 minutes.",
          author: "Robert Taylor",
          company: "Taylor & Associates",
          rating: 5,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
        }
      ]
    },
    {
      category: "Agency/Freelancer",
      testimonials: [
        {
          text: "My clients love the testimonial widgets I create for them. It's become a key selling point.",
          author: "Amanda Foster",
          company: "Foster Design Studio",
          rating: 5,
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
        },
        {
          text: "Fast, reliable, and my clients see immediate results. This tool pays for itself.",
          author: "Marcus Rivera",
          company: "Rivera Digital",
          rating: 5,
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop&crop=face"
        }
      ]
    }
  ]

  return (
    <section id="examples" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              See It In
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real testimonial widgets from businesses just like yours
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {example.category}
            </button>
          ))}
        </div>

        {/* Example Widgets */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            {/* Browser mockup header */}
            <div className="flex items-center space-x-2 mb-8 pb-4 border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 bg-gray-700/50 rounded px-3 py-1 text-sm text-gray-400 text-center">
                {examples[activeTab].category.toLowerCase().replace(/\s+/g, '')}.com
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {examples[activeTab].testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-200 font-medium mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=3B82F6&color=ffffff&size=40`
                      }}
                    />
                    <div>
                      <cite className="text-blue-400 font-semibold not-italic">
                        {testimonial.author}
                      </cite>
                      <div className="text-sm text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Widget Attribution */}
            <div className="text-center mt-8 pt-6 border-t border-gray-700/50">
              <p className="text-xs text-gray-500">
                Powered by TestimonialCraft
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Ready to create your own testimonial widget?
          </p>
          <button 
            onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Building Your Widget
          </button>
        </div>
      </div>
    </section>
  )
}

export default Examples