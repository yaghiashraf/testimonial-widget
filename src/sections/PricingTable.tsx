const PricingTable: React.FC = () => {
  const features = [
    {
      category: "Widget Creation",
      items: [
        { name: "Testimonial Management", free: "Up to 3", pro: "Unlimited" },
        { name: "Theme Customization", free: "1 Theme", pro: "8+ Themes + Custom Colors" },
        { name: "Photo Support", free: "✓", pro: "✓" },
        { name: "Star Ratings", free: "✓", pro: "✓" },
        { name: "Auto-rotation", free: "✓", pro: "✓" }
      ]
    },
    {
      category: "Design & Branding",
      items: [
        { name: "Responsive Design", free: "✓", pro: "✓" },
        { name: "Custom Colors", free: "—", pro: "✓" },
        { name: "Font Size Control", free: "✓", pro: "✓" },
        { name: "Remove Branding", free: "—", pro: "✓" },
        { name: "Custom CSS", free: "—", pro: "✓" }
      ]
    },
    {
      category: "Technical Features",
      items: [
        { name: "Self-contained Code", free: "✓", pro: "✓" },
        { name: "Mobile Optimized", free: "✓", pro: "✓" },
        { name: "WCAG Accessibility", free: "✓", pro: "✓" },
        { name: "Touch/Swipe Support", free: "✓", pro: "✓" },
        { name: "Keyboard Navigation", free: "✓", pro: "✓" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Email Support", free: "—", pro: "Priority Support" },
        { name: "Updates", free: "✓", pro: "✓" },
        { name: "GDPR Compliant", free: "✓", pro: "✓" },
        { name: "99.9% Uptime", free: "✓", pro: "✓" },
        { name: "Money-back Guarantee", free: "—", pro: "30 days" }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Detailed Feature Comparison
      </h3>
      
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl overflow-hidden">
        {/* Mobile header - sticky on small screens */}
        <div className="md:hidden sticky top-0 bg-gray-800 z-10">
          <div className="grid grid-cols-3 gap-4 px-6 py-4 text-center">
            <div className="font-semibold text-white">Feature</div>
            <div className="font-semibold text-gray-300">Free</div>
            <div className="font-semibold text-blue-300">Pro</div>
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:block bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-6 py-4 border-b border-gray-700/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="font-semibold text-white">Feature</div>
            <div className="font-semibold text-gray-300">Free</div>
            <div className="font-semibold text-blue-300">Pro</div>
          </div>
        </div>

        {features.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 px-6 py-3 border-b border-gray-700/50">
              <h4 className="text-lg font-semibold text-white">{category.category}</h4>
            </div>
            {category.items.map((feature, featureIndex) => (
              <div key={featureIndex} className="hover:bg-gray-800/20 transition-colors border-b border-gray-800/50 last:border-b-0">
                {/* Mobile layout */}
                <div className="md:hidden px-6 py-3">
                  <div className="font-medium text-gray-300 mb-2">{feature.name}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center">
                      <span className="text-gray-400">Free:</span>
                      <span className="ml-2">
                        {feature.free === "✓" ? (
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : feature.free === "—" ? (
                          <span className="text-gray-500">—</span>
                        ) : (
                          <span className="text-gray-400">{feature.free}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-blue-400">Pro:</span>
                      <span className="ml-2">
                        {feature.pro === "✓" ? (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : feature.pro === "—" ? (
                          <span className="text-gray-500">—</span>
                        ) : (
                          <span className="text-blue-300 font-medium">{feature.pro}</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-4">
                  <div className="text-gray-300 font-medium">{feature.name}</div>
                  <div className="text-center">
                    {feature.free === "✓" ? (
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : feature.free === "—" ? (
                      <span className="text-gray-500 text-lg">—</span>
                    ) : (
                      <span className="text-gray-400 text-sm">{feature.free}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {feature.pro === "✓" ? (
                      <svg className="w-5 h-5 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : feature.pro === "—" ? (
                      <span className="text-gray-500 text-lg">—</span>
                    ) : (
                      <span className="text-blue-300 text-sm font-medium">{feature.pro}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingTable