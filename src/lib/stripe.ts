import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

/**
 * Create a Stripe checkout session for the lifetime upgrade
 */
export const createCheckoutSession = async (): Promise<void> => {
  try {
    // Check if we're in development and Stripe keys are missing
    const isDev = import.meta.env.DEV
    const hasStripeKey = !!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    
    if (!hasStripeKey) {
      if (isDev) {
        // Show demo mode alert for development
        const proceed = confirm(
          '🚧 Demo Mode: Stripe is not configured.\n\n' +
          'Would you like to simulate a successful upgrade?\n\n' +
          'To enable real payments:\n' +
          '1. Copy .env.example to .env\n' +
          '2. Add your Stripe keys\n' +
          '3. Create a $9.99 product in Stripe Dashboard'
        )
        
        if (proceed) {
          // Simulate successful upgrade for demo purposes
          localStorage.setItem('paid', 'true')
          localStorage.setItem('paymentDate', new Date().toISOString())
          window.location.reload()
        }
        return
      } else {
        // Production error
        throw new Error('Payment system is temporarily unavailable. Please contact support@testimonialcraft.com')
      }
    }

    const response = await fetch('/.netlify/functions/createCheckout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
      console.error('Checkout session creation failed:', errorData)
      
      if (response.status === 500 && errorData.message?.includes('not configured')) {
        throw new Error('Payment system is not configured. Please contact support at support@testimonialcraft.com')
      }
      
      throw new Error(errorData.error || 'Failed to create checkout session')
    }

    const { url } = await response.json()
    
    if (url) {
      window.location.href = url
    } else {
      throw new Error('No checkout URL received')
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    throw error
  }
}

/**
 * Verify a payment session
 */
export const verifyPayment = async (sessionId: string): Promise<boolean> => {
  try {
    const stripe = await stripePromise
    if (!stripe) {
      throw new Error('Stripe failed to load')
    }

    const response = await fetch(`/.netlify/functions/verifyPayment?session_id=${sessionId}`)
    
    if (!response.ok) {
      throw new Error('Failed to verify payment')
    }

    const { paid } = await response.json()
    return paid === true
  } catch (error) {
    console.error('Payment verification error:', error)
    return false
  }
}