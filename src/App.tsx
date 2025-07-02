import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

/**
 * Main application component with routing
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  )
}

export default App