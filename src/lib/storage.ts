import { WidgetConfig } from '../types'
import { validateTestimonial, encryptData, decryptData, auditLog } from './security'

const STORAGE_KEY = 'testimonial-widget-config'
const STORAGE_VERSION = '1.0'

interface StorageData {
  version: string
  config: WidgetConfig
  timestamp: number
}

/**
 * Load widget configuration from localStorage with security validation
 */
export const loadFromStorage = (): WidgetConfig | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    
    const decrypted = decryptData(stored)
    const data: StorageData = JSON.parse(decrypted)
    
    // Validate storage version
    if (data.version !== STORAGE_VERSION) {
      auditLog.log('STORAGE_VERSION_MISMATCH', { stored: data.version, expected: STORAGE_VERSION })
      clearStorage()
      return null
    }
    
    // Validate testimonials for security
    if (data.config?.testimonials) {
      data.config.testimonials = data.config.testimonials
        .map(validateTestimonial)
        .filter(Boolean) as any[]
    }
    
    // Check if data is not too old (30 days)
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)
    if (data.timestamp < thirtyDaysAgo) {
      auditLog.log('STORAGE_DATA_EXPIRED', { age: Date.now() - data.timestamp })
      clearStorage()
      return null
    }
    
    return data.config
  } catch (error) {
    auditLog.logSecurityViolation('STORAGE_LOAD_ERROR', error)
    console.error('Failed to load from storage:', error)
    clearStorage() // Clear potentially corrupted data
    return null
  }
}

/**
 * Save widget configuration to localStorage with encryption
 */
export const saveToStorage = (config: WidgetConfig): void => {
  try {
    // Validate and sanitize testimonials before saving
    if (config.testimonials) {
      config.testimonials = config.testimonials
        .map(validateTestimonial)
        .filter(Boolean) as any[]
      
      // Limit number of testimonials for free users
      const isPaid = localStorage.getItem('paid') === 'true'
      if (!isPaid && config.testimonials.length > 3) {
        config.testimonials = config.testimonials.slice(0, 3)
        auditLog.log('TESTIMONIAL_LIMIT_ENFORCED', { count: config.testimonials.length })
      }
    }
    
    const storageData: StorageData = {
      version: STORAGE_VERSION,
      config,
      timestamp: Date.now()
    }
    
    const encrypted = encryptData(JSON.stringify(storageData))
    localStorage.setItem(STORAGE_KEY, encrypted)
    
    auditLog.log('STORAGE_SAVE_SUCCESS', { testimonialCount: config.testimonials?.length || 0 })
  } catch (error) {
    auditLog.logSecurityViolation('STORAGE_SAVE_ERROR', error)
    console.error('Failed to save to storage:', error)
  }
}

/**
 * Clear all stored data securely
 */
export const clearStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
    auditLog.log('STORAGE_CLEARED')
  } catch (error) {
    console.error('Failed to clear storage:', error)
  }
}

/**
 * Get storage usage statistics
 */
export const getStorageStats = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    
    return {
      size: new Blob([stored]).size,
      lastModified: JSON.parse(decryptData(stored)).timestamp,
      version: JSON.parse(decryptData(stored)).version
    }
  } catch {
    return null
  }
}