import { Handler } from '@netlify/functions'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

/**
 * Netlify Function to create Stripe checkout sessions
 */
export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Validate environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY not configured')
    }

    if (!process.env.PRICE_ID_LIFETIME) {
      throw new Error('PRICE_ID_LIFETIME not configured')
    }

    // Get the origin for redirect URLs
    const origin = event.headers.origin || 'https://localhost:3000'

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.PRICE_ID_LIFETIME,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        product: 'testimonial-widget-lifetime',
      },
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      customer_creation: 'always',
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url: session.url,
        sessionId: session.id,
      }),
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to create checkout session',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}