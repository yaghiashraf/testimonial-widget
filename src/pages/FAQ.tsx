import { useState } from 'react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to set up TestimonialCraft?",
      answer: "Most users have their testimonial widget live on their website in under 2 minutes. Simply add your testimonials, choose a theme, copy the generated code, and paste it into your website. No coding skills required!"
    },
    {
      question: "Do I need any technical or coding skills to use this?",
      answer: "Absolutely not! TestimonialCraft is designed for non-technical users. Everything is point-and-click. You add your testimonials through a simple form, choose your preferred design, and we generate a single piece of code you can paste anywhere on your website."
    },
    {
      question: "Will this slow down my website?",
      answer: "No, quite the opposite! Our widgets are self-contained and under 12KB in size, making them faster than 99% of testimonial solutions. Unlike other tools that load heavy external libraries, our widgets include everything needed in one tiny file."
    },
    {
      question: "Can I customize the appearance to match my brand?",
      answer: "Yes! Free users get 1 beautiful theme with customizable font sizes. Premium users ($9.99 one-time) get access to 8+ themes plus custom color options to perfectly match your brand colors and style."
    },
    {
      question: "What's the difference between the free and paid versions?",
      answer: "Free users can create widgets with up to 1 testimonial using 1 theme with 'Powered by TestimonialCraft' attribution. Premium users ($9.99 one-time payment) get unlimited testimonials, 8+ themes, custom colors, branding removal, and priority email support."
    },
    {
      question: "How do I add testimonials to my widget?",
      answer: "Simply use our testimonial form to add customer names, their testimonial text, star ratings (1-5 stars), and optionally their photos. You can add, edit, or remove testimonials at any time, and changes are immediately reflected in your widget code."
    },
    {
      question: "Are the widgets mobile-friendly and responsive?",
      answer: "Absolutely! All our widgets are mobile-first designed and work perfectly on phones, tablets, and desktops. They include touch/swipe support for navigation and are optimized for all screen sizes. They also include keyboard navigation for accessibility."
    },
    {
      question: "Can I remove the 'Powered by TestimonialCraft' branding?",
      answer: "Yes, but only with the premium version ($9.99 one-time payment). This helps support the free version for other users while giving premium users a completely white-labeled solution."
    },
    {
      question: "Is TestimonialCraft GDPR compliant and secure?",
      answer: "Yes! Your testimonial data is stored locally in your browser using encrypted localStorage - we don't store your testimonials on our servers. We use 256-bit SSL encryption, implement XSS protection, and are fully GDPR and CCPA compliant. Your privacy is our priority."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee for premium purchases. If you're not completely satisfied, contact support@testimonialcraft.com within 30 days for a full refund, no questions asked."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-3 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400">
            Everything you need to know about TestimonialCraft
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-700/50">
            <div className="text-2xl font-bold text-blue-400 mb-2">2 min</div>
            <div className="text-gray-300 text-sm">Average setup time</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-700/50">
            <div className="text-2xl font-bold text-green-400 mb-2">10,000+</div>
            <div className="text-gray-300 text-sm">Happy customers</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-700/50">
            <div className="text-2xl font-bold text-purple-400 mb-2">24hrs</div>
            <div className="text-gray-300 text-sm">Support response time</div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly support team is here to help! 
            We typically respond within 24 hours, and premium users get priority support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-2">📧 Email Support</h3>
              <p className="text-gray-400 text-sm mb-3">Get detailed help via email</p>
              <a 
                href="mailto:support@testimonialcraft.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                support@testimonialcraft.com
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-2">🚀 Feature Requests</h3>
              <p className="text-gray-400 text-sm mb-3">Suggest new features or improvements</p>
              <a 
                href="mailto:hello@testimonialcraft.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                hello@testimonialcraft.com
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm">
              ⚡ Premium users get priority support with responses typically within 12 hours
            </p>
          </div>
        </div>

        {/* Popular Resources */}
        <div className="mt-12 bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Popular Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Quick Start Guide</h3>
              <p className="text-gray-400 text-sm">Get your first widget live in 2 minutes</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Best Practices</h3>
              <p className="text-gray-400 text-sm">Tips to maximize conversion rates</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Troubleshooting</h3>
              <p className="text-gray-400 text-sm">Common issues and solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ