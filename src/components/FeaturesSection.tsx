import { useState, useEffect, useRef } from 'react'

const FeaturesSection: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: "🚀",
      title: "2-Minute Setup",
      description: "No coding required. Create and embed beautiful testimonial widgets in under 2 minutes.",
      benefit: "Save 20+ hours of development time"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Perfect on every device. Responsive, touch-friendly, and lightning-fast loading.",
      benefit: "80% of traffic is mobile"
    },
    {
      icon: "🎨",
      title: "Beautiful Themes",
      description: "8 stunning color themes + custom colors. Match your brand perfectly.",
      benefit: "Professional look, zero design skills"
    },
    {
      icon: "⚡",
      title: "Lightning Performance",
      description: "Self-contained widgets under 12KB. No external dependencies or slow loading.",
      benefit: "Faster than 99% of widgets"
    },
    {
      icon: "♿",
      title: "Accessibility First",
      description: "WCAG compliant with keyboard navigation, screen reader support, and proper contrast.",
      benefit: "Reach 100% of your audience"
    },
    {
      icon: "🔧",
      title: "Easy Customization",
      description: "Star ratings, photos, auto-rotation, and custom styling. Your widget, your way.",
      benefit: "Perfect fit for any website"
    }
  ]

  const benefits = [
    {
      stat: "340%",
      label: "Average conversion increase",
      description: "Customers who see testimonials are 3.4x more likely to purchase"
    },
    {
      stat: "89%",
      label: "Trust increase with testimonials",
      description: "Social proof is the #1 factor in purchase decisions"
    },
    {
      stat: "2min",
      label: "From signup to live widget",
      description: "Fastest testimonial solution on the market"
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
    <section ref={sectionRef} id="features" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Benefits Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={`benefit-${index}`}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 transform transition-all duration-700 delay-${index * 100} ${
                visibleFeatures.includes(`benefit-${index}` as any) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {benefit.stat}
              </div>
              <div className="text-white font-semibold mb-2">{benefit.label}</div>
              <div className="text-sm text-gray-400">{benefit.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform ${
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
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefit badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature.benefit}
              </div>
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
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <div className="text-red-400 font-bold text-lg">Without Testimonials</div>
                <div className="text-red-300">67% bounce rate</div>
                <div className="text-red-300">2.1% conversion rate</div>
                <div className="text-red-300">Visitors leave skeptical</div>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <div className="text-green-400 font-bold text-lg">With Our Widgets</div>
                <div className="text-green-300">23% bounce rate</div>
                <div className="text-green-300">7.2% conversion rate</div>
                <div className="text-green-300">Visitors become customers</div>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Converting More Visitors - Free
            </button>
            <p className="text-gray-400 text-sm mt-3">No credit card required • 2-minute setup • 340% average conversion boost</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection