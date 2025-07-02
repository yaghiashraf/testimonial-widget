import { Link } from 'react-router-dom'

/**
 * Cancel page shown when user cancels Stripe checkout
 */
const Cancel: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-gray-500 text-6xl mb-4">🛑</div>
        <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-gray-400 mb-6">
          No worries! Your payment was cancelled and you haven't been charged.
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3">You can still use the free version:</h3>
          <ul className="text-sm text-gray-300 space-y-1 text-left">
            <li>• Up to 3 testimonials</li>
            <li>• Basic blue theme</li>
            <li>• Full widget functionality</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="btn-primary inline-block px-8 py-3"
          >
            Continue Building
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Ready to upgrade later?</p>
            <p>You can unlock all features anytime for just $15.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cancel