const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using TestimonialCraft ("the Service"), you agree to be bound by these 
              Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. 
              These Terms apply to all users of the Service, including both free and paid users.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TestimonialCraft is a web-based platform that allows users to create, customize, and 
                generate embeddable testimonial widgets for their websites. Our Service includes:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Widget Builder:</strong> Tools to create and customize testimonial displays</li>
                <li>• <strong>Theme Customization:</strong> Color and styling options for brand matching</li>
                <li>• <strong>Code Generation:</strong> Self-contained HTML/CSS/JS widgets</li>
                <li>• <strong>Free and Paid Tiers:</strong> Basic functionality and premium features</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">User Accounts and Responsibilities</h2>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Free Users</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• No account creation required</li>
              <li>• Data stored locally in your browser</li>
              <li>• Limited to 3 testimonials and 1 theme</li>
              <li>• "Powered by TestimonialCraft" attribution required</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mb-3">Paid Users</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• One-time payment of $15 for lifetime access</li>
              <li>• Unlimited testimonials and all themes</li>
              <li>• Attribution removal allowed</li>
              <li>• Priority email support</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mb-3">User Responsibilities</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Provide accurate and truthful testimonial content</li>
              <li>• Obtain proper consent from testimonial authors</li>
              <li>• Use the Service in compliance with all applicable laws</li>
              <li>• Not attempt to reverse engineer or hack the Service</li>
              <li>• Report security vulnerabilities responsibly</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use Policy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Allowed Uses</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Displaying genuine customer testimonials</li>
                  <li>• Commercial use on business websites</li>
                  <li>• Customizing for brand alignment</li>
                  <li>• Educational and non-profit use</li>
                  <li>• Integration with any website or platform</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Prohibited Uses</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fake or misleading testimonials</li>
                  <li>• Spam or malicious content</li>
                  <li>• Copyright or trademark infringement</li>
                  <li>• Illegal or harmful activities</li>
                  <li>• Reselling or redistributing the Service</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Pricing:</strong> The premium tier is available for a 
                one-time payment of $15 USD, providing lifetime access to all premium features.
              </p>
              <p>
                <strong className="text-white">Payment Processing:</strong> All payments are processed 
                securely through Stripe. We do not store your payment information.
              </p>
              <p>
                <strong className="text-white">Refund Policy:</strong> We offer a 30-day money-back 
                guarantee for premium purchases. Contact support@testimonialcraft.com for refund requests.
              </p>
              <p>
                <strong className="text-white">No Subscriptions:</strong> Our premium tier is a one-time 
                purchase with no recurring charges or subscription fees.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Our Rights:</strong> TestimonialCraft, its design, 
                functionality, and underlying code are owned by us and protected by intellectual property laws.
              </p>
              <p>
                <strong className="text-white">Your Content:</strong> You retain ownership of the testimonial 
                content you create. By using our Service, you grant us a limited license to process and 
                display your content as necessary to provide the Service.
              </p>
              <p>
                <strong className="text-white">Generated Widgets:</strong> The HTML/CSS/JS code generated 
                by our Service can be used freely on your websites without restrictions (except attribution 
                requirements for free users).
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Service Availability and Support</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Uptime:</strong> We strive to maintain 99.9% uptime, 
                though we cannot guarantee uninterrupted service due to maintenance, updates, or 
                unforeseen circumstances.
              </p>
              <p>
                <strong className="text-white">Support:</strong> Free users receive community support. 
                Premium users receive priority email support with response within 48 hours during business days.
              </p>
              <p>
                <strong className="text-white">Updates:</strong> We may update, modify, or discontinue 
                features with reasonable notice. Premium users will continue to have access to core 
                functionality for the lifetime of the service.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimers and Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Service "As Is":</strong> The Service is provided "as is" 
                without warranties of any kind, either express or implied. We do not guarantee that the 
                Service will meet your specific requirements or be error-free.
              </p>
              <p>
                <strong className="text-white">Limitation of Liability:</strong> In no event shall 
                TestimonialCraft be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of the Service. Our total liability shall not exceed the amount 
                paid by you for the Service.
              </p>
              <p>
                <strong className="text-white">Third-Party Content:</strong> We are not responsible for 
                the accuracy, legality, or appropriateness of testimonial content created by users.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Your Right to Terminate:</strong> You may stop using 
                the Service at any time. For premium users, access will continue for the lifetime 
                of the Service.
              </p>
              <p>
                <strong className="text-white">Our Right to Terminate:</strong> We may suspend or 
                terminate your access to the Service for violations of these Terms, illegal activities, 
                or abuse of the Service.
              </p>
              <p>
                <strong className="text-white">Effect of Termination:</strong> Upon termination, your 
                right to use the Service ceases immediately. Generated widgets will continue to function 
                as they are self-contained.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material 
              changes by posting the updated Terms on our website and updating the "Last updated" date. 
              Your continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="text-gray-300 space-y-2">
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <p>📧 Email: <a href="mailto:legal@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">legal@testimonialcraft.com</a></p>
              <p>🎫 Support: <a href="mailto:support@testimonialcraft.com" className="text-blue-400 hover:text-blue-300">support@testimonialcraft.com</a></p>
              <p>📍 Address: TestimonialCraft Legal Team, [Your Business Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService