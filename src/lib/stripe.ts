import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

/**
 * Create a Stripe checkout session for the lifetime upgrade
 */
export const createCheckoutSession = async (): Promise<void> => {
  try {
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
        throw new Error('Payment system is not configured. Please contact support.')
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