import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TestimonialBuilder from './components/TestimonialBuilder'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

/**
 * Main application component with routing
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<TestimonialBuilder />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  )
}

export default App