const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              At TestimonialCraft, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your information when you use our testimonial widget creation service. 
              We are committed to transparency and ensuring your data is handled responsibly.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Information You Provide</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• <strong>Testimonial Content:</strong> Customer reviews, names, and ratings you enter</li>
              <li>• <strong>Contact Information:</strong> Email addresses for support communications</li>
              <li>• <strong>Payment Information:</strong> Processed securely through Stripe (we don't store card details)</li>
              <li>• <strong>Widget Customization:</strong> Theme preferences and styling choices</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mb-3">Information Automatically Collected</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Usage Analytics:</strong> How you interact with our service (anonymized)</li>
              <li>• <strong>Technical Information:</strong> Browser type, device information, IP address</li>
              <li>• <strong>Performance Data:</strong> Load times and error reports for service improvement</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Service Delivery:</strong> Generate and provide your testimonial widgets</li>
              <li>• <strong>Customer Support:</strong> Respond to your questions and resolve issues</li>
              <li>• <strong>Service Improvement:</strong> Analyze usage patterns to enhance our platform</li>
              <li>• <strong>Security:</strong> Protect against fraud and unauthorized access</li>
              <li>• <strong>Legal Compliance:</strong> Meet legal obligations and protect rights</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Local Storage:</strong> Your testimonial data is primarily stored 
                locally in your browser using encrypted localStorage. This means your data stays on your device 
                and is not transmitted to our servers unless you explicitly contact support.
              </p>
              <p>
                <strong className="text-white">Security Measures:</strong> We implement industry-standard security 
                measures including HTTPS encryption, input sanitization, XSS protection, and secure payment processing 
                through Stripe's PCI-compliant infrastructure.
              </p>
              <p>
                <strong className="text-white">Data Retention:</strong> Local data is retained until you clear your 
                browser data. Support communications are retained for 2 years. Payment records are kept as required by law.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Stripe:</strong> We use Stripe for secure payment processing. 
                Stripe's privacy policy governs how they handle your payment information.
              </p>
              <p>
                <strong className="text-white">Netlify:</strong> Our service is hosted on Netlify. 
                Their privacy policy applies to hosting and performance analytics.
              </p>
              <p>
                <strong className="text-white">No Tracking:</strong> We do not use Google Analytics, 
                Facebook Pixel, or other tracking services that could compromise your privacy.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights (GDPR & CCPA Compliance)</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Your Rights Include:</h3>
                <ul className="space-y-1">
                  <li>• Access your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your data</li>
                  <li>• Data portability</li>
                  <li>• Withdraw consent</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">How to Exercise Rights:</h3>
                <ul className="space-y-1">
                  <li>• Email: <a href="mailto:privacy@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">privacy@testimonialcraft.com</a></li>
                  <li>• Response time: 30 days maximum</li>
                  <li>• No charge for requests</li>
                  <li>• Identity verification required</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Local Storage</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Essential Storage:</strong> We use localStorage to save your 
                testimonial configurations locally. This is essential for the service to function.
              </p>
              <p>
                <strong className="text-white">No Tracking Cookies:</strong> We do not use cookies for 
                tracking or advertising purposes.
              </p>
              <p>
                <strong className="text-white">Payment Session:</strong> Stripe may use cookies during 
                the payment process for security and fraud prevention.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-gray-300 space-y-2">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <p>📧 Email: <a href="mailto:privacy@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">privacy@testimonialcraft.com</a></p>
              <p>📧 Support: <a href="mailto:support@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">support@testimonialcraft.com</a></p>
              <p>📞 Response Time: Within 48 hours for privacy-related inquiries</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy