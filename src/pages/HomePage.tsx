import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Pricing from '../sections/Pricing'
import PricingTable from '../sections/PricingTable'
import Examples from '../sections/Examples'
import TestimonialBuilder from '../components/TestimonialBuilder'
import ConversionChart from '../components/ConversionChart'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { createCheckoutSession } from '../lib/stripe'
import { enforceHTTPS, auditLog } from '../lib/security'
import { setUserFlag } from '../lib/userFlags'

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
    setUserFlag('visitedBuilder', true)
    // Scroll to builder section with more delay to ensure component is rendered
    setTimeout(() => {
      document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        isPaid={isPaid}
        onUpgrade={handleUpgrade}
        isUpgrading={isUpgrading}
      />
      
      <Hero onGetStarted={handleGetStarted} />
      
      <Features />
      
      <Pricing 
        onUpgrade={handleUpgrade}
        isUpgrading={isUpgrading}
        isPaid={isPaid}
      />
      
      <PricingTable />
      
      <Examples onGetStarted={handleGetStarted} />
      
      <ConversionChart onGetStarted={handleGetStarted} />
      
      {(showBuilder || isPaid) && (
        <TestimonialBuilder scrollToBuilder={showBuilder && !isPaid} />
      )}
      
      <Footer />
      
      <CookieBanner />
    </div>
  )
}

export default HomePage