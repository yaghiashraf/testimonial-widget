import { useState, useEffect } from 'react'

interface ConversionChartProps {
  className?: string
}

/**
 * Dynamic conversion chart showing the impact of testimonials on trust and conversions
 */
const ConversionChart: React.FC<ConversionChartProps> = ({ className = '' }) => {
  const [animateIn, setAnimateIn] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)

  const metrics = [
    {
      title: "Website Trust Score",
      withoutReviews: 34,
      withReviews: 89,
      unit: "%",
      color: "blue",
      icon: "🛡️"
    },
    {
      title: "Conversion Rate",
      withoutReviews: 2.1,
      withReviews: 7.3,
      unit: "%",
      color: "green", 
      icon: "📈"
    },
    {
      title: "Customer Confidence",
      withoutReviews: 28,
      withReviews: 84,
      unit: "%",
      color: "purple",
      icon: "💪"
    },
    {
      title: "Purchase Intent",
      withoutReviews: 19,
      withReviews: 67,
      unit: "%",
      color: "orange",
      icon: "🎯"
    }
  ]

  useEffect(() => {
    setAnimateIn(true)
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentData = metrics[currentMetric]
  const improvement = ((currentData.withReviews - currentData.withoutReviews) / currentData.withoutReviews * 100).toFixed(0)

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-600 to-blue-700',
          text: 'text-blue-400',
          border: 'border-blue-500',
          bgLight: 'bg-blue-500/20'
        }
      case 'green':
        return {
          bg: 'from-green-600 to-green-700',
          text: 'text-green-400',
          border: 'border-green-500',
          bgLight: 'bg-green-500/20'
        }
      case 'purple':
        return {
          bg: 'from-purple-600 to-purple-700',
          text: 'text-purple-400',
          border: 'border-purple-500',
          bgLight: 'bg-purple-500/20'
        }
      case 'orange':
        return {
          bg: 'from-orange-600 to-orange-700',
          text: 'text-orange-400',
          border: 'border-orange-500',
          bgLight: 'bg-orange-500/20'
        }
      default:
        return {
          bg: 'from-gray-600 to-gray-700',
          text: 'text-gray-400',
          border: 'border-gray-500',
          bgLight: 'bg-gray-500/20'
        }
    }
  }

  const colors = getColorClasses(currentData.color)

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 ${className}`}>
      <div className="container mx-auto px-3 max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span className="text-blue-300 text-sm font-medium">Impact Analysis</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Power of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Social Proof
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            See how testimonials dramatically impact customer behavior and business growth
          </p>
        </div>

        {/* Dynamic Chart */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            
            {/* Metric Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {metrics.map((metric, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMetric(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    index === currentMetric 
                      ? `bg-gradient-to-r ${getColorClasses(metric.color).bg} text-white shadow-lg`
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  <span>{metric.icon}</span>
                  <span className="text-sm font-medium">{metric.title}</span>
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="space-y-6">
              {/* Current Metric Display */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentData.icon} {currentData.title}
                </h3>
                <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                  +{improvement}% improvement
                </div>
                <p className="text-gray-400">with customer testimonials</p>
              </div>

              {/* Bar Chart */}
              <div className="space-y-4">
                {/* Without Reviews */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Without Reviews</span>
                    <span className="text-gray-400 text-sm">{currentData.withoutReviews}{currentData.unit}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${(currentData.withoutReviews / Math.max(currentData.withoutReviews, currentData.withReviews)) * 100}%`
                      }}
                    />
                  </div>
                </div>

                {/* With Reviews */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">With Testimonials</span>
                    <span className={`${colors.text} font-bold`}>{currentData.withReviews}{currentData.unit}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-1000 delay-200`}
                      style={{ 
                        width: `${(currentData.withReviews / Math.max(currentData.withoutReviews, currentData.withReviews)) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-700/50 rounded-xl">
                  <div className="text-2xl font-bold text-green-400 mb-2">89%</div>
                  <div className="text-gray-300 text-sm">of customers read reviews before buying</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-700/50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400 mb-2">340%</div>
                  <div className="text-gray-300 text-sm">average conversion increase</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-700/50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-gray-300 text-sm">trust testimonials as personal recommendations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-500 ${
          animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to boost your conversions?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses using TestimonialCraft to convert more visitors into customers.
            </p>
            <button
              onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Building Your Widget
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConversionChart