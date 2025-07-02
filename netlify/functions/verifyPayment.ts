import { Handler } from '@netlify/functions'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

/**
 * Netlify Function to verify payment completion
 */
export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Get session ID from query parameters
    const sessionId = event.queryStringParameters?.session_id

    if (!sessionId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing session_id parameter' }),
      }
    }

    // Validate environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY not configured')
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    // Check if payment was successful
    const paid = session.payment_status === 'paid'

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        paid,
        sessionId,
        customerEmail: session.customer_details?.email,
        paymentStatus: session.payment_status,
      }),
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to verify payment',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}