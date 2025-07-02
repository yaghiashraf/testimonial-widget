import { useState, useEffect } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import PricingSection from '../components/PricingSection'
import ExamplesSection from '../components/ExamplesSection'
import TestimonialBuilder from '../components/TestimonialBuilder'
import Footer from '../components/Footer'
import { createCheckoutSession } from '../lib/stripe'
import { enforceHTTPS, auditLog } from '../lib/security'

const HomePage: React.FC = () => {
  const [isPaid, setIsPaid] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)
  const [showBuilder, setShowBuilder] = useState(false)

  useEffect(() => {
    // Enforce HTTPS in production
    enforceHTTPS()
    
    // Initialize security audit
    auditLog.log('APP_INITIALIZED', { 
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      url: window.location.href
    })
    
    setIsPaid(localStorage.getItem('paid') === 'true')
  }, [])

  const handleUpgrade = async () => {
    setIsUpgrading(true)
    try {
      await createCheckoutSession()
    } catch (error) {
      console.error('Failed to create checkout session:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsUpgrading(false)
    }
  }

  const handleGetStarted = () => {
    setShowBuilder(true)
    // Scroll to builder section
    setTimeout(() => {
      document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        isPaid={isPaid}
        onUpgrade={handleUpgrade}
        isUpgrading={isUpgrading}
      />
      
      <HeroSection 
        onGetStarted={handleGetStarted}
        onUpgrade={handleUpgrade}
        isPaid={isPaid}
        isUpgrading={isUpgrading}
      />
      
      <FeaturesSection />
      
      <PricingSection 
        onUpgrade={handleUpgrade}
        isUpgrading={isUpgrading}
        isPaid={isPaid}
      />
      
      <ExamplesSection />
      
      {(showBuilder || isPaid) && (
        <TestimonialBuilder scrollToBuilder={showBuilder && !isPaid} />
      )}
      
      <Footer />
    </div>
  )
}

export default HomePage