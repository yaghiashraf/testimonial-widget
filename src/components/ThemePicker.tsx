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
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold text-white">Theme & Styling</h2>
        <p className="text-gray-400 text-sm">Customize colors and typography to match your brand</p>
      </div>

      <div className="space-y-6">
        {/* Color Picker */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-4">
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm6-11a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm6 7a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3z" clipRule="evenodd" />
              </svg>
              <span>Brand Colors</span>
            </span>
          </label>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {presetColors.slice(0, isPaid ? presetColors.length : 1).map(color => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.value)}
                className={`group relative w-14 h-14 rounded-xl border-2 transition-all duration-300 transform hover:scale-110 ${
                  theme.primaryColor === color.value
                    ? 'border-white scale-110 shadow-lg shadow-white/25'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
                aria-label={`Select ${color.name} color`}
              >
                {theme.primaryColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {color.name}
                </div>
              </button>
            ))}
          </div>
          
          {!isPaid && (
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-4 mb-6 hover:shadow-[0_0_8px_theme('colors.purple.500')] transition-all duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-300">Unlock All Colors</p>
                  <p className="text-xs text-purple-400">Upgrade to access 8 beautiful themes + custom colors</p>
                </div>
              </div>
            </div>
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
          <label className="block text-sm font-semibold text-gray-200 mb-4">
            <span className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span>Typography</span>
              </span>
              <span className="text-green-400 font-mono text-sm">{theme.fontSize}px</span>
            </span>
          </label>
          <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-medium">Small</span>
              <div className="flex-1 relative">
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={theme.fontSize}
                  onChange={e => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${theme.primaryColor} 0%, ${theme.primaryColor} ${
                      ((theme.fontSize - 12) / (24 - 12)) * 100
                    }%, #374151 ${((theme.fontSize - 12) / (24 - 12)) * 100}%, #374151 100%)`,
                  }}
                />
                <div 
                  className="absolute w-4 h-4 bg-white rounded-full shadow-lg -mt-1 pointer-events-none"
                  style={{
                    left: `${((theme.fontSize - 12) / (24 - 12)) * 100}%`,
                    transform: 'translateX(-50%)'
                  }}
                />
              </div>
              <span className="text-sm text-gray-400 font-medium">Large</span>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl" />
          <div className="relative border border-gray-600/50 rounded-xl p-6 bg-gray-800/30 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center space-x-2">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>Live Preview</span>
            </h3>
            <div 
              className="p-6 rounded-xl text-center transition-all duration-300 border-2"
              style={{ 
                backgroundColor: `${theme.primaryColor}15`,
                borderColor: `${theme.primaryColor}40`,
                fontSize: `${theme.fontSize}px`,
              }}
            >
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-3" style={{ color: theme.primaryColor }}>
                "This product transformed our business!"
              </blockquote>
              <cite className="text-gray-300 text-sm font-medium">- Sarah Johnson</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemePicker