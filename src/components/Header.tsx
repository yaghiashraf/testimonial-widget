import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { shouldShowUpgradeButton } from '../lib/userFlags'

interface HeaderProps {
  isPaid: boolean
  onUpgrade: () => void
  isUpgrading: boolean
}

const Header: React.FC<HeaderProps> = ({ isPaid, onUpgrade, isUpgrading }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    setShowUpgrade(shouldShowUpgradeButton())
  }, [isPaid])

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/logo.svg" alt="TestimonialCraft" className="h-24 w-auto hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pricing
                </a>
                <a 
                  href="#examples" 
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Examples
                </a>
              </>
            ) : (
              <Link 
                to="/" 
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </Link>
            )}
            
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                location.pathname === '/about' 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className={`transition-colors font-medium ${
                location.pathname === '/faq' 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {showUpgrade && !isPaid ? (
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

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 bg-gray-800/95 backdrop-blur-lg border-t border-gray-700/50 mt-4 rounded-lg">
            <nav className="space-y-4">
              {isHomePage ? (
                <>
                  <a 
                    href="#features" 
                    className="block text-gray-300 hover:text-blue-400 transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Features
                  </a>
                  <a 
                    href="#pricing" 
                    className="block text-gray-300 hover:text-blue-400 transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Pricing
                  </a>
                  <a 
                    href="#examples" 
                    className="block text-gray-300 hover:text-blue-400 transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Examples
                  </a>
                </>
              ) : (
                <Link 
                  to="/" 
                  className="block text-gray-300 hover:text-blue-400 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              
              <Link 
                to="/about" 
                className={`block transition-colors font-medium py-2 ${
                  location.pathname === '/about' 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className={`block transition-colors font-medium py-2 ${
                  location.pathname === '/faq' 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700/50">
                {showUpgrade && !isPaid ? (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      onUpgrade()
                    }}
                    disabled={isUpgrading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
                  >
                    {isUpgrading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Upgrade to Pro'
                    )}
                  </button>
                ) : (
                  <div className="flex items-center justify-center space-x-2 bg-green-900/30 border border-green-700 px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-300 text-sm font-medium">Pro Active</span>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header