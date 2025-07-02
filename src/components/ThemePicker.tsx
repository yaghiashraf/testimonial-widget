import React from 'react'
import { Theme } from '../types'

interface ThemePickerProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  isPaid: boolean
}

/**
 * Theme customization component for color and typography settings
 */
const ThemePicker: React.FC<ThemePickerProps> = ({ theme, onThemeChange, isPaid }) => {
  const presetColors = [
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Orange', value: '#F59E0B' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Teal', value: '#14B8A6' },
  ]

  const handleColorChange = (color: string) => {
    onThemeChange({ ...theme, primaryColor: color })
  }

  const handleFontSizeChange = (fontSize: number) => {
    onThemeChange({ ...theme, fontSize })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Theme Customization</h2>

      <div className="space-y-6">
        {/* Color Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Primary Color
          </label>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {presetColors.slice(0, isPaid ? presetColors.length : 1).map(color => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.value)}
                className={`w-12 h-12 rounded-lg border-2 transition-all ${
                  theme.primaryColor === color.value
                    ? 'border-white scale-110'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
          
          {!isPaid && (
            <p className="text-sm text-gray-400">
              Upgrade to unlock all color themes
            </p>
          )}

          {/* Custom Color Input */}
          {isPaid && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Custom Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={theme.primaryColor}
                  onChange={e => handleColorChange(e.target.value)}
                  className="w-12 h-12 rounded border border-gray-600 bg-transparent cursor-pointer"
                />
                <input
                  type="text"
                  value={theme.primaryColor}
                  onChange={e => handleColorChange(e.target.value)}
                  className="input-field flex-1 font-mono text-sm"
                  placeholder="#3B82F6"
                />
              </div>
            </div>
          )}
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Font Size: {theme.fontSize}px
          </label>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Small</span>
            <input
              type="range"
              min="12"
              max="24"
              value={theme.fontSize}
              onChange={e => handleFontSizeChange(parseInt(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, ${theme.primaryColor} 0%, ${theme.primaryColor} ${
                  ((theme.fontSize - 12) / (24 - 12)) * 100
                }%, #374151 ${((theme.fontSize - 12) / (24 - 12)) * 100}%, #374151 100%)`,
              }}
            />
            <span className="text-sm text-gray-400">Large</span>
          </div>
        </div>

        {/* Preview */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Preview</h3>
          <div 
            className="p-4 rounded-lg text-center"
            style={{ 
              backgroundColor: `${theme.primaryColor}20`,
              borderColor: theme.primaryColor,
              borderWidth: '1px',
              fontSize: `${theme.fontSize}px`,
            }}
          >
            <p style={{ color: theme.primaryColor }}>
              "This is how your testimonials will look!"
            </p>
            <p className="text-gray-300 text-sm mt-2">- Sample Author</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemePicker