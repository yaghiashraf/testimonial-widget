import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { verifyPayment } from '../lib/stripe'

/**
 * Success page shown after successful Stripe payment
 */
const Success: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [customerEmail, setCustomerEmail] = useState<string>('')
  
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const handlePaymentVerification = async () => {
      if (!sessionId) {
        setVerificationStatus('error')
        return
      }

      try {
        const isValid = await verifyPayment(sessionId)
        
        if (isValid) {
          // Set payment status in localStorage
          localStorage.setItem('paid', 'true')
          localStorage.setItem('paymentDate', new Date().toISOString())
          localStorage.setItem('sessionId', sessionId)
          
          setVerificationStatus('success')
          setCustomerEmail(localStorage.getItem('customerEmail') || '')
        } else {
          setVerificationStatus('error')
        }
      } catch (error) {
        console.error('Payment verification failed:', error)
        setVerificationStatus('error')
      }
    }

    handlePaymentVerification()
  }, [sessionId])

  if (verificationStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Verifying your payment...</h2>
          <p className="text-gray-400">Please wait while we confirm your purchase.</p>
        </div>
      </div>
    )
  }

  if (verificationStatus === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-4">Payment Verification Failed</h1>
          <p className="text-gray-400 mb-6">
            We couldn't verify your payment. This might be a temporary issue.
          </p>
          <div className="space-y-3">
            <Link
              to="/"
              className="btn-primary inline-block"
            >
              Return to Builder
            </Link>
            <div className="text-sm text-gray-500">
              <p>If you were charged but still see this error, please contact support.</p>
              <p className="mt-2">Session ID: <code className="bg-gray-800 px-2 py-1 rounded text-xs">{sessionId}</code></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-green-500 text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Payment Successful!
        </h1>
        <p className="text-gray-300 mb-6">
          Thank you for upgrading to the lifetime plan. You now have access to:
        </p>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6 text-left">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-green-400">
              <span className="mr-2">✓</span>
              Unlimited testimonials
            </li>
            <li className="flex items-center text-green-400">
              <span className="mr-2">✓</span>
              All color themes & customization
            </li>
            <li className="flex items-center text-green-400">
              <span className="mr-2">✓</span>
              No "Powered by" badge
            </li>
            <li className="flex items-center text-green-400">
              <span className="mr-2">✓</span>
              Lifetime access - no subscriptions
            </li>
          </ul>
        </div>

        {customerEmail && (
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-6">
            <p className="text-blue-300 text-sm">
              Receipt sent to: <strong>{customerEmail}</strong>
            </p>
          </div>
        )}

        <Link
          to="/"
          className="btn-primary inline-block px-8 py-3 text-lg font-semibold"
        >
          Start Building Widgets
        </Link>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>Transaction ID: {sessionId}</p>
          <p className="mt-1">Keep this for your records</p>
        </div>
      </div>
    </div>
  )
}

export default Success