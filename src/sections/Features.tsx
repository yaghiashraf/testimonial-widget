import { useState, useEffect, useRef } from 'react'

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: "🚀",
      title: "Quick Setup",
      description: "No coding required. Beautiful widgets in under 2 minutes."
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Perfect on every device. Responsive and touch-friendly."
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      description: "8 stunning themes plus custom colors for brand matching."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Self-contained widgets under 12KB. No dependencies."
    },
    {
      icon: "♿",
      title: "Accessibility Ready",
      description: "WCAG compliant with keyboard navigation and screen readers."
    },
    {
      icon: "🔧",
      title: "Easy Customization",
      description: "Star ratings, photos, auto-rotation. Your widget, your way."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFeatures(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const featureElements = sectionRef.current?.querySelectorAll('[data-index]')
    featureElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Convert More Visitors
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build trust, showcase social proof, and turn skeptical visitors into loyal customers 
            with testimonials that actually work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform ${
                visibleFeatures.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stop Losing Customers to Doubt
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Every visitor who leaves without seeing your testimonials is a potential customer lost forever. 
              Don't let skepticism win - show them proof that others love your product.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="flex items-center justify-center p-4 rounded-lg border border-red-700/50 bg-red-900/10">
                <div className="text-center">
                  <div className="text-red-400 font-bold text-lg mb-1">❌ Without Testimonials</div>
                  <div className="text-red-300">Low Trust</div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg border border-green-700/50 bg-green-900/10">
                <div className="text-center">
                  <div className="text-green-400 font-bold text-lg mb-1">✅ With Testimonials</div>
                  <div className="text-green-300">High Trust</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Converting More Visitors - Free
            </button>
            <p className="text-gray-400 text-sm mt-3">No credit card required • 2-minute setup</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features