import { WidgetConfig } from '../types'

const STORAGE_KEY = 'testimonial-widget-config'

/**
 * Load widget configuration from localStorage
 */
export const loadFromStorage = (): WidgetConfig | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error('Failed to load from storage:', error)
    return null
  }
}

/**
 * Save widget configuration to localStorage
 */
export const saveToStorage = (config: WidgetConfig): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
  } catch (error) {
    console.error('Failed to save to storage:', error)
  }
}

/**
 * Clear all stored data
 */
export const clearStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear storage:', error)
  }
}