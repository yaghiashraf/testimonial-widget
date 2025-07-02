/**
 * Security utilities for testimonial widget application
 */

// Content Security Policy headers for enhanced security
export const getCSPHeaders = () => {
  return {
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.stripe.com",
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  }
}

// Input sanitization for testimonial data
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return ''
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
    .replace(/javascript:/gi, '') // Remove javascript: urls
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 1000) // Limit length
}

// URL validation for photo URLs
export const isValidImageUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false
  
  try {
    const urlObj = new URL(url)
    
    // Only allow HTTPS URLs
    if (urlObj.protocol !== 'https:') return false
    
    // Check for common image extensions
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const hasValidExtension = validExtensions.some(ext => 
      urlObj.pathname.toLowerCase().endsWith(ext)
    )
    
    // Allow URLs without extensions if they're from trusted domains
    const trustedDomains = [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'graph.facebook.com',
      'pbs.twimg.com'
    ]
    
    const isTrustedDomain = trustedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    )
    
    return hasValidExtension || isTrustedDomain
  } catch {
    return false
  }
}

// Rate limiting for API calls
class RateLimiter {
  private calls: Map<string, number[]> = new Map()
  
  isAllowed(key: string, maxCalls: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now()
    const windowStart = now - windowMs
    
    if (!this.calls.has(key)) {
      this.calls.set(key, [])
    }
    
    const callTimes = this.calls.get(key)!
    
    // Remove calls outside the window
    const recentCalls = callTimes.filter(time => time > windowStart)
    
    if (recentCalls.length >= maxCalls) {
      return false
    }
    
    recentCalls.push(now)
    this.calls.set(key, recentCalls)
    
    return true
  }
  
  reset(key?: string): void {
    if (key) {
      this.calls.delete(key)
    } else {
      this.calls.clear()
    }
  }
}

export const rateLimiter = new RateLimiter()

// Generate secure random IDs
export const generateSecureId = (): string => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Validate testimonial data structure
export interface SecureTestimonial {
  id: string
  text: string
  author: string
  rating: number
  photoUrl?: string
}

export const validateTestimonial = (data: any): SecureTestimonial | null => {
  if (!data || typeof data !== 'object') return null
  
  const { id, text, author, rating, photoUrl } = data
  
  // Validate required fields
  if (!id || typeof id !== 'string') return null
  if (!text || typeof text !== 'string' || text.trim().length === 0) return null
  if (!author || typeof author !== 'string' || author.trim().length === 0) return null
  if (typeof rating !== 'number' || rating < 1 || rating > 5) return null
  
  // Validate optional photo URL
  if (photoUrl && !isValidImageUrl(photoUrl)) return null
  
  return {
    id: sanitizeInput(id),
    text: sanitizeInput(text),
    author: sanitizeInput(author),
    rating: Math.round(Math.max(1, Math.min(5, rating))),
    photoUrl: photoUrl ? photoUrl : undefined
  }
}

// Encrypt sensitive data for local storage
export const encryptData = (data: string, key: string = 'testimonial-widget'): string => {
  try {
    // Simple XOR encryption for local storage (not for sensitive data)
    let result = ''
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(
        data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      )
    }
    return btoa(result)
  } catch {
    return data // Fallback to unencrypted if encryption fails
  }
}

export const decryptData = (encryptedData: string, key: string = 'testimonial-widget'): string => {
  try {
    const data = atob(encryptedData)
    let result = ''
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(
        data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      )
    }
    return result
  } catch {
    return encryptedData // Fallback to treating as unencrypted
  }
}

// HTTPS enforcement
export const enforceHTTPS = (): void => {
  if (
    typeof window !== 'undefined' &&
    window.location.protocol === 'http:' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1')
  ) {
    window.location.replace(window.location.href.replace('http:', 'https:'))
  }
}

// Security headers validation
export const validateSecurityHeaders = async (): Promise<boolean> => {
  try {
    const response = await fetch(window.location.origin, { method: 'HEAD' })
    const headers = response.headers
    
    const requiredHeaders = [
      'x-frame-options',
      'x-content-type-options',
      'referrer-policy'
    ]
    
    return requiredHeaders.every(header => headers.has(header))
  } catch {
    return false
  }
}

// Audit log for security events
export const auditLog = {
  log: (event: string, details?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[SECURITY AUDIT] ${event}`, details)
    }
    
    // In production, you might want to send this to a logging service
    // analytics.track('security_event', { event, details, timestamp: new Date().toISOString() })
  },
  
  logSuspiciousActivity: (activity: string, data?: any) => {
    auditLog.log('SUSPICIOUS_ACTIVITY', { activity, data, userAgent: navigator.userAgent })
  },
  
  logSecurityViolation: (violation: string, data?: any) => {
    auditLog.log('SECURITY_VIOLATION', { violation, data, url: window.location.href })
  }
}