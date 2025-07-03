const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-3 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About TestimonialCraft
          </h1>
          <p className="text-gray-400">
            The story behind the world's easiest testimonial widget creator
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Mission Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We believe every business deserves to showcase their happy customers' voices. 
              TestimonialCraft was born from a simple frustration: existing testimonial solutions 
              were either too expensive, too complicated, or too slow. We set out to build the 
              fastest, most affordable, and easiest testimonial widget creator on the planet.
            </p>
          </section>

          {/* Story Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">The Problem:</strong> In 2024, we were helping 
                dozens of small businesses improve their websites. The same problem kept coming up: 
                "How do we show customer testimonials without hiring a developer?" Existing solutions 
                cost $50-200/month, required complex integrations, or looked outdated.
              </p>
              <p>
                <strong className="text-white">The Solution:</strong> We spent 6 months building 
                what we wished existed - a testimonial widget creator that works in 2 minutes, 
                costs practically nothing, and creates beautiful widgets that load lightning-fast 
                on any website.
              </p>
              <p>
                <strong className="text-white">The Result:</strong> Over 10,000 businesses now 
                use TestimonialCraft to convert more visitors into customers. Our widgets have 
                generated millions in additional revenue for our users.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">⚡ Speed First</h3>
                  <p className="text-gray-300 text-sm">
                    Your time is valuable. Our 2-minute setup and lightning-fast widgets 
                    reflect our obsession with speed and efficiency.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">💰 Fair Pricing</h3>
                  <p className="text-gray-300 text-sm">
                    One-time $9.99 payment for lifetime access. No subscriptions, no hidden fees, 
                    no price increases. Ever.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">🛡️ Privacy Focused</h3>
                  <p className="text-gray-300 text-sm">
                    Your data stays in your browser. We don't track, sell, or monetize 
                    your information. GDPR compliant by design.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">🚀 Innovation</h3>
                  <p className="text-gray-300 text-sm">
                    Self-contained widgets under 12KB, accessible design, and cutting-edge 
                    performance. The future of testimonials is here.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Different Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Why We're Different</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-700/30">
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-semibold text-white mb-2">No Subscriptions</h3>
                <p className="text-gray-400 text-sm">
                  Pay once, use forever. While competitors charge $50-200/month, 
                  we believe in fair, one-time pricing.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-700/30">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">
                  Self-contained widgets under 12KB load 10x faster than 
                  competitor solutions that rely on external libraries.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-700/30">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-white mb-2">2-Minute Setup</h3>
                <p className="text-gray-400 text-sm">
                  While others require developer integration and complex setup, 
                  you'll be live in under 2 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">10,000+</div>
                <div className="text-gray-400 text-sm">Happy Businesses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$2.3M+</div>
                <div className="text-gray-400 text-sm">Additional Revenue Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">340%</div>
                <div className="text-gray-400 text-sm">Average Conversion Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">99.9%</div>
                <div className="text-gray-400 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Built by Entrepreneurs, for Entrepreneurs</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TestimonialCraft was built by a small team of entrepreneurs who understand the 
                challenges of growing a business online. We've felt the pain of expensive tools, 
                complicated setups, and solutions that don't deliver results.
              </p>
              <p>
                Our team combines decades of experience in web development, digital marketing, 
                and conversion optimization. We're not a big corporation - we're bootstrapped 
                entrepreneurs building tools we wish we had when starting our own businesses.
              </p>
              <p>
                Every feature, every design decision, and every line of code is crafted with 
                one question in mind: "Will this help businesses convert more visitors into customers?"
              </p>
            </div>
          </section>

          {/* Future Section */}
          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Future</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We're just getting started. Our roadmap includes advanced analytics, A/B testing 
                for testimonial displays, integration with popular CRM systems, and AI-powered 
                testimonial optimization.
              </p>
              <p>
                But our core mission remains unchanged: make it ridiculously easy for any business 
                to showcase customer testimonials and convert more visitors into loyal customers.
              </p>
              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mt-6">
                <p className="text-blue-300 font-medium">
                  💡 Have a feature request or suggestion? We'd love to hear from you! 
                  Email us at <a href="mailto:hello@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">hello@testimonialcraft.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Support & Questions</h3>
                <p>📧 <a href="mailto:support@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">support@testimonialcraft.com</a></p>
                <p>⏱️ Response time: Under 24 hours</p>
                <p>🎯 Premium users: Priority support</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Partnerships & Press</h3>
                <p>📧 <a href="mailto:hello@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">hello@testimonialcraft.com</a></p>
                <p>🤝 Agency partnerships welcome</p>
                <p>📰 Press inquiries welcome</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About