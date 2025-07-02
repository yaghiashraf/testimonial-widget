import { useState, useEffect } from 'react'

interface HeaderProps {
  isPaid: boolean
  onUpgrade: () => void
  isUpgrading: boolean
}

const Header: React.FC<HeaderProps> = ({ isPaid, onUpgrade, isUpgrading }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="TestimonialCraft" className="h-8 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            {!isPaid ? (
              <button
                onClick={onUpgrade}
                disabled={isUpgrading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isUpgrading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Upgrade to Pro'
                )}
              </button>
            ) : (
              <div className="flex items-center space-x-2 bg-green-900/30 border border-green-700 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-300 text-sm font-medium">Pro Active</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header